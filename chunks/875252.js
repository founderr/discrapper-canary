t.d(n, {
  H: function() {
    return c
  }
});
var i = t(735250);
t(470079);
var l = t(442837),
  a = t(481060),
  r = t(378298),
  u = t(359119),
  s = t(832239),
  o = t(594174),
  d = t(689938);

function c(e) {
  let n = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
    t = (0, l.e7)([u.ZP], () => u.ZP.getChannelSafetyWarnings(e.id));
  return (null == n ? void 0 : n.isStaff()) !== !0 || null == t || 0 === t.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.MenuItem, {
      id: "delete-safety-warnings",
      label: d.Z.Messages.SAFETY_WARNINGS_DELETE,
      action: () => (0, s.Vp)(e.id)
    }), (0, i.jsx)(a.MenuItem, {
      id: "clear-safety-warnings",
      label: d.Z.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
      action: () => (0, r.wS)(e.id)
    })]
  })
}