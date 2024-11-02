r.d(t, {
    L2: function () {
        return E;
    },
    _6: function () {
        return c;
    },
    iK: function () {
        return s;
    }
});
var n = r(694043),
    a = r(622916),
    _ = r(665909),
    o = r(395848);
let i = {};
function E(e) {
    let t = i[e];
    if (t) return t;
    let r = o.m[e];
    if ((0, n.QC)(r)) return (i[e] = r.bind(o.m));
    let E = o.m.document;
    if (E && 'function' == typeof E.createElement)
        try {
            let t = E.createElement('iframe');
            (t.hidden = !0), E.head.appendChild(t);
            let n = t.contentWindow;
            n && n[e] && (r = n[e]), E.head.removeChild(t);
        } catch (t) {
            _.X && a.kg.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t);
        }
    return r ? (i[e] = r.bind(o.m)) : r;
}
function c(e) {
    i[e] = void 0;
}
function s(...e) {
    return E('setTimeout')(...e);
}
