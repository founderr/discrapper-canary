n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(470079),
    i = n(237617);
function a(e) {
    let t = (0, i.Z)(e);
    (0, r.useEffect)(() => {
        function e() {
            var r;
            null === (r = t.current) || void 0 === r || r.call(t), (n = requestAnimationFrame(e));
        }
        let n = requestAnimationFrame(e);
        return () => cancelAnimationFrame(n);
    }, []);
}
