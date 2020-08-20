import React from "react"
import fullPageImageBackgroundStyles from "./full-page-image-background.module.css"

export default function FullPageImageBackground({ children }) {
    return <div className={fullPageImageBackgroundStyles.container}>{children}</div>
}