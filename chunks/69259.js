n.d(t, {
    L: function () {
        return s;
    },
    e: function () {
        return o;
    }
}),
    n(47120);
var i = n(626135),
    l = n(162461),
    a = n(206583),
    r = n(981631);
let o = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
        let { trackingEnabled: r } = (0, l.nP)('trackSampledContentEntryAnalytics:'.concat(e));
        return r ? i.default.track(e, ...n) : Promise.resolve();
    },
    s = (e, t) => {
        o(r.rMx.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: t.requestId,
            item_id: t.entry.id,
            surface_type: a.Kd.GUILD_MEMBER_LIST,
            channel_id: t.channelId,
            guild_id: t.guildId,
            interaction_type: e,
            destination_channel_id: t.destinationChannelId,
            destination_guild_id: t.destinationGuildId,
            rich_presence_name: t.richPresenceName
        });
    };
