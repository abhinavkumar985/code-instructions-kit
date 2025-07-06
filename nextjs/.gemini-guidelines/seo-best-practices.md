# SEO Best Practices

Follow these guidelines to ensure all pages are optimized for search engines.

## ✅ **Instructions**

1.  **Metadata API**: Use the built-in Metadata API to manage `title` and
    `description` for each page. Define a `metadata` object in `layout.tsx` or
    `page.tsx`.

    ```typescript
    // /app/products/[id]/page.tsx
    import { Metadata } from 'next';

    export const metadata: Metadata = {
      title: 'Product Name',
      description: 'Details about the product.',
    };

    export default function ProductPage() {
      // ...
    }
    ```

2.  **Dynamic Metadata**: For dynamic pages, use the `generateMetadata` function
    to fetch data and create metadata.

    ```typescript
    // /app/products/[id]/page.tsx
    import { Metadata } from 'next';

    type Props = {
      params: { id: string };
    };

    export async function generateMetadata({
      params,
    }: Props): Promise<Metadata> {
      const product = await getProduct(params.id);
      return {
        title: product.name,
        description: product.description,
      };
    }
    ```

3.  **Open Graph & Twitter**: Include Open Graph and Twitter metadata to improve
    social sharing.

    ```typescript
    export const metadata: Metadata = {
      title: 'My Page',
      openGraph: {
        title: 'My Page',
        description: 'An amazing page.',
        images: ['/og-image.png'],
      },
      twitter: {
        card: 'summary_large_image',
      },
    };
    ```

4.  **`sitemap.ts`**: Create a `sitemap.ts` file in the `/app` directory to
    automatically generate a `sitemap.xml` file.
