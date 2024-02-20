"use strict";
E.r(_), E.d(_, {
  BINARY_READ_OPTIONS: function() {
    return A
  },
  b64ToProtoWithType: function() {
    return R
  },
  b64ToProto: function() {
    return N
  },
  b64ToPreloadedUserSettingsProto: function() {
    return O
  },
  protoToB64WithType: function() {
    return S
  },
  protoToB64: function() {
    return L
  },
  mergeTopLevelFields: function() {
    return l
  },
  mutateUserGuildSettingsInternal: function() {
    return D
  },
  mutateUserChannelSettings: function() {
    return C
  },
  mutateUserChannelSettingsInternal: function() {
    return c
  },
  runMigrations: function() {
    return u
  },
  serializeUsageHistory: function() {
    return d
  }
}), E("70102"), E("222007"), E("424973");
var t = E("849266"),
  o = E("917351"),
  I = E.n(o),
  T = E("713349"),
  r = E("151426"),
  a = E("959714"),
  n = E("397336"),
  i = E("49111");
let A = {
    readerFactory: e => new t.BinaryReader(e, new TextDecoder("utf-8"))
  },
  s = {
    [n.UserSettingsTypes.PRELOADED_USER_SETTINGS]: r.PreloadedUserSettings,
    [n.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: T.FrecencyUserSettings
  };

function R(e, _) {
  return null != _ && e in s ? N(s[e], _) : null
}

function N(e, _) {
  if (null == _) return null;
  let E = (0, t.base64decode)(_);
  try {
    return e.fromBinary(E, A)
  } catch (e) {
    throw Error("Settings proto failed to deserialize (potentially corrupt): ".concat(e))
  }
}

function O(e) {
  return N(r.PreloadedUserSettings, e)
}

function S(e, _) {
  return L(s[e], _)
}

function L(e, _) {
  return (0, t.base64encode)(e.toBinary(_))
}

function l(e, _, E) {
  for (let e in _ = {
      ..._
    }, E) delete _[e];
  return e.mergePartial(_, E), _
}

function D(e, _, E) {
  return (null == _ || "null" === _) && (_ = i.ZERO_STRING_GUILD_ID), !(_ in e.guilds) && (e.guilds[_] = r.GuildSettings.create()), E(e.guilds[_])
}

function C(e, _, E, t) {
  var o, I, T;
  return o = e, I = _, T = e => c(e, E, t), null == o.guilds && (o.guilds = r.AllGuildSettings.create()), D(o.guilds, I, T)
}

function c(e, _, E) {
  return !(_ in e.channels) && (e.channels[_] = r.ChannelSettings.create()), E(e.channels[_])
}

function u(e, _) {
  null == e.versions && (e.versions = a.Versions.create());
  let E = 0;
  for (let e of _) {
    if (e.version <= E) throw Error("Migrations are out of order or there is a duplicate version");
    E = e.version
  }
  let t = .1 > Math.random(),
    o = !1,
    I = [];
  for (let E of _) {
    var T, r;
    if (E.version <= e.versions.clientVersion) {
      t && (null === (T = E.cleanup) || void 0 === T || T.call(E));
      continue
    }
    let _ = E.run(e);
    if (e.versions.clientVersion = E.version, !1 === _) {
      null === (r = E.cleanup) || void 0 === r || r.call(E);
      continue
    }
    o = !0, null != E.cleanup && I.push(E.cleanup)
  }
  return {
    proto: e,
    isDirty: o,
    cleanupFuncs: I
  }
}

function d(e, _) {
  let E = Object.entries(e);
  if (E.length > _)
    for (E = I.sortBy(E, e => {
        let [_, E] = e;
        return E.recentUses[E.recentUses.length - 1]
      }).reverse(); E.length > _;) E.pop();
  let t = {};
  for (let [e, _] of E) {
    let E = T.FrecencyItem.create();
    E.frecency = _.frecency, E.recentUses = _.recentUses.filter(e => null != e && e > 0).map(String), E.score = Math.round(_.score), E.totalUses = _.totalUses, t[e] = E
  }
  return t
}