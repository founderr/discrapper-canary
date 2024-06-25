"use strict";
n.d(t, {
  $p: function() {
    return N
  },
  FQ: function() {
    return A
  },
  Il: function() {
    return m
  },
  Jf: function() {
    return g
  },
  SA: function() {
    return D
  },
  Um: function() {
    return p
  },
  eu: function() {
    return C
  },
  hW: function() {
    return M
  },
  lY: function() {
    return R
  },
  pk: function() {
    return O
  },
  qB: function() {
    return v
  }
}), n(653041);
var i = n(392711),
  r = n.n(i),
  s = n(544891),
  o = n(570140),
  a = n(668781),
  l = n(38618),
  u = n(706454),
  _ = n(675478),
  c = n(598077),
  d = n(486472),
  E = n(594174),
  I = n(73346),
  T = n(926491),
  h = n(981631),
  f = n(526761),
  S = n(689938);
let A = async (e, t) => {
  let {
    body: n
  } = await (0, I.Kb)(h.ANM.STICKER_PACK(e));
  return o.Z.dispatch({
    type: "STICKER_PACK_FETCH_SUCCESS",
    packId: e,
    pack: n,
    ingestStickers: t
  }), n
}, N = async function() {
  let {
    locale: e = u.default.locale
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (T.Z.isFetchingStickerPacks || T.Z.hasLoadedStickerPacks) return;
  o.Z.wait(() => {
    o.Z.dispatch({
      type: "STICKER_PACKS_FETCH_START"
    })
  });
  let {
    body: {
      sticker_packs: t
    }
  } = await s.tn.get({
    url: h.ANM.STICKER_PACKS,
    query: {
      locale: e
    }
  });
  o.Z.dispatch({
    type: "STICKER_PACKS_FETCH_SUCCESS",
    packs: t
  })
}, m = async e => {
  let {
    body: t
  } = await s.tn.get({
    url: h.ANM.STICKER(e)
  });
  o.Z.dispatch({
    type: "STICKER_FETCH_SUCCESS",
    sticker: t
  })
}, O = async e => {
  let {
    body: t
  } = await s.tn.get({
    url: h.ANM.GUILD_STICKER_PACKS(e)
  });
  o.Z.dispatch({
    type: "GUILD_STICKERS_FETCH_SUCCESS",
    guildId: e,
    stickers: t.map(e => null != e.user ? {
      ...e,
      user: new c.Z(e.user)
    } : e)
  })
}, p = async e => {
  await s.tn.del({
    url: h.ANM.GUILD_STICKER(e.guild_id, e.id)
  })
}, R = async (e, t) => {
  let n = await s.tn.post({
    url: h.ANM.GUILD_STICKER_PACKS(e),
    body: t
  });
  return o.Z.dispatch({
    type: "GUILD_STICKERS_CREATE_SUCCESS",
    guildId: e,
    sticker: {
      ...n.body,
      user: E.default.getCurrentUser()
    }
  }), n.body
}, g = async (e, t, n) => (await s.tn.patch({
  url: h.ANM.GUILD_STICKER(e, t),
  body: n
})).body;

function C(e, t, n) {
  o.Z.dispatch({
    type: "ADD_STICKER_PREVIEW",
    channelId: e,
    sticker: t,
    draftType: n
  })
}

function v(e, t) {
  o.Z.dispatch({
    type: "CLEAR_STICKER_PREVIEW",
    channelId: e,
    draftType: t
  })
}

function L(e) {
  return d.Z.totalUnavailableGuilds > 0 || !l.Z.isConnected() ? e : e.filter(e => null != T.Z.getStickerById(e))
}

function D(e) {
  _.DZ.updateAsync("favoriteStickers", t => (t.stickerIds = L(t.stickerIds), r().size(t.stickerIds) >= f.oX) ? (a.Z.show({
    title: S.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
    body: S.Z.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
      count: f.oX
    })
  }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), f.fy.INFREQUENT_USER_ACTION)
}

function M(e) {
  _.DZ.updateAsync("favoriteStickers", t => {
    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = L(t.stickerIds)
  }, f.fy.INFREQUENT_USER_ACTION)
}