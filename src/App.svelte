
<script>
	import Announcement from './_Shared/Announcement.svelte'
	import Navigation from './Navigation/Navigation.svelte'
	import CurrentPage from './_Shared/CurrentPage.svelte';
	import Summary from './Summary/Summary.svelte'
	let selected = {
		  component: Summary,
		  content: 'Summary'
	  }
	function handleComponent(event) {
	  selected = event.detail
	}
  </script>
  <!-- TO DO: Add Name that is prominent throughout the site -->
  <div>
	<Announcement />
	<Navigation on:updateComponent={handleComponent} />
	<CurrentPage {selected}/>
  </div>
  