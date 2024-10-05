n(47120);
var i = n(735250),
    a = n(470079),
    s = n(477690),
    l = n(481060),
    r = n(100527),
    o = n(367907),
    c = n(906732),
    d = n(524444),
    u = n(624138),
    _ = n(453070),
    E = n(373228),
    I = n(419922),
    m = n(217588),
    T = n(981631),
    N = n(474936),
    h = n(231206);
let C = (0, u.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
    p = (e) => {
        if (null != e)
            o.ZP.trackWithMetadata(T.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                type: N.cd.STICKER_IN_MESSAGE_HOVER,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: (0, E.aQ)(e.format_type),
                is_custom: (0, E.z)(e.type)
            });
    };
t.Z = (e) => {
    let { renderableSticker: t, channel: n, isInteracting: s } = e,
        [o, u] = a.useState(!0),
        [E, T] = a.useState(String(Date.now())),
        [N] = (0, _.XW)(t, s),
        { analyticsLocations: f } = (0, c.ZP)(r.Z.STICKER_MESSAGE),
        g = (0, i.jsxs)('span', {
            className: h.stickerName,
            children: [
                (0, i.jsx)(l.StickerSmallIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: h.stickerIcon
                }),
                (null != N ? N : t).name
            ]
        });
    return (0, i.jsx)(c.Gt, {
        value: f,
        children: (0, i.jsx)(l.Popout, {
            align: 'center',
            animation: l.Popout.Animation.TRANSLATE,
            positionKey: E,
            onRequestClose: () => {
                u(!0);
            },
            renderPopout: (e) =>
                (0, i.jsx)(m.Z, {
                    ...e,
                    renderableSticker: t,
                    channel: n,
                    refreshPositionKey: () => T(String(Date.now()))
                }),
            children: (e) => {
                let { onClick: n } = e;
                return (0, i.jsx)(l.Tooltip, {
                    ...d.b_,
                    shouldShow: o,
                    text: (0, d.Y)(g),
                    'aria-label': !1,
                    onTooltipShow: () => {
                        p(N);
                    },
                    children: (e) =>
                        (0, i.jsx)(l.Clickable, {
                            ...e,
                            className: h.clickableSticker,
                            onClick: (e) => {
                                u(!o), n(e);
                            },
                            tag: 'span',
                            children: (0, i.jsx)(I.ZP, {
                                isInteracting: s,
                                size: C,
                                sticker: null != N ? N : t
                            })
                        })
                });
            }
        })
    });
};
