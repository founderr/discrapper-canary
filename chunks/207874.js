n.d(t, {
    Z: function () {
        return d;
    }
});
var s = n(735250),
    i = n(470079),
    r = n(442837),
    l = n(461745),
    o = n(663389),
    a = n(5967),
    c = n(996733),
    u = n(689938);
function d(e) {
    let { style: t } = e,
        n = (0, c.Z7)(),
        d = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
        }, []),
        h = i.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)('');
        }, []),
        m = i.useRef(null),
        p = (0, r.e7)([o.Z], () => o.Z.getSection());
    return (
        i.useEffect(() => {
            let e = (e) => {
                var t;
                let n = m.current;
                (null === (t = (0, a.uB)(e)) || void 0 === t ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [p]),
        (0, s.jsx)('div', {
            style: { marginBottom: '8px' },
            children: (0, s.jsx)(l.ZP, {
                ref: m,
                size: l.ZP.Sizes.MEDIUM,
                query: n,
                onClear: h,
                onQueryChange: c.yN,
                placeholder: u.Z.Messages.SEARCH,
                className: t,
                inputProps: {
                    'aria-label': u.Z.Messages.USER_SETTINGS_SEARCH_BAR,
                    'aria-expanded': !0,
                    onFocus: (e) => d(!0, e),
                    onBlur: (e) => d(!1, e)
                }
            })
        })
    );
}
