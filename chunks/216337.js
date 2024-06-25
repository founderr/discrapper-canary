var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(607070),
  o = n(665906),
  c = n(314897),
  u = n(496675),
  d = n(981631),
  h = n(689938),
  m = n(974871);
let E = () => n.e("26176").then(n.t.bind(n, 737848, 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});
t.Z = i.memo(function(e) {
  let {
    channel: t,
    isLastItem: n
  } = e, i = (0, s.e7)([r.Z], () => r.Z.useReducedMotion), p = (0, s.e7)([u.Z], () => u.Z.can(d.Plq.SEND_MESSAGES_IN_THREADS, t)), g = (0, o.Gu)(t), f = (0, s.e7)([c.default], () => c.default.getId());
  return n ? p && !g && t.ownerId !== f ? (0, l.jsxs)("div", {
    className: m.box,
    children: [(0, l.jsx)(a.LottieAnimation, {
      importData: E,
      shouldAnimate: !i,
      className: m.animation
    }), (0, l.jsxs)("div", {
      className: m.textContainer,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        children: h.Z.Messages.FORUM_START_THE_CONVERSATION_HEADER
      }), (0, l.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: h.Z.Messages.FORUM_START_THE_CONVERSATION_DESCRIPTION
      })]
    })]
  }) : null : (0, l.jsx)("div", {
    className: m.divider
  })
})