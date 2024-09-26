n.d(t, {
    FU: function () {
        return D;
    },
    eH: function () {
        return M;
    },
    wG: function () {
        return b;
    }
});
var r = n(66153);
var i = n(970173);
var a = n(520712);
var o = n(268111);
var s = n(941497);
var l = n(32026);
var u = n(480839);
var c = n(744285);
var d = n(492257);
var _ = n(873817);
var E = n(512722),
    f = n.n(E),
    h = n(46973),
    p = n(594174),
    m = n(768581),
    I = n(932724),
    T = n(716161),
    g = n(634041),
    S = n(647177),
    A = n(63985),
    v = n(638457),
    N = n(678916),
    O = n(981631);
function R(e) {
    return new Promise((t, n) => {
        let r = new Image();
        (r.crossOrigin = 'anonymous'),
            (r.onload = () => {
                let e = document.createElement('canvas');
                (e.width = N.HE.width), (e.height = N.HE.height);
                let n = e.getContext('2d');
                f()(null != n, 'Canvas context is missing');
                let i = r.height / r.width,
                    a = N.HE.height,
                    o = N.HE.height / i,
                    s = (e.width - o) / 2,
                    l = (e.height - a) / 2;
                n.drawImage(r, s, l, o, a);
                let u = n.getImageData(0, 0, e.width, e.height);
                t({
                    data: u.data,
                    width: u.width,
                    height: u.height,
                    pixelFormat: 'rgba'
                });
            }),
            (r.onerror = (e) => n(e)),
            (r.src = e);
    });
}
async function C(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer());
}
function y(e, t, n, r, i) {
    (0, T.RI)({
        [e]: {
            graph: n,
            target: t,
            image: r,
            blob: i
        }
    });
}
async function L(e, t, n) {
    let r,
        i = !1;
    if (null == n) return y(e, t, h.zZ.NONE);
    if (n === N.f7) return y(e, t, h.zZ.BACKGROUND_BLUR);
    if ('string' == typeof n || 'number' == typeof n) {
        var a;
        let e = (0, A.Z)()[n];
        (i = null !== (a = e.isVideo) && void 0 !== a && a), (r = e.source);
    } else {
        let e = n.asset;
        (i = (0, m.xR)(e) || (0, m.ay)(e)),
            (r = (0, m.rI)({
                userId: n.user_id,
                assetId: n.id,
                assetHash: e,
                size: N.HE.width
            }));
    }
    if (null != r)
        try {
            let n = i ? void 0 : await R(r),
                a = i ? await C(r) : void 0;
            y(e, t, h.zZ.BACKGROUND_REPLACEMENT, n, a);
        } catch (e) {
            (0, T.Nm)();
        }
}
async function b(e, t) {
    let { track: n = !0, location: r } = t;
    await L(h.TO.CAMERA_BACKGROUND_LIVE, { type: h.W$.INPUT_DEVICE }, e), n && (0, S.Bh)(e, r, 'Enabled');
}
async function D(e, t, n) {
    let { track: r = !0, location: i } = n;
    (0, T.GS)(),
        await L(
            h.TO.CAMERA_BACKGROUND_PREVIEW,
            {
                type: h.W$.STREAM,
                streamId: t
            },
            e
        ),
        r && (0, S.Bh)(e, i, 'Preview');
}
function M() {
    let e = p.default.getCurrentUser();
    if (null == e) return;
    let t = (0, I.P)(e);
    (0, v.Z)() && !g.Z.hasBeenApplied && null != t && b(t, { track: !1 }).catch(O.dG4);
}
