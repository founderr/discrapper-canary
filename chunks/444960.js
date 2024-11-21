n.d(t, {
    y: function () {
        return a;
    }
});
var r = n(317559),
    i = n(192379);
function a(e, t, n) {
    let a = (0, i.useRef)(t),
        s = (0, r.i)(() => {
            n && n(a.current);
        });
    (0, i.useEffect)(() => {
        var t;
        let n = null == e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.form;
        return (
            null == n || n.addEventListener('reset', s),
            () => {
                null == n || n.removeEventListener('reset', s);
            }
        );
    }, [e, s]);
}
