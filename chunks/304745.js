n.d(t, {
  M: function() {
    return S
  }
}), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(704215),
  r = n(481060),
  o = n(2052),
  c = n(40851),
  u = n(317381),
  d = n(683921),
  h = n(588580),
  m = n(374065),
  p = n(451576),
  E = n(526846),
  g = n(938655),
  f = n(403404),
  C = n(906732),
  _ = n(243778),
  I = n(579185),
  x = n(301076),
  T = n(981631),
  N = n(921944),
  Z = n(559820);

function S(e) {
  let {
    channel: t
  } = e, n = (0, s.e7)([u.ZP], () => u.ZP.isLaunchingActivity()), S = (0, m.KF)(t.id), v = (0, m.g5)(S), A = S !== m.jy.CAN_LAUNCH || n, {
    isHovered: M,
    setIsHovered: R,
    onMouseEnter: j,
    onMouseLeave: L
  } = (0, I.Z)(200, 300), O = (0, h.a)(), P = (0, d.Z)({
    channelId: t.id
  }), b = !A, y = i.useCallback(e => {
    "focus" !== e.type && j()
  }, [j]), D = (0, o.O)(), U = (0, c.bp)() === T.IlC.POPOUT, {
    analyticsLocations: k
  } = (0, C.ZP)(), w = i.useCallback(() => {
    (0, f.Z)({
      channel: t,
      guildId: t.guild_id,
      locationObject: D.location,
      openInPopout: U,
      analyticsLocations: k,
      opensAppLauncherModal: !0
    })
  }, [D.location, k, t, U]), H = [];
  return !A && H.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, p.Z)(t.id) && !A && H.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE), (0, l.jsx)(_.Z, {
    contentTypes: H,
    children: e => {
      let {
        visibleContent: n,
        markAsDismissed: i
      } = e;
      return (0, l.jsx)(r.Popout, {
        fixed: !0,
        shouldShow: M,
        animationPosition: "bottom",
        position: "bottom",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
          R(!1)
        },
        renderPopout: e => {
          let {
            closePopout: n,
            setPopoutRef: s
          } = e;
          return b ? (0, l.jsx)(E.m, {
            ref: s,
            channel: t,
            closePopout: n,
            onMouseEnter: j,
            onMouseLeave: L,
            isHovered: M,
            onClick: () => i(N.L.UNKNOWN)
          }) : (0, l.jsx)(l.Fragment, {})
        },
        children: () => (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(x.Z, {
            disabled: A,
            "aria-label": v,
            label: b ? void 0 : v,
            isActivityActive: P || M,
            className: Z.controlButton,
            onClick: () => {
              w(), (n === a.z.ACTIVITIES_MINI_SHELF_SPARKLES || n === a.z.ACTIVITY_GDM_ROCKET_SPARKLE || n === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || n === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES) && i(N.L.UNKNOWN)
            },
            onMouseEnter: y,
            onMouseLeave: L
          }), O ? (0, l.jsx)(g.A, {
            top: 4,
            right: 10,
            size: 12,
            maskColor: g.T.BLACK
          }) : null]
        })
      })
    }
  })
}