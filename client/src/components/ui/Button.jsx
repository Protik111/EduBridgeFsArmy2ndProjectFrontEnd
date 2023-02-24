import { styled } from "@mui/system";

export const ButtonComp = styled('button')((props) => ({
    background: '#2FB97B',
    borderRadius: '5px',
    width: props.myWidth,
    height: '53px',
    color: '#FFFFFF',
    border: 'none',
    fontFamily: 'Heebo',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '29px'

}));