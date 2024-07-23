i.d(n, {
  Z: function() {
return u;
  }
}), i(47120);
var t = i(735250);
i(470079);
var l = i(442837),
  s = i(481060),
  o = i(699516),
  a = i(689938);

function u(e) {
  let {
user: n,
onAction: u
  } = e, d = n.id, [r, c] = (0, l.Wu)([o.Z], () => {
var e;
return [
  o.Z.isFriend(d),
  null !== (e = o.Z.getNickname(d)) && void 0 !== e ? e : null
];
  }, [d]);
  if (!r)
return null;
  let Z = null == c ? a.Z.Messages.ADD_FRIEND_NICKNAME : a.Z.Messages.CHANGE_FRIEND_NICKNAME;
  return (0, t.jsx)(s.MenuItem, {
id: null == c ? 'add-friend-nickname' : 'edit-friend-nickname',
label: Z,
action: () => {
  null == u || u(), (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await i.e('25070').then(i.bind(i, 670794));
    return i => (0, t.jsx)(e, {
      user: n,
      nickname: c,
      ...i
    });
  });
}
  });
}