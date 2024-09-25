n.d(t, {
    Y: function () {
        return S;
    },
    c: function () {
        return g;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(772848),
    u = n(481060),
    c = n(596454),
    d = n(367907),
    _ = n(130402),
    E = n(626135),
    f = n(183023),
    h = n(524444),
    p = n(981631),
    m = n(185923),
    I = n(474936),
    T = n(659932);
let g = (e) => {
        var t;
        let { node: n, tooltipPosition: r = h.b_.position, enableClick: o = !0 } = e,
            l = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0],
            d = null != l ? l : n.name,
            [_, E] = a.useState(!1),
            p = (e) =>
                (0, i.jsx)(c.Z, {
                    ...e,
                    emojiName: n.name,
                    size: n.jumboable ? 'jumbo' : 'default',
                    src: n.src,
                    alt: l,
                    animated: !1
                }),
            m = (e) =>
                (0, i.jsx)(u.Tooltip, {
                    text: (0, h.Y)(n.name, o),
                    'aria-label': d,
                    ...h.b_,
                    position: r,
                    shouldShow: !_,
                    onTooltipShow: () => {
                        o &&
                            A({
                                emojiNode: n,
                                isCustomEmoji: !1
                            });
                    },
                    children: (t) =>
                        (0, i.jsx)(u.Clickable, {
                            ...e,
                            tag: 'span',
                            onClick: (t) => {
                                var n;
                                E(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
                            },
                            className: s()(T.emojiContainer, { [T.emojiContainerClickable]: o }),
                            children: p(t)
                        })
                });
        if (!o) return m();
        let I = (e) =>
            (0, i.jsx)(f.Az, {
                ...e,
                node: n
            });
        return (0, i.jsx)(u.Popout, {
            animation: u.Popout.Animation.TRANSLATE,
            align: 'center',
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'right',
            onRequestClose: () => {
                E(!1);
            },
            renderPopout: I,
            children: m
        });
    },
    S = (e) => {
        let { node: t, isInteracting: n, tooltipPosition: r = h.b_.position, enableClick: o = !0 } = e,
            [d, I] = a.useState(String(Date.now())),
            [g, S] = a.useState(!1),
            [v, N] = a.useState(!1),
            O = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, i.jsx)(c.Z, {
                    ...e,
                    emojiName: t.name,
                    size: t.jumboable ? 'jumbo' : 'default',
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: n
                });
            },
            R = (0, l.Z)(),
            C = (e) =>
                (0, i.jsx)(u.Tooltip, {
                    text: (0, h.Y)(t.name, o),
                    'aria-label': t.name,
                    ...h.b_,
                    position: r,
                    shouldShow: !v,
                    onTooltipShow: () => {
                        S(!0),
                            o &&
                                (A({
                                    emojiNode: t,
                                    isCustomEmoji: !0,
                                    nonce: R
                                }),
                                (0, _.x)(m.qR.CustomEmojiTooltipShown));
                    },
                    children: (t) =>
                        (0, i.jsx)(u.Clickable, {
                            ...e,
                            onMouseEnter: () => {
                                var t;
                                null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                            },
                            onClick: o
                                ? (t) => {
                                      var n;
                                      S(!1), N(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                  }
                                : void 0,
                            onMouseLeave: () => {
                                g && (E.default.track(p.rMx.CLOSE_POPOUT, { nonce: R }), S(!1));
                            },
                            tag: 'span',
                            className: s()(T.emojiContainer, { [T.emojiContainerClickable]: o }),
                            children: O(t)
                        })
                });
        if (!o) return C();
        let y = (e) =>
            (0, i.jsx)(f.vk, {
                ...e,
                node: t,
                refreshPositionKey: () => I(String(Date.now())),
                nonce: R
            });
        return (0, i.jsx)(u.Popout, {
            animation: u.Popout.Animation.FADE,
            align: 'center',
            onRequestClose: () => {
                E.default.track(p.rMx.CLOSE_POPOUT, { nonce: R }), S(!1), N(!1);
            },
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'right',
            renderPopout: y,
            positionKey: d,
            children: C
        });
    },
    A = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: r } = e;
        d.ZP.trackWithMetadata(p.rMx.EXPRESSION_TOOLTIP_VIEWED, {
            type: I.cd.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: r
        });
    };
