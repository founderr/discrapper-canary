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
  E = n("768760"),
  f = n("822545");

function _(e) {
  let {
    message: t,
    channel: n
  } = e, _ = (0, l.useStateFromStores)([d.default], () => d.default.isBlocked(t.author.id)), T = (0, r.useActiveKeywordFiltersCacheKey)(), m = a.useMemo(() => ({
    [n.guild_id]: [t.author.id]
  }), [n.guild_id, t.author.id]);
  (0, i.useSubscribeGuildMembers)(m);
  let I = a.useMemo(() => null != t.content && "" !== t.content ? (0, o.default)(t, {
    formatInline: !0,
    shouldFilterKeywords: null != T
  }).content : null, [t, T]);
  return (0, s.jsxs)("div", {
    className: f.threadMessageAccessory,
    children: [(0, s.jsx)("img", {
      alt: "",
      src: t.author.getAvatarURL(n.guild_id, 16),
      className: f.threadMessageAccessoryAvatar
    }), (0, s.jsx)(u.default, {
      message: t,
      channel: n,
      compact: !0
    }), (0, s.jsx)("div", {
      className: f.threadMessageAccessoryPreview,
      children: function(e, t, n) {
        let {
          contentPlaceholder: a,
          renderedContent: l,
          leadingIcon: i,
          trailingIcon: r
        } = (0, c.renderSingleLineMessage)(e, t, n, f.threadMessageAccessoryContent, {
          trailingIconClass: f.threadMessageAccessoryContentTrailingIcon,
          leadingIconClass: f.threadMessageAccessoryContentLeadingIcon,
          iconSize: E.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
        });
        return (0, s.jsxs)(s.Fragment, {
          children: [i, null != l ? l : (0, s.jsx)("span", {
            className: f.threadMessageAccessoryPlaceholder,
            children: a
          }), r]
        })
      }(t, I, _)
    })]
  })
}