<script lang="ts">
  export let name: string;

  let classes: string | undefined = undefined;
  export { classes as class };
</script>

<img src="/assets/icons/{name}.svg" alt="{name} icon" class={classes} />
