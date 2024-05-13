"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("317632"),
  r = n("602478"),
  o = n("360629"),
  u = n("306680"),
  d = n("594174"),
  c = n("837062"),
  f = n("502568"),
  h = n("280763"),
  E = n("178088"),
  m = n("222940"),
  p = n("490897"),
  g = n("689938"),
  S = n("75028");

function N(e) {
  let {
    onOpen: t,
    onClose: n,
    className: N
  } = e, _ = (0, o.useInDesktopNotificationCenterExperiment)(), I = (0, s.useStateFromStores)([d.default], () => d.default.getCurrentUser()), T = l.useRef(null), C = (0, s.useStateFromStores)([u.default], () => !!_ && (null == I ? void 0 : I.id) != null && u.default.getMentionCount(I.id, p.ReadStateTypes.NOTIFICATION_CENTER) > 0), {
    enabled: A
  } = r.default.useExperiment({
    location: "RecentsButton"
  }, {
    autoTrackExposure: !1
  }), v = (0, s.useStateFromStores)([i.default], () => A && i.default.getUnseenInviteCount() > 0);
  return (0, a.jsx)(E.RecentsPopout, {
    onOpen: t,
    onClose: n,
    badgeState: {
      badgeForYou: C
    },
    popoutPosition: "bottom",
    popoutAlign: "right",
    children: (e, t, n) => (0, a.jsxs)("div", {
      ref: T,
      className: S.recentsIcon,
      children: [A && (0, a.jsx)(m.default, {
        inboxIconRef: T,
        recentsPopoutShown: t
      }), (0, a.jsx)(f.Icon, {
        ...n,
        className: N,
        onClick: e,
        icon: c.default,
        "aria-label": g.default.Messages.INBOX,
        tooltip: t ? null : g.default.Messages.INBOX,
        selected: t,
        showBadge: C || v,
        children: (0, a.jsx)(h.default, {
          className: S.todoBadge
        })
      })]
    })
  })
}