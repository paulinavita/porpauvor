import Image from "next/image";
import { getPages } from "@/lib/utils/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const extractImages = (pages: []) => {
  return pages
    .map((page: PageObjectResponse) => {
      const imageProperty = page.properties.image;
      if (
        imageProperty &&
        "files" in imageProperty &&
        imageProperty.files?.length > 0
      ) {
        const file = imageProperty.files[0];
        if ("file" in file) {
          return file.file.url;
        }
        return null;
      }
      return null;
    })
    .filter((url) => url !== null); // Remove null values
};

export default async function Photoblog() {
  const notionData = await getPages(); // Fetch Notion data

  // @ts-expect-error expect missing definition from notion api, tbu
  const images = extractImages(notionData.results || []);

  // Organise images into 3 columns for grid layout
  const columns = [[], [], []]; // 3 columns for lg screens
  images.forEach((src, index) => {
    // @ts-expect-error expect missing definition from notion api, tbu
    columns[index % 3].push(src); // Distribute images across columns
  });

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {columns.map((columnImages, columnIdx) => (
          <div key={columnIdx} className="flex flex-col gap-4">
            {columnImages.map((src, imageIdx) => (
              <div key={`${columnIdx}-${imageIdx}`} className="w-full">
                <div className="aspect-auto">
                  <Image
                    src={src}
                    alt={`Gallery Image ${columnIdx}-${imageIdx}`}
                    width={500}
                    height={300}
                    className="w-full object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 
                         (max-width: 1024px) 50vw, 
                         33vw"
                    priority={imageIdx === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
