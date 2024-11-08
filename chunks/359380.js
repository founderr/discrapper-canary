t.d(n, {
    d: function () {
        return m;
    }
}),
    t(47120),
    t(653041);
var r = t(200651),
    a = t(192379),
    i = t(481060),
    o = t(214715),
    s = t(18100),
    l = t(308083),
    c = t(388032),
    d = t(306882);
let u = (e) => {
    let { title: n, icon: t, availableTraits: s, selectedTraits: c, onUpdateTraits: u } = e,
        m = a.useCallback(
            (e) => {
                let n = new Set(c);
                n.delete(e), u(n);
            },
            [u, c]
        ),
        f = a.useCallback(
            (e) => {
                if (c.size === l.c4) return;
                let n = new Set(c);
                n.add(e), u(n);
            },
            [u, c]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Text, {
                className: d.interestsCategoryTitle,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: n
            }),
            (0, r.jsx)('div', {
                className: d.utilityTraits,
                children: s.map((e) => {
                    let n = c.has(e);
                    return (0, r.jsx)(
                        o.Z,
                        {
                            variant: 'text-xs/semibold',
                            color: 'interactive-normal',
                            icon: t,
                            text: e,
                            selected: n,
                            onClick: n ? m : f
                        },
                        e
                    );
                })
            })
        ]
    });
};
function m(e) {
    let { guildId: n, onUpdateTraits: t, progress: o, availableTraits: m, hidePreview: f = !1 } = e,
        h = a.useMemo(() => {
            let e = [];
            return (
                l.gh.forEach((n) =>
                    e.push({
                        value: n,
                        label: n
                    })
                ),
                e
            );
        }, []),
        x = a.useMemo(() => {
            var e;
            return null !== (e = null != m ? m : null == o ? void 0 : o.interests) && void 0 !== e ? e : new Set();
        }, [m, null == o ? void 0 : o.interests]),
        p = a.useMemo(() => Array.from(x), [x]),
        g = a.useMemo(() => p.filter((e) => l.gh.has(e)), [p]),
        C = a.useCallback(
            (e) => {
                t(new Set([...p.filter((e) => !l.gh.has(e)), ...e]));
            },
            [t, p]
        ),
        b = a.useMemo(() => p.filter((e) => l.WZ.has(e) || l.gh.has(e)), [p]),
        v = a.useCallback(
            (e) => {
                let n = new Set(x);
                n.delete(e), t(n);
            },
            [t, x]
        );
    return (0, r.jsxs)('div', {
        className: d.content,
        children: [
            (0, r.jsxs)('div', {
                className: d.mainPanelContainer,
                children: [
                    (0, r.jsx)(u, {
                        title: c.intl.string(c.t.SXqVqq),
                        icon: i.UserIcon,
                        availableTraits: l.jK,
                        selectedTraits: x,
                        onUpdateTraits: t
                    }),
                    (0, r.jsx)(u, {
                        title: c.intl.string(c.t['7uZoaG']),
                        icon: i.UserIcon,
                        availableTraits: l.CT,
                        selectedTraits: x,
                        onUpdateTraits: t
                    }),
                    (0, r.jsx)(i.Text, {
                        className: d.interestsCategoryTitle,
                        variant: 'text-xs/semibold',
                        color: 'text-muted',
                        children: c.intl.string(c.t.rU5dUV)
                    }),
                    (0, r.jsx)('div', {
                        className: d.languageSelect,
                        children: (0, r.jsx)(i.SearchableSelect, {
                            wrapperClassName: d.input,
                            options: h,
                            value: g,
                            onChange: C,
                            placeholder: c.intl.string(c.t.GA91en),
                            multi: !0
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.fixedWidthSidebar,
                children:
                    null != o &&
                    p.length > 0 &&
                    !f &&
                    (0, r.jsx)(s.Z, {
                        guildId: n,
                        progress: o,
                        traitsToHighlight: b,
                        maskDescription: !0,
                        onTraitClick: v
                    })
            })
        ]
    });
}
n.Z = (e) => {
    let { guildId: n, title: t, description: a, onUpdateTraits: o, progress: s, traits: l, optional: u = !1, hidePreview: f = !1 } = e;
    return (0, r.jsxs)('div', {
        className: d.slideContent,
        children: [
            u &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/medium',
                    color: 'header-secondary',
                    className: d.optionalTag,
                    children: c.intl.string(c.t['vWEL6+'])
                }),
            (0, r.jsx)(i.Heading, {
                variant: 'heading-xxl/medium',
                className: d.title,
                children: t
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: d.subtitle,
                children: a
            }),
            (0, r.jsx)(m, {
                guildId: n,
                onUpdateTraits: o,
                progress: s,
                availableTraits: l,
                hidePreview: f
            })
        ]
    });
};
