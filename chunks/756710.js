n.d(t, {
    o: function () {
        return d;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(743236),
    u = n(939350),
    c = n(667947);
function d(e) {
    let { children: t, color: n = 'default', isFocused: a = !1, disabled: d = !1, keepItemStyles: f = !1, menuItemProps: _, action: p, dontCloseOnActionIfHoldingShiftKey: h, dontCloseOnAction: m, onClose: g } = e,
        E = i.useRef(null);
    i.useEffect(() => {
        a && (0, l.F)(E);
    }, [a]);
    let v = i.useCallback(
            (e) => {
                if (null == p) return !1;
                !(e.shiftKey && h) && !m && g(), e.persist(), requestAnimationFrame(() => p(e));
            },
            [p, g, h, m]
        ),
        I = f ? s()(c.item, u._[n], { [c.focused]: a }) : c.customItem;
    return (0, r.jsx)(o.P, {
        innerRef: E,
        className: I,
        onClick: d ? void 0 : v,
        'aria-disabled': d,
        ..._,
        children: t({
            color: n,
            disabled: d,
            isFocused: a
        })
    });
}
