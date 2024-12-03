n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(780384),
    l = n(481060),
    u = n(410030),
    c = n(607070),
    d = n(921944),
    f = n(388032),
    _ = n(633656);
function p(e) {
    let { onComplete: t, onCheckItOutClick: n, config: i } = e,
        d = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        p = (0, u.ZP)();
    return (0, r.jsxs)('div', {
        className: _.container,
        children: [
            d &&
                (0, r.jsx)('img', {
                    alt: f.intl.string(f.t.X4IxWF),
                    src: i.getImageUrl((0, o.wj)(p), d),
                    className: a()(_.coachmark, _.staticImage)
                }),
            !d &&
                null != i.coachmarkAnimationData &&
                (0, r.jsx)(l.ChainedLottieAnimation, {
                    className: a()(_.coachmark, _.animation),
                    animationData: i.coachmarkAnimationData
                }),
            (0, r.jsxs)('div', {
                className: _.body,
                children: [
                    (0, r.jsx)(l.Heading, {
                        className: _.text,
                        variant: 'heading-sm/semibold',
                        children: i.title()
                    }),
                    (0, r.jsx)(l.Text, {
                        className: _.text,
                        variant: 'text-sm/normal',
                        children: i.description()
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: _.dmButtonContainer,
                children: (0, r.jsx)(l.Button, {
                    className: _.dmButton,
                    color: l.Button.Colors.BRAND_INVERTED,
                    onClick: () => n(),
                    children: i.cta()
                })
            }),
            (0, r.jsx)(l.Clickable, {
                onClick: t,
                className: _.closeButton,
                'aria-label': f.intl.string(f.t.cpT0Cg),
                children: (0, r.jsx)(l.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.closeIcon
                })
            }),
            (0, r.jsx)('div', { className: _.pointer })
        ]
    });
}
function h(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: i, config: a } = e;
    return (0, r.jsx)(l.Popout, {
        spacing: 0,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, r.jsx)(p, {
                ...e,
                onComplete: () => {
                    t(), i(d.L.USER_DISMISS);
                },
                onCheckItOutClick: () => {
                    n(), t(), i(d.L.TAKE_ACTION);
                },
                config: a
            }),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () => (0, r.jsx)('div', { className: _.popoutTarget })
    });
}
