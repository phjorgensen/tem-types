<script lang="ts">
  import { routes } from "./routes/routes";
  import Router from "svelte-spa-router";
</script>

<main class="w-full h-full bg-[#FAF5E9]">
  <Router {routes} />
</main>
