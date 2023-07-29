<script lang="ts">
    export let article: Article
</script>

<div class="bg-slate-200 mx-auto rounded-xl py-6 px-6 prose prose-invert hover:scale-105 transition-transform">
    <h2 class="mb-3 font-bold text-lg">{article.title}</h2>
    <div>
        {@html article.summary}
    </div>
</div>