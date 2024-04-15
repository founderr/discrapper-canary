"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
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
  A = n("566620"),
  h = n("317381"),
  g = n("969345"),
  M = n("638880"),
  O = n("266820"),
  R = n("147865"),
  v = n("778569"),
  L = n("513202"),
  P = n("403404"),
  D = n("701488"),
  x = n("981631"),
  y = n("689938"),
  U = n("97661");
let j = (0, C.cssValueToNumber)(i.default.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);

function b(e) {
  var t, n, i, C;
  let {
    applicationId: b,
    message: G
  } = e, {
    analyticsLocations: B
  } = (0, c.default)(d.default.ACTIVITY_BOOKMARK), F = (0, u.useAnalyticsContext)(), k = G.channel_id, w = (0, l.useStateFromStores)([T.default], () => T.default.getChannel(k), [k]), H = null == w ? void 0 : w.guild_id, V = null != w && (w.isGuildVoice() || w.isPrivate()), Y = (0, l.useStateFromStores)([h.default], () => h.default.getSelfEmbeddedActivityForChannel(k)), K = (null == Y ? void 0 : Y.applicationId) === b, [W, z] = (0, E.default)([b, null !== (n = null == Y ? void 0 : Y.applicationId) && void 0 !== n ? n : ""]), Q = (0, R.default)(null !== (i = null == W ? void 0 : W.maxParticipants) && void 0 !== i ? i : 0), [q] = (0, l.useStateFromStoresArray)([h.default], () => V ? h.default.getEmbeddedActivitiesForChannel(k).filter(e => e.applicationId === b) : [], [b, k, V]), J = Array.from(null !== (C = null == q ? void 0 : q.userIds) && void 0 !== C ? C : []), Z = (0, l.useStateFromStoresArray)([I.default], () => J.map(e => I.default.getUser(e)).filter(S.isNotNullish), [J]), X = (0, v.default)({
    applicationId: b,
    size: j
  }), $ = f.default.getWindowOpen(x.PopoutWindowKeys.CHANNEL_CALL_POPOUT), ee = Z.length > 0 ? y.default.Messages.JOIN : y.default.Messages.START, et = async () => {
    if (V) {
      let {
        activityConfigs: e,
        applications: t
      } = await (0, A.fetchShelf)({
        guildId: H
      }), n = (0, g.default)({
        applicationId: b,
        activityConfigs: e,
        applications: t
      });
      if (null != q && Z.length > 0) await (0, M.default)({
        applicationId: q.applicationId,
        currentEmbeddedApplication: z,
        activityChannelId: k,
        embeddedActivitiesManager: L.default,
        locationObject: F.location,
        analyticsLocations: B
      });
      else {
        let e = w.isPrivate() && !_.default.isCallActive(k),
          t = () => (0, O.default)({
            activityItem: n,
            currentEmbeddedApplication: z,
            channelId: k,
            guildId: H,
            embeddedActivitiesManager: L.default,
            analyticsLocations: B
          });
        e ? o.default.show({
          title: y.default.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
          cancelText: y.default.Messages.CANCEL,
          confirmText: y.default.Messages.CONFIRM,
          onConfirm: () => t(),
          body: y.default.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
        }) : t()
      }
    } else(0, P.default)({
      guildId: H,
      locationObject: F.location,
      openInPopout: $,
      initialSelectedApplicationId: b,
      initialSlide: D.ActivityShelfSlides.SELECT_CHANNEL,
      analyticsLocations: B
    })
  };
  return null != W && (0, p.hasFlag)(W.flags, x.ApplicationFlags.EMBEDDED) ? (0, s.jsx)(c.AnalyticsLocationProvider, {
    value: B,
    children: (0, s.jsxs)("div", {
      className: U.container,
      children: [(0, s.jsx)("div", {
        className: U.imgContainer,
        children: (0, s.jsx)("img", {
          className: U.img,
          alt: W.name,
          src: X.url
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
          children: (0, s.jsx)(a.Link, {
            to: x.Routes.ACTIVITY_DETAILS(b),
            children: y.default.Messages.LEARN_MORE
          })
        }), (0, s.jsxs)("div", {
          className: U.cta,
          children: [Z.length > 0 ? (0, s.jsx)("div", {
            className: U.avatars,
            children: (0, s.jsx)(N.default, {
              guildId: H,
              users: Z,
              max: 4
            })
          }) : (0, s.jsxs)("div", {
            className: U.maxParticipants,
            children: [(0, s.jsx)(m.default, {
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