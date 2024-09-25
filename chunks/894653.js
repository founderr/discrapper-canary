var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = [],
    l = null;
function u(e) {
    let { categories: t } = e;
    (s = t), (l = Date.now());
}
class c extends (r = i.ZP.Store) {
    getLastFetchTimeMs() {
        return l;
    }
    getCategories() {
        return s;
    }
}
o(c, 'displayName', 'ApplicationDirectoryCategoriesStore'), (t.Z = new c(a.Z, { APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: u }));
