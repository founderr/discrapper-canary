a.d(t, {
    h: function () {
        return _;
    }
});
var n,
    s,
    r,
    i,
    l = a(735250),
    o = a(470079),
    c = a(476400),
    d = a.n(c),
    u = a(948789),
    N = a(982905),
    h = a(66037),
    m = a(231338),
    p = a(913835);
let I = m.j_.MAIN_NAVIGATION_MENU;
class _ extends (i = o.PureComponent) {
    render() {
        let e = (0, u.fQ)(this.context.router),
            { isOpen: t, dropdownLinks: a, TrackClick: n, avoidRouter: s, id: r, 'aria-label': i } = this.props,
            o = a.map((t, a) =>
                t.divider
                    ? (0, l.jsx)('hr', { className: p.divider }, 'divider-'.concat(a))
                    : t.external
                      ? (0, l.jsx)(
                            'li',
                            {
                                className: p.moreListItemInactive,
                                children: (0, l.jsx)(n, {
                                    className: p.moreListLink,
                                    eventName: I,
                                    data: { linkClicked: t.linkClicked },
                                    href: t.route,
                                    rel: 'me',
                                    children: (0, l.jsx)('span', {
                                        className: p.moreListLinkCopy,
                                        children: t.title
                                    })
                                })
                            },
                            t.route
                        )
                      : (0, l.jsx)(
                            'li',
                            {
                                className: (0, N.l)(p, 'moreListItem', e(t.route) ? 'Active' : 'Inactive'),
                                children: (0, l.jsx)(h.Z, {
                                    avoidRouter: s,
                                    className: p.moreListLink,
                                    to: t.route,
                                    from: m.j_.MAIN_NAVIGATION_MENU,
                                    role: 'menuitem',
                                    children: (0, l.jsx)(n, {
                                        tag: 'span',
                                        className: p.moreListLinkCopy,
                                        eventName: I,
                                        data: { linkClicked: t.linkClicked },
                                        children: t.title
                                    })
                                })
                            },
                            t.route
                        )
            );
        return (0, l.jsx)('ul', {
            id: r,
            className: (0, N.l)(p, 'moreList', t ? 'Open' : 'Closed'),
            'aria-label': i,
            children: o
        });
    }
}
(n = _),
    (s = 'contextTypes'),
    (r = { router: d().object.isRequired }),
    s in n
        ? Object.defineProperty(n, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[s] = r);
