r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(192379),
    a = r(270445),
    s = r(887490);
function o(e, n, r) {
    i.useEffect(() => {
        let i = a.F3.findDocumentOrShadowRoot(e).defaultView;
        if ((null == i ? void 0 : i.ResizeObserver) == null) return;
        let o = s.bN.toDOMNode(e, e),
            l = o.offsetHeight;
        null == r || r(l);
        let u = new i.ResizeObserver(() => {
            let i = s.bN.toDOMNode(e, e).offsetHeight;
            l !== i && (null != n.current && (n.current.style.height = ''.concat(i, 'px')), (l = i), null == r || r(i));
        });
        return u.observe(o), () => u.disconnect();
    }, [n, e, r]);
}
