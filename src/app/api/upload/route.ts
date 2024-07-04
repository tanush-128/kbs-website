// import { NextResponse } from "next/server";
// import path from "path";
// import { writeFile } from "fs/promises";

// export const POST = async (req, res) => {
//   const formData = await req.formData();

//   const file = formData.get("file");
//   if (!file) {
//     return NextResponse.json({ error: "No files received." }, { status: 400 });
//   }

//   const buffer = Buffer.from(await file.arrayBuffer());
//   const filename =  file.name.replaceAll(" ", "_");
//   console.log(filename);
//   try {
//     await writeFile(
//       path.join(process.cwd(), "content/blog/" + filename),
//       buffer
//     );
//     return NextResponse.json({ Message: "Success", status: 201 });
//   } catch (error) {
//     console.log("Error occured ", error);
//     return NextResponse.json({ Message: "Failed", status: 500 });
//   }
// };


import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req: Request, res: Response) => {
  try {
    const formData = await req.formData();

    const file = formData.get("file");
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");
    console.log(filename);
    try {
      await writeFile(
        path.join(process.cwd(), "content/blog", filename),
        buffer
      );
      return NextResponse.json({ message: "Success", status: 201 });
    } catch (error) {
      console.error("Error occurred ", error);
      return NextResponse.json({ message: "Failed", status: 500 });
    }
  } catch (error) {
    console.error("Error occurred while processing the form data: ", error);
    return NextResponse.json({ message: "Failed to process form data", status: 500 });
  }
};
