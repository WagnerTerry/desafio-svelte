<script lang="ts">
  import { formData } from "../../lib/formData";
</script>

<div class="container px-6 py-10 mx-auto">
  <h1
    class="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 text-center"
  >
    Candidate Information
  </h1>
  <div class="max-w-md mx-auto mb-4">
    <p>Name: {$formData.name}</p>
    <p>Phone: {$formData.phone}</p>
    <p>Email: {$formData.email}</p>
  </div>
  <div class="flex justify-center">
    <a href="/" class="">
      <button
        class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
      >
        Voltar
      </button>
    </a>
  </div>
</div>
