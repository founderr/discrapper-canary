n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var r = n(192379),
    i = n(40851),
    a = n(590921);
function s(e) {
    let { editorHeight: t, type: n, state: s, isInPopoutExperiment: o = !1 } = e,
        [l, u] = r.useState(void 0),
        c = null == s ? void 0 : s.query,
        d = null == s ? void 0 : s.isVisible,
        { renderWindow: f } = r.useContext(i.ZP),
        _ = r.useCallback(() => {
            var e, t, r, i;
            if (null != s && (null == c || !d)) {
                u(void 0);
                return;
            }
            if ((null == c ? void 0 : c.type) === a.eq.GIFS || (null != n && !o && !(null === (e = n.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer))) {
                u(null);
                return;
            }
            let l = f.document.getSelection(),
                _ = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null;
            if (null == _) return;
            let p = _.startContainer,
                h = _.startOffset;
            for (; null != p; ) {
                if (p.nodeType !== Node.TEXT_NODE || null == p.nodeValue) {
                    u(null);
                    return;
                }
                if ((null === (t = p.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
                    h = null !== (i = null == (p = p.previousSibling) ? void 0 : null === (r = p.nodeValue) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0;
                    continue;
                }
                null != c && (h >= c.queryText.length ? (h -= c.queryText.length) : (h = 0));
                break;
            }
            if (null == p) return;
            let m = f.document.createRange();
            m.setStart(p, h), m.setEnd(p, h);
            let g = m.getBoundingClientRect();
            if ((null == g ? void 0 : g.height) !== 0) u(null != g ? g : null);
        }, [o, f.document, s, d, c, n]);
    return (
        r.useEffect(() => (f.document.addEventListener('selectionchange', _), () => f.document.removeEventListener('selectionchange', _)), [f.document, _]),
        r.useEffect(() => {
            _();
        }, [_, t]),
        l
    );
}
