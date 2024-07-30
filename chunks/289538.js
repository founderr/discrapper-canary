s.d(a, {
  D: function() {
return _;
  }
});
var n = s(735250),
  t = s(470079),
  l = s(481060),
  r = s(484459),
  i = s(103575),
  o = s(5192),
  c = s(689938),
  E = s(342948);

function _(e) {
  let {
user: a,
channel: s
  } = e, {
nick: _,
avatar: d
  } = t.useMemo(() => {
let e = null == a ? void 0 : a.getAvatarURL(null == s ? void 0 : s.guild_id, 48, !1);
return {
  nick: o.ZP.getName(null == s ? void 0 : s.guild_id, null == s ? void 0 : s.id, a),
  avatar: e
};
  }, [
a,
s
  ]);
  return (0, n.jsx)(l.Popout, {
preload: () => (0, r.W)(a.id, d),
renderPopout: e => (0, n.jsx)(i.Z, {
  ...e,
  location: 'GameProfileEntry',
  userId: a.id
}),
children: e => (0, n.jsx)('img', {
  className: E.avatar,
  src: d,
  alt: c.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({
    userName: _
  }),
  ...e
})
  });
}