"use strict";
n.r(t), n.d(t, {
  useOtherStreams: function() {
    return T
  },
  default: function() {
    return A
  }
});
var a = n("37983");
n("884691");
var r = n("446674"),
  s = n("77078"),
  i = n("901582"),
  l = n("191145"),
  o = n("976074"),
  u = n("856343"),
  d = n("16916"),
  c = n("373469"),
  f = n("42887"),
  h = n("697218"),
  p = n("394832"),
  m = n("985622"),
  C = n("356553"),
  E = n("387111"),
  g = n("773336"),
  S = n("49111"),
  v = n("353927"),
  _ = n("782340");

function T(e, t, n) {
  let a = (0, r.useStateFromStores)([l.default], () => l.default.getSelectedParticipantId(e.id)),
    s = (0, r.useStateFromStores)([c.default], () => null != a ? c.default.getActiveStreamForStreamKey(a) : null, [a]),
    i = (0, r.useStateFromStoresArray)([h.default], () => {
      let a = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
        stream: t,
        username: E.default.getName(e.getGuildId(), e.id, h.default.getUser(t.ownerId))
      }));
      return 1 === a.length && a[0].stream.ownerId === (null == s ? void 0 : s.ownerId) ? [] : a
    }, [e, s, n, t]);
  return i
}

function A(e) {
  var t;
  let {
    channel: n,
    currentUser: r,
    activeStreams: l,
    hideSelfOptions: c = !1,
    showReportOption: h = !1,
    handleGoLive: E,
    onClose: A,
    onSelect: I,
    appContext: M = S.AppContext.APP
  } = e, x = f.default.supports(v.Features.DESKTOP_CAPTURE_APPLICATIONS), y = null !== (t = l.find(e => e.ownerId === (null == r ? void 0 : r.id))) && void 0 !== t ? t : null, R = T(n, r, l), L = (0, u.default)(y, M), N = (0, o.default)(y, M, S.NOOP_NULL), O = null == y ? (0, a.jsx)(s.MenuItem, {
    id: "share-your-screen",
    label: _.default.Messages.SHARE_YOUR_SCREEN,
    icon: p.default,
    action: E
  }) : (0, a.jsxs)(a.Fragment, {
    children: [g.isPlatformEmbedded ? (0, a.jsx)(s.MenuItem, {
      id: "stream-settings",
      label: _.default.Messages.SCREENSHARE_STREAM_QUALITY,
      children: L
    }) : null, h ? N : null, x ? (0, a.jsx)(s.MenuItem, {
      id: "change-windows",
      label: _.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
      icon: p.default,
      action: E
    }) : null, (0, a.jsx)(s.MenuItem, {
      id: "stop-streaming",
      label: _.default.Messages.STOP_STREAMING,
      icon: m.default,
      action: () => (0, d.default)(y)
    })]
  });
  return (0, a.jsx)(i.default, {
    section: S.AnalyticsSections.CONTEXT_MENU,
    children: (0, a.jsxs)(s.Menu, {
      onSelect: I,
      navId: "manage-streams",
      onClose: A,
      "aria-label": null != y ? _.default.Messages.STOP_STREAMING : _.default.Messages.SHARE_YOUR_SCREEN,
      children: [(0, a.jsx)(s.MenuGroup, {
        children: R.map(e => {
          let {
            stream: t,
            username: n
          } = e;
          return (0, a.jsx)(s.MenuItem, {
            id: t.ownerId,
            label: _.default.Messages.STOP_WATCHING_USER.format({
              username: n
            }),
            icon: C.default,
            action: () => (0, d.default)(t)
          }, "manage-stream-menu".concat(t.ownerId))
        })
      }), c ? null : O]
    })
  })
}