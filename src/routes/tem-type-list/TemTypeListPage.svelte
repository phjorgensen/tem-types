<script lang="ts">
  import { temTypes } from "./list-item/types";
  import { push } from "svelte-spa-router";
  import TemTypeCard from "./list-item/TemTypeCard.svelte";

  function goToTemTypeDetails(id: string): void {
    push(`/${id}/details`);
  }
</script>

<section class="flex flex-col gap-6 p-6">
  <div class="flex items-center justify-center">
    <img src="/tem-types/assets/logo.png" class="w-1/4" alt="temtem logo" />
  </div>

  <ul class="flex flex-col gap-4">
    {#each temTypes as temType}
      <TemTypeCard {temType} on:click={() => goToTemTypeDetails(temType.id)} />
    {/each}
  </ul>
</section>
