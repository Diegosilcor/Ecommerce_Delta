//Importo child
import ItemList from './ItemList';
import Loading from './Loading';

//Importo Custom Hook
import useGetCollection from '../hooks/useGetCollections';

const ItemListContainer = () => {
  const products = useGetCollection();

  return (
    <section className="sectionCenter">
      {!products ? <Loading /> : <ItemList products={products} />}
    </section>
  );
};

export default ItemListContainer;

