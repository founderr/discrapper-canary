var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(661824),
    u = n(913663),
    c = n(268350),
    d = n(419922),
    _ = n(689938),
    E = n(961378);
function f(e) {
    var t;
    let { channelId: n, chatInputType: r } = e,
        [f, h] = a.useState(null),
        p = (0, o.e7)([u.Z], () => u.Z.getStickerPreview(n, r.drafts.type));
    return (null === (t = r.stickers) || void 0 === t ? void 0 : t.allowSending) && null != p && 0 !== p.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)('div', {
                      className: E.stickerPreviews,
                      children: p.map((e) =>
                          (0, i.jsxs)(
                              'div',
                              {
                                  className: E.stickerPreviewContainer,
                                  children: [
                                      (0, i.jsx)(s.Clickable, {
                                          onFocus: () => h(e.id),
                                          onBlur: () => h(null),
                                          className: E.closeButton,
                                          'aria-label': _.Z.Messages.GUILD_STICKER_A11Y_REMOVE_STICKER.format({ name: e.name }),
                                          onClick: () => (0, c.qB)(n, r.drafts.type),
                                          children: (0, i.jsx)('div', {
                                              className: E.closeIconContainer,
                                              children: (0, i.jsx)(s.CircleXIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: E.closeIcon
                                              })
                                          })
                                      }),
                                      (0, i.jsx)(d.ZP, {
                                          isInteracting: f === e.id,
                                          className: E.stickerPreview,
                                          size: 48,
                                          sticker: e
                                      })
                                  ]
                              },
                              e.id
                          )
                      )
                  }),
                  (0, i.jsx)(l.Z, { className: E.stickerPreviewDivider })
              ]
          })
        : null;
}
t.Z = a.memo(f);
