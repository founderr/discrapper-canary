r.d(t, {
    H: function () {
        return o;
    }
}),
    r(315314),
    r(610138),
    r(216116),
    r(78328),
    r(815648),
    r(47120);
var a = r(392711),
    n = r(823379);
let i = new Worker(new URL('/assets/' + r.u('56558'), r.b));
function o(e, t, r) {
    let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = (0, a.uniqueId)();
    return new Promise((a) => {
        let c = (t) => {
            let {
                data: { id: r, foundItemIndexes: o }
            } = t;
            l === r && a(o.map((t) => e[t]).filter(n.lm)), null == i || i.removeEventListener('message', c);
        };
        null == i || i.addEventListener('message', c);
        let s = {
            id: l,
            searchTerm: r,
            searchStrings: e.map(t),
            useRegex: o
        };
        null == i || i.postMessage(s);
    });
}
