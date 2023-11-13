import Item from './item';

const List = (props) => {
  return <>
    <h1>Componente de lista</h1>

    {props.items.map((item) => {
        return <Item item={item} key={item.id} />
    })}
  </>
  }

export default List;