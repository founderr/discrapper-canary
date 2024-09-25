n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(735250),
    i = n(470079);
function a(e) {
    return {
        position: 'vertical' === e ? 'absolute' : 'relative',
        pointerEvents: 'none',
        minHeight: 'vertical' === e ? 0 : 1,
        minWidth: 'horizontal' === e ? 0 : 1,
        flex: '0 0 auto'
    };
}
function o(e) {
    let { paddingFix: t = !0, orientation: n = 'vertical', dir: o, className: s, scrollerRef: l, specs: u } = e,
        c = (0, i.useRef)(null);
    return (
        (0, i.useLayoutEffect)(() => {
            var e;
            let { current: r } = l;
            if (null == r || 'auto' === n || !t) return;
            let i = null === (e = r.ownerDocument) || void 0 === e ? void 0 : e.defaultView;
            if (null == i) return;
            (r.style.paddingTop = ''), (r.style.paddingBottom = ''), (r.style.paddingLeft = ''), (r.style.paddingRight = '');
            let a = i.getComputedStyle(r);
            if ('vertical' === n) {
                if ('rtl' === o) {
                    let e = parseInt(a.getPropertyValue('padding-left'), 10);
                    (r.style.paddingLeft = ''.concat(Math.max(0, e - u.width), 'px')), (r.style.paddingRight = '');
                } else {
                    let e = parseInt(a.getPropertyValue('padding-right'), 10);
                    (r.style.paddingRight = ''.concat(Math.max(0, e - u.width), 'px')), (r.style.paddingLeft = '');
                }
                let { current: e } = c;
                null != e && (e.style.height = a.getPropertyValue('padding-bottom'));
            } else {
                let e = parseInt(a.getPropertyValue('padding-bottom'), 10);
                r.style.paddingBottom = ''.concat(Math.max(0, e - u.height), 'px');
                let { current: t } = c;
                null != t && (t.style.width = a.getPropertyValue('padding-left'));
            }
        }, [n, o, s, l, t, u]),
        (0, i.useMemo)(
            () =>
                'auto' !== n
                    ? (0, r.jsx)('div', {
                          'aria-hidden': !0,
                          style: a(n),
                          ref: c
                      })
                    : null,
            [n]
        )
    );
}
