"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("37983");
a("884691");
var r = a("77078"),
  i = a("263024"),
  s = a("300322"),
  u = a("49111"),
  l = a("782340");

function o(e) {
  var t, a;
  let o = (0, s.useIsThreadModerator)(e);
  if (!o || e.type !== u.ChannelTypes.PRIVATE_THREAD) return null;
  let d = null === (a = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.invitable) || void 0 === a || a;
  return (0, n.jsx)(r.MenuCheckboxItem, {
    id: "toggle-thread-invitable",
    label: l.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
    checked: d,
    action: () => i.default.setInvitable(e, !d)
  })
}