"use strict";
n.r(t), n.d(t, {
  fetchStickerPack: function() {
    return C
  },
  fetchStickerPacks: function() {
    return E
  },
  fetchSticker: function() {
    return _
  },
  fetchGuildStickers: function() {
    return N
  },
  deleteGuildSticker: function() {
    return I
  },
  createGuildSticker: function() {
    return O
  },
  updateGuildSticker: function() {
    return A
  },
  addStickerPreview: function() {
    return D
  },
  clearStickerPreview: function() {
    return M
  },
  favoriteSticker: function() {
    return b
  },
  unfavoriteSticker: function() {
    return x
  }
}), n("424973");
var a = n("917351"),
  r = n.n(a),
  i = n("872717"),
  l = n("913144"),
  s = n("404118"),
  u = n("619443"),
  o = n("915639"),
  d = n("872173"),
  c = n("766274"),
  f = n("341542"),
  h = n("697218"),
  m = n("271560"),
  g = n("364685"),
  p = n("49111"),
  v = n("397336"),
  S = n("782340");
let C = async (e, t) => {
  let {
    body: n
  } = await (0, m.httpGetWithCountryCodeQuery)(p.Endpoints.STICKER_PACK(e));
  return l.default.dispatch({
    type: "STICKER_PACK_FETCH_SUCCESS",
    packId: e,
    pack: n,
    ingestStickers: t
  }), n
}, E = async function() {
  let {
    locale: e = o.default.locale
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (g.default.isFetchingStickerPacks || g.default.hasLoadedStickerPacks) return;
  l.default.wait(() => {
    l.default.dispatch({
      type: "STICKER_PACKS_FETCH_START"
    })
  });
  let {
    body: {
      sticker_packs: t
    }
  } = await i.default.get({
    url: p.Endpoints.STICKER_PACKS,
    query: {
      locale: e
    }
  });
  l.default.dispatch({
    type: "STICKER_PACKS_FETCH_SUCCESS",
    packs: t
  })
}, _ = async e => {
  let {
    body: t
  } = await i.default.get({
    url: p.Endpoints.STICKER(e)
  });
  l.default.dispatch({
    type: "STICKER_FETCH_SUCCESS",
    sticker: t
  })
}, N = async e => {
  let {
    body: t
  } = await i.default.get({
    url: p.Endpoints.GUILD_STICKER_PACKS(e)
  });
  l.default.dispatch({
    type: "GUILD_STICKERS_FETCH_SUCCESS",
    guildId: e,
    stickers: t.map(e => null != e.user ? {
      ...e,
      user: new c.default(e.user)
    } : e)
  })
}, I = async e => {
  await i.default.delete({
    url: p.Endpoints.GUILD_STICKER(e.guild_id, e.id)
  })
}, O = async (e, t) => {
  let n = await i.default.post({
    url: p.Endpoints.GUILD_STICKER_PACKS(e),
    body: t
  });
  return l.default.dispatch({
    type: "GUILD_STICKERS_CREATE_SUCCESS",
    guildId: e,
    sticker: {
      ...n.body,
      user: h.default.getCurrentUser()
    }
  }), n.body
}, A = async (e, t, n) => {
  let a = await i.default.patch({
    url: p.Endpoints.GUILD_STICKER(e, t),
    body: n
  });
  return a.body
};

function D(e, t, n) {
  l.default.dispatch({
    type: "ADD_STICKER_PREVIEW",
    channelId: e,
    sticker: t,
    draftType: n
  })
}

function M(e, t) {
  l.default.dispatch({
    type: "CLEAR_STICKER_PREVIEW",
    channelId: e,
    draftType: t
  })
}

function y(e) {
  return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != g.default.getStickerById(e))
}

function b(e) {
  d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = y(t.stickerIds), r.size(t.stickerIds) >= v.MAX_FAVORITES) ? (s.default.show({
    title: S.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
    body: S.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
      count: v.MAX_FAVORITES
    })
  }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), v.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function x(e) {
  d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = y(t.stickerIds)
  }, v.UserSettingsDelay.INFREQUENT_USER_ACTION)
}