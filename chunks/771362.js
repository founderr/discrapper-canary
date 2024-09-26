s.d(n, {
    Z: function () {
        return a;
    }
});
var t = s(470079),
    i = s(442837),
    l = s(726542),
    o = s(122021),
    r = s(621853);
let c = [];
function a(e) {
    let n = (0, o.Xj)({ forUserProfile: !0 }),
        s = (0, i.e7)([r.Z], () => r.Z.getUserProfile(e));
    return (0, t.useMemo)(
        () =>
            (null == s ? void 0 : s.connectedAccounts) == null
                ? c
                : s.connectedAccounts.filter((e) => {
                      let { type: s } = e,
                          t = l.Z.get(s);
                      return null != t && n(t);
                  }),
        [null == s ? void 0 : s.connectedAccounts, n]
    );
}
