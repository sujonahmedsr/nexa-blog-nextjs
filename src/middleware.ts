export { default } from "next-auth/middleware"

// just login and register dekhte parbe authenticate user chara 
export const config = { matcher: ["/((?!api/auth|login|register).*)"] }