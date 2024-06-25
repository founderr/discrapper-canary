n.d(t, {
  Z: function() {
    return m
  }
}), n(47120);
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(995123),
  r = n(456269),
  o = n(660189),
  c = n(257511),
  u = n(967128),
  d = n(689938),
  h = n(73409);

function m(e) {
  var t;
  let {
    channel: n
  } = e, m = (0, r.eV)(n), {
    firstMessage: E
  } = (0, i.cj)([o.Z], () => o.Z.getMessage(n.id)), p = new Set((0, r.kn)(n, m)), g = null !== (t = (0, a.Z)(n)) && void 0 !== t ? t : s.ChatIcon;
  return (0, l.jsxs)(u.ZP, {
    channelId: n.id,
    className: h.container,
    children: [(0, l.jsx)("div", {
      className: h.iconWrapper,
      children: (0, l.jsx)(g, {
        className: h.icon,
        strokeWidth: 1.75
      })
    }), (0, l.jsx)(u.Ot, {
      className: h.header,
      children: n.name
    }), null == E && (0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: d.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
    }), (0, l.jsx)(c.Z, {
      appliedTags: p
    })]
  })
}