n.d(t, {
  e: function() {
    return s
  }
});
let s = (0, n(818083).B)({
  kind: "user",
  id: "2024-05_server_profiles",
  label: "Server Profiles",
  defaultConfig: {
    shouldShowCard: !1,
    canFlipCard: !1
  },
  treatments: [{
    id: 1,
    label: "Can only see the locked card",
    config: {
      shouldShowCard: !0,
      canFlipCard: !1
    }
  }, {
    id: 2,
    label: "Can see the locked card and flip it",
    config: {
      shouldShowCard: !0,
      canFlipCard: !0
    }
  }]
})