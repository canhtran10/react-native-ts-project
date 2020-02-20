//add other navigation functions that you need and export them

import * as React from 'react';

let current: any;

export const navigationRef = React.createRef();

current = navigationRef.current;

export function navigate(name: String, params: any) {
    current?.navigate(name, params);
}
