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
    g = n(626135),
    m = n(526167),
    p = n(831964),
    f = n(981631),
    _ = n(869783),
    h = n(388032),
    E = n(909007);
let b = (e) => {
    let { name: t, title: n, description: a, descriptionCta: h, previewImage: b, videoUrl: x, shouldLoadVideo: C, index: v, isCompact: T, onClick: N } = e,
        S = (0, m.rO)(),
        I = r.useRef(null),
        [R, A] = r.useState(0),
        j = (function (e) {
            let t;
            switch (e) {
                case p.dm.EMOJIS:
                    t = E.emojisBackground;
                    break;
                case p.dm.REFERRAL_PROGRAM:
                    t = E.referralProgramBackground;
                    break;
                case p.dm.NO_LIMITS:
                    t = E.noLimitsBackground;
                    break;
                case p.dm.NEW_APP_STYLES:
                    t = E.newStylesBackground;
                    break;
                case p.dm.YOUR_SPACE:
                    t = E.yourSpaceBackground;
                    break;
                case p.dm.SERVER_PROFILES:
                    t = E.serverProfilesBackground;
                    break;
                case p.dm.SHOW_YOUR_STYLE:
                    t = E.yourStyleBackground;
            }
            return t;
        })(t),
        P = (0, d.ZP)(),
        Z = (0, o.wj)(P),
        B = Z ? c.ButtonColors.WHITE : c.ButtonColors.BRAND,
        M = (0, l.debounce)(() => {
            g.default.track(f.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
        }, 800),
        O = () => {
            null != I.current && ((I.current.currentTime = R), I.current.play());
        },
        w = () => {
            null != I.current && (A(I.current.currentTime), I.current.pause());
        },
        y = () =>
            (0, i.jsxs)('div', {
                className: s()({
                    [E.whatsNewTextBoxOuter]: !T,
                    [E.compactTextBox]: T
                }),
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'display-sm',
                        color: 'header-primary',
                        className: s()({
                            [E.whatsNewBoxHeader]: !T,
                            [E.compactBoxHeader]: T
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
                            color: B,
                            className: s()(E.whatsNewBoxButton, Z ? E.whatsNewBoxButtonWhite : E.whatsNewBoxButtonBrand),
                            onClick: () => {
                                M(), N();
                            },
                            children: h
                        })
                ]
            }),
        k = (e) => {
            let { isLeft: t } = e;
            return (0, i.jsx)('div', {
                className: s()({
                    [E.whatsNewArtContainer]: !T,
                    [E.compactBoxArtContainer]: T
                }),
                children: (0, i.jsx)(u.Z, {
                    playsInline: !0,
                    preload: C ? 'auto' : 'none',
                    muted: !0,
                    poster: b,
                    loop: !0,
                    className: s()({
                        [E.perkBoxVideo]: !T,
                        [E.leftSideArt]: t && !T,
                        [E.compactBoxVideo]: T
                    }),
                    ref: I,
                    children: (0, i.jsx)('source', {
                        src: x,
                        type: S ? _.m.MP4 : _.m.WEBM
                    })
                })
            });
        },
        L = v % 2 == 0;
    return (0, i.jsx)('div', {
        className: s()(j, {
            [E.whatsNewBoxContainer]: !T,
            [E.compactBoxContainer]: T
        }),
        onMouseEnter: O,
        onFocus: O,
        onBlur: w,
        onMouseLeave: w,
        children: L
            ? (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(y, {}), (0, i.jsx)(k, { isLeft: L })]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(k, { isLeft: L }), (0, i.jsx)(y, {})]
              })
    });
};
t.Z = r.memo(function (e) {
    let { className: t, shouldLoadVideo: n, isBestOfNitro: r = !1 } = e,
        a = Object.values((0, p.ZP)(r)),
        l = r ? Object.values((0, p.__)()) : null;
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
                    (0, i.jsx)('div', {
                        className: E.compactBoxOuterContainer,
                        children: l.map((e, t) =>
                            (0, i.jsx)(
                                b,
                                {
                                    shouldLoadVideo: n,
                                    index: t,
                                    ...e
                                },
                                e.name
                            )
                        )
                    })
            ]
        })
    });
});
