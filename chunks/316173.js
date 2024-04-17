"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("442837"),
  o = a("433517"),
  u = a("481060"),
  d = a("304761"),
  c = a("865427"),
  f = a("465670"),
  E = a("820254"),
  h = a("689938"),
  _ = a("101111");
let C = "isHideDevBanner";
t.default = () => {
  var e;
  let [t, a] = (0, s.useState)((null === (e = o.Storage.get(C, "false")) || void 0 === e ? void 0 : e.toString()) === "true"), l = (0, r.useStateFromStores)([d.default], () => {
    var e;
    return (0, c.probablyHasBuildOverride)() ? null === (e = d.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
  });
  if (t) return null;
  let m = () => {
      o.Storage.set(C, !0), a(!0)
    },
    S = () => (0, n.jsx)(u.Clickable, {
      onClick: m,
      className: _.closeButton,
      "aria-label": h.default.Messages.DISMISS,
      children: (0, n.jsx)(f.default, {
        className: _.closeIcon
      })
    });
  return null != l ? (0, n.jsxs)("div", {
    className: i()(_.devBanner, _.buildOverride),
    children: [(0, n.jsx)(E.default, {
      className: _.icon
    }), h.default.Messages.BUILD_OVERRIDE, (0, n.jsx)(S, {})]
  }) : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, n.jsxs)("div", {
    className: i()(_.devBanner, _.staging),
    children: [(0, n.jsx)(E.default, {
      className: _.icon
    }), h.default.Messages.DEV_NOTICE_STAGING.format({
      buildNumber: "285364"
    }), (0, n.jsx)(S, {})]
  }) : null
}