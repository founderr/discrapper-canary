e.d(t, {
    o: function () {
        return R;
    },
    t: function () {
        return G;
    }
}),
    e(47120),
    e(653041);
var i = e(192379),
    l = e(392711),
    o = e.n(l),
    r = e(524437),
    u = e(317381),
    a = e(853856),
    d = e(846787),
    E = e(924301),
    s = e(601070),
    c = e(569471),
    _ = e(131704),
    C = e(680089),
    A = e(592125),
    S = e(58468),
    I = e(77498),
    T = e(496675),
    L = e(306680),
    h = e(944486),
    g = e(9156),
    f = e(823379),
    p = e(540126),
    O = e(647086),
    N = e(231338);
let b = 12633 == e.j ? [u.ZP, a.Z, E.ZP, s.Z, c.Z, C.Z, A.Z, I.Z, T.Z, L.ZP, h.Z, g.ZP] : null;
function R() {
    let [n, t] = i.useState(() => G());
    return (
        i.useEffect(() => {
            let n = o().throttle(() => t(G()), 100);
            return b.forEach((t) => t.addChangeListener(n)), () => b.forEach((t) => t.removeChangeListener(n));
        }, []),
        n
    );
}
function G() {
    let n = a.Z.getFavoriteChannels(),
        t = g.ZP.isGuildCollapsed(O._),
        e = h.Z.getChannelId(),
        i = A.Z.getChannel(e),
        l = h.Z.getVoiceChannelId(),
        u = [],
        E = {};
    for (let t in n) {
        let e = n[t],
            i = A.Z.getChannel(e.id);
        if (null == i || e.type === r.Dd.CATEGORY) continue;
        let l = (0, d.r)(n, e, i);
        if (null == e.parentId || !(e.parentId in n)) {
            u.push(l);
            continue;
        }
        !(e.parentId in E) && (E[e.parentId] = []), E[e.parentId].push(l);
    }
    function c(e, r) {
        let { isCollapsed: u, isMuted: a } = r;
        return o()(e)
            .map((e) => {
                var d;
                if (!e.isPrivate() && !T.Z.can(N.Pl.VIEW_CHANNEL, e)) return null;
                let E = null != i && (i.id === e.id || l === e.id),
                    c = null != i && i.isThread() && i.parent_id === e.id,
                    C = null !== (d = E || c || !u ? s.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id) : s.Z.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) && void 0 !== d ? d : {},
                    A = (0, p.zR)(e, C, i, l, t),
                    I = S.Z.isCollapsed(e.id),
                    h = g.ZP.isChannelMuted(e.guild_id, e.id),
                    f = {
                        id: e.id,
                        record: e,
                        category: r,
                        position: n[e.id].order,
                        threadIds: A,
                        threadCount: o().size(A),
                        isCollapsed: I,
                        isMuted: h,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, p.Bz)(e, I, !1)
                    };
                return E || c || L.ZP.getMentionCount(e.id) > 0 ? f : (t && h) || (u && (h || a || (0, _.vd)(e.type) || ((0, _.vc)(e.type) && !1 === L.ZP.hasUnread(e.id)))) ? null : f;
            })
            .filter(f.lm)
            .sortBy((n) => {
                let { record: t } = n;
                return t.isGuildVocal() ? t.position + 10000 : t.position;
            })
            .value();
    }
    let I = null,
        b = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((n) => n.id),
            getShownChannelAndThreadIds: () => u.map((n) => n.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
                return null == I && (I = c(u, this)), I;
            }
        },
        R = o()(n)
            .values()
            .filter((n) => n.type === r.Dd.CATEGORY)
            .sortBy((n) => n.order)
            .map((n) => {
                var t;
                let { id: e, order: i } = n,
                    l = a.Z.getCategoryRecord(e),
                    o = null !== (t = E[e]) && void 0 !== t ? t : [],
                    r = g.ZP.isChannelMuted(O._, e),
                    u = C.Z.isCollapsed(e),
                    d = null;
                return {
                    isMuted: r,
                    isCollapsed: u,
                    record: l,
                    id: e,
                    position: i,
                    getChannelRecords: () => o,
                    getShownChannelIds: () => o.map((n) => n.id),
                    getShownChannelAndThreadIds: () => o.map((n) => n.id),
                    isEmpty: () => 0 === o.length,
                    get channelList() {
                        return null == d && (d = c(o, this)), d;
                    }
                };
            })
            .value(),
        G = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        Z = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: O._,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let n = [];
            (n[p.Fq] = 0), (n[p.wZ] = 0), (n[p.p2] = 0), (n[p.PB] = 0), (n[p.wd] = b.channelList.length);
            for (let t = 0; t < R.length; t++) n[p.wF + t] = Math.max(1, R[t].channelList.length);
            return n;
        },
        isPlaceholderRow: (n, t) => !(n < p.wF) && 0 === t && 0 === R[n - p.wF].channelList.length,
        getCategoryFromSection: (n) => (n === p.wd ? b : R[n - p.wF]),
        getNamedCategoryFromSection: (n) => R[n - p.wF],
        getChannelFromSectionRow(n, t) {
            let e = this.getCategoryFromSection(n);
            return null == e || null == e.channelList[t]
                ? null
                : {
                      category: e,
                      channel: e.channelList[t]
                  };
        },
        getGuildActionSection: () => G,
        getChannelNoticeSection: () => Z,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(n) {
            let t = [b, ...R];
            for (let e = 0; e < t.length; e++)
                for (let i = 0; i < t[e].channelList.length; i++)
                    if (t[e].channelList[i].id === n)
                        return [
                            {
                                section: e + p.wd,
                                row: i
                            }
                        ];
            return [];
        },
        forEachShownChannel(n) {
            for (let t of [b, ...R])
                for (let e of t.channelList)
                    for (let t of (n(e.record), e.threadIds)) {
                        let e = A.Z.getChannel(t);
                        null != e && n(e);
                    }
        },
        forEachChannel(n) {
            for (let t of [b, ...R]) for (let e of t.getChannelRecords()) n(e);
        },
        getSlicedChannels: (n) => [[], n, []],
        getChannels: () => []
    };
}
