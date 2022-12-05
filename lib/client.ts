import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const client = sanityClient({
  projectId: 'z2sra080',
  dataset: 'production',
  apiVersion: '2022-12-02',
  useCdn: true,
  token: 'skblv60Xj77sk5Jtllg9tCXFUV1tpKYZBpniFyE5djjbD0YX1ocoaQG8GsIaQR6fRuP4eYBCkp1OGqzYrg5qB5c7zrM62BSDSzweKy8Q8cLC4zZsHClSB08z7CTn3PJIg2XMgs7M8sLUdnOC3oNN7CmW72icbb05Q0qA8iZEiLESH0SUkrYO',
});

const builder = imageUrlBuilder(client);

export default client;
export const urlFor = (source: SanityImageSource) => builder.image(source); 