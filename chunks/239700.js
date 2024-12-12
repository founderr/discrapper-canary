r.d(n, {
    N4: function () {
        return o;
    },
    uZ: function () {
        return s;
    },
    zk: function () {
        return a;
    }
});
var i = r(192379);
function a(e, n, r) {
    let [a, s] = (0, i.useState)(e || n),
        o = (0, i.useRef)(void 0 !== e),
        l = void 0 !== e;
    (0, i.useEffect)(() => {
        let e = o.current;
        e !== l && console.warn(`WARN: A component changed from ${e ? 'controlled' : 'uncontrolled'} to ${l ? 'controlled' : 'uncontrolled'}.`), (o.current = l);
    }, [l]);
    let u = l ? e : a,
        c = (0, i.useCallback)(
            (e, ...n) => {
                let i = (e, ...n) => {
                    r && !Object.is(u, e) && r(e, ...n), !l && (u = e);
                };
                'function' == typeof e
                    ? (console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320'),
                      s((r, ...a) => {
                          let s = e(l ? u : r, ...a);
                          return (i(s, ...n), l) ? r : s;
                      }))
                    : (!l && s(e), i(e, ...n));
            },
            [l, u, r]
        );
    return [u, c];
}
function s(e, n = -1 / 0, r = 1 / 0) {
    return Math.min(Math.max(e, n), r);
}
function o(e, n, r, i) {
    (n = Number(n)), (r = Number(r));
    let a = (e - (isNaN(n) ? 0 : n)) % i,
        s = 2 * Math.abs(a) >= i ? e + Math.sign(a) * (i - Math.abs(a)) : e - a;
    isNaN(n) ? !isNaN(r) && s > r && (s = Math.floor(r / i) * i) : s < n ? (s = n) : !isNaN(r) && s > r && (s = n + Math.floor((r - n) / i) * i);
    let o = i.toString(),
        l = o.indexOf('.'),
        u = l >= 0 ? o.length - l : 0;
    if (u > 0) {
        let e = Math.pow(10, u);
        s = Math.round(s * e) / e;
    }
    return s;
}
