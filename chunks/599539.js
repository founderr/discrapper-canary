"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("442837"),
  l = n("481060"),
  u = n("924301"),
  d = n("543882"),
  _ = n("592125"),
  c = n("645284"),
  E = n("456774"),
  I = n("718582"),
  T = n("837771"),
  f = n("126134"),
  S = n("181096");

function h(e) {
  var t;
  let {
    cardData: n,
    guildId: a
  } = e, {
    category: h
  } = n, [A, m] = r.useState(!1), N = h === f.CardCategory.HANGOUT && n.streamUserIds.length > 0, p = (0, o.useStateFromStores)([d.default], () => N ? d.default.getPreviewURL(a, n.channelId, n.streamUserIds[0]) : null), O = (0, o.useStateFromStores)([_.default], () => {
    let e = h === f.CardCategory.HANGOUT || h === f.CardCategory.GAMING ? n.channelId : h === f.CardCategory.EVENT ? n.event.channel_id : h === f.CardCategory.EMBEDDED_ACTIVITY ? n.embeddedActivities[0].channelId : null;
    return _.default.getChannel(e)
  }), C = (0, o.useStateFromStores)([u.default], () => u.default.getActiveEventByChannel(null == O ? void 0 : O.id)), {
    usersToShow: R,
    othersCount: g
  } = (0, I.useVoiceChannelUsers)(null !== (t = null == O ? void 0 : O.id) && void 0 !== t ? t : "", a), {
    usersToShow: L
  } = (0, I.useGetEventCardUsers)(O), v = (0, T.useImage)(n, a, p), D = (0, T.useCardTitle)(n, a), M = (0, T.useSubtitle)(n), y = (0, T.useCount)(n), P = (0, T.getClickHandler)(n, a), U = (0, T.getJoinButton)(n, a), b = (null != C || !!(null == O ? void 0 : O.isGuildStageVoice())) && L.length > 0, G = h === f.CardCategory.HANGOUT && 0 === n.streamUserIds.length && !(null == O ? void 0 : O.isGuildStageVoice()), w = b || G, k = h === f.CardCategory.EMBEDDED_ACTIVITY && n.streamersCount > 0 ? (0, i.jsxs)("div", {
    className: S.pill,
    children: [(0, i.jsx)(c.default, {
      className: S.pillIcon
    }), (0, i.jsx)(l.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: n.streamersCount
    })]
  }) : null;
  return (0, i.jsxs)(l.Clickable, {
    onClick: () => null == P ? void 0 : P(),
    tag: "div",
    className: S.container,
    onMouseEnter: () => m(!0),
    onMouseLeave: () => m(!1),
    children: [(0, i.jsx)("div", {
      className: s()(S.image, {
        [S.streamContainer]: N && !(null == O ? void 0 : O.isGuildStageVoice()),
        [S.groupAvatar]: w
      }),
      children: v
    }), (0, i.jsxs)("div", {
      className: S.content,
      children: [null != D && (0, i.jsx)(l.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        className: 0 === y.length ? S.multiLineTitle : S.singleLineTitle,
        children: D
      }), null != M && (0, i.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: S.subtitle,
        children: M
      }), !w && !(null == O ? void 0 : O.isGuildStageVoice()) && (0, i.jsx)(E.CardAvatars, {
        users: R,
        othersCount: g,
        extraPill: k
      })]
    }), A && U]
  })
}