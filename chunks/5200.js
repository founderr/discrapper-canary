n.d(t, {
    Y: function () {
        return T;
    }
}),
    n(47120);
var i,
    a,
    s = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(338545),
    u = n(481060),
    d = n(895924),
    h = n(792125),
    p = n(542094),
    m = n(182906),
    _ = n(556505),
    f = n(513202),
    E = n(981631),
    g = n(689938),
    C = n(774867);
let I = ['embedded_cover'],
    x = {
        tension: 800,
        friction: 24
    };
function T(e) {
    var t;
    let { channel: n, activityItem: i, onClick: a, aspectRatio: r = 0, animatedDivClass: T } = e,
        {
            onActivityItemSelected: N,
            imageBackground: v,
            activityAction: S,
            labelType: Z
        } = (0, p.ZP)({
            channel: n,
            activityItem: i,
            guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
            locationObject: {},
            onActivityItemSelected: a,
            embeddedActivitiesManager: f.Z,
            assetNames: I,
            commandOrigin: d.bB.VOICE_UI
        }),
        [A, M] = l.useState(!1),
        b = l.useCallback(() => {
            M(!0);
        }, [M]),
        R = l.useCallback(() => {
            M(!1);
        }, [M]),
        L = l.useMemo(
            () =>
                (0, s.jsx)('div', {
                    className: C.overlayBadge,
                    children: (0, s.jsx)('div', {
                        className: C.badgeContainer,
                        children: (0, s.jsx)(_.Z, {
                            name: i.application.name,
                            labelType: Z
                        })
                    })
                }),
            [i.application.name, Z]
        ),
        j = l.useMemo(() => {
            switch (S) {
                case p.JS.JOIN:
                    return (0, s.jsx)('div', {
                        className: C.activityAction,
                        children: (0, s.jsx)('div', {
                            className: C.activityActionButton,
                            children: (0, s.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: g.Z.Messages.JOIN
                            })
                        })
                    });
                case p.JS.LEAVE:
                    return (0, s.jsx)('div', {
                        className: C.activityAction,
                        children: (0, s.jsx)('div', {
                            className: o()(C.activityActionButton, C.activityActionButtonDanger),
                            children: (0, s.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: g.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE
                            })
                        })
                    });
                case p.JS.START:
                default:
                    return (0, s.jsx)(s.Fragment, {});
            }
        }, [S]);
    return (0, s.jsx)(u.Button, {
        onClick: N,
        color: 'transparent',
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        onFocus: b,
        onBlur: R,
        onMouseEnter: b,
        onMouseLeave: R,
        innerClassName: C.activityItemButtonInnerClass,
        children: (0, s.jsx)(u.Spring, {
            config: x,
            from: { value: 0 },
            to: { value: A ? 1 : 0 },
            children: (e) => {
                let { value: t } = e;
                return (0, s.jsx)(c.animated.div, {
                    className: o()((0, h.Q)(E.BRd.DARK), C.activityItem, T, {
                        [C.activityItem_13_11]: 0 === r,
                        [C.activityItem_16_9]: 1 === r
                    }),
                    style: {
                        transform: t.to([0, 1], [1, 1.05]).to((e) => 'scale('.concat(e, ')'))
                    },
                    children: (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(m.Z, {
                                imageBackground: v,
                                applicationName: i.application.name,
                                imageClassName: C.activitySuggestionImage,
                                imageNotFoundClassName: C.brokenImageIconWrapper
                            }),
                            L,
                            j
                        ]
                    })
                });
            }
        })
    });
}
((a = i || (i = {}))[(a.THIRTEEN_BY_ELEVEN = 0)] = 'THIRTEEN_BY_ELEVEN'), (a[(a.SIXTEEN_BY_NINE = 1)] = 'SIXTEEN_BY_NINE'), (T.AspectRatio = i);
