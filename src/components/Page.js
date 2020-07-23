import { useEffect } from 'react';
import App from "../App";

const Page = (props) => {
    useEffect(() => {
        document.title = App.title + ' | ' + props.title || App.title;
    }, [props.title]);
    return props.children;
}

export default Page;