import { CatalogItem, catalogItemsArray } from "../utils/models/stores";
import CatalogCard from "./CatalogCard";
import { ImageProps } from "../utils/models/stores";


const Index = () => {
  // Sample data for the catalog
  const catalogItems: CatalogItem[] = catalogItemsArray;

  return (
<div
  className="min-h-screen bg-gray-900 font-sans p-4 sm:p-6 lg:p-8 flex flex-col items-center"
>
    {/* style={{ backgroundImage: `url(${ImageProps.shoftAfrica})`, backgroundSize: 'cover', backgroundPosition: 'center' }} */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
       Welcome to Shoft Africa's Software Catalogue
      </h1>

      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-6">
          {catalogItems.map(item => (
            <CatalogCard key={item.id} item={item} />
          ))}
        </div>
      </div>
        <footer className="text-center text-gray-500 mt-12 text-sm">
        <p>&copy; {new Date().getFullYear()} Shoft Africa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;