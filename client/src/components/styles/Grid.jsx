import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const GridTemplateColumnCat = styled(Box) ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
    gap: '20px',
    padding: '50px 0',
    justifyContent: 'center'
});