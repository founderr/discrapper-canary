var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(38068),
    l = n(388032),
    u = n(527480);
t.Z = i.forwardRef(function (e, t) {
    let { className: n, contentClassName: i, isUnread: a, children: c, id: d, role: f, 'aria-label': _ } = e;
    return (0, r.jsxs)('div', {
        className: s()(n, {
            [u.divider]: !0,
            [u.isUnread]: a,
            [u.hasContent]: null != c
        }),
        ref: t,
        id: d,
        role: f,
        'aria-label': _,
        children: [
            null != c
                ? (0, r.jsx)('span', {
                      className: s()(u.content, i),
                      children: c
                  })
                : null,
            a
                ? (0, r.jsxs)('span', {
                      className: u.unreadPill,
                      children: [
                          (0, r.jsx)(o.Z, {
                              foreground: u.unreadPillCapStroke,
                              className: u.unreadPillCap
                          }),
                          l.intl.string(l.t.y2b7CA)
                      ]
                  })
                : null
        ]
    });
});
