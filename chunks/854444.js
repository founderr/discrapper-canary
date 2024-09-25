t.d(n, {
    o: function () {
        return p;
    },
    t: function () {
        return P;
    }
}),
    t(47120),
    t(653041);
var i = t(470079),
    o = t(392711),
    l = t.n(o),
    E = t(524437),
    r = t(317381),
    a = t(853856),
    u = t(846787),
    d = t(924301),
    s = t(601070),
    _ = t(569471),
    c = t(131704),
    A = t(680089),
    C = t(592125),
    S = t(58468),
    I = t(77498),
    T = t(496675),
    L = t(306680),
    N = t(944486),
    O = t(9156),
    D = t(823379),
    g = t(540126),
    R = t(647086),
    f = t(231338);
let h = 12633 == t.j ? [r.ZP, a.Z, d.ZP, s.Z, _.Z, A.Z, C.Z, I.Z, T.Z, L.ZP, N.Z, O.ZP] : null;
function p() {
    let [e, n] = i.useState(() => P());
    return (
        i.useEffect(() => {
            let e = l().throttle(() => n(P()), 100);
            return h.forEach((n) => n.addChangeListener(e)), () => h.forEach((n) => n.removeChangeListener(e));
        }, []),
        e
    );
}
function P() {
    let e = a.Z.getFavoriteChannels(),
        n = O.ZP.isGuildCollapsed(R._),
        t = N.Z.getChannelId(),
        i = C.Z.getChannel(t),
        o = N.Z.getVoiceChannelId(),
        r = [],
        d = {};
    for (let n in e) {
        let t = e[n],
            i = C.Z.getChannel(t.id);
        if (null == i || t.type === E.Dd.CATEGORY) continue;
        let o = (0, u.r)(e, t, i);
        if (null == t.parentId || !(t.parentId in e)) {
            r.push(o);
            continue;
        }
        !(t.parentId in d) && (d[t.parentId] = []), d[t.parentId].push(o);
    }
    function _(t, E) {
        let { isCollapsed: r, isMuted: a } = E;
        return l()(t)
            .map((t) => {
                var u;
                if (!t.isPrivate() && !T.Z.can(f.Pl.VIEW_CHANNEL, t)) return null;
                let d = null != i && (i.id === t.id || o === t.id),
                    _ = null != i && i.isThread() && i.parent_id === t.id,
                    A = null !== (u = d || _ || !r ? s.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id) : s.Z.getActiveJoinedUnreadThreadsForParent(t.guild_id, t.id)) && void 0 !== u ? u : {},
                    C = (0, g.zR)(t, A, i, o, n),
                    I = S.Z.isCollapsed(t.id),
                    N = O.ZP.isChannelMuted(t.guild_id, t.id),
                    D = {
                        id: t.id,
                        record: t,
                        category: E,
                        position: e[t.id].order,
                        threadIds: C,
                        threadCount: l().size(C),
                        isCollapsed: I,
                        isMuted: N,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, g.Bz)(t, I, !1)
                    };
                return d || _ || L.ZP.getMentionCount(t.id) > 0 ? D : (n && N) || (r && (N || a || (0, c.vd)(t.type) || ((0, c.vc)(t.type) && !1 === L.ZP.hasUnread(t.id)))) ? null : D;
            })
            .filter(D.lm)
            .sortBy((e) => {
                let { record: n } = e;
                return n.isGuildVocal() ? n.position + 10000 : n.position;
            })
            .value();
    }
    let I = null,
        h = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => r,
            getShownChannelIds: () => r.map((e) => e.id),
            getShownChannelAndThreadIds: () => r.map((e) => e.id),
            isEmpty: () => 0 === r.length,
            get channelList() {
                return null == I && (I = _(r, this)), I;
            }
        },
        p = l()(e)
            .values()
            .filter((e) => e.type === E.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var n;
                let { id: t, order: i } = e,
                    o = a.Z.getCategoryRecord(t),
                    l = null !== (n = d[t]) && void 0 !== n ? n : [],
                    E = O.ZP.isChannelMuted(R._, t),
                    r = A.Z.isCollapsed(t),
                    u = null;
                return {
                    isMuted: E,
                    isCollapsed: r,
                    record: o,
                    id: t,
                    position: i,
                    getChannelRecords: () => l,
                    getShownChannelIds: () => l.map((e) => e.id),
                    getShownChannelAndThreadIds: () => l.map((e) => e.id),
                    isEmpty: () => 0 === l.length,
                    get channelList() {
                        return null == u && (u = _(l, this)), u;
                    }
                };
            })
            .value(),
        P = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        G = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: R._,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[g.Fq] = 0), (e[g.wZ] = 0), (e[g.p2] = 0), (e[g.PB] = 0), (e[g.wd] = h.channelList.length);
            for (let n = 0; n < p.length; n++) e[g.wF + n] = Math.max(1, p[n].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, n) => !(e < g.wF) && 0 === n && 0 === p[e - g.wF].channelList.length,
        getCategoryFromSection: (e) => (e === g.wd ? h : p[e - g.wF]),
        getNamedCategoryFromSection: (e) => p[e - g.wF],
        getChannelFromSectionRow(e, n) {
            let t = this.getCategoryFromSection(e);
            return null == t || null == t.channelList[n]
                ? null
                : {
                      category: t,
                      channel: t.channelList[n]
                  };
        },
        getGuildActionSection: () => P,
        getChannelNoticeSection: () => G,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let n = [h, ...p];
            for (let t = 0; t < n.length; t++)
                for (let i = 0; i < n[t].channelList.length; i++)
                    if (n[t].channelList[i].id === e)
                        return [
                            {
                                section: t + g.wd,
                                row: i
                            }
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let n of [h, ...p])
                for (let t of n.channelList)
                    for (let n of (e(t.record), t.threadIds)) {
                        let t = C.Z.getChannel(n);
                        null != t && e(t);
                    }
        },
        forEachChannel(e) {
            for (let n of [h, ...p]) for (let t of n.getChannelRecords()) e(t);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
