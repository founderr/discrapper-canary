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
  m = n(594174),
  N = n(602623),
  h = n(630388),
  C = n(823379),
  S = n(624138),
  A = n(317381),
  g = n(638880),
  p = n(146936),
  f = n(147865),
  R = n(778569),
  O = n(513202),
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
  } = (0, d.ZP)(u.Z.ACTIVITY_BOOKMARK), b = (0, c.O)(), y = j.channel_id, B = (0, l.e7)([T.Z], () => T.Z.getChannel(y), [y]), k = null == B ? void 0 : B.guild_id, G = null != B && (B.isGuildVoice() || B.isPrivate()), F = (0, l.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivityForChannel(y)), V = (null == F ? void 0 : F.applicationId) === D, [w, H] = (0, E.Z)([D, null !== (n = null == F ? void 0 : F.applicationId) && void 0 !== n ? n : ""]), Y = (0, f.Z)(null !== (a = null == w ? void 0 : w.maxParticipants) && void 0 !== a ? a : 0), [W] = (0, l.Wu)([A.ZP], () => G ? A.ZP.getEmbeddedActivitiesForChannel(y).filter(e => e.applicationId === D) : [], [D, y, G]), K = Array.from(null !== (S = null == W ? void 0 : W.userIds) && void 0 !== S ? S : []), z = (0, l.Wu)([m.default], () => K.map(e => m.default.getUser(e)).filter(C.lm), [K]), Q = (0, R.Z)({
    applicationId: D,
    size: P,
    names: ["embedded_cover"]
  }), X = _.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT), q = z.length > 0 ? L.Z.Messages.JOIN : L.Z.Messages.START, J = async () => {
    if (G) {
      if (null != W && z.length > 0) await (0, g.Z)({
        applicationId: W.applicationId,
        currentEmbeddedApplication: H,
        activityChannelId: y,
        embeddedActivitiesManager: O.Z,
        locationObject: b.location,
        analyticsLocations: U
      });
      else {
        let e = B.isPrivate() && !I.Z.isCallActive(y),
          t = () => (0, p.Z)({
            targetApplicationId: D,
            currentEmbeddedApplication: H,
            channelId: y,
            guildId: k,
            embeddedActivitiesManager: O.Z,
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
      openInPopout: X,
      initialSelectedApplicationId: D,
      initialSlide: x.ag.SELECT_CHANNEL,
      analyticsLocations: U
    })
  };
  return null != w && (0, h.yE)(w.flags, v.udG.EMBEDDED) ? (0, s.jsx)(d.Gt, {
    value: U,
    children: (0, s.jsxs)("div", {
      className: Z.container,
      children: [(0, s.jsx)("div", {
        className: Z.imgContainer,
        children: (0, s.jsx)("img", {
          className: Z.img,
          alt: w.name,
          src: Q.url
        })
      }), (0, s.jsxs)("div", {
        className: Z.content,
        children: [(0, s.jsx)(r.Heading, {
          className: Z.heading,
          variant: "heading-xl/semibold",
          children: w.name
        }), (0, s.jsx)(r.Heading, {
          className: Z.description,
          variant: "heading-sm/medium",
          children: null === (t = w.description) || void 0 === t ? void 0 : t.trim()
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
            children: (0, s.jsx)(N.Z, {
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
              disabled: V,
              children: q
            })
          })]
        })]
      })]
    })
  }) : null
}