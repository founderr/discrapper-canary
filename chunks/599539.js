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
    guildId: s
  } = e, {
    category: h
  } = n, [A, m] = r.useState(!1), N = h === f.CardCategory.HANGOUT && n.streamUserIds.length > 0, p = (0, o.useStateFromStores)([d.default], () => N ? d.default.getPreviewURL(s, n.channelId, n.streamUserIds[0]) : null), O = (0, o.useStateFromStores)([d.default], () => h === f.CardCategory.HANGOUT ? d.default.getIsPreviewLoading(s, n.channelId, n.streamUserIds[0]) : null), C = h === f.CardCategory.HANGOUT && n.streamUserIds.length > 0 && null == p && !O, R = (0, o.useStateFromStores)([_.default], () => {
    let e = h === f.CardCategory.HANGOUT || h === f.CardCategory.GAMING ? n.channelId : h === f.CardCategory.EVENT ? n.event.channel_id : h === f.CardCategory.EMBEDDED_ACTIVITY ? n.embeddedActivities[0].channelId : null;
    return _.default.getChannel(e)
  }), g = (0, o.useStateFromStores)([u.default], () => u.default.getActiveEventByChannel(null == R ? void 0 : R.id)), {
    usersToShow: L,
    othersCount: v
  } = (0, I.useVoiceChannelUsers)(null !== (t = null == R ? void 0 : R.id) && void 0 !== t ? t : "", s), {
    usersToShow: D
  } = (0, I.useGetEventCardUsers)(R), M = (0, T.useImage)(n, s, p), y = (0, T.useCardTitle)(n, s), P = (0, T.useSubtitle)(n), U = (0, T.useCount)(n), b = (0, T.getClickHandler)(n, s), G = (0, T.getJoinButton)(n, s), w = (null != g || !!(null == R ? void 0 : R.isGuildStageVoice())) && D.length > 0, k = h === f.CardCategory.HANGOUT && (0 === n.streamUserIds.length || C) && !(null == R ? void 0 : R.isGuildStageVoice()), B = h === f.CardCategory.EMBEDDED_ACTIVITY && n.streamersCount > 0 ? (0, i.jsxs)("div", {
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
    onClick: () => null == b ? void 0 : b(),
    tag: "div",
    className: S.container,
    onMouseEnter: () => m(!0),
    onMouseLeave: () => m(!1),
    children: [(0, i.jsx)("div", {
      className: a()(S.image, {
        [S.streamContainer]: N && !C && !(null == R ? void 0 : R.isGuildStageVoice())
      }),
      children: M
    }), (0, i.jsxs)("div", {
      className: S.content,
      children: [null != y && (0, i.jsx)(l.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        className: 0 === U.length ? S.multiLineTitle : S.singleLineTitle,
        children: y
      }), null != P && (0, i.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: S.subtitle,
        children: P
      }), !(w || k) && !(null == R ? void 0 : R.isGuildStageVoice()) && L.length > 0 && (0, i.jsx)(E.CardAvatars, {
        users: L,
        othersCount: v,
        extraPill: B
      })]
    }), A && G]
  })
}