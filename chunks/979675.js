r.d(n, {
    $: function () {
        return i;
    }
});
let i = (e, n) =>
    function (r, i, a) {
        return new Promise((s) => {
            var o;
            e.dispatch({
                type: n,
                event: r,
                properties: i,
                flush: null !== (o = null == a ? void 0 : a.flush) && void 0 !== o && o,
                fingerprint: null == a ? void 0 : a.fingerprint,
                resolve: s
            });
        });
    };
