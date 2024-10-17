t.d(n, {
    Z: function () {
        return a;
    }
});
var o = t(470079),
    i = t(442837),
    s = t(726542),
    l = t(122021),
    c = t(621853);
let r = [];
function a(e) {
    let n = (0, l.Xj)({ forUserProfile: !0 }),
        t = (0, i.e7)([c.Z], () => c.Z.getUserProfile(e));
    return (0, o.useMemo)(
        () =>
            (null == t ? void 0 : t.connectedAccounts) == null
                ? r
                : t.connectedAccounts.filter((e) => {
                      let { type: t } = e,
                          o = s.Z.get(t);
                      return null != o && n(o);
                  }),
        [null == t ? void 0 : t.connectedAccounts, n]
    );
}
