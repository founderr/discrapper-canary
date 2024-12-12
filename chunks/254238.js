r.d(n, {
    LO: function () {
        return O;
    },
    On: function () {
        return N;
    },
    Vv: function () {
        return S;
    },
    _: function () {
        return A;
    },
    bp: function () {
        return D;
    },
    ef: function () {
        return y;
    },
    s6: function () {
        return b;
    },
    sh: function () {
        return w;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(434179),
    o = r(771649),
    l = r(544891),
    u = r(570140),
    c = r(668781),
    d = r(340332),
    f = r(19780),
    _ = r(797258),
    h = r(626135),
    p = r(960048),
    m = r(607214),
    g = r(258609),
    E = r(893387),
    v = r(981631),
    I = r(388032);
function T(e, n) {
    var r, i;
    h.default.track(v.rMx.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: null === (i = _.Z.getSessionById(n)) || void 0 === i ? void 0 : null === (r = i.clientInfo) || void 0 === r ? void 0 : r.os
    });
}
async function b() {
    let e = g.Z.getAwaitingRemoteSessionInfo(),
        n = null == e ? void 0 : e.nonce;
    u.Z.dispatch({ type: 'REMOTE_SESSION_DISCONNECT' });
    let r = [];
    ((null == e ? void 0 : e.type) === v.ABu.PLAYSTATION || (null == e ? void 0 : e.type) === v.ABu.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && r.push(x(e.type, e.deviceId, e.commandId)), null != n && r.push(R(n));
    try {
        await Promise.all(r);
    } catch (e) {
        c.Z.show({
            title: I.intl.string(I.t.LNhXcH),
            body: I.intl.string(I.t.QnKxtL)
        });
    }
}
function y(e) {
    u.Z.dispatch({
        type: 'REMOTE_SESSION_CONNECT',
        sessionId: e
    });
}
function S(e, n) {
    let { selfMute: r, selfDeaf: i } = n;
    u.Z.dispatch({
        type: 'REMOTE_COMMAND',
        sessionId: e,
        payload: {
            type: 'VOICE_STATE_UPDATE',
            self_mute: r,
            self_deaf: i
        }
    }),
        T('VOICE_STATE_UPDATE', e);
}
function A(e) {
    u.Z.dispatch({
        type: 'REMOTE_COMMAND',
        sessionId: e,
        payload: { type: 'DISCONNECT' }
    }),
        T('DISCONNECT', e),
        b();
}
function N(e, n, r, i) {
    let a = (0, d.z)(r);
    null != a &&
        (u.Z.dispatch({
            type: 'REMOTE_COMMAND',
            sessionId: e,
            payload: {
                type: 'AUDIO_SETTINGS_UPDATE',
                context: a,
                id: n,
                ...i
            }
        }),
        T('AUDIO_SETTINGS_UPDATE', e));
}
async function C() {
    let e;
    try {
        let n = null != f.Z.getRTCConnectionId() ? o.o.TRANSFER_EXISTING_CALL : o.o.CREATE_NEW_CALL;
        e = (
            await l.tn.post({
                url: v.ANM.CONNECT_REQUEST_CREATE,
                body: { analytics_properties: { handoff_type: n } },
                rejectWithError: !1
            })
        ).body.nonce;
    } catch (e) {
        p.Z.captureException(e);
    }
    return e;
}
function R(e) {
    return l.tn.del({
        url: v.ANM.CONNECT_REQUEST(e),
        rejectWithError: !1
    });
}
async function O(e) {
    let n;
    u.Z.dispatch({
        type: 'GAME_CONSOLE_FETCH_DEVICES_START',
        platform: e
    });
    try {
        n = await l.tn.get({
            url: v.ANM.CONSOLES_DEVICES(e),
            rejectWithError: !1
        });
    } catch (n) {
        throw (
            (u.Z.dispatch({
                type: 'GAME_CONSOLE_FETCH_DEVICES_FAIL',
                platform: e,
                error: n
            }),
            n)
        );
    }
    let r = n.body.devices;
    return (
        u.Z.dispatch({
            type: 'GAME_CONSOLE_FETCH_DEVICES_SUCCESS',
            platform: e,
            devices: r
        }),
        r
    );
}
function D(e, n) {
    u.Z.dispatch({
        type: 'GAME_CONSOLE_SELECT_DEVICE',
        platform: e,
        deviceId: n
    });
}
async function L(e, n, r, i) {
    let a;
    u.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_START',
        platform: e
    });
    try {
        a = await l.tn.post({
            url: v.ANM.CONSOLES_DEVICES_COMMANDS(e, n),
            body: {
                command: s.n.CONNECT_VOICE,
                channel_id: r.id,
                guild_id: r.guild_id,
                nonce: i
            },
            rejectWithError: !1
        });
    } catch (n) {
        throw (
            (u.Z.dispatch({
                type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL',
                platform: e,
                error: n
            }),
            n)
        );
    }
    let o = a.body.id;
    return (
        u.Z.dispatch({
            type: 'WAIT_FOR_REMOTE_SESSION',
            sessionType: e,
            nonce: i,
            channelId: r.id,
            deviceId: n,
            commandId: o
        }),
        o
    );
}
async function x(e, n, r) {
    u.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START',
        platform: e,
        deviceId: n,
        commandId: r
    });
    try {
        await l.tn.del({
            url: v.ANM.CONSOLES_DEVICES_COMMAND(e, n, r),
            rejectWithError: !1
        });
    } catch (i) {
        throw (
            (u.Z.dispatch({
                type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL',
                platform: e,
                deviceId: n,
                commandId: r,
                error: i
            }),
            i)
        );
    }
    u.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS',
        platform: e,
        deviceId: n,
        commandId: r
    });
}
async function w(e, n, r) {
    await m.Z.maybeShowPTTAlert(e), await b();
    let i = await C();
    await L(e, n, r, i), (0, E.Z)(r.id, e);
}
