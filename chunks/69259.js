t.d(n, {
    L: function () {
        return r;
    }
});
var a = t(626135),
    l = t(206583),
    i = t(981631);
let r = (e, n) => {
    a.default.track(i.rMx.RANKING_ITEM_INTERACTED, {
        request_id: n.requestId,
        item_id: n.entry.id,
        surface_type: l.Kd.GUILD_MEMBER_LIST,
        channel_id: n.channelId,
        guild_id: n.guildId,
        interaction_type: e,
        destination_channel_id: n.destinationChannelId,
        destination_guild_id: n.destinationGuildId,
        rich_presence_name: n.richPresenceName
    });
};
