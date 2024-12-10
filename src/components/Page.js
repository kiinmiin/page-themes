import React, {useContext} from 'react';
import ThemeContext from '../themes/theme-context';
import Header from './Header'

const Page = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <div id="app" className={theme}>
            <Header />
            <article>
                <h2>React Course</h2>
                <p>
                    A course that teaches you React.
                </p>
            </article>
        </div>
    )
} 

export default Page;