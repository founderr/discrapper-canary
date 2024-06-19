n.d(t, {
  Z: function() {
    return I
  }
});
var s = n(735250);
n(470079);
var r = n(481060),
  i = n(973616),
  l = n(131704),
  a = n(601964),
  o = n(598077),
  c = n(230224),
  u = n(258356),
  d = n(981631),
  E = n(689938),
  _ = n(902523);
let h = e => {
  let {
    state: t
  } = e;
  switch (t) {
    case d.r2o.ACCEPTING:
    case d.r2o.APP_OPENING:
      return !0;
    default:
      return !1
  }
};

function I(e) {
  let {
    invite: t,
    onAcceptInvite: n,
    disableUser: I = !1
  } = e;
  if (null == t) return null;
  let p = null != t.guild ? new a.ZP(t.guild) : null,
    N = null != t.channel ? (0, l.jD)(t.channel) : null,
    g = null != t.target_application ? new i.Z(t.target_application) : null,
    m = I || null == t.inviter ? null : new o.Z(t.inviter),
    T = !(null != t.approximate_member_count && t.approximate_member_count > c.mx || null != p && p.hasFeature(d.oNc.COMMUNITY)) && null != m && (0, c.WT)(t),
    f = h(t),
    Z = {
      invite: t,
      user: m,
      guild: p,
      channel: N,
      application: g
    };
  return (0, c.JI)(t) ? (0, s.jsx)(u.Z, {
    invite: t,
    channel: N,
    isSubmitting: f,
    onAcceptInvite: n
  }) : (0, s.jsxs)("div", {
    className: _.container,
    children: [(0, s.jsx)(c.GB, {
      application: g,
      guild: p,
      user: T || (0, c.X7)(t) ? m : null
    }), (0, c.X7)(t) ? null : (0, s.jsx)(c.jq, {
      ...Z,
      showBigUserIcon: T
    }), (0, s.jsx)(c.UM, {
      ...Z,
      showBigUserIcon: T
    }), (0, s.jsx)(c.V6, {
      ...Z
    }), (0, s.jsx)(r.Button, {
      onClick: n,
      submitting: f,
      className: _.acceptButton,
      children: E.Z.Messages.INSTANT_INVITE_ACCEPT
    })]
  })
}