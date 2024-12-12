r.d(n, {
    FU: function () {
        return x;
    },
    eH: function () {
        return w;
    },
    wG: function () {
        return L;
    }
});
var i = r(66153);
var a = r(970173);
var s = r(520712);
var o = r(268111);
var l = r(941497);
var u = r(32026);
var c = r(480839);
var d = r(744285);
var f = r(492257);
var _ = r(873817);
var h = r(512722),
    p = r.n(h),
    m = r(46973),
    g = r(594174),
    E = r(768581),
    v = r(932724),
    I = r(716161),
    T = r(634041),
    b = r(647177),
    y = r(63985),
    S = r(638457),
    A = r(678916),
    N = r(981631);
function C(e) {
    return new Promise((n, r) => {
        let i = new Image();
        (i.crossOrigin = 'anonymous'),
            (i.onload = () => {
                let e = document.createElement('canvas');
                (e.width = A.HE.width), (e.height = A.HE.height);
                let r = e.getContext('2d');
                p()(null != r, 'Canvas context is missing');
                let a = i.height / i.width,
                    s = A.HE.height,
                    o = A.HE.height / a,
                    l = (e.width - o) / 2,
                    u = (e.height - s) / 2;
                r.drawImage(i, l, u, o, s);
                let c = r.getImageData(0, 0, e.width, e.height);
                n({
                    data: c.data,
                    width: c.width,
                    height: c.height,
                    pixelFormat: 'rgba'
                });
            }),
            (i.onerror = (e) => r(e)),
            (i.src = e);
    });
}
async function R(e) {
    let n = await fetch(e),
        r = await n.blob();
    return new Uint8ClampedArray(await r.arrayBuffer());
}
function O(e, n, r, i, a) {
    (0, I.RI)({
        [e]: {
            graph: r,
            target: n,
            image: i,
            blob: a
        }
    });
}
async function D(e, n, r) {
    let i,
        a = !1;
    if (null == r) return O(e, n, m.zZ.NONE);
    if (r === A.f7) return O(e, n, m.zZ.BACKGROUND_BLUR);
    if ('string' == typeof r || 'number' == typeof r) {
        var s;
        let e = (0, y.Z)()[r];
        (a = null !== (s = e.isVideo) && void 0 !== s && s), (i = e.source);
    } else {
        let e = r.asset;
        (a = (0, E.xR)(e) || (0, E.ay)(e)),
            (i = (0, E.rI)({
                userId: r.user_id,
                assetId: r.id,
                assetHash: e,
                size: A.HE.width
            }));
    }
    if (null != i)
        try {
            let r = a ? void 0 : await C(i),
                s = a ? await R(i) : void 0;
            O(e, n, m.zZ.BACKGROUND_REPLACEMENT, r, s);
        } catch (e) {
            (0, I.Nm)();
        }
}
async function L(e, n) {
    let { track: r = !0, location: i } = n;
    await D(m.TO.CAMERA_BACKGROUND_LIVE, { type: m.W$.INPUT_DEVICE }, e), r && (0, b.Bh)(e, i, 'Enabled');
}
async function x(e, n, r) {
    let { track: i = !0, location: a } = r;
    (0, I.GS)(),
        await D(
            m.TO.CAMERA_BACKGROUND_PREVIEW,
            {
                type: m.W$.STREAM,
                streamId: n
            },
            e
        ),
        i && (0, b.Bh)(e, a, 'Preview');
}
function w() {
    let e = g.default.getCurrentUser();
    if (null == e) return;
    let n = (0, v.P)(e);
    (0, S.Z)() && !T.Z.hasBeenApplied && null != n && L(n, { track: !1 }).catch(N.dG4);
}
