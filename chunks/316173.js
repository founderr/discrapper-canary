n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(433517),
  c = n(481060),
  u = n(304761),
  d = n(865427),
  E = n(820254),
  h = n(689938),
  _ = n(184376);
let I = "isHideDevBanner";
t.Z = () => {
  var e;
  let [t, n] = (0, s.useState)((null === (e = o.K.get(I, "false")) || void 0 === e ? void 0 : e.toString()) === "true"), l = (0, r.e7)([u.C], () => {
    var e;
    return (0, d.fD)() ? null === (e = u.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
  });
  if (t) return null;
  let m = () => {
      o.K.set(I, !0), n(!0)
    },
    g = () => (0, i.jsx)(c.Clickable, {
      onClick: m,
      className: _.closeButton,
      "aria-label": h.Z.Messages.DISMISS,
      children: (0, i.jsx)(c.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: _.closeIcon
      })
    });
  return null != l ? (0, i.jsxs)("div", {
    className: a()(_.devBanner, _.buildOverride),
    children: [(0, i.jsx)(E.Z, {
      className: _.icon
    }), h.Z.Messages.BUILD_OVERRIDE, (0, i.jsx)(g, {})]
  }) : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, i.jsxs)("div", {
    className: a()(_.devBanner, _.staging),
    children: [(0, i.jsx)(E.Z, {
      className: _.icon
    }), h.Z.Messages.DEV_NOTICE_STAGING.format({
      buildNumber: "304154"
    }), (0, i.jsx)(g, {})]
  }) : null
}