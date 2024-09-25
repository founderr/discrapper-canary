var r,
    i = n(47120);
var a = n(653041);
var o = n(956067),
    s = n(442837),
    l = n(570140),
    u = n(287328),
    c = n(86670),
    d = n(856472),
    _ = n(633302),
    E = n(41776),
    f = n(93093),
    h = n(430824),
    p = n(70956),
    m = n(373228),
    I = n(378233);
function T(e, t, n) {
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
let g = 2,
    S = new Map(),
    A = new Map(),
    v = null,
    N = [],
    O = null,
    R = !1,
    C = new Map(),
    y = (e, t) => {
        C = new Map(C.set(e, t));
    },
    b = p.Z.Millis.HOUR,
    L = async () => {
        if (0 !== g) return;
        let e = u.Z.database();
        if (null == e) return;
        g = 2;
        let t = await (0, c.gs)('StickerStore.loadSavedGuildStickers', () => o.Z.timeAsync('\uD83D\uDCBE', 'loadSavedGuildStickers', () => d.Z.getAsync(e)));
        if (null != t)
            l.Z.dispatch({
                type: 'CACHED_STICKERS_LOADED',
                stickers: t
            });
    };
function D(e) {
    let { stickers: t } = e;
    for (let [e, n] of t)
        if (f.Z.isMember(e) && !C.has(e)) {
            let t = h.Z.getGuild(e);
            for (let e of n) M(e, !0, t);
            y(e, n);
        }
}
let M = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        A.set(e.id, e), t && P(e, n);
    },
    P = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == v) return;
        let { tags: n } = e,
            r = {
                type: m.MO.STICKER_NAME,
                value: e.name.trim().toLocaleLowerCase()
            };
        if ((0, I.jl)(e)) {
            let t = N.find((t) => t.id === e.pack_id),
                i = [
                    r,
                    ...(null != n ? n : '').split(',').map((e) => ({
                        type: m.MO.TAG,
                        value: e.trim().toLocaleLowerCase()
                    }))
                ];
            null != t &&
                i.push({
                    type: m.MO.PACK_NAME,
                    value: t.name
                }),
                v.set(e.id, i);
        } else if ((0, I.J8)(e) && null != n) {
            let i = _.ZP.getByName(n),
                a = [
                    r,
                    {
                        type: m.MO.TAG,
                        value: n.trim().toLocaleLowerCase()
                    }
                ];
            if (null != t) {
                let e = t.name.trim().toLocaleLowerCase();
                null != e &&
                    '' !== e &&
                    a.push({
                        type: m.MO.GUILD_NAME,
                        value: e
                    });
            }
            if (null == i) {
                v.set(e.id, a);
                return;
            }
            a.push({
                type: m.MO.CORRELATED_EMOJI,
                value: i.surrogates
            }),
                i.forEachDiversity((e) =>
                    a.push({
                        type: m.MO.CORRELATED_EMOJI,
                        value: e.surrogates
                    })
                ),
                v.set(e.id, a);
        }
    },
    U = (e, t, n) => {
        S.set(e.id, e);
        let r = [...N];
        if (t) {
            let t = r.findIndex((t) => t.id === e.id);
            -1 !== t ? (r[t] = e) : r.push(e), (N = r);
        }
        (t || n) && e.stickers.forEach((e) => M(e));
    },
    w = () => {
        C.forEach((e, t) => {
            let n = h.Z.getGuild(t);
            null != n && e.forEach((e) => P(e, n));
        }),
            N.forEach((e) => {
                e.stickers.forEach((e) => P(e));
            });
    },
    x = (e) => {
        let { guilds: t } = e;
        (v = null), (A = new Map()), (C = new Map()), t.forEach(k), (g = t.every((e) => null != e.stickers) ? 1 : 0);
    },
    G = () => {
        (v = null), (A = new Map()), (C = new Map()), (g = 0);
    };
function k(e) {
    let t = h.Z.getGuild(e.id);
    null != t && null != e.stickers && (e.stickers.forEach((e) => M(e, !0, t)), y(t.id, e.stickers));
}
function B(e) {
    let { guild: t } = e;
    if (!E.Z.isLurking(t.id)) k(t), 1 === g && null == t.stickers && null != t.stickerUpdates && (g = 0);
}
function F(e) {
    var t;
    let { guild: n } = e;
    (null !== (t = C.get(n.id)) && void 0 !== t ? t : []).forEach((e) => {
        null != v && v.delete(e.id), A.delete(e.id);
    }),
        C.delete(n.id),
        (C = new Map(C));
}
let Z = () => {
        (g = 0), (N = []), A.clear(), S.clear(), (v = null), C.clear(), (C = new Map(C)), (R = !1), (O = null);
    },
    V = () => {
        R = !0;
    },
    H = (e) => {
        let { packs: t } = e;
        t.forEach((e) => U(e, !0)), (O = Date.now()), (R = !1);
    },
    Y = (e) => {
        let { pack: t, ingestStickers: n } = e;
        U(t, !1, n);
    },
    j = (e) => {
        let { guildId: t, stickers: n } = e;
        n.forEach((e) => M(e)), y(t, n);
    },
    W = (e) => {
        var t, n;
        let { guildId: r, sticker: i } = e,
            a = null !== (t = C.get(r)) && void 0 !== t ? t : [];
        y(r, [...(null !== (n = a.filter((e) => e.id !== i.id)) && void 0 !== n ? n : []), i]), M(i);
    },
    K = (e) => {
        let { sticker: t } = e;
        M(t, !1);
    },
    z = (e) => {
        var t;
        let { guildId: n, stickers: r } = e,
            i = (e) => {
                let t;
                let n = A.get(e.id);
                return (
                    null != n && (0, I.J8)(n) && (t = null != n.user ? n.user : void 0),
                    {
                        ...e,
                        user: t
                    }
                );
            };
        (null !== (t = C.get(n)) && void 0 !== t ? t : [])
            .filter((e) => null == r.find((t) => t.id === e.id))
            .forEach((e) => {
                A.delete(e.id), null != v && v.delete(e.id);
            });
        let a = r.map((e) => i(e));
        a.forEach((e) => M(e)), y(n, a);
    };
class q extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, f.Z, h.Z);
    }
    get isLoaded() {
        return 0 !== g;
    }
    get loadState() {
        return g;
    }
    get stickerMetadata() {
        return L(), null == v && ((v = new Map()), w()), v;
    }
    get hasLoadedStickerPacks() {
        return null != O && O + b > Date.now();
    }
    get isFetchingStickerPacks() {
        return R;
    }
    getStickerById(e) {
        return !A.has(e) && L(), A.get(e);
    }
    getStickerPack(e) {
        return S.get(e);
    }
    getPremiumPacks() {
        return N;
    }
    isPremiumPack(e) {
        return N.some((t) => t.id === e);
    }
    getRawStickersByGuild() {
        return C;
    }
    getAllStickersIterator() {
        return L(), A.values();
    }
    getAllGuildStickers() {
        return L(), C;
    }
    getStickersByGuildId(e) {
        return L(), C.get(e);
    }
}
T(q, 'displayName', 'StickersStore'),
    (t.Z = new q(l.Z, {
        BACKGROUND_SYNC: G,
        CONNECTION_OPEN: x,
        GUILD_CREATE: B,
        GUILD_DELETE: F,
        LOGOUT: Z,
        STICKER_PACKS_FETCH_START: V,
        STICKER_PACKS_FETCH_SUCCESS: H,
        STICKER_PACK_FETCH_SUCCESS: Y,
        GUILD_STICKERS_FETCH_SUCCESS: j,
        GUILD_STICKERS_CREATE_SUCCESS: W,
        STICKER_FETCH_SUCCESS: K,
        GUILD_STICKERS_UPDATE: z,
        CACHED_STICKERS_LOADED: D
    }));
