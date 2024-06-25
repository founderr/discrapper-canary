n.d(t, {
  Z: function() {
    return C
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(317632),
  o = n(602478),
  c = n(360629),
  u = n(306680),
  d = n(594174),
  E = n(502568),
  _ = n(280763),
  I = n(178088),
  T = n(222940),
  m = n(490897),
  N = n(689938),
  h = n(673908);

function C(e) {
  let {
    onOpen: t,
    onClose: n,
    className: C
  } = e, S = (0, c.sv)(), A = (0, l.e7)([d.default], () => d.default.getCurrentUser()), g = i.useRef(null), p = (0, l.e7)([u.ZP], () => !!S && (null == A ? void 0 : A.id) != null && u.ZP.getMentionCount(A.id, m.W.NOTIFICATION_CENTER) > 0), {
    enabled: f
  } = o.Z.useExperiment({
    location: "RecentsButton"
  }, {
    autoTrackExposure: !1
  }), R = (0, l.e7)([r.Z], () => f && r.Z.getUnseenInviteCount() > 0);
  return (0, s.jsx)(I.k, {
    onOpen: t,
    onClose: n,
    badgeState: {
      badgeForYou: p
    },
    popoutPosition: "bottom",
    popoutAlign: "right",
    children: (e, t, n) => (0, s.jsxs)("div", {
      ref: g,
      className: h.recentsIcon,
      children: [f && (0, s.jsx)(T.Z, {
        inboxIconRef: g,
        recentsPopoutShown: t
      }), (0, s.jsx)(E.JO, {
        ...n,
        className: C,
        onClick: e,
        icon: a.InboxIcon,
        "aria-label": N.Z.Messages.INBOX,
        tooltip: t ? null : N.Z.Messages.INBOX,
        selected: t,
        showBadge: p || R,
        children: (0, s.jsx)(_.Z, {
          className: h.todoBadge
        })
      })]
    })
  })
}