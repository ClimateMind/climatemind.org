/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require("path")
 const fs = require("fs")

 exports.onPreInit = () => {
   if (process.argv[2] === "build") {
     fs.rmdirSync(path.join(__dirname, "docs"), { recursive: true })
     fs.renameSync(
       path.join(__dirname, "public"),
       path.join(__dirname, "public_dev")
     )
   }
 }

 exports.onPostBuild = () => {
   fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "docs"))
   fs.renameSync(
     path.join(__dirname, "public_dev"),
     path.join(__dirname, "public")
   )
 }
