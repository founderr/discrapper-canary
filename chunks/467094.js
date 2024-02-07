"use strict";
n.r(t), n.d(t, {
  fetchStickerPack: function() {
    return g
  },
  fetchStickerPacks: function() {
    return _
  },
  fetchSticker: function() {
    return S
  },
  fetchGuildStickers: function() {
    return m
  },
  deleteGuildSticker: function() {
    return y
  },
  createGuildSticker: function() {
    return A
  },
  updateGuildSticker: function() {
    return N
  },
  addStickerPreview: function() {
    return T
  },
  clearStickerPreview: function() {
    return w
  },
  favoriteSticker: function() {
    return x
  },
  unfavoriteSticker: function() {
    return L
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
  C = n("364685"),
  v = n("49111"),
  E = n("397336"),
  I = n("782340");
let g = async (e, t) => {
  let {
    body: n
  } = await (0, p.httpGetWithCountryCodeQuery)(v.Endpoints.STICKER_PACK(e));
  return s.default.dispatch({
    type: "STICKER_PACK_FETCH_SUCCESS",
    packId: e,
    pack: n,
    ingestStickers: t
  }), n
}, _ = async function() {
  let {
    locale: e = u.default.locale
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (C.default.isFetchingStickerPacks || C.default.hasLoadedStickerPacks) return;
  s.default.wait(() => {
    s.default.dispatch({
      type: "STICKER_PACKS_FETCH_START"
    })
  });
  let {
    body: {
      sticker_packs: t
    }
  } = await l.default.get({
    url: v.Endpoints.STICKER_PACKS,
    query: {
      locale: e
    }
  });
  s.default.dispatch({
    type: "STICKER_PACKS_FETCH_SUCCESS",
    packs: t
  })
}, S = async e => {
  let {
    body: t
  } = await l.default.get({
    url: v.Endpoints.STICKER(e)
  });
  s.default.dispatch({
    type: "STICKER_FETCH_SUCCESS",
    sticker: t
  })
}, m = async e => {
  let {
    body: t
  } = await l.default.get({
    url: v.Endpoints.GUILD_STICKER_PACKS(e)
  });
  s.default.dispatch({
    type: "GUILD_STICKERS_FETCH_SUCCESS",
    guildId: e,
    stickers: t.map(e => null != e.user ? {
      ...e,
      user: new d.default(e.user)
    } : e)
  })
}, y = async e => {
  await l.default.delete({
    url: v.Endpoints.GUILD_STICKER(e.guild_id, e.id)
  })
}, A = async (e, t) => {
  let n = await l.default.post({
    url: v.Endpoints.GUILD_STICKER_PACKS(e),
    body: t
  });
  return s.default.dispatch({
    type: "GUILD_STICKERS_CREATE_SUCCESS",
    guildId: e,
    sticker: {
      ...n.body,
      user: h.default.getCurrentUser()
    }
  }), n.body
}, N = async (e, t, n) => {
  let i = await l.default.patch({
    url: v.Endpoints.GUILD_STICKER(e, t),
    body: n
  });
  return i.body
};

function T(e, t, n) {
  s.default.dispatch({
    type: "ADD_STICKER_PREVIEW",
    channelId: e,
    sticker: t,
    draftType: n
  })
}

function w(e, t) {
  s.default.dispatch({
    type: "CLEAR_STICKER_PREVIEW",
    channelId: e,
    draftType: t
  })
}

function R(e) {
  return f.default.totalUnavailableGuilds > 0 || !o.default.isConnected() ? e : e.filter(e => null != C.default.getStickerById(e))
}

function x(e) {
  c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = R(t.stickerIds), r.size(t.stickerIds) >= E.MAX_FAVORITES) ? (a.default.show({
    title: I.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
    body: I.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
      count: E.MAX_FAVORITES
    })
  }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), E.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function L(e) {
  c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = R(t.stickerIds)
  }, E.UserSettingsDelay.INFREQUENT_USER_ACTION)
}