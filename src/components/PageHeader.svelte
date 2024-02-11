<script lang="ts">
  import { pop } from "svelte-spa-router";
  import TemTypeIcon from "./TemTypeIcon.svelte";
  import Icon from "./Icon.svelte";

  export let icon: string | undefined = undefined;
  export let text: string;
  export let bgColour: string | undefined = undefined;
  export let backButton = false;
</script>

<div
  class="flex items-center justify-between gap-4 p-4 shadow"
  style="background-color: {bgColour};"
>
  <div class="flex items-center gap-6">
    {#if backButton}
      <button class="flex items-center gap-2" on:click={pop}>
        <Icon name="chevron-left" />
        <p>Back</p>
      </button>
    {/if}

    {#if icon}
      <TemTypeIcon {icon} />
    {/if}

    <h3>{text}</h3>
  </div>
</div>
