n.d(t, {
    G: function () {
        return c;
    },
    Z: function () {
        return o;
    }
});
var i = n(442837),
    l = n(592125),
    r = n(430824),
    s = n(496675),
    a = n(981631);
function o(e) {
    let t = (0, i.e7)([r.Z], () => r.Z.getGuild(e.guildId)),
        n = (0, i.e7)([l.Z], () => l.Z.getChannel(e.channelId)),
        o = (0, i.e7)([s.Z], () => s.Z.can(a.Plq.ADMINISTRATOR, t)),
        c = (0, i.e7)([s.Z], () => s.Z.can(a.Plq.MANAGE_MESSAGES, n));
    return {
        isEntryAdmin: o,
        canEdit: o || c,
        canRemove: o || c
    };
}
function c(e) {
    return (0, i.e7)([s.Z], () => s.Z.can(a.Plq.SEND_MESSAGES, e));
}
