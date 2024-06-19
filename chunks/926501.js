t.d(s, {
  p: function() {
    return a
  }
});
let n = (0, t(818083).B)({
  kind: "user",
  id: "2024-05_marketing_page_hero_header_v2",
  label: "Marketing page hero header v2",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Variant 1",
    config: {
      enabled: !0
    }
  }]
});

function a(e) {
  let {
    location: s
  } = e, {
    enabled: t
  } = n.useExperiment({
    location: s
  });
  return t
}