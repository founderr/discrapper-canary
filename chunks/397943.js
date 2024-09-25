n.d(t, {
    M: function () {
        return u;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(921349),
    s = n(563040),
    l = n(92777);
function u(e) {
    let { value: t, onChange: n, hideValue: r, disabled: u = !1 } = e,
        c = a.useRef(null),
        d = a.useMemo(() => new s.tR(), []),
        [_, E] = a.useState('');
    function f(e) {
        null != t && n((0, s.rK)(t, d.selectValue(e)));
    }
    function h(e) {
        if ('Enter' === e.key) {
            let e = (0, s.tj)(t, _);
            if (null != e) {
                var n;
                f(e), null === (n = c.current) || void 0 === n || n.close();
            }
        }
    }
    return (0, i.jsx)(o.V, {
        ref: c,
        className: l.select,
        options: d.getOptions(_),
        value: r ? void 0 : d.lookupByValue(t),
        onChange: f,
        isDisabled: u,
        onSearchChange: E,
        onKeyDown: h
    });
}
