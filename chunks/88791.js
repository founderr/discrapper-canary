n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(79390),
  r = n(689938);

function l(e) {
  return null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, a.eQ)(e) ? null : (0, i.jsx)(s.MenuItem, {
id: 'reactions',
label: r.Z.Messages.VIEW_REACTIONS,
icon: s.ReactionIcon,
action: () => (0, s.openModalLazy)(async () => {
  let {
    default: t
  } = await Promise.resolve().then(n.bind(n, 785388));
  return n => (0, i.jsx)(t, {
    ...n,
    message: e
  });
})
  });
}