n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(392711);
var o = n(442837),
    s = n(881052),
    l = n(699682),
    u = n(81897),
    c = n(814443),
    d = n(621853),
    _ = n(484459);
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = (0, o.Wu)([d.Z], () => [d.Z.getMutualFriends(e), d.Z.isFetchingProfile(e)]),
        E = (0, u.Z)(),
        [f, h] = (0, i.useState)(null),
        p = t && null == f && !r && null == n;
    (0, i.useEffect)(() => {
        if (!!p)
            (async () => {
                try {
                    await (0, _.Z)(e, void 0, {
                        withMutualFriends: !0,
                        abortSignal: E
                    });
                } catch (e) {
                    h(new s.Hx(e));
                }
            })();
    }, [p, e, E]);
    let m = (0, o.e7)([c.Z], () => c.Z.getUserAffinitiesMap()),
        I = (0, i.useMemo)(
            () =>
                null == n
                    ? null
                    : n.length < 2
                      ? n
                      : (0, a.sortBy)(n, (e) => {
                            var t, n;
                            let { user: r } = e;
                            return -((null !== (n = null === (t = m.get(r.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : -1) * 1);
                        }),
            [n, m]
        ),
        T = (0, l.Z)(I);
    return {
        mutualFriends: null != I ? I : T,
        isFetching: r
    };
}
