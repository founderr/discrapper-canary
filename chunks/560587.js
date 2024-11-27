var l,
    r,
    i,
    s,
    a = n(442837),
    o = n(570140);
let d = {};
class c extends (s = a.ZP.Store) {
    getBranches(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t ? t : [];
    }
}
(i = 'ApplicationBranchStore'),
    (r = 'displayName') in (l = c)
        ? Object.defineProperty(l, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = i),
    (t.Z = new c(o.Z, {
        OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
            let { applicationId: t, branches: n } = e;
            d[t] = n;
        },
        LOGOUT: function () {
            d = {};
        }
    }));
