var n = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(689938),
    c = t(32967);
s.Z = a.forwardRef(function (e, s) {
    let { currentPageIndex: t, numPages: a, onChangePage: i, children: d, className: _, showPageCount: u = !0, ...E } = e,
        T = t <= 0,
        S = t >= a - 1;
    return (0, n.jsxs)('div', {
        className: r()(c.__invalid_paginator, _),
        ref: s,
        ...E,
        children: [
            d,
            (0, n.jsxs)('div', {
                className: c.pageActions,
                children: [
                    (0, n.jsx)(o.Clickable, {
                        className: r()(c.pageButtonPrev, { [c.disabled]: T }),
                        tabIndex: T ? -1 : 0,
                        onClick: T ? void 0 : () => i(t - 1),
                        children: (0, n.jsx)(o.ChevronSmallLeftIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: c.pageButtonIcon,
                            'aria-label': l.Z.Messages.PAGINATION_PREVIOUS
                        })
                    }),
                    u
                        ? (0, n.jsx)('div', {
                              className: c.pageIndicator,
                              children: l.Z.Messages.PAGINATOR_OF_PAGES.format({
                                  currentPage: t + 1,
                                  numPages: a
                              })
                          })
                        : (0, n.jsx)('div', {
                              className: c.pageIndicator,
                              children: l.Z.Messages.PAGINATOR_CURRENT_PAGE.format({ currentPage: t + 1 })
                          }),
                    (0, n.jsx)(o.Clickable, {
                        className: r()(c.pageButtonNext, { [c.disabled]: S }),
                        tabIndex: S ? -1 : 0,
                        onClick: S ? void 0 : () => i(t + 1),
                        children: (0, n.jsx)(o.ChevronSmallRightIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: c.pageButtonIcon,
                            'aria-label': l.Z.Messages.PAGINATION_NEXT
                        })
                    })
                ]
            })
        ]
    });
});
