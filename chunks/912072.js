"use strict";
r.r(t), r.d(t, {
  default: function() {
    return m
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("442837"),
  c = r("481060"),
  s = r("98357"),
  d = r("432877"),
  u = r("717544"),
  h = r("277513");

function m(e) {
  let {
    devSettingsCategory: t
  } = e, r = (0, o.useStateFromStores)([d.default], () => d.default.allByCategory(t), [t], o.statesWillNeverBeEqual), l = i.useMemo(() => r.map(e => {
    let [t, r, {
      label: i
    }] = e;
    return (0, a.jsx)(c.FormSwitch, {
      value: r,
      onChange: e => (0, s.toggle)(t, e),
      hideBorder: !0,
      className: u.switch,
      children: i
    }, t)
  }), [r]);
  return (0, a.jsx)("div", {
    className: n()(h.panel, u.panel),
    children: l
  })
}