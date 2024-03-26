import "./List.css";
import PropTypes from 'prop-types';

export default function List(props) {
  // const listItem = fruits.map((fruit, index) =>
  // <li key={index}>{fruit.name}&nbsp;<b>({fruit.calories}kcal)</b></li>)

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

  const category = props.category;
  const itemList = props.items;

  const listItem = itemList.map(item => (
    <li key={item.id}>
      {item.name}&nbsp;<b>({item.calories}kcal)</b>
    </li>
  ));

  return(
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItem}</ol>
    </>
  )
}

List.propTypes ={
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number})),
}
List.defaultProps = {
  category: "Category",
  item:[],
}