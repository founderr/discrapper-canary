var i,
    a,
    s = r(47120);
var o = r(51350);
var l = r(653041);
var u = r(627494);
var c = r(757143);
var d = r(724458);
var f = r(392711),
    _ = r.n(f),
    h = r(913527),
    p = r.n(h),
    m = r(956067),
    g = r(442837),
    E = r(570140),
    v = r(704907),
    I = r(287328),
    T = r(86670),
    b = r(489033),
    y = r(188742),
    S = r(353926),
    A = r(973542),
    N = r(889564),
    C = r(687476),
    R = r(978519),
    O = r(706454),
    D = r(581883),
    L = r(271383),
    x = r(93093),
    w = r(430824),
    P = r(771845),
    M = r(594174),
    k = r(70956),
    U = r(176354),
    B = r(823379),
    G = r(226951),
    Z = r(709054),
    F = r(906411),
    V = r(689789),
    j = r(407477),
    H = r(633302),
    Y = r(174065),
    W = r(396352),
    K = r(856985),
    z = r(185923),
    q = r(981631),
    Q = r(149203),
    X = r(526761);
function J(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let $ = 'original',
    ee = [Q.UX.TOP_GUILD_EMOJI.toString(), Q.UX.FAVORITES.toString(), Q.UX.RECENT.toString(), Q.UX.CUSTOM.toString()].concat(H.ZP.getCategories()),
    et = {
        pendingUsages: [],
        emojiReactionPendingUsages: [],
        expandedSectionsByGuildIds: new Set()
    };
class en {
    getEmoji(e) {
        return this.build(), this._emojiMap[e];
    }
    getUsableEmoji(e) {
        let n = this.getEmoji(e);
        return null != n && this.isUsable(n) ? n : null;
    }
    isUsable(e) {
        if (0 === e.roles.length) return !0;
        let n = L.ZP.getMember(this.id, this._userId);
        return null != n && (!!(n.roles.some((n) => e.roles.includes(n)) || (0, N.yH)(e)) || !1);
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
    constructor(e, n, r, i = !1) {
        J(this, 'id', void 0), J(this, '_userId', void 0), J(this, '_dirty', !0), J(this, '_emojis', void 0), J(this, '_emojiMap', {}), J(this, '_emoticons', []), J(this, '_usableEmojis', []), J(this, '_canSeeServerSubIAP', !1), J(this, '_totalUsable', 0), (this.id = e), (this._userId = n), (this._emojis = r), (this._canSeeServerSubIAP = i);
    }
}
let er = 42,
    ei = Z.default.fromTimestamp(Date.now() - 60 * k.Z.Millis.DAY),
    ea = [];
!(function (e) {
    (e[(e.Unloaded = 0)] = 'Unloaded'), (e[(e.MaybeLoaded = 1)] = 'MaybeLoaded'), (e[(e.Loading = 2)] = 'Loading'), (e[(e.Loaded = 3)] = 'Loaded');
})(i || (i = {}));
let es = 3,
    eo = ee.slice(0),
    el = {},
    eu = {},
    ec = null,
    ed = new Map();
function ef(e) {
    var n, r;
    let i = eh()[e];
    return null != i && null !== (r = null === (n = el[i]) || void 0 === n ? void 0 : n.getEmoji(e)) && void 0 !== r ? r : void 0;
}
function e_(e) {
    var n, r;
    let i = eh()[e];
    return null != i && null !== (r = null === (n = el[i]) || void 0 === n ? void 0 : n.getUsableEmoji(e)) && void 0 !== r ? r : void 0;
}
function eh() {
    if ((ep(), null == eu)) for (let e in ((eu = {}), el)) for (let n of el[e].rawEmojis) eu[n.id] = e;
    return eu;
}
async function ep() {
    if (0 !== es) return;
    let e = I.Z.database();
    if (null == e) return;
    es = 2;
    let n = await (0, T.gs)('EmojiStore.loadSavedEmojis', () => m.Z.timeAsync('\uD83D\uDCBE', 'loadSavedEmojis', () => b.Z.getAsync(e)));
    if (((es = 3), null != n))
        E.Z.dispatch({
            type: 'CACHED_EMOJIS_LOADED',
            emojis: n
        });
}
function em(e) {
    let { emojis: n } = e;
    for (let [e, r] of n) !Object.hasOwn(el, e) && x.Z.isMember(e) && eS(e, r);
    ey();
}
function eg(e) {
    return new v.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let n = 1;
            return e <= 3 ? (n = 100) : e <= 15 ? (n = 70) : e <= 30 ? (n = 50) : e <= 45 ? (n = 30) : e <= 80 && (n = 10), n;
        },
        lookupKey: (e) => {
            var n;
            return null !== (n = H.ZP.getByName(e)) && void 0 !== n ? n : e_(e);
        },
        afterCompute: () => {
            e(), (eo = ee.slice(0)), !_().some(el, (e) => e.usableEmojis.length > 0) && eo.splice(ee.indexOf(Q.UX.CUSTOM), 1);
        },
        numFrequentlyItems: er
    });
}
class eE {
    static get(e) {
        return void 0 === e && (e = null), (null == eE._lastInstance || eE._lastInstance.guildId !== e) && (eE._lastInstance = new eE(e)), eE._lastInstance;
    }
    static reset() {
        eE._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != eE._lastInstance && (eE._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != eE._lastInstance && (eE._lastInstance.frequentlyUsedReactionEmojis = null);
    }
    static resetFavorites() {
        null != eE._lastInstance && ((eE._lastInstance.favorites = null), (eE._lastInstance.favoriteNamesAndIds = null));
    }
    static clear(e) {
        null != eE._lastInstance && eE._lastInstance.guildId === e && (eE._lastInstance = null);
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
            let n = this.unicodeAliases[e];
            if (Object.prototype.hasOwnProperty.call(this.emojisByName, n)) return this.emojisByName[n];
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
        let e = ev.frequently.map((e) => (null != e.id ? this.getById(e.id) : H.ZP.getByName(e.name))).filter(B.lm),
            n = (0, K.Z)(e);
        return (this.frequentlyUsed = [...n.values()]), this.frequentlyUsed;
    }
    getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
        if ((this.ensureDisambiguated(), null != this.frequentlyUsedReactionEmojis)) return this.frequentlyUsedReactionEmojis;
        let e = eI.frequently.map((e) => (null != e.id ? this.getById(e.id) : H.ZP.getByName(e.name))).filter(B.lm),
            n = (0, K.Z)(e);
        return (this.frequentlyUsedReactionEmojis = [...n.values()]), this.frequentlyUsedReactionEmojis;
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        var e, n;
        if ((this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds))
            return {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds
            };
        let r = (null !== (n = null === (e = D.Z.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== n ? n : [])
                .map((e) => {
                    var n;
                    return null !== (n = this.getById(e)) && void 0 !== n ? n : H.ZP.getByName(e);
                })
                .filter(B.lm),
            i = (0, K.Z)(r);
        return (
            (this.favorites = [...i.values()]),
            (this.favoriteNamesAndIds = new Set(i.keys())),
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
        let e = (0, j.E2)({
            location: 'getEmojiInPriorityOrderWithoutFetchingLatest',
            autoTrackExposure: !0
        });
        j.Xb.trackExposure({ location: 'getEmojiInPriorityOrderWithoutFetchingLatest' });
        let n = e ? this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest() : this.getFrequentlyUsedEmojisWithoutFetchingLatest(),
            r = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(n).filter((e) => !r.has(e) && (r.add(e), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if ((this.ensureDisambiguated(), null == this.topEmojis)) {
            var n;
            let r = ed.get(e),
                i = W.Z.getTopEmojiIdsByGuildId(e);
            if (null == r && null == i) return ea;
            let a = (null !== (n = null == r ? void 0 : r.emojiIds) && void 0 !== n ? n : i).map((e) => {
                    var n;
                    return null !== (n = this.getById(e)) && void 0 !== n ? n : H.ZP.getByName(H.ZP.convertSurrogateToName(e, !1));
                }),
                s = [];
            a.forEach((e) => {
                null != e && s.push(e);
            });
            let o = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = s.filter((e) => !o.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if ((this.ensureDisambiguated(), null == this.newlyAddedEmoji)) return ea;
        let n = this.newlyAddedEmoji[e];
        return null == n ? ea : n;
    }
    getEscapedCustomEmoticonNames() {
        return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return _()(this.getDisambiguatedEmoji()).filter((n) => {
            let { id: r, names: i, name: a } = n,
                s = null != i && _().some(i, e),
                o = null != a && e(a),
                l = null != a && _().some(y.Z.getTermsForEmoji(a), e),
                u = null != r && _().some(Y.Z.getCaptionsForEmojiById({ emojiId: r }), e);
            return s || o || l || u;
        });
    }
    _buildDisambiguatedCustomEmoji() {
        let e = {},
            n = [];
        (this.emoticonRegex = null), (this.frequentlyUsed = null), (this.frequentlyUsedReactionEmojis = null), (this.disambiguatedEmoji = []), (this.unicodeAliases = Object.create(null)), (this.customEmojis = Object.create(null)), (this.groupedCustomEmojis = Object.create(null)), (this.emoticonsByName = Object.create(null)), (this.emojisByName = Object.create(null)), (this.emojisById = Object.create(null)), (this.newlyAddedEmoji = Object.create(null));
        let r = (n) => {
                var r, i;
                let a = n.name,
                    s = null !== (r = e[a]) && void 0 !== r ? r : 0;
                if (((e[a] = s + 1), s > 0)) {
                    let e = ''.concat(a, '~').concat(s);
                    n = {
                        ...n,
                        name: e,
                        originalName: a,
                        allNamesString: ':'.concat(e, ':')
                    };
                }
                if (((this.emojisByName[n.name] = n), 'names' in n && (null === (i = n.names) || void 0 === i || i.slice(1).forEach((e) => (this.unicodeAliases[e] = n.name))), null != n.id)) {
                    let e, r;
                    if (((this.emojisById[n.id] = n), (this.customEmojis[n.name] = n), n.type === F.B.GUILD)) (e = n.guildId), (r = !0);
                    null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(n) : (this.groupedCustomEmojis[e] = [n]), r && Z.default.compare(n.id, ei) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(n) : (this.newlyAddedEmoji[e] = [n])));
                }
                null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(n);
            },
            i = (e) => {
                if (!Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name)) n.push(G.Z.escape(e.name)), (this.emoticonsByName[e.name] = e);
            };
        H.ZP.forEach(r);
        let a = (e) => {
            let n = el[null == e ? q.kod : e];
            null != n && (_().each(n.usableEmojis, r), _().each(n.emoticons, i));
        };
        for (let e in (a(this.guildId), this.newlyAddedEmoji)) null != this.newlyAddedEmoji[e] ? (this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, n) => Z.default.compare(n.id, e.id)).slice(0, 3)) : (this.newlyAddedEmoji[e] = []);
        P.ZP.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && a(e);
        }),
            (this.escapedEmoticonNames = n.join('|'));
    }
    constructor(e) {
        J(this, 'guildId', void 0),
            J(this, 'emoticonRegex', null),
            J(this, 'frequentlyUsed', null),
            J(this, 'favorites', null),
            J(this, 'favoriteNamesAndIds', null),
            J(this, 'topEmojis', null),
            J(this, 'escapedEmoticonNames', null),
            J(this, 'disambiguatedEmoji', null),
            J(this, 'customEmojis', void 0),
            J(this, 'groupedCustomEmojis', void 0),
            J(this, 'emoticonsByName', void 0),
            J(this, 'emojisByName', void 0),
            J(this, 'emojisById', void 0),
            J(this, 'unicodeAliases', void 0),
            J(this, 'newlyAddedEmoji', null),
            J(this, 'frequentlyUsedReactionEmojis', null),
            J(this, 'isFavoriteEmojiWithoutFetchingLatest', (e) => {
                var n;
                if (null == e) return !1;
                let { favoriteNamesAndIds: r } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
                if (null != e.id) return r.has(e.id);
                let i = null !== (n = H.ZP.convertSurrogateToBase(e.surrogates)) && void 0 !== n ? n : e;
                return r.has(i.name);
            }),
            (this.guildId = e);
    }
}
J(eE, '_lastInstance', null);
let ev = eg(eE.resetFrequentlyUsed),
    eI = eg(eE.resetFrequentlyUsedReactionEmojis);
function eT() {
    (el = {}), (eu = {}), eE.reset(), ed.clear(), (es = 3);
}
function eb(e) {
    if (null != el[e]) delete el[e];
}
function ey() {
    (eu = null), eE.reset(), (3 === es || 1 === es) && (ev.compute(), eI.compute());
}
function eS(e, n) {
    if ((eb(e), eE.clear(e), null == n)) return;
    let r = M.default.getCurrentUser();
    if (null == r) return;
    let i = (0, R.r)(e);
    el[e] = new en(e, r.id, n, i);
}
function eA(e) {
    for (let n of (eT(), e.guilds)) eS(n.id, n.emojis);
    (es = e.guilds.every((e) => null != e.emojis) ? 1 : 0), ey();
}
function eN(e) {
    for (let n in (eT(), e.emojis)) eS(n, e.emojis[n]);
    (es = 1), ey();
}
function eC() {
    (et.pendingUsages = []), (et.emojiReactionPendingUsages = []);
}
function eR() {
    eT();
}
function eO(e) {
    1 === es && null == e.guild.emojis && null != e.guild.emojiUpdates && (es = 0), eS(e.guild.id, e.guild.emojis), ey();
}
function eD(e) {
    eS(e.guild.id, e.guild.emojis), ey();
}
function eL(e) {
    let { guildId: n, emojis: r } = e;
    eS(n, r), ey();
}
function ex(e) {
    let { guild: n } = e;
    eb(n.id), ed.delete(n.id), ey();
}
function ew(e) {
    var n;
    let { guildId: r, user: i } = e;
    if (i.id !== (null === (n = M.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return;
    let a = el[r];
    eS(r, null == a ? void 0 : a.usableEmojis), ey();
}
function eP(e) {
    if (!e.optimistic) return !1;
    let n = null != e.emoji.id && '0' !== e.emoji.id ? e.emoji : H.ZP.getByName(H.ZP.convertSurrogateToName(e.emoji.name, !1));
    if (null == n) return !1;
    eF([n]), eZ([n]);
}
function eM(e, n) {
    let { canSplitFrecencyList: r } = V.Z.getCurrentConfig({ location: 'populateInitialFrecencyData' }, { autoTrackExposure: !0 }),
        i = (0, j.E2)({
            location: 'populateInitialFrecencyData',
            autoTrackExposure: !0
        });
    if ((j.Xb.trackExposure({ location: 'populateInitialFrecencyData' }), _().isEmpty(e) && _().isEmpty(et.pendingUsages) && D.Z.hasLoaded(X.yP.FRECENCY_AND_FAVORITES_SETTINGS))) for (let e of ['thumbsup', 'thumbsup', 'eyes', 'eyes', 'laughing', 'laughing', 'watermelon', 'fork_and_knife', 'yum', 'weary', 'tired_face', 'poop', '100']) ev.track(e);
    if ((r || i) && _().isEmpty(n) && _().isEmpty(et.emojiReactionPendingUsages) && D.Z.hasLoaded(X.yP.FRECENCY_AND_FAVORITES_SETTINGS)) for (let e of ['100', '100', 'thumbsup', 'thumbsup', 'thumbsdown', 'thumbsdown', 'heart', 'point_up', 'eyes', 'weary', 'laughing', 'white_check_mark', 'x']) eI.track(e);
}
function ek() {
    var e, n, r, i, a, s;
    let o = null === (n = D.Z.settings.textAndImages) || void 0 === n ? void 0 : null === (e = n.diversitySurrogate) || void 0 === e ? void 0 : e.value;
    null != o && H.ZP.setDefaultDiversitySurrogate(o), eE.reset();
    let l = D.Z.frecencyWithoutFetchingLatest,
        u = null !== (a = null === (r = l.emojiFrecency) || void 0 === r ? void 0 : r.emojis) && void 0 !== a ? a : {},
        c = null !== (s = null === (i = l.emojiReactionFrecency) || void 0 === i ? void 0 : i.emojis) && void 0 !== s ? s : {};
    ev.overwriteHistory(
        _().mapValues(u, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        et.pendingUsages
    ),
        eI.overwriteHistory(
            _().mapValues(c, (e) => ({
                ...e,
                recentUses: e.recentUses.map(Number).filter((e) => e > 0)
            })),
            et.emojiReactionPendingUsages
        ),
        eM(u, c);
}
function eU(e) {
    let {
        settings: { type: n },
        wasSaved: r
    } = e;
    if ((y.Z.setEmojiLocale(O.default.locale), n !== X.yP.FRECENCY_AND_FAVORITES_SETTINGS || !r)) return !1;
    (et.pendingUsages = []), (et.emojiReactionPendingUsages = []);
}
function eB() {
    if (!S.Z.hasLoadedExperiments) return;
    let { frecencyAlgorithm: e } = j.ZP.getCurrentConfig({ location: 'handleExperimentsChange' }, { autoTrackExposure: !0 }),
        n = v.M$[e],
        r = v.KX[e],
        i = 'original' !== e;
    e !== $ && eI.replaceEntryComputeFunctions(n, r, i), ($ = e);
}
function eG(e) {
    let { emojiUsed: n } = e;
    eZ(n);
}
function eZ(e) {
    if (null == e) return !1;
    for (let i of e) {
        var n, r;
        let e = null !== (r = null !== (n = i.id) && void 0 !== n ? n : i.uniqueName) && void 0 !== r ? r : i.name;
        null != e &&
            (ev.track(e),
            et.pendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let i = e.length > 0;
    return i && (3 === es || 1 === es) && ev.compute(), i;
}
function eF(e) {
    if (null == e) return !1;
    for (let i of e) {
        var n, r;
        let e = null !== (r = null !== (n = i.id) && void 0 !== n ? n : i.uniqueName) && void 0 !== r ? r : i.name;
        null != e &&
            (eI.track(e),
            et.emojiReactionPendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let i = e.length > 0;
    return i && (3 === es || 1 === es) && eI.compute(), i;
}
function eV(e) {
    let { guildId: n, role: r } = e;
    if (!(0, A.Z)(r)) return !1;
    {
        let e = el[n];
        eS(n, null == e ? void 0 : e.emojis), ey();
    }
}
function ej(e) {
    let { guildId: n } = e,
        r = new Set(et.expandedSectionsByGuildIds);
    et.expandedSectionsByGuildIds.has(n) ? r.delete(n) : r.add(n),
        (et = {
            ...et,
            expandedSectionsByGuildIds: r
        });
}
function eH(e) {
    let { guildId: n, topEmojisMetadata: r } = e;
    ed.set(n, {
        emojiIds: r.map((e) => e.emojiId),
        topEmojisTTL: p()(p()()).add(1, 'days').valueOf()
    });
}
function eY(e) {
    let { text: n } = e;
    ec = n;
}
class eW extends (a = g.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(I.Z, x.Z, L.ZP, w.Z, O.default, C.Z, W.Z, M.default, S.Z), null != e && (null != e.pendingUsages && (et.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (et.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (et.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([D.Z], ek), this.syncWith([S.Z], eB);
    }
    getState() {
        return et;
    }
    get loadState() {
        return es;
    }
    hasPendingUsage() {
        return et.pendingUsages.length > 0 || et.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return et.expandedSectionsByGuildIds;
    }
    get categories() {
        return eo;
    }
    get diversitySurrogate() {
        var e;
        return null !== (e = H.ZP.getDefaultDiversitySurrogate()) && void 0 !== e ? e : '';
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return ev;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return eI;
    }
    getGuildEmoji(e) {
        var n;
        ep();
        let r = el[e];
        return null !== (n = null == r ? void 0 : r.emojis) && void 0 !== n ? n : [];
    }
    getUsableGuildEmoji(e) {
        var n;
        ep();
        let r = el[e];
        return null !== (n = null == r ? void 0 : r.usableEmojis) && void 0 !== n ? n : [];
    }
    getGuilds() {
        return el;
    }
    getDisambiguatedEmojiContext(e) {
        return ep(), eE.get(e);
    }
    getSearchResultsOrder(e, n, r, i) {
        let a = n.toLowerCase(),
            s = G.Z.escape(a),
            { canSplitFrecencyList: o } = V.Z.getCurrentConfig({ location: 'getSearchResultsOrder' }, { autoTrackExposure: !0 }),
            l = (0, j.E2)({
                location: 'getSearchResultsOrder',
                autoTrackExposure: !0
            });
        if ((j.Xb.trackExposure({ location: 'getSearchResultsOrder' }), e.length > 0)) {
            let n = RegExp('^'.concat(s), 'i'),
                r = new RegExp('(^|_|[A-Z])'.concat(s, 's?([A-Z]|_|$)')),
                u = r.test.bind(r),
                c = n.test.bind(n),
                d = function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    if (null == e || null == n) return 0;
                    let r = e.toLowerCase(),
                        s = 1 + (r === a ? 4 : 0) + (u(r) || u(e) ? 2 : 0) + (c(e) ? 1 : 0),
                        d = i === z.Hz.REACTION && (o || l) ? eI.getScore(n) : ev.getScore(n);
                    return null != d && (s *= d / 100), s;
                };
            e = _().orderBy(e, [(e) => (null != e.names ? d(e.names[0]) : d(e.name, e.id)), (e) => (null != e.names ? e.names[0] : e.name)], ['desc', 'asc']);
        }
        return r > 0 && (e = e.slice(0, r)), e;
    }
    searchWithoutFetchingLatest(e) {
        let n,
            { channel: r, query: i, count: a = 0, intention: s, includeExternalGuilds: o = !0, matchComparator: l } = e;
        ep();
        let u = i.toLowerCase().replaceAll(/[ _]/g, ''),
            c = G.Z.escape(u);
        if (null == l) {
            let e = RegExp(''.concat(c), 'i');
            n = (n) => e.test(n.replaceAll('_', ''));
        } else n = l;
        let d = null != r ? r.getGuildId() : null,
            f = eE
                .get(d)
                .nameMatchesChain(n)
                .reduce(
                    (e, n) => {
                        let i = U.ZP.getEmojiUnavailableReason({
                            emoji: n,
                            channel: r,
                            intention: s,
                            forceIncludeExternalGuilds: o
                        });
                        return i === z.Z5.PREMIUM_LOCKED ? e.locked.push(n) : null == i && e.unlocked.push(n), e;
                    },
                    {
                        unlocked: [],
                        locked: []
                    }
                );
        return {
            unlocked: this.getSearchResultsOrder(f.unlocked, i, a, s),
            locked: this.getSearchResultsOrder(f.locked, i, 0, s)
        };
    }
    getUsableCustomEmojiById(e) {
        return ep(), e_(e);
    }
    getCustomEmojiById(e) {
        return ep(), ef(e);
    }
    getTopEmoji(e) {
        return null == e ? ea : (ep(), eE.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? ea : (ep(), eE.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return ed.get(e);
    }
    getEmojiAutosuggestion(e) {
        if (null != ec && ec.length > 0) {
            let { locked: n, unlocked: r } = this.searchWithoutFetchingLatest({
                channel: e,
                count: 10,
                query: ec,
                intention: z.Hz.CHAT
            });
            return [...r.slice(0, 5), ...n.slice(0, 5)].slice(0, 5);
        }
        return [];
    }
    hasUsableEmojiInAnyGuild() {
        return ep(), Z.default.keys(el).some((e) => el[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let n = eE.get(e);
        return null != n && n.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
J(eW, 'displayName', 'EmojiStore'),
    J(eW, 'persistKey', 'EmojiStoreV2'),
    J(eW, 'migrations', [(e) => ({ ...e })]),
    (n.ZP = new eW(E.Z, {
        LOGOUT: eC,
        BACKGROUND_SYNC: eR,
        CONNECTION_OPEN: eA,
        OVERLAY_INITIALIZE: eN,
        CACHED_EMOJIS_LOADED: em,
        GUILD_MEMBER_UPDATE: ew,
        GUILD_CREATE: eO,
        GUILD_UPDATE: eD,
        GUILD_EMOJIS_UPDATE: eL,
        GUILD_DELETE: ex,
        MESSAGE_REACTION_ADD: eP,
        EMOJI_TRACK_USAGE: eG,
        USER_SETTINGS_PROTO_UPDATE: eU,
        GUILD_ROLE_CREATE: eV,
        GUILD_ROLE_UPDATE: eV,
        TOP_EMOJIS_FETCH_SUCCESS: eH,
        EMOJI_AUTOSUGGESTION_UPDATE: eY,
        TOGGLE_GUILD_EXPANDED_STATE: ej
    }));
