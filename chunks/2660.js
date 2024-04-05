"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
  i = n("204418"),
  r = n("594174"),
  o = n("113434"),
  u = n("182294"),
  d = n("959343");
t.default = e => {
  let {
    questConfig: t,
    fallback: n
  } = e, c = (0, a.useStateFromStores)([r.default], () => r.default.getCurrentUser()), {
    avatarDecoration: E,
    isFetching: f
  } = (0, o.useQuestCollectibles)(t);
  return f ? (0, s.jsx)("div", {
    className: d.questsCollectibleReward,
    children: (0, s.jsx)(l.Spinner, {})
  }) : null == c || null == E ? n : (0, s.jsx)("div", {
    className: d.questsCollectibleReward,
    children: (0, s.jsx)(i.default, {
      avatarSize: u.AvatarSizes.SIZE_80,
      user: c,
      avatarDecorationOverride: E
    })
  })
}