"use strict";
n.r(e), n.d(e, {
  fetchStickerPack: function() {
    return g
  },
  fetchStickerPacks: function() {
    return I
  },
  fetchSticker: function() {
    return S
  },
  fetchGuildStickers: function() {
    return m
  },
  deleteGuildSticker: function() {
    return A
  },
  createGuildSticker: function() {
    return N
  },
  updateGuildSticker: function() {
    return T
  },
  addStickerPreview: function() {
    return w
  },
  clearStickerPreview: function() {
    return y
  },
  favoriteSticker: function() {
    return R
  },
  unfavoriteSticker: function() {
    return b
  }
}), n("424973");
var i = n("917351"),
  r = n.n(i),
  l = n("872717"),
  s = n("913144"),
  a = n("404118"),
  o = n("619443"),
  u = n("915639"),
  c = n("872173"),
  d = n("766274"),
  f = n("341542"),
  h = n("697218"),
  p = n("271560"),
  _ = n("364685"),
  v = n("49111"),
  C = n("397336"),
  E = n("782340");
let g = async (t, e) => {
  let {
    body: n
  } = await (0, p.httpGetWithCountryCodeQuery)(v.Endpoints.STICKER_PACK(t));
  return s.default.dispatch({
    type: "STICKER_PACK_FETCH_SUCCESS",
    packId: t,
    pack: n,
    ingestStickers: e
  }), n
}, I = async function() {
  let {
    locale: t = u.default.locale
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (_.default.isFetchingStickerPacks || _.default.hasLoadedStickerPacks) return;
  s.default.wait(() => {
    s.default.dispatch({
      type: "STICKER_PACKS_FETCH_START"
    })
  });
  let {
    body: {
      sticker_packs: e
    }
  } = await l.default.get({
    url: v.Endpoints.STICKER_PACKS,
    query: {
      locale: t
    }
  });
  s.default.dispatch({
    type: "STICKER_PACKS_FETCH_SUCCESS",
    packs: e
  })
}, S = async t => {
  let {
    body: e
  } = await l.default.get({
    url: v.Endpoints.STICKER(t)
  });
  s.default.dispatch({
    type: "STICKER_FETCH_SUCCESS",
    sticker: e
  })
}, m = async t => {
  let {
    body: e
  } = await l.default.get({
    url: v.Endpoints.GUILD_STICKER_PACKS(t)
  });
  s.default.dispatch({
    type: "GUILD_STICKERS_FETCH_SUCCESS",
    guildId: t,
    stickers: e.map(t => null != t.user ? {
      ...t,
      user: new d.default(t.user)
    } : t)
  })
}, A = async t => {
  await l.default.delete({
    url: v.Endpoints.GUILD_STICKER(t.guild_id, t.id)
  })
}, N = async (t, e) => {
  let n = await l.default.post({
    url: v.Endpoints.GUILD_STICKER_PACKS(t),
    body: e
  });
  return s.default.dispatch({
    type: "GUILD_STICKERS_CREATE_SUCCESS",
    guildId: t,
    sticker: {
      ...n.body,
      user: h.default.getCurrentUser()
    }
  }), n.body
}, T = async (t, e, n) => {
  let i = await l.default.patch({
    url: v.Endpoints.GUILD_STICKER(t, e),
    body: n
  });
  return i.body
};

function w(t, e, n) {
  s.default.dispatch({
    type: "ADD_STICKER_PREVIEW",
    channelId: t,
    sticker: e,
    draftType: n
  })
}

function y(t, e) {
  s.default.dispatch({
    type: "CLEAR_STICKER_PREVIEW",
    channelId: t,
    draftType: e
  })
}

function L(t) {
  return f.default.totalUnavailableGuilds > 0 || !o.default.isConnected() ? t : t.filter(t => null != _.default.getStickerById(t))
}

function R(t) {
  c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", e => (e.stickerIds = L(e.stickerIds), r.size(e.stickerIds) >= C.MAX_FAVORITES) ? (a.default.show({
    title: E.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
    body: E.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
      count: C.MAX_FAVORITES
    })
  }), !1) : !e.stickerIds.includes(t) && void e.stickerIds.push(t), C.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function b(t) {
  c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", e => {
    e.stickerIds = e.stickerIds.filter(e => e !== t), e.stickerIds = L(e.stickerIds)
  }, C.UserSettingsDelay.INFREQUENT_USER_ACTION)
}