const decoder = new TextDecoder();
export default async function exec(command: string) {
  const p = Deno.run({
    cmd: command.split(" "),
    stdin: "null",
    stdout: "piped",
    stderr: "piped",
  });
  const stdout = decoder.decode(await p.output());
  const stderr = decoder.decode(await p.stderrOutput());
  const status = await p.status();
  return { status, stderr, stdout };
}
