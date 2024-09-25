n.d(t, {
    e: function () {
        return a;
    },
    s: function () {
        return u;
    }
});
var r = n(47120);
var i = n(823379);
function a(e, t) {
    let n = e.find((e) => e.processId === t);
    return null == n ? null : u(e, n);
}
let o = '356869127241072640',
    s = 'league of legends.exe';
function l(e, t) {
    let n = t.processPath.length > 1 ? t.processPath[t.processPath.length - 2] : 0,
        r = e.filter((e) => e.applicationId === o && e.processPath.includes(n)),
        i = r.find((e) => e.executableName === s);
    return void 0 !== i ? i : r.length > 0 ? r[0] : null;
}
function u(e, t) {
    var n;
    if (null == t) return null;
    if (t.applicationId === o) return l(e, t);
    let r = new Map(e.map((e) => [e.processId, e])),
        a = t.processPath.map((e) => r.get(e)).find((e) => null != e);
    if (null == a) return null;
    let s = e
        .map((e) => {
            let t = e.processPath.findIndex((e) => r.has(e));
            return -1 === t
                ? null
                : {
                      application: e,
                      rootedPath: e.processPath.slice(t)
                  };
        })
        .filter(i.lm)
        .filter((e) => e.rootedPath[0] === a.processId);
    s.sort((e, t) => {
        let n = e.rootedPath.map((e) => r.get(e)).filter((e) => null != e && null != e.windowHandle),
            i = c(
                t.rootedPath.map((e) => r.get(e)).filter((e) => null != e && null != e.windowHandle),
                n
            );
        return 0 !== i ? i : c(t.rootedPath, e.rootedPath);
    });
    let u = null !== (n = s.find((e) => null != e.application.windowHandle)) && void 0 !== n ? n : s[0];
    return null == u ? null : u.application;
}
function c(e, t) {
    return e.length - t.length;
}
