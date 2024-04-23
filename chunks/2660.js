"use strict";
n.r(t);
var s = n("735250");
n("470079");
var l = n("442837"),
  a = n("481060"),
  i = n("204418"),
  r = n("594174"),
  o = n("113434"),
  u = n("182294"),
  d = n("959343");
t.default = e => {
  let {
    questConfig: t,
    fallback: n,
    isFocused: c
  } = e, f = (0, l.useStateFromStores)([r.default], () => r.default.getCurrentUser()), {
    avatarDecoration: E,
    isFetching: _
  } = (0, o.useQuestCollectibles)(t);
  return _ ? (0, s.jsx)("div", {
    className: d.questsCollectibleReward,
    children: (0, s.jsx)(a.Spinner, {})
  }) : null == f || null == E ? n : (0, s.jsx)("div", {
    className: d.questsCollectibleReward,
    children: (0, s.jsx)(i.default, {
      avatarSize: u.AvatarSizes.SIZE_80,
      user: f,
      guildId: null,
      avatarDecorationOverride: E,
      animateOnHover: !c
    })
  })
}