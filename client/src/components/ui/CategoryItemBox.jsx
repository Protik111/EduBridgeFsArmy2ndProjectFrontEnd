import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const CategoryItemBox = styled(Box)((props) => ({
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFFFFF',
    border: '0.3px solid #2FB97B',
    boxShadow: '14px 32px 14px rgba(164, 157, 157, 0.01), 8px 18px 12px rgba(164, 157, 157, 0.05), 4px 8px 9px rgba(164, 157, 157, 0.09), 1px 2px 5px rgba(164, 157, 157, 0.1), 0px 0px 0px rgba(164, 157, 157, 0.1)',
    borderRadius: '5px',
    padding: '5px 20px'
}));