t.d(n, {
  Z: function() {
    return E
  }
});
var i = t(735250);
t(470079);
var l = t(481060),
  r = t(201895),
  u = t(471445),
  o = t(823379),
  s = t(303737),
  a = t(293810),
  c = t(689938),
  _ = t(603463);

function d(e) {
  let {
    channelId: n
  } = e, t = (0, s.m7)(n);
  if (null == t) return (0, i.jsx)(i.Fragment, {
    children: "[".concat(c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, "]")
  });
  let o = t.isMediaChannel() ? l.ImageIcon : (0, u.Th)(t.type);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.HiddenVisually, {
      children: (0, r.ZP)({
        channel: t
      })
    }), (0, i.jsxs)("div", {
      "aria-hidden": !0,
      children: [null != o && (0, i.jsx)(o, {
        className: _.icon,
        "aria-hidden": !0
      }), t.name]
    })]
  })
}

function E(e) {
  switch (e.ref_type) {
    case a.Qs.CHANNEL:
      return (0, i.jsx)(d, {
        channelId: e.ref_id
      });
    case a.Qs.INTANGIBLE:
      return e.name;
    default:
      (0, o.vE)(e)
  }
}