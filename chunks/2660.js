var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(204418),
  r = n(594174),
  o = n(113434),
  c = n(182294),
  u = n(227258);
t.Z = e => {
  let {
    questConfig: t,
    fallback: n,
    isFocused: d
  } = e, E = (0, i.e7)([r.default], () => r.default.getCurrentUser()), {
    avatarDecoration: _,
    isFetching: I
  } = (0, o.DU)(t);
  return I ? (0, s.jsx)("div", {
    className: u.questsCollectibleReward,
    children: (0, s.jsx)(l.Spinner, {})
  }) : null == E || null == _ ? n : (0, s.jsx)("div", {
    className: u.questsCollectibleReward,
    children: (0, s.jsx)(a.Z, {
      avatarSize: c.EF.SIZE_56,
      user: E,
      guildId: null,
      avatarDecorationOverride: _,
      animateOnHover: !d
    })
  })
}