import React from 'react'

const Table = ({children}:{children:React.ReactElement}) => {
  return (
    <table className="min-w-full mt-10 bg-white shadow-md rounded-lg overflow-hidden text-center">
      {children}
    </table>
  );
}

export default Table

