<script>
  export let title
  export let detail = 'Some kind of detail'
</script>

{#if title}
  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt class="text-sm leading-5 font-medium text-gray-500">{title}</dt>
    <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
      {detail}
    </dd>
  </div>
{:else}
  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
    <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
      {detail}
    </dd>
  </div>
{/if}
