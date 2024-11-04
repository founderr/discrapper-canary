n.d(t, {
    Y: function () {
        return _;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
    s = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(100621),
    u = n(481060),
    d = n(542094),
    h = n(182906),
    m = n(556505),
    p = n(513202),
    f = n(981631),
    g = n(388032),
    C = n(967960);
let x = ['embedded_cover'],
    v = {
        tension: 800,
        friction: 24
    };
function _(e) {
    var t;
    let { channel: n, activityItem: i, onClick: l, aspectRatio: a = 0, animatedDivClass: _, commandOrigin: I } = e,
        {
            onActivityItemSelected: E,
            imageBackground: b,
            activityAction: S,
            labelType: Z
        } = (0, d.ZP)({
            channel: n,
            activityItem: i,
            guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
            locationObject: {},
            onActivityItemSelected: l,
            embeddedActivitiesManager: p.Z,
            assetNames: x,
            commandOrigin: I
        }),
        [T, N] = s.useState(!1),
        j = s.useCallback(() => {
            N(!0);
        }, [N]),
        A = s.useCallback(() => {
            N(!1);
        }, [N]),
        y = s.useMemo(
            () =>
                (0, r.jsx)('div', {
                    className: C.overlayBadge,
                    children: (0, r.jsx)('div', {
                        className: C.badgeContainer,
                        children: (0, r.jsx)(m.Z, {
                            name: i.application.name,
                            labelType: Z
                        })
                    })
                }),
            [i.application.name, Z]
        ),
        P = s.useMemo(() => {
            switch (S) {
                case d.JS.JOIN:
                    return (0, r.jsx)('div', {
                        className: C.activityAction,
                        children: (0, r.jsx)('div', {
                            className: C.activityActionButton,
                            children: (0, r.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: g.intl.string(g.t.VJlc0d)
                            })
                        })
                    });
                case d.JS.LEAVE:
                    return (0, r.jsx)('div', {
                        className: C.activityAction,
                        children: (0, r.jsx)('div', {
                            className: o()(C.activityActionButton, C.activityActionButtonDanger),
                            children: (0, r.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: g.intl.string(g.t['wH/wDA'])
                            })
                        })
                    });
                case d.JS.START:
                default:
                    return (0, r.jsx)(r.Fragment, {});
            }
        }, [S]);
    return (0, r.jsx)(u.Button, {
        onClick: E,
        color: 'transparent',
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        onFocus: j,
        onBlur: A,
        onMouseEnter: j,
        onMouseLeave: A,
        innerClassName: C.activityItemButtonInnerClass,
        children: (0, r.jsx)(u.Spring, {
            config: v,
            from: { value: 0 },
            to: { value: T ? 1 : 0 },
            children: (e) => {
                let { value: t } = e;
                return (0, r.jsx)(u.ThemeProvider, {
                    theme: f.BRd.DARK,
                    children: (e) =>
                        (0, r.jsx)(c.animated.div, {
                            className: o()(e, C.activityItem, _, {
                                [C.activityItem_13_11]: 0 === a,
                                [C.activityItem_16_9]: 1 === a
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => 'scale('.concat(e, ')'))
                            },
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(h.Z, {
                                        imageBackground: b,
                                        applicationName: i.application.name,
                                        imageClassName: C.activitySuggestionImage,
                                        imageNotFoundClassName: C.brokenImageIconWrapper
                                    }),
                                    y,
                                    P
                                ]
                            })
                        })
                });
            }
        })
    });
}
((l = i || (i = {}))[(l.THIRTEEN_BY_ELEVEN = 0)] = 'THIRTEEN_BY_ELEVEN'), (l[(l.SIXTEEN_BY_NINE = 1)] = 'SIXTEEN_BY_NINE'), (_.AspectRatio = i);
