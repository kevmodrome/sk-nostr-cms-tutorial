<script lang="ts">
    import Summary from './Summary.svelte'
	export let data;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta name="description" content={data.meta.description} />
</svelte:head>

<h1>My blog</h1>

<ul class="grid gap-7 p-8">
	{#each data.articles as article}
		<li>
			<Summary {article} />
		</li>
	{/each}
</ul>