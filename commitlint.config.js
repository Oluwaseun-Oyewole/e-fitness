export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["fix", "feat"]],
    "subject-case": [2, "always", ["sentence-case"]],
  },
}
