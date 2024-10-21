n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    s = n(399606),
    a = n(570140),
    l = n(607070),
    r = n(222677),
    o = n(695346),
    c = n(960020),
    u = n(566006);
function d() {
    let e = o.Yk.useSetting(),
        t = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
    i.useEffect(() => {
        function n(n) {
            let { messageId: i, channelId: s, emoji: a, optimistic: l, reactionType: o } = n;
            if (!l && o === u.O.BURST && !!e && !t)
                (0, r.T6)({
                    channelId: s,
                    messageId: i,
                    emoji: a,
                    key: c.I.EXTERNAL
                });
        }
        return (
            a.Z.subscribe('MESSAGE_REACTION_ADD', n),
            () => {
                a.Z.unsubscribe('MESSAGE_REACTION_ADD', n);
            }
        );
    }, [e, t]);
}
