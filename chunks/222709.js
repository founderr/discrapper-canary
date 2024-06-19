var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(528963),
  o = n(143740),
  c = n(727218),
  u = n(212342),
  d = n(689938),
  E = n(969297);
t.Z = e => {
  let {
    channelId: t,
    messageId: n
  } = e, _ = (0, l.e7)([u.Z], () => u.Z.shouldShowBump(n), [n]), I = i.useCallback(() => {
    r.Z.dismissPublishBump(n), (0, o.Z)(t, n)
  }, [t, n]), T = i.useCallback(() => {
    r.Z.dismissPublishBump(n)
  }, [n]), N = i.useCallback(() => {
    r.Z.permanentlyHidePublishBump(t)
  }, [t]);
  return _ ? (0, s.jsxs)("div", {
    className: E.container,
    children: [(0, s.jsxs)("div", {
      className: E.bumpBox,
      children: [(0, s.jsx)(a.AnnouncementsIcon, {
        size: "xs",
        color: "currentColor",
        className: E.icon
      }), (0, s.jsx)(c.Z, {
        className: E.tagline,
        size: c.Z.Sizes.SIZE_14,
        children: d.Z.Messages.NEWS_CHANNEL_PUBLISH_BUMP
      }), (0, s.jsx)(a.Button, {
        color: a.Button.Colors.LINK,
        look: a.Button.Looks.LINK,
        size: a.Button.Sizes.MIN,
        className: E.publish,
        onClick: I,
        children: d.Z.Messages.NEWS_CHANNEL_PUBLISH
      }), (0, s.jsx)(a.Clickable, {
        onClick: T,
        children: (0, s.jsx)(a.CircleXIcon, {
          size: "xs",
          color: "currentColor",
          className: E.closeIcon
        })
      })]
    }), (0, s.jsx)(a.Text, {
      color: "text-muted",
      className: E.hidePermanently,
      variant: "text-sm/normal",
      children: (0, s.jsx)(a.Clickable, {
        onClick: N,
        children: d.Z.Messages.NEWS_CHANNEL_PUBLISH_BUMP_HIDE_PERMANENTLY
      })
    })]
  }) : null
}