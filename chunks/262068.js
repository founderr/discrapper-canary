n.d(t, {
    vg: function () {
        return d;
    },
    w7: function () {
        return c;
    }
});
var r = n(961742),
    i = n(295415),
    a = n(27273);
let s = /url\((['"]?)([^'"]+?)\1\)/g,
    o = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    l = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
async function u(e, t, n, s, o) {
    try {
        let l;
        let u = n ? (0, r.Kk)(t, n) : t,
            c = (0, i.b)(t);
        if (o) {
            let e = await o(u);
            l = (0, a.DT)(e, c);
        } else l = await (0, a.sx)(u, c, s);
        return e.replace(
            (function (e) {
                let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
                return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, 'g');
            })(t),
            `$1${l}$3`
        );
    } catch (e) {}
    return e;
}
function c(e) {
    return -1 !== e.search(s);
}
async function d(e, t, n) {
    if (!c(e)) return e;
    let r = (function (e, { preferredFontFormat: t }) {
        return t
            ? e.replace(l, (e) => {
                  for (;;) {
                      let [n, , r] = o.exec(e) || [];
                      if (!r) return '';
                      if (r === t) return `src: ${n};`;
                  }
              })
            : e;
    })(e, n);
    return (function (e) {
        let t = [];
        return e.replace(s, (e, n, r) => (t.push(r), e)), t.filter((e) => !(0, a.pZ)(e));
    })(r).reduce((e, r) => e.then((e) => u(e, r, t, n)), Promise.resolve(r));
}
