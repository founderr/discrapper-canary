t.d(n, {
    L: function () {
        return o;
    },
    e: function () {
        return s;
    }
}),
    t(47120);
var a = t(626135),
    l = t(162461),
    i = t(206583),
    r = t(981631);
let s = function (e) {
        for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) t[i - 1] = arguments[i];
        let { trackingEnabled: r } = (0, l.nP)('trackSampledContentEntryAnalytics:'.concat(e));
        return r ? a.default.track(e, ...t) : Promise.resolve();
    },
    o = (e, n) => {
        s(r.rMx.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: n.requestId,
            item_id: n.entry.id,
            surface_type: i.Kd.GUILD_MEMBER_LIST,
            channel_id: n.channelId,
            guild_id: n.guildId,
            interaction_type: e,
            destination_channel_id: n.destinationChannelId,
            destination_guild_id: n.destinationGuildId,
            rich_presence_name: n.richPresenceName
        });
    };
