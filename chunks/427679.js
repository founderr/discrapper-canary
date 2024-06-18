"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(765305);
let _ = {},
  c = {};

function d(e, t) {
  var n;
  let i = {
    ...null !== (n = _[e]) && void 0 !== n ? n : {}
  };
  null == t || t.forEach(e => {
    c[e.channel_id] = e, i[e.channel_id] = e
  }), _[e] = i
}

function E(e) {
  let {
    instance: t
  } = e;
  d(t.guild_id, [t])
}

function I(e, t) {
  var n;
  if (delete c[t], null == e) return;
  let i = {
    ...null !== (n = _[e]) && void 0 !== n ? n : {}
  };
  delete i[t], _[e] = i
}
class T extends(o = a.ZP.Store) {
  getStageInstanceByChannel(e) {
    if (null != e) return c[e]
  }
  isLive(e) {
    return null != this.getStageInstanceByChannel(e)
  }
  isPublic(e) {
    var t;
    return (null === (t = this.getStageInstanceByChannel(e)) || void 0 === t ? void 0 : t.privacy_level) === u.j8.PUBLIC
  }
  getStageInstancesByGuild(e) {
    var t;
    return null == e ? {} : null !== (t = _[e]) && void 0 !== t ? t : {}
  }
  getAllStageInstances() {
    return Object.values(c)
  }
}
s = "StageInstanceStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new T(l.Z, {
  CONNECTION_OPEN: function(e) {
    let {
      guilds: t
    } = e;
    _ = {}, c = {}, t.forEach(e => d(e.id, e.stage_instances))
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    d(t.id, t.stage_instances)
  },
  GUILD_DELETE: function(e) {
    var t;
    let {
      guild: n
    } = e, i = null !== (t = _[n.id]) && void 0 !== t ? t : {};
    delete _[n.id], Object.keys(i).forEach(e => {
      delete c[e]
    })
  },
  STAGE_INSTANCE_CREATE: E,
  STAGE_INSTANCE_UPDATE: E,
  STAGE_INSTANCE_DELETE: function(e) {
    let {
      instance: t
    } = e;
    I(t.guild_id, t.channel_id)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    I(t.guild_id, t.id)
  },
  LOGOUT: function() {
    c = {}, _ = {}
  }
})