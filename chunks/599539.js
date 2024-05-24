"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
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
    guildId: s,
    cardIndex: h
  } = e, {
    category: A
  } = n, [m, N] = r.useState(!1), p = A === f.CardCategory.HANGOUT && n.streamUserIds.length > 0, O = (0, o.useStateFromStores)([d.default], () => p ? d.default.getPreviewURL(s, n.channelId, n.streamUserIds[0]) : null), C = (0, o.useStateFromStores)([d.default], () => A === f.CardCategory.HANGOUT ? d.default.getIsPreviewLoading(s, n.channelId, n.streamUserIds[0]) : null), R = A === f.CardCategory.HANGOUT && n.streamUserIds.length > 0 && null == O && !C, g = (0, o.useStateFromStores)([_.default], () => {
    let e = A === f.CardCategory.HANGOUT || A === f.CardCategory.GAMING ? n.channelId : A === f.CardCategory.EVENT ? n.event.channel_id : A === f.CardCategory.EMBEDDED_ACTIVITY ? n.embeddedActivities[0].channelId : null;
    return _.default.getChannel(e)
  }), L = (0, o.useStateFromStores)([u.default], () => u.default.getActiveEventByChannel(null == g ? void 0 : g.id)), {
    usersToShow: v,
    othersCount: D
  } = (0, I.useVoiceChannelUsers)(null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : "", s), {
    usersToShow: M
  } = (0, I.useGetEventCardUsers)(g), y = (0, T.useImage)(n, s, O), P = (0, T.useCardTitle)(n, s), U = (0, T.useSubtitle)(n), b = (0, T.useCount)(n), G = (0, T.getClickHandler)(n, s, h), w = (0, T.getJoinButton)(n, s, h), k = (null != L || !!(null == g ? void 0 : g.isGuildStageVoice())) && M.length > 0, B = A === f.CardCategory.HANGOUT && (0 === n.streamUserIds.length || R) && !(null == g ? void 0 : g.isGuildStageVoice()), V = A === f.CardCategory.EMBEDDED_ACTIVITY && n.streamersCount > 0 ? (0, i.jsxs)("div", {
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
    onClick: () => null == G ? void 0 : G(),
    tag: "div",
    className: S.container,
    onMouseEnter: () => N(!0),
    onMouseLeave: () => N(!1),
    children: [(0, i.jsx)("div", {
      className: a()(S.image, {
        [S.streamContainer]: p && !R && !(null == g ? void 0 : g.isGuildStageVoice())
      }),
      children: y
    }), (0, i.jsxs)("div", {
      className: S.content,
      children: [null != P && (0, i.jsx)(l.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        className: 0 === b.length ? S.multiLineTitle : S.singleLineTitle,
        children: P
      }), null != U && (0, i.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: S.subtitle,
        children: U
      }), !(k || B) && !(null == g ? void 0 : g.isGuildStageVoice()) && v.length > 0 && (0, i.jsx)(E.CardAvatars, {
        users: v,
        othersCount: D,
        extraPill: V
      })]
    }), m && w]
  })
}