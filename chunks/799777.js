let i;
var a,
    s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(433517),
    c = r(570140),
    d = r(981631);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = 'GameLibraryViewStore',
    h = 200,
    p = d.sHY.ASCENDING,
    m = d.iEv.LAST_PLAYED,
    g = !1,
    E = o().debounce(() => {
        (g = !1), b.emitChange();
    }, h);
function v(e) {
    let { key: n, isKeyboardEvent: r } = e;
    r && ((g = !0), E()), (i = n);
}
function I(e) {
    let { direction: n, key: r } = e;
    (p = n),
        (m = r),
        u.K.set(_, {
            sortDirection: p,
            sortKey: m
        });
}
class T extends (a = l.ZP.Store) {
    initialize() {
        var e;
        let n = null !== (e = u.K.get(_)) && void 0 !== e ? e : {};
        null != n.sortDirection && null != n.sortKey && ((p = n.sortDirection), (m = n.sortKey));
    }
    get sortDirection() {
        return p;
    }
    get sortKey() {
        return m;
    }
    get activeRowKey() {
        return i;
    }
    get isNavigatingByKeyboard() {
        return g;
    }
}
f(T, 'displayName', 'GameLibraryViewStore');
let b = new T(c.Z, {
    LIBRARY_TABLE_SORT_UPDATE: I,
    LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: v
});
n.Z = b;
