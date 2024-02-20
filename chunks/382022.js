"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var i = n("210696"),
  a = n.n(i),
  l = n("446674"),
  s = n("913144"),
  r = n("689988"),
  o = n("479732"),
  u = n("605250"),
  d = n("385976"),
  c = n("364685"),
  f = n("42203"),
  E = n("305961"),
  h = n("299039"),
  _ = n("619443");
let C = new u.default("EntityVersionsManager");
class S extends r.default {
  _initialize() {
    s.default.subscribe("CONNECTION_OPEN", T)
  }
  _terminate() {
    s.default.unsubscribe("CONNECTION_OPEN", T)
  }
  constructor(...e) {
    super(...e), this.actions = {
      GUILD_CREATE: m,
      DELETED_ENTITY_IDS: g
    }
  }
}

function g(e) {
  var t;
  let n = null === (t = E.default.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
  C.fileOnly("received deleted guild entities (id: ".concat(e.guild_id, ", name: ").concat(n, ")")), l.default.Emitter.batched(() => {
    null != e.channels && function(e, t) {
      let n = h.default.keys(f.default.getMutableBasicGuildChannelsForGuild(e));
      C.fileOnly("syncChannels", {
        channelIdsInMemory: n,
        channelIdsFromServer: t
      }), n.forEach(n => {
        !t.has(n) && s.default.dispatch({
          type: "CHANNEL_DELETE",
          channel: {
            guild_id: e,
            id: n,
            parent_id: void 0
          }
        })
      })
    }(e.guild_id, new Set(e.channels)), null != e.roles && function(e, t) {
      var n, i;
      Object.keys(null !== (i = null === (n = E.default.getGuild(e)) || void 0 === n ? void 0 : n.roles) && void 0 !== i ? i : {}).forEach(n => {
        !t.has(n) && s.default.dispatch({
          type: "GUILD_ROLE_DELETE",
          guildId: e,
          roleId: n
        })
      })
    }(e.guild_id, new Set(e.roles)), null != e.emojis && function(e, t) {
      let n = d.default.getGuildEmoji(e),
        i = n.filter(e => t.has(e.id));
      n.length !== i.length && s.default.dispatch({
        type: "GUILD_EMOJIS_UPDATE",
        guildId: e,
        emojis: i
      })
    }(e.guild_id, new Set(e.emojis)), null != e.stickers && function(e, t) {
      var n;
      let i = null !== (n = c.default.getStickersByGuildId(e)) && void 0 !== n ? n : [],
        a = i.filter(e => t.has(e.id));
      i.length !== a.length && s.default.dispatch({
        type: "GUILD_STICKERS_UPDATE",
        guildId: e,
        stickers: a
      })
    }(e.guild_id, new Set(e.stickers))
  })
}

function T() {
  o.default.getAll().then(e => {
    e.forEach(e => p(e))
  })
}

function m(e) {
  let {
    guild: t
  } = e;
  t.unableToSyncDeletes && p(t.id)
}

function p(e) {
  setTimeout(() => (function(e) {
    var t, n, i, a, l;
    let s = null === (t = E.default.getGuild(e)) || void 0 === t ? void 0 : t.name;
    C.fileOnly("requesting deleted guild entities (id: ".concat(e, ", name: ").concat(s, ")"));
    let r = I(Object.keys(f.default.getMutableBasicGuildChannelsForGuild(e))),
      o = I(Object.keys(null !== (a = null === (n = E.default.getGuild(e)) || void 0 === n ? void 0 : n.roles) && void 0 !== a ? a : {})),
      u = I(d.default.getGuildEmoji(e).map(e => e.id)),
      h = I(null !== (l = null === (i = c.default.getStickersByGuildId(e)) || void 0 === i ? void 0 : i.map(e => e.id)) && void 0 !== l ? l : []);
    _.default.getSocket().getDeletedEntityIdsNotMatchingHash(e, r, o, u, h)
  })(e), Math.ceil(2e3 * Math.random()))
}

function I(e) {
  return a.v3(e.sort().join(",")).toString()
}
var A = new S