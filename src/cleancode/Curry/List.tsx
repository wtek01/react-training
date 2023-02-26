const List = ({ items }: any) => {
  const handleClick = (item: any) => () => {
    console.log(item);
    window.alert(item);
  };
  return (
    <ul>
      {items.map((item: any) => (
        <li key={item}>
          <span>{item}</span>
          <button onClick={handleClick(item)}>Log</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
