"use strict";
a.r(t), a("47120"), a("653041");
var n = a("392711"),
  s = a.n(n),
  l = a("442837"),
  i = a("377108"),
  r = a("433517"),
  o = a("709054"),
  u = a("48481"),
  d = a("526761"),
  c = a("981631");
let f = "selectedChannelGuildFrecency";

function E(e) {
  var t;
  let a;
  (t = a || (a = {})).IMAGE = "IMAGE", t.VIDEO = "VIDEO";
  let {
    state: n
  } = l.default.PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", [e => null == e ? {
    favorites: [],
    timesFavorited: 0
  } : Array.isArray(e) ? {
    favorites: e,
    timesFavorited: 0
  } : e, e => Array.isArray(e.favorites) ? e : {
    favorites: [],
    timesFavorited: 0
  }]);
  return null == n || 0 === n.favorites.length ? [] : n.favorites.map((t, a) => {
    let s = i.FavoriteGIF.create();
    return s.format = "IMAGE" === t.format ? i.GIFType.IMAGE : "VIDEO" === t.format ? i.GIFType.VIDEO : i.GIFType.NONE, s.src = t.src, s.width = t.width, s.height = t.height, s.order = n.favorites.length - a + e, {
      url: t.url,
      favorite: s
    }
  })
}
let h = [{
  version: 2,
  run(e) {
    let t = E(1);
    if (0 === t.length) return !1;
    for (let {
        url: a,
        favorite: n
      }
      of(null == e.favoriteGifs && (e.favoriteGifs = i.FavoriteGIFs.create()), e.favoriteGifs.gifs = {}, t)) e.favoriteGifs.gifs[a] = n;
    return e.favoriteGifs.hideTooltip = t.length > 2, !0
  },
  cleanup() {}
}, {
  version: 3,
  run(e) {
    function t() {
      return {
        usageHistory: {},
        favorites: []
      }
    }
    let {
      state: a
    } = l.default.PersistedStore.migrateAndReadStoreState("StickersPersistedStore", [e => null == e || 0 === Object.keys(e).length ? t() : e, e => null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e)]);
    if (null == a) return !1;
    let n = !1;
    return a.favorites.length > 0 && (e.favoriteStickers = i.FavoriteStickers.create(), e.favoriteStickers.stickerIds = s().uniq(a.favorites).slice(0, d.MAX_FAVORITES), n = !0), s().size(a.usageHistory) > 0 && (e.stickerFrecency = i.StickerFrecency.create(), e.stickerFrecency.stickers = (0, u.serializeUsageHistory)(a.usageHistory, 100), n = !0), n
  },
  cleanup() {
    r.Storage.remove("StickersPersistedStore")
  }
}, {
  version: 4,
  run(e) {
    let {
      state: t
    } = l.default.PersistedStore.migrateAndReadStoreState("EmojiStore", [() => ({
      usageHistory: r.Storage.get("EmojiUsageHistory") || {}
    })]);
    if (null == t) return !1;
    let a = !1;
    return null != t.favorites && t.favorites.length > 0 && (e.favoriteEmojis = i.FavoriteEmojis.create(), e.favoriteEmojis.emojis = s().uniq(t.favorites).slice(0, d.MAX_FAVORITES), a = !0), s().size(t.usageHistory) > 0 && (e.emojiFrecency = i.EmojiFrecency.create(), e.emojiFrecency.emojis = (0, u.serializeUsageHistory)(t.usageHistory, 100), a = !0), a
  },
  cleanup() {
    r.Storage.remove("EmojiStore"), r.Storage.remove("EmojiUsageHistory"), r.Storage.remove("EmojiDiversitySurrogate")
  }
}, {
  version: 6,
  run(e) {
    null == e.favoriteGifs && (e.favoriteGifs = i.FavoriteGIFs.create()), null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
    let t = E(1);
    if (0 === t.length) return !1;
    s()(e.favoriteGifs.gifs).values().sortBy("order").forEach((e, a) => e.order = t.length + 1 + a);
    let a = i.FavoriteGIFs.toBinary(e.favoriteGifs).length,
      n = 0;
    for (let {
        url: s,
        favorite: l
      }
      of t) {
      if (l.order = t.length - n, n++, s in e.favoriteGifs.gifs) {
        e.favoriteGifs.gifs[s].order = l.order;
        continue
      }
      let r = i.FavoriteGIF.toBinary(l).length + s.length + 7;
      !(a + r > d.MAX_FAVORITE_GIFS_SIZE) && (a += r, e.favoriteGifs.gifs[s] = l)
    }
    for (a = i.FavoriteGIFs.toBinary(e.favoriteGifs).length; a > d.MAX_FAVORITE_GIFS_SIZE;) {
      let t = 0;
      for (let a in e.favoriteGifs.gifs)
        if (delete e.favoriteGifs.gifs[a], ++t >= 10) break;
      a = i.FavoriteGIFs.toBinary(e.favoriteGifs).length
    }
    return !0
  },
  cleanup() {}
}, {
  version: 7,
  run(e) {
    let {
      state: t
    } = l.default.PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []);
    if (null == t) return !1;
    let a = !1;
    return s().size(t.usageHistory) > 0 && (e.applicationCommandFrecency = i.ApplicationCommandFrecency.create(), e.applicationCommandFrecency.applicationCommands = (0, u.serializeUsageHistory)(t.usageHistory, 500), a = !0), a
  },
  cleanup() {
    r.Storage.remove("ApplicationCommandFrecency")
  }
}, {
  version: 8,
  run(e) {
    let {
      state: t
    } = l.default.PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []);
    if (null == t) return !1;
    let a = !1;
    return s().size(t.favoriteSounds) > 0 && (e.favoriteSoundboardSounds = i.FavoriteSoundboardSounds.create(), o.default.keys(t.favoriteSounds).forEach(a => {
      new Set(t.favoriteSounds[a]).forEach(t => {
        var a;
        null === (a = e.favoriteSoundboardSounds) || void 0 === a || a.soundIds.push(t)
      })
    }), a = !0), a
  },
  cleanup() {
    r.Storage.remove("SoundboardFavoriteStore")
  }
}, {
  version: 9,
  run(e) {
    let t = r.Storage.get(f);
    if (null == t) return !1;
    for (let e in t) !c.ID_REGEX.test(e) && delete t[e];
    return e.guildAndChannelFrecency = i.GuildAndChannelFrecency.create(), e.guildAndChannelFrecency.guildAndChannels = (0, u.serializeUsageHistory)(t, 100), !0
  },
  cleanup() {
    r.Storage.remove(f)
  }
}];
t.default = h