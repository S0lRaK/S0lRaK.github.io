import React from "react"
import textCutoutStyles from "./text-cutout.module.css"

export default function TextCutout(props) {
  return <p className={textCutoutStyles.text}>{props.text}</p>
}
