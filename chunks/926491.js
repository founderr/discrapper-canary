n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(956067),
    l = n(442837),
    u = n(570140),
    c = n(287328),
    d = n(86670),
    f = n(856472),
    _ = n(633302),
    p = n(41776),
    h = n(93093),
    m = n(430824),
    g = n(70956),
    E = n(373228),
    v = n(378233);
let b = 2,
    I = new Map(),
    T = new Map(),
    S = null,
    y = [],
    A = null,
    N = !1,
    C = new Map(),
    R = (e, t) => {
        C = new Map(C.set(e, t));
    },
    O = g.Z.Millis.HOUR,
    D = async () => {
        if (0 !== b) return;
        let e = c.Z.database();
        if (null == e) return;
        b = 2;
        let t = await (0, d.gs)('StickerStore.loadSavedGuildStickers', () => o.Z.timeAsync('\uD83D\uDCBE', 'loadSavedGuildStickers', () => f.Z.getAsync(e)));
        if (null != t)
            u.Z.dispatch({
                type: 'CACHED_STICKERS_LOADED',
                stickers: t
            });
    },
    L = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        T.set(e.id, e), t && x(e, n);
    },
    x = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == S) return;
        let { tags: n } = e,
            r = {
                type: E.MO.STICKER_NAME,
                value: e.name.trim().toLocaleLowerCase()
            };
        if ((0, v.jl)(e)) {
            let t = y.find((t) => t.id === e.pack_id),
                i = [
                    r,
                    ...(null != n ? n : '').split(',').map((e) => ({
                        type: E.MO.TAG,
                        value: e.trim().toLocaleLowerCase()
                    }))
                ];
            null != t &&
                i.push({
                    type: E.MO.PACK_NAME,
                    value: t.name
                }),
                S.set(e.id, i);
        } else if ((0, v.J8)(e) && null != n) {
            let i = _.ZP.getByName(n),
                a = [
                    r,
                    {
                        type: E.MO.TAG,
                        value: n.trim().toLocaleLowerCase()
                    }
                ];
            if (null != t) {
                let e = t.name.trim().toLocaleLowerCase();
                null != e &&
                    '' !== e &&
                    a.push({
                        type: E.MO.GUILD_NAME,
                        value: e
                    });
            }
            if (null == i) {
                S.set(e.id, a);
                return;
            }
            a.push({
                type: E.MO.CORRELATED_EMOJI,
                value: i.surrogates
            }),
                i.forEachDiversity((e) =>
                    a.push({
                        type: E.MO.CORRELATED_EMOJI,
                        value: e.surrogates
                    })
                ),
                S.set(e.id, a);
        }
    },
    w = (e, t, n) => {
        I.set(e.id, e);
        let r = [...y];
        if (t) {
            let t = r.findIndex((t) => t.id === e.id);
            -1 !== t ? (r[t] = e) : r.push(e), (y = r);
        }
        (t || n) && e.stickers.forEach((e) => L(e));
    },
    M = () => {
        C.forEach((e, t) => {
            let n = m.Z.getGuild(t);
            null != n && e.forEach((e) => x(e, n));
        }),
            y.forEach((e) => {
                e.stickers.forEach((e) => x(e));
            });
    };
function P(e) {
    let t = m.Z.getGuild(e.id);
    null != t && null != e.stickers && (e.stickers.forEach((e) => L(e, !0, t)), R(t.id, e.stickers));
}
class k extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, h.Z, m.Z);
    }
    get isLoaded() {
        return 0 !== b;
    }
    get loadState() {
        return b;
    }
    get stickerMetadata() {
        return D(), null == S && ((S = new Map()), M()), S;
    }
    get hasLoadedStickerPacks() {
        return null != A && A + O > Date.now();
    }
    get isFetchingStickerPacks() {
        return N;
    }
    getStickerById(e) {
        return !T.has(e) && D(), T.get(e);
    }
    getStickerPack(e) {
        return I.get(e);
    }
    getPremiumPacks() {
        return y;
    }
    isPremiumPack(e) {
        return y.some((t) => t.id === e);
    }
    getRawStickersByGuild() {
        return C;
    }
    getAllStickersIterator() {
        return D(), T.values();
    }
    getAllGuildStickers() {
        return D(), C;
    }
    getStickersByGuildId(e) {
        return D(), C.get(e);
    }
}
(s = 'StickersStore'),
    (a = 'displayName') in (i = k)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new k(u.Z, {
        BACKGROUND_SYNC: () => {
            (S = null), (T = new Map()), (C = new Map()), (b = 0);
        },
        CONNECTION_OPEN: (e) => {
            let { guilds: t } = e;
            (S = null), (T = new Map()), (C = new Map()), t.forEach(P), (b = t.every((e) => null != e.stickers) ? 1 : 0);
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            if (!p.Z.isLurking(t.id)) P(t), 1 === b && null == t.stickers && null != t.stickerUpdates && (b = 0);
        },
        GUILD_DELETE: function (e) {
            var t;
            let { guild: n } = e;
            (null !== (t = C.get(n.id)) && void 0 !== t ? t : []).forEach((e) => {
                null != S && S.delete(e.id), T.delete(e.id);
            }),
                C.delete(n.id),
                (C = new Map(C));
        },
        LOGOUT: () => {
            (b = 0), (y = []), T.clear(), I.clear(), (S = null), C.clear(), (C = new Map(C)), (N = !1), (A = null);
        },
        STICKER_PACKS_FETCH_START: () => {
            N = !0;
        },
        STICKER_PACKS_FETCH_SUCCESS: (e) => {
            let { packs: t } = e;
            t.forEach((e) => w(e, !0)), (A = Date.now()), (N = !1);
        },
        STICKER_PACK_FETCH_SUCCESS: (e) => {
            let { pack: t, ingestStickers: n } = e;
            w(t, !1, n);
        },
        GUILD_STICKERS_FETCH_SUCCESS: (e) => {
            let { guildId: t, stickers: n } = e;
            n.forEach((e) => L(e)), R(t, n);
        },
        GUILD_STICKERS_CREATE_SUCCESS: (e) => {
            var t, n;
            let { guildId: r, sticker: i } = e,
                a = null !== (t = C.get(r)) && void 0 !== t ? t : [];
            R(r, [...(null !== (n = a.filter((e) => e.id !== i.id)) && void 0 !== n ? n : []), i]), L(i);
        },
        STICKER_FETCH_SUCCESS: (e) => {
            let { sticker: t } = e;
            L(t, !1);
        },
        GUILD_STICKERS_UPDATE: (e) => {
            var t;
            let { guildId: n, stickers: r } = e,
                i = (e) => {
                    let t;
                    let n = T.get(e.id);
                    return (
                        null != n && (0, v.J8)(n) && (t = null != n.user ? n.user : void 0),
                        {
                            ...e,
                            user: t
                        }
                    );
                };
            (null !== (t = C.get(n)) && void 0 !== t ? t : [])
                .filter((e) => null == r.find((t) => t.id === e.id))
                .forEach((e) => {
                    T.delete(e.id), null != S && S.delete(e.id);
                });
            let a = r.map((e) => i(e));
            a.forEach((e) => L(e)), R(n, a);
        },
        CACHED_STICKERS_LOADED: function (e) {
            let { stickers: t } = e;
            for (let [e, n] of t)
                if (h.Z.isMember(e) && !C.has(e)) {
                    let t = m.Z.getGuild(e);
                    for (let e of n) L(e, !0, t);
                    R(e, n);
                }
        }
    }));
