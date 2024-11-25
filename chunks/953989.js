n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(706454),
    d = n(388032),
    u = n(181169);
let h = (0, d.getAvailableLocales)();
function m(e) {
    let { application: t, className: n } = e,
        l = (0, s.e7)([c.default], () => c.default.locale),
        { supportedLanguages: m, usersLanguageIsFirst: p } = r.useMemo(() => {
            var e;
            if ((null === (e = t.directory_entry) || void 0 === e ? void 0 : e.supported_locales) != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    n = e.has(l),
                    i = h.filter((t) => e.has(t.value));
                return (
                    n && i.sort((e, t) => (e.value === l ? -1 : t.value === l ? 1 : 0)),
                    {
                        supportedLanguages: i.map((e) => d.intl.string(e.localizedName)),
                        usersLanguageIsFirst: n
                    }
                );
            }
            return {
                supportedLanguages: [],
                usersLanguageIsFirst: !1
            };
        }, [t.directory_entry, l]);
    return (0, i.jsxs)('div', {
        className: n,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                children: d.intl.string(d.t.Fbjlu7)
            }),
            (0, i.jsx)('ul', {
                className: u.outerContainer,
                children: m.map((e, t) =>
                    (0, i.jsx)(
                        'li',
                        {
                            className: a()(u.innerContainer, u.languageItem),
                            children: (0, i.jsx)(o.Text, {
                                variant: 0 === t && p ? 'text-sm/bold' : 'text-sm/normal',
                                children: e
                            })
                        },
                        e
                    )
                )
            }),
            ' '
        ]
    });
}
