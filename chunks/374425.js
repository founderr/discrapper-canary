var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(477690),
    s = n(481060),
    l = n(100527),
    u = n(367907),
    c = n(906732),
    d = n(524444),
    _ = n(624138),
    E = n(453070),
    f = n(373228),
    h = n(419922),
    p = n(217588),
    m = n(981631),
    I = n(474936),
    T = n(231206);
let g = (0, _.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
    S = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: r } = e,
            [o, u] = a.useState(!0),
            [_, f] = a.useState(String(Date.now())),
            [m] = (0, E.XW)(t, r),
            { analyticsLocations: I } = (0, c.ZP)(l.Z.STICKER_MESSAGE),
            S = (0, i.jsxs)('span', {
                className: T.stickerName,
                children: [
                    (0, i.jsx)(s.StickerSmallIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: T.stickerIcon
                    }),
                    (null != m ? m : t).name
                ]
            });
        return (0, i.jsx)(c.Gt, {
            value: I,
            children: (0, i.jsx)(s.Popout, {
                align: 'center',
                animation: s.Popout.Animation.TRANSLATE,
                positionKey: _,
                onRequestClose: () => {
                    u(!0);
                },
                renderPopout: (e) =>
                    (0, i.jsx)(p.Z, {
                        ...e,
                        renderableSticker: t,
                        channel: n,
                        refreshPositionKey: () => f(String(Date.now()))
                    }),
                children: (e) => {
                    let { onClick: n } = e;
                    return (0, i.jsx)(s.Tooltip, {
                        ...d.b_,
                        shouldShow: o,
                        text: (0, d.Y)(S),
                        'aria-label': !1,
                        onTooltipShow: () => {
                            A(m);
                        },
                        children: (e) =>
                            (0, i.jsx)(s.Clickable, {
                                ...e,
                                className: T.clickableSticker,
                                onClick: (e) => {
                                    u(!o), n(e);
                                },
                                tag: 'span',
                                children: (0, i.jsx)(h.ZP, {
                                    isInteracting: r,
                                    size: g,
                                    sticker: null != m ? m : t
                                })
                            })
                    });
                }
            })
        });
    },
    A = (e) => {
        if (null != e)
            u.ZP.trackWithMetadata(m.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                type: I.cd.STICKER_IN_MESSAGE_HOVER,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: (0, f.aQ)(e.format_type),
                is_custom: (0, f.z)(e.type)
            });
    };
t.Z = S;
