r.d(t, {
    Y: function () {
        return i;
    }
});
var a = r(395848);
let n = -1,
    _ = () => {
        n = 'hidden' !== a.m.document.visibilityState || a.m.document.prerendering ? 1 / 0 : 0;
    },
    o = (e) => {
        'hidden' === a.m.document.visibilityState && n > -1 && ((n = 'visibilitychange' === e.type ? e.timeStamp : 0), removeEventListener('visibilitychange', o, !0), removeEventListener('prerenderingchange', o, !0));
    },
    E = () => {
        addEventListener('visibilitychange', o, !0), addEventListener('prerenderingchange', o, !0);
    },
    i = () => (
        a.m.document && n < 0 && (_(), E()),
        {
            get firstHiddenTime() {
                return n;
            }
        }
    );
