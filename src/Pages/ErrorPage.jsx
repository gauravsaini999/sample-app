import * as React from 'react'
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <h6>Sorry, an unexpected error has occurred.</h6>
            <h4>
                <i>{error.statusText || error.message}</i>
            </h4>
        </div>
    );
}