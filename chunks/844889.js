n.d(t, {
    Gg: function () {
        return _;
    },
    Hg: function () {
        return h;
    },
    fr: function () {
        return d;
    }
});
var r = n(772848),
    i = n(433517);
let a = 30,
    o = 'LATEST_SESSION_TIMESTAMP',
    s = 'LATEST_SESSION_UUID',
    l = 'LATEST_SESSION_INITIALIZED_TIMESTAMP',
    u = Promise.resolve(),
    c = !1;
function d(e) {
    c = e;
}
function _() {
    return (u = u.then(async () => {
        let e = await E();
        if (null == e || f(e)) {
            if (!c) return null;
            let t = {
                uuid: (0, r.Z)(),
                initialized: Date.now(),
                lastUsed: Date.now()
            };
            i.K.set(s, t.uuid), i.K.set(l, t.initialized.toString()), i.K.set(o, Date.now().toString()), (e = t);
        } else c && i.K.set(o, Date.now().toString());
        return e;
    }));
}
async function E() {
    let e = await i.K.getAfterRefresh(s),
        t = await i.K.getAfterRefresh(l).then(h),
        n = await i.K.getAfterRefresh(o).then(h);
    return null != e && null != t
        ? {
              uuid: e,
              initialized: t,
              lastUsed: n
          }
        : null;
}
function f(e) {
    return 60000 * a + e.lastUsed - Date.now() <= 0;
}
function h(e) {
    return null != e ? Number(e) : 0;
}
