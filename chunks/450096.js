n.d(t, {
    L: function () {
        return E;
    }
});
var r = n(315314);
var i = n(610138);
var a = n(216116);
var o = n(78328);
var s = n(815648);
var l = n(47120);
var u = n(470079),
    c = n(772848);
let d = new Worker(new URL('/assets/' + n.u('77459'), n.b));
function _(e) {
    return new Promise((t) => {
        let n = (0, c.Z)(),
            r = (e) => {
                let {
                    data: { id: i, png: a }
                } = e;
                n === i && (t(a), d.removeEventListener('message', r));
            };
        d.addEventListener('message', r),
            d.postMessage({
                id: n,
                placeholderData: e
            });
    });
}
function E(e, t, n) {
    let r = n && 1 === t && null != e,
        [i, a] = u.useState(void 0);
    return (
        u.useEffect(() => {
            let t = !1;
            return (
                r &&
                    _(e).then((e) => {
                        if (!t) a(e);
                    }),
                () => {
                    t = !0;
                }
            );
        }, [e, r]),
        i
    );
}
