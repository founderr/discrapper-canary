n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    o = n(392711),
    l = n(481060),
    c = n(70097),
    d = n(626135),
    _ = n(526167),
    u = n(409100),
    E = n(831964),
    T = n(981631),
    I = n(869783),
    R = n(689938),
    m = n(916548);
let g = (e) => {
    let { name: t, title: n, description: r, descriptionCta: R, previewImage: g, videoUrl: N, shouldLoadVideo: C, isCompact: p, onClick: f, index: A } = e,
        S = (0, _.rO)(),
        M = a.useRef(null),
        [h, x] = a.useState(0),
        b = (function (e) {
            let t;
            switch (e) {
                case E.dm.EMOJIS:
                    t = m.emojisBackground;
                    break;
                case E.dm.REFERRAL_PROGRAM:
                    t = m.referralProgramBackground;
                    break;
                case E.dm.NO_LIMITS:
                    t = m.noLimitsBackground;
                    break;
                case E.dm.NEW_APP_STYLES:
                    t = m.newStylesBackground;
                    break;
                case E.dm.YOUR_SPACE:
                    t = m.yourSpaceBackground;
                    break;
                case E.dm.SERVER_PROFILES:
                    t = m.serverProfilesBackground;
                    break;
                case E.dm.SHOW_YOUR_STYLE:
                    t = m.yourStyleBackground;
            }
            return t;
        })(t),
        O = (0, o.debounce)(() => {
            d.default.track(T.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, o.snakeCase)(t) });
        }, 800),
        P = () => {
            null != M.current && ((M.current.currentTime = h), M.current.play());
        },
        v = () => {
            null != M.current && (x(M.current.currentTime), M.current.pause());
        },
        L = () =>
            (0, s.jsxs)('div', {
                className: i()({
                    [m.whatsNewTextBoxOuter]: !p,
                    [m.compactTextBox]: p
                }),
                children: [
                    (0, s.jsx)(l.Heading, {
                        variant: 'display-md',
                        color: 'header-primary',
                        className: i()({
                            [m.whatsNewBoxHeader]: !p,
                            [m.compactBoxHeader]: p
                        }),
                        children: n
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        className: m.whatsNewBoxDescription,
                        children: r
                    }),
                    null != R &&
                        (null != f
                            ? (0, s.jsx)(l.Button, {
                                  className: m.whatsNewBoxButton,
                                  onClick: () => {
                                      O(), f();
                                  },
                                  children: R
                              })
                            : (0, s.jsx)(u.Z, {
                                  className: m.whatsNewBoxButton,
                                  onClick: O,
                                  buttonText: R,
                                  color: l.Button.Colors.BRAND,
                                  look: l.Button.Looks.FILLED,
                                  showIcon: !1
                              }))
                ]
            }),
        Z = (e) => {
            let { isLeft: t } = e;
            return (0, s.jsx)('div', {
                className: i()({
                    [m.whatsNewArtContainer]: !p,
                    [m.compactBoxArtContainer]: p
                }),
                children: (0, s.jsx)(c.Z, {
                    playsInline: !0,
                    preload: C ? 'auto' : 'none',
                    muted: !0,
                    poster: g,
                    loop: !0,
                    className: i()({
                        [m.perkBoxVideo]: !p,
                        [m.leftSideArt]: t && !p,
                        [m.compactBoxVideo]: p
                    }),
                    ref: M,
                    children: (0, s.jsx)('source', {
                        src: N,
                        type: S ? I.m.MP4 : I.m.WEBM
                    })
                })
            });
        };
    return A % 2 != 0
        ? (0, s.jsxs)('div', {
              className: i()(b, {
                  [m.whatsNewBoxContainer]: !p,
                  [m.compactBoxContainer]: p
              }),
              onMouseEnter: P,
              onFocus: P,
              onBlur: v,
              onMouseLeave: v,
              children: [(0, s.jsx)(L, {}), (0, s.jsx)(Z, { isLeft: !1 })]
          })
        : (0, s.jsxs)('div', {
              className: i()(b, {
                  [m.whatsNewBoxContainer]: !p,
                  [m.compactBoxContainer]: p,
                  boxBackgroundColor: b
              }),
              onMouseEnter: P,
              onFocus: P,
              onBlur: v,
              onMouseLeave: v,
              children: [(0, s.jsx)(Z, { isLeft: !0 }), (0, s.jsx)(L, {})]
          });
};
t.Z = a.memo(function (e) {
    let { className: t, shouldLoadVideo: n, isBestOfNitro: a = !1 } = e,
        r = Object.values((0, E.ZP)(a)),
        o = a ? Object.values((0, E.__)()) : null;
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)('div', {
            className: i()(m.boxBackdrop, t),
            children: [
                (0, s.jsx)(l.Heading, {
                    className: m.whatsNewHeader,
                    variant: 'heading-xxl/extrabold',
                    children: a ? R.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO : R.Z.Messages.WHATS_NEW
                }),
                r.map((e, t) =>
                    (0, s.jsx)(
                        g,
                        {
                            shouldLoadVideo: n,
                            ...e,
                            index: t
                        },
                        e.name
                    )
                ),
                null != o &&
                    (0, s.jsx)('div', {
                        className: m.compactBoxOuterContainer,
                        children: o.map((e, t) =>
                            (0, s.jsx)(
                                g,
                                {
                                    shouldLoadVideo: n,
                                    ...e,
                                    index: t
                                },
                                e.name
                            )
                        )
                    })
            ]
        })
    });
});
