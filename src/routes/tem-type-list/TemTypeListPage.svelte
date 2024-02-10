<script lang="ts">
  import { temTypes } from "./list-item/types";
  import { push } from "svelte-spa-router";
  import TemTypeCard from "./list-item/TemTypeCard.svelte";
  import PageHeader from "../../components/PageHeader.svelte";

  function goToTemTypeDetails(id: string): void {
    push(`/${id}/details`);
  }
</script>

<section>
  <PageHeader text="TemTypes" />

  <ul class="flex flex-col gap-4 p-6">
    {#each temTypes as temType}
      <TemTypeCard {temType} on:click={() => goToTemTypeDetails(temType.id)} />
    {/each}
  </ul>
</section>
