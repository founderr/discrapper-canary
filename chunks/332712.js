n.d(t, {
    O: function () {
        return c;
    }
});
var i = n(192379),
    r = n(442837),
    a = n(570140),
    l = n(621853),
    s = n(484459),
    o = n(594174);
function c(e) {
    let t = (0, r.e7)([o.default], () => o.default.getUser(e)),
        n = (0, r.Wu)([l.Z], () => {
            var t, n;
            return null !== (n = null === (t = l.Z.getMutualGuilds(e)) || void 0 === t ? void 0 : t.map((e) => e.guild)) && void 0 !== n ? n : [];
        });
    return (
        i.useEffect(() => {
            0 === n.length && null != t && null == l.Z.getMutualGuilds(e) && a.Z.wait(() => (0, s.Z)(e, void 0, { withMutualGuilds: !0 }));
        }, [n, t, e]),
        n
    );
}
