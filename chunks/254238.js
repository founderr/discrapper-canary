n.d(t, {
    LO: function () {
        return y;
    },
    On: function () {
        return O;
    },
    Vv: function () {
        return v;
    },
    _: function () {
        return N;
    },
    bp: function () {
        return b;
    },
    ef: function () {
        return A;
    },
    s6: function () {
        return S;
    },
    sh: function () {
        return M;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(434179),
    o = n(771649),
    s = n(544891),
    l = n(570140),
    u = n(668781),
    c = n(340332),
    d = n(19780),
    _ = n(797258),
    E = n(626135),
    f = n(960048),
    h = n(607214),
    p = n(258609),
    m = n(893387),
    I = n(981631),
    T = n(689938);
function g(e, t) {
    var n, r;
    E.default.track(I.rMx.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: null === (r = _.Z.getSessionById(t)) || void 0 === r ? void 0 : null === (n = r.clientInfo) || void 0 === n ? void 0 : n.os
    });
}
async function S() {
    let e = p.Z.getAwaitingRemoteSessionInfo(),
        t = null == e ? void 0 : e.nonce;
    l.Z.dispatch({ type: 'REMOTE_SESSION_DISCONNECT' });
    let n = [];
    ((null == e ? void 0 : e.type) === I.ABu.PLAYSTATION || (null == e ? void 0 : e.type) === I.ABu.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(D(e.type, e.deviceId, e.commandId)), null != t && n.push(C(t));
    try {
        await Promise.all(n);
    } catch (e) {
        u.Z.show({
            title: T.Z.Messages.CANCEL_TRANSFER_VOICE_FAILED_TITLE,
            body: T.Z.Messages.CANCEL_TRANSFER_VOICE_FAILED_BODY
        });
    }
}
function A(e) {
    l.Z.dispatch({
        type: 'REMOTE_SESSION_CONNECT',
        sessionId: e
    });
}
function v(e, t) {
    let { selfMute: n, selfDeaf: r } = t;
    l.Z.dispatch({
        type: 'REMOTE_COMMAND',
        sessionId: e,
        payload: {
            type: 'VOICE_STATE_UPDATE',
            self_mute: n,
            self_deaf: r
        }
    }),
        g('VOICE_STATE_UPDATE', e);
}
function N(e) {
    l.Z.dispatch({
        type: 'REMOTE_COMMAND',
        sessionId: e,
        payload: { type: 'DISCONNECT' }
    }),
        g('DISCONNECT', e),
        S();
}
function O(e, t, n, r) {
    let i = (0, c.z)(n);
    null != i &&
        (l.Z.dispatch({
            type: 'REMOTE_COMMAND',
            sessionId: e,
            payload: {
                type: 'AUDIO_SETTINGS_UPDATE',
                context: i,
                id: t,
                ...r
            }
        }),
        g('AUDIO_SETTINGS_UPDATE', e));
}
async function R() {
    let e;
    try {
        let t = null != d.Z.getRTCConnectionId() ? o.o.TRANSFER_EXISTING_CALL : o.o.CREATE_NEW_CALL;
        e = (
            await s.tn.post({
                url: I.ANM.CONNECT_REQUEST_CREATE,
                body: { analytics_properties: { handoff_type: t } }
            })
        ).body.nonce;
    } catch (e) {
        f.Z.captureException(e);
    }
    return e;
}
function C(e) {
    return s.tn.del({ url: I.ANM.CONNECT_REQUEST(e) });
}
async function y(e) {
    let t;
    l.Z.dispatch({
        type: 'GAME_CONSOLE_FETCH_DEVICES_START',
        platform: e
    });
    try {
        t = await s.tn.get({ url: I.ANM.CONSOLES_DEVICES(e) });
    } catch (t) {
        throw (
            (l.Z.dispatch({
                type: 'GAME_CONSOLE_FETCH_DEVICES_FAIL',
                platform: e,
                error: t
            }),
            t)
        );
    }
    let n = t.body.devices;
    return (
        l.Z.dispatch({
            type: 'GAME_CONSOLE_FETCH_DEVICES_SUCCESS',
            platform: e,
            devices: n
        }),
        n
    );
}
function b(e, t) {
    l.Z.dispatch({
        type: 'GAME_CONSOLE_SELECT_DEVICE',
        platform: e,
        deviceId: t
    });
}
async function L(e, t, n, r) {
    let i;
    l.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_START',
        platform: e
    });
    try {
        i = await s.tn.post({
            url: I.ANM.CONSOLES_DEVICES_COMMANDS(e, t),
            body: {
                command: a.n.CONNECT_VOICE,
                channel_id: n.id,
                guild_id: n.guild_id,
                nonce: r
            }
        });
    } catch (t) {
        throw (
            (l.Z.dispatch({
                type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL',
                platform: e,
                error: t
            }),
            t)
        );
    }
    let o = i.body.id;
    return (
        l.Z.dispatch({
            type: 'WAIT_FOR_REMOTE_SESSION',
            sessionType: e,
            nonce: r,
            channelId: n.id,
            deviceId: t,
            commandId: o
        }),
        o
    );
}
async function D(e, t, n) {
    l.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START',
        platform: e,
        deviceId: t,
        commandId: n
    });
    try {
        await s.tn.del({ url: I.ANM.CONSOLES_DEVICES_COMMAND(e, t, n) });
    } catch (r) {
        throw (
            (l.Z.dispatch({
                type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL',
                platform: e,
                deviceId: t,
                commandId: n,
                error: r
            }),
            r)
        );
    }
    l.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS',
        platform: e,
        deviceId: t,
        commandId: n
    });
}
async function M(e, t, n) {
    await h.Z.maybeShowPTTAlert(e), await S();
    let r = await R();
    await L(e, t, n, r), (0, m.Z)(n.id, e);
}
