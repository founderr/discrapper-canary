"use strict";
E.r(_), E.d(_, {
  default: function() {
    return c
  }
}), E("222007");
var t = E("210696"),
  o = E.n(t),
  n = E("446674"),
  a = E("913144"),
  i = E("689988"),
  r = E("479732"),
  I = E("605250"),
  T = E("385976"),
  s = E("364685"),
  S = E("42203"),
  N = E("305961"),
  O = E("619443");
let A = new I.default("EntityVersionsManager");
class R extends i.default {
  _initialize() {
    a.default.subscribe("CONNECTION_OPEN", L)
  }
  _terminate() {
    a.default.unsubscribe("CONNECTION_OPEN", L)
  }
  constructor(...e) {
    super(...e), this.actions = {
      GUILD_CREATE: u,
      DELETED_ENTITY_IDS: l
    }
  }
}

function l(e) {
  var _;
  let E = null === (_ = N.default.getGuild(e.guild_id)) || void 0 === _ ? void 0 : _.name;
  A.fileOnly("received deleted guild entities (id: ".concat(e.guild_id, ", name: ").concat(E, ")")), n.default.Emitter.batched(() => {
    null != e.channels && function(e, _) {
      let E = Object.keys(S.default.getMutableBasicGuildChannelsForGuild(e));
      A.fileOnly("syncChannels", {
        channelIdsInMemory: E,
        channelIdsFromServer: _
      }), E.forEach(E => {
        !_.has(E) && a.default.dispatch({
          type: "CHANNEL_DELETE",
          channel: {
            guild_id: e,
            id: E,
            parent_id: void 0
          }
        })
      })
    }(e.guild_id, new Set(e.channels)), null != e.roles && function(e, _) {
      var E, t;
      Object.keys(null !== (t = null === (E = N.default.getGuild(e)) || void 0 === E ? void 0 : E.roles) && void 0 !== t ? t : {}).forEach(E => {
        !_.has(E) && a.default.dispatch({
          type: "GUILD_ROLE_DELETE",
          guildId: e,
          roleId: E
        })
      })
    }(e.guild_id, new Set(e.roles)), null != e.emojis && function(e, _) {
      let E = T.default.getGuildEmoji(e),
        t = E.filter(e => _.has(e.id));
      E.length !== t.length && a.default.dispatch({
        type: "GUILD_EMOJIS_UPDATE",
        guildId: e,
        emojis: t
      })
    }(e.guild_id, new Set(e.emojis)), null != e.stickers && function(e, _) {
      var E;
      let t = null !== (E = s.default.getStickersByGuildId(e)) && void 0 !== E ? E : [],
        o = t.filter(e => _.has(e.id));
      t.length !== o.length && a.default.dispatch({
        type: "GUILD_STICKERS_UPDATE",
        guildId: e,
        stickers: o
      })
    }(e.guild_id, new Set(e.stickers))
  })
}

function L() {
  r.default.getAll().then(e => {
    e.forEach(e => C(e))
  })
}

function u(e) {
  let {
    guild: _
  } = e;
  _.unableToSyncDeletes && C(_.id)
}

function C(e) {
  setTimeout(() => (function(e) {
    var _, E, t, o, n;
    let a = null === (_ = N.default.getGuild(e)) || void 0 === _ ? void 0 : _.name;
    A.fileOnly("requesting deleted guild entities (id: ".concat(e, ", name: ").concat(a, ")"));
    let i = D(Object.keys(S.default.getMutableBasicGuildChannelsForGuild(e))),
      r = D(Object.keys(null !== (o = null === (E = N.default.getGuild(e)) || void 0 === E ? void 0 : E.roles) && void 0 !== o ? o : {})),
      I = D(T.default.getGuildEmoji(e).map(e => e.id)),
      R = D(null !== (n = null === (t = s.default.getStickersByGuildId(e)) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== n ? n : []);
    O.default.getSocket().getDeletedEntityIdsNotMatchingHash(e, i, r, I, R)
  })(e), Math.ceil(2e3 * Math.random()))
}

function D(e) {
  return o.v3(e.sort().join(",")).toString()
}
var c = new R