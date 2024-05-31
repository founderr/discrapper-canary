"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("948789"),
  o = n("844099"),
  u = n("481060"),
  d = n("100527"),
  c = n("252618"),
  f = n("984370"),
  E = n("792125"),
  h = n("709158"),
  _ = n("678935"),
  C = n("563442"),
  m = n("981631"),
  S = n("689938"),
  p = n("233269");
t.default = function(e) {
  let {} = e, t = (0, h.default)(d.default.QUEST_HOME_PAGE);
  s.useEffect(() => {
    !t && (0, r.transitionTo)(m.Routes.FRIENDS)
  }, [t]), s.useEffect(() => {}, []), (0, c.usePageTitle)({
    location: S.default.Messages.QUESTS
  });
  let n = (0, E.getThemeClass)("dark");
  return t ? (0, a.jsxs)("div", {
    className: p.container,
    children: [(0, a.jsxs)(f.default, {
      toolbar: !0,
      transparent: !0,
      className: i()(n),
      children: [(0, a.jsx)(f.default.Icon, {
        icon: o.QuestsIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(f.default.Title, {
        children: S.default.Messages.QUESTS
      }), (0, a.jsx)(f.default.Divider, {})]
    }), (0, a.jsx)(u.ScrollerNone, {
      className: p.scroller,
      fade: !0,
      children: (0, a.jsx)(C.default, {
        children: (0, a.jsx)(_.default, {})
      })
    })]
  }) : null
}