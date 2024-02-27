"use strict";
r.r(t), r.d(t, {
  default: function() {
    return p
  }
}), r("222007");
var a = r("37983"),
  n = r("884691"),
  i = r("414456"),
  o = r.n(i),
  l = r("446674"),
  s = r("77078"),
  c = r("220462"),
  d = r("676574"),
  u = r("89447"),
  h = r("699412");

function p(e) {
  let {
    devSettingsCategory: t
  } = e, r = (0, l.useStateFromStores)([d.default], () => d.default.allByCategory(t), [t], l.statesWillNeverBeEqual), i = n.useMemo(() => r.map(e => {
    let [t, r, {
      label: n
    }] = e;
    return (0, a.jsx)(s.FormSwitch, {
      value: r,
      onChange: e => (0, c.toggle)(t, e),
      hideBorder: !0,
      className: u.switch,
      children: n
    }, t)
  }), [r]);
  return (0, a.jsx)("div", {
    className: o(h.panel, u.panel),
    children: i
  })
}