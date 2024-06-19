n.d(t, {
  Z: function() {
    return M
  }
}), n(653041);
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(704215),
  r = n(481060),
  a = n(872810),
  o = n(367907),
  u = n(67212),
  c = n(770471),
  d = n(757454),
  h = n(286328),
  g = n(493355),
  p = n(134598),
  m = n(243778),
  C = n(594190),
  E = n(569545),
  f = n(989941),
  _ = n(199902),
  I = n(314897),
  N = n(944486),
  Z = n(885110),
  S = n(449224),
  x = n(436088),
  T = n(976401),
  L = n(981631),
  v = n(921944),
  A = n(689938);

function M() {
  let e = (0, i.e7)([N.Z], () => N.Z.getVoiceChannelId()),
    t = (0, i.e7)([I.default], () => I.default.getId()),
    n = (0, i.e7)([C.ZP, S.Z], () => (0, f.Z)(C.ZP, S.Z)),
    {
      canBroadcast: M
    } = c.Z.useExperiment({
      location: "broadcast_button_rtc_panel_no_track"
    }, {
      autoTrackExposure: !1
    }),
    R = (0, d.Z)() && null != n,
    O = (0, i.e7)([Z.Z], () => null != Z.Z.getBroadcast()),
    P = (0, i.Wu)([_.Z], () => _.Z.getAllActiveStreams());
  if (!R && !O) return null;
  if (c.Z.trackExposure({
      location: "broadcast_button_rtc_panel"
    }), !M) return null;
  let j = [];
  R && j.push(s.z.BROADCASTING_BROADCASTER_TOOLTIP);
  let b = () => {
      o.ZP.trackWithMetadata(L.rMx.BROADCAST_START_BUTTON_HOVERED, {
        game_id: null == n ? void 0 : n.id
      })
    },
    D = () => {
      if (R) {
        let l = P.find(e => e.ownerId === t);
        null == l ? (0, p.X)(A.Z.Messages.START_BROADCASTING, A.Z.Messages.START_BROADCASTING_CTA, () => {
          (0, a.tE)({
            pid: null == n ? void 0 : n.pid,
            channelId: e
          })
        }) : (0, u.v$)((0, E.V9)(l), null == n ? void 0 : n.pid)
      } else(0, u.b_)()
    },
    y = e => (0, l.jsx)(T.Z, {
      tooltipText: R ? A.Z.Messages.START_BROADCASTING : A.Z.Messages.STOP_BROADCASTING,
      onClick: () => {
        D(), null == e || e(v.L.UNKNOWN)
      },
      onMouseEnter: b,
      icon: R ? (0, r.makeIconCompat)(x.Z) : () => (0, l.jsx)(g.Z, {
        width: 20,
        height: 20
      })
    }),
    U = e => (0, l.jsx)(h.Z, {
      markAsDismissed: e
    });
  return (0, l.jsx)(m.Z, {
    contentTypes: j,
    bypassAutoDismiss: !0,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      return t === s.z.BROADCASTING_BROADCASTER_TOOLTIP ? (0, l.jsx)(r.Popout, {
        position: "top",
        align: "center",
        renderPopout: () => U(n),
        shouldShow: !0,
        children: () => y(n)
      }) : y()
    }
  })
}