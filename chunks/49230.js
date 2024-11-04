n.d(t, {
    $: function () {
        return h;
    },
    h: function () {
        return m;
    }
}),
    n(47120);
var i = n(512722),
    r = n.n(i),
    a = n(46973),
    l = n(304809),
    s = n(131951),
    o = n(747071);
let c = null;
try {
    c = (0, l.N)();
} catch {}
let d = new Map();
async function u(e) {
    let t = d.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        i = await (null == c ? void 0 : c.decodeAudioData(n));
    return null != i && d.set(e, i), i;
}
function h(e) {
    let { soundKey: t, soundURL: n, soundVolume: i, reportSoundStartedPlaying: l } = e;
    return new Promise(async (e) => {
        let o = await u(n);
        null == o && e(),
            s.Z.getMediaEngine().eachConnection((n) => {
                n.context === a.Yn.DEFAULT &&
                    (l(),
                    r()(null != o, 'audioBuffer cannot be null here'),
                    n.startSamplesLocalPlayback(t, o, i, () => {
                        e();
                    }));
            });
    });
}
function m(e, t) {
    let { soundKey: n, soundURL: i, soundVolume: r, reportSoundStartedPlaying: a } = e,
        l = t.get(n);
    if (null != l) {
        l.currentTime = 0;
        return;
    }
    return new Promise((e) => {
        let l = new Audio(i);
        (l.volume = (0, o.Z)(r)),
            l.addEventListener('canplaythrough', () => {
                a(), t.set(n, l), l.play();
            }),
            l.addEventListener('ended', () => {
                t.delete(n), (l.src = ''), e();
            });
    });
}
