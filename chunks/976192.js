l.d(n, {
  Z: function() {
return R;
  }
});
var t = l(735250),
  i = l(470079),
  r = l(442837),
  a = l(481060),
  s = l(58540),
  u = l(40851),
  o = l(300284),
  d = l(484459),
  c = l(314897),
  Z = l(271383),
  E = l(430824),
  M = l(496675),
  _ = l(594174),
  f = l(981631),
  g = l(689938),
  m = l(504725);

function R(e) {
  let {
guildId: n,
userId: R,
analyticsLocation: I,
analyticsLocations: N,
context: C,
icon: O
  } = e, A = E.Z.getGuild(n), x = c.default.getId(), T = (0, r.e7)([_.default], () => _.default.getUser(R)), v = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, R), [
n,
R
  ]);
  (0, r.e7)([M.Z], () => M.Z.getGuildVersion(n), [n]);
  let h = i.useMemo(() => ({
[n]: [R]
  }), [
n,
R
  ]);
  (0, s.$)(h);
  let S = C === f.IlC.POPOUT,
p = (0, o.Z)({
  guild: A,
  analyticsLocation: I
}),
b = (0, u.Aq)();
  if (null == A || S)
return null;
  let P = x === R && (M.Z.can(f.Plq.CHANGE_NICKNAME, A) || M.Z.can(f.Plq.MANAGE_NICKNAMES, A)),
U = x === R,
j = M.Z.canManageUser(f.Plq.MANAGE_NICKNAMES, R, A);
  if (!(P || j || U) || null == T || v)
return null;
  let L = A.hasFeature(f.oNc.HUB) ? g.Z.Messages.HUB_EDIT_PROFILE : g.Z.Messages.CHANGE_IDENTITY,
D = U ? L : g.Z.Messages.CHANGE_NICKNAME;
  return (0, t.jsx)(a.MenuItem, {
id: 'change-nickname',
label: (0, t.jsx)('div', {
  className: m.labelWrapper,
  children: (0, t.jsx)('span', {
    className: m.label,
    children: D
  })
}),
icon: O,
action: () => {
  U ? ((0, d.Z)(T.id, T.getAvatarURL(n, 80), {
    guildId: n
  }), p(), b.dispatch(f.CkL.POPOUT_CLOSE)) : (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await l.e('17712').then(l.bind(l, 620021));
    return l => (0, t.jsx)(e, {
      ...l,
      guildId: n,
      user: T,
      analyticsSource: I,
      analyticsLocations: N
    });
  });
}
  });
}