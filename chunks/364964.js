n.r(t);
var r = n(47120);
var i = n(920478),
    a = n(392711),
    o = n.n(a),
    s = n(462176);
i.Z.registerLanguage('ansi', s.Z),
    (t.default = {
        highlight(e, t, n) {
            if (!u(t)) return null;
            let r = Date.now(),
                a = i.Z.highlight(e, t, n);
            return Date.now(), a;
        },
        hasLanguage: (e) => null != i.Z.getLanguage(e)
    });
let l = o().repeat('/', 15);
function u(e) {
    if (e.indexOf(l) >= 0) return !1;
    let t = 0;
    for (let n of e.split('\n')) {
        if (n.length > 1000) return !1;
        null == n.match(/^\s*[/][/]/) && null != n.match(/[^/]/) && (t = 0);
        let e = n.match(/[/]/g);
        if (null != e && ((t += e.length), t > 30)) return !1;
    }
    return !0;
}
