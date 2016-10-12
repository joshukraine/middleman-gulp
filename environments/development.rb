# https://middlemanapp.com/basics/upgrade-v4/#environments-and-changes-to-configure-blocks

activate :external_pipeline,
  name: :gulp,
  command: "npm run development",
  source: ".tmp",
  latency: 1
