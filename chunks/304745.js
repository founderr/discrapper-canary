n.d(t, {
  M: function() {
    return v
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
  E = n(451576),
  p = n(526846),
  g = n(938655),
  f = n(403404),
  C = n(906732),
  _ = n(424602),
  I = n(243778),
  x = n(579185),
  T = n(301076),
  N = n(981631),
  Z = n(921944),
  S = n(559820);

function v(e) {
  let {
    channel: t
  } = e, n = (0, s.e7)([u.ZP], () => u.ZP.isLaunchingActivity()), v = (0, m.KF)(t.id), A = (0, m.g5)(v), M = v !== m.jy.CAN_LAUNCH || n, {
    isHovered: R,
    setIsHovered: j,
    onMouseEnter: L,
    onMouseLeave: O
  } = (0, x.Z)(200, 300), P = (0, h.a)(), y = (0, d.Z)({
    channelId: t.id
  }), b = !M, D = i.useCallback(e => {
    "focus" !== e.type && L()
  }, [L]), U = (0, o.O)(), k = (0, c.bp)() === N.IlC.POPOUT, {
    analyticsLocations: w
  } = (0, C.ZP)(), H = w.length > 0 ? w[w.length - 1] : "open-activity-shelf";
  _.m1.useExperiment({
    location: H
  }, {
    autoTrackExposure: !0
  });
  let G = i.useCallback(() => {
      (0, f.Z)({
        channel: t,
        guildId: t.guild_id,
        locationObject: U.location,
        openInPopout: k,
        analyticsLocations: w,
        opensAppLauncherModal: !0
      })
    }, [U.location, w, t, k]),
    B = [];
  return !M && B.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, E.Z)(t.id) && !M && B.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE), (0, l.jsx)(I.Z, {
    contentTypes: B,
    children: e => {
      let {
        visibleContent: n,
        markAsDismissed: i
      } = e;
      return (0, l.jsx)(r.Popout, {
        fixed: !0,
        shouldShow: R,
        animationPosition: "bottom",
        position: "bottom",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
          j(!1)
        },
        renderPopout: e => {
          let {
            closePopout: n,
            setPopoutRef: s
          } = e;
          return b ? (0, l.jsx)(p.m, {
            ref: s,
            channel: t,
            closePopout: n,
            onMouseEnter: L,
            onMouseLeave: O,
            isHovered: R,
            onClick: () => i(Z.L.UNKNOWN)
          }) : (0, l.jsx)(l.Fragment, {})
        },
        children: () => (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(T.Z, {
            disabled: M,
            "aria-label": A,
            label: b ? void 0 : A,
            isActivityActive: y || R,
            className: S.controlButton,
            onClick: () => {
              G(), (n === a.z.ACTIVITIES_MINI_SHELF_SPARKLES || n === a.z.ACTIVITY_GDM_ROCKET_SPARKLE || n === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || n === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES) && i(Z.L.UNKNOWN)
            },
            onMouseEnter: D,
            onMouseLeave: O
          }), P ? (0, l.jsx)(g.A, {
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