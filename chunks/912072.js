"use strict";
r.r(t), r.d(t, {
  default: function() {
    return p
  }
}), r("47120");
var a = r("735250"),
  n = r("470079"),
  i = r("120356"),
  o = r.n(i),
  l = r("442837"),
  s = r("481060"),
  c = r("98357"),
  d = r("432877"),
  u = r("178863"),
  h = r("779869");

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
    className: o()(h.panel, u.panel),
    children: i
  })
}