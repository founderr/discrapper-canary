n.d(t, {
  FJ: function() {
    return X
  },
  RE: function() {
    return j
  },
  S5: function() {
    return Y
  },
  T5: function() {
    return G
  },
  Xb: function() {
    return w
  },
  YK: function() {
    return q
  },
  _f: function() {
    return $
  },
  aE: function() {
    return k
  },
  bu: function() {
    return J
  },
  cD: function() {
    return B
  },
  fy: function() {
    return W
  },
  s9: function() {
    return H
  },
  t9: function() {
    return z
  },
  tr: function() {
    return Q
  },
  vv: function() {
    return K
  },
  zM: function() {
    return V
  },
  zy: function() {
    return F
  }
}), n(47120), n(653041), n(411104), n(757143), n(392711);
var s, i = n(729594),
  l = n(243814),
  a = n(544891),
  r = n(63023),
  o = n(433517),
  c = n(904245),
  u = n(155268),
  d = n(454585),
  E = n(739566),
  h = n(695346),
  _ = n(131704),
  I = n(598077),
  m = n(592125),
  T = n(430824),
  g = n(131951),
  p = n(375954),
  N = n(158776),
  S = n(594174),
  C = n(979651),
  A = n(70956),
  f = n(5192),
  Z = n(226951),
  L = n(996106),
  O = n(863141),
  v = n(186901),
  R = n(981631);
let P = null !== (s = i.parse(window.GLOBAL_ENV.API_ENDPOINT, !1, !0).host) && void 0 !== s ? s : "localhost",
  x = function() {
    let e = P.split(":")[0];
    if (!e.includes(".")) return e;
    let t = e.split("."),
      n = t[t.length - 1];
    return /^\d+$/.test(n) ? e : t.slice(-2).join(".")
  }(),
  M = new RegExp("^".concat(Z.Z.escape("https://"), "(?:[a-z]+\\.)?(").concat(Z.Z.escape(x), "|discordapp.com|discord.com)$")),
  D = 1 * A.Z.Millis.MINUTE,
  b = {};

function y(e) {
  return "customEmoji" === e.type && (e.type = "emoji"), "emoji" === e.type && e.src && (e.src = j(e.src)), Array.isArray(e.content) && (e.content = e.content.map(y)), e
}

function j(e) {
  return /^http/.test(e) ? e : "".concat(location.protocol, "//").concat(location.host).concat("/" === e.charAt(0) ? "" : "/").concat(e)
}

function U(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  return t.indexOf(e) > -1
}

function G(e, t) {
  let n = [],
    s = e.getGuildId();
  return ![R.d4z.GUILD_CATEGORY, ..._.tx].includes(e.type) && n.push(new Promise(t => {
    p.Z.whenReady(e.id, () => t()), c.Z.fetchMessages({
      channelId: e.id,
      limit: R.AQB
    })
  })), Promise.all(n).then(() => {
    var n;
    let i = (!e.isNSFW() || (null === (n = S.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) === !0) && t ? p.Z.getMessages(e.id).toArray().map(w) : [],
      l = Object.values(C.Z.getVoiceStatesForChannel(e.id)).map(t => k(s, e.id, t));
    return {
      id: e.id,
      name: e.name,
      type: e.type,
      topic: e.topic,
      bitrate: e.bitrate,
      user_limit: e.userLimit,
      guild_id: s,
      position: e.position,
      messages: i,
      voice_states: l
    }
  })
}

function w(e) {
  let t = d.Z.parseToAST(e.content, !0, {
      channelId: e.channel_id
    }).map(y),
    n = m.Z.getChannel(e.channel_id),
    s = null != e.author ? (0, E.ij)(new I.Z(e.author), n) : void 0;
  return {
    id: e.id,
    blocked: e.blocked,
    bot: e.bot,
    content: e.content,
    content_parsed: t.length ? t : void 0,
    nick: null == s ? void 0 : s.nick,
    author_color: null == s ? void 0 : s.colorString,
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

function k(e, t, n) {
  let {
    mute: s,
    deaf: i,
    selfMute: l,
    selfDeaf: a,
    suppress: r,
    userId: o
  } = n, c = S.default.getUser(o);
  if (null == c) throw Error("Invalid user id: ".concat(o));
  return {
    nick: f.ZP.getName(e, t, c),
    mute: g.Z.isLocalMute(c.id),
    volume: g.Z.getLocalVolume(c.id),
    pan: g.Z.getLocalPan(c.id),
    voice_state: {
      mute: s,
      deaf: i,
      self_mute: l,
      self_deaf: a,
      suppress: r
    },
    user: (0, O.Z)(c)
  }
}

function B(e, t, n) {
  let s = S.default.getUser(t);
  return {
    type: e,
    user: null != s ? (0, O.Z)(s) : null,
    presence: {
      status: N.Z.getStatus(t),
      activity: null != n ? N.Z.getApplicationActivity(t, n) : N.Z.getPrimaryActivity(t)
    }
  }
}

function H(e) {
  let t;
  if (null == e) return !1;
  let n = window.location.origin;
  if (e === n) return !0;
  try {
    t = i.parse(e).hostname
  } catch (e) {
    return !1
  }
  return window.location.hostname === t && "localhost" === t || null == e.match("staging") && (!!(M.test(e) && M.test(n)) || !1)
}

function V(e, t, n) {
  let s = T.Z.getGuild(e.getGuildId());
  return (null != s ? s.getApplicationId() : e.getApplicationId()) === t || n.indexOf(l.x.MESSAGES_READ) > -1
}

function F(e) {
  switch (e) {
    case R.hes.RTC_CONNECTED:
    case R.hes.RTC_CONNECTING:
    case R.hes.RTC_DISCONNECTED:
      return e.replace(/^RTC_/, "VOICE_");
    default:
      return e
  }
}

function Y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      instance: n,
      secrets: s,
      party: i
    } = e,
    l = 0;
  return (n && (l |= R.xjy.INSTANCE), (null == s ? void 0 : s.join) != null && (l |= R.xjy.JOIN), t) ? (l |= R.xjy.EMBEDDED, l |= R.xjy.PARTY_PRIVACY_VOICE_CHANNEL) : (((null == i ? void 0 : i.privacy) === R.RYY.PUBLIC || o.K.get("ACTIVITIES_FORCE_PUBLIC")) && (h.cP.getSetting() && (l |= R.xjy.PARTY_PRIVACY_FRIENDS), h.Ou.getSetting() && (l |= R.xjy.PARTY_PRIVACY_VOICE_CHANNEL)), l)
}

function z(e, t, n) {
  if (e === R.mFx.JOIN) return null != t && null != t.id && null != n.join;
  return !1
}

function W(e, t, n) {
  return a.tn.get({
    url: R.ANM.APPLICATION_RPC(t),
    oldFormErrors: !0,
    retries: 3
  }).then(s => {
    let {
      body: {
        rpc_origins: i,
        id: l,
        name: a,
        icon: r,
        cover_image: o,
        flags: c
      }
    } = s;
    if ("string" == typeof n) {
      if (e.transport === v.He.POST_MESSAGE) {
        let e = (0, u.Z)(t);
        if (null == e || !U(n, [e])) throw new L.Z({
          closeCode: R.$VG.INVALID_ORIGIN
        }, "Invalid Origin")
      } else if (!U(n, i)) throw new L.Z({
        closeCode: R.$VG.INVALID_ORIGIN
      }, "Invalid Origin")
    }
    e.application = {
      id: l,
      name: a,
      icon: r,
      coverImage: o,
      flags: c
    }
  }, () => {
    throw new L.Z({
      closeCode: R.$VG.INVALID_CLIENTID
    }, "Invalid Client ID")
  })
}
async function K(e, t) {
  let n = b[e];
  null == n && (n = new r.Z(t ? 2 : 60, D), b[e] = n), await n.process()
}

function q(e, t) {
  null == t && (e.authorization.scopes = [v.lH])
}

function Q(e) {
  let t = g.Z.getSettings(),
    n = e => Object.values(e).sort((e, t) => e.index - t.index).map(e => ({
      id: e.id,
      name: e.name
    })),
    s = e(t);
  return {
    input: {
      available_devices: n(g.Z.getInputDevices()),
      device_id: t.inputDeviceId,
      volume: t.inputVolume
    },
    output: {
      available_devices: n(g.Z.getOutputDevices()),
      device_id: t.outputDeviceId,
      volume: t.outputVolume
    },
    mode: {
      type: t.mode,
      auto_threshold: t.modeOptions.autoThreshold,
      threshold: t.modeOptions.threshold,
      shortcut: s,
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

function X(e, t) {
  let n = g.Z.getSettings(e),
    s = t(n);
  return {
    input_mode: {
      type: n.mode,
      shortcut: s
    },
    local_mutes: Object.keys(n.localMutes),
    local_volumes: n.localVolumes,
    self_mute: n.mute,
    self_deaf: n.deaf
  }
}

function J(e) {
  if (e !== v.He.POST_MESSAGE) throw new L.Z({
    errorCode: R.lTL.INVALID_COMMAND
  }, 'command not available from "'.concat(e, " transport"))
}

function $(e) {
  if (null == e.id) throw new L.Z({
    errorCode: R.lTL.INVALID_COMMAND
  }, "Invalid application");
  return e.id
}