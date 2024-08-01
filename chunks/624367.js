n.d(t, {
  Z: function() {
return D;
  }
}), n(47120), n(789020);
var i = n(735250);
n(470079);
var s = n(613828),
  a = n(442837),
  r = n(477690),
  l = n(481060),
  o = n(668781),
  c = n(2052),
  u = n(100527),
  d = n(906732),
  _ = n(835473),
  E = n(522474),
  I = n(523746),
  m = n(592125),
  T = n(594174),
  h = n(630388),
  N = n(823379),
  f = n(624138),
  C = n(317381),
  p = n(638880),
  g = n(146936),
  S = n(147865),
  A = n(778569),
  M = n(513202),
  R = n(884338),
  O = n(403404),
  x = n(701488),
  v = n(981631),
  Z = n(689938),
  L = n(615010);
let P = (0, f.Mg)(r.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);

function D(e) {
  var t, n, r, f;
  let {
applicationId: D,
message: b
  } = e, {
analyticsLocations: j
  } = (0, d.ZP)(u.Z.ACTIVITY_BOOKMARK), U = (0, c.O)(), y = b.channel_id, B = (0, a.e7)([m.Z], () => m.Z.getChannel(y), [y]), k = null == B ? void 0 : B.guild_id, G = null != B && (B.isGuildVoice() || B.isPrivate()), F = (0, a.e7)([C.ZP], () => C.ZP.getSelfEmbeddedActivityForChannel(y)), w = (null == F ? void 0 : F.applicationId) === D, [V, H] = (0, _.Z)([
D,
null !== (n = null == F ? void 0 : F.applicationId) && void 0 !== n ? n : ''
  ]), Y = (0, S.ZP)(null !== (r = null == V ? void 0 : V.maxParticipants) && void 0 !== r ? r : 0), [W] = (0, a.Wu)([C.ZP], () => G ? C.ZP.getEmbeddedActivitiesForChannel(y).filter(e => e.applicationId === D) : [], [
D,
y,
G
  ]), K = Array.from(null !== (f = null == W ? void 0 : W.userIds) && void 0 !== f ? f : []), z = (0, a.Wu)([T.default], () => K.map(e => T.default.getUser(e)).filter(N.lm), [K]), q = (0, A.Z)({
applicationId: D,
size: P,
names: ['embedded_cover']
  }), Q = E.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT), X = z.length > 0 ? Z.Z.Messages.JOIN : Z.Z.Messages.START, J = async () => {
if (G) {
  if (null != W && z.length > 0)
    await (0, p.Z)({
      applicationId: W.applicationId,
      currentEmbeddedApplication: H,
      activityChannelId: y,
      embeddedActivitiesManager: M.Z,
      locationObject: U.location,
      analyticsLocations: j
    });
  else {
    let e = B.isPrivate() && !I.Z.isCallActive(y),
      t = () => (0, g.Z)({
        targetApplicationId: D,
        currentEmbeddedApplication: H,
        channelId: y,
        guildId: k,
        embeddedActivitiesManager: M.Z,
        analyticsLocations: j
      });
    e ? o.Z.show({
      title: Z.Z.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
      cancelText: Z.Z.Messages.CANCEL,
      confirmText: Z.Z.Messages.CONFIRM,
      onConfirm: () => t(),
      body: Z.Z.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
    }) : t();
  }
} else
  (0, O.Z)({
    guildId: k,
    locationObject: U.location,
    openInPopout: Q,
    initialSelectedApplicationId: D,
    initialSlide: x.ag.SELECT_CHANNEL,
    analyticsLocations: j
  });
  };
  return null != V && (0, h.yE)(V.flags, v.udG.EMBEDDED) ? (0, i.jsx)(d.Gt, {
value: j,
children: (0, i.jsxs)('div', {
  className: L.container,
  children: [
    (0, i.jsx)('div', {
      className: L.imgContainer,
      children: (0, i.jsx)('img', {
        className: L.img,
        alt: V.name,
        src: q.url
      })
    }),
    (0, i.jsxs)('div', {
      className: L.content,
      children: [
        (0, i.jsx)(l.Heading, {
          className: L.heading,
          variant: 'heading-xl/semibold',
          children: V.name
        }),
        (0, i.jsx)(l.Heading, {
          className: L.description,
          variant: 'heading-sm/medium',
          children: null === (t = V.description) || void 0 === t ? void 0 : t.trim()
        }),
        (0, i.jsx)(l.Heading, {
          className: L.learnMore,
          variant: 'heading-sm/medium',
          children: (0, i.jsx)(s.rU, {
            to: v.Z5c.ACTIVITY_DETAILS(D),
            children: Z.Z.Messages.LEARN_MORE
          })
        }),
        (0, i.jsxs)('div', {
          className: L.cta,
          children: [
            z.length > 0 ? (0, i.jsx)('div', {
              className: L.avatars,
              children: (0, i.jsx)(R.Z, {
                guildId: k,
                users: z,
                max: 4
              })
            }) : (0, i.jsxs)('div', {
              className: L.maxParticipants,
              children: [
                (0, i.jsx)(l.GroupIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: L.peopleIcon
                }),
                (0, i.jsx)(l.Text, {
                  variant: 'text-xs/semibold',
                  children: Y
                })
              ]
            }),
            (0, i.jsx)('div', {
              className: L.buttonWrapper,
              children: (0, i.jsx)(l.Button, {
                onClick: J,
                className: L.button,
                color: l.ButtonColors.GREEN,
                disabled: w,
                children: X
              })
            })
          ]
        })
      ]
    })
  ]
})
  }) : null;
}