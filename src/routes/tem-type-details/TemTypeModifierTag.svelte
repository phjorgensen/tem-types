<script lang="ts">
  import Icon from "../../components/Icon.svelte";

  export let direction: "deal" | "take";
  export let modifier: "2x" | "1/2x";

  function getBgColour() {
    if (direction === "deal" && modifier === "2x") {
      return "bg-green-400";
    } else if (direction === "take" && modifier === "1/2x") {
      return "bg-green-400";
    } else if (direction === "deal" && modifier === "1/2x") {
      return "bg-red-400";
    } else if (direction === "take" && modifier === "2x") {
      return "bg-red-400";
    }
  }
</script>

<div
  class="
    w-20 h-20 relative flex items-center justify-center gap-1 rounded-lg shadow text-lg text-white font-bold
    {getBgColour()}
  "
  title="{direction} {modifier} damage"
>
  <Icon
    name={direction === "deal" ? "sword" : "shield"}
    class="absolute top-1 left-1 opacity-50"
  />
  {modifier}
</div>
