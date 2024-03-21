// place files you want to import through the `$lib` alias in this folder.
import { writable } from "svelte/store";

export const challengeState = writable({
  isChallengeStarted: false,
  countdown: 5,
  showModal: false,
});
