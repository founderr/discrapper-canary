n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(470079),
    i = n(512722),
    a = n.n(i);
function o(e, t) {
    let n = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, r.useEffect)(() => {
            function e() {
                a()(null != n.current, 'Missing callback'), n.current();
            }
            if (null === t) return;
            let r = setInterval(e, t);
            return () => clearInterval(r);
        }, [t]);
}
