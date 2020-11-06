<script>
    import data from '../../data.json';

    import PageContentGray from "../_Shared/PageContentGray.svelte";
    import PageContentWhite from "../_Shared/PageContentWhite.svelte";
    import SummaryHeading from './SummaryHeader.svelte';

    const { summary } = data;
</script>

    <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-2">
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <SummaryHeading summary={summary.headline}/>
        </div>
        <div>
          <dl>
            {#each summary.details as detail, index}
                {#if index % 2}
                 <PageContentGray {detail} />
                {:else}
                 <PageContentWhite {detail} />
                {/if}
            {/each}
          </dl>
        </div>
    </div>
      