n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(793030),
    a = n(481060),
    s = n(924489),
    o = n(214912),
    c = n(824606),
    d = n(900849),
    u = n(682807),
    h = n(953989),
    m = n(981631),
    p = n(388032),
    g = n(889280);
function f(e) {
    let { className: t, application: n, onSelectCategory: f } = e,
        _ = (0, c.Z)({ application: n }),
        E = r.useCallback(async () => {
            try {
                var e;
                let t = null == n ? void 0 : null === (e = n.guild) || void 0 === e ? void 0 : e.id;
                if (null != t) {
                    let e = { page: m.ZY5.APPLICATION_DIRECTORY };
                    await (0, d.Ub)(t, e, { setsHistorySnapshot: !1 });
                }
            } catch {}
        }, [n]),
        I = r.useCallback(() => {
            var e;
            null != (null == n ? void 0 : null === (e = n.guild) || void 0 === e ? void 0 : e.id) && E();
        }, [n, E]);
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsx)(s.Z, {
                application: n,
                mutualGuilds: _,
                mutualGuildShownMax: 3,
                className: g.guildCountContainer,
                guildIconSize: s.x.SMALL,
                guildsClassName: g.guildsIconContainer,
                compact: !0
            }),
            (0, i.jsxs)('div', {
                className: g.sidebar,
                children: [
                    null != n.categories &&
                        n.categories.length > 0 &&
                        (0, i.jsxs)('div', {
                            className: g.sidebarSection,
                            children: [
                                (0, i.jsx)(l.X6, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: p.intl.string(p.t.s7ialZ)
                                }),
                                (0, i.jsx)('div', {
                                    className: g.categories,
                                    children: n.categories.map((e) =>
                                        (0, i.jsx)(
                                            a.Clickable,
                                            {
                                                className: g.category,
                                                onClick: () => f(e.id),
                                                children: (0, i.jsx)(l.xv, {
                                                    variant: 'text-sm/semibold',
                                                    color: 'redesign-button-tertiary-text',
                                                    children: e.name
                                                })
                                            },
                                            e.id
                                        )
                                    )
                                })
                            ]
                        }),
                    (0, i.jsx)(h.Z, {
                        application: n,
                        className: g.sidebarSection
                    }),
                    (0, i.jsx)(u.Z, {
                        application: n,
                        className: g.sidebarSection
                    }),
                    null != n.guild &&
                        n.guild.features.includes(m.oNc.DISCOVERABLE) &&
                        (0, i.jsxs)('div', {
                            className: g.sidebarSection,
                            children: [
                                (0, i.jsx)(l.X6, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: p.intl.string(p.t.KJEO29)
                                }),
                                (0, i.jsx)(o.Z, {
                                    guild: n.guild,
                                    onClick: I
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
