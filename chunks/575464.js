n.d(t, {
  Z: function() {
    return E
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(91192),
  r = n(442837),
  o = n(481060),
  c = n(129861),
  u = n(700582),
  d = n(158776),
  h = n(285952),
  m = n(51144),
  p = n(864731);

function E(e) {
  let {
    user: t,
    row: n,
    hideDiscriminator: i,
    comparator: E,
    selected: g,
    checked: f,
    onClick: C,
    onMouseEnter: _,
    "aria-setsize": I,
    "aria-posinset": x
  } = e, T = (0, r.e7)([d.Z], () => d.Z.getStatus(t.id)), N = (0, a.JA)(String(t.id));
  return (0, l.jsx)(o.Clickable, {
    id: "user-row-".concat(n),
    className: p.friendWrapper,
    onClick: () => {
      null != C && C(t.id)
    },
    onMouseEnter: () => {
      null != _ && _(n)
    },
    ...N,
    role: "option",
    "aria-selected": f,
    "aria-setsize": I,
    "aria-posinset": x,
    children: (0, l.jsxs)(h.Z, {
      align: h.Z.Align.CENTER,
      className: s()(p.friend, {
        [p.friendSelected]: g
      }),
      children: [(0, l.jsx)(u.Z, {
        user: t,
        status: T,
        className: p.avatar
      }), (0, l.jsxs)(h.Z, {
        className: p.match,
        align: h.Z.Align.BASELINE,
        children: [(0, l.jsx)(o.Text, {
          tag: "strong",
          className: p.nickname,
          "aria-hidden": !0,
          variant: "text-md/medium",
          children: null != E && E === t.tag ? m.ZP.getName(t) : null != E && "" !== E ? E : m.ZP.getName(t)
        }), (0, l.jsx)(c.Z, {
          user: t,
          hideDiscriminator: i,
          className: p.discordTag,
          usernameClass: p.__invalid_weightMedium,
          discriminatorClass: p.__invalid_weightMedium,
          forceUsername: !0
        })]
      }), (0, l.jsx)(o.Checkbox, {
        displayOnly: !0,
        size: 22,
        value: f,
        className: p.checkbox
      })]
    })
  })
}