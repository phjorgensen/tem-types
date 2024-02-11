<script lang="ts">
  import TemTypeIcon from "../../../components/TemTypeIcon.svelte";
  import type { TemTypeDefinition } from "./types";

  export let temType: TemTypeDefinition;
</script>

<li>
  <button
    class="w-full border rounded-xl shadow"
    style="background-color: {temType.colour};"
    on:click
  >
    <div class="flex items-center justify-between gap-2 pl-4 pr-2 py-2">
      <p class="font-bold">{temType.name}</p>
      <TemTypeIcon icon={temType.icon} />
    </div>
  </button>
</li>
