import {IconButton, IconButtonProps} from "@mui/material";
import {FC} from "react";

export const ThumbsNavIconButton: FC<IconButtonProps> = ({children, ...rest}) => {
    return <IconButton size={'small'} style={{backgroundColor: 'white', pointerEvents: 'auto'}} {...rest} >
        {children}
    </IconButton>
}


