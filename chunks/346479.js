var r = n(789020);
var i = n(697988),
    a = n(544891),
    o = n(570140),
    s = n(668781),
    l = n(430742),
    u = n(367907),
    c = n(555573),
    d = n(131704),
    _ = n(314897),
    E = n(592125),
    f = n(496675),
    h = n(823379),
    p = n(920303),
    m = n(569471),
    I = n(91159),
    T = n(952537),
    g = n(981631),
    S = n(176505),
    A = n(689938);
function v(e, t) {
    return a.tn
        .patch({
            url: g.ANM.CHANNEL(e.id),
            body: t
        })
        .then(
            (t) => (
                o.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: (0, d.q_)(t.body)
                }),
                e.isForumPost() &&
                    null != e.parent_id &&
                    o.Z.dispatch({
                        type: 'RESORT_THREADS',
                        channelId: e.parent_id
                    }),
                t
            )
        );
}
function N(e, t) {
    o.Z.dispatch({
        type: 'THREAD_MEMBER_LOCAL_UPDATE',
        id: e.id,
        guildId: e.getGuildId(),
        userId: _.default.getId(),
        isJoining: t
    });
}
t.Z = {
    archiveThread(e, t) {
        let n = { archived: !0 };
        return t && (n.locked = !0), v(e, n);
    },
    async lockThread(e) {
        let t = e.isArchivedThread();
        return (
            t && (await this.unarchiveThread(e, !1)),
            v(e, {
                locked: !0,
                archived: t
            })
        );
    },
    async unlockThread(e) {
        let t = e.isArchivedThread();
        return (
            t && (await this.unarchiveThread(e, !0)),
            v(e, {
                locked: !1,
                archived: t
            })
        );
    },
    async unarchiveThread(e, t) {
        let n = { archived: !1 },
            r = e.isForumPost();
        t && (n.locked = !1);
        try {
            return await v(e, n);
        } catch (e) {
            var i, a;
            throw (
                ((null === (i = e.body) || void 0 === i ? void 0 : i.code) === g.evJ.TOO_MANY_THREADS
                    ? s.Z.show({
                          title: r ? A.Z.Messages.CANNOT_UNARCHIVE_FORUM_POST : A.Z.Messages.CANNOT_UNARCHIVE_THREAD,
                          body: r ? A.Z.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : A.Z.Messages.TOO_MANY_THREADS_MESSAGE
                      })
                    : (null === (a = e.body) || void 0 === a ? void 0 : a.code) === g.evJ.TOO_MANY_ANNOUNCEMENT_THREADS
                      ? s.Z.show({
                            title: A.Z.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: A.Z.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                        })
                      : 429 === e.status
                        ? s.Z.show({
                              title: r ? A.Z.Messages.CANNOT_UNARCHIVE_FORUM_POST : A.Z.Messages.CANNOT_UNARCHIVE_THREAD,
                              body: A.Z.Messages.RATE_LIMITED
                          })
                        : s.Z.show({
                              title: A.Z.Messages.ERROR,
                              body: A.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
                          }),
                e)
            );
        }
    },
    async unarchiveThreadIfNecessary(e) {
        var t;
        let n = E.Z.getChannel(e),
            r = f.Z.can(g.Plq.MANAGE_THREADS, n);
        null != n && n.isArchivedThread() && (r || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0) && (await this.unarchiveThread(n, !1));
    },
    setInvitable: (e, t) => v(e, { invitable: t }),
    async joinThread(e, t) {
        e.isForumPost() && N(e, !0);
        try {
            return await a.tn.post({
                url: g.ANM.THREAD_MEMBER(e.id),
                query: { location: t }
            });
        } catch (t) {
            var n;
            if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === g.evJ.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                s.Z.show({
                    title: t ? A.Z.Messages.CANNOT_JOIN_FORUM_POST : A.Z.Messages.CANNOT_JOIN_THREAD,
                    body: t ? A.Z.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : A.Z.Messages.TOO_MANY_MEMBERS_MESSAGE
                });
            } else
                s.Z.show({
                    title: A.Z.Messages.ERROR,
                    body: A.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
                });
            e.isForumPost() && N(e, !1);
        }
    },
    async addMember(e, t, n) {
        try {
            return await a.tn.post({
                url: g.ANM.THREAD_MEMBER(e.id, t),
                query: { location: n }
            });
        } catch (t) {
            var r;
            if ((null === (r = t.body) || void 0 === r ? void 0 : r.code) === g.evJ.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                s.Z.show({
                    title: t ? A.Z.Messages.CANNOT_ADD_USER_TO_FORUM_POST : A.Z.Messages.CANNOT_ADD_USER_TO_THREAD,
                    body: t ? A.Z.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : A.Z.Messages.TOO_MANY_MEMBERS_MESSAGE
                });
            } else
                s.Z.show({
                    title: A.Z.Messages.ERROR,
                    body: A.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
                });
        }
    },
    leaveThread: (e, t) => (
        e.isForumPost() && N(e, !1),
        a.tn.del({
            url: g.ANM.THREAD_MEMBER(e.id),
            query: { location: t }
        })
    ),
    removeMember: (e, t, n) =>
        a.tn.del({
            url: g.ANM.THREAD_MEMBER(e.id, t),
            query: { location: n }
        }),
    setAutoArchiveDuration: (e, t) =>
        a.tn.patch({
            url: g.ANM.CHANNEL(e.id),
            body: { auto_archive_duration: t }
        }),
    pin(e) {
        let t = e.flags | S.zZ.PINNED;
        this.updateFlags(e, t, e.isArchivedThread());
    },
    unpin(e) {
        let t = e.flags & ~S.zZ.PINNED;
        this.updateFlags(e, t);
    },
    async updateFlags(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        o.Z.dispatch({
            type: 'THREAD_UPDATE',
            channel: e.merge({ flags: t })
        });
        let r = { flags: t };
        n && (r.archived = !1);
        try {
            await a.tn.patch({
                url: g.ANM.CHANNEL(e.id),
                body: r
            });
        } catch {
            o.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: e
            });
        }
    },
    async replacePin(e, t) {
        let n = e.merge({ flags: e.flags & ~S.zZ.PINNED }),
            r = t.merge({ flags: t.flags | S.zZ.PINNED });
        o.Z.dispatch({
            type: 'THREAD_UPDATE',
            channel: n
        }),
            o.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: r
            }),
            await this.unarchiveThreadIfNecessary(e.id),
            await this.unarchiveThreadIfNecessary(t.id);
        try {
            await a.tn.patch({
                url: g.ANM.CHANNEL(e.id),
                body: { flags: e.flags & ~S.zZ.PINNED }
            });
        } catch {
            o.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: e
            }),
                o.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: t
                });
            return;
        }
        try {
            await a.tn.patch({
                url: g.ANM.CHANNEL(t.id),
                body: { flags: t.flags | S.zZ.PINNED }
            });
        } catch {
            o.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: t
            });
        }
    },
    openThreadCreationForMobile(e, t, n) {
        (0, u.yw)(g.rMx.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id
        }),
            l.Z.changeThreadSettings(e.id, {
                parentMessageId: t,
                isPrivate: !1,
                location: n
            }),
            null == t &&
                (0, c.Po)({
                    channelId: e.id,
                    command: null,
                    section: null
                });
    },
    async setNotificationSettings(e, t) {
        return (
            (0, I.ZJ)(e, t),
            !m.Z.hasJoined(e.id) && (await this.joinThread(e, 'Change Notification Settings')),
            a.tn.patch({
                url: g.ANM.THREAD_MEMBER_SETTINGS(e.id),
                body: t
            })
        );
    },
    loadArchivedThreads(e, t, n, r, s) {
        !p.Z.isLoading(t, n, r) &&
            (o.Z.dispatch({
                type: 'LOAD_ARCHIVED_THREADS',
                channelId: t,
                sortOrder: n,
                tagFilter: r
            }),
            a.tn
                .get({
                    url: g.ANM.THREAD_SEARCH(t),
                    query: {
                        archived: !0,
                        sort_by: 'last_message_time',
                        sort_order: 'desc',
                        limit: p.I,
                        tag: r.size > 0 ? Array.from(r).join(',') : void 0,
                        tag_setting: i.z.MATCH_SOME,
                        offset: s
                    },
                    retries: 2
                })
                .then(
                    (i) => {
                        let {
                            body: { threads: a, members: l, has_more: u, first_messages: c, most_recent_messages: d }
                        } = i;
                        null == a
                            ? o.Z.dispatch({
                                  type: 'LOAD_ARCHIVED_THREADS_FAIL',
                                  channelId: t,
                                  sortOrder: n,
                                  tagFilter: r
                              })
                            : o.Z.dispatch({
                                  type: 'LOAD_ARCHIVED_THREADS_SUCCESS',
                                  guildId: e,
                                  channelId: t,
                                  offset: s,
                                  sortOrder: n,
                                  tagFilter: r,
                                  threads: a,
                                  firstMessages: c,
                                  mostRecentMessages: d,
                                  members: (null != l ? l : []).map((e) => (0, T.Z)(e)),
                                  owners: a.map((e) => e.owner).filter(h.lm),
                                  hasMore: u
                              });
                    },
                    () => {
                        o.Z.dispatch({
                            type: 'LOAD_ARCHIVED_THREADS_FAIL',
                            channelId: t,
                            sortOrder: n,
                            tagFilter: r
                        });
                    }
                ));
    },
    async searchThreads(e, t, n, r) {
        let s = null != r && r.size > 0 ? Array.from(r).join(',') : void 0,
            {
                body: { threads: l, members: u, first_messages: c, most_recent_messages: d }
            } = await a.tn.get({
                url: g.ANM.THREAD_SEARCH(t),
                query: {
                    name: n,
                    tag: s,
                    tag_setting: i.z.MATCH_SOME
                }
            });
        return (
            o.Z.dispatch({
                type: 'LOAD_THREADS_SUCCESS',
                threads: l,
                members: u,
                guildId: e,
                firstMessages: c,
                mostRecentMessages: d
            }),
            l.map((e) => e.id)
        );
    }
};
