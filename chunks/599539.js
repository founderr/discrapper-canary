"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("442837"),
  l = n("481060"),
  u = n("543882"),
  d = n("592125"),
  _ = n("718582"),
  c = n("837771"),
  E = n("126134"),
  I = n("181096");

function T(e) {
  let {
    cardData: t,
    guildId: n
  } = e, {
    category: s
  } = t, [T, f] = r.useState(!1), S = (0, o.useStateFromStores)([u.default], () => s === E.CardCategory.HANGOUT && t.streamUserIds.length > 0 ? u.default.getPreviewURL(n, t.channelId, t.streamUserIds[0]) : null), h = (0, o.useStateFromStores)([d.default], () => {
    let e = s === E.CardCategory.HANGOUT || s === E.CardCategory.GAMING ? t.channelId : s === E.CardCategory.EVENT ? t.event.channel_id : s === E.CardCategory.EMBEDDED_ACTIVITY ? t.embeddedActivities[0].channelId : null;
    return d.default.getChannel(e)
  }), {
    usersToShow: A
  } = (0, _.useGetEventCardUsers)(h), m = (0, c.useImage)(t, n, S), N = (0, c.useCardTitle)(t, n), p = (0, c.useSubtitle)(t), O = (0, c.useCount)(t), C = (0, c.getClickHandler)(t, n), R = (0, c.getJoinButton)(t, n), g = !!(null == h ? void 0 : h.isGuildStageVoice()) && A.length > 0, L = s === E.CardCategory.HANGOUT && 0 === t.streamUserIds.length && !(null == h ? void 0 : h.isGuildStageVoice());
  return (0, i.jsxs)(l.Clickable, {
    onClick: () => null == C ? void 0 : C(),
    tag: "div",
    className: I.container,
    onMouseEnter: () => f(!0),
    onMouseLeave: () => f(!1),
    children: [(0, i.jsx)("div", {
      className: a()(I.image, {
        [I.streamContainer]: null != S && !(null == h ? void 0 : h.isGuildStageVoice()),
        [I.groupAvatar]: g || L
      }),
      children: m
    }), (0, i.jsxs)("div", {
      className: I.content,
      children: [null != N && (0, i.jsx)(l.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        className: 0 === O.length ? I.multiLineTitle : I.singleLineTitle,
        children: N
      }), null != p && (0, i.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: I.subtitle,
        children: p
      }), O.length > 0 && (0, i.jsx)("div", {
        className: I.pillContainer,
        children: O.map((e, t) => {
          let {
            icon: n,
            count: r
          } = e;
          return null != r && (0, i.jsxs)("div", {
            className: I.pill,
            children: [(0, i.jsx)(n, {
              className: I.pillIcon
            }), (0, i.jsx)(l.Text, {
              variant: "text-xs/medium",
              color: "text-normal",
              children: r
            })]
          }, t)
        })
      })]
    }), T && R]
  })
}