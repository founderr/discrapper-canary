"use strict";
n(47120), n(653041);
var i, r, s, o, a = n(956067),
  l = n(442837),
  u = n(570140),
  _ = n(287328),
  c = n(86670),
  d = n(856472),
  E = n(633302),
  I = n(41776),
  T = n(93093),
  h = n(430824),
  S = n(70956),
  f = n(373228),
  N = n(378233);
let A = 2,
  m = new Map,
  O = new Map,
  R = null,
  p = [],
  g = null,
  C = !1,
  v = new Map,
  L = (e, t) => {
    v = new Map(v.set(e, t))
  },
  D = S.Z.Millis.HOUR,
  M = async () => {
    if (0 !== A) return;
    let e = _.Z.database();
    if (null == e) return;
    A = 2;
    let t = await (0, c.gs)("StickerStore.loadSavedGuildStickers", () => a.Z.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.Z.getAsync(e)));
    if (null != t) u.Z.dispatch({
      type: "CACHED_STICKERS_LOADED",
      stickers: t
    })
  }, P = function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    O.set(e.id, e), t && y(e, n)
  }, y = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (null == R) return;
    let {
      tags: n
    } = e, i = {
      type: f.MO.STICKER_NAME,
      value: e.name.trim().toLocaleLowerCase()
    };
    if ((0, N.jl)(e)) {
      let t = p.find(t => t.id === e.pack_id),
        r = [i, ...(null != n ? n : "").split(",").map(e => ({
          type: f.MO.TAG,
          value: e.trim().toLocaleLowerCase()
        }))];
      null != t && r.push({
        type: f.MO.PACK_NAME,
        value: t.name
      }), R.set(e.id, r)
    } else if ((0, N.J8)(e) && null != n) {
      let r = E.ZP.getByName(n),
        s = [i, {
          type: f.MO.TAG,
          value: n.trim().toLocaleLowerCase()
        }];
      if (null != t) {
        let e = t.name.trim().toLocaleLowerCase();
        null != e && "" !== e && s.push({
          type: f.MO.GUILD_NAME,
          value: e
        })
      }
      if (null == r) {
        R.set(e.id, s);
        return
      }
      s.push({
        type: f.MO.CORRELATED_EMOJI,
        value: r.surrogates
      }), r.forEachDiversity(e => s.push({
        type: f.MO.CORRELATED_EMOJI,
        value: e.surrogates
      })), R.set(e.id, s)
    }
  }, U = (e, t, n) => {
    m.set(e.id, e);
    let i = [...p];
    if (t) {
      let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), p = i
    }(t || n) && e.stickers.forEach(e => P(e))
  }, b = () => {
    v.forEach((e, t) => {
      let n = h.Z.getGuild(t);
      null != n && e.forEach(e => y(e, n))
    }), p.forEach(e => {
      e.stickers.forEach(e => y(e))
    })
  };

function G(e) {
  let t = h.Z.getGuild(e.id);
  null != t && null != e.stickers && (e.stickers.forEach(e => P(e, !0, t)), L(t.id, e.stickers))
}
class w extends(i = l.ZP.Store) {
  initialize() {
    this.waitFor(_.Z, T.Z, h.Z)
  }
  get isLoaded() {
    return 0 !== A
  }
  get loadState() {
    return A
  }
  get stickerMetadata() {
    return M(), null == R && (R = new Map, b()), R
  }
  get hasLoadedStickerPacks() {
    return null != g && g + D > Date.now()
  }
  get isFetchingStickerPacks() {
    return C
  }
  getStickerById(e) {
    return !O.has(e) && M(), O.get(e)
  }
  getStickerPack(e) {
    return m.get(e)
  }
  getPremiumPacks() {
    return p
  }
  isPremiumPack(e) {
    return p.some(t => t.id === e)
  }
  getRawStickersByGuild() {
    return v
  }
  getAllStickersIterator() {
    return M(), O.values()
  }
  getAllGuildStickers() {
    return M(), v
  }
  getStickersByGuildId(e) {
    return M(), v.get(e)
  }
}
o = "StickersStore", (s = "displayName") in(r = w) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new w(u.Z, {
  BACKGROUND_SYNC: () => {
    R = null, O = new Map, v = new Map, A = 0
  },
  CONNECTION_OPEN: e => {
    let {
      guilds: t
    } = e;
    R = null, O = new Map, v = new Map, t.forEach(G), A = t.every(e => null != e.stickers) ? 1 : 0
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    if (!I.Z.isLurking(t.id)) G(t), 1 === A && null == t.stickers && null != t.stickerUpdates && (A = 0)
  },
  GUILD_DELETE: function(e) {
    var t;
    let {
      guild: n
    } = e;
    (null !== (t = v.get(n.id)) && void 0 !== t ? t : []).forEach(e => {
      null != R && R.delete(e.id), O.delete(e.id)
    }), v.delete(n.id), v = new Map(v)
  },
  LOGOUT: () => {
    A = 0, p = [], O.clear(), m.clear(), R = null, v.clear(), v = new Map(v), C = !1, g = null
  },
  STICKER_PACKS_FETCH_START: () => {
    C = !0
  },
  STICKER_PACKS_FETCH_SUCCESS: e => {
    let {
      packs: t
    } = e;
    t.forEach(e => U(e, !0)), g = Date.now(), C = !1
  },
  STICKER_PACK_FETCH_SUCCESS: e => {
    let {
      pack: t,
      ingestStickers: n
    } = e;
    U(t, !1, n)
  },
  GUILD_STICKERS_FETCH_SUCCESS: e => {
    let {
      guildId: t,
      stickers: n
    } = e;
    n.forEach(e => P(e)), L(t, n)
  },
  GUILD_STICKERS_CREATE_SUCCESS: e => {
    var t, n;
    let {
      guildId: i,
      sticker: r
    } = e, s = null !== (t = v.get(i)) && void 0 !== t ? t : [];
    L(i, [...null !== (n = s.filter(e => e.id !== r.id)) && void 0 !== n ? n : [], r]), P(r)
  },
  STICKER_FETCH_SUCCESS: e => {
    let {
      sticker: t
    } = e;
    P(t, !1)
  },
  GUILD_STICKERS_UPDATE: e => {
    var t;
    let {
      guildId: n,
      stickers: i
    } = e, r = e => {
      let t;
      let n = O.get(e.id);
      return null != n && (0, N.J8)(n) && (t = null != n.user ? n.user : void 0), {
        ...e,
        user: t
      }
    };
    (null !== (t = v.get(n)) && void 0 !== t ? t : []).filter(e => null == i.find(t => t.id === e.id)).forEach(e => {
      O.delete(e.id), null != R && R.delete(e.id)
    });
    let s = i.map(e => r(e));
    s.forEach(e => P(e)), L(n, s)
  },
  CACHED_STICKERS_LOADED: function(e) {
    let {
      stickers: t
    } = e;
    for (let [e, n] of t)
      if (T.Z.isMember(e) && !v.has(e)) {
        let t = h.Z.getGuild(e);
        for (let e of n) P(e, !0, t);
        L(e, n)
      }
  }
})