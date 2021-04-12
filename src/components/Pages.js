export const Pages = ({ itemPerPage, totalItems, handlePaginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => handlePaginate(number)}
              className="ui primary button">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pages;
