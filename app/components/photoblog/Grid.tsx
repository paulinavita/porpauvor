import Image from "next/image";
import {
  getPageContent,
  getPageBySlug,
  notionClient,
  getPages,
} from "@/lib/utils/notion";

// Function to extract image URLs from Notion pages
const extractImages = (pages) => {
  return pages
    .map((page) => {
      // Assuming images are in `cover` or a `files` property
      if (page.cover && page.cover.file) {
        return page.cover.file.url;
      } else if (page.cover && page.cover.external) {
        return page.cover.external.url;
      } else if (
        page.properties.image &&
        page.properties.image.files?.length > 0
      ) {
        return page.properties.image.files[0].file.url; // Adjust if multiple files exist
      }
      return null;
    })
    .filter((url) => url !== null); // Remove null values
};

export default async function Photoblog() {
  const notionData = await getPages(); // Fetch Notion data
  const images = extractImages(notionData.results || []); // Extract images

  // Organise images into 3 columns for grid layout
  const columns = [[], [], []]; // 3 columns for lg screens
  images.forEach((src, index) => {
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
