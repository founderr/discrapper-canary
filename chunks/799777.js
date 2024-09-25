let r;
var i,
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(433517),
    u = n(570140),
    c = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = 'GameLibraryViewStore',
    E = 200,
    f = c.sHY.ASCENDING,
    h = c.iEv.LAST_PLAYED,
    p = !1,
    m = o().debounce(() => {
        (p = !1), S.emitChange();
    }, E);
function I(e) {
    let { key: t, isKeyboardEvent: n } = e;
    n && ((p = !0), m()), (r = t);
}
function T(e) {
    let { direction: t, key: n } = e;
    (f = t),
        (h = n),
        l.K.set(_, {
            sortDirection: f,
            sortKey: h
        });
}
class g extends (i = s.ZP.Store) {
    initialize() {
        var e;
        let t = null !== (e = l.K.get(_)) && void 0 !== e ? e : {};
        null != t.sortDirection && null != t.sortKey && ((f = t.sortDirection), (h = t.sortKey));
    }
    get sortDirection() {
        return f;
    }
    get sortKey() {
        return h;
    }
    get activeRowKey() {
        return r;
    }
    get isNavigatingByKeyboard() {
        return p;
    }
}
d(g, 'displayName', 'GameLibraryViewStore');
let S = new g(u.Z, {
    LIBRARY_TABLE_SORT_UPDATE: T,
    LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: I
});
t.Z = S;
