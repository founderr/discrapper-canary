r.d(n, {
    V: function () {
        return s;
    }
});
var i = r(200651),
    a = r(192379);
let s = a.forwardRef(function (e, n) {
    let { className: r, children: s } = e,
        o = a.useRef(null),
        l = a.useRef(null);
    return (
        a.useImperativeHandle(
            n,
            () => ({
                focus: () => {
                    var e;
                    let n = o.current;
                    null != n && (null == l.current && (l.current = n.querySelector('[tabindex="0"]')), null === (e = l.current) || void 0 === e || e.focus());
                },
                blur: () => {
                    var e;
                    return null === (e = l.current) || void 0 === e ? void 0 : e.blur();
                },
                activate: () => !1
            }),
            []
        ),
        a.useLayoutEffect(() => {
            let e = o.current;
            if (null != e)
                return (
                    e.addEventListener('focusin', n),
                    () => {
                        e.removeEventListener('focusin', n);
                    }
                );
            function n(e) {
                l.current = e.target;
            }
        }, []),
        (0, i.jsx)('div', {
            ref: o,
            className: r,
            style: { position: 'relative' },
            children: s
        })
    );
});
