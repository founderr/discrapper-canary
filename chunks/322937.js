n.d(t, {
    $: function () {
        return a;
    }
});
var i = n(192379),
    l = n(774078),
    r = n(202107);
function a(e) {
    let { communicationDisabledUntil: t, userId: n, guildId: a } = null != e ? e : {},
        s = (0, l.Z)(null != t ? Date.parse(t) : Date.now()),
        o = s.seconds,
        c = (0, i.useRef)(null);
    return (
        (0, i.useEffect)(() => {
            if (null == e || null == a || null == n) {
                clearTimeout(c.current);
                return;
            }
            return (
                o <= 0 &&
                    null == c.current &&
                    (c.current = setTimeout(() => {
                        r.Z.clearGuildMemberTimeout(a, n);
                    }, 1000)),
                () => {
                    null != c.current && (clearTimeout(c.current), (c.current = null));
                }
            );
        }, [a, n, o, t, e]),
        s
    );
}
