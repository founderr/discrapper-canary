var i = t(735250),
    r = t(470079),
    l = t(481060),
    o = t(703656),
    u = t(981631);
n.Z = r.forwardRef(function (e, n) {
    let { href: t, children: s, onClick: a, onKeyPress: c, focusProps: d, ..._ } = e,
        E = r.useCallback(
            (e) => {
                if (!e.repeat) (e.charCode === u.yXg.SPACE || e.charCode === u.yXg.ENTER) && (e.preventDefault(), null != t && (0, o.uL)(t), null == a || a()), null == c || c(e);
            },
            [t, c, a]
        ),
        f = r.useCallback(
            (e) => {
                if (!e.metaKey && !e.shiftKey && 0 === e.button) e.preventDefault(), e.stopPropagation(), null != t && (0, o.uL)(t), null == a || a();
            },
            [t, a]
        ),
        I = (0, i.jsx)('a', {
            ref: n,
            href: t,
            onClick: f,
            onKeyPress: E,
            ..._,
            children: s
        });
    return (0, i.jsx)(l.FocusRing, {
        ...d,
        children: I
    });
});
