e.d(n, {
    Z: function () {
        return o;
    }
});
var i = e(192379),
    r = e(512722),
    l = e.n(r);
function o(t, n) {
    let e = (0, i.useRef)(t);
    (0, i.useEffect)(() => {
        e.current = t;
    }, [t]),
        (0, i.useEffect)(() => {
            if (null === n) return;
            let t = setInterval(function () {
                l()(null != e.current, 'Missing callback'), e.current();
            }, n);
            return () => clearInterval(t);
        }, [n]);
}
