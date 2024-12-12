r.d(n, {
    vg: function () {
        return p;
    },
    w7: function () {
        return h;
    }
});
var i = r(961742),
    a = r(295415),
    s = r(27273);
let o = /url\((['"]?)([^'"]+?)\1\)/g,
    l = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    u = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function c(e) {
    let n = e.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
    return RegExp(`(url\\(['"]?)(${n})(['"]?\\))`, 'g');
}
function d(e) {
    let n = [];
    return e.replace(o, (e, r, i) => (n.push(i), e)), n.filter((e) => !(0, s.pZ)(e));
}
async function f(e, n, r, o, l) {
    try {
        let u;
        let d = r ? (0, i.Kk)(n, r) : n,
            f = (0, a.b)(n);
        if (l) {
            let e = await l(d);
            u = (0, s.DT)(e, f);
        } else u = await (0, s.sx)(d, f, o);
        return e.replace(c(n), `$1${u}$3`);
    } catch (e) {}
    return e;
}
function _(e, { preferredFontFormat: n }) {
    return n
        ? e.replace(u, (e) => {
              for (;;) {
                  let [r, , i] = l.exec(e) || [];
                  if (!i) return '';
                  if (i === n) return `src: ${r};`;
              }
          })
        : e;
}
function h(e) {
    return -1 !== e.search(o);
}
async function p(e, n, r) {
    if (!h(e)) return e;
    let i = _(e, r);
    return d(i).reduce((e, i) => e.then((e) => f(e, i, n, r)), Promise.resolve(i));
}
