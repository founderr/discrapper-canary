"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("948789"),
  i = n("844099"),
  r = n("442837"),
  o = n("150063"),
  u = n("100527"),
  d = n("252618"),
  c = n("984370"),
  f = n("108427"),
  E = n("210887"),
  h = n("792125"),
  _ = n("709158"),
  C = n("981631"),
  m = n("689938"),
  S = n("233269");
t.default = function(e) {
  let {} = e, t = (0, r.useStateFromStores)([E.default], () => E.default.theme), n = (0, _.default)(u.default.QUEST_HOME_PAGE);
  return s.useEffect(() => {
    !n && (0, l.transitionTo)(C.Routes.FRIENDS)
  }, [n]), s.useEffect(() => {
    o.setHomeLink(C.Routes.QUEST_HOME), (0, f.trackAppUIViewed)("quest-home")
  }, []), (0, d.usePageTitle)({
    location: m.default.Messages.QUESTS
  }), (0, a.jsx)("div", {
    className: S.container,
    children: (0, a.jsxs)(c.default, {
      className: (0, h.getThemeClass)(t),
      toolbar: !0,
      children: [(0, a.jsx)(c.default.Icon, {
        icon: i.QuestsIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(c.default.Title, {
        children: m.default.Messages.QUESTS
      }), (0, a.jsx)(c.default.Divider, {})]
    })
  })
}