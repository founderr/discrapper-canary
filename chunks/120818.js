n.d(t, {
    T: function () {
        return v;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(91192),
    o = n(442837),
    a = n(481060),
    s = n(44315),
    c = n(563534),
    u = n(846121),
    d = n(703656),
    h = n(259580),
    p = n(981631),
    m = n(176505),
    f = n(388032),
    g = n(47622);
function C(e, t) {
    return (0, i.jsx)(
        a.Text,
        {
            variant: 'text-xs/bold',
            color: 'text-normal',
            children: e
        },
        t
    );
}
let v = l.memo(function (e) {
    let { guild: t } = e,
        n = (0, o.e7)([c.Z], () => c.Z.getNewMemberActions(t.id), [t.id]),
        v = (0, o.e7)([u.Z], () => u.Z.getCompletedActions(t.id)),
        _ = l.useMemo(() => {
            if (null == n || null == v) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != v[t.channelId] && e++;
                }),
                e
            );
        }, [v, n]),
        x = null == n ? 0 : n.length,
        I = (0, r.JA)('progress-bar-'.concat(t.id));
    return (0, i.jsxs)('li', {
        children: [
            (0, i.jsxs)(a.Clickable, {
                ...I,
                role: 'button',
                focusProps: { offset: { right: 4 } },
                className: g.progressBarContainer,
                onClick: function () {
                    (0, d.uL)(p.Z5c.CHANNEL(t.id, m.oC.GUILD_HOME));
                },
                children: [
                    (0, i.jsxs)('div', {
                        className: g.progressBarText,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: 'heading-sm/bold',
                                children: f.intl.string(f.t.SnrR39)
                            }),
                            (0, i.jsxs)('div', {
                                className: g.rightContainer,
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        className: g.rightText,
                                        children: f.intl.format(f.t.eqZ1lZ, {
                                            numberHook: C,
                                            total: x.toString(),
                                            completed: _.toString()
                                        })
                                    }),
                                    (0, i.jsx)(h.Z, {
                                        className: g.arrow,
                                        width: 16,
                                        height: 16,
                                        direction: h.Z.Directions.RIGHT
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(a.Progress, {
                        className: g.progressBar,
                        foregroundGradientColor: [(0, s.Lq)(p.Ilk.GREEN_300), (0, s.Lq)(p.Ilk.GREEN_230)],
                        percent: (_ / x) * 100 + 3,
                        animate: !0
                    })
                ]
            }),
            (0, i.jsx)('div', {
                role: 'separator',
                className: g.divider
            })
        ]
    });
});
