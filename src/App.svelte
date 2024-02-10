<script lang="ts">
  import { routes } from "./routes/routes";
  import Router from "svelte-spa-router";
</script>

<main class="w-full h-full bg-gray-400">
  <Router {routes} />
</main>
