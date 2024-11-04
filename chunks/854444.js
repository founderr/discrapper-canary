t.d(n, {
    o: function () {
        return O;
    },
    t: function () {
        return R;
    }
}),
    t(47120),
    t(653041);
var l = t(192379),
    i = t(392711),
    o = t.n(i),
    a = t(524437),
    u = t(317381),
    r = t(853856),
    d = t(846787),
    c = t(924301),
    s = t(601070),
    E = t(569471),
    C = t(131704),
    _ = t(680089),
    h = t(592125),
    S = t(58468),
    I = t(77498),
    A = t(496675),
    T = t(306680),
    f = t(944486),
    L = t(9156),
    g = t(823379),
    Z = t(540126),
    p = t(647086),
    P = t(231338);
let N = 12633 == t.j ? [u.ZP, r.Z, c.ZP, s.Z, E.Z, _.Z, h.Z, I.Z, A.Z, T.ZP, f.Z, L.ZP] : null;
function O() {
    let [e, n] = l.useState(() => R());
    return (
        l.useEffect(() => {
            let e = o().throttle(() => n(R()), 100);
            return N.forEach((n) => n.addChangeListener(e)), () => N.forEach((n) => n.removeChangeListener(e));
        }, []),
        e
    );
}
function R() {
    let e = r.Z.getFavoriteChannels(),
        n = L.ZP.isGuildCollapsed(p._),
        t = f.Z.getChannelId(),
        l = h.Z.getChannel(t),
        i = f.Z.getVoiceChannelId(),
        u = [],
        c = {};
    for (let n in e) {
        let t = e[n],
            l = h.Z.getChannel(t.id);
        if (null == l || t.type === a.Dd.CATEGORY) continue;
        let i = (0, d.r)(e, t, l);
        if (null == t.parentId || !(t.parentId in e)) {
            u.push(i);
            continue;
        }
        !(t.parentId in c) && (c[t.parentId] = []), c[t.parentId].push(i);
    }
    function E(t, a) {
        let { isCollapsed: u, isMuted: r } = a;
        return o()(t)
            .map((t) => {
                var d;
                if (!t.isPrivate() && !A.Z.can(P.Pl.VIEW_CHANNEL, t)) return null;
                let c = null != l && (l.id === t.id || i === t.id),
                    E = null != l && l.isThread() && l.parent_id === t.id,
                    _ = null !== (d = c || E || !u ? s.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id) : s.Z.getActiveJoinedUnreadThreadsForParent(t.guild_id, t.id)) && void 0 !== d ? d : {},
                    h = (0, Z.zR)(t, _, l, i, n),
                    I = S.Z.isCollapsed(t.id),
                    f = L.ZP.isChannelMuted(t.guild_id, t.id),
                    g = {
                        id: t.id,
                        record: t,
                        category: a,
                        position: e[t.id].order,
                        threadIds: h,
                        threadCount: o().size(h),
                        isCollapsed: I,
                        isMuted: f,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, Z.Bz)(t, I, !1)
                    };
                return c || E || T.ZP.getMentionCount(t.id) > 0 ? g : (n && f) || (u && (f || r || (0, C.vd)(t.type) || ((0, C.vc)(t.type) && !1 === T.ZP.hasUnread(t.id)))) ? null : g;
            })
            .filter(g.lm)
            .sortBy((e) => {
                let { record: n } = e;
                return n.isGuildVocal() ? n.position + 10000 : n.position;
            })
            .value();
    }
    let I = null,
        N = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
                return null == I && (I = E(u, this)), I;
            }
        },
        O = o()(e)
            .values()
            .filter((e) => e.type === a.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var n;
                let { id: t, order: l } = e,
                    i = r.Z.getCategoryRecord(t),
                    o = null !== (n = c[t]) && void 0 !== n ? n : [],
                    a = L.ZP.isChannelMuted(p._, t),
                    u = _.Z.isCollapsed(t),
                    d = null;
                return {
                    isMuted: a,
                    isCollapsed: u,
                    record: i,
                    id: t,
                    position: l,
                    getChannelRecords: () => o,
                    getShownChannelIds: () => o.map((e) => e.id),
                    getShownChannelAndThreadIds: () => o.map((e) => e.id),
                    isEmpty: () => 0 === o.length,
                    get channelList() {
                        return null == d && (d = E(o, this)), d;
                    }
                };
            })
            .value(),
        R = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        b = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: p._,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[Z.Fq] = 0), (e[Z.wZ] = 0), (e[Z.p2] = 0), (e[Z.PB] = 0), (e[Z.wd] = N.channelList.length);
            for (let n = 0; n < O.length; n++) e[Z.wF + n] = Math.max(1, O[n].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, n) => !(e < Z.wF) && 0 === n && 0 === O[e - Z.wF].channelList.length,
        getCategoryFromSection: (e) => (e === Z.wd ? N : O[e - Z.wF]),
        getNamedCategoryFromSection: (e) => O[e - Z.wF],
        getChannelFromSectionRow(e, n) {
            let t = this.getCategoryFromSection(e);
            return null == t || null == t.channelList[n]
                ? null
                : {
                      category: t,
                      channel: t.channelList[n]
                  };
        },
        getGuildActionSection: () => R,
        getChannelNoticeSection: () => b,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let n = [N, ...O];
            for (let t = 0; t < n.length; t++)
                for (let l = 0; l < n[t].channelList.length; l++)
                    if (n[t].channelList[l].id === e)
                        return [
                            {
                                section: t + Z.wd,
                                row: l
                            }
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let n of [N, ...O])
                for (let t of n.channelList)
                    for (let n of (e(t.record), t.threadIds)) {
                        let t = h.Z.getChannel(n);
                        null != t && e(t);
                    }
        },
        forEachChannel(e) {
            for (let n of [N, ...O]) for (let t of n.getChannelRecords()) e(t);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
