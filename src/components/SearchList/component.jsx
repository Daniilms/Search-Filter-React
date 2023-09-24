import "./style.css";

function SearchList({ words, searchArray }) {
  const listItems = words.map((word, id) => (
    <li key={id} className="main-words">
      {word}
    </li>
  ));

  return (
    <ul className="main-words-list flex-modifier">
      {searchArray.length > 0
        ? searchArray.map((word, id) => (
            <li className="main-words" key={id}>
              {word}
            </li>
          ))
        : listItems}
    </ul>
  );
}
export default SearchList;
