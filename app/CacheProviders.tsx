"use client";

import { PropsWithChildren, useEffect, useState } from "react";

/**
 * ClientMode container ensure children are only rendered on the client side
 * to avoid hydration errors
 */
export function ClientMode({ children }: PropsWithChildren) {
    const [isClient, setIsClient] = useState(false);
    
    const hydrate = () => {

        setIsClient(true);
    }
    useEffect(() => {
      hydrate()
    }, []);

    return isClient ? <>{children}</> : null;
}
