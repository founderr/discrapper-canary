var i = n(544891),
    r = n(570140),
    l = n(981631);
t.Z = {
    setGuildFilter(e) {
        let { guildFilter: t, roleFilter: n, everyoneFilter: i } = e;
        r.Z.dispatch({
            type: 'SET_RECENT_MENTIONS_FILTER',
            guildFilter: t,
            roleFilter: n,
            everyoneFilter: i
        });
    },
    clearMentions() {
        r.Z.dispatch({ type: 'CLEAR_MENTIONS' });
    },
    truncateMentions(e) {
        r.Z.dispatch({
            type: 'TRUNCATE_MENTIONS',
            size: e
        });
    },
    fetchRecentMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DJj,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            o = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
        r.Z.dispatch({
            type: 'LOAD_RECENT_MENTIONS',
            guildId: n
        }),
            i.tn
                .get({
                    url: l.ANM.MENTIONS,
                    query: {
                        before: e,
                        limit: t,
                        guild_id: n,
                        roles: a,
                        everyone: o
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(
                    (t) => {
                        let { body: n } = t;
                        r.Z.dispatch({
                            type: 'LOAD_RECENT_MENTIONS_SUCCESS',
                            messages: n,
                            isAfter: null != e,
                            hasMoreAfter: n.length >= l.DJj
                        });
                    },
                    () => {
                        r.Z.dispatch({ type: 'LOAD_RECENT_MENTIONS_FAILURE' });
                    }
                );
    },
    deleteRecentMention(e) {
        i.tn.del({
            url: l.ANM.MENTIONS_MESSAGE_ID(e),
            retries: 2,
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            r.Z.dispatch({
                type: 'RECENT_MENTION_DELETE',
                id: e
            });
    },
    setRecentMentionsStale() {
        r.Z.dispatch({ type: 'SET_RECENT_MENTIONS_STALE' });
    }
};
