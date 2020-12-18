import Typograpghy from "typography"
// Theme that sets the font for headers (Work Sans) and body (Quattrocento Sans)
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typograpghy(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography