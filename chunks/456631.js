let i;
r.d(n, {
    H: function () {
        return v;
    }
});
var a,
    s = r(47120);
var o = r(733860);
var l = r(392711);
var u = r(442837),
    c = r(780384),
    d = r(570140),
    f = r(70956),
    _ = r(963838),
    h = r(354459);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = [],
    g = {},
    E = [],
    v = (e) => {
        null != e &&
            d.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_CLEAR',
                userId: e
            });
    },
    I = [],
    T = 20,
    b = 10 * f.Z.Millis.SECOND,
    y = () => {
        let e = new Date();
        if ((I = [e, ...I].slice(0, T)).length >= T) {
            let n = I[I.length - 1],
                r = e.getTime() - n.getTime();
            r < b && (i = new Date(e.getTime() + b - r));
        }
    },
    S = (e) => {
        let { cooldownEndsAtMs: n } = e;
        i = new Date(Date.now() + n);
    },
    A = (0, l.debounce)(() => {
        let e = (0, _.cX)(E);
        c.uv.announce(e, 'polite'), (E = []);
    }, 500),
    N = (e) => {
        let { emoji: n, userId: r, animationType: i } = e;
        null != n &&
            null != i &&
            ((g[r] = {
                emoji: n,
                sentAt: Date.now(),
                animationType: i
            }),
            (E = [
                ...E,
                {
                    emojiName: n.name,
                    userId: r
                }
            ]),
            A());
    },
    C = (e) => {
        let { emoji: n } = e;
        if (null != n) m.unshift(n), (m = (0, l.uniqBy)(m, 'name')).length > h.e5 + 1 && m.pop();
    },
    R = (e) => {
        let { userId: n } = e;
        null != g[n] && delete g[n];
    };
class O extends (a = u.ZP.Store) {
    get recentlyUsedEmojis() {
        return m;
    }
    get isOnCooldown() {
        return null != i && new Date() < i;
    }
    get effectCooldownEndTime() {
        return i;
    }
    getEffectForUserId(e) {
        return g[e];
    }
}
p(O, 'displayName', 'VoiceChannelEffectsStore'),
    (n.Z = new O(d.Z, {
        VOICE_CHANNEL_EFFECT_CLEAR: R,
        VOICE_CHANNEL_EFFECT_RECENT_EMOJI: C,
        VOICE_CHANNEL_EFFECT_SEND: N,
        VOICE_CHANNEL_EFFECT_SENT_LOCAL: y,
        VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: S
    }));
