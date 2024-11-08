t.d(n, {
    Z: function () {
        return a;
    }
});
var i = t(192379),
    l = t(442837),
    o = t(726542),
    r = t(122021),
    s = t(621853);
let c = [];
function a(e) {
    let n = (0, r.Xj)({ forUserProfile: !0 }),
        t = (0, l.e7)([s.Z], () => s.Z.getUserProfile(e));
    return (0, i.useMemo)(
        () =>
            (null == t ? void 0 : t.connectedAccounts) == null
                ? c
                : t.connectedAccounts.filter((e) => {
                      let { type: t } = e,
                          i = o.Z.get(t);
                      return null != i && n(i);
                  }),
        [null == t ? void 0 : t.connectedAccounts, n]
    );
}
