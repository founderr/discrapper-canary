n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(192379),
    l = n(399606),
    r = n(570140),
    a = n(607070),
    s = n(222677),
    o = n(695346),
    c = n(960020),
    d = n(566006);
function u() {
    let e = o.Yk.useSetting(),
        t = (0, l.e7)([a.Z], () => a.Z.useReducedMotion);
    i.useEffect(() => {
        function n(n) {
            let { messageId: i, channelId: l, emoji: r, optimistic: a, reactionType: o } = n;
            if (!a && o === d.O.BURST && !!e && !t)
                (0, s.T6)({
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
