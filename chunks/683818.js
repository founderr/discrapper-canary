n.d(t, {
    G: function () {
        return c;
    },
    Z: function () {
        return o;
    }
});
var i = n(442837),
    s = n(592125),
    a = n(430824),
    l = n(496675),
    r = n(981631);
function o(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getGuild(e.guildId)),
        n = (0, i.e7)([s.Z], () => s.Z.getChannel(e.channelId)),
        o = (0, i.e7)([l.Z], () => l.Z.can(r.Plq.ADMINISTRATOR, t)),
        c = (0, i.e7)([l.Z], () => l.Z.can(r.Plq.MANAGE_MESSAGES, n));
    return {
        isEntryAdmin: o,
        canEdit: o || c,
        canRemove: o || c
    };
}
function c(e) {
    return (0, i.e7)([l.Z], () => l.Z.can(r.Plq.SEND_MESSAGES, e));
}
