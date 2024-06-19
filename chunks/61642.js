n.d(t, {
  Z: function() {
    return d
  }
});
var l = n(735250);
n(470079);
var i = n(239091),
  s = n(396828),
  r = n(703656),
  a = n(434479),
  o = n(981631),
  u = n(176505),
  c = n(689938);

function d(e) {
  let {
    guild: t,
    selected: d
  } = e;
  return (0, l.jsx)(a.m, {
    id: "subscriptions-".concat(t.id),
    renderIcon: e => (0, l.jsx)(s.Z, {
      className: e
    }),
    text: c.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
    selected: d,
    onClick: () => {
      (0, r.uL)(o.Z5c.CHANNEL(t.id, u.oC.ROLE_SUBSCRIPTIONS))
    },
    onContextMenu: e => {
      null != t && (0, i.jW)(e, async () => {
        let {
          default: e
        } = await n.e("28249").then(n.bind(n, 613329));
        return n => (0, l.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }
  })
}