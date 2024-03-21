<script lang="ts">
  import { challengeState } from "../lib/challengeState";
  import { formData } from "../lib/formData";
  import { countDownTimer } from "../lib/countDownTimer";

  function startChallenge() {
    if (!$challengeState.isChallengeStarted) {
      console.log("challenge started");
      $challengeState.countdown = 15;

      $challengeState.isChallengeStarted = true;

      $countDownTimer = setInterval(() => {
        $challengeState.countdown--;

        if ($challengeState.countdown === 0) {
          console.log("time is up");

          clearInterval($countDownTimer);
          $challengeState.showModal = true;
          $challengeState.isChallengeStarted = false;
        }
      }, 1000);
    }
  }

  function submitForm() {
    clearInterval($countDownTimer);
    $challengeState.showModal = true;
    $challengeState.isChallengeStarted = false;
    $challengeState.countdown = 15;
  }
</script>

<div class="container px-6 py-10 mx-auto">
  <div class="flex justify-between">
    <h1
      class="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 text-center"
    >
      Challenge
    </h1>
    <a href="/candidate">
      <button
        class="bg-yellow-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        disabled={!$challengeState.isChallengeStarted}
      >
        Candidate
      </button>
    </a>
  </div>
  <form class="max-w-md mx-auto">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name:
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Enter your name"
        bind:value={$formData.name}
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
        Phone:
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phone"
        type="text"
        placeholder="Enter your phone number"
        bind:value={$formData.phone}
      />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email:
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="text"
        placeholder="Enter your email"
        bind:value={$formData.email}
      />
    </div>
  </form>

  <div class="flex justify-center">
    {#if $challengeState.isChallengeStarted}
      <div class="text-center mb-6">
        <p class="text-lg font-bold">
          {Math.floor(
            $challengeState.countdown / 60
          )}:{$challengeState.countdown % 60 < 10
            ? "0" + ($challengeState.countdown % 60)
            : $challengeState.countdown % 60}
        </p>
      </div>
    {/if}
  </div>

  <div class="flex justify-center mb-6">
    {#if $challengeState.isChallengeStarted}
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        on:click={submitForm}
      >
        Enviar
      </button>
    {:else}
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        on:click={startChallenge}
      >
        Iniciar Desafio
      </button>
    {/if}

    {#if $challengeState.showModal}
      <div
        class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50"
        on:click={() => ($challengeState.showModal = false)}
      >
        <div
          class="bg-white p-6 rounded-lg shadow-md relative"
          on:click={(event) => event.stopPropagation()}
        >
          <div class="flex justify-between items-center mb-4">
            <p class="text-lg font-semibold mr-4">
              {$challengeState.countdown === 0
                ? "Desafio finalizado com falha!"
                : "Desafio finalizado com sucesso!"}
            </p>
            <button
              class="text-gray-500 hover:text-gray-700 focus:outline-none"
              on:click={() => ($challengeState.showModal = false)}
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
