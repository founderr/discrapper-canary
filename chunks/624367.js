"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("47120"), n("789020");
var s = n("735250");
n("470079");
var a = n("613828"),
  l = n("442837"),
  i = n("477690"),
  r = n("481060"),
  o = n("668781"),
  u = n("2052"),
  d = n("100527"),
  c = n("906732"),
  E = n("835473"),
  f = n("522474"),
  _ = n("523746"),
  T = n("592125"),
  I = n("594174"),
  m = n("158010"),
  N = n("602623"),
  p = n("630388"),
  S = n("823379"),
  C = n("624138"),
  A = n("317381"),
  h = n("638880"),
  g = n("146936"),
  M = n("147865"),
  O = n("778569"),
  R = n("513202"),
  v = n("403404"),
  L = n("701488"),
  P = n("981631"),
  x = n("689938"),
  D = n("818838");
let y = (0, C.cssValueToNumber)(i.default.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);

function U(e) {
  var t, n, i, C;
  let {
    applicationId: U,
    message: j
  } = e, {
    analyticsLocations: b
  } = (0, c.default)(d.default.ACTIVITY_BOOKMARK), G = (0, u.useAnalyticsContext)(), B = j.channel_id, F = (0, l.useStateFromStores)([T.default], () => T.default.getChannel(B), [B]), k = null == F ? void 0 : F.guild_id, w = null != F && (F.isGuildVoice() || F.isPrivate()), H = (0, l.useStateFromStores)([A.default], () => A.default.getSelfEmbeddedActivityForChannel(B)), V = (null == H ? void 0 : H.applicationId) === U, [Y, K] = (0, E.default)([U, null !== (n = null == H ? void 0 : H.applicationId) && void 0 !== n ? n : ""]), W = (0, M.default)(null !== (i = null == Y ? void 0 : Y.maxParticipants) && void 0 !== i ? i : 0), [z] = (0, l.useStateFromStoresArray)([A.default], () => w ? A.default.getEmbeddedActivitiesForChannel(B).filter(e => e.applicationId === U) : [], [U, B, w]), Q = Array.from(null !== (C = null == z ? void 0 : z.userIds) && void 0 !== C ? C : []), q = (0, l.useStateFromStoresArray)([I.default], () => Q.map(e => I.default.getUser(e)).filter(S.isNotNullish), [Q]), X = (0, O.default)({
    applicationId: U,
    size: y
  }), Z = f.default.getWindowOpen(P.PopoutWindowKeys.CHANNEL_CALL_POPOUT), J = q.length > 0 ? x.default.Messages.JOIN : x.default.Messages.START, $ = async () => {
    if (w) {
      if (null != z && q.length > 0) await (0, h.default)({
        applicationId: z.applicationId,
        currentEmbeddedApplication: K,
        activityChannelId: B,
        embeddedActivitiesManager: R.default,
        locationObject: G.location,
        analyticsLocations: b
      });
      else {
        let e = F.isPrivate() && !_.default.isCallActive(B),
          t = () => (0, g.default)({
            targetApplicationId: U,
            currentEmbeddedApplication: K,
            channelId: B,
            guildId: k,
            embeddedActivitiesManager: R.default,
            analyticsLocations: b
          });
        e ? o.default.show({
          title: x.default.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
          cancelText: x.default.Messages.CANCEL,
          confirmText: x.default.Messages.CONFIRM,
          onConfirm: () => t(),
          body: x.default.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
        }) : t()
      }
    } else(0, v.default)({
      guildId: k,
      locationObject: G.location,
      openInPopout: Z,
      initialSelectedApplicationId: U,
      initialSlide: L.ActivityShelfSlides.SELECT_CHANNEL,
      analyticsLocations: b
    })
  };
  return null != Y && (0, p.hasFlag)(Y.flags, P.ApplicationFlags.EMBEDDED) ? (0, s.jsx)(c.AnalyticsLocationProvider, {
    value: b,
    children: (0, s.jsxs)("div", {
      className: D.container,
      children: [(0, s.jsx)("div", {
        className: D.imgContainer,
        children: (0, s.jsx)("img", {
          className: D.img,
          alt: Y.name,
          src: X.url
        })
      }), (0, s.jsxs)("div", {
        className: D.content,
        children: [(0, s.jsx)(r.Heading, {
          className: D.heading,
          variant: "heading-xl/semibold",
          children: Y.name
        }), (0, s.jsx)(r.Heading, {
          className: D.description,
          variant: "heading-sm/medium",
          children: null === (t = Y.description) || void 0 === t ? void 0 : t.trim()
        }), (0, s.jsx)(r.Heading, {
          className: D.learnMore,
          variant: "heading-sm/medium",
          children: (0, s.jsx)(a.Link, {
            to: P.Routes.ACTIVITY_DETAILS(U),
            children: x.default.Messages.LEARN_MORE
          })
        }), (0, s.jsxs)("div", {
          className: D.cta,
          children: [q.length > 0 ? (0, s.jsx)("div", {
            className: D.avatars,
            children: (0, s.jsx)(N.default, {
              guildId: k,
              users: q,
              max: 4
            })
          }) : (0, s.jsxs)("div", {
            className: D.maxParticipants,
            children: [(0, s.jsx)(m.default, {
              className: D.peopleIcon
            }), (0, s.jsx)(r.Text, {
              variant: "text-xs/semibold",
              children: W
            })]
          }), (0, s.jsx)("div", {
            className: D.buttonWrapper,
            children: (0, s.jsx)(r.Button, {
              onClick: $,
              className: D.button,
              color: r.ButtonColors.GREEN,
              disabled: V,
              children: J
            })
          })]
        })]
      })]
    })
  }) : null
}