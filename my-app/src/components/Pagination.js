import React from 'react';

  const Pagination = () => (
  <Pagination bsSize ='large'>
    <Pagination.First />
    <Pagination.Prev />
    <Pagination.Item active>1</Pagination.Item>
    <Pagination.Item>2</Pagination.Item>
    <Pagination.Item>3</Pagination.Item>
    <Pagination.Item>4</Pagination.Item>
    <Pagination.Next />
    <Pagination.Last />
  </Pagination>
);

  export default Pagination;