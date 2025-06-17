"use client"

import { useEffect } from "react"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Reset scroll position on route change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    router.events.on("routeChangeComplete", handleRouteChange)

    // If the component is unmounted, unsubscribe
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
