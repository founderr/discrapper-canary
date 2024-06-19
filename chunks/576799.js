n.d(t, {
  Z: function() {
    return I
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(58540),
  r = n(200120),
  o = n(937889),
  c = n(123145),
  u = n(699516),
  d = n(512665),
  E = n(768760),
  _ = n(250050);

function I(e) {
  let {
    message: t,
    channel: n
  } = e, I = (0, l.e7)([u.Z], () => u.Z.isBlockedForMessage(t)), T = (0, r.B)(), N = i.useMemo(() => ({
    [n.guild_id]: [t.author.id]
  }), [n.guild_id, t.author.id]);
  (0, a.$)(N);
  let m = i.useMemo(() => null != t.content && "" !== t.content ? (0, o.ZP)(t, {
    formatInline: !0,
    shouldFilterKeywords: null != T
  }).content : null, [t, T]);
  return (0, s.jsxs)("div", {
    className: _.threadMessageAccessory,
    children: [(0, s.jsx)("img", {
      alt: "",
      src: t.author.getAvatarURL(n.guild_id, 16),
      className: _.threadMessageAccessoryAvatar
    }), (0, s.jsx)(c.Z, {
      message: t,
      channel: n,
      compact: !0
    }), (0, s.jsx)("div", {
      className: _.threadMessageAccessoryPreview,
      children: function(e, t, n) {
        let {
          contentPlaceholder: i,
          renderedContent: l,
          leadingIcon: a,
          trailingIcon: r
        } = (0, d.f)(e, t, n, _.threadMessageAccessoryContent, {
          trailingIconClass: _.threadMessageAccessoryContentTrailingIcon,
          leadingIconClass: _.threadMessageAccessoryContentLeadingIcon,
          iconSize: E.WW
        });
        return (0, s.jsxs)(s.Fragment, {
          children: [a, null != l ? l : (0, s.jsx)("span", {
            className: _.threadMessageAccessoryPlaceholder,
            children: i
          }), r]
        })
      }(t, m, I)
    })]
  })
}