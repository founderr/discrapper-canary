n.d(t, {
    LO: function () {
        return A;
    },
    On: function () {
        return T;
    },
    Vv: function () {
        return S;
    },
    _: function () {
        return b;
    },
    bp: function () {
        return N;
    },
    ef: function () {
        return I;
    },
    s6: function () {
        return v;
    },
    sh: function () {
        return O;
    }
}),
    n(653041),
    n(47120);
var r = n(434179),
    i = n(771649),
    a = n(544891),
    s = n(570140),
    o = n(668781),
    l = n(340332),
    u = n(19780),
    c = n(797258),
    d = n(626135),
    f = n(960048),
    _ = n(607214),
    h = n(258609),
    p = n(893387),
    m = n(981631),
    g = n(388032);
function E(e, t) {
    var n, r;
    d.default.track(m.rMx.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: null === (r = c.Z.getSessionById(t)) || void 0 === r ? void 0 : null === (n = r.clientInfo) || void 0 === n ? void 0 : n.os
    });
}
async function v() {
    let e = h.Z.getAwaitingRemoteSessionInfo(),
        t = null == e ? void 0 : e.nonce;
    s.Z.dispatch({ type: 'REMOTE_SESSION_DISCONNECT' });
    let n = [];
    ((null == e ? void 0 : e.type) === m.ABu.PLAYSTATION || (null == e ? void 0 : e.type) === m.ABu.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(R(e.type, e.deviceId, e.commandId)),
        null != t &&
            n.push(
                (function (e) {
                    return a.tn.del({ url: m.ANM.CONNECT_REQUEST(e) });
                })(t)
            );
    try {
        await Promise.all(n);
    } catch (e) {
        o.Z.show({
            title: g.intl.string(g.t.LNhXcH),
            body: g.intl.string(g.t.QnKxtL)
        });
    }
}
function I(e) {
    s.Z.dispatch({
        type: 'REMOTE_SESSION_CONNECT',
        sessionId: e
    });
}
function S(e, t) {
    let { selfMute: n, selfDeaf: r } = t;
    s.Z.dispatch({
        type: 'REMOTE_COMMAND',
        sessionId: e,
        payload: {
            type: 'VOICE_STATE_UPDATE',
            self_mute: n,
            self_deaf: r
        }
    }),
        E('VOICE_STATE_UPDATE', e);
}
function b(e) {
    s.Z.dispatch({
        type: 'REMOTE_COMMAND',
        sessionId: e,
        payload: { type: 'DISCONNECT' }
    }),
        E('DISCONNECT', e),
        v();
}
function T(e, t, n, r) {
    let i = (0, l.z)(n);
    null != i &&
        (s.Z.dispatch({
            type: 'REMOTE_COMMAND',
            sessionId: e,
            payload: {
                type: 'AUDIO_SETTINGS_UPDATE',
                context: i,
                id: t,
                ...r
            }
        }),
        E('AUDIO_SETTINGS_UPDATE', e));
}
async function y() {
    let e;
    try {
        let t = null != u.Z.getRTCConnectionId() ? i.o.TRANSFER_EXISTING_CALL : i.o.CREATE_NEW_CALL;
        e = (
            await a.tn.post({
                url: m.ANM.CONNECT_REQUEST_CREATE,
                body: { analytics_properties: { handoff_type: t } }
            })
        ).body.nonce;
    } catch (e) {
        f.Z.captureException(e);
    }
    return e;
}
async function A(e) {
    let t;
    s.Z.dispatch({
        type: 'GAME_CONSOLE_FETCH_DEVICES_START',
        platform: e
    });
    try {
        t = await a.tn.get({ url: m.ANM.CONSOLES_DEVICES(e) });
    } catch (t) {
        throw (
            (s.Z.dispatch({
                type: 'GAME_CONSOLE_FETCH_DEVICES_FAIL',
                platform: e,
                error: t
            }),
            t)
        );
    }
    let n = t.body.devices;
    return (
        s.Z.dispatch({
            type: 'GAME_CONSOLE_FETCH_DEVICES_SUCCESS',
            platform: e,
            devices: n
        }),
        n
    );
}
function N(e, t) {
    s.Z.dispatch({
        type: 'GAME_CONSOLE_SELECT_DEVICE',
        platform: e,
        deviceId: t
    });
}
async function C(e, t, n, i) {
    let o;
    s.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_START',
        platform: e
    });
    try {
        o = await a.tn.post({
            url: m.ANM.CONSOLES_DEVICES_COMMANDS(e, t),
            body: {
                command: r.n.CONNECT_VOICE,
                channel_id: n.id,
                guild_id: n.guild_id,
                nonce: i
            }
        });
    } catch (t) {
        throw (
            (s.Z.dispatch({
                type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL',
                platform: e,
                error: t
            }),
            t)
        );
    }
    let l = o.body.id;
    return (
        s.Z.dispatch({
            type: 'WAIT_FOR_REMOTE_SESSION',
            sessionType: e,
            nonce: i,
            channelId: n.id,
            deviceId: t,
            commandId: l
        }),
        l
    );
}
async function R(e, t, n) {
    s.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START',
        platform: e,
        deviceId: t,
        commandId: n
    });
    try {
        await a.tn.del({ url: m.ANM.CONSOLES_DEVICES_COMMAND(e, t, n) });
    } catch (r) {
        throw (
            (s.Z.dispatch({
                type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL',
                platform: e,
                deviceId: t,
                commandId: n,
                error: r
            }),
            r)
        );
    }
    s.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS',
        platform: e,
        deviceId: t,
        commandId: n
    });
}
async function O(e, t, n) {
    await _.Z.maybeShowPTTAlert(e), await v();
    let r = await y();
    await C(e, t, n, r), (0, p.Z)(n.id, e);
}
