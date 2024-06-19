n.d(t, {
  Z: function() {
    return D
  }
}), n(47120), n(789020);
var s = n(735250);
n(470079);
var i = n(613828),
  l = n(442837),
  a = n(477690),
  r = n(481060),
  o = n(668781),
  c = n(2052),
  u = n(100527),
  d = n(906732),
  E = n(835473),
  _ = n(522474),
  I = n(523746),
  T = n(592125),
  N = n(594174),
  m = n(602623),
  h = n(630388),
  C = n(823379),
  S = n(624138),
  A = n(317381),
  p = n(638880),
  g = n(146936),
  f = n(147865),
  O = n(778569),
  R = n(513202),
  M = n(403404),
  x = n(701488),
  v = n(981631),
  L = n(689938),
  Z = n(337533);
let P = (0, S.Mg)(a.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);

function D(e) {
  var t, n, a, S;
  let {
    applicationId: D,
    message: j
  } = e, {
    analyticsLocations: U
  } = (0, d.ZP)(u.Z.ACTIVITY_BOOKMARK), b = (0, c.O)(), y = j.channel_id, B = (0, l.e7)([T.Z], () => T.Z.getChannel(y), [y]), k = null == B ? void 0 : B.guild_id, G = null != B && (B.isGuildVoice() || B.isPrivate()), F = (0, l.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivityForChannel(y)), w = (null == F ? void 0 : F.applicationId) === D, [V, H] = (0, E.Z)([D, null !== (n = null == F ? void 0 : F.applicationId) && void 0 !== n ? n : ""]), Y = (0, f.Z)(null !== (a = null == V ? void 0 : V.maxParticipants) && void 0 !== a ? a : 0), [K] = (0, l.Wu)([A.ZP], () => G ? A.ZP.getEmbeddedActivitiesForChannel(y).filter(e => e.applicationId === D) : [], [D, y, G]), W = Array.from(null !== (S = null == K ? void 0 : K.userIds) && void 0 !== S ? S : []), z = (0, l.Wu)([N.default], () => W.map(e => N.default.getUser(e)).filter(C.lm), [W]), Q = (0, O.Z)({
    applicationId: D,
    size: P,
    names: ["embedded_cover"]
  }), q = _.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT), X = z.length > 0 ? L.Z.Messages.JOIN : L.Z.Messages.START, J = async () => {
    if (G) {
      if (null != K && z.length > 0) await (0, p.Z)({
        applicationId: K.applicationId,
        currentEmbeddedApplication: H,
        activityChannelId: y,
        embeddedActivitiesManager: R.Z,
        locationObject: b.location,
        analyticsLocations: U
      });
      else {
        let e = B.isPrivate() && !I.Z.isCallActive(y),
          t = () => (0, g.Z)({
            targetApplicationId: D,
            currentEmbeddedApplication: H,
            channelId: y,
            guildId: k,
            embeddedActivitiesManager: R.Z,
            analyticsLocations: U
          });
        e ? o.Z.show({
          title: L.Z.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
          cancelText: L.Z.Messages.CANCEL,
          confirmText: L.Z.Messages.CONFIRM,
          onConfirm: () => t(),
          body: L.Z.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
        }) : t()
      }
    } else(0, M.Z)({
      guildId: k,
      locationObject: b.location,
      openInPopout: q,
      initialSelectedApplicationId: D,
      initialSlide: x.ag.SELECT_CHANNEL,
      analyticsLocations: U
    })
  };
  return null != V && (0, h.yE)(V.flags, v.udG.EMBEDDED) ? (0, s.jsx)(d.Gt, {
    value: U,
    children: (0, s.jsxs)("div", {
      className: Z.container,
      children: [(0, s.jsx)("div", {
        className: Z.imgContainer,
        children: (0, s.jsx)("img", {
          className: Z.img,
          alt: V.name,
          src: Q.url
        })
      }), (0, s.jsxs)("div", {
        className: Z.content,
        children: [(0, s.jsx)(r.Heading, {
          className: Z.heading,
          variant: "heading-xl/semibold",
          children: V.name
        }), (0, s.jsx)(r.Heading, {
          className: Z.description,
          variant: "heading-sm/medium",
          children: null === (t = V.description) || void 0 === t ? void 0 : t.trim()
        }), (0, s.jsx)(r.Heading, {
          className: Z.learnMore,
          variant: "heading-sm/medium",
          children: (0, s.jsx)(i.rU, {
            to: v.Z5c.ACTIVITY_DETAILS(D),
            children: L.Z.Messages.LEARN_MORE
          })
        }), (0, s.jsxs)("div", {
          className: Z.cta,
          children: [z.length > 0 ? (0, s.jsx)("div", {
            className: Z.avatars,
            children: (0, s.jsx)(m.Z, {
              guildId: k,
              users: z,
              max: 4
            })
          }) : (0, s.jsxs)("div", {
            className: Z.maxParticipants,
            children: [(0, s.jsx)(r.GroupIcon, {
              size: "md",
              color: "currentColor",
              className: Z.peopleIcon
            }), (0, s.jsx)(r.Text, {
              variant: "text-xs/semibold",
              children: Y
            })]
          }), (0, s.jsx)("div", {
            className: Z.buttonWrapper,
            children: (0, s.jsx)(r.Button, {
              onClick: J,
              className: Z.button,
              color: r.ButtonColors.GREEN,
              disabled: w,
              children: X
            })
          })]
        })]
      })]
    })
  }) : null
}