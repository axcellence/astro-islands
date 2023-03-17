import { useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { count } from "../store";

export default function Preact() {
  const value = useStore(count);

  return (
    <div class="border-2 border-purple-500 rounded-2xl p-4">
      <h2 class="mb-2 font-semibold text-lg text-purple-900">Preact</h2>
      <div>Counter: {value}</div>
      <div class="mt-4 flex gap-2">
        <button
          class="py-1 px-3 rounded-lg border"
          onClick={() => count.set(value + 1)}
        >
          Increment
        </button>
        <button
          class="py-1 px-3 rounded-lg border"
          onClick={() => count.set(value - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
