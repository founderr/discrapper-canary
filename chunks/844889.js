r.d(n, {
    Gg: function () {
        return _;
    },
    Hg: function () {
        return m;
    },
    fr: function () {
        return f;
    }
});
var i = r(772848),
    a = r(433517);
let s = 30,
    o = 'LATEST_SESSION_TIMESTAMP',
    l = 'LATEST_SESSION_UUID',
    u = 'LATEST_SESSION_INITIALIZED_TIMESTAMP',
    c = Promise.resolve(),
    d = !1;
function f(e) {
    d = e;
}
function _() {
    return (c = c.then(async () => {
        let e = await h();
        if (null == e || p(e)) {
            if (!d) return null;
            let n = {
                uuid: (0, i.Z)(),
                initialized: Date.now(),
                lastUsed: Date.now()
            };
            a.K.set(l, n.uuid), a.K.set(u, n.initialized.toString()), a.K.set(o, Date.now().toString()), (e = n);
        } else d && a.K.set(o, Date.now().toString());
        return e;
    }));
}
async function h() {
    let e = await a.K.getAfterRefresh(l),
        n = await a.K.getAfterRefresh(u).then(m),
        r = await a.K.getAfterRefresh(o).then(m);
    return null != e && null != n
        ? {
              uuid: e,
              initialized: n,
              lastUsed: r
          }
        : null;
}
function p(e) {
    return 60000 * s + e.lastUsed - Date.now() <= 0;
}
function m(e) {
    return null != e ? Number(e) : 0;
}
