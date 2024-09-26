n.d(t, {
    As: function () {
        return r;
    },
    ZP: function () {
        return $;
    },
    hC: function () {
        return V;
    },
    jd: function () {
        return i;
    }
});
var r,
    i,
    a = n(653041);
var o = n(47120);
var s = n(470079),
    l = n(836560);
var u = n(512722),
    c = n.n(u),
    d = n(392711),
    _ = n.n(d),
    E = n(570140),
    f = n(904245),
    h = n(45114),
    p = n(607070),
    m = n(853856),
    I = n(181945),
    T = n(220444),
    g = n(601070),
    S = n(344185),
    A = n(569471),
    v = n(723170),
    N = n(675478),
    O = n(581883),
    R = n(131704),
    C = n(592125),
    y = n(984933),
    L = n(731290),
    b = n(430824),
    D = n(375954),
    M = n(496675),
    P = n(306680),
    U = n(771845),
    w = n(9156),
    x = n(70956),
    G = n(823379),
    k = n(709054),
    B = n(981631),
    F = n(124368);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
!(function (e) {
    (e[(e.Favorite = 0)] = 'Favorite'), (e[(e.PrivateChannel = 1)] = 'PrivateChannel'), (e[(e.Mentioned = 2)] = 'Mentioned'), (e[(e.AllMessagesNotifications = 3)] = 'AllMessagesNotifications'), (e[(e.GuildChannel = 4)] = 'GuildChannel'), (e[(e.OldChannel = 5)] = 'OldChannel'), (e[(e.NoNotifications = 6)] = 'NoNotifications'), (e[(e.ReallyOldChannel = 7)] = 'ReallyOldChannel');
})(r || (r = {})),
    !(function (e) {
        (e.Loading = 'loading'), (e.Loaded = 'loaded'), (e.Done = 'done');
    })(i || (i = {}));
let V = 25;
class H extends l.EventEmitter {
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ('loaded' !== e) return;
        let n = !1,
            r = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    return e.hasLoadedAnything
                        ? e
                        : {
                              ...e,
                              hasLoadedAnything: !0
                          };
                return (e = this.populateInitialStateFromStore(e)).isFullyLoaded ? e : (c()('nsfw' !== e.type, 'this channel should already be loaded'), 'messages' === e.type && this.loadChannelMessages(e) && (n = !0), e);
            });
        (!n || r.some((e, n) => e !== t[n])) &&
            this.setState({
                channels: r,
                loadState: n ? this.state.loadState : 'done'
            });
    }
    populateInitialStateFromStore(e) {
        if ('messages' === e.type) return Y(e, !1);
        if ('nsfw' === e.type)
            return {
                ...e,
                isFullyLoaded: !0,
                hasLoadedAnything: !0
            };
        if ('forum' === e.type) {
            let t = S.Z.hasLoaded(e.guildId);
            return {
                ...e,
                isFullyLoaded: t,
                hasLoadedAnything: t
            };
        } else (0, G.vE)(e);
    }
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    loadChannelMessages(e) {
        f.Z.clearChannel(e.channelId);
        let t = f.Z.fetchMessages({
            channelId: e.channelId,
            limit: B.AQB,
            jump: {
                messageId: e.oldestReadMessageId,
                flash: !0
            }
        });
        return (
            null != t &&
            !1 !== t &&
            (this.setState({ loadState: 'loading' }),
            t.then(
                (t) => {
                    this.setState({
                        loadState: 'loaded',
                        channels: this.updateChannel(e.channelId, (e) => {
                            c()('messages' === e.type, 'channel cannot change type');
                            let n = Y(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = {
                                        ...n,
                                        hasLoadedAnything: !0,
                                        isFullyLoaded: !0,
                                        hasError: !t
                                    }),
                                n
                            );
                        })
                    });
                },
                () => {
                    this.setState({
                        loadState: 'loaded',
                        channels: this.updateChannel(e.channelId, (e) => {
                            var t;
                            return (
                                c()('messages' === e.type, 'channel cannot change type'),
                                {
                                    ...Y(e, !0),
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: null === (t = e.messages[e.messages.length - 1]) || void 0 === t ? void 0 : t.id
                                }
                            );
                        })
                    });
                }
            ),
            !0)
        );
    }
    updateChannel(e, t) {
        return this.state.channels.map((n) => (n.channelId === e ? t(n) : n));
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = {
                    ...this.state,
                    ...e
                }),
                    this.emit('change', this.state);
                return;
            }
    }
    constructor(e, t) {
        super(),
            Z(this, 'state', void 0),
            Z(this, 'scrollerRef', void 0),
            Z(this, 'maybeLoadMore', void 0),
            Z(this, 'reloadMessages', void 0),
            Z(this, 'getNumUnreadChannels', void 0),
            Z(this, 'markChannelRead', void 0),
            Z(this, 'markGuildRead', void 0),
            Z(this, 'deleteChannel', void 0),
            Z(this, 'markAllRead', void 0),
            Z(this, 'toggle', void 0),
            Z(this, 'handleUserGuildSettingsStoreChange', void 0),
            Z(this, 'handleJoinedThreadsStoreChange', void 0),
            Z(this, 'handleActiveThreadsStoreChange', void 0),
            (this.state = e),
            (this.scrollerRef = t),
            (this.maybeLoadMore = () => {
                var e;
                let t = null === (e = this.scrollerRef.current) || void 0 === e ? void 0 : e.getScrollerState();
                if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 2000 && this.loadMore();
            }),
            (this.reloadMessages = () => {
                this.setState({ channels: this.state.channels.map((e) => ('messages' === e.type && e.hasLoadedAnything ? Y(e, !1, !0) : e)) });
            }),
            (this.getNumUnreadChannels = () => this.state.channels.length),
            (this.markChannelRead = (e) => {
                let { channelId: t, newestUnreadMessageId: n } = e;
                if ((E.Z.wait(() => h.In(t, !0, void 0, n, { section: B.jXE.INBOX })), 1 === this.state.channels.length)) {
                    this.deleteChannel(t);
                    return;
                }
                this.setState({
                    channels: this.updateChannel(t, (e) => ({
                        ...e,
                        deleted: !0
                    }))
                }),
                    p.Z.useReducedMotion && this.deleteChannel(t),
                    this.maybeLoadMore();
            }),
            (this.markGuildRead = (e) => {
                E.Z.wait(() => (0, I.Z)([e], B.jXE.INBOX)), this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }), this.maybeLoadMore();
            }),
            (this.deleteChannel = (e) => {
                this.setState({
                    scrollToChannelIndex: _().findIndex(this.state.channels, (t) => t.channelId === e),
                    channels: this.state.channels.filter((t) => t.channelId !== e)
                }),
                    this.maybeLoadMore();
            }),
            (this.markAllRead = () => {
                h.y5(
                    this.state.channels.map((e) => ({
                        channelId: e.channelId,
                        messageId: e.newestUnreadMessageId
                    }))
                ),
                    this.setState({ channels: [] });
            }),
            (this.toggle = (e) => {
                let { channelId: t, guildId: n } = e,
                    { channels: r, collapsedChannels: i, loadState: a } = this.state,
                    o = _().findIndex(r, (e) => e.channelId === t),
                    s = r[o],
                    l = !s.collapsed;
                (i[t] = l),
                    (0, N.BU)(
                        n,
                        t,
                        (e) => {
                            e.collapsedInInbox = l;
                        },
                        N.fy.FREQUENT_USER_ACTION
                    ),
                    this.setState({
                        scrollToChannelIndex: o,
                        collapsedChannels: i,
                        loadState: 'done' !== a || l || s.isFullyLoaded ? a : 'loaded',
                        channels: this.updateChannel(t, (e) => ({
                            ...e,
                            collapsed: l
                        }))
                    }),
                    s.collapsed ? !s.isFullyLoaded && this.loadMore() : this.maybeLoadMore();
            }),
            (this.handleUserGuildSettingsStoreChange = () => {
                let e = this.state.channels.filter((e) => !w.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
                e.length !== this.state.channels.length && this.setState({ channels: e });
            }),
            (this.handleJoinedThreadsStoreChange = () => {
                let e = this.state.channels.filter((e) => !A.Z.isMuted(e.channelId));
                e.length !== this.state.channels.length && this.setState({ channels: e });
            }),
            (this.handleActiveThreadsStoreChange = () => {
                let e = this.state.channels.map((e) => {
                    if ('forum' !== e.type) return e;
                    {
                        let t = S.Z.hasLoaded(e.guildId);
                        return {
                            ...e,
                            isFullyLoaded: t,
                            hasLoadedAnything: t
                        };
                    }
                });
                this.setState({ channels: e });
            });
    }
}
function Y(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = D.Z.getMessages(e.channelId),
        a = i.toArray().filter((t) => k.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= k.default.compare(t.id, e.newestUnreadMessageId));
    if (a.length === e.messages.length && a.every((t, n) => e.messages[n] === t) && r) return e;
    let o = null != i.getAfter(e.oldestReadMessageId) || (null === (n = a[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
        s = a[a.length - 1],
        l = k.default.compare(null == s ? void 0 : s.id, e.newestUnreadMessageId) >= 0 || a.length >= V;
    return {
        ...e,
        messages: a,
        hasLoadedAnything: e.hasLoadedAnything || o || t,
        hasLoadedFirst: e.hasLoadedFirst || o || t,
        isFullyLoaded: e.isFullyLoaded || (o && l) || (t && !i.hasMoreAfter)
    };
}
function j() {
    let e = W(),
        t = K(e),
        n = _()
            .uniq(t.map((e) => e.guildId))
            .filter(G.lm);
    return (
        E.Z.dispatch({
            type: 'INBOX_OPEN',
            guildIds: n
        }),
        {
            collapsedChannels: e,
            loadState: 'loaded',
            channels: t,
            scrollToChannelIndex: null
        }
    );
}
function W() {
    var e, t;
    let n = {},
        r = null !== (t = null === (e = O.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
    for (let e in r)
        for (let t in r[e].channels) {
            let i = C.Z.getChannel(t);
            (!(t in n) || (null == i ? void 0 : i.guild_id) === e) && (n[t] = r[e].channels[t].collapsedInInbox);
        }
    return n;
}
function K(e) {
    let t = [];
    return (
        C.Z.getSortedPrivateChannels().forEach((n) => z(e, t, null, n.id)),
        U.ZP.getFlattenedGuildIds().forEach((n) => {
            if (null == n) return;
            let r = y.ZP.getSelectableChannelIds(n),
                i = g.Z.getActiveJoinedUnreadThreadsForGuild(n);
            r.forEach((r) => {
                var a;
                z(e, t, n, r);
                let o = null !== (a = i[r]) && void 0 !== a ? a : {};
                for (let r in o) z(e, t, n, r);
            });
        }),
        _().sortBy(t, (e) => e.sortOrder)
    );
}
function z(e, t, n, r) {
    if (null == r) return;
    let i = C.Z.getChannel(r);
    if (null == i || (!R.Ec.has(i.type) && w.ZP.isGuildOrCategoryOrChannelMuted(n, i.id))) return;
    if (i.isPrivate()) {
        if (0 === P.ZP.getMentionCount(r)) return;
    } else if (!(0, T.d)(i) && 0 === P.ZP.getMentionCount(r)) return;
    if (!i.isPrivate() && !M.Z.can(B.Plq.READ_MESSAGE_HISTORY, i)) return;
    let a = P.ZP.ackMessageId(r);
    if (null == a) {
        let e = b.Z.getGuild(i.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = k.default.fromTimestamp(e.joinedAt.getTime());
    }
    let o = P.ZP.getOldestUnreadMessageId(r),
        s = P.ZP.lastMessageId(r),
        l = P.ZP.getMentionCount(r),
        u = l > 0 || i.isPrivate();
    if (null == s || k.default.compare(a, s) >= 0) return;
    let c = {
        guildId: n,
        channelId: r,
        oldestReadMessageId: a,
        oldestUnreadMessageId: o,
        newestUnreadMessageId: s,
        collapsed: !0 === e[r],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: u,
        mentionCount: l,
        sortOrder: X(n, r, s)
    };
    i.isNSFW() && !L.Z.didAgree(i.guild_id)
        ? t.push({
              ...c,
              type: 'nsfw'
          })
        : i.isForumLikeChannel()
          ? t.push({
                ...c,
                type: 'forum'
            })
          : t.push({
                ...c,
                type: 'messages',
                messages: []
            });
}
let q = 2 * x.Z.Millis.DAY,
    Q = 10 * x.Z.Millis.DAY;
function X(e, t, n) {
    let r = C.Z.getChannel(t);
    if (m.Z.isFavorite(t)) return 0;
    if (r.isPrivate()) return 1;
    if (P.ZP.getMentionCount(t) > 0) return 2;
    if (null != n) {
        let e = k.default.extractTimestamp(n);
        if (Date.now() - e > Q) return 7;
        if (Date.now() - e > q) return 5;
    }
    if (r.isThread()) {
        let e = (0, v.J)(r);
        return e === F.iN.ALL_MESSAGES ? 3 : e === F.iN.NO_MESSAGES ? 6 : 4;
    }
    {
        let n = w.ZP.getChannelMessageNotifications(e, t),
            r = n === B.bL.NULL ? w.ZP.getMessageNotifications(e) : n;
        return r === B.bL.ALL_MESSAGES ? 3 : r === B.bL.NO_MESSAGES ? 6 : 4;
    }
}
function $(e) {
    let [t, n] = s.useState(() => new H(j(), e)),
        [r, i] = s.useState(!1),
        a = s.useRef(Date.now()),
        [o, l] = s.useState(() => j());
    return (
        s.useEffect(() => {
            let e = (e) => l(e);
            return (
                t.on('change', e),
                l(t.state),
                () => {
                    t.off('change', e);
                }
            );
        }, [t]),
        s.useEffect(() => {
            if (null == o || o.channels.length > 0 || r) return;
            let t = Date.now(),
                s = j();
            0 === s.channels.length || t - a.current < 10 * x.Z.Millis.SECOND ? i(!0) : ((a.current = Date.now()), n(new H(s, e)));
        }, [o, r, e]),
        s.useLayoutEffect(t.maybeLoadMore, [null == o ? void 0 : o.channels, null == o ? void 0 : o.loadState]),
        s.useEffect(() => (D.Z.addChangeListener(t.reloadMessages), () => D.Z.removeChangeListener(t.reloadMessages)), [t.reloadMessages]),
        s.useEffect(() => (w.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange), () => w.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]),
        s.useEffect(() => (A.Z.addChangeListener(t.handleJoinedThreadsStoreChange), () => A.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]),
        s.useEffect(() => (S.Z.addChangeListener(t.handleActiveThreadsStoreChange), () => S.Z.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]),
        [o, t]
    );
}
