l.d(n, {
    Z: function () {
        return u;
    }
});
var t = l(470079),
    r = l(902704),
    a = l(232567),
    i = l(720202),
    s = l(594174);
function u(e) {
    let { entry: n, channel: l } = e,
        u = t.useRef([]);
    return (
        t.useEffect(() => {
            if (!(0, r.E)(u.current, n.participants))
                (u.current = n.participants),
                    n.participants
                        .filter((e) => null == s.default.getUser(e))
                        .forEach((e) => {
                            null == l.guild_id ? (0, a.PR)(e) : i.Z.requestMember(l.guild_id, e);
                        });
        }, [n, l.guild_id]),
        {}
    );
}
