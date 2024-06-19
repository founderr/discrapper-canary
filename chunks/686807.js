S.d(e, {
  Z: function() {
    return A
  }
});
var _ = S(735250);
S(470079);
var t = S(481060),
  n = S(201895),
  i = S(471445),
  l = S(823379),
  I = S(303737),
  r = S(293810),
  s = S(689938),
  N = S(603463);

function o(E) {
  let {
    channelId: e
  } = E, S = (0, I.m7)(e);
  if (null == S) return (0, _.jsx)(_.Fragment, {
    children: "[".concat(s.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, "]")
  });
  let l = S.isMediaChannel() ? t.ImageIcon : (0, i.Th)(S.type);
  return (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(t.HiddenVisually, {
      children: (0, n.ZP)({
        channel: S
      })
    }), (0, _.jsxs)("div", {
      "aria-hidden": !0,
      children: [null != l && (0, _.jsx)(l, {
        className: N.icon,
        "aria-hidden": !0
      }), S.name]
    })]
  })
}

function A(E) {
  switch (E.ref_type) {
    case r.Qs.CHANNEL:
      return (0, _.jsx)(o, {
        channelId: E.ref_id
      });
    case r.Qs.INTANGIBLE:
      return E.name;
    default:
      (0, l.vE)(E)
  }
}