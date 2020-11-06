<script>
  import PageContentHeader from './PageContentHeader.svelte'
  import Summary from '../Summary/Summary.svelte'

  export let selected = {
    component: Summary,
    content: 'Summary Thing',
  }
</script>

<PageContentHeader content={selected.content} />
<main>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <!-- Replace with your content -->
    <svelte:component this={selected.component} />
    <!-- /End replace -->
  </div>
</main>
