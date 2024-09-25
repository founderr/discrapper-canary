var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(850613);
let u = 16,
    c = i.memo(function (e) {
        let { children: t, className: n, icon: i, isCollapsed: a, onClick: c, 'aria-label': d } = e;
        return (0, r.jsx)('div', {
            className: o()(l.wrapper, n),
            children: (0, r.jsxs)(s.Clickable, {
                onClick: c,
                onKeyDown: (e) => e.stopPropagation(),
                className: o()(l.header, { [l.interactive]: null != a }),
                'aria-expanded': null != a ? !a : void 0,
                'aria-label': d,
                children: [
                    null != i &&
                        (0, r.jsx)('div', {
                            'aria-hidden': !0,
                            className: l.headerIcon,
                            children: i
                        }),
                    (0, r.jsx)('span', {
                        className: l.headerLabel,
                        children: t
                    }),
                    null != a
                        ? (0, r.jsx)(s.ChevronSmallDownIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              className: o()(l.headerCollapseIcon, { [l.headerCollapseIconCollapsed]: a }),
                              height: u,
                              width: u
                          })
                        : null
                ]
            })
        });
    });
t.Z = c;
