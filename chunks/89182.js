n.d(t, {
    PA: function () {
        return r;
    },
    ZP: function () {
        return p;
    },
    iG: function () {
        return m;
    }
});
var i,
    r,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(481060),
    d = n(706454),
    u = n(600419);
function h(e) {
    let { items: t, onClose: n, onSelect: i, selected: r, ...a } = e;
    return (0, l.jsx)(c.Menu, {
        className: u.menu,
        navId: 'global-discovery-search-filter-options',
        'aria-label': a['aria-label'],
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, l.jsx)(
            c.MenuGroup,
            {
                children: t.map((e) => {
                    let { id: t, label: n } = e;
                    return (0, l.jsx)(
                        c.MenuItem,
                        {
                            id: t,
                            label: n,
                            icon: t === r ? c.CircleCheckIcon : void 0,
                            action: () => i(t)
                        },
                        t
                    );
                })
            },
            'overflow-tabs'
        )
    });
}
function m(e) {
    let { count: t, name: n } = e,
        i = t.toLocaleString(d.default.locale);
    return (0, l.jsxs)('div', {
        className: u.categoryLabel,
        children: [
            (0, l.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: n
            }),
            (0, l.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: i
            })
        ]
    });
}
((i = r || (r = {})).FILLED = 'FILLED'), (i.TRANSPARENT = 'TRANSPARENT');
function p(e) {
    let { items: t, title: n, onSelect: i, selected: r, variant: o = 'TRANSPARENT', ...d } = e,
        m = a.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case 'FILLED':
                            return u.filterBackground;
                        case 'TRANSPARENT':
                            return;
                    }
                })(o),
            [o]
        );
    return (0, l.jsx)(c.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(h, {
                selected: r,
                onClose: n,
                items: t,
                onSelect: i,
                'aria-label': d['aria-label']
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsxs)('div', {
                ...e,
                className: s()(u.filter, m),
                children: [
                    (0, l.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'interactive-normal',
                        children: n
                    }),
                    i
                        ? (0, l.jsx)(c.ChevronSmallUpIcon, {
                              size: 'xs',
                              color: c.tokens.colors.INTERACTIVE_NORMAL
                          })
                        : (0, l.jsx)(c.ChevronSmallDownIcon, {
                              size: 'xs',
                              color: c.tokens.colors.INTERACTIVE_NORMAL
                          })
                ]
            });
        }
    });
}
