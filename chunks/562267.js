n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(661824),
    l = n(913663),
    u = n(268350),
    c = n(419922),
    d = n(388032),
    f = n(573101);
t.Z = i.memo(function (e) {
    var t;
    let { channelId: n, chatInputType: _ } = e,
        [p, h] = i.useState(null),
        m = (0, a.e7)([l.Z], () => l.Z.getStickerPreview(n, _.drafts.type));
    return (null === (t = _.stickers) || void 0 === t ? void 0 : t.allowSending) && null != m && 0 !== m.length
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      className: f.stickerPreviews,
                      children: m.map((e) =>
                          (0, r.jsxs)(
                              'div',
                              {
                                  className: f.stickerPreviewContainer,
                                  children: [
                                      (0, r.jsx)(s.Clickable, {
                                          onFocus: () => h(e.id),
                                          onBlur: () => h(null),
                                          className: f.closeButton,
                                          'aria-label': d.intl.formatToPlainString(d.t.BGAQRU, { name: e.name }),
                                          onClick: () => (0, u.qB)(n, _.drafts.type),
                                          children: (0, r.jsx)('div', {
                                              className: f.closeIconContainer,
                                              children: (0, r.jsx)(s.CircleXIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: f.closeIcon
                                              })
                                          })
                                      }),
                                      (0, r.jsx)(c.ZP, {
                                          isInteracting: p === e.id,
                                          className: f.stickerPreview,
                                          size: 48,
                                          sticker: e
                                      })
                                  ]
                              },
                              e.id
                          )
                      )
                  }),
                  (0, r.jsx)(o.Z, { className: f.stickerPreviewDivider })
              ]
          })
        : null;
});
