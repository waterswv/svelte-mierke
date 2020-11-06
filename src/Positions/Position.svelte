<script>
    import data from '../../data.json';
    import Positions from './Positions.svelte'
    const { positions } = data;
</script>
   
    {#each positions as position}
        <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-2">
          <Positions {position} />
        </div>
    {/each}