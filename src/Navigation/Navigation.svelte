<script>
	  import { createEventDispatcher } from 'svelte';
    import Education from '../Education/Education.svelte'
    import Summary from '../Summary/Summary.svelte'
    import Position from '../Positions/Position.svelte'
    import Skills from '../Skills/Skills.svelte';

    const dispatch = createEventDispatcher();
    let open = false;
    let active = 'px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
    let notActive = 'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
    let isActive = 'summary'
    function handleClick() {
      open = !open
    }
    function handleClose() {
      open = false
    }
    // Refactor opportunity to use switch case to pass in different data objects.
    function updateNavigation (data) {
        dispatch('updateComponent', data);
    }
    function updateActive(name) {
      isActive = name
    }

</script>
<nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg" alt="Workflow logo">
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <span role="button" on:click={() => {
                updateNavigation({content: 'Summary', component: Summary})
                updateActive('summary')
              }} class="{isActive === 'summary' ? active : notActive}">Summary</span>

              <span role="button" on:click={() => {
                updateNavigation({content: 'Experience', component: Position})
                updateActive('experience')
              }} class="{isActive === 'experience' ? active : notActive}">Experience</span>

              <span role="button" on:click={() => {
                updateNavigation({content: 'Skills', component: Skills})
                updateActive('skills')
              }} class="{isActive === 'skills' ? active : notActive}">Skills</span>

              <span role="button" on:click={() => {
                updateNavigation({content: 'Education', component: Education})
                updateActive('education')
              }} class="{isActive === 'education' ? active : notActive}">Education</span>

            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="Notifications">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <!-- Profile -->
            <div class="ml-3 relative">
              <div>
                <button class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                  <img class="h-8 w-8 rounded-full" src="https://avatars0.githubusercontent.com/u/8486789?s=60&v=4" alt="">
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button ADD ON CLICK HERE-->
          <button on:click={handleClick} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg class="{open ? "hidden h-6 w-6" : "block h-6 w-6"}" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg class={open ? "block h-6 w-6" : "hidden h-6 w-6"} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <!-- Update class to overlay vs pushing content down when opened? -->
    <div class={open ? "block":"hidden md:hidden"}>
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <span on:click={() => {
          updateNavigation({content: 'Summary', component: Summary})
          handleClose()
        }} class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Summary</span>

        <span on:click={() => {
          updateNavigation({content: 'Experience', component: Position})
          handleClose()
        }} class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Experience</span>

        <span on:click={() => {
          updateNavigation({content: 'Skills', component: Skills})
          handleClose()
        }} class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Skills</span>

        <span on:click={() => {
          updateNavigation({content: 'Education', component: Education})
          handleClose()
        }} class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Education</span>

      </div>
    </div>
  </nav>