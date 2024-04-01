"use strict";
n.r(t);
var s = n("735250"),
  l = n("470079"),
  a = n("442837"),
  i = n("481060"),
  r = n("528963"),
  o = n("143740"),
  u = n("696202"),
  d = n("316949"),
  c = n("727218"),
  E = n("212342"),
  f = n("689938"),
  _ = n("383923");
t.default = e => {
  let {
    channelId: t,
    messageId: n
  } = e, T = (0, a.useStateFromStores)([E.default], () => E.default.shouldShowBump(n), [n]), I = l.useCallback(() => {
    r.default.dismissPublishBump(n), (0, o.default)(t, n)
  }, [t, n]), m = l.useCallback(() => {
    r.default.dismissPublishBump(n)
  }, [n]), N = l.useCallback(() => {
    r.default.permanentlyHidePublishBump(t)
  }, [t]);
  return T ? (0, s.jsxs)("div", {
    className: _.container,
    children: [(0, s.jsxs)("div", {
      className: _.bumpBox,
      children: [(0, s.jsx)(d.default, {
        className: _.icon
      }), (0, s.jsx)(c.default, {
        className: _.tagline,
        size: c.default.Sizes.SIZE_14,
        children: f.default.Messages.NEWS_CHANNEL_PUBLISH_BUMP
      }), (0, s.jsx)(i.Button, {
        color: i.Button.Colors.LINK,
        look: i.Button.Looks.LINK,
        size: i.Button.Sizes.MIN,
        className: _.publish,
        onClick: I,
        children: f.default.Messages.NEWS_CHANNEL_PUBLISH
      }), (0, s.jsx)(i.Clickable, {
        onClick: m,
        children: (0, s.jsx)(u.default, {
          className: _.closeIcon,
          width: 16,
          height: 16
        })
      })]
    }), (0, s.jsx)(i.Text, {
      color: "text-muted",
      className: _.hidePermanently,
      variant: "text-sm/normal",
      children: (0, s.jsx)(i.Clickable, {
        onClick: N,
        children: f.default.Messages.NEWS_CHANNEL_PUBLISH_BUMP_HIDE_PERMANENTLY
      })
    })]
  }) : null
}