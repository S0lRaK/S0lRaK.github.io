import React from "react"
import fullPageImageBackgroundStyles from "./full-page-image-background.module.css"
import "typeface-permanent-marker"

export default function FullPageImageBackground({ children }) {
    return <div className={fullPageImageBackgroundStyles.container}>{children}</div>
}