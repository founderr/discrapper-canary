r.d(n, {
    L: function () {
        return h;
    }
});
var i = r(315314);
var a = r(610138);
var s = r(216116);
var o = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(192379),
    d = r(772848);
let f = new Worker(new URL('/assets/' + r.u('77459'), r.b));
function _(e) {
    return new Promise((n) => {
        let r = (0, d.Z)(),
            i = (e) => {
                let {
                    data: { id: a, png: s }
                } = e;
                r === a && (n(s), f.removeEventListener('message', i));
            };
        f.addEventListener('message', i),
            f.postMessage({
                id: r,
                placeholderData: e
            });
    });
}
function h(e, n, r) {
    let i = r && 1 === n && null != e,
        [a, s] = c.useState(void 0);
    return (
        c.useEffect(() => {
            let n = !1;
            return (
                i &&
                    _(e).then((e) => {
                        if (!n) s(e);
                    }),
                () => {
                    n = !0;
                }
            );
        }, [e, i]),
        a
    );
}
