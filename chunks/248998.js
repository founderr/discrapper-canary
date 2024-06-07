"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("913527"),
  r = s.n(i),
  o = s("481060"),
  d = s("55935"),
  u = s("955204"),
  c = s("674680"),
  S = s("83118");

function E(e) {
  let {
    achievementId: t,
    dateUnlocked: s
  } = e, n = (0, u.getPoggermodeAchievementData)(t);
  if (null == n) return null;
  let i = null != s,
    {
      name: E,
      description: T,
      hideDescriptionUntilUnlock: _,
      onAction: I
    } = n,
    N = _ && !i,
    g = i ? "header-primary" : "text-muted",
    f = i ? "header-secondary" : "text-muted",
    m = r()(s),
    C = null != I && i,
    A = C ? o.Clickable : "div";
  return (0, a.jsxs)(A, {
    className: l()(S.container, C && S.actionable),
    onClick: () => {
      C && I()
    },
    children: [(0, a.jsx)("div", {
      className: S.iconContainer,
      children: (0, a.jsx)(c.default, {
        achievementId: t,
        size: c.default.Sizes.SIZE_40,
        unlocked: i
      })
    }), (0, a.jsxs)("div", {
      className: S.nameContainer,
      children: [null != s && (0, a.jsx)(o.Text, {
        variant: "text-xxs/semibold",
        color: "text-muted",
        className: S.unlocked,
        children: (0, d.calendarFormat)(m)
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/medium",
        color: g,
        children: E()
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: f,
        children: N ? "?????" : T()
      })]
    })]
  })
}