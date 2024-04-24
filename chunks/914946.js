"use strict";
a.r(t), a.d(t, {
  computeActivityFlags: function() {
    return Y
  },
  fetchApplicationsRPC: function() {
    return K
  },
  getDeprecatedVoiceSettingsWithShortcut: function() {
    return Q
  },
  getRemoteIconURL: function() {
    return U
  },
  getVoiceConnectionState: function() {
    return V
  },
  getVoiceSettingsWithShortcut: function() {
    return Z
  },
  hasMessageReadPermission: function() {
    return H
  },
  isMatchingOrigin: function() {
    return B
  },
  processSocketThrottlers: function() {
    return z
  },
  transformChannel: function() {
    return G
  },
  transformInternalTextMessage: function() {
    return w
  },
  transformRelationship: function() {
    return F
  },
  transformVoiceState: function() {
    return k
  },
  validateActivityInvite: function() {
    return W
  },
  validateApplication: function() {
    return J
  },
  validateOriginAndUpdateSocket: function() {
    return q
  },
  validatePostMessageTransport: function() {
    return X
  }
}), a("47120"), a("653041"), a("411104"), a("757143"), a("392711");
var n, s = a("729594"),
  l = a("544891"),
  i = a("63023"),
  r = a("433517"),
  o = a("904245"),
  u = a("155268"),
  d = a("454585"),
  c = a("739566"),
  f = a("695346"),
  E = a("131704"),
  h = a("598077"),
  _ = a("592125"),
  C = a("430824"),
  m = a("131951"),
  S = a("375954"),
  I = a("158776"),
  p = a("594174"),
  T = a("979651"),
  g = a("70956"),
  A = a("5192"),
  N = a("226951"),
  v = a("996106"),
  R = a("863141"),
  O = a("186901"),
  L = a("981631");
let M = null !== (n = s.parse(window.GLOBAL_ENV.API_ENDPOINT, !1, !0).host) && void 0 !== n ? n : "localhost",
  P = function() {
    let e = M.split(":")[0];
    if (!e.includes(".")) return e;
    let t = e.split("."),
      a = t[t.length - 1];
    return /^\d+$/.test(a) ? e : t.slice(-2).join(".")
  }(),
  x = new RegExp("^".concat(N.default.escape("https://"), "(?:[a-z]+\\.)?(").concat(N.default.escape(P), "|discordapp.com|discord.com)$")),
  y = 1 * g.default.Millis.MINUTE,
  D = {};

function b(e) {
  return "customEmoji" === e.type && (e.type = "emoji"), "emoji" === e.type && e.src && (e.src = U(e.src)), Array.isArray(e.content) && (e.content = e.content.map(b)), e
}

function U(e) {
  return /^http/.test(e) ? e : "".concat(location.protocol, "//").concat(location.host).concat("/" === e.charAt(0) ? "" : "/").concat(e)
}

function j(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  return t.indexOf(e) > -1
}

function G(e, t) {
  let a = [],
    n = e.getGuildId();
  return ![L.ChannelTypes.GUILD_CATEGORY, ...(0, E.GUILD_VOCAL_CHANNEL_TYPES)].includes(e.type) && a.push(new Promise(t => {
    S.default.whenReady(e.id, () => t()), o.default.fetchMessages({
      channelId: e.id,
      limit: L.MAX_MESSAGES_PER_CHANNEL
    })
  })), Promise.all(a).then(() => {
    var a;
    let s = (!e.isNSFW() || (null === (a = p.default.getCurrentUser()) || void 0 === a ? void 0 : a.nsfwAllowed) === !0) && t ? S.default.getMessages(e.id).toArray().map(w) : [],
      l = Object.values(T.default.getVoiceStatesForChannel(e.id)).map(t => k(n, e.id, t));
    return {
      id: e.id,
      name: e.name,
      type: e.type,
      topic: e.topic,
      bitrate: e.bitrate,
      user_limit: e.userLimit,
      guild_id: n,
      position: e.position,
      messages: s,
      voice_states: l
    }
  })
}

function w(e) {
  let t = d.default.parseToAST(e.content, !0, {
      channelId: e.channel_id
    }).map(b),
    a = _.default.getChannel(e.channel_id),
    n = null != e.author ? (0, c.getUserAuthor)(new h.default(e.author), a) : void 0;
  return {
    id: e.id,
    blocked: e.blocked,
    bot: e.bot,
    content: e.content,
    content_parsed: t.length ? t : void 0,
    nick: null == n ? void 0 : n.nick,
    author_color: null == n ? void 0 : n.colorString,
    edited_timestamp: e.edited_timestamp || e.editedTimestamp,
    timestamp: e.timestamp,
    tts: e.tts,
    mentions: e.mentions,
    mention_everyone: e.mention_everyone || e.mentionEveryone,
    mention_roles: e.mention_roles || e.mentionRoles,
    embeds: e.embeds,
    attachments: e.attachments,
    author: e.author,
    pinned: e.pinned,
    type: e.type
  }
}

function k(e, t, a) {
  let {
    mute: n,
    deaf: s,
    selfMute: l,
    selfDeaf: i,
    suppress: r,
    userId: o
  } = a, u = p.default.getUser(o);
  if (null == u) throw Error("Invalid user id: ".concat(o));
  return {
    nick: A.default.getName(e, t, u),
    mute: m.default.isLocalMute(u.id),
    volume: m.default.getLocalVolume(u.id),
    pan: m.default.getLocalPan(u.id),
    voice_state: {
      mute: n,
      deaf: s,
      self_mute: l,
      self_deaf: i,
      suppress: r
    },
    user: (0, R.default)(u)
  }
}

function F(e, t, a) {
  let n = p.default.getUser(t);
  return {
    type: e,
    user: null != n ? (0, R.default)(n) : null,
    presence: {
      status: I.default.getStatus(t),
      activity: null != a ? I.default.getApplicationActivity(t, a) : I.default.getPrimaryActivity(t)
    }
  }
}

function B(e) {
  let t;
  if (null == e) return !1;
  let a = window.location.origin;
  if (e === a) return !0;
  try {
    t = s.parse(e).hostname
  } catch (e) {
    return !1
  }
  return window.location.hostname === t && "localhost" === t || null == e.match("staging") && (!!(x.test(e) && x.test(a)) || !1)
}

function H(e, t, a) {
  let n = C.default.getGuild(e.getGuildId());
  return (null != n ? n.getApplicationId() : e.getApplicationId()) === t || a.indexOf(L.OAuth2Scopes.MESSAGES_READ) > -1
}

function V(e) {
  switch (e) {
    case L.RTCConnectionStates.RTC_CONNECTED:
    case L.RTCConnectionStates.RTC_CONNECTING:
    case L.RTCConnectionStates.RTC_DISCONNECTED:
      return e.replace(/^RTC_/, "VOICE_");
    default:
      return e
  }
}

function Y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      instance: a,
      secrets: n,
      party: s
    } = e,
    l = 0;
  return (a && (l |= L.ActivityFlags.INSTANCE), (null == n ? void 0 : n.join) != null && (l |= L.ActivityFlags.JOIN), t) ? (l |= L.ActivityFlags.EMBEDDED, l |= L.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL) : (((null == s ? void 0 : s.privacy) === L.ActivityPartyPrivacy.PUBLIC || r.Storage.get("ACTIVITIES_FORCE_PUBLIC")) && (f.AllowActivityPartyPrivacyFriends.getSetting() && (l |= L.ActivityFlags.PARTY_PRIVACY_FRIENDS), f.AllowActivityPartyPrivacyVoiceChannel.getSetting() && (l |= L.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)), l)
}

function W(e, t, a) {
  if (e === L.ActivityActionTypes.JOIN) return null != t && null != t.id && null != a.join;
  return !1
}

function K(e, t, a) {
  return l.HTTP.get({
    url: L.Endpoints.APPLICATION_RPC(t),
    oldFormErrors: !0,
    retries: 3
  }).then(n => {
    let {
      body: {
        rpc_origins: s,
        id: l,
        name: i,
        icon: r,
        cover_image: o,
        flags: d
      }
    } = n;
    if ("string" == typeof a) {
      if (e.transport === O.TransportTypes.POST_MESSAGE) {
        let e = (0, u.default)(t);
        if (null == e || !j(a, [e])) throw new v.default({
          closeCode: L.RPCCloseCodes.INVALID_ORIGIN
        }, "Invalid Origin")
      } else if (!j(a, s)) throw new v.default({
        closeCode: L.RPCCloseCodes.INVALID_ORIGIN
      }, "Invalid Origin")
    }
    e.application = {
      id: l,
      name: i,
      icon: r,
      coverImage: o,
      flags: d
    }
  }, () => {
    throw new v.default({
      closeCode: L.RPCCloseCodes.INVALID_CLIENTID
    }, "Invalid Client ID")
  })
}
async function z(e, t) {
  let a = D[e];
  null == a && (a = new i.default(t ? 2 : 60, y), D[e] = a), await a.process()
}

function q(e, t) {
  null == t && (e.authorization.scopes = [O.RPC_LOCAL_SCOPE])
}

function Q(e) {
  let t = m.default.getSettings(),
    a = e => Object.values(e).sort((e, t) => e.index - t.index).map(e => ({
      id: e.id,
      name: e.name
    })),
    n = e(t);
  return {
    input: {
      available_devices: a(m.default.getInputDevices()),
      device_id: t.inputDeviceId,
      volume: t.inputVolume
    },
    output: {
      available_devices: a(m.default.getOutputDevices()),
      device_id: t.outputDeviceId,
      volume: t.outputVolume
    },
    mode: {
      type: t.mode,
      auto_threshold: t.modeOptions.autoThreshold,
      threshold: t.modeOptions.threshold,
      shortcut: n,
      delay: t.modeOptions.delay
    },
    automatic_gain_control: t.automaticGainControl,
    echo_cancellation: t.echoCancellation,
    noise_suppression: t.noiseSuppression,
    qos: t.qos,
    silence_warning: t.silenceWarning,
    deaf: t.deaf,
    mute: t.mute
  }
}

function Z(e, t) {
  let a = m.default.getSettings(e),
    n = t(a);
  return {
    input_mode: {
      type: a.mode,
      shortcut: n
    },
    local_mutes: Object.keys(a.localMutes),
    local_volumes: a.localVolumes,
    self_mute: a.mute,
    self_deaf: a.deaf
  }
}

function X(e) {
  if (e !== O.TransportTypes.POST_MESSAGE) throw new v.default({
    errorCode: L.RPCErrors.INVALID_COMMAND
  }, 'command not available from "'.concat(e, " transport"))
}

function J(e) {
  if (null == e.id) throw new v.default({
    errorCode: L.RPCErrors.INVALID_COMMAND
  }, "Invalid application");
  return e.id
}