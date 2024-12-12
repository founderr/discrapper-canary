var i = r(544891),
    a = r(570140),
    s = r(668781),
    o = r(346479),
    l = r(929991),
    u = r(480739),
    c = r(985518),
    d = r(228392),
    f = r(981631),
    _ = r(388032);
async function h(e, n, r) {
    try {
        return await e();
    } catch (e) {
        var i, a, o;
        (null === (i = e.body) || void 0 === i ? void 0 : i.code) === f.evJ.NON_MODERATED_TAG_REQUIRED
            ? s.Z.show({
                  title: n,
                  body: r
              })
            : (null === (a = e.body) || void 0 === a ? void 0 : a.code) === f.evJ.INVALID_FORM_BODY &&
              (null === (o = e.body) || void 0 === o ? void 0 : o.errors.emoji) &&
              s.Z.show({
                  title: _.intl.string(_.t.T8sBLC),
                  body: _.intl.string(_.t.aHt1BQ)
              });
    }
}
n.Z = {
    resort(e) {
        a.Z.dispatch({
            type: 'RESORT_THREADS',
            channelId: e
        });
    },
    createForumTag: (e, n) =>
        i.tn.post({
            url: f.ANM.FORUM_TAGS(n),
            body: {
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                moderated: e.moderated
            },
            rejectWithError: !1
        }),
    updateForumTag(e, n) {
        let r = i.tn.put({
            url: f.ANM.FORUM_TAG(n, e.id),
            body: {
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: null == e.emojiId ? e.emojiName : void 0,
                moderated: e.moderated
            },
            rejectWithError: !1
        });
        h(() => r, _.intl.string(_.t.T8sBLC), _.intl.string(_.t.imcb5u));
    },
    deleteForumTag(e, n) {
        let r = i.tn.del({
            url: f.ANM.FORUM_TAG(e, n),
            rejectWithError: !1
        });
        h(() => r, _.intl.string(_.t['0ZkNDQ']), _.intl.string(_.t.imcb5u));
    },
    updateForumPostTags: async (e, n) => (
        await o.Z.unarchiveThreadIfNecessary(e),
        i.tn.patch({
            url: f.ANM.CHANNEL(e),
            body: { applied_tags: n },
            rejectWithError: !1
        })
    ),
    hideAdminOnboarding(e, n) {
        a.Z.dispatch({
            type: 'ADMIN_ONBOARDING_GUIDE_HIDE',
            channelId: e,
            hide: n
        });
    },
    markPostAsSeen(e, n, r) {
        (0, l.a8)((0, c.UP)(e), n, r);
    },
    markPostAsUnseen(e, n, r) {
        (0, l.FL)((0, c.UP)(e), n, r);
    },
    flushSeenItems(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.cs.IMMEDIATE_WITH_COOLDOWN;
        (0, l.rS)((0, c.UP)(e), n);
    },
    async searchForumPosts(e, n, r, i) {
        a.Z.dispatch({
            type: 'FORUM_SEARCH_START',
            channelId: n
        });
        try {
            let s = await o.Z.searchThreads(e, n, r, i);
            (0, d.Js)({
                guildId: e,
                channelId: n,
                numSearchResults: s.length
            }),
                a.Z.dispatch({
                    type: 'FORUM_SEARCH_SUCCESS',
                    channelId: n,
                    threadIds: s
                });
        } catch {
            a.Z.dispatch({
                type: 'FORUM_SEARCH_FAILURE',
                channelId: n
            });
        }
    },
    updateForumSearchQuery(e, n) {
        a.Z.dispatch({
            type: 'FORUM_SEARCH_QUERY_UPDATED',
            channelId: e,
            query: n
        });
    },
    clearForumSearch(e) {
        a.Z.dispatch({
            type: 'FORUM_SEARCH_CLEAR',
            channelId: e
        });
    }
};
