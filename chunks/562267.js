"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(661824),
  l = n(913663),
  u = n(268350),
  _ = n(419922),
  c = n(689938),
  d = n(188972);
t.Z = r.memo(function(e) {
  var t;
  let {
    channelId: n,
    chatInputType: E
  } = e, [I, T] = r.useState(null), h = (0, s.e7)([l.Z], () => l.Z.getStickerPreview(n, E.drafts.type));
  return (null === (t = E.stickers) || void 0 === t ? void 0 : t.allowSending) && null != h && 0 !== h.length ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: d.stickerPreviews,
      children: h.map(e => (0, i.jsxs)("div", {
        className: d.stickerPreviewContainer,
        children: [(0, i.jsx)(o.Clickable, {
          onFocus: () => T(e.id),
          onBlur: () => T(null),
          className: d.closeButton,
          "aria-label": c.Z.Messages.GUILD_STICKER_A11Y_REMOVE_STICKER.format({
            name: e.name
          }),
          onClick: () => (0, u.qB)(n, E.drafts.type),
          children: (0, i.jsx)("div", {
            className: d.closeIconContainer,
            children: (0, i.jsx)(o.CircleXIcon, {
              size: "md",
              color: "currentColor",
              className: d.closeIcon
            })
          })
        }), (0, i.jsx)(_.ZP, {
          isInteracting: I === e.id,
          className: d.stickerPreview,
          size: 48,
          sticker: e
        })]
      }, e.id))
    }), (0, i.jsx)(a.Z, {
      className: d.stickerPreviewDivider
    })]
  }) : null
})