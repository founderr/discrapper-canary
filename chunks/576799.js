"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("58540"),
  r = n("200120"),
  o = n("937889"),
  u = n("123145"),
  d = n("699516"),
  c = n("512665"),
  f = n("768760"),
  E = n("822545");

function _(e) {
  let {
    message: t,
    channel: n
  } = e, _ = (0, l.useStateFromStores)([d.default], () => d.default.isBlocked(t.author.id)), m = (0, r.useActiveKeywordFiltersCacheKey)(), T = a.useMemo(() => ({
    [n.guild_id]: [t.author.id]
  }), [n.guild_id, t.author.id]);
  (0, i.useSubscribeGuildMembers)(T);
  let I = a.useMemo(() => null != t.content && "" !== t.content ? (0, o.default)(t, {
    formatInline: !0,
    shouldFilterKeywords: null != m
  }).content : null, [t, m]);
  return (0, s.jsxs)("div", {
    className: E.threadMessageAccessory,
    children: [(0, s.jsx)("img", {
      alt: "",
      src: t.author.getAvatarURL(n.guild_id, 16),
      className: E.threadMessageAccessoryAvatar
    }), (0, s.jsx)(u.default, {
      message: t,
      channel: n,
      compact: !0
    }), (0, s.jsx)("div", {
      className: E.threadMessageAccessoryPreview,
      children: function(e, t, n) {
        let {
          contentPlaceholder: a,
          renderedContent: l,
          leadingIcon: i,
          trailingIcon: r
        } = (0, c.renderSingleLineMessage)(e, t, n, E.threadMessageAccessoryContent, {
          trailingIconClass: E.threadMessageAccessoryContentTrailingIcon,
          leadingIconClass: E.threadMessageAccessoryContentLeadingIcon,
          iconSize: f.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
        });
        return (0, s.jsxs)(s.Fragment, {
          children: [i, null != l ? l : (0, s.jsx)("span", {
            className: E.threadMessageAccessoryPlaceholder,
            children: a
          }), r]
        })
      }(t, I, _)
    })]
  })
}