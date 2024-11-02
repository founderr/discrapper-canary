n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    l = n(192379),
    s = n(442837),
    r = n(461745),
    o = n(663389),
    a = n(5967),
    c = n(996733),
    u = n(388032);
function d(e) {
    let { style: t } = e,
        n = (0, c.Z7)(),
        d = l.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
        }, []),
        h = l.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)('');
        }, []),
        m = l.useRef(null),
        p = (0, s.e7)([o.Z], () => o.Z.getSection());
    return (
        l.useEffect(() => {
            let e = (e) => {
                var t;
                let n = m.current;
                (null === (t = (0, a.uB)(e)) || void 0 === t ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [p]),
        (0, i.jsx)('div', {
            style: { marginBottom: '8px' },
            children: (0, i.jsx)(r.ZP, {
                ref: m,
                size: r.ZP.Sizes.MEDIUM,
                query: n,
                onClear: h,
                onQueryChange: c.yN,
                placeholder: u.intl.string(u.t['5h0QOD']),
                className: t,
                inputProps: {
                    'aria-label': u.intl.string(u.t.pk9BWV),
                    'aria-expanded': !0,
                    onFocus: (e) => d(!0, e),
                    onBlur: (e) => d(!1, e)
                }
            })
        })
    );
}
