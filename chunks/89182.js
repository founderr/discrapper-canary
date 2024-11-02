n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    s = n(392512);
function o(e) {
    let { items: t, onClose: n, onSelect: r, selected: l, ...o } = e;
    return (0, i.jsx)(a.Menu, {
        className: s.menu,
        navId: 'global-discovery-search-filter-options',
        'aria-label': o['aria-label'],
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, i.jsx)(
            a.MenuGroup,
            {
                children: t.map((e) => {
                    let { id: t, label: n } = e;
                    return (0, i.jsx)(
                        a.MenuItem,
                        {
                            id: t,
                            label: n,
                            icon: t === l ? a.CircleCheckIcon : void 0,
                            action: () => r(t)
                        },
                        t
                    );
                })
            },
            'overflow-tabs'
        )
    });
}
function c(e) {
    let { className: t, items: n, title: r, onSelect: c, selected: d, ...u } = e;
    return (0, i.jsx)(a.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(o, {
                selected: d,
                onClose: t,
                items: n,
                onSelect: c,
                'aria-label': u['aria-label']
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, n) => {
            let { isShown: o } = n;
            return (0, i.jsxs)('div', {
                ...e,
                className: l()(s.filter, t),
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'interactive-normal',
                        children: r
                    }),
                    o
                        ? (0, i.jsx)(a.ChevronSmallUpIcon, {
                              size: 'xs',
                              color: a.tokens.colors.INTERACTIVE_NORMAL
                          })
                        : (0, i.jsx)(a.ChevronSmallDownIcon, {
                              size: 'xs',
                              color: a.tokens.colors.INTERACTIVE_NORMAL
                          })
                ]
            });
        }
    });
}
