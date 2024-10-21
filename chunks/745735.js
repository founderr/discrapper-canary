t.d(n, {
    Z: function () {
        return o;
    }
});
var r = t(192379),
    i = t(512722),
    l = t.n(i);
function o(e, n) {
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    }, [e]),
        (0, r.useEffect)(() => {
            if (null === n) return;
            let e = setInterval(function () {
                l()(null != t.current, 'Missing callback'), t.current();
            }, n);
            return () => clearInterval(e);
        }, [n]);
}
