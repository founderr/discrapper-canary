n.d(t, {
    L6: function () {
        return U;
    },
    Rc: function () {
        return P;
    },
    WH: function () {
        return A;
    },
    aP: function () {
        return x;
    },
    dV: function () {
        return k;
    },
    g: function () {
        return L;
    },
    iV: function () {
        return D;
    },
    n9: function () {
        return w;
    },
    pR: function () {
        return O;
    },
    rn: function () {
        return R;
    },
    tK: function () {
        return N;
    },
    xc: function () {
        return M;
    }
});
var r = n(512722),
    i = n.n(r),
    a = n(990547),
    s = n(544891),
    o = n(570140),
    l = n(258609),
    u = n(569545),
    c = n(525925),
    d = n(522474),
    f = n(199902),
    _ = n(314897),
    p = n(592125),
    h = n(430824),
    m = n(944486),
    g = n(979651),
    E = n(934415),
    v = n(70956),
    I = n(557457),
    b = n(573261);
n(26151), n(493683);
var S = n(475179);
n(287734);
var T = n(981631),
    y = n(70722);
function A(e, t, n) {
    o.Z.dispatch({
        type: 'STREAM_START',
        streamType: null != e ? y.lo.GUILD : y.lo.CALL,
        guildId: e,
        channelId: t,
        appContext: __OVERLAY__ ? T.IlC.OVERLAY : T.IlC.APP,
        ...n
    });
}
function N(e, t) {
    let n = (0, u.V9)(e);
    o.Z.dispatch({
        type: 'STREAM_SET_PAUSED',
        streamKey: n,
        paused: t
    });
}
function C(e, t) {
    let n = p.Z.getChannel(t);
    return i()(null != n, 'Cannot join a null voice channel'), !g.Z.isInChannel(t) && (0, E.rY)(n, g.Z, h.Z);
}
function R(e, t) {
    if (null != l.Z.getRemoteSessionId()) return;
    let { guildId: n, channelId: r } = e;
    if (null != n && C(n, r)) return;
    let i = (0, u.V9)(e),
        a =
            (null == t ? void 0 : t.forceMultiple) ||
            f.Z.getAllActiveStreamsForChannel(r).filter((e) => {
                let { ownerId: t } = e;
                return t !== _.default.getId();
            }).length >= 2;
    o.Z.dispatch({
        type: 'STREAM_WATCH',
        streamKey: i,
        allowMultiple: a
    }),
        !a && (null == t || !t.noFocus) && S.Z.selectParticipant(e.channelId, i);
}
function O(e, t) {
    o.Z.dispatch({
        type: 'STREAM_UPDATE_SELF_HIDDEN',
        channelId: e,
        selfStreamHidden: t
    });
}
function D(e, t) {
    let { guildId: n, channelId: r } = e;
    if (null != n && C(n, r)) return;
    R(e, t);
    let i = d.Z.getWindowOpen(T.KJ3.CHANNEL_CALL_POPOUT),
        a = m.Z.getVoiceChannelId();
    if (!i || a !== r) (0, c.Z)(e);
}
function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    x(e, t),
        o.Z.dispatch({
            type: 'STREAM_STOP',
            streamKey: e,
            appContext: __OVERLAY__ ? T.IlC.OVERLAY : T.IlC.APP
        });
}
function x(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    o.Z.dispatch({
        type: 'STREAM_CLOSE',
        streamKey: e,
        canShowFeedback: t
    });
}
async function w(e, t, n) {
    let r = (0, u.V9)({
        streamType: null != e ? y.lo.GUILD : y.lo.CALL,
        guildId: e,
        channelId: t,
        ownerId: n
    });
    o.Z.dispatch({
        type: 'STREAM_PREVIEW_FETCH_START',
        streamKey: r
    });
    try {
        let e = await s.tn.get({
            url: T.ANM.STREAM_PREVIEW(r),
            query: { version: Date.now() },
            oldFormErrors: !0
        });
        o.Z.dispatch({
            type: 'STREAM_PREVIEW_FETCH_SUCCESS',
            streamKey: r,
            previewURL: e.body.url
        });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * v.Z.Millis.SECOND),
            o.Z.dispatch({
                type: 'STREAM_PREVIEW_FETCH_FAIL',
                streamKey: r,
                retryAfter: e
            });
    }
}
async function M(e) {
    try {
        await b.Z.post({
            url: T.ANM.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: a.NetworkActionNames.STREAM_NOTIFY }
        });
    } catch (e) {}
}
function P(e) {
    (0, I.Ye)(e.preset, e.resolution, e.frameRate),
        o.Z.dispatch({
            type: 'STREAM_UPDATE_SETTINGS',
            ...e
        });
}
function k(e, t) {
    s.tn.patch({
        url: T.ANM.STREAM(e),
        body: { region: t },
        oldFormErrors: !0
    });
}
function U() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = f.Z.getCurrentUserActiveStream();
    null != t && L((0, u.V9)(t), e);
}
