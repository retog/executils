import exec from "./exec.ts";

const r = exec("echo bar baz fooo");

console.log(JSON.stringify(await r, undefined, 2));
