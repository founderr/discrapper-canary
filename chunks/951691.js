"use strict";
n.r(t), n.d(t, {
  useOtherStreams: function() {
    return A
  },
  default: function() {
    return v
  }
});
var a = n("37983");
n("884691");
var r = n("446674"),
  s = n("77078"),
  i = n("901582"),
  l = n("191145"),
  u = n("976074"),
  o = n("856343"),
  d = n("16916"),
  c = n("373469"),
  f = n("42887"),
  E = n("697218"),
  S = n("394832"),
  h = n("985622"),
  _ = n("356553"),
  C = n("387111"),
  p = n("773336"),
  m = n("49111"),
  T = n("353927"),
  g = n("782340");

function A(e, t, n) {
  let a = (0, r.useStateFromStores)([l.default], () => l.default.getSelectedParticipantId(e.id)),
    s = (0, r.useStateFromStores)([c.default], () => null != a ? c.default.getActiveStreamForStreamKey(a) : null, [a]),
    i = (0, r.useStateFromStoresArray)([E.default], () => {
      let a = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
        stream: t,
        username: C.default.getName(e.getGuildId(), e.id, E.default.getUser(t.ownerId))
      }));
      return 1 === a.length && a[0].stream.ownerId === (null == s ? void 0 : s.ownerId) ? [] : a
    }, [e, s, n, t]);
  return i
}

function v(e) {
  var t;
  let {
    channel: n,
    currentUser: r,
    activeStreams: l,
    hideSelfOptions: c = !1,
    showReportOption: E = !1,
    handleGoLive: C,
    onClose: v,
    onSelect: I,
    appContext: R = m.AppContext.APP
  } = e, M = f.default.supports(T.Features.DESKTOP_CAPTURE_APPLICATIONS), O = null !== (t = l.find(e => e.ownerId === (null == r ? void 0 : r.id))) && void 0 !== t ? t : null, L = A(n, r, l), N = (0, o.default)(O, R), y = (0, u.default)(O, R, m.NOOP_NULL), x = null == O ? (0, a.jsx)(s.MenuItem, {
    id: "share-your-screen",
    label: g.default.Messages.SHARE_YOUR_SCREEN,
    icon: S.default,
    action: C
  }) : (0, a.jsxs)(a.Fragment, {
    children: [p.isPlatformEmbedded ? (0, a.jsx)(s.MenuItem, {
      id: "stream-settings",
      label: g.default.Messages.SCREENSHARE_STREAM_QUALITY,
      children: N
    }) : null, E ? y : null, M ? (0, a.jsx)(s.MenuItem, {
      id: "change-windows",
      label: g.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
      icon: S.default,
      action: C
    }) : null, (0, a.jsx)(s.MenuItem, {
      id: "stop-streaming",
      label: g.default.Messages.STOP_STREAMING,
      icon: h.default,
      action: () => (0, d.default)(O)
    })]
  });
  return (0, a.jsx)(i.default, {
    section: m.AnalyticsSections.CONTEXT_MENU,
    children: (0, a.jsxs)(s.Menu, {
      onSelect: I,
      navId: "manage-streams",
      onClose: v,
      "aria-label": null != O ? g.default.Messages.STOP_STREAMING : g.default.Messages.SHARE_YOUR_SCREEN,
      children: [(0, a.jsx)(s.MenuGroup, {
        children: L.map(e => {
          let {
            stream: t,
            username: n
          } = e;
          return (0, a.jsx)(s.MenuItem, {
            id: t.ownerId,
            label: g.default.Messages.STOP_WATCHING_USER.format({
              username: n
            }),
            icon: _.default,
            action: () => (0, d.default)(t)
          }, "manage-stream-menu".concat(t.ownerId))
        })
      }), c ? null : x]
    })
  })
}