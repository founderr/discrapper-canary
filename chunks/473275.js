r.d(n, {
    n: function () {
        return o;
    }
});
var i = r(661763),
    a = r(662845),
    s = r(921336);
function o(e, n) {
    let { elementType: r = 'a', onPress: o, onPressStart: l, onPressEnd: u, onClick: c, isDisabled: d, ...f } = e,
        _ = {};
    'a' !== r &&
        (_ = {
            role: 'link',
            tabIndex: d ? void 0 : 0
        });
    let { focusableProps: h } = (0, a.kc)(e, n),
        { pressProps: p, isPressed: m } = (0, s.r7)({
            onPress: o,
            onPressStart: l,
            onPressEnd: u,
            isDisabled: d,
            ref: n
        }),
        g = (0, i.zL)(f, {
            labelable: !0,
            isLink: 'a' === r
        }),
        E = (0, i.dG)(h, p),
        v = (0, i.tv)();
    return {
        isPressed: m,
        linkProps: (0, i.dG)(g, {
            ...E,
            ..._,
            'aria-disabled': d || void 0,
            'aria-current': e['aria-current'],
            onClick: (e) => {
                var n;
                null === (n = p.onClick) || void 0 === n || n.call(p, e), c && (c(e), console.warn('onClick is deprecated, please use onPress')), !v.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && (0, i.b0)(e.currentTarget, e) && (e.preventDefault(), v.open(e.currentTarget, e));
            }
        })
    };
}
