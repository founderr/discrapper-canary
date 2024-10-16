r.d(t, {
    Ak: function () {
        return o;
    },
    QC: function () {
        return E;
    },
    t$: function () {
        return i;
    },
    zb: function () {
        return c;
    }
});
var n = r(309544),
    a = r(622916);
let _ = r(899517).n;
function o() {
    if (!('fetch' in _)) return !1;
    try {
        return new Headers(), new Request('http://www.example.com'), new Response(), !0;
    } catch (e) {
        return !1;
    }
}
function E(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function i() {
    if ('string' == typeof EdgeRuntime) return !0;
    if (!o()) return !1;
    if (E(_.fetch)) return !0;
    let e = !1,
        t = _.document;
    if (t && 'function' == typeof t.createElement)
        try {
            let r = t.createElement('iframe');
            (r.hidden = !0), t.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (e = E(r.contentWindow.fetch)), t.head.removeChild(r);
        } catch (e) {
            n.X && a.kg.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', e);
        }
    return e;
}
function c() {
    return 'ReportingObserver' in _;
}
