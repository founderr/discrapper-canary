t.d(n, {
    o: function () {
        return p;
    },
    t: function () {
        return Z;
    }
}),
    t(47120),
    t(653041);
var i = t(192379),
    l = t(392711),
    o = t.n(l),
    E = t(524437),
    r = t(317381),
    a = t(853856),
    u = t(846787),
    s = t(924301),
    d = t(601070),
    _ = t(569471),
    c = t(131704),
    C = t(680089),
    I = t(592125),
    A = t(58468),
    S = t(77498),
    T = t(496675),
    L = t(306680),
    N = t(944486),
    O = t(9156),
    g = t(823379),
    h = t(540126),
    D = t(647086),
    R = t(231338);
let f = 12633 == t.j ? [r.ZP, a.Z, s.ZP, d.Z, _.Z, C.Z, I.Z, S.Z, T.Z, L.ZP, N.Z, O.ZP] : null;
function p() {
    let [e, n] = i.useState(() => Z());
    return (
        i.useEffect(() => {
            let e = o().throttle(() => n(Z()), 100);
            return f.forEach((n) => n.addChangeListener(e)), () => f.forEach((n) => n.removeChangeListener(e));
        }, []),
        e
    );
}
function Z() {
    let e = a.Z.getFavoriteChannels(),
        n = O.ZP.isGuildCollapsed(D._),
        t = N.Z.getChannelId(),
        i = I.Z.getChannel(t),
        l = N.Z.getVoiceChannelId(),
        r = [],
        s = {};
    for (let n in e) {
        let t = e[n],
            i = I.Z.getChannel(t.id);
        if (null == i || t.type === E.Dd.CATEGORY) continue;
        let l = (0, u.r)(e, t, i);
        if (null == t.parentId || !(t.parentId in e)) {
            r.push(l);
            continue;
        }
        !(t.parentId in s) && (s[t.parentId] = []), s[t.parentId].push(l);
    }
    function _(t, E) {
        let { isCollapsed: r, isMuted: a } = E;
        return o()(t)
            .map((t) => {
                var u;
                if (!t.isPrivate() && !T.Z.can(R.Pl.VIEW_CHANNEL, t)) return null;
                let s = null != i && (i.id === t.id || l === t.id),
                    _ = null != i && i.isThread() && i.parent_id === t.id,
                    C = null !== (u = s || _ || !r ? d.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id) : d.Z.getActiveJoinedUnreadThreadsForParent(t.guild_id, t.id)) && void 0 !== u ? u : {},
                    I = (0, h.zR)(t, C, i, l, n),
                    S = A.Z.isCollapsed(t.id),
                    N = O.ZP.isChannelMuted(t.guild_id, t.id),
                    g = {
                        id: t.id,
                        record: t,
                        category: E,
                        position: e[t.id].order,
                        threadIds: I,
                        threadCount: o().size(I),
                        isCollapsed: S,
                        isMuted: N,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, h.Bz)(t, S, !1)
                    };
                return s || _ || L.ZP.getMentionCount(t.id) > 0 ? g : (n && N) || (r && (N || a || (0, c.vd)(t.type) || ((0, c.vc)(t.type) && !1 === L.ZP.hasUnread(t.id)))) ? null : g;
            })
            .filter(g.lm)
            .sortBy((e) => {
                let { record: n } = e;
                return n.isGuildVocal() ? n.position + 10000 : n.position;
            })
            .value();
    }
    let S = null,
        f = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => r,
            getShownChannelIds: () => r.map((e) => e.id),
            getShownChannelAndThreadIds: () => r.map((e) => e.id),
            isEmpty: () => 0 === r.length,
            get channelList() {
                return null == S && (S = _(r, this)), S;
            }
        },
        p = o()(e)
            .values()
            .filter((e) => e.type === E.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var n;
                let { id: t, order: i } = e,
                    l = a.Z.getCategoryRecord(t),
                    o = null !== (n = s[t]) && void 0 !== n ? n : [],
                    E = O.ZP.isChannelMuted(D._, t),
                    r = C.Z.isCollapsed(t),
                    u = null;
                return {
                    isMuted: E,
                    isCollapsed: r,
                    record: l,
                    id: t,
                    position: i,
                    getChannelRecords: () => o,
                    getShownChannelIds: () => o.map((e) => e.id),
                    getShownChannelAndThreadIds: () => o.map((e) => e.id),
                    isEmpty: () => 0 === o.length,
                    get channelList() {
                        return null == u && (u = _(o, this)), u;
                    }
                };
            })
            .value(),
        Z = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        P = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: D._,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[h.Fq] = 0), (e[h.wZ] = 0), (e[h.p2] = 0), (e[h.PB] = 0), (e[h.wd] = f.channelList.length);
            for (let n = 0; n < p.length; n++) e[h.wF + n] = Math.max(1, p[n].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, n) => !(e < h.wF) && 0 === n && 0 === p[e - h.wF].channelList.length,
        getCategoryFromSection: (e) => (e === h.wd ? f : p[e - h.wF]),
        getNamedCategoryFromSection: (e) => p[e - h.wF],
        getChannelFromSectionRow(e, n) {
            let t = this.getCategoryFromSection(e);
            return null == t || null == t.channelList[n]
                ? null
                : {
                      category: t,
                      channel: t.channelList[n]
                  };
        },
        getGuildActionSection: () => Z,
        getChannelNoticeSection: () => P,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let n = [f, ...p];
            for (let t = 0; t < n.length; t++)
                for (let i = 0; i < n[t].channelList.length; i++)
                    if (n[t].channelList[i].id === e)
                        return [
                            {
                                section: t + h.wd,
                                row: i
                            }
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let n of [f, ...p])
                for (let t of n.channelList)
                    for (let n of (e(t.record), t.threadIds)) {
                        let t = I.Z.getChannel(n);
                        null != t && e(t);
                    }
        },
        forEachChannel(e) {
            for (let n of [f, ...p]) for (let t of n.getChannelRecords()) e(t);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
