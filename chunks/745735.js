t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(470079),
    r = t(512722),
    l = t.n(r);
function o(e, n) {
    let t = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        t.current = e;
    }, [e]),
        (0, i.useEffect)(() => {
            if (null === n) return;
            let e = setInterval(function () {
                l()(null != t.current, 'Missing callback'), t.current();
            }, n);
            return () => clearInterval(e);
        }, [n]);
}
