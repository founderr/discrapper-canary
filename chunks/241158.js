n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    o = n(481060),
    c = n(70097),
    d = n(626135),
    u = n(526167),
    g = n(409100),
    m = n(831964),
    f = n(981631),
    p = n(869783),
    _ = n(388032),
    h = n(909007);
let E = (e) => {
    let { name: t, title: n, description: a, descriptionCta: _, previewImage: E, videoUrl: b, shouldLoadVideo: x, index: C, isCompact: v, onClick: T, isBestOfNitro: N } = e,
        I = (0, u.rO)(),
        S = r.useRef(null),
        [R, A] = r.useState(0),
        j = (function (e) {
            let t;
            switch (e) {
                case m.dm.EMOJIS:
                    t = h.emojisBackground;
                    break;
                case m.dm.REFERRAL_PROGRAM:
                    t = h.referralProgramBackground;
                    break;
                case m.dm.NO_LIMITS:
                    t = h.noLimitsBackground;
                    break;
                case m.dm.NEW_APP_STYLES:
                    t = h.newStylesBackground;
                    break;
                case m.dm.YOUR_SPACE:
                    t = h.yourSpaceBackground;
                    break;
                case m.dm.SERVER_PROFILES:
                    t = h.serverProfilesBackground;
                    break;
                case m.dm.SHOW_YOUR_STYLE:
                    t = h.yourStyleBackground;
            }
            return t;
        })(t),
        P = (0, l.debounce)(() => {
            d.default.track(f.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
        }, 800),
        Z = () => {
            null != S.current && ((S.current.currentTime = R), S.current.play());
        },
        B = () => {
            null != S.current && (A(S.current.currentTime), S.current.pause());
        },
        M = () =>
            (0, i.jsxs)('div', {
                className: s()({
                    [h.whatsNewTextBoxOuter]: !v,
                    [h.compactTextBox]: v
                }),
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'display-md',
                        color: 'header-primary',
                        className: s()({
                            [h.whatsNewBoxHeader]: !v,
                            [h.compactBoxHeader]: v
                        }),
                        children: n
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        className: h.whatsNewBoxDescription,
                        children: a
                    }),
                    null != _ &&
                        (null != T
                            ? (0, i.jsx)(o.Button, {
                                  className: h.whatsNewBoxButton,
                                  onClick: () => {
                                      P(), T();
                                  },
                                  children: _
                              })
                            : (0, i.jsx)(g.Z, {
                                  className: h.whatsNewBoxButton,
                                  onClick: P,
                                  buttonText: _,
                                  color: o.Button.Colors.BRAND,
                                  look: o.Button.Looks.FILLED,
                                  showIcon: !1
                              }))
                ]
            }),
        O = (e) => {
            let { isLeft: t } = e;
            return (0, i.jsx)('div', {
                className: s()({
                    [h.whatsNewArtContainer]: !v,
                    [h.compactBoxArtContainer]: v
                }),
                children: (0, i.jsx)(c.Z, {
                    playsInline: !0,
                    preload: x ? 'auto' : 'none',
                    muted: !0,
                    poster: E,
                    loop: !0,
                    className: s()({
                        [h.perkBoxVideo]: !v,
                        [h.leftSideArt]: t && !v,
                        [h.compactBoxVideo]: v
                    }),
                    ref: S,
                    children: (0, i.jsx)('source', {
                        src: b,
                        type: I ? p.m.MP4 : p.m.WEBM
                    })
                })
            });
        },
        w = N ? C % 2 == 0 : C % 2 != 0;
    return (0, i.jsx)('div', {
        className: s()(j, {
            [h.whatsNewBoxContainer]: !v,
            [h.compactBoxContainer]: v
        }),
        onMouseEnter: Z,
        onFocus: Z,
        onBlur: B,
        onMouseLeave: B,
        children: w
            ? (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(M, {}), (0, i.jsx)(O, { isLeft: w })]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(O, { isLeft: w }), (0, i.jsx)(M, {})]
              })
    });
};
t.Z = r.memo(function (e) {
    let { className: t, shouldLoadVideo: n, isBestOfNitro: r = !1 } = e,
        a = Object.values((0, m.ZP)(r)),
        l = r ? Object.values((0, m.__)()) : null;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(h.boxBackdrop, t),
            children: [
                (0, i.jsx)(o.Heading, {
                    className: h.whatsNewHeader,
                    variant: 'heading-xxl/extrabold',
                    children: r ? _.intl.string(_.t.EnzW2N) : _.intl.string(_.t.LRmNAg)
                }),
                a.map((e, t) =>
                    (0, i.jsx)(
                        E,
                        {
                            isBestOfNitro: r,
                            shouldLoadVideo: n,
                            index: t,
                            ...e
                        },
                        e.name
                    )
                ),
                null != l &&
                    (0, i.jsx)('div', {
                        className: h.compactBoxOuterContainer,
                        children: l.map((e, t) =>
                            (0, i.jsx)(
                                E,
                                {
                                    isBestOfNitro: r,
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
