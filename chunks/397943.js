n.d(t, {
    M: function () {
        return l;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(921349),
    s = n(563040),
    o = n(960192);
function l(e) {
    let { value: t, onChange: n, hideValue: l, disabled: u = !1 } = e,
        c = i.useRef(null),
        d = i.useMemo(() => new s.tR(), []),
        [f, _] = i.useState('');
    function p(e) {
        null != t && n((0, s.rK)(t, d.selectValue(e)));
    }
    return (0, r.jsx)(a.V, {
        ref: c,
        className: o.select,
        options: d.getOptions(f),
        value: l ? void 0 : d.lookupByValue(t),
        onChange: p,
        isDisabled: u,
        onSearchChange: _,
        onKeyDown: function (e) {
            if ('Enter' === e.key) {
                let e = (0, s.tj)(t, f);
                if (null != e) {
                    var n;
                    p(e), null === (n = c.current) || void 0 === n || n.close();
                }
            }
        }
    });
}
