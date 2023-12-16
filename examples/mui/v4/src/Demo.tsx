import {useCallback, useMemo, useState} from "react";
import {Button, Container, CssBaseline} from "@material-ui/core";
import {createTheme, ThemeProvider,} from "@material-ui/core/styles";

import CustomInput from "./CustomInput";

const Demo = () => {
    const [type, setType] = useState("dark");

    const theme = useMemo(() => createTheme({palette: {type: type as any}}), [type]);

    const handleThemeChange = useCallback(() => setType(type === "dark" ? "light" : "dark"), [type]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container>
                <div style={{display: "flex", alignItems: "flex-end", gap: 20}}>
                    <CustomInput variant="filled"/>
                    <CustomInput variant="standard"/>
                    <CustomInput variant="outlined"/>
                </div>
                <Button onClick={handleThemeChange}>
                    Change Theme
                </Button>
            </Container>
        </ThemeProvider>
    );
}

export default Demo;
