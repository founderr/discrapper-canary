let r;
var i = n(242167);
var a = n(970173);
var o = n(520712);
var s = n(268111);
var l = n(941497);
var u = n(32026);
var c = n(480839);
var d = n(744285);
var _ = n(492257);
var E = n(873817);
var f = n(411104);
var h = n(773603);
var p = n(512722),
    m = n.n(p),
    I = n(392711),
    T = n.n(I),
    g = n(544891),
    S = n(992774),
    A = n(649754),
    v = n(376398),
    N = n(846519),
    O = n(570140),
    R = n(710845),
    C = n(977059),
    y = n(695346),
    L = n(199902),
    b = n(314897),
    D = n(358085),
    M = n(998502),
    P = n(569545),
    U = n(70722),
    w = n(981631),
    x = n(65154);
let G = 300000,
    k = 60000,
    B = {},
    F = new N.V7(),
    Z = !1,
    V = window.document.createElement('canvas'),
    H = 512,
    Y = 288;
(V.width = H), (V.height = Y);
let j = V.getContext('2d');
function W() {
    F.stop(), null != r && (A.Z.removeSink(r, B), (r = null));
}
let K = T().debounce((e, t, n, r) => {
    q(
        e,
        (0, P.V9)({
            streamType: null != t ? U.lo.GUILD : U.lo.CALL,
            guildId: t,
            channelId: n,
            ownerId: r
        })
    );
}, 500);
function z(e) {
    let t = H / e.width,
        n = Math.min(t, Y / e.height),
        r = e.width * n,
        i = e.height * n;
    (V.width = r), (V.height = i);
    let a = window.document.createElement('canvas'),
        o = a.getContext('2d');
    (a.width = e.width), (a.height = e.height);
    let s = new ImageData(e.data, e.width, e.height);
    return (
        null == o || o.putImageData(s, 0, 0),
        new Promise((t) => {
            null == j || j.drawImage(a, 0, 0, e.width, e.height, 0, 0, r, i), t();
        })
    );
}
async function q(e, t) {
    if (r !== e) return;
    let { enabled: n } = (0, C.R)({ location: 'uploadStreamPreviews' }),
        i = ((0, D.isWeb)() && y.I0.getSetting()) || L.Z.getIsActiveStreamPreviewDisabled(t);
    if (n && i) return;
    let a = () => q(e, t);
    if (!Z)
        try {
            let n = await Q(e, 60);
            await z(n);
            let r = V.toDataURL('image/jpeg');
            if (
                (O.Z.dispatch({
                    type: 'STREAM_PREVIEW_FETCH_SUCCESS',
                    streamKey: t,
                    previewURL: r
                }),
                D.isPlatformEmbedded)
            ) {
                let e = b.default.getToken();
                m()(null != e, 'Auth token was null while sending screenshot.'),
                    await M.ZP.makeChunkedRequest(
                        w.ANM.STREAM_PREVIEW(t),
                        { thumbnail: r },
                        {
                            method: 'POST',
                            token: e
                        }
                    );
            } else
                await g.tn.post({
                    url: w.ANM.STREAM_PREVIEW(t),
                    body: { thumbnail: r },
                    oldFormErrors: !0
                });
        } catch (t) {
            new R.Z('ApplicationStreamPreviewUploadManager').error('Failed to post stream preview', t), r === e && F.start(k, a);
            return;
        }
    r === e && (Z ? F.start(k, a) : F.start(G, a));
}
function Q(e, t) {
    let n = 0;
    return (D.isPlatformEmbedded ? $ : X)(e, (e) => {
        if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
        if (++n > t) throw Error('Timed out awaiting non-black frame after '.concat(t, ' frames'));
        return !1;
    });
}
function X(e, t) {
    let n = (0, v.aG)(e);
    if (null == n) return Promise.resolve(new ImageData(0, 0));
    let { width: r, height: i } = n.getVideoTracks()[0].getSettings(),
        a = document.createElement('video'),
        o = document.createElement('canvas');
    (a.width = o.width = null != r ? r : H), (a.height = o.height = null != i ? i : Y), (a.srcObject = n), a.play();
    let s = o.getContext('2d');
    return new Promise((e, n) => {
        a.ontimeupdate = () => {
            null == s || s.drawImage(a, 0, 0, o.width, o.height);
            let r = null == s ? void 0 : s.getImageData(0, 0, o.width, o.height);
            try {
                null != r && t(r) && e(r);
            } catch (e) {
                n(e);
            }
        };
    }).finally(() => {
        (a.ontimeupdate = null), a.removeAttribute('srcObject'), a.load();
    });
}
function $(e, t) {
    let n = (0, S.zS)(),
        i = (null == n ? void 0 : n.getNextVideoOutputFrame) != null;
    return new Promise((a, o) => {
        let s = (e) => {
            try {
                null != e && t(e) && a(e);
            } catch (e) {
                o(e);
            }
        };
        i
            ? n.getNextVideoOutputFrame(e).then(s, (t) => {
                  if (r === e) throw t;
              })
            : A.Z.addSink(e, B, s);
    }).finally(() => {
        !i && A.Z.removeSink(e, B);
    });
}
t.Z = {
    init() {
        O.Z.subscribe('CONNECTION_OPEN', W),
            O.Z.subscribe('LOGOUT', W),
            O.Z.subscribe('STREAM_DELETE', W),
            O.Z.subscribe('RTC_CONNECTION_VIDEO', (e) => {
                let { guildId: t, channelId: n, userId: i, streamId: a, context: o } = e;
                !(null == a || o !== x.Yn.STREAM || i !== b.default.getId() || __OVERLAY__) && (W(), (r = a), K(a, t, n, i));
            }),
            O.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: t } = e;
                Z = t === w.FQ1.PAUSED || !1;
            });
    }
};
