import { compileMDX } from "next-mdx-remote/rsc";

import rehypeSlug from "rehype-slug";
// import Video from "@/app/components/Video";
// import CustomImage from "@/app/components/CustomImage";

interface PostPageProps {
  params: {
    id: string;
  };
}

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { getBlogBySlug } from "~/app/admin/action";

export default async function RemoteMdxPage({ params }: PostPageProps) {
  //no-cache
  // const res = await fetch(`http://localhost:3000/api/blogs/${params.id}`, {
  //   cache: "no-cache",
  // });

  const blog = await getBlogBySlug(params.id);

  if (!blog) {
    return <div>404 - Not found</div>;
  }

  const { frontmatter, content } = await compileMDX<{
    title: string;
    description: string;
    date: string;
    tags: string[];
    published: boolean;
  }>({
    source: blog.content,
    components: {
      // Video,
      // CustomImage,
    },
    options: {
      parseFrontmatter: true,

      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [rehypePrettyCode, { theme: "github-dark" }],
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: ["subheading-anchor"],
                ariaLabel: "Link to section",
              },
            },
          ],
          rehypeSlug,
        ],
      },
    },
  });
  console.log(frontmatter);
  // const markdown = extractMetadata(data.content);

  // console.log(markdown);
  return (
    <div className="mx-auto mt-24 flex max-w-4xl">
      <div className="prose prose-stone prose-invert max-w-none p-4 lg:prose-xl prose-p:text-gray-300  prose-a:text-blue-600 ">
        <article>{content}</article>
      </div>
    </div>
  );
}
