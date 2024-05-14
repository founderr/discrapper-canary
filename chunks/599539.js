"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("442837"),
  l = n("481060"),
  u = n("543882"),
  d = n("837771"),
  _ = n("126134"),
  c = n("181096");

function E(e) {
  let {
    cardData: t,
    guildId: n
  } = e, [a, E] = r.useState(!1), I = (0, o.useStateFromStores)([u.default], () => t.category === _.CardCategory.HANGOUT && t.streamUserIds.length > 0 ? u.default.getPreviewURL(n, t.channelId, t.streamUserIds[0]) : null), T = (0, d.getImage)(t, n, I), f = (0, d.getCardTitle)(t, n), S = (0, d.getSubtitle)(t), h = (0, d.getCount)(t), A = (0, d.getCategoryIcon)(t), m = (0, d.getClickHandler)(t, n), N = (0, d.getJoinButton)(t, n), p = t.category === _.CardCategory.HANGOUT && 0 === t.streamUserIds.length;
  return (0, i.jsxs)(l.Clickable, {
    onClick: () => null == m ? void 0 : m(),
    tag: "div",
    className: c.container,
    onMouseEnter: () => E(!0),
    onMouseLeave: () => E(!1),
    children: [(0, i.jsx)("div", {
      className: s()(c.image, {
        [c.streamContainer]: null != I,
        [c.groupAvatar]: p
      }),
      children: T
    }), (0, i.jsxs)("div", {
      className: c.content,
      children: [(0, i.jsxs)("div", {
        className: c.header,
        children: [null != f && (0, i.jsx)(l.Heading, {
          color: "header-primary",
          variant: "heading-sm/semibold",
          className: p ? c.multiLineTitle : c.singleLineTitle,
          children: f
        }), (0, i.jsx)(A, {
          className: c.categoryIcon
        })]
      }), (0, i.jsxs)("div", {
        className: c.footer,
        children: [(0, i.jsxs)("div", {
          className: c.content,
          children: [null != S && (0, i.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: c.singleLineTitle,
            children: S
          }), h.length > 0 && (0, i.jsx)("div", {
            className: c.pillContainer,
            children: h.map((e, t) => {
              let {
                icon: n,
                count: r
              } = e;
              return r > 0 && (0, i.jsxs)("div", {
                className: c.pill,
                children: [(0, i.jsx)(n, {
                  className: c.pillIcon
                }), (0, i.jsx)(l.Text, {
                  variant: "text-xs/medium",
                  color: "text-normal",
                  children: r
                })]
              }, t)
            })
          })]
        }), a && N]
      })]
    })]
  })
}