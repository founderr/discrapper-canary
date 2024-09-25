var i = n(735250),
    r = n(470079),
    a = n(481060),
    o = n(703656),
    d = n(981631);
t.Z = r.forwardRef(function (e, t) {
    let { href: n, children: f, onClick: c, onKeyPress: l, focusProps: s, ...u } = e,
        _ = r.useCallback(
            (e) => {
                if (!e.repeat) (e.charCode === d.yXg.SPACE || e.charCode === d.yXg.ENTER) && (e.preventDefault(), null != n && (0, o.uL)(n), null == c || c()), null == l || l(e);
            },
            [n, l, c]
        ),
        h = r.useCallback(
            (e) => {
                if (!e.metaKey && !e.shiftKey && 0 === e.button) e.preventDefault(), e.stopPropagation(), null != n && (0, o.uL)(n), null == c || c();
            },
            [n, c]
        ),
        b = (0, i.jsx)('a', {
            ref: t,
            href: n,
            onClick: h,
            onKeyPress: _,
            ...u,
            children: f
        });
    return (0, i.jsx)(a.FocusRing, {
        ...s,
        children: b
    });
});
