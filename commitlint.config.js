export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["fix", "feat", "chore", "build", "hotfix"]],
  },
}
