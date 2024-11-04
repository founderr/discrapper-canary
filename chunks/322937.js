n.d(t, {
    $: function () {
        return s;
    }
});
var i = n(192379),
    l = n(774078),
    r = n(202107);
function s(e) {
    let { communicationDisabledUntil: t, userId: n, guildId: s } = null != e ? e : {},
        a = (0, l.Z)(null != t ? Date.parse(t) : Date.now()),
        o = a.seconds,
        c = (0, i.useRef)(null);
    return (
        (0, i.useEffect)(() => {
            if (null == e || null == s || null == n) {
                clearTimeout(c.current);
                return;
            }
            return (
                o <= 0 &&
                    null == c.current &&
                    (c.current = setTimeout(() => {
                        r.Z.clearGuildMemberTimeout(s, n);
                    }, 1000)),
                () => {
                    null != c.current && (clearTimeout(c.current), (c.current = null));
                }
            );
        }, [s, n, o, t, e]),
        a
    );
}
