n.d(t, {
    L6: function () {
        return k;
    },
    Rc: function () {
        return x;
    },
    WH: function () {
        return R;
    },
    aP: function () {
        return P;
    },
    dV: function () {
        return G;
    },
    g: function () {
        return M;
    },
    iV: function () {
        return D;
    },
    n9: function () {
        return U;
    },
    pR: function () {
        return L;
    },
    rn: function () {
        return b;
    },
    tK: function () {
        return C;
    },
    xc: function () {
        return w;
    }
});
var r = n(512722),
    i = n.n(r),
    a = n(990547),
    o = n(544891),
    s = n(570140),
    l = n(258609),
    u = n(569545),
    c = n(525925),
    d = n(522474),
    _ = n(199902),
    E = n(314897),
    f = n(592125),
    h = n(430824),
    p = n(944486),
    m = n(979651),
    I = n(934415),
    T = n(70956),
    g = n(557457),
    S = n(573261);
n(26151), n(493683);
var A = n(475179);
n(287734);
var v = n(981631),
    N = n(70722);
let O = 2;
function R(e, t, n) {
    s.Z.dispatch({
        type: 'STREAM_START',
        streamType: null != e ? N.lo.GUILD : N.lo.CALL,
        guildId: e,
        channelId: t,
        appContext: __OVERLAY__ ? v.IlC.OVERLAY : v.IlC.APP,
        ...n
    });
}
function C(e, t) {
    let n = (0, u.V9)(e);
    s.Z.dispatch({
        type: 'STREAM_SET_PAUSED',
        streamKey: n,
        paused: t
    });
}
function y(e, t) {
    let n = f.Z.getChannel(t);
    return i()(null != n, 'Cannot join a null voice channel'), !m.Z.isInChannel(t) && (0, I.rY)(n, m.Z, h.Z);
}
function b(e, t) {
    if (null != l.Z.getRemoteSessionId()) return;
    let { guildId: n, channelId: r } = e;
    if (null != n && y(n, r)) return;
    let i = (0, u.V9)(e),
        a =
            (null == t ? void 0 : t.forceMultiple) ||
            _.Z.getAllActiveStreamsForChannel(r).filter((e) => {
                let { ownerId: t } = e;
                return t !== E.default.getId();
            }).length >= O;
    s.Z.dispatch({
        type: 'STREAM_WATCH',
        streamKey: i,
        allowMultiple: a
    }),
        !a && (null == t || !t.noFocus) && A.Z.selectParticipant(e.channelId, i);
}
function L(e, t) {
    s.Z.dispatch({
        type: 'STREAM_UPDATE_SELF_HIDDEN',
        channelId: e,
        selfStreamHidden: t
    });
}
function D(e, t) {
    let { guildId: n, channelId: r } = e;
    if (null != n && y(n, r)) return;
    b(e, t);
    let i = d.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT),
        a = p.Z.getVoiceChannelId();
    if (!i || a !== r) (0, c.Z)(e);
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    P(e, t),
        s.Z.dispatch({
            type: 'STREAM_STOP',
            streamKey: e,
            appContext: __OVERLAY__ ? v.IlC.OVERLAY : v.IlC.APP
        });
}
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    s.Z.dispatch({
        type: 'STREAM_CLOSE',
        streamKey: e,
        canShowFeedback: t
    });
}
async function U(e, t, n) {
    let r = (0, u.V9)({
        streamType: null != e ? N.lo.GUILD : N.lo.CALL,
        guildId: e,
        channelId: t,
        ownerId: n
    });
    s.Z.dispatch({
        type: 'STREAM_PREVIEW_FETCH_START',
        streamKey: r
    });
    try {
        let e = await o.tn.get({
            url: v.ANM.STREAM_PREVIEW(r),
            query: { version: Date.now() },
            oldFormErrors: !0
        });
        s.Z.dispatch({
            type: 'STREAM_PREVIEW_FETCH_SUCCESS',
            streamKey: r,
            previewURL: e.body.url
        });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * T.Z.Millis.SECOND),
            s.Z.dispatch({
                type: 'STREAM_PREVIEW_FETCH_FAIL',
                streamKey: r,
                retryAfter: e
            });
    }
}
async function w(e) {
    try {
        await S.Z.post({
            url: v.ANM.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: a.NetworkActionNames.STREAM_NOTIFY }
        });
    } catch (e) {}
}
function x(e) {
    (0, g.Ye)(e.preset, e.resolution, e.frameRate),
        s.Z.dispatch({
            type: 'STREAM_UPDATE_SETTINGS',
            ...e
        });
}
function G(e, t) {
    o.tn.patch({
        url: v.ANM.STREAM(e),
        body: { region: t },
        oldFormErrors: !0
    });
}
function k() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = _.Z.getCurrentUserActiveStream();
    null != t && M((0, u.V9)(t), e);
}
