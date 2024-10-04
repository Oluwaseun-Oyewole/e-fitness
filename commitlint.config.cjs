// commitlint.config.cjs
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["fix", "feat"]], // Only allow 'fix' and 'feat'
    "subject-case": [
      2,
      "always",
      ["sentence-case"], // Enforce the subject starts with a capital letter
    ],
  },
}
