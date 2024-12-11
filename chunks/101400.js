n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(793030),
    a = n(481060),
    o = n(924489),
    s = n(214912),
    c = n(824606),
    d = n(900849),
    u = n(881294),
    h = n(682807),
    m = n(953989),
    p = n(981631),
    g = n(388032),
    f = n(37903);
function _(e) {
    let { className: t, application: n, onSelectCategory: _ } = e,
        E = (0, c.Z)({ application: n }),
        I = r.useCallback(async () => {
            try {
                var e;
                let t = null == n ? void 0 : null === (e = n.guild) || void 0 === e ? void 0 : e.id;
                if (null != t) {
                    (0, u.z)(p.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: n.id,
                        support_guild_id: t
                    });
                    let e = { page: p.ZY5.APPLICATION_DIRECTORY };
                    await (0, d.Ub)(t, e, { setsHistorySnapshot: !1 });
                }
            } catch {}
        }, [n]),
        C = r.useCallback(() => {
            var e;
            null != (null == n ? void 0 : null === (e = n.guild) || void 0 === e ? void 0 : e.id) && I();
        }, [n, I]);
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsx)(o.Z, {
                application: n,
                mutualGuilds: E,
                mutualGuildShownMax: 3,
                className: f.guildCountContainer,
                guildIconSize: o.x.SMALL,
                guildsClassName: f.guildsIconContainer,
                compact: !0
            }),
            (0, i.jsxs)('div', {
                className: f.sidebar,
                children: [
                    null != n.categories &&
                        n.categories.length > 0 &&
                        (0, i.jsxs)('div', {
                            className: f.sidebarSection,
                            children: [
                                (0, i.jsx)(l.X6, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: g.intl.string(g.t.s7ialZ)
                                }),
                                (0, i.jsx)('div', {
                                    className: f.categories,
                                    children: n.categories.map((e) =>
                                        (0, i.jsx)(
                                            a.Clickable,
                                            {
                                                className: f.category,
                                                onClick: () => _(e),
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
                    (0, i.jsx)(m.Z, {
                        application: n,
                        className: f.sidebarSection
                    }),
                    (0, i.jsx)(h.Z, {
                        application: n,
                        className: f.sidebarSection
                    }),
                    null != n.guild &&
                        n.guild.features.includes(p.oNc.DISCOVERABLE) &&
                        (0, i.jsxs)('div', {
                            className: f.sidebarSection,
                            children: [
                                (0, i.jsx)(l.X6, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: g.intl.string(g.t.KJEO29)
                                }),
                                (0, i.jsx)(s.Z, {
                                    guild: n.guild,
                                    onClick: C
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
