n.d(t, {
    K: function () {
        return s;
    }
});
var r = n(891163),
    i = n(192379),
    a = n(591734);
function s(e) {
    let { isDisabled: t, onFocus: n, onBlur: s, onFocusChange: o } = e,
        l = (0, i.useCallback)(
            (e) => {
                if (e.target === e.currentTarget) return s && s(e), o && o(!1), !0;
            },
            [s, o]
        ),
        u = (0, r.d)(l),
        c = (0, i.useCallback)(
            (e) => {
                let t = (0, a.r)(e.target);
                e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), o && o(!0), u(e));
            },
            [o, n, u]
        );
    return {
        focusProps: {
            onFocus: !t && (n || o || s) ? c : void 0,
            onBlur: !t && (s || o) ? l : void 0
        }
    };
}
