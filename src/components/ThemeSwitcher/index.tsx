import React, {useContext} from 'react';

import { ThemeContext } from 'styled-components';

import * as ThemeSwitcher from './styled';

import Switcher from 'react-switch';

type props = {
    toogleTheme: () => void
}

export default ({toogleTheme}: props) => {

    const {colors, title, background} = useContext(ThemeContext);

    return (
        <ThemeSwitcher.Container>
            <Switcher
                onChange={toogleTheme}
                checked={title === "Dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                width={40}
                height={10}
                handleDiameter={15}
                offColor={colors.secundary}
                onColor={colors.primary}
                offHandleColor={background.primary}
                onHandleColor={colors.secundary}
                activeBoxShadow=" 1px 1px 2px #eee"
                
            />
        </ThemeSwitcher.Container>
    )
}