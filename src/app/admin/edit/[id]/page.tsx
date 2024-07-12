"use client";

import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { getBlog, updateBlog } from "../../action";

const EditorComp = dynamic(
  () => import("~/components/editor/EditorComponent"),
  { ssr: false },
);

const EditBlog = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [tags, setTags] = useState("");
  const [published, setPublished] = useState(false);
  const { data, status } = useSession();

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        const blog = await getBlog(id);

        setTitle(blog?.name || "");
        setDescription(blog?.description || "");
        setDate(blog?.createdAt.toISOString() || "");
        setTags(blog?.tags.join(", ") || "");
        setPublished(blog?.published || false);
        setContent(blog?.content || "");
      };
      fetchBlog();
    }
  }, [id]);

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("name", title);
    formData.append("id", id);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("tags", tags);
    formData.append("published", published.toString());
    formData.append("content", content);
    formData.append("slug", title.replaceAll(" ", "-"));
    formData.append("createdBy", data?.user.id ?? ""); // Replace "user-id" with the actual user ID

    await updateBlog(formData);

    // router.push("/admin");
  };

  return (
    <div className="grid grid-cols-12 gap-12 overflow-y-hidden">
      <div className="sticky top-0 col-span-4 max-h-svh ">
        <h1 className="mb-6 text-3xl font-bold">Edit Blog</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium ">Description</label>
          <textarea
            value={description}
            cols={30}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block h-36 w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium ">
            Tags (comma separated)
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-1 block w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Published</label>
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="mt-1 rounded border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium ">Content</label>
        </div>
        <button
          onClick={handleSave}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Save
        </button>
      </div>
      <div className="col-span-8">
        <Suspense fallback={null}>
          <EditorComp markdown={content} onChange={(e) => setContent(e)} />
        </Suspense>
      </div>
    </div>
  );
};

export default EditBlog;
