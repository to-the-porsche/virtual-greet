import React, { useEffect, useState } from 'react';

const WithClient = (component) => {
    const Component = component;
    const C = (props) => {
        const [mount, setMount] = useState(false);

        useEffect(() => {
            setMount(true);
        }, []);

        if (!mount) return null;

        return <Component {...props} />;
    };

    return C;
};

export default WithClient;
