<script>
  import Prism from "prismjs";

  let markup = `<pre class="language-html"><code>&lt;!-- routes/blog/[slug].svelte --&gt;
&lt;script context="module"&gt;
  import blocksToHtml from "@sanity/block-content-to-html";
  import client from "../../sanityClient";
  import serializers from "../../components/serializers";
  import imageUrlBuilder from "@sanity/image-url";

  const builder = imageUrlBuilder(client);
  const urlFor = source =&gt; builder.image(source);

  export async function preload({ params }) {
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "post" &amp;&amp; slug.current == $slug][0]';

    const query = filter + projection;
    const post = await client
      .fetch(query, { slug })
      .catch(err =&gt; this.error(500, err));
    console.log(post);
    return {
      post: {
        ...post,
        body: blocksToHtml({
          blocks: post.body,
          serializers,
          ...client.clientConfig
        })
      }
    };
  }
&lt;/script&gt;

&lt;script&gt;
  export let post;
&lt;/script&gt;

&lt;style&gt;
  /*
		styles omitted for brevity
	*/
&lt;/style&gt;

&lt;svelte:head&gt;
  &lt;title&gt;{post.title}&lt;/title&gt;
&lt;/svelte:head&gt;

&lt;h1&gt;{post.title}&lt;/h1&gt;

&lt;div class="content"&gt;
  &lt;img
    class="main-image"
    src={urlFor(post.mainImage).url()}
    alt={post.mainImage.alt} /&gt;
  {@html post.body}
&lt;/div&gt;
</code>`;
</script>

<style>

</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Prismjs syntax highlighting</h1>

{@html markup}
