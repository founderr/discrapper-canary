"use strict";
n.r(t), n.d(t, {
  useOtherStreams: function() {
    return T
  },
  default: function() {
    return I
  }
});
var a = n("37983");
n("884691");
var r = n("446674"),
  i = n("77078"),
  s = n("901582"),
  l = n("191145"),
  u = n("976074"),
  o = n("856343"),
  d = n("16916"),
  c = n("373469"),
  f = n("42887"),
  h = n("697218"),
  p = n("394832"),
  E = n("985622"),
  C = n("356553"),
  m = n("387111"),
  S = n("773336"),
  g = n("49111"),
  _ = n("353927"),
  v = n("782340");

function T(e, t, n) {
  let a = (0, r.useStateFromStores)([l.default], () => l.default.getSelectedParticipantId(e.id)),
    i = (0, r.useStateFromStores)([c.default], () => null != a ? c.default.getActiveStreamForStreamKey(a) : null, [a]),
    s = (0, r.useStateFromStoresArray)([h.default], () => {
      let a = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
        stream: t,
        username: m.default.getName(e.getGuildId(), e.id, h.default.getUser(t.ownerId))
      }));
      return 1 === a.length && a[0].stream.ownerId === (null == i ? void 0 : i.ownerId) ? [] : a
    }, [e, i, n, t]);
  return s
}

function I(e) {
  var t;
  let {
    channel: n,
    currentUser: r,
    activeStreams: l,
    hideSelfOptions: c = !1,
    showReportOption: h = !1,
    handleGoLive: m,
    onClose: I,
    onSelect: A,
    appContext: M = g.AppContext.APP
  } = e, x = f.default.supports(_.Features.DESKTOP_CAPTURE_APPLICATIONS), R = null !== (t = l.find(e => e.ownerId === (null == r ? void 0 : r.id))) && void 0 !== t ? t : null, N = T(n, r, l), L = (0, o.default)(R, M), O = (0, u.default)(R, M, g.NOOP_NULL), y = null == R ? (0, a.jsx)(i.MenuItem, {
    id: "share-your-screen",
    label: v.default.Messages.SHARE_YOUR_SCREEN,
    icon: p.default,
    action: m
  }) : (0, a.jsxs)(a.Fragment, {
    children: [S.isPlatformEmbedded ? (0, a.jsx)(i.MenuItem, {
      id: "stream-settings",
      label: v.default.Messages.SCREENSHARE_STREAM_QUALITY,
      children: L
    }) : null, h ? O : null, x ? (0, a.jsx)(i.MenuItem, {
      id: "change-windows",
      label: v.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
      icon: p.default,
      action: m
    }) : null, (0, a.jsx)(i.MenuItem, {
      id: "stop-streaming",
      label: v.default.Messages.STOP_STREAMING,
      icon: E.default,
      action: () => (0, d.default)(R)
    })]
  });
  return (0, a.jsx)(s.default, {
    section: g.AnalyticsSections.CONTEXT_MENU,
    children: (0, a.jsxs)(i.Menu, {
      onSelect: A,
      navId: "manage-streams",
      onClose: I,
      "aria-label": null != R ? v.default.Messages.STOP_STREAMING : v.default.Messages.SHARE_YOUR_SCREEN,
      children: [(0, a.jsx)(i.MenuGroup, {
        children: N.map(e => {
          let {
            stream: t,
            username: n
          } = e;
          return (0, a.jsx)(i.MenuItem, {
            id: t.ownerId,
            label: v.default.Messages.STOP_WATCHING_USER.format({
              username: n
            }),
            icon: C.default,
            action: () => (0, d.default)(t)
          }, "manage-stream-menu".concat(t.ownerId))
        })
      }), c ? null : y]
    })
  })
}