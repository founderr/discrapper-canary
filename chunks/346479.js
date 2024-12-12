var i = r(789020);
var a = r(697988),
    s = r(544891),
    o = r(570140),
    l = r(668781),
    u = r(430742),
    c = r(367907),
    d = r(555573),
    f = r(131704),
    _ = r(314897),
    h = r(592125),
    p = r(496675),
    m = r(823379),
    g = r(920303),
    E = r(569471),
    v = r(91159),
    I = r(952537),
    T = r(981631),
    b = r(176505),
    y = r(388032);
function S(e, n) {
    return s.tn
        .patch({
            url: T.ANM.CHANNEL(e.id),
            body: n,
            rejectWithError: !1
        })
        .then(
            (n) => (
                o.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: (0, f.q_)(n.body)
                }),
                e.isForumPost() &&
                    null != e.parent_id &&
                    o.Z.dispatch({
                        type: 'RESORT_THREADS',
                        channelId: e.parent_id
                    }),
                n
            )
        );
}
function A(e, n) {
    o.Z.dispatch({
        type: 'THREAD_MEMBER_LOCAL_UPDATE',
        id: e.id,
        guildId: e.getGuildId(),
        userId: _.default.getId(),
        isJoining: n
    });
}
n.Z = {
    archiveThread(e, n) {
        let r = { archived: !0 };
        return n && (r.locked = !0), S(e, r);
    },
    async lockThread(e) {
        let n = e.isArchivedThread();
        return (
            n && (await this.unarchiveThread(e, !1)),
            S(e, {
                locked: !0,
                archived: n
            })
        );
    },
    async unlockThread(e) {
        let n = e.isArchivedThread();
        return (
            n && (await this.unarchiveThread(e, !0)),
            S(e, {
                locked: !1,
                archived: n
            })
        );
    },
    async unarchiveThread(e, n) {
        let r = { archived: !1 },
            i = e.isForumPost();
        n && (r.locked = !1);
        try {
            return await S(e, r);
        } catch (e) {
            var a, s;
            throw (
                ((null === (a = e.body) || void 0 === a ? void 0 : a.code) === T.evJ.TOO_MANY_THREADS
                    ? l.Z.show({
                          title: i ? y.intl.string(y.t.kwyWNT) : y.intl.string(y.t['PeIE/v']),
                          body: i ? y.intl.string(y.t.KGaiEB) : y.intl.string(y.t.P0wT5e)
                      })
                    : (null === (s = e.body) || void 0 === s ? void 0 : s.code) === T.evJ.TOO_MANY_ANNOUNCEMENT_THREADS
                      ? l.Z.show({
                            title: y.intl.string(y.t['PeIE/v']),
                            body: y.intl.string(y.t.jDMxz8)
                        })
                      : 429 === e.status
                        ? l.Z.show({
                              title: i ? y.intl.string(y.t.kwyWNT) : y.intl.string(y.t['PeIE/v']),
                              body: y.intl.string(y.t['Whhv4+'])
                          })
                        : l.Z.show({
                              title: y.intl.string(y.t.j2d6Ki),
                              body: y.intl.string(y.t.fEptJC)
                          }),
                e)
            );
        }
    },
    async unarchiveThreadIfNecessary(e) {
        var n;
        let r = h.Z.getChannel(e),
            i = p.Z.can(T.Plq.MANAGE_THREADS, r);
        null != r && r.isArchivedThread() && (i || (null === (n = r.threadMetadata) || void 0 === n ? void 0 : n.locked) !== !0) && (await this.unarchiveThread(r, !1));
    },
    setInvitable: (e, n) => S(e, { invitable: n }),
    async joinThread(e, n) {
        e.isForumPost() && A(e, !0);
        try {
            return await s.tn.post({
                url: T.ANM.THREAD_MEMBER(e.id),
                query: { location: n },
                rejectWithError: !1
            });
        } catch (n) {
            var r;
            if ((null === (r = n.body) || void 0 === r ? void 0 : r.code) === T.evJ.TOO_MANY_THREAD_MEMBERS) {
                let n = e.isForumPost();
                l.Z.show({
                    title: n ? y.intl.string(y.t.EMYJFh) : y.intl.string(y.t.gtdVcn),
                    body: n ? y.intl.string(y.t.QYyad3) : y.intl.string(y.t.abMwgo)
                });
            } else
                l.Z.show({
                    title: y.intl.string(y.t.j2d6Ki),
                    body: y.intl.string(y.t.fEptJC)
                });
            e.isForumPost() && A(e, !1);
        }
    },
    async addMember(e, n, r) {
        try {
            return await s.tn.post({
                url: T.ANM.THREAD_MEMBER(e.id, n),
                query: { location: r },
                rejectWithError: !1
            });
        } catch (n) {
            var i;
            if ((null === (i = n.body) || void 0 === i ? void 0 : i.code) === T.evJ.TOO_MANY_THREAD_MEMBERS) {
                let n = e.isForumPost();
                l.Z.show({
                    title: n ? y.intl.string(y.t['0yAqqK']) : y.intl.string(y.t.YErysL),
                    body: n ? y.intl.string(y.t.QYyad3) : y.intl.string(y.t.abMwgo)
                });
            } else
                l.Z.show({
                    title: y.intl.string(y.t.j2d6Ki),
                    body: y.intl.string(y.t.fEptJC)
                });
        }
    },
    leaveThread: (e, n) => (
        e.isForumPost() && A(e, !1),
        s.tn.del({
            url: T.ANM.THREAD_MEMBER(e.id),
            query: { location: n },
            rejectWithError: !1
        })
    ),
    removeMember: (e, n, r) =>
        s.tn.del({
            url: T.ANM.THREAD_MEMBER(e.id, n),
            query: { location: r },
            rejectWithError: !1
        }),
    setAutoArchiveDuration: (e, n) =>
        s.tn.patch({
            url: T.ANM.CHANNEL(e.id),
            body: { auto_archive_duration: n },
            rejectWithError: !1
        }),
    pin(e) {
        let n = e.flags | b.zZ.PINNED;
        this.updateFlags(e, n, e.isArchivedThread());
    },
    unpin(e) {
        let n = e.flags & ~b.zZ.PINNED;
        this.updateFlags(e, n);
    },
    async updateFlags(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        o.Z.dispatch({
            type: 'THREAD_UPDATE',
            channel: e.merge({ flags: n })
        });
        let i = { flags: n };
        r && (i.archived = !1);
        try {
            await s.tn.patch({
                url: T.ANM.CHANNEL(e.id),
                body: i,
                rejectWithError: !0
            });
        } catch {
            o.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: e
            });
        }
    },
    async replacePin(e, n) {
        let r = e.merge({ flags: e.flags & ~b.zZ.PINNED }),
            i = n.merge({ flags: n.flags | b.zZ.PINNED });
        o.Z.dispatch({
            type: 'THREAD_UPDATE',
            channel: r
        }),
            o.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: i
            }),
            await this.unarchiveThreadIfNecessary(e.id),
            await this.unarchiveThreadIfNecessary(n.id);
        try {
            await s.tn.patch({
                url: T.ANM.CHANNEL(e.id),
                body: { flags: e.flags & ~b.zZ.PINNED },
                rejectWithError: !0
            });
        } catch {
            o.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: e
            }),
                o.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: n
                });
            return;
        }
        try {
            await s.tn.patch({
                url: T.ANM.CHANNEL(n.id),
                body: { flags: n.flags | b.zZ.PINNED },
                rejectWithError: !0
            });
        } catch {
            o.Z.dispatch({
                type: 'THREAD_UPDATE',
                channel: n
            });
        }
    },
    openThreadCreationForMobile(e, n, r) {
        (0, c.yw)(T.rMx.THREAD_CREATION_STARTED, {
            location: r,
            channel_id: e.id,
            guild_id: e.guild_id
        }),
            u.Z.changeThreadSettings(e.id, {
                parentMessageId: n,
                isPrivate: !1,
                location: r
            }),
            null == n &&
                (0, d.Po)({
                    channelId: e.id,
                    command: null,
                    section: null
                });
    },
    async setNotificationSettings(e, n) {
        return (
            (0, v.ZJ)(e, n),
            !E.Z.hasJoined(e.id) && (await this.joinThread(e, 'Change Notification Settings')),
            s.tn.patch({
                url: T.ANM.THREAD_MEMBER_SETTINGS(e.id),
                body: n,
                rejectWithError: !1
            })
        );
    },
    loadArchivedThreads(e, n, r, i, l) {
        !g.Z.isLoading(n, r, i) &&
            (o.Z.dispatch({
                type: 'LOAD_ARCHIVED_THREADS',
                channelId: n,
                sortOrder: r,
                tagFilter: i
            }),
            s.tn
                .get({
                    url: T.ANM.THREAD_SEARCH(n),
                    query: {
                        archived: !0,
                        sort_by: 'last_message_time',
                        sort_order: 'desc',
                        limit: g.I,
                        tag: i.size > 0 ? Array.from(i).join(',') : void 0,
                        tag_setting: a.z.MATCH_SOME,
                        offset: l
                    },
                    retries: 2,
                    rejectWithError: !0
                })
                .then(
                    (a) => {
                        let {
                            body: { threads: s, members: u, has_more: c, first_messages: d, most_recent_messages: f }
                        } = a;
                        null == s
                            ? o.Z.dispatch({
                                  type: 'LOAD_ARCHIVED_THREADS_FAIL',
                                  channelId: n,
                                  sortOrder: r,
                                  tagFilter: i
                              })
                            : o.Z.dispatch({
                                  type: 'LOAD_ARCHIVED_THREADS_SUCCESS',
                                  guildId: e,
                                  channelId: n,
                                  offset: l,
                                  sortOrder: r,
                                  tagFilter: i,
                                  threads: s,
                                  firstMessages: d,
                                  mostRecentMessages: f,
                                  members: (null != u ? u : []).map((e) => (0, I.Z)(e)),
                                  owners: s.map((e) => e.owner).filter(m.lm),
                                  hasMore: c
                              });
                    },
                    () => {
                        o.Z.dispatch({
                            type: 'LOAD_ARCHIVED_THREADS_FAIL',
                            channelId: n,
                            sortOrder: r,
                            tagFilter: i
                        });
                    }
                ));
    },
    async searchThreads(e, n, r, i) {
        let l = null != i && i.size > 0 ? Array.from(i).join(',') : void 0,
            {
                body: { threads: u, members: c, first_messages: d, most_recent_messages: f }
            } = await s.tn.get({
                url: T.ANM.THREAD_SEARCH(n),
                query: {
                    name: r,
                    tag: l,
                    tag_setting: a.z.MATCH_SOME
                },
                rejectWithError: !1
            });
        return (
            o.Z.dispatch({
                type: 'LOAD_THREADS_SUCCESS',
                threads: u,
                members: c,
                guildId: e,
                firstMessages: d,
                mostRecentMessages: f
            }),
            u.map((e) => e.id)
        );
    }
};
