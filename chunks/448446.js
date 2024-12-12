r.d(n, {
    U: function () {
        return o;
    },
    k: function () {
        return l;
    }
});
var i = r(661763),
    a = r(662845),
    s = r(921336);
function o(e, n) {
    let r,
        { elementType: o = 'button', isDisabled: l, onPress: u, onPressStart: c, onPressEnd: d, onPressUp: f, onPressChange: _, preventFocusOnPress: h, allowFocusWhenDisabled: p, onClick: m, href: g, target: E, rel: v, type: I = 'button' } = e;
    r =
        'button' === o
            ? {
                  type: I,
                  disabled: l
              }
            : {
                  role: 'button',
                  tabIndex: l ? void 0 : 0,
                  href: 'a' === o && l ? void 0 : g,
                  target: 'a' === o ? E : void 0,
                  type: 'input' === o ? I : void 0,
                  disabled: 'input' === o ? l : void 0,
                  'aria-disabled': l && 'input' !== o ? l : void 0,
                  rel: 'a' === o ? v : void 0
              };
    let { pressProps: T, isPressed: b } = (0, s.r7)({
            onPressStart: c,
            onPressEnd: d,
            onPressChange: _,
            onPress: u,
            onPressUp: f,
            isDisabled: l,
            preventFocusOnPress: h,
            ref: n
        }),
        { focusableProps: y } = (0, a.kc)(e, n);
    p && (y.tabIndex = l ? -1 : y.tabIndex);
    let S = (0, i.dG)(y, T, (0, i.zL)(e, { labelable: !0 }));
    return {
        isPressed: b,
        buttonProps: (0, i.dG)(r, S, {
            'aria-haspopup': e['aria-haspopup'],
            'aria-expanded': e['aria-expanded'],
            'aria-controls': e['aria-controls'],
            'aria-pressed': e['aria-pressed'],
            onClick: (e) => {
                m && (m(e), console.warn('onClick is deprecated, please use onPress'));
            }
        })
    };
}
function l(e, n, r) {
    let { isSelected: a } = n,
        { isPressed: s, buttonProps: l } = o(
            {
                ...e,
                onPress: (0, i.tS)(n.toggle, e.onPress)
            },
            r
        );
    return {
        isPressed: s,
        buttonProps: (0, i.dG)(l, { 'aria-pressed': a })
    };
}
