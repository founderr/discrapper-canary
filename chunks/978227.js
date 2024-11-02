l.d(n, {
    Z: function () {
        return r;
    }
});
var t = l(192379),
    i = l(442837),
    s = l(749210),
    a = l(594174);
function r(e) {
    let n = (0, i.e7)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
    return (
        t.useEffect(() => {
            null == n && (null == e ? void 0 : e.creator_id) != null && s.Z.requestMembersById(e.guild_id, e.creator_id);
        }, [e, n]),
        n
    );
}
