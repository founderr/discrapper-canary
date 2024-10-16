r.d(t, {
    L2: function () {
        return i;
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
let E = {};
function i(e) {
    let t = E[e];
    if (t) return t;
    let r = o.m[e];
    if ((0, n.QC)(r)) return (E[e] = r.bind(o.m));
    let i = o.m.document;
    if (i && 'function' == typeof i.createElement)
        try {
            let t = i.createElement('iframe');
            (t.hidden = !0), i.head.appendChild(t);
            let n = t.contentWindow;
            n && n[e] && (r = n[e]), i.head.removeChild(t);
        } catch (t) {
            _.X && a.kg.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t);
        }
    return r ? (E[e] = r.bind(o.m)) : r;
}
function c(e) {
    E[e] = void 0;
}
function s(...e) {
    return i('setTimeout')(...e);
}
