var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(388032),
    c = n(32967);
t.Z = s.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: s, onChangePage: r, children: d, className: u, showPageCount: m = !0, ...h } = e,
        g = n <= 0,
        p = n >= s - 1;
    return (0, i.jsxs)('div', {
        className: l()(c.__invalid_paginator, u),
        ref: t,
        ...h,
        children: [
            d,
            (0, i.jsxs)('div', {
                className: c.pageActions,
                children: [
                    (0, i.jsx)(a.Clickable, {
                        className: l()(c.pageButtonPrev, { [c.disabled]: g }),
                        tabIndex: g ? -1 : 0,
                        onClick: g ? void 0 : () => r(n - 1),
                        children: (0, i.jsx)(a.ChevronSmallLeftIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: c.pageButtonIcon,
                            'aria-label': o.intl.string(o.t.vgfxaG)
                        })
                    }),
                    m
                        ? (0, i.jsx)('div', {
                              className: c.pageIndicator,
                              children: o.intl.format(o.t.MtpIws, {
                                  currentPage: n + 1,
                                  numPages: s
                              })
                          })
                        : (0, i.jsx)('div', {
                              className: c.pageIndicator,
                              children: o.intl.format(o.t.bKI77e, { currentPage: n + 1 })
                          }),
                    (0, i.jsx)(a.Clickable, {
                        className: l()(c.pageButtonNext, { [c.disabled]: p }),
                        tabIndex: p ? -1 : 0,
                        onClick: p ? void 0 : () => r(n + 1),
                        children: (0, i.jsx)(a.ChevronSmallRightIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: c.pageButtonIcon,
                            'aria-label': o.intl.string(o.t.XiOHRU)
                        })
                    })
                ]
            })
        ]
    });
});
