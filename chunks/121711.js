"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("948789"),
  o = n("844099"),
  u = n("481060"),
  d = n("150063"),
  c = n("100527"),
  f = n("252618"),
  E = n("984370"),
  C = n("108427"),
  h = n("792125"),
  _ = n("709158"),
  S = n("678935"),
  m = n("563442"),
  p = n("981631"),
  I = n("689938"),
  g = n("233269");
t.default = function(e) {
  let {} = e, t = (0, _.default)(c.default.QUEST_HOME_PAGE);
  s.useEffect(() => {
    !t && (0, r.transitionTo)(p.Routes.FRIENDS)
  }, [t]), s.useEffect(() => {
    d.setHomeLink(p.Routes.QUEST_HOME), (0, C.trackAppUIViewed)("quest-home")
  }, []), (0, f.usePageTitle)({
    location: I.default.Messages.QUESTS
  });
  let n = (0, h.getThemeClass)("dark");
  return t ? (0, a.jsxs)("div", {
    className: g.container,
    children: [(0, a.jsxs)(E.default, {
      toolbar: !0,
      transparent: !0,
      className: i()(n),
      children: [(0, a.jsx)(E.default.Icon, {
        icon: o.QuestsIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(E.default.Title, {
        children: I.default.Messages.QUESTS
      }), (0, a.jsx)(E.default.Divider, {})]
    }), (0, a.jsx)(u.ScrollerNone, {
      className: g.scroller,
      fade: !0,
      children: (0, a.jsx)(m.default, {
        children: (0, a.jsx)(S.default, {})
      })
    })]
  }) : null
}