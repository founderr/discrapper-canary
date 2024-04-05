"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("58540"),
  r = n("937889"),
  o = n("123145"),
  u = n("699516"),
  d = n("512665"),
  c = n("768760"),
  E = n("50182");

function f(e) {
  let {
    message: t,
    channel: n
  } = e, f = (0, l.useStateFromStores)([u.default], () => u.default.isBlocked(t.author.id)), _ = a.useMemo(() => ({
    [n.guild_id]: [t.author.id]
  }), [n.guild_id, t.author.id]);
  (0, i.useSubscribeGuildMembers)(_);
  let T = a.useMemo(() => null != t.content && "" !== t.content ? (0, r.default)(t, {
    formatInline: !0
  }).content : null, [t]);
  return (0, s.jsxs)("div", {
    className: E.threadMessageAccessory,
    children: [(0, s.jsx)("img", {
      alt: "",
      src: t.author.getAvatarURL(n.guild_id, 16),
      className: E.threadMessageAccessoryAvatar
    }), (0, s.jsx)(o.default, {
      message: t,
      channel: n,
      compact: !0
    }), (0, s.jsx)("div", {
      className: E.threadMessageAccessoryPreview,
      children: function(e, t, n) {
        let {
          contentPlaceholder: a,
          renderedContent: l,
          icon: i
        } = (0, d.renderSingleLineMessage)(e, t, n, E.threadMessageAccessoryContent, {
          iconClass: E.threadMessageAccessoryContentIcon,
          iconSize: c.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
        });
        return (0, s.jsxs)(s.Fragment, {
          children: [null != l ? l : (0, s.jsx)("span", {
            className: E.threadMessageAccessoryPlaceholder,
            children: a
          }), i]
        })
      }(t, T, f)
    })]
  })
}