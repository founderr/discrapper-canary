"use strict";
n.d(t, {
  E: function() {
    return A
  },
  Z: function() {
    return N
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(410575),
  a = n(358221),
  l = n(418469),
  u = n(776031),
  _ = n(803647),
  c = n(199902),
  d = n(131951),
  E = n(594174),
  I = n(5192),
  T = n(358085),
  h = n(981631),
  f = n(65154),
  S = n(689938);

function A(e, t, n) {
  let i = (0, r.e7)([a.Z], () => a.Z.getSelectedParticipantId(e.id)),
    s = (0, r.e7)([c.Z], () => null != i ? c.Z.getActiveStreamForStreamKey(i) : null, [i]);
  return (0, r.Wu)([E.default], () => {
    let i = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
      stream: t,
      username: I.ZP.getName(e.getGuildId(), e.id, E.default.getUser(t.ownerId))
    }));
    return 1 === i.length && i[0].stream.ownerId === (null == s ? void 0 : s.ownerId) ? [] : i
  }, [e, s, n, t])
}

function N(e) {
  var t;
  let {
    channel: n,
    currentUser: r,
    activeStreams: a,
    hideSelfOptions: c = !1,
    showReportOption: E = !1,
    handleGoLive: I,
    onClose: N,
    onSelect: m,
    appContext: O = h.IlC.APP
  } = e, p = d.Z.supports(f.AN.DESKTOP_CAPTURE_APPLICATIONS), R = null !== (t = a.find(e => e.ownerId === (null == r ? void 0 : r.id))) && void 0 !== t ? t : null, g = A(n, r, a), C = (0, u.Z)(R, O), v = (0, l.Z)(R, O, h.VqG), L = null == R ? (0, i.jsx)(s.MenuItem, {
    id: "share-your-screen",
    label: S.Z.Messages.SHARE_YOUR_SCREEN,
    icon: s.ScreenArrowIcon,
    action: I
  }) : (0, i.jsxs)(i.Fragment, {
    children: [T.isPlatformEmbedded ? (0, i.jsx)(s.MenuItem, {
      id: "stream-settings",
      label: S.Z.Messages.SCREENSHARE_STREAM_QUALITY,
      children: C
    }) : null, E ? v : null, p ? (0, i.jsx)(s.MenuItem, {
      id: "change-windows",
      label: S.Z.Messages.SCREENSHARE_CHANGE_WINDOWS,
      icon: s.ScreenArrowIcon,
      action: I
    }) : null, (0, i.jsx)(s.MenuItem, {
      id: "stop-streaming",
      label: S.Z.Messages.STOP_STREAMING,
      icon: s.ScreenXIcon,
      action: () => (0, _.Z)(R)
    })]
  });
  return (0, i.jsx)(o.Z, {
    section: h.jXE.CONTEXT_MENU,
    children: (0, i.jsxs)(s.Menu, {
      onSelect: m,
      navId: "manage-streams",
      onClose: N,
      "aria-label": null != R ? S.Z.Messages.STOP_STREAMING : S.Z.Messages.SHARE_YOUR_SCREEN,
      children: [(0, i.jsx)(s.MenuGroup, {
        children: g.map(e => {
          let {
            stream: t,
            username: n
          } = e;
          return (0, i.jsx)(s.MenuItem, {
            id: t.ownerId,
            label: S.Z.Messages.STOP_WATCHING_USER.format({
              username: n
            }),
            icon: s.ScreenXIcon,
            action: () => (0, _.Z)(t)
          }, "manage-stream-menu".concat(t.ownerId))
        })
      }), c ? null : L]
    })
  })
}