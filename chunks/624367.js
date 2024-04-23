"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("47120"), n("789020");
var s = n("735250");
n("470079");
var l = n("613828"),
  a = n("442837"),
  i = n("477690"),
  r = n("481060"),
  o = n("668781"),
  u = n("2052"),
  d = n("100527"),
  c = n("906732"),
  f = n("835473"),
  E = n("522474"),
  _ = n("523746"),
  m = n("592125"),
  T = n("594174"),
  I = n("158010"),
  p = n("602623"),
  h = n("630388"),
  N = n("823379"),
  S = n("624138"),
  C = n("566620"),
  A = n("317381"),
  g = n("969345"),
  M = n("638880"),
  R = n("266820"),
  v = n("147865"),
  O = n("778569"),
  x = n("513202"),
  L = n("403404"),
  D = n("701488"),
  P = n("981631"),
  y = n("689938"),
  U = n("97661");
let j = (0, S.cssValueToNumber)(i.default.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);

function b(e) {
  var t, n, i, S;
  let {
    applicationId: b,
    message: B
  } = e, {
    analyticsLocations: G
  } = (0, c.default)(d.default.ACTIVITY_BOOKMARK), F = (0, u.useAnalyticsContext)(), k = B.channel_id, w = (0, a.useStateFromStores)([m.default], () => m.default.getChannel(k), [k]), H = null == w ? void 0 : w.guild_id, V = null != w && (w.isGuildVoice() || w.isPrivate()), Y = (0, a.useStateFromStores)([A.default], () => A.default.getSelfEmbeddedActivityForChannel(k)), K = (null == Y ? void 0 : Y.applicationId) === b, [W, z] = (0, f.default)([b, null !== (n = null == Y ? void 0 : Y.applicationId) && void 0 !== n ? n : ""]), Q = (0, v.default)(null !== (i = null == W ? void 0 : W.maxParticipants) && void 0 !== i ? i : 0), [q] = (0, a.useStateFromStoresArray)([A.default], () => V ? A.default.getEmbeddedActivitiesForChannel(k).filter(e => e.applicationId === b) : [], [b, k, V]), Z = Array.from(null !== (S = null == q ? void 0 : q.userIds) && void 0 !== S ? S : []), X = (0, a.useStateFromStoresArray)([T.default], () => Z.map(e => T.default.getUser(e)).filter(N.isNotNullish), [Z]), J = (0, O.default)({
    applicationId: b,
    size: j
  }), $ = E.default.getWindowOpen(P.PopoutWindowKeys.CHANNEL_CALL_POPOUT), ee = X.length > 0 ? y.default.Messages.JOIN : y.default.Messages.START, et = async () => {
    if (V) {
      let {
        activityConfigs: e,
        applications: t
      } = await (0, C.fetchShelf)({
        guildId: H
      }), n = (0, g.default)({
        applicationId: b,
        activityConfigs: e,
        applications: t
      });
      if (null != q && X.length > 0) await (0, M.default)({
        applicationId: q.applicationId,
        currentEmbeddedApplication: z,
        activityChannelId: k,
        embeddedActivitiesManager: x.default,
        locationObject: F.location,
        analyticsLocations: G
      });
      else {
        let e = w.isPrivate() && !_.default.isCallActive(k),
          t = () => (0, R.default)({
            activityItem: n,
            currentEmbeddedApplication: z,
            channelId: k,
            guildId: H,
            embeddedActivitiesManager: x.default,
            analyticsLocations: G
          });
        e ? o.default.show({
          title: y.default.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
          cancelText: y.default.Messages.CANCEL,
          confirmText: y.default.Messages.CONFIRM,
          onConfirm: () => t(),
          body: y.default.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
        }) : t()
      }
    } else(0, L.default)({
      guildId: H,
      locationObject: F.location,
      openInPopout: $,
      initialSelectedApplicationId: b,
      initialSlide: D.ActivityShelfSlides.SELECT_CHANNEL,
      analyticsLocations: G
    })
  };
  return null != W && (0, h.hasFlag)(W.flags, P.ApplicationFlags.EMBEDDED) ? (0, s.jsx)(c.AnalyticsLocationProvider, {
    value: G,
    children: (0, s.jsxs)("div", {
      className: U.container,
      children: [(0, s.jsx)("div", {
        className: U.imgContainer,
        children: (0, s.jsx)("img", {
          className: U.img,
          alt: W.name,
          src: J.url
        })
      }), (0, s.jsxs)("div", {
        className: U.content,
        children: [(0, s.jsx)(r.Heading, {
          className: U.heading,
          variant: "heading-xl/semibold",
          children: W.name
        }), (0, s.jsx)(r.Heading, {
          className: U.description,
          variant: "heading-sm/medium",
          children: null === (t = W.description) || void 0 === t ? void 0 : t.trim()
        }), (0, s.jsx)(r.Heading, {
          className: U.learnMore,
          variant: "heading-sm/medium",
          children: (0, s.jsx)(l.Link, {
            to: P.Routes.ACTIVITY_DETAILS(b),
            children: y.default.Messages.LEARN_MORE
          })
        }), (0, s.jsxs)("div", {
          className: U.cta,
          children: [X.length > 0 ? (0, s.jsx)("div", {
            className: U.avatars,
            children: (0, s.jsx)(p.default, {
              guildId: H,
              users: X,
              max: 4
            })
          }) : (0, s.jsxs)("div", {
            className: U.maxParticipants,
            children: [(0, s.jsx)(I.default, {
              className: U.peopleIcon
            }), (0, s.jsx)(r.Text, {
              variant: "text-xs/semibold",
              children: Q
            })]
          }), (0, s.jsx)("div", {
            className: U.buttonWrapper,
            children: (0, s.jsx)(r.Button, {
              onClick: et,
              className: U.button,
              color: r.ButtonColors.GREEN,
              disabled: K,
              children: ee
            })
          })]
        })]
      })]
    })
  }) : null
}