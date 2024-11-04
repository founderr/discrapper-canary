var i = n(200651),
    l = n(192379),
    r = n(873546),
    s = n(442837),
    a = n(481060),
    o = n(346486),
    c = n(433355),
    u = n(412178);
t.Z = l.memo(function (e) {
    let { message: t, subtitle: n, countdown: d, buttonText: h, buttonColor: m, buttonSubmitting: p, onButtonClick: f, imageSrc: g, animationSrc: C, secondaryButtonText: x, onSecondaryButtonClick: v, children: _, useReducedMotion: I = !1 } = e,
        E = (0, s.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
    if (r.tq && E) return null;
    if (null == t) return (0, i.jsx)(i.Fragment, { children: l.Children.only(_) });
    let b = null;
    return (
        null != g
            ? (b = (0, i.jsx)('img', {
                  alt: '',
                  src: g,
                  className: u.image
              }))
            : null != C &&
              (b = (0, i.jsx)(a.LottieAnimation, {
                  importData: C,
                  shouldAnimate: !I,
                  className: u.animation
              })),
        (0, i.jsxs)('div', {
            className: u.wrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: u.content,
                    children: [
                        b,
                        (0, i.jsxs)('div', {
                            className: u.text,
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    variant: 'heading-md/semibold',
                                    className: u.title,
                                    children: t
                                }),
                                null != n &&
                                    (0, i.jsx)(a.Text, {
                                        color: 'text-muted',
                                        variant: 'text-xs/normal',
                                        children: n
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: u.buttonContainer,
                    children: [
                        null != x &&
                            (0, i.jsx)(a.Button, {
                                className: u.button,
                                size: a.Button.Sizes.SMALL,
                                onClick: v,
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.PRIMARY,
                                submitting: p,
                                children: x
                            }),
                        null != h &&
                            (0, i.jsx)(a.Button, {
                                className: u.button,
                                innerClassName: u.innerButton,
                                size: a.Button.Sizes.SMALL,
                                onClick: f,
                                submitting: p,
                                color: null != m ? m : a.Button.Colors.PRIMARY,
                                children: h
                            })
                    ]
                }),
                null != d &&
                    (0, i.jsx)(o.Z, {
                        className: u.countdown,
                        deadline: d
                    })
            ]
        })
    );
});
