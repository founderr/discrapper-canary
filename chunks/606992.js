r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(40851),
    o = r(590921);
function l(e) {
    let { editorHeight: n, type: r, state: i, isInPopoutExperiment: l = !1 } = e,
        [u, c] = a.useState(void 0),
        d = null == i ? void 0 : i.query,
        f = null == i ? void 0 : i.isVisible,
        { renderWindow: _ } = a.useContext(s.ZP),
        h = a.useCallback(() => {
            var e, n, a, s;
            if (null != i && (null == d || !f)) {
                c(void 0);
                return;
            }
            if ((null == d ? void 0 : d.type) === o.eq.GIFS || (null != r && !l && !(null === (e = r.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer))) {
                c(null);
                return;
            }
            let u = _.document.getSelection(),
                h = null != u && u.rangeCount > 0 ? u.getRangeAt(0) : null;
            if (null == h) return;
            let p = h.startContainer,
                m = h.startOffset;
            for (; null != p; ) {
                if (p.nodeType !== Node.TEXT_NODE || null == p.nodeValue) {
                    c(null);
                    return;
                }
                if ((null === (n = p.nodeValue) || void 0 === n ? void 0 : n.length) === 0) {
                    m = null !== (s = null == (p = p.previousSibling) ? void 0 : null === (a = p.nodeValue) || void 0 === a ? void 0 : a.length) && void 0 !== s ? s : 0;
                    continue;
                }
                null != d && (m >= d.queryText.length ? (m -= d.queryText.length) : (m = 0));
                break;
            }
            if (null == p) return;
            let g = _.document.createRange();
            g.setStart(p, m), g.setEnd(p, m);
            let E = g.getBoundingClientRect();
            if ((null == E ? void 0 : E.height) !== 0) c(null != E ? E : null);
        }, [l, _.document, i, f, d, r]);
    return (
        a.useEffect(() => (_.document.addEventListener('selectionchange', h), () => _.document.removeEventListener('selectionchange', h)), [_.document, h]),
        a.useEffect(() => {
            h();
        }, [h, n]),
        u
    );
}
