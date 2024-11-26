r.d(t, {
    EZ: function () {
        return E;
    },
    Gf: function () {
        return o;
    }
});
let a = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function n(...e) {
    let t = '',
        r = !1;
    for (let a = e.length - 1; a >= -1 && !r; a--) {
        let n = a >= 0 ? e[a] : '/';
        if (!!n) (t = `${n}/${t}`), (r = '/' === n.charAt(0));
    }
    return (
        (t = (function (e, t) {
            let r = 0;
            for (let t = e.length - 1; t >= 0; t--) {
                let a = e[t];
                '.' === a ? e.splice(t, 1) : '..' === a ? (e.splice(t, 1), r++) : r && (e.splice(t, 1), r--);
            }
            if (t) for (; r--; r) e.unshift('..');
            return e;
        })(
            t.split('/').filter((e) => !!e),
            !r
        ).join('/')),
        (r ? '/' : '') + t || '.'
    );
}
function _(e) {
    let t = 0;
    for (; t < e.length && '' === e[t]; t++);
    let r = e.length - 1;
    for (; r >= 0 && '' === e[r]; r--);
    return t > r ? [] : e.slice(t, r - t + 1);
}
function o(e, t) {
    (e = n(e).slice(1)), (t = n(t).slice(1));
    let r = _(e.split('/')),
        a = _(t.split('/')),
        o = Math.min(r.length, a.length),
        E = o;
    for (let e = 0; e < o; e++)
        if (r[e] !== a[e]) {
            E = e;
            break;
        }
    let i = [];
    for (let e = E; e < r.length; e++) i.push('..');
    return (i = i.concat(a.slice(E))).join('/');
}
function E(e, t) {
    let r =
        (function (e) {
            let t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
                r = a.exec(t);
            return r ? r.slice(1) : [];
        })(e)[2] || '';
    return t && r.slice(-1 * t.length) === t && (r = r.slice(0, r.length - t.length)), r;
}
