"use strict";
t.r(r), t.d(r, {
  default: function() {
    return m
  }
}), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  o = t("442837"),
  c = t("481060"),
  s = t("98357"),
  d = t("432877"),
  u = t("817634"),
  h = t("893048");

function m(e) {
  let {
    devSettingsCategory: r
  } = e, t = (0, o.useStateFromStores)([d.default], () => d.default.allByCategory(r), [r], o.statesWillNeverBeEqual), l = i.useMemo(() => t.map(e => {
    let [r, t, {
      label: i
    }] = e;
    return (0, a.jsx)(c.FormSwitch, {
      value: t,
      onChange: e => (0, s.toggle)(r, e),
      hideBorder: !0,
      className: u.switch,
      children: i
    }, r)
  }), [t]);
  return (0, a.jsx)("div", {
    className: n()(h.panel, u.panel),
    children: l
  })
}