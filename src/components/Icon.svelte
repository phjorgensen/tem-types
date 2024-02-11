<script lang="ts">
  export let name: string;

  let classes: string | undefined = undefined;
  export { classes as class };
</script>

<img
  src="/tem-types/assets/icons/{name}.svg"
  alt="{name} icon"
  class={classes}
/>
