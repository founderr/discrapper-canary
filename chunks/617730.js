n.d(t, {
  Z: function() {
    return h
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  r = n(973616),
  a = n(131704),
  l = n(601964),
  o = n(598077),
  c = n(230224),
  u = n(258356),
  d = n(981631),
  _ = n(689938),
  E = n(902523);
let I = e => {
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

function h(e) {
  let {
    invite: t,
    onAcceptInvite: n,
    disableUser: h = !1
  } = e;
  if (null == t) return null;
  let p = null != t.guild ? new l.ZP(t.guild) : null,
    g = null != t.channel ? (0, a.jD)(t.channel) : null,
    f = null != t.target_application ? new r.Z(t.target_application) : null,
    N = h || null == t.inviter ? null : new o.Z(t.inviter),
    m = !(null != t.approximate_member_count && t.approximate_member_count > c.mx || null != p && p.hasFeature(d.oNc.COMMUNITY)) && null != N && (0, c.WT)(t),
    T = I(t),
    A = {
      invite: t,
      user: N,
      guild: p,
      channel: g,
      application: f
    };
  return (0, c.JI)(t) ? (0, s.jsx)(u.Z, {
    invite: t,
    channel: g,
    isSubmitting: T,
    onAcceptInvite: n
  }) : (0, s.jsxs)("div", {
    className: E.container,
    children: [(0, s.jsx)(c.GB, {
      application: f,
      guild: p,
      user: m || (0, c.X7)(t) ? N : null
    }), (0, c.X7)(t) ? null : (0, s.jsx)(c.jq, {
      ...A,
      showBigUserIcon: m
    }), (0, s.jsx)(c.UM, {
      ...A,
      showBigUserIcon: m
    }), (0, s.jsx)(c.V6, {
      ...A
    }), (0, s.jsx)(i.Button, {
      onClick: n,
      submitting: T,
      className: E.acceptButton,
      children: _.Z.Messages.INSTANT_INVITE_ACCEPT
    })]
  })
}