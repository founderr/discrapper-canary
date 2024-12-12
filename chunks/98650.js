r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(192379),
    a = r(237617);
function s(e) {
    let n = (0, a.Z)(e);
    (0, i.useEffect)(() => {
        function e() {
            var i;
            null === (i = n.current) || void 0 === i || i.call(n), (r = requestAnimationFrame(e));
        }
        let r = requestAnimationFrame(e);
        return () => cancelAnimationFrame(r);
    }, []);
}
