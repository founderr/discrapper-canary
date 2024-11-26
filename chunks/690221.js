var i = n(200651),
    r = n(192379),
    l = n(481060),
    o = n(703656),
    u = n(981631);
t.Z = r.forwardRef(function (e, t) {
    let { href: n, children: a, onClick: s, onKeyPress: c, focusProps: d, ...f } = e,
        _ = r.useCallback(
            (e) => {
                if (!e.repeat) (e.charCode === u.yXg.SPACE || e.charCode === u.yXg.ENTER) && (e.preventDefault(), null != n && (0, o.uL)(n), null == s || s()), null == c || c(e);
            },
            [n, c, s]
        ),
        E = r.useCallback(
            (e) => {
                if (!e.metaKey && !e.shiftKey && 0 === e.button) e.preventDefault(), e.stopPropagation(), null != n && (0, o.uL)(n), null == s || s();
            },
            [n, s]
        ),
        p = (0, i.jsx)('a', {
            ref: t,
            href: n,
            onClick: E,
            onKeyPress: _,
            ...f,
            children: a
        });
    return (0, i.jsx)(l.FocusRing, {
        ...d,
        children: p
    });
});
