n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(793030),
    a = n(481060),
    s = n(924489),
    o = n(290247),
    c = n(824606),
    d = n(682807),
    u = n(388032),
    h = n(889280);
let m = (0, u.getAvailableLocales)();
function p(e) {
    let { className: t, application: n, onSelectCategory: p } = e,
        g = (0, c.Z)({ application: n }),
        f = r.useMemo(() => {
            var e;
            if ((null === (e = n.directory_entry) || void 0 === e ? void 0 : e.supported_locales) != null) {
                let e = new Set(n.directory_entry.supported_locales);
                return m.filter((t) => e.has(t.value)).map((e) => u.intl.string(e.localizedName));
            }
        }, [n.directory_entry]);
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsx)(s.Z, {
                application: n,
                mutualGuilds: g,
                mutualGuildShownMax: 3,
                className: h.guildCountContainer,
                guildIconSize: s.x.SMALL,
                guildsClassName: h.guildsIconContainer,
                compact: !0
            }),
            (0, i.jsxs)('div', {
                className: h.sidebar,
                children: [
                    null != n.categories &&
                        n.categories.length > 0 &&
                        (0, i.jsxs)('div', {
                            className: h.sidebarSection,
                            children: [
                                (0, i.jsx)(l.X6, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: u.intl.string(u.t.s7ialZ)
                                }),
                                (0, i.jsx)('div', {
                                    className: h.categories,
                                    children: n.categories.map((e) =>
                                        (0, i.jsx)(
                                            a.Clickable,
                                            {
                                                className: h.category,
                                                onClick: () => p(e.id),
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
                    null != f &&
                        f.length > 0 &&
                        (0, i.jsxs)('div', {
                            className: h.sidebarSection,
                            children: [
                                (0, i.jsx)(l.X6, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: u.intl.string(u.t.Fbjlu7)
                                }),
                                (0, i.jsx)(o.Z, { supportedLanguages: f })
                            ]
                        }),
                    (0, i.jsx)(d.Z, {
                        application: n,
                        className: h.sidebarSection
                    })
                ]
            })
        ]
    });
}
