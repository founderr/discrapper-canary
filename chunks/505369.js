var i = n(544891),
    a = n(570140),
    s = n(960048);
n(109911);
var r = n(715035),
    l = n(207205),
    o = n(981631);
t.Z = {
    async fetchPopularGuildsFromCategories(e, t) {
        try {
            let { guilds: n } = (
                await i.tn.post({
                    url: o.ANM.GRAVITY_TOPIC_GUILDS,
                    body: {
                        category_ids: e,
                        offset: t
                    }
                })
            ).body;
            return (
                a.Z.dispatch({
                    type: 'LOAD_GRAVITY_POPULAR_GUILDS',
                    categoryIds: e,
                    guilds: n,
                    offset: t
                }),
                !0
            );
        } catch (e) {
            s.Z.captureException(e);
        }
        return !1;
    },
    async fetchDehydrated() {
        let { isReloading: e, forceRefresh: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!(0, l.rK)('fetchDehydrated')) return;
        let n = r.Z.negativeContentOnly();
        try {
            let s = Date.now(),
                r = await i.tn.get({
                    url: n ? o.ANM.GRAVITY_ITEMS_NEGATIVE : o.ANM.GRAVITY_ITEMS_DEHYDRATED,
                    query: { refresh: t }
                });
            await a.Z.dispatch({
                type: 'LOAD_GRAVITY_DEHYDRATED',
                items: r.body.items,
                loadId: r.body.load_id,
                startTime: s,
                isReloading: e
            });
        } catch (e) {
            s.Z.captureException(e);
        }
    },
    async gravityJoinGuild(e, t) {
        if (!!(0, l.rK)('gravityJoinGuild') && 0 !== e.length)
            try {
                return (
                    await i.tn.post({
                        url: o.ANM.GRAVITY_JOIN_GUILD,
                        body: {
                            guild_ids: e,
                            location: t
                        }
                    }),
                    !0
                );
            } catch (e) {
                return s.Z.captureException(e), !1;
            }
    },
    setGravitySelectedChannel(e) {
        a.Z.dispatch({
            type: 'SET_GRAVITY_SELECTED_CHANNEL',
            channelId: e
        });
    },
    async fetchForNotification(e, t) {
        if (!!(0, l.rK)('fetchInitial'))
            try {
                let n = await i.tn.post({
                    url: o.ANM.GRAVITY_ITEMS_HYDRATE,
                    body: {
                        message_items: [
                            {
                                channel_id: e,
                                message_id: t
                            }
                        ],
                        summary_items: [],
                        activity_items: []
                    }
                });
                if (0 === n.body.message_items.length) return;
                a.Z.dispatch({
                    type: 'LOAD_GRAVITY_FROM_NOTIFICATION',
                    messageItem: n.body.message_items[0]
                });
            } catch (e) {
                s.Z.captureException(e);
            }
    },
    async fetchHydrated(e, t, n, r, c) {
        if (!!(0, l.rK)('fetchHydrated')) {
            if (0 === e.length && 0 === t.length && 0 === n.length) {
                a.Z.dispatch({
                    type: 'LOAD_GRAVITY_HYDRATED',
                    requestMessageItems: [],
                    requestSummaryItems: [],
                    requestActivityItems: [],
                    messageItems: [],
                    summaryItems: [],
                    activityItems: [],
                    startingIndex: r,
                    endingIndex: c
                });
                return;
            }
            try {
                let s = await i.tn.post({
                    url: o.ANM.GRAVITY_ITEMS_HYDRATE,
                    body: {
                        message_items: e,
                        summary_items: t,
                        activity_items: n
                    }
                });
                a.Z.dispatch({
                    type: 'LOAD_GRAVITY_HYDRATED',
                    requestMessageItems: e,
                    requestSummaryItems: t,
                    requestActivityItems: n,
                    messageItems: s.body.message_items,
                    summaryItems: s.body.summary_items,
                    activityItems: s.body.activity_items,
                    startingIndex: r,
                    endingIndex: c
                });
            } catch (e) {
                s.Z.captureException(e);
            }
        }
    },
    async getGuildChannelScores() {
        if (!!(0, l.rK)('guildChannelScores'))
            try {
                let e = await i.tn.get({ url: o.ANM.GRAVITY_CUSTOM_SCORES });
                a.Z.dispatch({
                    type: 'LOAD_GRAVITY_CUSTOM_SCORES',
                    scores: e.body
                });
            } catch (e) {
                s.Z.captureException(e);
            }
    },
    async getRecommendedGuilds() {
        if (!!(0, l.rK)('recommendedGuilds'))
            try {
                let e = await i.tn.get({ url: o.ANM.GRAVITY_RECOMMENDED_GUILDS });
                a.Z.dispatch({
                    type: 'LOAD_GRAVITY_RECOMMENDED_GUILDS',
                    guilds: e.body.guilds
                });
            } catch (e) {
                s.Z.captureException(e);
            }
    },
    reloadICYMITab() {
        a.Z.dispatch({ type: 'RELOAD_GRAVITY' });
    },
    openICYMITab() {
        a.Z.dispatch({ type: 'GRAVITY_TAB_OPENED' });
    },
    ackGravityItems: (e, t) =>
        a.Z.dispatch({
            type: 'GRAVITY_ACK_ITEMS',
            items: e,
            override: t
        }),
    setFilters: (e) =>
        a.Z.dispatch({
            type: 'SET_GRAVITY_FILTERS',
            filters: e
        }),
    giveFeedback: () => a.Z.dispatch({ type: 'GRAVITY_FEEDBACK_GIVEN' }),
    clearReadStates: () => a.Z.dispatch({ type: 'CLEAR_GRAVITY_READ_STATES' }),
    addedRecommendedGuild: () => a.Z.dispatch({ type: 'GRAVITY_JOINED_RECOMMENDED_GUILD' })
};
