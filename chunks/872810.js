r.d(n, {
    L6: function () {
        return G;
    },
    Rc: function () {
        return U;
    },
    WH: function () {
        return C;
    },
    aP: function () {
        return P;
    },
    dV: function () {
        return B;
    },
    g: function () {
        return w;
    },
    iV: function () {
        return x;
    },
    n9: function () {
        return M;
    },
    pR: function () {
        return L;
    },
    rn: function () {
        return D;
    },
    tK: function () {
        return R;
    },
    xc: function () {
        return k;
    }
});
var i = r(512722),
    a = r.n(i),
    s = r(990547),
    o = r(544891),
    l = r(570140),
    u = r(258609),
    c = r(569545),
    d = r(525925),
    f = r(522474),
    _ = r(199902),
    h = r(314897),
    p = r(592125),
    m = r(430824),
    g = r(944486),
    E = r(979651),
    v = r(934415),
    I = r(70956),
    T = r(557457),
    b = r(573261);
r(26151), r(493683);
var y = r(475179);
r(287734);
var S = r(981631),
    A = r(70722);
let N = 2;
function C(e, n, r) {
    l.Z.dispatch({
        type: 'STREAM_START',
        streamType: null != e ? A.lo.GUILD : A.lo.CALL,
        guildId: e,
        channelId: n,
        appContext: __OVERLAY__ ? S.IlC.OVERLAY : S.IlC.APP,
        ...r
    });
}
function R(e, n) {
    let r = (0, c.V9)(e);
    l.Z.dispatch({
        type: 'STREAM_SET_PAUSED',
        streamKey: r,
        paused: n
    });
}
function O(e, n) {
    let r = p.Z.getChannel(n);
    return a()(null != r, 'Cannot join a null voice channel'), !E.Z.isInChannel(n) && (0, v.rY)(r, E.Z, m.Z);
}
function D(e, n) {
    if (null != u.Z.getRemoteSessionId()) return;
    let { guildId: r, channelId: i } = e;
    if (null != r && O(r, i)) return;
    let a = (0, c.V9)(e),
        s =
            (null == n ? void 0 : n.forceMultiple) ||
            _.Z.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: n } = e;
                return n !== h.default.getId();
            }).length >= N;
    l.Z.dispatch({
        type: 'STREAM_WATCH',
        streamKey: a,
        allowMultiple: s
    }),
        !s && (null == n || !n.noFocus) && y.Z.selectParticipant(e.channelId, a);
}
function L(e, n) {
    l.Z.dispatch({
        type: 'STREAM_UPDATE_SELF_HIDDEN',
        channelId: e,
        selfStreamHidden: n
    });
}
function x(e, n) {
    let { guildId: r, channelId: i } = e;
    if (null != r && O(r, i)) return;
    D(e, n);
    let a = f.Z.getWindowOpen(S.KJ3.CHANNEL_CALL_POPOUT),
        s = g.Z.getVoiceChannelId();
    if (!a || s !== i) (0, d.Z)(e);
}
function w(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    P(e, n),
        l.Z.dispatch({
            type: 'STREAM_STOP',
            streamKey: e,
            appContext: __OVERLAY__ ? S.IlC.OVERLAY : S.IlC.APP
        });
}
function P(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    l.Z.dispatch({
        type: 'STREAM_CLOSE',
        streamKey: e,
        canShowFeedback: n
    });
}
async function M(e, n, r) {
    let i = (0, c.V9)({
        streamType: null != e ? A.lo.GUILD : A.lo.CALL,
        guildId: e,
        channelId: n,
        ownerId: r
    });
    l.Z.dispatch({
        type: 'STREAM_PREVIEW_FETCH_START',
        streamKey: i
    });
    try {
        let e = await o.tn.get({
            url: S.ANM.STREAM_PREVIEW(i),
            query: { version: Date.now() },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        l.Z.dispatch({
            type: 'STREAM_PREVIEW_FETCH_SUCCESS',
            streamKey: i,
            previewURL: e.body.url
        });
    } catch (n) {
        let e;
        429 === n.status && (e = n.body.retry_after * I.Z.Millis.SECOND),
            l.Z.dispatch({
                type: 'STREAM_PREVIEW_FETCH_FAIL',
                streamKey: i,
                retryAfter: e
            });
    }
}
async function k(e) {
    try {
        await b.Z.post({
            url: S.ANM.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: s.NetworkActionNames.STREAM_NOTIFY },
            rejectWithError: !0
        });
    } catch (e) {}
}
function U(e) {
    (0, T.Ye)(e.preset, e.resolution, e.frameRate),
        l.Z.dispatch({
            type: 'STREAM_UPDATE_SETTINGS',
            ...e
        });
}
function B(e, n) {
    o.tn.patch({
        url: S.ANM.STREAM(e),
        body: { region: n },
        oldFormErrors: !0,
        rejectWithError: !0
    });
}
function G() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = _.Z.getCurrentUserActiveStream();
    null != n && w((0, c.V9)(n), e);
}
