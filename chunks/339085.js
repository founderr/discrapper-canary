var r,
    i,
    a = n(47120);
var o = n(51350);
var s = n(653041);
var l = n(627494);
var u = n(757143);
var c = n(724458);
var d = n(392711),
    _ = n.n(d),
    E = n(913527),
    f = n.n(E),
    h = n(956067),
    p = n(442837),
    m = n(570140),
    I = n(704907),
    T = n(287328),
    g = n(86670),
    S = n(489033),
    A = n(188742),
    v = n(353926),
    N = n(973542),
    O = n(889564),
    R = n(687476),
    C = n(978519),
    y = n(706454),
    L = n(581883),
    b = n(271383),
    D = n(93093),
    M = n(430824),
    P = n(771845),
    U = n(594174),
    w = n(70956),
    x = n(176354),
    G = n(823379),
    k = n(226951),
    B = n(709054),
    F = n(906411),
    Z = n(689789),
    V = n(407477),
    H = n(633302),
    Y = n(174065),
    j = n(396352),
    W = n(347374),
    K = n(185923),
    z = n(981631),
    q = n(149203),
    Q = n(526761);
function X(e, t, n) {
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
let $ = 'original',
    J = [q.UX.TOP_GUILD_EMOJI.toString(), q.UX.FAVORITES.toString(), q.UX.RECENT.toString(), q.UX.CUSTOM.toString()].concat(H.ZP.getCategories()),
    ee = {
        pendingUsages: [],
        emojiReactionPendingUsages: [],
        expandedSectionsByGuildIds: new Set()
    };
class et {
    getEmoji(e) {
        return this.build(), this._emojiMap[e];
    }
    getUsableEmoji(e) {
        let t = this.getEmoji(e);
        return null != t && this.isUsable(t) ? t : null;
    }
    isUsable(e) {
        if (0 === e.roles.length) return !0;
        let t = b.ZP.getMember(this.id, this._userId);
        return null != t && (!!(t.roles.some((t) => e.roles.includes(t)) || (0, O.yH)(e)) || !1);
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
                    (e.allNamesString = ':'.concat(e.name, ':')), (e.guildId = this.id), (e.type = F.B.GUILD), (this._emojiMap[e.id] = e);
                }),
                (this._usableEmojis = _().sortBy(
                    this._emojis.filter((e) => this.isUsable(e)),
                    (e) => e.name
                )),
                (this._emoticons = this._usableEmojis.filter((e) => !e.require_colons));
    }
    constructor(e, t, n, r = !1) {
        X(this, 'id', void 0), X(this, '_userId', void 0), X(this, '_dirty', !0), X(this, '_emojis', void 0), X(this, '_emojiMap', {}), X(this, '_emoticons', []), X(this, '_usableEmojis', []), X(this, '_canSeeServerSubIAP', !1), X(this, '_totalUsable', 0), (this.id = e), (this._userId = t), (this._emojis = n), (this._canSeeServerSubIAP = r);
    }
}
let en = 42,
    er = B.default.fromTimestamp(Date.now() - 60 * w.Z.Millis.DAY),
    ei = [];
!(function (e) {
    (e[(e.Unloaded = 0)] = 'Unloaded'), (e[(e.MaybeLoaded = 1)] = 'MaybeLoaded'), (e[(e.Loading = 2)] = 'Loading'), (e[(e.Loaded = 3)] = 'Loaded');
})(r || (r = {}));
let ea = 3,
    eo = J.slice(0),
    es = {},
    el = {},
    eu = null,
    ec = new Map();
function ed(e) {
    var t, n;
    let r = eE()[e];
    return null != r && null !== (n = null === (t = es[r]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== n ? n : void 0;
}
function e_(e) {
    var t, n;
    let r = eE()[e];
    return null != r && null !== (n = null === (t = es[r]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== n ? n : void 0;
}
function eE() {
    if ((ef(), null == el)) for (let e in ((el = {}), es)) for (let t of es[e].rawEmojis) el[t.id] = e;
    return el;
}
async function ef() {
    if (0 !== ea) return;
    let e = T.Z.database();
    if (null == e) return;
    ea = 2;
    let t = await (0, g.gs)('EmojiStore.loadSavedEmojis', () => h.Z.timeAsync('\uD83D\uDCBE', 'loadSavedEmojis', () => S.Z.getAsync(e)));
    if (((ea = 3), null != t))
        m.Z.dispatch({
            type: 'CACHED_EMOJIS_LOADED',
            emojis: t
        });
}
function eh(e) {
    let { emojis: t } = e;
    for (let [e, n] of t) !Object.hasOwn(es, e) && D.Z.isMember(e) && ev(e, n);
    eA();
}
function ep(e) {
    return new I.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => {
            var t;
            return null !== (t = H.ZP.getByName(e)) && void 0 !== t ? t : e_(e);
        },
        afterCompute: () => {
            e(), (eo = J.slice(0)), !_().some(es, (e) => e.usableEmojis.length > 0) && eo.splice(J.indexOf(q.UX.CUSTOM), 1);
        },
        numFrequentlyItems: en
    });
}
class em {
    static get(e) {
        return void 0 === e && (e = null), (null == em._lastInstance || em._lastInstance.guildId !== e) && (em._lastInstance = new em(e)), em._lastInstance;
    }
    static reset() {
        em._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != em._lastInstance && (em._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != em._lastInstance && (em._lastInstance.frequentlyUsedReactionEmojis = null);
    }
    static resetFavorites() {
        null != em._lastInstance && ((em._lastInstance.favorites = null), (em._lastInstance.favoriteNamesAndIds = null));
    }
    static clear(e) {
        null != em._lastInstance && em._lastInstance.guildId === e && (em._lastInstance = null);
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
        let e = eI.frequently.map((e) => (null != e.id ? this.getById(e.id) : H.ZP.getByName(e.name))).filter(G.lm),
            t = (0, W.Z)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
        if ((this.ensureDisambiguated(), null != this.frequentlyUsedReactionEmojis)) return this.frequentlyUsedReactionEmojis;
        let e = eT.frequently.map((e) => (null != e.id ? this.getById(e.id) : H.ZP.getByName(e.name))).filter(G.lm),
            t = (0, W.Z)(e);
        return (this.frequentlyUsedReactionEmojis = [...t.values()]), this.frequentlyUsedReactionEmojis;
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        var e, t;
        if ((this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds))
            return {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds
            };
        let n = (null !== (t = null === (e = L.Z.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : [])
                .map((e) => {
                    var t;
                    return null !== (t = this.getById(e)) && void 0 !== t ? t : H.ZP.getByName(e);
                })
                .filter(G.lm),
            r = (0, W.Z)(n);
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
        let e = (0, V.E2)({
                location: 'getEmojiInPriorityOrderWithoutFetchingLatest',
                autoTrackExposure: !0
            })
                ? this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest()
                : this.getFrequentlyUsedEmojisWithoutFetchingLatest(),
            t = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(e).filter((e) => !t.has(e) && (t.add(e), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if ((this.ensureDisambiguated(), null == this.topEmojis)) {
            var t;
            let n = ec.get(e),
                r = j.Z.getTopEmojiIdsByGuildId(e);
            if (null == n && null == r) return ei;
            let i = (null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : r).map((e) => {
                    var t;
                    return null !== (t = this.getById(e)) && void 0 !== t ? t : H.ZP.getByName(H.ZP.convertSurrogateToName(e, !1));
                }),
                a = [];
            i.forEach((e) => {
                null != e && a.push(e);
            });
            let o = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = a.filter((e) => !o.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if ((this.ensureDisambiguated(), null == this.newlyAddedEmoji)) return ei;
        let t = this.newlyAddedEmoji[e];
        return null == t ? ei : t;
    }
    getEscapedCustomEmoticonNames() {
        return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return _()(this.getDisambiguatedEmoji()).filter((t) => {
            let { id: n, names: r, name: i } = t,
                a = null != r && _().some(r, e),
                o = null != i && e(i),
                s = null != i && _().some(A.Z.getTermsForEmoji(i), e),
                l = null != n && _().some(Y.Z.getCaptionsForEmojiById({ emojiId: n }), e);
            return a || o || s || l;
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
                    if (((this.emojisById[t.id] = t), (this.customEmojis[t.name] = t), t.type === F.B.GUILD)) (e = t.guildId), (n = !0);
                    null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : (this.groupedCustomEmojis[e] = [t]), n && B.default.compare(t.id, er) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : (this.newlyAddedEmoji[e] = [t])));
                }
                null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t);
            },
            r = (e) => {
                if (!Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name)) t.push(k.Z.escape(e.name)), (this.emoticonsByName[e.name] = e);
            };
        H.ZP.forEach(n);
        let i = (e) => {
            let t = es[null == e ? z.kod : e];
            null != t && (_().each(t.usableEmojis, n), _().each(t.emoticons, r));
        };
        for (let e in (i(this.guildId), this.newlyAddedEmoji)) null != this.newlyAddedEmoji[e] ? (this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => B.default.compare(t.id, e.id)).slice(0, 3)) : (this.newlyAddedEmoji[e] = []);
        P.ZP.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && i(e);
        }),
            (this.escapedEmoticonNames = t.join('|'));
    }
    constructor(e) {
        X(this, 'guildId', void 0),
            X(this, 'emoticonRegex', null),
            X(this, 'frequentlyUsed', null),
            X(this, 'favorites', null),
            X(this, 'favoriteNamesAndIds', null),
            X(this, 'topEmojis', null),
            X(this, 'escapedEmoticonNames', null),
            X(this, 'disambiguatedEmoji', null),
            X(this, 'customEmojis', void 0),
            X(this, 'groupedCustomEmojis', void 0),
            X(this, 'emoticonsByName', void 0),
            X(this, 'emojisByName', void 0),
            X(this, 'emojisById', void 0),
            X(this, 'unicodeAliases', void 0),
            X(this, 'newlyAddedEmoji', null),
            X(this, 'frequentlyUsedReactionEmojis', null),
            X(this, 'isFavoriteEmojiWithoutFetchingLatest', (e) => {
                var t;
                if (null == e) return !1;
                let { favoriteNamesAndIds: n } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
                if (null != e.id) return n.has(e.id);
                let r = null !== (t = H.ZP.convertSurrogateToBase(e.surrogates)) && void 0 !== t ? t : e;
                return n.has(r.name);
            }),
            (this.guildId = e);
    }
}
X(em, '_lastInstance', null);
let eI = ep(em.resetFrequentlyUsed),
    eT = ep(em.resetFrequentlyUsedReactionEmojis);
function eg() {
    (es = {}), (el = {}), em.reset(), ec.clear(), (ea = 3);
}
function eS(e) {
    if (null != es[e]) delete es[e];
}
function eA() {
    (el = null), em.reset(), (3 === ea || 1 === ea) && (eI.compute(), eT.compute());
}
function ev(e, t) {
    if ((eS(e), em.clear(e), null == t)) return;
    let n = U.default.getCurrentUser();
    if (null == n) return;
    let r = (0, C.r)(e);
    es[e] = new et(e, n.id, t, r);
}
function eN(e) {
    for (let t of (eg(), e.guilds)) ev(t.id, t.emojis);
    (ea = e.guilds.every((e) => null != e.emojis) ? 1 : 0), eA();
}
function eO() {
    (ee.pendingUsages = []), (ee.emojiReactionPendingUsages = []);
}
function eR() {
    eg();
}
function eC(e) {
    1 === ea && null == e.guild.emojis && null != e.guild.emojiUpdates && (ea = 0), ev(e.guild.id, e.guild.emojis), eA();
}
function ey(e) {
    ev(e.guild.id, e.guild.emojis), eA();
}
function eL(e) {
    let { guildId: t, emojis: n } = e;
    ev(t, n), eA();
}
function eb(e) {
    let { guild: t } = e;
    eS(t.id), ec.delete(t.id), eA();
}
function eD(e) {
    var t;
    let { guildId: n, user: r } = e;
    if (r.id !== (null === (t = U.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
    let i = es[n];
    ev(n, null == i ? void 0 : i.usableEmojis), eA();
}
function eM(e) {
    if (!e.optimistic) return !1;
    let t = null != e.emoji.id && '0' !== e.emoji.id ? e.emoji : H.ZP.getByName(H.ZP.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    eB([t]), ek([t]);
}
function eP(e, t) {
    let { canSplitFrecencyList: n } = Z.Z.getCurrentConfig({ location: 'populateInitialFrecencyData' }, { autoTrackExposure: !0 }),
        r = (0, V.E2)({
            location: 'populateInitialFrecencyData',
            autoTrackExposure: !0
        });
    if (_().isEmpty(e) && _().isEmpty(ee.pendingUsages) && L.Z.hasLoaded(Q.yP.FRECENCY_AND_FAVORITES_SETTINGS)) for (let e of ['thumbsup', 'thumbsup', 'eyes', 'eyes', 'laughing', 'laughing', 'watermelon', 'fork_and_knife', 'yum', 'weary', 'tired_face', 'poop', '100']) eI.track(e);
    if ((n || r) && _().isEmpty(t) && _().isEmpty(ee.emojiReactionPendingUsages) && L.Z.hasLoaded(Q.yP.FRECENCY_AND_FAVORITES_SETTINGS)) for (let e of ['100', '100', 'thumbsup', 'thumbsup', 'thumbsdown', 'thumbsdown', 'heart', 'point_up', 'eyes', 'weary', 'laughing', 'white_check_mark', 'x']) eT.track(e);
}
function eU() {
    var e, t, n, r, i, a;
    let o = null === (t = L.Z.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
    null != o && H.ZP.setDefaultDiversitySurrogate(o), em.reset();
    let s = L.Z.frecencyWithoutFetchingLatest,
        l = null !== (i = null === (n = s.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== i ? i : {},
        u = null !== (a = null === (r = s.emojiReactionFrecency) || void 0 === r ? void 0 : r.emojis) && void 0 !== a ? a : {};
    eI.overwriteHistory(
        _().mapValues(l, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        ee.pendingUsages
    ),
        eT.overwriteHistory(
            _().mapValues(u, (e) => ({
                ...e,
                recentUses: e.recentUses.map(Number).filter((e) => e > 0)
            })),
            ee.emojiReactionPendingUsages
        ),
        eP(l, u);
}
function ew(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if ((A.Z.setEmojiLocale(y.default.locale), t !== Q.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
    (ee.pendingUsages = []), (ee.emojiReactionPendingUsages = []);
}
function ex() {
    if (!v.Z.hasLoadedExperiments) return;
    let { frecencyAlgorithm: e } = V.ZP.getCurrentConfig({ location: 'handleExperimentsChange' }, { autoTrackExposure: !0 }),
        t = I.M$[e],
        n = I.KX[e],
        r = 'original' !== e;
    e !== $ && eT.replaceEntryComputeFunctions(t, n, r), ($ = e);
}
function eG(e) {
    let { emojiUsed: t } = e;
    ek(t);
}
function ek(e) {
    if (null == e) return !1;
    for (let r of e) {
        var t, n;
        let e = null !== (n = null !== (t = r.id) && void 0 !== t ? t : r.uniqueName) && void 0 !== n ? n : r.name;
        null != e &&
            (eI.track(e),
            ee.pendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let r = e.length > 0;
    return r && (3 === ea || 1 === ea) && eI.compute(), r;
}
function eB(e) {
    if (null == e) return !1;
    for (let r of e) {
        var t, n;
        let e = null !== (n = null !== (t = r.id) && void 0 !== t ? t : r.uniqueName) && void 0 !== n ? n : r.name;
        null != e &&
            (eT.track(e),
            ee.emojiReactionPendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let r = e.length > 0;
    return r && (3 === ea || 1 === ea) && eT.compute(), r;
}
function eF(e) {
    let { guildId: t, role: n } = e;
    if (!(0, N.Z)(n)) return !1;
    {
        let e = es[t];
        ev(t, null == e ? void 0 : e.emojis), eA();
    }
}
function eZ(e) {
    let { guildId: t } = e,
        n = new Set(ee.expandedSectionsByGuildIds);
    ee.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t),
        (ee = {
            ...ee,
            expandedSectionsByGuildIds: n
        });
}
function eV(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    ec.set(t, {
        emojiIds: n.map((e) => e.emojiId),
        topEmojisTTL: f()(f()()).add(1, 'days').valueOf()
    });
}
function eH(e) {
    let { text: t } = e;
    eu = t;
}
class eY extends (i = p.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(T.Z, D.Z, b.ZP, M.Z, y.default, R.Z, j.Z, U.default, v.Z), null != e && (null != e.pendingUsages && (ee.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (ee.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (ee.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([L.Z], eU), this.syncWith([v.Z], ex);
    }
    getState() {
        return ee;
    }
    get loadState() {
        return ea;
    }
    hasPendingUsage() {
        return ee.pendingUsages.length > 0 || ee.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return ee.expandedSectionsByGuildIds;
    }
    get categories() {
        return eo;
    }
    get diversitySurrogate() {
        var e;
        return null !== (e = H.ZP.getDefaultDiversitySurrogate()) && void 0 !== e ? e : '';
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return eI;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return eT;
    }
    getGuildEmoji(e) {
        var t;
        ef();
        let n = es[e];
        return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : [];
    }
    getUsableGuildEmoji(e) {
        var t;
        ef();
        let n = es[e];
        return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : [];
    }
    getGuilds() {
        return es;
    }
    getDisambiguatedEmojiContext(e) {
        return ef(), em.get(e);
    }
    getSearchResultsOrder(e, t, n, r) {
        let i = t.toLowerCase(),
            a = k.Z.escape(i),
            { canSplitFrecencyList: o } = Z.Z.getCurrentConfig({ location: 'getSearchResultsOrder' }, { autoTrackExposure: !0 }),
            s = (0, V.E2)({
                location: 'getSearchResultsOrder',
                autoTrackExposure: !0
            });
        if (e.length > 0) {
            let t = RegExp('^'.concat(a), 'i'),
                n = new RegExp('(^|_|[A-Z])'.concat(a, 's?([A-Z]|_|$)')),
                l = n.test.bind(n),
                u = t.test.bind(t),
                c = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    if (null == e || null == t) return 0;
                    let n = e.toLowerCase(),
                        a = 1 + (n === i ? 4 : 0) + (l(n) || l(e) ? 2 : 0) + (u(e) ? 1 : 0),
                        c = r === K.Hz.REACTION && (o || s) ? eT.getScore(t) : eI.getScore(t);
                    return null != c && (a *= c / 100), a;
                };
            e = _().orderBy(e, [(e) => (null != e.names ? c(e.names[0]) : c(e.name, e.id)), (e) => (null != e.names ? e.names[0] : e.name)], ['desc', 'asc']);
        }
        return n > 0 && (e = e.slice(0, n)), e;
    }
    searchWithoutFetchingLatest(e) {
        let t,
            { channel: n, query: r, count: i = 0, intention: a, includeExternalGuilds: o = !0, matchComparator: s } = e;
        ef();
        let l = r.toLowerCase().replaceAll(/[ _]/g, ''),
            u = k.Z.escape(l);
        if (null == s) {
            let e = RegExp(''.concat(u), 'i');
            t = (t) => e.test(t.replaceAll('_', ''));
        } else t = s;
        let c = null != n ? n.getGuildId() : null,
            d = em
                .get(c)
                .nameMatchesChain(t)
                .reduce(
                    (e, t) => {
                        let r = x.ZP.getEmojiUnavailableReason({
                            emoji: t,
                            channel: n,
                            intention: a,
                            forceIncludeExternalGuilds: o
                        });
                        return r === K.Z5.PREMIUM_LOCKED ? e.locked.push(t) : null == r && e.unlocked.push(t), e;
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
        return ef(), e_(e);
    }
    getCustomEmojiById(e) {
        return ef(), ed(e);
    }
    getTopEmoji(e) {
        return null == e ? ei : (ef(), em.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? ei : (ef(), em.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return ec.get(e);
    }
    getEmojiAutosuggestion(e) {
        if (null != eu && eu.length > 0) {
            let { locked: t, unlocked: n } = this.searchWithoutFetchingLatest({
                channel: e,
                count: 10,
                query: eu,
                intention: K.Hz.CHAT
            });
            return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5);
        }
        return [];
    }
    hasUsableEmojiInAnyGuild() {
        return ef(), B.default.keys(es).some((e) => es[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = em.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
X(eY, 'displayName', 'EmojiStore'),
    X(eY, 'persistKey', 'EmojiStoreV2'),
    X(eY, 'migrations', [(e) => ({ ...e })]),
    (t.ZP = new eY(m.Z, {
        LOGOUT: eO,
        BACKGROUND_SYNC: eR,
        CONNECTION_OPEN: eN,
        CACHED_EMOJIS_LOADED: eh,
        GUILD_MEMBER_UPDATE: eD,
        GUILD_CREATE: eC,
        GUILD_UPDATE: ey,
        GUILD_EMOJIS_UPDATE: eL,
        GUILD_DELETE: eb,
        MESSAGE_REACTION_ADD: eM,
        EMOJI_TRACK_USAGE: eG,
        USER_SETTINGS_PROTO_UPDATE: ew,
        GUILD_ROLE_CREATE: eF,
        GUILD_ROLE_UPDATE: eF,
        TOP_EMOJIS_FETCH_SUCCESS: eV,
        EMOJI_AUTOSUGGESTION_UPDATE: eH,
        TOGGLE_GUILD_EXPANDED_STATE: eZ
    }));
