n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(390547);
var i = n(47120);
var a = n(653041);
var o = n(392711),
    s = n.n(o),
    l = n(45114),
    u = n(45966),
    c = n(601070),
    d = n(984933),
    _ = n(306680),
    E = n(626135),
    f = n(709054),
    h = n(981631),
    p = n(490897);
function m(e, t, n) {
    let r = s()
        .flatMap(e, (e) => {
            let t = d.ZP.getSelectableChannelIds(e),
                n = [...t, ...d.ZP.getVocalChannelIds(e)],
                r = c.Z.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                var i;
                let t = null !== (i = r[e]) && void 0 !== i ? i : {};
                for (let e in t) n.push(e);
            }
            return n;
        })
        .map((e) => ({
            channelId: e,
            readStateType: p.W.CHANNEL,
            messageId: _.ZP.lastMessageId(e)
        }));
    return (
        e.forEach((e) => {
            r.push({
                channelId: f.default.cast(e),
                readStateType: p.W.GUILD_EVENT,
                messageId: _.ZP.lastMessageId(e, p.W.GUILD_EVENT)
            }),
                r.push({
                    channelId: f.default.cast(e),
                    readStateType: p.W.GUILD_ONBOARDING_QUESTION,
                    messageId: u.Z.ackIdForGuild(e)
                });
        }),
        E.default.track(h.rMx.MARK_AS_READ, {
            source: t,
            type: 'guild'
        }),
        (0, l.y5)(r, n)
    );
}
