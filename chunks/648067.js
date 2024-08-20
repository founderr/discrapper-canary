t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(470079),
    s = t(442837),
    o = t(726542),
    l = t(122021),
    r = t(621853);
let a = [];
function c(e) {
    let n = (0, l.Xj)({ forUserProfile: !0 }),
        t = (0, s.e7)([r.Z], () => r.Z.getUserProfile(e));
    return (0, i.useMemo)(
        () =>
            (null == t ? void 0 : t.connectedAccounts) == null
                ? a
                : t.connectedAccounts.filter((e) => {
                      let { type: t } = e,
                          i = o.Z.get(t);
                      return null != i && n(i);
                  }),
        [null == t ? void 0 : t.connectedAccounts, n]
    );
}
