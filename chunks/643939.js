t.d(s, {
    L: function () {
        return T;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(626135),
    c = t(981631),
    d = t(689938),
    u = t(453951),
    _ = t(680674),
    E = t(74316);
let T = a.memo(function (e) {
    let { message: s, handleClick: t, handleClose: i, buttonText: T, useInitialGlow: S, useGlowOnHover: I, handleImageClick: N, className: m, analyticsLocations: C, upsellType: g } = e,
        [A, h] = a.useState(S);
    return (
        a.useEffect(() => {
            setTimeout(() => h(!1), 3000);
        }, []),
        a.useEffect(() => {
            l.default.track(c.rMx.POST_ACTION_UPSELL_SHOWN, {
                type: g,
                location: C
            });
        }, [g, C]),
        (0, n.jsx)('div', {
            className: u.wrapper,
            children: (0, n.jsxs)('div', {
                className: r()(u.content, A ? u.initialGlowUp : u.initialGlowDown, I ? u.contentGlow : null, m),
                children: [
                    (0, n.jsxs)('div', {
                        className: u.innerContent,
                        children: [
                            (0, n.jsx)('div', {
                                className: r()(u.imageWrapper, void 0 !== N ? u.imageHover : null),
                                ...(void 0 !== N
                                    ? {
                                          onClick: () => {
                                              l.default.track(c.rMx.POST_ACTION_UPSELL_SECONDARY_ACTION_CLICKED, {
                                                  type: g,
                                                  location: C
                                              }),
                                                  N();
                                          }
                                      }
                                    : {}),
                                children: (0, n.jsx)('img', {
                                    alt: '',
                                    className: u.image,
                                    src: _
                                })
                            }),
                            (0, n.jsx)('div', {
                                className: u.heading,
                                children: (0, n.jsx)(o.Heading, {
                                    variant: 'heading-sm/medium',
                                    children: s.format()
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: u.buttonWrapper,
                        children: (0, n.jsxs)(o.ShinyButton, {
                            className: u.button,
                            innerClassName: u.buttonInner,
                            size: o.Button.Sizes.SMALL,
                            color: o.ButtonColors.CUSTOM,
                            onlyShineOnHover: !0,
                            onClick: () => {
                                l.default.track(c.rMx.POST_ACTION_UPSELL_PRIMARY_ACTION_CLICKED, {
                                    type: g,
                                    location: C
                                }),
                                    t();
                            },
                            children: [
                                (0, n.jsx)('img', {
                                    alt: '',
                                    className: u.buttonNitroIcon,
                                    src: E
                                }),
                                T
                            ]
                        })
                    }),
                    (0, n.jsx)('div', {
                        className: u.closeButtonWrapper,
                        children: (0, n.jsx)(o.Clickable, {
                            onClick: () => {
                                l.default.track(c.rMx.POST_ACTION_UPSELL_DISMISSED, {
                                    type: g,
                                    location: C
                                }),
                                    i();
                            },
                            className: u.closeButton,
                            'aria-label': d.Z.Messages.CLOSE,
                            children: (0, n.jsx)(o.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    })
                ]
            })
        })
    );
});
