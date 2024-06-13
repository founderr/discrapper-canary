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
  f = n("835473"),
  E = n("522474"),
  _ = n("523746"),
  T = n("592125"),
  m = n("594174"),
  I = n("158010"),
  N = n("602623"),
  p = n("630388"),
  h = n("823379"),
  S = n("624138"),
  C = n("317381"),
  A = n("638880"),
  g = n("146936"),
  M = n("147865"),
  R = n("778569"),
  O = n("513202"),
  v = n("403404"),
  x = n("701488"),
  L = n("981631"),
  P = n("689938"),
  D = n("818838");
let y = (0, S.cssValueToNumber)(i.default.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);

function U(e) {
  var t, n, i, S;
  let {
    applicationId: U,
    message: j
  } = e, {
    analyticsLocations: b
  } = (0, c.default)(d.default.ACTIVITY_BOOKMARK), G = (0, u.useAnalyticsContext)(), F = j.channel_id, B = (0, l.useStateFromStores)([T.default], () => T.default.getChannel(F), [F]), k = null == B ? void 0 : B.guild_id, w = null != B && (B.isGuildVoice() || B.isPrivate()), H = (0, l.useStateFromStores)([C.default], () => C.default.getSelfEmbeddedActivityForChannel(F)), V = (null == H ? void 0 : H.applicationId) === U, [Y, K] = (0, f.default)([U, null !== (n = null == H ? void 0 : H.applicationId) && void 0 !== n ? n : ""]), W = (0, M.default)(null !== (i = null == Y ? void 0 : Y.maxParticipants) && void 0 !== i ? i : 0), [z] = (0, l.useStateFromStoresArray)([C.default], () => w ? C.default.getEmbeddedActivitiesForChannel(F).filter(e => e.applicationId === U) : [], [U, F, w]), Q = Array.from(null !== (S = null == z ? void 0 : z.userIds) && void 0 !== S ? S : []), q = (0, l.useStateFromStoresArray)([m.default], () => Q.map(e => m.default.getUser(e)).filter(h.isNotNullish), [Q]), X = (0, R.default)({
    applicationId: U,
    size: y,
    names: ["embedded_cover"]
  }), Z = E.default.getWindowOpen(L.PopoutWindowKeys.CHANNEL_CALL_POPOUT), J = q.length > 0 ? P.default.Messages.JOIN : P.default.Messages.START, $ = async () => {
    if (w) {
      if (null != z && q.length > 0) await (0, A.default)({
        applicationId: z.applicationId,
        currentEmbeddedApplication: K,
        activityChannelId: F,
        embeddedActivitiesManager: O.default,
        locationObject: G.location,
        analyticsLocations: b
      });
      else {
        let e = B.isPrivate() && !_.default.isCallActive(F),
          t = () => (0, g.default)({
            targetApplicationId: U,
            currentEmbeddedApplication: K,
            channelId: F,
            guildId: k,
            embeddedActivitiesManager: O.default,
            analyticsLocations: b
          });
        e ? o.default.show({
          title: P.default.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
          cancelText: P.default.Messages.CANCEL,
          confirmText: P.default.Messages.CONFIRM,
          onConfirm: () => t(),
          body: P.default.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
        }) : t()
      }
    } else(0, v.default)({
      guildId: k,
      locationObject: G.location,
      openInPopout: Z,
      initialSelectedApplicationId: U,
      initialSlide: x.ActivityShelfSlides.SELECT_CHANNEL,
      analyticsLocations: b
    })
  };
  return null != Y && (0, p.hasFlag)(Y.flags, L.ApplicationFlags.EMBEDDED) ? (0, s.jsx)(c.AnalyticsLocationProvider, {
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
            to: L.Routes.ACTIVITY_DETAILS(U),
            children: P.default.Messages.LEARN_MORE
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
            children: [(0, s.jsx)(I.default, {
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