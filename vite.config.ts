import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // resolve: {
  //   alias: [
  //     {
  //       find: "../font",
  //       replacement: path.resolve(__dirname, "/public/fonts/Montserrat"), // replace this path with your actual path
  //     },
  //   ],
  // },
})
