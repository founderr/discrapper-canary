e.r(n),
    e.d(n, {
        VibingWumpus: function () {
            return b;
        }
    }),
    e(47120);
var i = e(200651),
    o = e(192379),
    r = e(120356),
    a = e.n(r),
    c = e(399606),
    s = e(481060),
    u = e(607070),
    l = e(626135),
    d = e(832239),
    _ = e(407383),
    I = e(981631),
    p = e(388032),
    f = e(445964),
    C = e(324394),
    N = e(617921);
function b(t) {
    let { onClose: n, source: r = _.I.INAPPROPRIATE_CONVERSATION } = t,
        b = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
        [x, A] = o.useState(!1);
    o.useEffect(() => {
        let t = new Date();
        return (
            l.default.track(I.rMx.VIBING_WUMPUS_VIEWED, { source: r }),
            (0, d.JO)(),
            () => {
                l.default.track(I.rMx.VIBING_WUMPUS_CLOSED, {
                    duration_open_ms: new Date().getTime() - t.getTime(),
                    source: r
                }),
                    (0, d.zu)();
            }
        );
    }, [r]);
    let h = () => {
        x ? ((0, d.JO)(), l.default.track(I.rMx.VIBING_WUMPUS_ACTION, { action: _.G.PLAY })) : ((0, d.hW)(), l.default.track(I.rMx.VIBING_WUMPUS_ACTION, { action: _.G.PAUSE })), A(!x);
    };
    async function m() {
        let { default: t } = await e.e('29641').then(e.t.bind(e, 937359, 19));
        return t;
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: f.ringContainer,
                children: (0, i.jsx)('img', {
                    src: N,
                    alt: '',
                    className: f.__invalid_ringArt
                })
            }),
            (0, i.jsx)(s.LottieAnimation, {
                importData: m,
                shouldAnimate: !x && !b,
                className: f.wumpus,
                pauseAtFrame: b ? 200 : void 0
            }),
            (0, i.jsx)(s.Tooltip, {
                text: x ? p.intl.string(p.t.RscU7O) : p.intl.string(p.t.ZcgDJS),
                position: 'top',
                'aria-label': x ? p.intl.string(p.t.RscU7O) : p.intl.string(p.t.ZcgDJS),
                children: (t) =>
                    (0, i.jsx)(s.Clickable, {
                        ...t,
                        onClick: h,
                        className: f.iconButton,
                        children: x
                            ? (0, i.jsx)(s.PlayIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: f.icon
                              })
                            : (0, i.jsx)(s.PauseIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: f.icon
                              })
                    })
            }),
            (0, i.jsxs)(s.ModalContent, {
                className: a()(C.body, f.body),
                children: [
                    (0, i.jsxs)('div', {
                        className: a()(C.textContainer, f.textContainer),
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: p.intl.string(p.t.L4ifkZ)
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: p.intl.string(p.t.R8LCMT)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: f.buttonContainer,
                        children: (0, i.jsx)(s.Button, {
                            fullWidth: !0,
                            color: s.Button.Colors.BRAND,
                            size: s.Button.Sizes.MEDIUM,
                            onClick: () => {
                                n(), l.default.track(I.rMx.VIBING_WUMPUS_ACTION, { action: _.G.BACK_TO_CONVERSATION });
                            },
                            children: p.intl.string(p.t['8eKkaW'])
                        })
                    })
                ]
            })
        ]
    });
}
n.default = (t) => {
    let { onClose: n, transitionState: e } = t;
    return (0, i.jsx)(s.ModalRoot, {
        transitionState: e,
        children: (0, i.jsx)(b, { onClose: n })
    });
};
