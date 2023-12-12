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
                stroke: '#fff',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',

                '& .MuiPaginationItem-root': {
                    color: '#fff',
                },
                '& .MuiPaginationItem-page': {
                    '&:hover:not(.Mui-selected):not(:first-of-type), &:focus:not(.Mui-selected):not(:first-of-type)':
                    {
                        color: '#1cb114',
                    },
                },
            }}
        />
    );
};

export default PaginationComponent;