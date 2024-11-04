n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    l = n(399606),
    r = n(570140),
    s = n(607070),
    a = n(222677),
    o = n(695346),
    c = n(960020),
    u = n(566006);
function d() {
    let e = o.Yk.useSetting(),
        t = (0, l.e7)([s.Z], () => s.Z.useReducedMotion);
    i.useEffect(() => {
        function n(n) {
            let { messageId: i, channelId: l, emoji: r, optimistic: s, reactionType: o } = n;
            if (!s && o === u.O.BURST && !!e && !t)
                (0, a.T6)({
                    channelId: l,
                    messageId: i,
                    emoji: r,
                    key: c.I.EXTERNAL
                });
        }
        return (
            r.Z.subscribe('MESSAGE_REACTION_ADD', n),
            () => {
                r.Z.unsubscribe('MESSAGE_REACTION_ADD', n);
            }
        );
    }, [e, t]);
}
