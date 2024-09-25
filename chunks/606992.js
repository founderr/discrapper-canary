n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(40851),
    o = n(590921);
function s(e) {
    let { editorHeight: t, type: n, state: r, isInPopoutExperiment: s = !1 } = e,
        [l, u] = i.useState(void 0),
        c = null == r ? void 0 : r.query,
        d = null == r ? void 0 : r.isVisible,
        { renderWindow: _ } = i.useContext(a.ZP),
        E = i.useCallback(() => {
            var e, t, i, a;
            if (null != r && (null == c || !d)) {
                u(void 0);
                return;
            }
            if ((null == c ? void 0 : c.type) === o.eq.GIFS || (null != n && !s && !(null === (e = n.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer))) {
                u(null);
                return;
            }
            let l = _.document.getSelection(),
                E = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null;
            if (null == E) return;
            let f = E.startContainer,
                h = E.startOffset;
            for (; null != f; ) {
                if (f.nodeType !== Node.TEXT_NODE || null == f.nodeValue) {
                    u(null);
                    return;
                }
                if ((null === (t = f.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
                    h = null !== (a = null == (f = f.previousSibling) ? void 0 : null === (i = f.nodeValue) || void 0 === i ? void 0 : i.length) && void 0 !== a ? a : 0;
                    continue;
                }
                null != c && (h >= c.queryText.length ? (h -= c.queryText.length) : (h = 0));
                break;
            }
            if (null == f) return;
            let p = _.document.createRange();
            p.setStart(f, h), p.setEnd(f, h);
            let m = p.getBoundingClientRect();
            if ((null == m ? void 0 : m.height) !== 0) u(null != m ? m : null);
        }, [s, _.document, r, d, c, n]);
    return (
        i.useEffect(() => (_.document.addEventListener('selectionchange', E), () => _.document.removeEventListener('selectionchange', E)), [_.document, E]),
        i.useEffect(() => {
            E();
        }, [E, t]),
        l
    );
}
