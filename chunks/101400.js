n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(793030),
    a = n(481060),
    s = n(924489),
    o = n(214912),
    c = n(290247),
    d = n(824606),
    u = n(900849),
    h = n(682807),
    m = n(981631),
    p = n(388032),
    g = n(889280);
let f = (0, p.getAvailableLocales)();
function _(e) {
    let { className: t, application: n, onSelectCategory: _ } = e,
        E = (0, d.Z)({ application: n }),
        I = r.useMemo(() => {
            var e;
            if ((null === (e = n.directory_entry) || void 0 === e ? void 0 : e.supported_locales) != null) {
                let e = new Set(n.directory_entry.supported_locales);
                return f.filter((t) => e.has(t.value)).map((e) => p.intl.string(e.localizedName));
            }
        }, [n.directory_entry]),
        C = r.useCallback(async () => {
            try {
                var e;
                let t = null == n ? void 0 : null === (e = n.guild) || void 0 === e ? void 0 : e.id;
                if (null != t) {
                    let e = { page: m.ZY5.APPLICATION_DIRECTORY };
                    await (0, u.Ub)(t, e, { setsHistorySnapshot: !1 });
                }
            } catch {}
        }, [n]),
        v = r.useCallback(() => {
            var e;
            null != (null == n ? void 0 : null === (e = n.guild) || void 0 === e ? void 0 : e.id) && C();
        }, [n, C]);
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsx)(s.Z, {
                application: n,
                mutualGuilds: E,
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
                                                onClick: () => _(e.id),
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
                    null != I &&
                        I.length > 0 &&
                        (0, i.jsxs)('div', {
                            className: g.sidebarSection,
                            children: [
                                (0, i.jsx)(l.X6, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: p.intl.string(p.t.Fbjlu7)
                                }),
                                (0, i.jsx)(c.Z, { supportedLanguages: I })
                            ]
                        }),
                    (0, i.jsx)(h.Z, {
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
                                    onClick: v
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
