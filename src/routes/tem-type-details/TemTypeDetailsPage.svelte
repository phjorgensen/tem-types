<script lang="ts">
  import { onMount } from "svelte";
  import {
    temTypeById,
    getTemTypeModifiers,
    type TemType,
    type TemTypeDefinition,
  } from "../tem-type-list/list-item/types";
  import PageHeader from "../../components/PageHeader.svelte";
  import TemTypeIcon from "../../components/TemTypeIcon.svelte";
  import TemTypeModifierTag from "./TemTypeModifierTag.svelte";

  export let params: { id: TemType };

  let temType: TemTypeDefinition | undefined;

  onMount(() => {
    temType = temTypeById(params.id);
  });
</script>

{#if temType}
  <section>
    <PageHeader
      text={temType.name}
      icon={temType.icon}
      bgColour={temType.colour}
      backButton
    />

    <div class="grid grid-cols-2 grid-rows-2">
      <div class="flex items-center gap-2 p-2">
        <TemTypeModifierTag direction="deal" modifier="2x" />

        {#each temType.deal.double as dealDouble}
          <TemTypeIcon icon={dealDouble} />
        {/each}
      </div>

      <div class="flex items-center gap-2 p-2">
        <TemTypeModifierTag direction="deal" modifier="1/2x" />

        {#each temType.deal.half as dealHalf}
          <TemTypeIcon icon={dealHalf} />
        {/each}
      </div>

      <div class="flex items-center gap-2 p-2">
        <TemTypeModifierTag direction="take" modifier="2x" />

        {#each temType.take.double as takeDouble}
          <TemTypeIcon icon={takeDouble} />
        {/each}
      </div>

      <div class="flex items-center gap-2 p-2">
        <TemTypeModifierTag direction="take" modifier="1/2x" />

        {#each temType.take.half as takeHalf}
          <TemTypeIcon icon={takeHalf} />
        {/each}
      </div>
    </div>
  </section>
{/if}
