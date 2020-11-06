<script>
    import SummaryHeader from '../Summary/SummaryHeader.svelte'
    import SkillTag from './SkillTag.svelte'
    import data from '../../data.json'

    const { skills } = data
</script>

<div class="bg-white shadow overflow-hidden sm:rounded-lg mt-2">
    <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
        <SummaryHeader summary={"Technologies I've developed with during my career"}/>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4 flex flex-wrap">
        {#each skills as skill}
            <SkillTag {skill}/>
        {/each}
    </div>
</div>