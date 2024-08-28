t.d(s, {
    L: function () {
        return E;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(689938),
    c = t(453951),
    d = t(680674),
    _ = t(74316);
let E = a.memo(function (e) {
    let { message: s, handleClick: t, handleClose: i, buttonText: E, useInitialGlow: u, useGlowOnHover: I, handleImageClick: T, className: S } = e,
        [N, C] = a.useState(u);
    return (
        a.useEffect(() => {
            setTimeout(() => C(!1), 3000);
        }, []),
        (0, n.jsx)('div', {
            className: c.wrapper,
            children: (0, n.jsxs)('div', {
                className: r()(c.content, N ? c.initialGlowUp : c.initialGlowDown, I ? c.contentGlow : null, S),
                children: [
                    (0, n.jsxs)('div', {
                        className: c.innerContent,
                        children: [
                            (0, n.jsx)('div', {
                                className: r()(c.imageWrapper, void 0 !== T ? c.imageHover : null),
                                ...(void 0 !== T ? { onClick: T } : {}),
                                children: (0, n.jsx)('img', {
                                    alt: '',
                                    className: c.image,
                                    src: d
                                })
                            }),
                            (0, n.jsx)('div', {
                                className: c.heading,
                                children: (0, n.jsx)(o.Heading, {
                                    variant: 'heading-sm/medium',
                                    children: s.format()
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: c.buttonWrapper,
                        children: (0, n.jsxs)(o.ShinyButton, {
                            className: c.button,
                            innerClassName: c.buttonInner,
                            size: o.Button.Sizes.SMALL,
                            color: o.ButtonColors.CUSTOM,
                            onlyShineOnHover: !0,
                            onClick: t,
                            children: [
                                (0, n.jsx)('img', {
                                    alt: '',
                                    className: c.buttonNitroIcon,
                                    src: _
                                }),
                                E
                            ]
                        })
                    }),
                    (0, n.jsx)('div', {
                        className: c.closeButtonWrapper,
                        children: (0, n.jsx)(o.Clickable, {
                            onClick: i,
                            className: c.closeButton,
                            'aria-label': l.Z.Messages.CLOSE,
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
