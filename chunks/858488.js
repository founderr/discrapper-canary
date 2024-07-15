l.d(n, {
  Z: function() {
return u;
  }
}), l(47120);
var t = l(735250);
l(470079);
var i = l(442837),
  r = l(481060),
  a = l(699516),
  s = l(689938);

function u(e) {
  let {
user: n,
onAction: u
  } = e, o = n.id, [d, c] = (0, i.Wu)([a.Z], () => {
var e;
return [
  a.Z.isFriend(o),
  null !== (e = a.Z.getNickname(o)) && void 0 !== e ? e : null
];
  }, [o]);
  if (!d)
return null;
  let Z = null == c ? s.Z.Messages.ADD_FRIEND_NICKNAME : s.Z.Messages.CHANGE_FRIEND_NICKNAME;
  return (0, t.jsx)(r.MenuItem, {
id: null == c ? 'add-friend-nickname' : 'edit-friend-nickname',
label: Z,
action: () => {
  null == u || u(), (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await l.e('25070').then(l.bind(l, 670794));
    return l => (0, t.jsx)(e, {
      user: n,
      nickname: c,
      ...l
    });
  });
}
  });
}