<script>
    import { slide } from 'svelte/transition';
    import PageContentGray from "../_Shared/PageContentGray.svelte";
    import PageContentWhite from "../_Shared/PageContentWhite.svelte";
    import PositionHeading from './PositionHeading.svelte';
	let showItems = false;

    export let position

    function handleShow() {
        showItems = !showItems
    }
</script>

   <div on:click={handleShow} class="px-4 py-5 border-b border-gray-200 sm:px-6">
    <PositionHeading  { ...position }/>
  </div>
  <div>
      {#if showItems}
    <dl transition:slide>
        {#each position.details as detail, index}
            {#if index % 2}
            <PageContentGray {detail} />
            {:else}
            <PageContentWhite {detail} />
            {/if}
        {/each}
    </dl>
    {/if}
  </div>