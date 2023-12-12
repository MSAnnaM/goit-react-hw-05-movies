import { Pagination } from '@mui/material';

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (_, pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      color={'success'}
      sx={{
        color: '#fff',
        stroke: '#9400D3',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
        '& .MuiPaginationItem-root': {
          color: '#fff',
          backgroundColor: '#9400D3',
          '&.Mui-selected': {
            backgroundColor: '#4B0082',
          },
          '&:hover:not(.Mui-selected):not(:first-of-type), &:focus:not(.Mui-selected):not(:first-of-type)':
            {
              color: '#9400D3',
            },
        },
      }}
    />
  );
};

export default PaginationComponent;
