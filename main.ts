// make.fun entry metadata: judged-text / developer-excuses / one line under 200 characters.
const entry = {
  format: "makefun-developer-excuse/v1",
  excuse: "All tests passed because I mocked production, and apparently production noticed.",
};

if (entry.excuse.length >= 200 || /[\r\n]/.test(entry.excuse)) {
  throw new Error("Entry must be a single line under 200 characters.");
}

console.log(entry.excuse);
