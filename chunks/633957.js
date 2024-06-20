n.d(t, {
  Z: function() {
    return M
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(2052),
  o = n(317381),
  c = n(638880),
  u = n(146936),
  d = n(527805),
  E = n(952561),
  _ = n(513202),
  I = n(100527),
  T = n(906732),
  N = n(973616),
  m = n(314897),
  h = n(592125),
  C = n(158776),
  S = n(594174),
  A = n(602623),
  p = n(823379),
  g = n(226378),
  f = n(701488),
  O = n(689938),
  R = n(656366);

function M(e) {
  var t;
  let {
    application: n,
    channelId: M,
    guildId: x
  } = e, [v, L] = i.useState(!1), {
    analyticsLocations: Z
  } = (0, T.ZP)(I.Z.ACTIVITY_INSTANCE_EMBED), P = (0, r.O)(), D = (0, E.Z)(), j = (0, l.e7)([h.Z], () => h.Z.getChannel(M)), U = (null == j ? void 0 : null === (t = j.isThread) || void 0 === t ? void 0 : t.call(j)) ? null == j ? void 0 : j.parent_id : M, y = (0, l.e7)([m.default], () => m.default.getId()), {
    embeddedActivity: b,
    currentEmbeddedActivity: B
  } = (0, l.cj)([o.ZP], () => ({
    embeddedActivity: o.ZP.getEmbeddedActivitiesForChannel(null != U ? U : "").find(e => e.applicationId === n.id),
    currentEmbeddedActivity: o.ZP.getCurrentEmbeddedActivity()
  })), k = (0, l.Wu)([S.default], () => {
    var e;
    return Array.from(null !== (e = null == b ? void 0 : b.userIds) && void 0 !== e ? e : []).map(e => S.default.getUser(e)).filter(p.lm)
  }), G = (0, l.e7)([C.Z], () => {
    var e;
    let t = null == b ? void 0 : b.userIds.values().next().value;
    return null == t ? null : null === (e = C.Z.findActivity(t, e => e.application_id === n.id)) || void 0 === e ? void 0 : e.details
  }), F = i.useMemo(() => {
    let e = new N.Z(n);
    return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = f.wT), e
  }, [n]), V = (0, d.s5)({
    userId: y,
    channelId: M,
    application: F
  }), w = null == b, H = (0, g.NL)({
    embeddedActivity: b,
    joinability: V,
    currentEmbeddedActivity: B,
    channel: j
  }), Y = async () => {
    L(!0);
    try {
      w ? await (0, u.Z)({
        targetApplicationId: n.id,
        currentEmbeddedApplication: D,
        channelId: M,
        guildId: x,
        locationObject: P.location,
        embeddedActivitiesManager: _.Z,
        analyticsLocations: Z
      }) : await (0, c.Z)({
        applicationId: b.applicationId,
        currentEmbeddedApplication: D,
        activityChannelId: M,
        locationObject: P.location,
        embeddedActivitiesManager: _.Z,
        analyticsLocations: Z
      })
    } finally {
      L(!1)
    }
  }, K = H.disabled ? O.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : O.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
  return (0, s.jsx)("div", {
    className: R.container,
    children: (0, s.jsxs)("div", {
      className: R.contentContainer,
      children: [(0, s.jsx)("div", {
        className: R.headerContainer,
        children: w ? (0, s.jsx)("div", {
          className: R.__invalid_endedNote,
          children: (0, s.jsx)(a.Text, {
            variant: "text-md/medium",
            children: K
          })
        }) : (0, s.jsx)(a.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          color: "text-normal",
          children: null != G ? G : O.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
        })
      }), (0, s.jsxs)("div", {
        className: R.footerContainer,
        children: [(0, s.jsx)(a.Tooltip, {
          text: H.tooltip,
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return (0, i.createElement)(a.Button, {
              ...n,
              key: "".concat(H.isJoinAction),
              onClick: () => {
                Y(), null == t || t()
              },
              color: H.isJoinAction ? a.ButtonColors.GREEN : a.ButtonColors.PRIMARY,
              submitting: v,
              disabled: H.disabled
            }, H.text)
          }
        }), !w && (0, s.jsx)(A.Z, {
          guildId: x,
          users: k,
          max: 4,
          size: A.u.SIZE_32
        })]
      })]
    })
  })
}