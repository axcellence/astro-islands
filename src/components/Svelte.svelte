<script>
import { count } from "../store";
</script>

<div class="border-2 border-orange-500 rounded-2xl p-4">
  <h2 class="mb-2 font-semibold text-lg text-orange-900">Svelte</h2>
  <div>Counter: {$count}</div>
  <div class="mt-4 flex gap-2">
    <button
      class="py-1 px-3 rounded-lg border"
      on:click={() => count.set($count + 1)}
    >
      Increment
    </button>
    <button
      class="py-1 px-3 rounded-lg border"
      on:click={() => count.set($count - 1)}
    >
      Decrement
    </button>
  </div>
</div>