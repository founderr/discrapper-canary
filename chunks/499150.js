var o = n(735250), r = n(470079), a = n(481060), i = n(703656), l = n(981631);
t.Z = r.forwardRef(function (e, t) {
    let {
            href: n,
            children: d,
            onClick: c,
            onKeyPress: u,
            focusProps: f,
            ...s
        } = e, _ = r.useCallback(e => {
            if (!e.repeat)
                (e.charCode === l.yXg.SPACE || e.charCode === l.yXg.ENTER) && (e.preventDefault(), null != n && (0, i.uL)(n), null == c || c()), null == u || u(e);
        }, [
            n,
            u,
            c
        ]), h = r.useCallback(e => {
            if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(), e.stopPropagation(), null != n && (0, i.uL)(n), null == c || c();
        }, [
            n,
            c
        ]), b = (0, o.jsx)('a', {
            ref: t,
            href: n,
            onClick: h,
            onKeyPress: _,
            ...s,
            children: d
        });
    return (0, o.jsx)(a.FocusRing, {
        ...f,
        children: b
    });
});
