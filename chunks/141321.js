n.d(t, {
  Z: function() {
    return f
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(481060),
  r = n(317632),
  o = n(602478),
  c = n(360629),
  d = n(306680),
  u = n(594174),
  _ = n(502568),
  E = n(280763),
  m = n(178088),
  I = n(222940),
  T = n(490897),
  h = n(689938),
  N = n(673908);

function f(e) {
  let {
    onOpen: t,
    onClose: n,
    className: f
  } = e, p = (0, c.sv)(), C = (0, s.e7)([u.default], () => u.default.getCurrentUser()), g = a.useRef(null), S = (0, s.e7)([d.ZP], () => !!p && (null == C ? void 0 : C.id) != null && d.ZP.getMentionCount(C.id, T.W.NOTIFICATION_CENTER) > 0), {
    enabled: A
  } = o.Z.useExperiment({
    location: "RecentsButton"
  }, {
    autoTrackExposure: !1
  }), R = (0, s.e7)([r.Z], () => A && r.Z.getUnseenInviteCount() > 0);
  return (0, i.jsx)(m.k, {
    onOpen: t,
    onClose: n,
    badgeState: {
      badgeForYou: S
    },
    popoutPosition: "bottom",
    popoutAlign: "right",
    children: (e, t, n) => (0, i.jsxs)("div", {
      ref: g,
      className: N.recentsIcon,
      children: [A && (0, i.jsx)(I.Z, {
        inboxIconRef: g,
        recentsPopoutShown: t
      }), (0, i.jsx)(_.JO, {
        ...n,
        className: f,
        onClick: e,
        icon: l.InboxIcon,
        "aria-label": h.Z.Messages.INBOX,
        tooltip: t ? null : h.Z.Messages.INBOX,
        selected: t,
        showBadge: S || R,
        children: (0, i.jsx)(E.Z, {
          className: N.todoBadge
        })
      })]
    })
  })
}