n.d(t, {
    k: function () {
        return i;
    },
    r: function () {
        return r;
    }
});
let r = (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document;
    },
    i = (e) => (e && 'window' in e && e.window === e ? e : r(e).defaultView || window);
