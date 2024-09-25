var t = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    c = n(378233),
    i = n(689938),
    d = n(959687);
let u = (e) => {
    let { stickerPack: r } = e;
    return (0, t.jsx)('div', {
        className: d.features,
        children: (0, c.X_)(r)
            ? (0, t.jsx)(a.Tooltip, {
                  tooltipClassName: d.featuresTooltip,
                  position: 'top',
                  text: i.Z.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
                  children: (e) =>
                      (0, t.jsx)(a.PlayIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          ...e,
                          className: d.featureIcon
                      })
              })
            : null
    });
};
r.Z = o.memo((e) => {
    let { className: r, stickerPack: n, withDescription: o = !1 } = e;
    return (0, t.jsxs)('div', {
        className: l()(d.header, r),
        children: [
            (0, t.jsxs)('div', {
                className: d.title,
                children: [
                    (0, t.jsx)(a.Heading, {
                        className: d.heading,
                        variant: 'heading-sm/semibold',
                        children: n.name
                    }),
                    (0, t.jsx)(u, { stickerPack: n })
                ]
            }),
            o &&
                null != n.description &&
                (0, t.jsx)(a.Text, {
                    className: d.description,
                    variant: 'text-sm/normal',
                    children: n.description
                }),
            (0, t.jsx)('div', {
                className: d.count,
                children: i.Z.Messages.STICKER_PACK_STICKER_COUNT.format({ numStickers: n.stickers.length })
            })
        ]
    });
});
