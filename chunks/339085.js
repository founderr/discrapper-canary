n(47120), n(51350), n(653041), n(627494), n(757143), n(724458);
var r,
    i,
    a,
    s = n(392711),
    o = n.n(s),
    l = n(913527),
    u = n.n(l),
    c = n(956067),
    d = n(442837),
    f = n(570140),
    _ = n(704907),
    p = n(287328),
    h = n(86670),
    m = n(489033),
    g = n(188742),
    E = n(353926),
    v = n(973542),
    I = n(889564),
    b = n(687476),
    S = n(978519),
    T = n(706454),
    y = n(581883),
    A = n(271383),
    N = n(93093),
    C = n(430824),
    R = n(771845),
    O = n(594174),
    D = n(70956),
    L = n(176354),
    x = n(823379),
    w = n(226951),
    M = n(709054),
    P = n(906411),
    k = n(689789),
    U = n(407477),
    G = n(633302),
    B = n(174065),
    Z = n(396352),
    F = n(856985),
    V = n(185923),
    j = n(981631),
    H = n(149203),
    Y = n(526761);
function W(e, t, n) {
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
let K = 'original',
    z = [H.UX.TOP_GUILD_EMOJI.toString(), H.UX.FAVORITES.toString(), H.UX.RECENT.toString(), H.UX.CUSTOM.toString()].concat(G.ZP.getCategories()),
    q = {
        pendingUsages: [],
        emojiReactionPendingUsages: [],
        expandedSectionsByGuildIds: new Set()
    };
class Q {
    getEmoji(e) {
        return this.build(), this._emojiMap[e];
    }
    getUsableEmoji(e) {
        let t = this.getEmoji(e);
        return null != t && this.isUsable(t) ? t : null;
    }
    isUsable(e) {
        if (0 === e.roles.length) return !0;
        let t = A.ZP.getMember(this.id, this._userId);
        return null != t && (!!(t.roles.some((t) => e.roles.includes(t)) || (0, I.yH)(e)) || !1);
    }
    get rawEmojis() {
        return this._emojis;
    }
    get emojis() {
        return this.build(), this._emojis;
    }
    get emoticons() {
        return this.build(), this._emoticons;
    }
    get usableEmojis() {
        return this.build(), this._usableEmojis;
    }
    build() {
        if (!!this._dirty)
            (this._dirty = !1),
                this._emojis.forEach((e) => {
                    (e.allNamesString = ':'.concat(e.name, ':')), (e.guildId = this.id), (e.type = P.B.GUILD), (this._emojiMap[e.id] = e);
                }),
                (this._usableEmojis = o().sortBy(
                    this._emojis.filter((e) => this.isUsable(e)),
                    (e) => e.name
                )),
                (this._emoticons = this._usableEmojis.filter((e) => !e.require_colons));
    }
    constructor(e, t, n, r = !1) {
        W(this, 'id', void 0), W(this, '_userId', void 0), W(this, '_dirty', !0), W(this, '_emojis', void 0), W(this, '_emojiMap', {}), W(this, '_emoticons', []), W(this, '_usableEmojis', []), W(this, '_canSeeServerSubIAP', !1), W(this, '_totalUsable', 0), (this.id = e), (this._userId = t), (this._emojis = n), (this._canSeeServerSubIAP = r);
    }
}
let X = M.default.fromTimestamp(Date.now() - 60 * D.Z.Millis.DAY),
    J = [];
((a = r || (r = {}))[(a.Unloaded = 0)] = 'Unloaded'), (a[(a.MaybeLoaded = 1)] = 'MaybeLoaded'), (a[(a.Loading = 2)] = 'Loading'), (a[(a.Loaded = 3)] = 'Loaded');
let $ = 3,
    ee = z.slice(0),
    et = {},
    en = {},
    er = null,
    ei = new Map();
function ea(e) {
    var t, n;
    let r = es()[e];
    return null != r && null !== (n = null === (t = et[r]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== n ? n : void 0;
}
function es() {
    if ((eo(), null == en)) for (let e in ((en = {}), et)) for (let t of et[e].rawEmojis) en[t.id] = e;
    return en;
}
async function eo() {
    if (0 !== $) return;
    let e = p.Z.database();
    if (null == e) return;
    $ = 2;
    let t = await (0, h.gs)('EmojiStore.loadSavedEmojis', () => c.Z.timeAsync('\uD83D\uDCBE', 'loadSavedEmojis', () => m.Z.getAsync(e)));
    if ((($ = 3), null != t))
        f.Z.dispatch({
            type: 'CACHED_EMOJIS_LOADED',
            emojis: t
        });
}
function el(e) {
    return new _.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => {
            var t;
            return null !== (t = G.ZP.getByName(e)) && void 0 !== t ? t : ea(e);
        },
        afterCompute: () => {
            e(), (ee = z.slice(0)), !o().some(et, (e) => e.usableEmojis.length > 0) && ee.splice(z.indexOf(H.UX.CUSTOM), 1);
        },
        numFrequentlyItems: 42
    });
}
class eu {
    static get(e) {
        return void 0 === e && (e = null), (null == eu._lastInstance || eu._lastInstance.guildId !== e) && (eu._lastInstance = new eu(e)), eu._lastInstance;
    }
    static reset() {
        eu._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != eu._lastInstance && (eu._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != eu._lastInstance && (eu._lastInstance.frequentlyUsedReactionEmojis = null);
    }
    static resetFavorites() {
        null != eu._lastInstance && ((eu._lastInstance.favorites = null), (eu._lastInstance.favoriteNamesAndIds = null));
    }
    static clear(e) {
        null != eu._lastInstance && eu._lastInstance.guildId === e && (eu._lastInstance = null);
    }
    ensureDisambiguated() {
        null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji();
    }
    getDisambiguatedEmoji() {
        return null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji(), this.disambiguatedEmoji;
    }
    getCustomEmoji() {
        return null == this.customEmojis && this._buildDisambiguatedCustomEmoji(), this.customEmojis;
    }
    getGroupedCustomEmoji() {
        return null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji(), this.groupedCustomEmojis;
    }
    getByName(e) {
        if (((null == this.emojisByName || null == this.unicodeAliases) && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisByName, e))) return this.emojisByName[e];
        if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
            let t = this.unicodeAliases[e];
            if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t];
        }
    }
    getEmoticonByName(e) {
        if ((null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emoticonsByName, e))) return this.emoticonsByName[e];
    }
    getById(e) {
        if ((null == this.emojisById && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisById, e))) return this.emojisById[e];
    }
    getCustomEmoticonRegex() {
        return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), null == this.emoticonRegex && null != this.escapedEmoticonNames && '' !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp('^\\b('.concat(this.escapedEmoticonNames, ')\\b'))), this.emoticonRegex;
    }
    getFrequentlyUsedEmojisWithoutFetchingLatest() {
        if ((this.ensureDisambiguated(), null != this.frequentlyUsed)) return this.frequentlyUsed;
        let e = ec.frequently.map((e) => (null != e.id ? this.getById(e.id) : G.ZP.getByName(e.name))).filter(x.lm),
            t = (0, F.Z)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
        if ((this.ensureDisambiguated(), null != this.frequentlyUsedReactionEmojis)) return this.frequentlyUsedReactionEmojis;
        let e = ed.frequently.map((e) => (null != e.id ? this.getById(e.id) : G.ZP.getByName(e.name))).filter(x.lm),
            t = (0, F.Z)(e);
        return (this.frequentlyUsedReactionEmojis = [...t.values()]), this.frequentlyUsedReactionEmojis;
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        var e, t;
        if ((this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds))
            return {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds
            };
        let n = (null !== (t = null === (e = y.Z.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : [])
                .map((e) => {
                    var t;
                    return null !== (t = this.getById(e)) && void 0 !== t ? t : G.ZP.getByName(e);
                })
                .filter(x.lm),
            r = (0, F.Z)(n);
        return (
            (this.favorites = [...r.values()]),
            (this.favoriteNamesAndIds = new Set(r.keys())),
            {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds
            }
        );
    }
    get favoriteEmojisWithoutFetchingLatest() {
        return this.rebuildFavoriteEmojisWithoutFetchingLatest().favorites;
    }
    getEmojiInPriorityOrderWithoutFetchingLatest() {
        let e = (0, U.E2)({
            location: 'getEmojiInPriorityOrderWithoutFetchingLatest',
            autoTrackExposure: !0
        });
        U.Xb.trackExposure({ location: 'getEmojiInPriorityOrderWithoutFetchingLatest' });
        let t = e ? this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest() : this.getFrequentlyUsedEmojisWithoutFetchingLatest(),
            n = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(t).filter((e) => !n.has(e) && (n.add(e), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if ((this.ensureDisambiguated(), null == this.topEmojis)) {
            var t;
            let n = ei.get(e),
                r = Z.Z.getTopEmojiIdsByGuildId(e);
            if (null == n && null == r) return J;
            let i = (null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : r).map((e) => {
                    var t;
                    return null !== (t = this.getById(e)) && void 0 !== t ? t : G.ZP.getByName(G.ZP.convertSurrogateToName(e, !1));
                }),
                a = [];
            i.forEach((e) => {
                null != e && a.push(e);
            });
            let s = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = a.filter((e) => !s.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if ((this.ensureDisambiguated(), null == this.newlyAddedEmoji)) return J;
        let t = this.newlyAddedEmoji[e];
        return null == t ? J : t;
    }
    getEscapedCustomEmoticonNames() {
        return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return o()(this.getDisambiguatedEmoji()).filter((t) => {
            let { id: n, names: r, name: i } = t,
                a = null != r && o().some(r, e),
                s = null != i && e(i),
                l = null != i && o().some(g.Z.getTermsForEmoji(i), e),
                u = null != n && o().some(B.Z.getCaptionsForEmojiById({ emojiId: n }), e);
            return a || s || l || u;
        });
    }
    _buildDisambiguatedCustomEmoji() {
        let e = {},
            t = [];
        (this.emoticonRegex = null), (this.frequentlyUsed = null), (this.frequentlyUsedReactionEmojis = null), (this.disambiguatedEmoji = []), (this.unicodeAliases = Object.create(null)), (this.customEmojis = Object.create(null)), (this.groupedCustomEmojis = Object.create(null)), (this.emoticonsByName = Object.create(null)), (this.emojisByName = Object.create(null)), (this.emojisById = Object.create(null)), (this.newlyAddedEmoji = Object.create(null));
        let n = (t) => {
                var n, r;
                let i = t.name,
                    a = null !== (n = e[i]) && void 0 !== n ? n : 0;
                if (((e[i] = a + 1), a > 0)) {
                    let e = ''.concat(i, '~').concat(a);
                    t = {
                        ...t,
                        name: e,
                        originalName: i,
                        allNamesString: ':'.concat(e, ':')
                    };
                }
                if (((this.emojisByName[t.name] = t), 'names' in t && (null === (r = t.names) || void 0 === r || r.slice(1).forEach((e) => (this.unicodeAliases[e] = t.name))), null != t.id)) {
                    let e, n;
                    if (((this.emojisById[t.id] = t), (this.customEmojis[t.name] = t), t.type === P.B.GUILD)) (e = t.guildId), (n = !0);
                    null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : (this.groupedCustomEmojis[e] = [t]), n && M.default.compare(t.id, X) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : (this.newlyAddedEmoji[e] = [t])));
                }
                null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t);
            },
            r = (e) => {
                if (!Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name)) t.push(w.Z.escape(e.name)), (this.emoticonsByName[e.name] = e);
            };
        G.ZP.forEach(n);
        let i = (e) => {
            let t = et[null == e ? j.kod : e];
            null != t && (o().each(t.usableEmojis, n), o().each(t.emoticons, r));
        };
        for (let e in (i(this.guildId), this.newlyAddedEmoji)) null != this.newlyAddedEmoji[e] ? (this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => M.default.compare(t.id, e.id)).slice(0, 3)) : (this.newlyAddedEmoji[e] = []);
        R.ZP.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && i(e);
        }),
            (this.escapedEmoticonNames = t.join('|'));
    }
    constructor(e) {
        W(this, 'guildId', void 0),
            W(this, 'emoticonRegex', null),
            W(this, 'frequentlyUsed', null),
            W(this, 'favorites', null),
            W(this, 'favoriteNamesAndIds', null),
            W(this, 'topEmojis', null),
            W(this, 'escapedEmoticonNames', null),
            W(this, 'disambiguatedEmoji', null),
            W(this, 'customEmojis', void 0),
            W(this, 'groupedCustomEmojis', void 0),
            W(this, 'emoticonsByName', void 0),
            W(this, 'emojisByName', void 0),
            W(this, 'emojisById', void 0),
            W(this, 'unicodeAliases', void 0),
            W(this, 'newlyAddedEmoji', null),
            W(this, 'frequentlyUsedReactionEmojis', null),
            W(this, 'isFavoriteEmojiWithoutFetchingLatest', (e) => {
                var t;
                if (null == e) return !1;
                let { favoriteNamesAndIds: n } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
                if (null != e.id) return n.has(e.id);
                let r = null !== (t = G.ZP.convertSurrogateToBase(e.surrogates)) && void 0 !== t ? t : e;
                return n.has(r.name);
            }),
            (this.guildId = e);
    }
}
W(eu, '_lastInstance', null);
let ec = el(eu.resetFrequentlyUsed),
    ed = el(eu.resetFrequentlyUsedReactionEmojis);
function ef() {
    (et = {}), (en = {}), eu.reset(), ei.clear(), ($ = 3);
}
function e_(e) {
    if (null != et[e]) delete et[e];
}
function ep() {
    (en = null), eu.reset(), (3 === $ || 1 === $) && (ec.compute(), ed.compute());
}
function eh(e, t) {
    if ((e_(e), eu.clear(e), null == t)) return;
    let n = O.default.getCurrentUser();
    if (null == n) return;
    let r = (0, S.r)(e);
    et[e] = new Q(e, n.id, t, r);
}
function em() {
    var e, t, n, r, i, a;
    let s = null === (t = y.Z.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
    null != s && G.ZP.setDefaultDiversitySurrogate(s), eu.reset();
    let l = y.Z.frecencyWithoutFetchingLatest,
        u = null !== (i = null === (n = l.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== i ? i : {},
        c = null !== (a = null === (r = l.emojiReactionFrecency) || void 0 === r ? void 0 : r.emojis) && void 0 !== a ? a : {};
    ec.overwriteHistory(
        o().mapValues(u, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        q.pendingUsages
    ),
        ed.overwriteHistory(
            o().mapValues(c, (e) => ({
                ...e,
                recentUses: e.recentUses.map(Number).filter((e) => e > 0)
            })),
            q.emojiReactionPendingUsages
        ),
        !(function (e, t) {
            let { canSplitFrecencyList: n } = k.Z.getCurrentConfig({ location: 'populateInitialFrecencyData' }, { autoTrackExposure: !0 }),
                r = (0, U.E2)({
                    location: 'populateInitialFrecencyData',
                    autoTrackExposure: !0
                });
            if ((U.Xb.trackExposure({ location: 'populateInitialFrecencyData' }), o().isEmpty(e) && o().isEmpty(q.pendingUsages) && y.Z.hasLoaded(Y.yP.FRECENCY_AND_FAVORITES_SETTINGS))) for (let e of ['thumbsup', 'thumbsup', 'eyes', 'eyes', 'laughing', 'laughing', 'watermelon', 'fork_and_knife', 'yum', 'weary', 'tired_face', 'poop', '100']) ec.track(e);
            if ((n || r) && o().isEmpty(t) && o().isEmpty(q.emojiReactionPendingUsages) && y.Z.hasLoaded(Y.yP.FRECENCY_AND_FAVORITES_SETTINGS)) for (let e of ['100', '100', 'thumbsup', 'thumbsup', 'thumbsdown', 'thumbsdown', 'heart', 'point_up', 'eyes', 'weary', 'laughing', 'white_check_mark', 'x']) ed.track(e);
        })(u, c);
}
function eg() {
    if (!E.Z.hasLoadedExperiments) return;
    let { frecencyAlgorithm: e } = U.ZP.getCurrentConfig({ location: 'handleExperimentsChange' }, { autoTrackExposure: !0 }),
        t = _.M$[e],
        n = _.KX[e];
    e !== K && ed.replaceEntryComputeFunctions(t, n, 'original' !== e), (K = e);
}
function eE(e) {
    if (null == e) return !1;
    for (let r of e) {
        var t, n;
        let e = null !== (n = null !== (t = r.id) && void 0 !== t ? t : r.uniqueName) && void 0 !== n ? n : r.name;
        null != e &&
            (ec.track(e),
            q.pendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let r = e.length > 0;
    return r && (3 === $ || 1 === $) && ec.compute(), r;
}
function ev(e) {
    let { guildId: t, role: n } = e;
    if (!(0, v.Z)(n)) return !1;
    {
        let e = et[t];
        eh(t, null == e ? void 0 : e.emojis), ep();
    }
}
class eI extends (i = d.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(p.Z, N.Z, A.ZP, C.Z, T.default, b.Z, Z.Z, O.default, E.Z), null != e && (null != e.pendingUsages && (q.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (q.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (q.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([y.Z], em), this.syncWith([E.Z], eg);
    }
    getState() {
        return q;
    }
    get loadState() {
        return $;
    }
    hasPendingUsage() {
        return q.pendingUsages.length > 0 || q.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return q.expandedSectionsByGuildIds;
    }
    get categories() {
        return ee;
    }
    get diversitySurrogate() {
        var e;
        return null !== (e = G.ZP.getDefaultDiversitySurrogate()) && void 0 !== e ? e : '';
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return ec;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return ed;
    }
    getGuildEmoji(e) {
        var t;
        eo();
        let n = et[e];
        return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : [];
    }
    getUsableGuildEmoji(e) {
        var t;
        eo();
        let n = et[e];
        return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : [];
    }
    getGuilds() {
        return et;
    }
    getDisambiguatedEmojiContext(e) {
        return eo(), eu.get(e);
    }
    getSearchResultsOrder(e, t, n, r) {
        let i = t.toLowerCase(),
            a = w.Z.escape(i),
            { canSplitFrecencyList: s } = k.Z.getCurrentConfig({ location: 'getSearchResultsOrder' }, { autoTrackExposure: !0 }),
            l = (0, U.E2)({
                location: 'getSearchResultsOrder',
                autoTrackExposure: !0
            });
        if ((U.Xb.trackExposure({ location: 'getSearchResultsOrder' }), e.length > 0)) {
            let t = RegExp('^'.concat(a), 'i'),
                n = new RegExp('(^|_|[A-Z])'.concat(a, 's?([A-Z]|_|$)')),
                u = n.test.bind(n),
                c = t.test.bind(t),
                d = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    if (null == e || null == t) return 0;
                    let n = e.toLowerCase(),
                        a = 1 + (n === i ? 4 : 0) + (u(n) || u(e) ? 2 : 0) + (c(e) ? 1 : 0),
                        o = r === V.Hz.REACTION && (s || l) ? ed.getScore(t) : ec.getScore(t);
                    return null != o && (a *= o / 100), a;
                };
            e = o().orderBy(e, [(e) => (null != e.names ? d(e.names[0]) : d(e.name, e.id)), (e) => (null != e.names ? e.names[0] : e.name)], ['desc', 'asc']);
        }
        return n > 0 && (e = e.slice(0, n)), e;
    }
    searchWithoutFetchingLatest(e) {
        let t,
            { channel: n, query: r, count: i = 0, intention: a, includeExternalGuilds: s = !0, matchComparator: o } = e;
        eo();
        let l = r.toLowerCase().replaceAll(/[ _]/g, ''),
            u = w.Z.escape(l);
        if (null == o) {
            let e = RegExp(''.concat(u), 'i');
            t = (t) => e.test(t.replaceAll('_', ''));
        } else t = o;
        let c = null != n ? n.getGuildId() : null,
            d = eu
                .get(c)
                .nameMatchesChain(t)
                .reduce(
                    (e, t) => {
                        let r = L.ZP.getEmojiUnavailableReason({
                            emoji: t,
                            channel: n,
                            intention: a,
                            forceIncludeExternalGuilds: s
                        });
                        return r === V.Z5.PREMIUM_LOCKED ? e.locked.push(t) : null == r && e.unlocked.push(t), e;
                    },
                    {
                        unlocked: [],
                        locked: []
                    }
                );
        return {
            unlocked: this.getSearchResultsOrder(d.unlocked, r, i, a),
            locked: this.getSearchResultsOrder(d.locked, r, 0, a)
        };
    }
    getUsableCustomEmojiById(e) {
        return eo(), ea(e);
    }
    getCustomEmojiById(e) {
        return (
            eo(),
            (function (e) {
                var t, n;
                let r = es()[e];
                return null != r && null !== (n = null === (t = et[r]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== n ? n : void 0;
            })(e)
        );
    }
    getTopEmoji(e) {
        return null == e ? J : (eo(), eu.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? J : (eo(), eu.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return ei.get(e);
    }
    getEmojiAutosuggestion(e) {
        if (null != er && er.length > 0) {
            let { locked: t, unlocked: n } = this.searchWithoutFetchingLatest({
                channel: e,
                count: 10,
                query: er,
                intention: V.Hz.CHAT
            });
            return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5);
        }
        return [];
    }
    hasUsableEmojiInAnyGuild() {
        return eo(), M.default.keys(et).some((e) => et[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = eu.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
W(eI, 'displayName', 'EmojiStore'),
    W(eI, 'persistKey', 'EmojiStoreV2'),
    W(eI, 'migrations', [(e) => ({ ...e })]),
    (t.ZP = new eI(f.Z, {
        LOGOUT: function () {
            (q.pendingUsages = []), (q.emojiReactionPendingUsages = []);
        },
        BACKGROUND_SYNC: function () {
            ef();
        },
        CONNECTION_OPEN: function (e) {
            for (let t of (ef(), e.guilds)) eh(t.id, t.emojis);
            ($ = e.guilds.every((e) => null != e.emojis) ? 1 : 0), ep();
        },
        OVERLAY_INITIALIZE: function (e) {
            for (let t in (ef(), e.emojis)) eh(t, e.emojis[t]);
            ($ = 1), ep();
        },
        CACHED_EMOJIS_LOADED: function (e) {
            let { emojis: t } = e;
            for (let [e, n] of t) !Object.hasOwn(et, e) && N.Z.isMember(e) && eh(e, n);
            ep();
        },
        GUILD_MEMBER_UPDATE: function (e) {
            var t;
            let { guildId: n, user: r } = e;
            if (r.id !== (null === (t = O.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
            let i = et[n];
            eh(n, null == i ? void 0 : i.usableEmojis), ep();
        },
        GUILD_CREATE: function (e) {
            1 === $ && null == e.guild.emojis && null != e.guild.emojiUpdates && ($ = 0), eh(e.guild.id, e.guild.emojis), ep();
        },
        GUILD_UPDATE: function (e) {
            eh(e.guild.id, e.guild.emojis), ep();
        },
        GUILD_EMOJIS_UPDATE: function (e) {
            let { guildId: t, emojis: n } = e;
            eh(t, n), ep();
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            e_(t.id), ei.delete(t.id), ep();
        },
        MESSAGE_REACTION_ADD: function (e) {
            if (!e.optimistic) return !1;
            let t = null != e.emoji.id && '0' !== e.emoji.id ? e.emoji : G.ZP.getByName(G.ZP.convertSurrogateToName(e.emoji.name, !1));
            if (null == t) return !1;
            (function (e) {
                if (null == e) return 0;
                for (let r of e) {
                    var t, n;
                    let e = null !== (n = null !== (t = r.id) && void 0 !== t ? t : r.uniqueName) && void 0 !== n ? n : r.name;
                    null != e &&
                        (ed.track(e),
                        q.emojiReactionPendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        }));
                }
                let r = e.length > 0;
                r && (3 === $ || 1 === $) && ed.compute();
            })([t]),
                eE([t]);
        },
        EMOJI_TRACK_USAGE: function (e) {
            let { emojiUsed: t } = e;
            eE(t);
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                wasSaved: n
            } = e;
            if ((g.Z.setEmojiLocale(T.default.locale), t !== Y.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
            (q.pendingUsages = []), (q.emojiReactionPendingUsages = []);
        },
        GUILD_ROLE_CREATE: ev,
        GUILD_ROLE_UPDATE: ev,
        TOP_EMOJIS_FETCH_SUCCESS: function (e) {
            let { guildId: t, topEmojisMetadata: n } = e;
            ei.set(t, {
                emojiIds: n.map((e) => e.emojiId),
                topEmojisTTL: u()(u()()).add(1, 'days').valueOf()
            });
        },
        EMOJI_AUTOSUGGESTION_UPDATE: function (e) {
            let { text: t } = e;
            er = t;
        },
        TOGGLE_GUILD_EXPANDED_STATE: function (e) {
            let { guildId: t } = e,
                n = new Set(q.expandedSectionsByGuildIds);
            q.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t),
                (q = {
                    ...q,
                    expandedSectionsByGuildIds: n
                });
        }
    }));
