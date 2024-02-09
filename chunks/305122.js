"use strict";
n.r(t), n.d(t, {
  maybeFetchSoundboardSounds: function() {
    return S
  },
  uploadSound: function() {
    return x
  },
  updateSound: function() {
    return _
  },
  deleteSound: function() {
    return N
  },
  addFavoriteSound: function() {
    return T
  },
  removeFavoriteSound: function() {
    return M
  },
  playSoundLocally: function() {
    return A
  },
  reportSoundStartedPlaying: function() {
    return O
  },
  reportSoundFinishedPlaying: function() {
    return j
  },
  updateUserSoundboardVolume: function() {
    return y
  },
  muteCustomJoinSound: function() {
    return L
  }
}), n("222007"), n("424973");
var l = n("917351"),
  a = n.n(l),
  s = n("872717"),
  i = n("913144"),
  r = n("404118"),
  o = n("599417"),
  u = n("872173"),
  d = n("235004"),
  c = n("389480"),
  m = n("24156"),
  f = n("846325"),
  h = n("49111"),
  p = n("397336"),
  g = n("782340");
let E = async e => {
  try {
    let t = await s.default.get({
        url: h.Endpoints.SOUNDBOARD_DEFAULT_SOUNDS,
        query: {
          guild_ids: e
        }
      }),
      n = t.body.map(e => (0, c.soundboardSoundFromAPI)(e, f.DEFAULT_SOUND_GUILD_ID));
    i.default.dispatch({
      type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
      soundboardSounds: n
    })
  } catch (e) {
    throw i.default.dispatch({
      type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
    }), new o.default(e)
  }
}, C = e => new Promise(t => {
  let n = () => {
    i.default.unsubscribe(e, n), setTimeout(t, 0)
  };
  i.default.subscribe(e, n)
}), v = e => {
  if (!d.default.shouldFetchDefaultSounds()) return Promise.resolve();
  i.default.dispatch({
    type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
  });
  let t = C("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
  return E(e), t
}, I = () => {
  let e = (0, m.getGuildIdsToFetchSoundsFor)();
  if (0 === e.length) return Promise.resolve();
  let t = C("SOUNDBOARD_SOUNDS_RECEIVED");
  return i.default.dispatch({
    type: "GUILD_SOUNDBOARD_FETCH"
  }), i.default.dispatch({
    type: "REQUEST_SOUNDBOARD_SOUNDS",
    guildIds: e
  }), t
}, S = () => __OVERLAY__ ? (i.default.dispatch({
  type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
}), Promise.all([])) : Promise.all([v(), I()]);
async function x(e) {
  let {
    guildId: t,
    name: n,
    sound: l,
    volume: a,
    emojiId: i,
    emojiName: r
  } = e, o = await s.default.post({
    url: h.Endpoints.GUILD_SOUNDBOARD_SOUNDS(t),
    body: {
      name: n,
      sound: l,
      volume: a,
      emoji_id: i,
      emoji_name: r
    }
  }), u = (0, c.soundboardSoundFromAPI)(o.body, t);
  return u
}
async function _(e) {
  let {
    guildId: t,
    soundId: n,
    name: l,
    volume: a,
    emojiId: i,
    emojiName: r
  } = e, o = await s.default.patch({
    url: h.Endpoints.GUILD_SOUNDBOARD_SOUND(t, n),
    body: {
      name: l,
      volume: a,
      emoji_id: i,
      emoji_name: r
    }
  }), u = (0, c.soundboardSoundFromAPI)(o.body, t);
  return u
}
async function N(e, t) {
  await s.default.delete({
    url: h.Endpoints.GUILD_SOUNDBOARD_SOUND(e, t),
    oldFormErrors: !0
  })
}

function T(e) {
  u.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", t => a.size(t.soundIds) >= p.MAX_FAVORITES ? (r.default.show({
    title: g.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
    body: g.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
      count: p.MAX_FAVORITES
    })
  }), !1) : !t.soundIds.includes(e) && void t.soundIds.push(e), p.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function M(e) {
  u.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", t => {
    t.soundIds = t.soundIds.filter(t => t !== e)
  }, p.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function A(e, t, n) {
  i.default.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
    sound: t,
    channelId: e,
    trigger: n
  })
}

function O(e, t) {
  i.default.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
    soundId: e,
    userId: t
  })
}

function j(e, t) {
  i.default.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
    soundId: e,
    userId: t
  })
}

function y(e) {
  i.default.dispatch({
    type: "USER_SOUNDBOARD_SET_VOLUME",
    volume: e
  })
}

function L(e) {
  i.default.dispatch({
    type: "SOUNDBOARD_MUTE_JOIN_SOUND",
    channelId: e
  })
}