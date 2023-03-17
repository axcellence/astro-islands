import { createSignal } from "solid-js";
import { useStore } from "@nanostores/solid";
import { count } from "../store";

export default function Solid() {
  const value = useStore(count);

  return (
    <div class="border-2 border-blue-500 rounded-2xl p-4">
      <h2 class="mb-2 font-semibold text-lg text-blue-900">SolidJS</h2>
      <div>Counter: {value}</div>
      <div class="mt-4 flex gap-2">
        <button
          class="py-1 px-3 rounded-lg border"
          onClick={() => count.set(value() + 1)}
        >
          Increment
        </button>
        <button
          class="py-1 px-3 rounded-lg border"
          onClick={() => count.set(value() - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
