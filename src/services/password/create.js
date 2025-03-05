import chalk from "chalk";
import handle from "./handle.js";

async function cretePassword() {
    console.log(chalk.green("Password"));
    const password = await handle();
    console.log(password);     
}

export default cretePassword;