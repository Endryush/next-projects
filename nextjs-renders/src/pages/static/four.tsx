import Image from "next/image"
interface Product {
  id: number;
  title: string;
  image: string;
  description?: string;
}

async function fetchProducts(): Promise<Product[]> {
  try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products: Product[] = await response.json();

      return products;
  } catch (error) {
      console.error('Erro ao obter os produtos:', error);
      return [];
  }
}

// convention to explicity use static pages
export async  function getStaticProps () {
  const products = await fetchProducts()  
  return {
    props: {
      products
    } 
  }
}
export default function Four (props: { products: Product[]}) {

  return (
    <div>
      <h1>Static content by endpoint result JSON</h1>
      {props.products.map((product) => (
        <div key={product.id}>
            <Image src={product.image} alt={product.title} width={30} height={30} />
            <p>{product.title}</p>
        </div>
      ))}
    </div>
  )
}