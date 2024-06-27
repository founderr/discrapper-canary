"use strict";
n.d(t, {
  LO: function() {
    return g
  },
  On: function() {
    return R
  },
  Vv: function() {
    return m
  },
  _: function() {
    return O
  },
  bp: function() {
    return C
  },
  ef: function() {
    return N
  },
  s6: function() {
    return A
  },
  sh: function() {
    return D
  }
}), n(653041), n(47120);
var i = n(434179),
  r = n(771649),
  s = n(544891),
  o = n(570140),
  a = n(668781),
  l = n(340332),
  u = n(19780),
  _ = n(797258),
  c = n(626135),
  d = n(960048),
  E = n(607214),
  I = n(258609),
  T = n(893387),
  h = n(981631),
  f = n(689938);

function S(e, t) {
  var n, i;
  c.default.track(h.rMx.REMOTE_COMMAND_SENT, {
    command_type: e,
    remote_platform: null === (i = _.Z.getSessionById(t)) || void 0 === i ? void 0 : null === (n = i.clientInfo) || void 0 === n ? void 0 : n.os
  })
}
async function A() {
  let e = I.Z.getAwaitingRemoteSessionInfo(),
    t = null == e ? void 0 : e.nonce;
  o.Z.dispatch({
    type: "REMOTE_SESSION_DISCONNECT"
  });
  let n = [];
  ((null == e ? void 0 : e.type) === h.ABu.PLAYSTATION || (null == e ? void 0 : e.type) === h.ABu.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(L(e.type, e.deviceId, e.commandId)), null != t && n.push(function(e) {
    return s.tn.del({
      url: h.ANM.CONNECT_REQUEST(e)
    })
  }(t));
  try {
    await Promise.all(n)
  } catch (e) {
    a.Z.show({
      title: f.Z.Messages.CANCEL_TRANSFER_VOICE_FAILED_TITLE,
      body: f.Z.Messages.CANCEL_TRANSFER_VOICE_FAILED_BODY
    })
  }
}

function N(e) {
  o.Z.dispatch({
    type: "REMOTE_SESSION_CONNECT",
    sessionId: e
  })
}

function m(e, t) {
  let {
    selfMute: n,
    selfDeaf: i
  } = t;
  o.Z.dispatch({
    type: "REMOTE_COMMAND",
    sessionId: e,
    payload: {
      type: "VOICE_STATE_UPDATE",
      self_mute: n,
      self_deaf: i
    }
  }), S("VOICE_STATE_UPDATE", e)
}

function O(e) {
  o.Z.dispatch({
    type: "REMOTE_COMMAND",
    sessionId: e,
    payload: {
      type: "DISCONNECT"
    }
  }), S("DISCONNECT", e), A()
}

function R(e, t, n, i) {
  let r = (0, l.z)(n);
  null != r && (o.Z.dispatch({
    type: "REMOTE_COMMAND",
    sessionId: e,
    payload: {
      type: "AUDIO_SETTINGS_UPDATE",
      context: r,
      id: t,
      ...i
    }
  }), S("AUDIO_SETTINGS_UPDATE", e))
}
async function p() {
  let e;
  try {
    let t = null != u.Z.getRTCConnectionId() ? r.o.TRANSFER_EXISTING_CALL : r.o.CREATE_NEW_CALL;
    e = (await s.tn.post({
      url: h.ANM.CONNECT_REQUEST_CREATE,
      body: {
        analytics_properties: {
          handoff_type: t
        }
      }
    })).body.nonce
  } catch (e) {
    d.Z.captureException(e)
  }
  return e
}
async function g(e) {
  let t;
  o.Z.dispatch({
    type: "GAME_CONSOLE_FETCH_DEVICES_START",
    platform: e
  });
  try {
    t = await s.tn.get({
      url: h.ANM.CONSOLES_DEVICES(e)
    })
  } catch (t) {
    throw o.Z.dispatch({
      type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
      platform: e,
      error: t
    }), t
  }
  let n = t.body.devices;
  return o.Z.dispatch({
    type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
    platform: e,
    devices: n
  }), n
}

function C(e, t) {
  o.Z.dispatch({
    type: "GAME_CONSOLE_SELECT_DEVICE",
    platform: e,
    deviceId: t
  })
}
async function v(e, t, n, r) {
  let a;
  o.Z.dispatch({
    type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
    platform: e
  });
  try {
    a = await s.tn.post({
      url: h.ANM.CONSOLES_DEVICES_COMMANDS(e, t),
      body: {
        command: i.n.CONNECT_VOICE,
        channel_id: n.id,
        guild_id: n.guild_id,
        nonce: r
      }
    })
  } catch (t) {
    throw o.Z.dispatch({
      type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
      platform: e,
      error: t
    }), t
  }
  let l = a.body.id;
  return o.Z.dispatch({
    type: "WAIT_FOR_REMOTE_SESSION",
    sessionType: e,
    nonce: r,
    channelId: n.id,
    deviceId: t,
    commandId: l
  }), l
}
async function L(e, t, n) {
  o.Z.dispatch({
    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
    platform: e,
    deviceId: t,
    commandId: n
  });
  try {
    await s.tn.del({
      url: h.ANM.CONSOLES_DEVICES_COMMAND(e, t, n)
    })
  } catch (i) {
    throw o.Z.dispatch({
      type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
      platform: e,
      deviceId: t,
      commandId: n,
      error: i
    }), i
  }
  o.Z.dispatch({
    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
    platform: e,
    deviceId: t,
    commandId: n
  })
}
async function D(e, t, n) {
  await E.Z.maybeShowPTTAlert(e), await A();
  let i = await p();
  await v(e, t, n, i), (0, T.Z)(n.id, e)
}