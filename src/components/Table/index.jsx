const Table = ({ tableColumns, data }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {tableColumns?.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              {tableColumns?.map((col, index) => (
                <td key={index}>{row[col.accessor]}</td>
              ))}
              {/*  {Object.values(row)?.map((value, index) => (
                <td key={index}>{value}</td>
              ))} */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
