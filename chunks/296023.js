t.d(n, {
    w: function () {
        return o;
    }
});
var i = t(192379),
    a = t(442837),
    l = t(594174),
    s = t(689938);
function o(e) {
    var n;
    let t = null === (n = e.linkedLobby) || void 0 === n ? void 0 : n.linked_at,
        o = (0, a.e7)([l.default], () => {
            var n;
            return l.default.getUser(null === (n = e.linkedLobby) || void 0 === n ? void 0 : n.linked_by);
        });
    return i.useMemo(() => {
        if (null == t) return;
        let e = new Date(t);
        return null != o
            ? s.Z.Messages.CHANNEL_SYNCING_ADDED_BY_NO_LINK.format({
                  username: o.username,
                  linkedAtDate: e
              })
            : s.Z.Messages.CHANNEL_SYNCING_ADDED_BY_UNKNOWN_USER.format({ linkedAtDate: e });
    }, [t, o]);
}
