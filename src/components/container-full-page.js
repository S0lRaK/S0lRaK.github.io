import React from "react"
import containerFullPageStyles from "./container-full-page.module.css"

export default function ContainerFullPage({ children }) {
    return <div className={containerFullPageStyles.fullPage}>{children}</div>
}