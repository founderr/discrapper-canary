r.d(t, {
    u: function () {
        return n;
    }
});
var a = r(395848);
let n = (e) => {
    let t = (t) => {
        ('pagehide' === t.type || (a.m.document && 'hidden' === a.m.document.visibilityState)) && e(t);
    };
    a.m.document && (addEventListener('visibilitychange', t, !0), addEventListener('pagehide', t, !0));
};
