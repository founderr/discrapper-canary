var r = t(735250),
    i = t(470079),
    o = t(481060),
    l = t(703656),
    u = t(981631);
n.Z = i.forwardRef(function (e, n) {
    let { href: t, children: s, onClick: a, onKeyPress: c, focusProps: d, ..._ } = e,
        f = i.useCallback(
            (e) => {
                if (!e.repeat) (e.charCode === u.yXg.SPACE || e.charCode === u.yXg.ENTER) && (e.preventDefault(), null != t && (0, l.uL)(t), null == a || a()), null == c || c(e);
            },
            [t, c, a]
        ),
        E = i.useCallback(
            (e) => {
                if (!e.metaKey && !e.shiftKey && 0 === e.button) e.preventDefault(), e.stopPropagation(), null != t && (0, l.uL)(t), null == a || a();
            },
            [t, a]
        ),
        I = (0, r.jsx)('a', {
            ref: n,
            href: t,
            onClick: E,
            onKeyPress: f,
            ..._,
            children: s
        });
    return (0, r.jsx)(o.FocusRing, {
        ...d,
        children: I
    });
});
