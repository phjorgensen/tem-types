import TemTypeListPage from "./tem-type-list/TemTypeListPage.svelte";
import TemTypeDetailsPage from "./tem-type-details/TemTypeDetailsPage.svelte";
import NotFoundPage from "./NotFoundPage.svelte";

export const routes = {
  "/": TemTypeListPage,
  "/:id/details": TemTypeDetailsPage,
  "*": NotFoundPage,
};
