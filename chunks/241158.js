n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(70097),
    m = n(626135),
    g = n(526167),
    f = n(831964),
    p = n(981631),
    _ = n(869783),
    h = n(388032),
    E = n(909007);
let b = (e) => {
    let { name: t, title: n, description: a, descriptionCta: h, previewImage: b, videoUrl: x, shouldLoadVideo: C, index: T, isCompact: v, onClick: N } = e,
        I = (0, g.rO)(),
        S = r.useRef(null),
        [R, A] = r.useState(0),
        j = (function (e) {
            let t;
            switch (e) {
                case f.dm.EMOJIS:
                    t = E.emojisBackground;
                    break;
                case f.dm.REFERRAL_PROGRAM:
                    t = E.referralProgramBackground;
                    break;
                case f.dm.NO_LIMITS:
                    t = E.noLimitsBackground;
                    break;
                case f.dm.NEW_APP_STYLES:
                    t = E.newStylesBackground;
                    break;
                case f.dm.YOUR_SPACE:
                    t = E.yourSpaceBackground;
                    break;
                case f.dm.SERVER_PROFILES:
                    t = E.serverProfilesBackground;
                    break;
                case f.dm.SHOW_YOUR_STYLE:
                    t = E.yourStyleBackground;
            }
            return t;
        })(t),
        P = (0, d.ZP)(),
        Z = (0, o.wj)(P),
        M = Z ? c.ButtonColors.WHITE : c.ButtonColors.BRAND,
        B = (0, l.debounce)(() => {
            m.default.track(p.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
        }, 800),
        O = () => {
            null != S.current && ((S.current.currentTime = R), S.current.play());
        },
        w = () => {
            null != S.current && (A(S.current.currentTime), S.current.pause());
        },
        k = () =>
            (0, i.jsxs)('div', {
                className: s()({
                    [E.whatsNewTextBoxOuter]: !v,
                    [E.compactTextBox]: v
                }),
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'display-sm',
                        color: 'header-primary',
                        className: s()({
                            [E.whatsNewBoxHeader]: !v,
                            [E.compactBoxHeader]: v
                        }),
                        children: n
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'text-muted',
                        className: E.whatsNewBoxDescription,
                        children: a
                    }),
                    null != h &&
                        null != N &&
                        (0, i.jsx)(c.Button, {
                            look: c.ButtonLooks.OUTLINED,
                            color: M,
                            className: s()(E.whatsNewBoxButton, Z ? E.whatsNewBoxButtonWhite : E.whatsNewBoxButtonBrand),
                            onClick: () => {
                                B(), N();
                            },
                            children: h
                        })
                ]
            }),
        y = (e) => {
            let { isLeft: t } = e;
            return (0, i.jsx)('div', {
                className: s()({
                    [E.whatsNewArtContainer]: !v,
                    [E.compactBoxArtContainer]: v
                }),
                children: (0, i.jsx)(u.Z, {
                    playsInline: !0,
                    preload: C ? 'auto' : 'none',
                    muted: !0,
                    poster: b,
                    loop: !0,
                    className: s()({
                        [E.perkBoxVideo]: !v,
                        [E.leftSideArt]: t && !v,
                        [E.compactBoxVideo]: v
                    }),
                    ref: S,
                    children: (0, i.jsx)('source', {
                        src: x,
                        type: I ? _.m.MP4 : _.m.WEBM
                    })
                })
            });
        },
        L = T % 2 == 0;
    return (0, i.jsx)('div', {
        className: s()(j, {
            [E.whatsNewBoxContainer]: !v,
            [E.compactBoxContainer]: v
        }),
        onMouseEnter: O,
        onFocus: O,
        onBlur: w,
        onMouseLeave: w,
        children: L
            ? (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(k, {}), (0, i.jsx)(y, { isLeft: L })]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(y, { isLeft: L }), (0, i.jsx)(k, {})]
              })
    });
};
t.Z = r.memo(function (e) {
    let { className: t, shouldLoadVideo: n, isBestOfNitro: r = !1 } = e,
        a = Object.values((0, f.ZP)(r)),
        l = r ? Object.values((0, f.__)()) : null;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(E.boxBackdrop, t),
            children: [
                (0, i.jsx)(c.Heading, {
                    className: E.whatsNewHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: r ? h.intl.string(h.t.EnzW2N) : h.intl.string(h.t.LRmNAg)
                }),
                a.map((e, t) =>
                    (0, i.jsx)(
                        b,
                        {
                            shouldLoadVideo: n,
                            index: t,
                            ...e
                        },
                        e.name
                    )
                ),
                null != l &&
                    (0, i.jsxs)('div', {
                        className: E.compactBoxOuterContainer,
                        children: [
                            l.map((e, t) =>
                                (0, i.jsx)(
                                    b,
                                    {
                                        shouldLoadVideo: n,
                                        index: t,
                                        ...e
                                    },
                                    e.name
                                )
                            ),
                            (0, i.jsx)('div', { className: E.whatsNewSideGradient })
                        ]
                    })
            ]
        })
    });
});
