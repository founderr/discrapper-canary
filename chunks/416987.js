r.d(t, {
    Y: function () {
        return E;
    }
});
var n = r(395848);
let a = -1,
    _ = () => {
        a = 'hidden' !== n.m.document.visibilityState || n.m.document.prerendering ? 1 / 0 : 0;
    },
    o = (e) => {
        'hidden' === n.m.document.visibilityState && a > -1 && ((a = 'visibilitychange' === e.type ? e.timeStamp : 0), removeEventListener('visibilitychange', o, !0), removeEventListener('prerenderingchange', o, !0));
    },
    i = () => {
        addEventListener('visibilitychange', o, !0), addEventListener('prerenderingchange', o, !0);
    },
    E = () => (
        n.m.document && a < 0 && (_(), i()),
        {
            get firstHiddenTime() {
                return a;
            }
        }
    );
