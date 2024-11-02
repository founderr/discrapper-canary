t.d(n, {
    w: function () {
        return o;
    }
});
var i = t(192379),
    l = t(442837),
    r = t(594174),
    a = t(388032);
function o(e) {
    var n;
    let t = null === (n = e.linkedLobby) || void 0 === n ? void 0 : n.linked_at,
        o = (0, l.e7)([r.default], () => {
            var n;
            return r.default.getUser(null === (n = e.linkedLobby) || void 0 === n ? void 0 : n.linked_by);
        });
    return i.useMemo(() => {
        if (null == t) return;
        let e = new Date(t);
        return null != o
            ? a.intl.format(a.t['/ZBO3d'], {
                  username: o.username,
                  linkedAtDate: e
              })
            : a.intl.formatToPlainString(a.t.v6plRE, { linkedAtDate: e });
    }, [t, o]);
}
