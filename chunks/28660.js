n.d(t, {
    Z: function () {
        return l;
    }
});
var r,
    i = n(47120);
var a = n(470079),
    o = n(695346),
    s = n(768581);
function l(e) {
    let { displayProfile: t, size: n, canAnimate: r, pendingBanner: i } = e,
        l = o.QK.getSetting(),
        u = null == t ? void 0 : t.getPreviewBanner(i, r, n),
        [c, d] = (0, a.useState)((null == t ? void 0 : t.banner) == null ? 'COMPLETE' : 'SHOULD_LOAD');
    return (
        (0, a.useEffect)(() => {
            if (null == u || 'SHOULD_LOAD' !== c) return;
            d('LOADING');
            let e = new Image();
            (e.src = u), (e.onload = () => d('COMPLETE'));
        }, [u, c]),
        (0, a.useEffect)(() => {
            if (l) return;
            let e = null == t ? void 0 : t.getPreviewBanner(i, !0, n);
            if (null != e && !!(0, s.F8)(e)) new Image().src = e;
        }, [l, t, n, i]),
        {
            bannerSrc: u,
            status: c
        }
    );
}
!(function (e) {
    (e.SHOULD_LOAD = 'SHOULD_LOAD'), (e.LOADING = 'LOADING'), (e.COMPLETE = 'COMPLETE');
})(r || (r = {}));
