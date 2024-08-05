n.d(t, {
  B: function() {
return _;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(278074),
  s = n(442837),
  o = n(481060),
  l = n(564990),
  u = n(26033),
  c = n(594174),
  d = n(689938);

function _(e) {
  let {
user: t,
entry: n,
display: _,
onClose: E
  } = e, f = (0, s.e7)([c.default], () => c.default.getCurrentUser()), h = t.id === (null == f ? void 0 : f.id), [p, m] = i.useState(!1);
  if (!h || 'live' === _ || null == n)
return null;
  let I = async () => {
m(!0), await (0, l.CV)(n, t.id), m(!1), null == E || E();
  }, T = (0, a.EQ)(n).when(u.dX, () => d.Z.Messages.USER_ACTIVITY_CLEAR_GAME_HISTORY).when(u.r5, () => d.Z.Messages.USER_ACTIVITY_CLEAR_WATCH_HISTORY).when(u.kx, () => d.Z.Messages.USER_ACTIVITY_CLEAR_LISTENING_HISTORY).otherwise(() => null);
  return (0, r.jsx)(o.MenuItem, {
disabled: p,
id: 'delete-entry-history',
label: T,
action: I,
color: 'danger'
  });
}