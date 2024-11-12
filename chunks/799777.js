let r;
var i,
    a,
    s,
    o,
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(433517),
    f = n(570140),
    _ = n(981631);
let p = 'GameLibraryViewStore',
    h = _.sHY.ASCENDING,
    m = _.iEv.LAST_PLAYED,
    g = !1,
    E = u().debounce(() => {
        (g = !1), I.emitChange();
    }, 200);
class v extends (o = c.ZP.Store) {
    initialize() {
        var e;
        let t = null !== (e = d.K.get(p)) && void 0 !== e ? e : {};
        null != t.sortDirection && null != t.sortKey && ((h = t.sortDirection), (m = t.sortKey));
    }
    get sortDirection() {
        return h;
    }
    get sortKey() {
        return m;
    }
    get activeRowKey() {
        return r;
    }
    get isNavigatingByKeyboard() {
        return g;
    }
}
(s = 'GameLibraryViewStore'),
    (a = 'displayName') in (i = v)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
let I = new v(f.Z, {
    LIBRARY_TABLE_SORT_UPDATE: function (e) {
        let { direction: t, key: n } = e;
        (h = t),
            (m = n),
            d.K.set(p, {
                sortDirection: h,
                sortKey: m
            });
    },
    LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function (e) {
        let { key: t, isKeyboardEvent: n } = e;
        n && ((g = !0), E()), (r = t);
    }
});
t.Z = I;
