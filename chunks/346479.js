n(789020);
var r = n(697988),
    i = n(544891),
    a = n(570140),
    s = n(668781),
    o = n(430742),
    l = n(367907),
    u = n(555573),
    c = n(131704),
    d = n(314897),
    f = n(592125),
    _ = n(496675),
    p = n(823379),
    h = n(920303),
    m = n(569471),
    g = n(91159),
    E = n(952537),
    v = n(981631),
    b = n(176505),
    I = n(388032);
function S(e, t) {
    return i.tn
        .patch({
            url: v.ANM.CHANNEL(e.id),
            body: t,
            rejectWithError: !1
        })
        .then(
            (t) => (
                a.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: (0, c.q_)(t.body)
                }),
                e.isForumPost() &&
                    null != e.parent_id &&
                    a.Z.dispatch({
                        type: 'RESORT_THREADS',
                        channelId: e.parent_id
                    }),
                t
            )
        );
}
function T(e, t) {
    a.Z.dispatch({
        type: 'THREAD_MEMBER_LOCAL_UPDATE',
        id: e.id,
        guildId: e.getGuildId(),
        userId: d.default.getId(),
        isJoining: t
    });
}
t.Z = {
    archiveThread(e, t) {
        let n = { archived: !0 };
        return t && (n.locked = !0), S(e, n);
    },
    async lockThread(e) {
        let t = e.isArchivedThread();
        return (
            t && (await this.unarchiveThread(e, !1)),
            S(e, {
                locked: !0,
                archived: t
            })
        );
    },
    async unlockThread(e) {
        let t = e.isArchivedThread();
        return (
            t && (await this.unarchiveThread(e, !0)),
            S(e, {
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
            return await S(e, n);
        } catch (e) {
            var i, a;
            throw (
                ((null === (i = e.body) || void 0 === i ? void 0 : i.code) === v.evJ.TOO_MANY_THREADS
                    ? s.Z.show({
                          title: r ? I.intl.string(I.t.kwyWNT) : I.intl.string(I.t['PeIE/v']),
                          body: r ? I.intl.string(I.t.KGaiEB) : I.intl.string(I.t.P0wT5e)
                      })
                    : (null === (a = e.body) || void 0 === a ? void 0 : a.code) === v.evJ.TOO_MANY_ANNOUNCEMENT_THREADS
                      ? s.Z.show({
                            title: I.intl.string(I.t['PeIE/v']),
                            body: I.intl.string(I.t.jDMxz8)
                        })
                      : 429 === e.status
                        ? s.Z.show({
                              title: r ? I.intl.string(I.t.kwyWNT) : I.intl.string(I.t['PeIE/v']),
                              body: I.intl.string(I.t['Whhv4+'])
                          })
                        : s.Z.show({
                              title: I.intl.string(I.t.j2d6Ki),
                              body: I.intl.string(I.t.fEptJC)
                          }),
                e)
            );
        }
    },
    async unarchiveThreadIfNecessary(e) {
        var t;
        let n = f.Z.getChannel(e),
            r = _.Z.can(v.Plq.MANAGE_THREADS, n);
        null != n && n.isArchivedThread() && (r || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0) && (await this.unarchiveThread(n, !1));
    },
    setInvitable: (e, t) => S(e, { invitable: t }),
    async joinThread(e, t) {
        e.isForumPost() && T(e, !0);
        try {
            return await i.tn.post({
                url: v.ANM.THREAD_MEMBER(e.id),
                query: { location: t },
                rejectWithError: !1
            });
        } catch (t) {
            var n;
            if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === v.evJ.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                s.Z.show({
                    title: t ? I.intl.string(I.t.EMYJFh) : I.intl.string(I.t.gtdVcn),
                    body: t ? I.intl.string(I.t.QYyad3) : I.intl.string(I.t.abMwgo)
                });
            } else
                s.Z.show({
                    title: I.intl.string(I.t.j2d6Ki),
                    body: I.intl.string(I.t.fEptJC)
                });
            e.isForumPost() && T(e, !1);
        }
    },
    async addMember(e, t, n) {
        try {
            return await i.tn.post({
                url: v.ANM.THREAD_MEMBER(e.id, t),
                query: { location: n },
                rejectWithError: !1
            });
        } catch (t) {
            var r;
            if ((null === (r = t.body) || void 0 === r ? void 0 : r.code) === v.evJ.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                s.Z.show({
                    title: t ? I.intl.string(I.t['0yAqqK']) : I.intl.string(I.t.YErysL),
                    body: t ? I.intl.string(I.t.QYyad3) : I.intl.string(I.t.abMwgo)
                });
            } else
                s.Z.show({
                    title: I.intl.string(I.t.j2d6Ki),
                    body: I.intl.string(I.t.fEptJC)
                });
        }
    },
    leaveThread: (e, t) => (
        e.isForumPost() && T(e, !1),
        i.tn.del({
            url: v.ANM.THREAD_MEMBER(e.id),
            query: { location: t },
            rejectWithError: !1
        })
    ),
    removeMember: (e, t, n) =>
        i.tn.del({
            url: v.ANM.THREAD_MEMBER(e.id, t),
            query: { location: n },
            rejectWithError: !1
        }),
    setAutoArchiveDuration: (e, t) =>
        i.tn.patch({
            url: v.ANM.CHANNEL(e.id),
            body: { auto_archive_duration: t },
            rejectWithError: !1
        }),
    pin(e) {
        let t = e.flags | b.zZ.PINNED;
        this.updateFlags(e, t, e.isArchivedThread());
    },
    unpin(e) {
        let t = e.flags & ~b.zZ.PINNED;
        this.updateFlags(e, t);
    },
    async updateFlags(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        a.Z.dispatch({
            type: 'THREAD_UPDATE',
            channel: e.merge({ flags: t })
        });
        let r = { flags: t };
        n && (r.archived = !1);
        try {
            await i.tn.patch({
                url: v.ANM.CHANNEL(e.id),
                body: r,
                rejectWithError: !1
            });
        } catch {
            a.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: e
            });
        }
    },
    async replacePin(e, t) {
        let n = e.merge({ flags: e.flags & ~b.zZ.PINNED }),
            r = t.merge({ flags: t.flags | b.zZ.PINNED });
        a.Z.dispatch({
            type: 'THREAD_UPDATE',
            channel: n
        }),
            a.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: r
            }),
            await this.unarchiveThreadIfNecessary(e.id),
            await this.unarchiveThreadIfNecessary(t.id);
        try {
            await i.tn.patch({
                url: v.ANM.CHANNEL(e.id),
                body: { flags: e.flags & ~b.zZ.PINNED },
                rejectWithError: !1
            });
        } catch {
            a.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: e
            }),
                a.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: t
                });
            return;
        }
        try {
            await i.tn.patch({
                url: v.ANM.CHANNEL(t.id),
                body: { flags: t.flags | b.zZ.PINNED },
                rejectWithError: !1
            });
        } catch {
            a.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: t
            });
        }
    },
    openThreadCreationForMobile(e, t, n) {
        (0, l.yw)(v.rMx.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id
        }),
            o.Z.changeThreadSettings(e.id, {
                parentMessageId: t,
                isPrivate: !1,
                location: n
            }),
            null == t &&
                (0, u.Po)({
                    channelId: e.id,
                    command: null,
                    section: null
                });
    },
    async setNotificationSettings(e, t) {
        return (
            (0, g.ZJ)(e, t),
            !m.Z.hasJoined(e.id) && (await this.joinThread(e, 'Change Notification Settings')),
            i.tn.patch({
                url: v.ANM.THREAD_MEMBER_SETTINGS(e.id),
                body: t,
                rejectWithError: !1
            })
        );
    },
    loadArchivedThreads(e, t, n, s, o) {
        !h.Z.isLoading(t, n, s) &&
            (a.Z.dispatch({
                type: 'LOAD_ARCHIVED_THREADS',
                channelId: t,
                sortOrder: n,
                tagFilter: s
            }),
            i.tn
                .get({
                    url: v.ANM.THREAD_SEARCH(t),
                    query: {
                        archived: !0,
                        sort_by: 'last_message_time',
                        sort_order: 'desc',
                        limit: h.I,
                        tag: s.size > 0 ? Array.from(s).join(',') : void 0,
                        tag_setting: r.z.MATCH_SOME,
                        offset: o
                    },
                    retries: 2,
                    rejectWithError: !1
                })
                .then(
                    (r) => {
                        let {
                            body: { threads: i, members: l, has_more: u, first_messages: c, most_recent_messages: d }
                        } = r;
                        null == i
                            ? a.Z.dispatch({
                                  type: 'LOAD_ARCHIVED_THREADS_FAIL',
                                  channelId: t,
                                  sortOrder: n,
                                  tagFilter: s
                              })
                            : a.Z.dispatch({
                                  type: 'LOAD_ARCHIVED_THREADS_SUCCESS',
                                  guildId: e,
                                  channelId: t,
                                  offset: o,
                                  sortOrder: n,
                                  tagFilter: s,
                                  threads: i,
                                  firstMessages: c,
                                  mostRecentMessages: d,
                                  members: (null != l ? l : []).map((e) => (0, E.Z)(e)),
                                  owners: i.map((e) => e.owner).filter(p.lm),
                                  hasMore: u
                              });
                    },
                    () => {
                        a.Z.dispatch({
                            type: 'LOAD_ARCHIVED_THREADS_FAIL',
                            channelId: t,
                            sortOrder: n,
                            tagFilter: s
                        });
                    }
                ));
    },
    async searchThreads(e, t, n, s) {
        let o = null != s && s.size > 0 ? Array.from(s).join(',') : void 0,
            {
                body: { threads: l, members: u, first_messages: c, most_recent_messages: d }
            } = await i.tn.get({
                url: v.ANM.THREAD_SEARCH(t),
                query: {
                    name: n,
                    tag: o,
                    tag_setting: r.z.MATCH_SOME
                },
                rejectWithError: !1
            });
        return (
            a.Z.dispatch({
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
