var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(713120);
let c = 16,
    d = a.memo(function (e) {
        let { children: n, className: r, icon: a, isCollapsed: s, onClick: d, 'aria-label': f } = e;
        return (0, i.jsx)('div', {
            className: o()(u.wrapper, r),
            children: (0, i.jsxs)(l.Clickable, {
                onClick: d,
                onKeyDown: (e) => e.stopPropagation(),
                className: o()(u.header, { [u.interactive]: null != s }),
                'aria-expanded': null != s ? !s : void 0,
                'aria-label': f,
                children: [
                    null != a &&
                        (0, i.jsx)('div', {
                            'aria-hidden': !0,
                            className: u.headerIcon,
                            children: a
                        }),
                    (0, i.jsx)('span', {
                        className: u.headerLabel,
                        children: n
                    }),
                    null != s
                        ? (0, i.jsx)(l.ChevronSmallDownIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              className: o()(u.headerCollapseIcon, { [u.headerCollapseIconCollapsed]: s }),
                              height: c,
                              width: c
                          })
                        : null
                ]
            })
        });
    });
n.Z = d;
