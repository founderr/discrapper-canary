let r;
n.d(t, {
    H: function () {
        return E;
    }
}),
    n(47120),
    n(733860);
var i,
    a,
    s,
    o,
    l = n(392711),
    u = n(442837),
    c = n(780384),
    d = n(570140),
    f = n(70956),
    _ = n(963838),
    h = n(354459);
let p = [],
    m = {},
    g = [],
    E = (e) => {
        null != e &&
            d.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_CLEAR',
                userId: e
            });
    },
    v = [],
    I = 10 * f.Z.Millis.SECOND,
    S = (0, l.debounce)(() => {
        let e = (0, _.cX)(g);
        c.uv.announce(e, 'polite'), (g = []);
    }, 500);
class b extends (i = u.ZP.Store) {
    get recentlyUsedEmojis() {
        return p;
    }
    get isOnCooldown() {
        return null != r && new Date() < r;
    }
    get effectCooldownEndTime() {
        return r;
    }
    getEffectForUserId(e) {
        return m[e];
    }
}
(o = 'VoiceChannelEffectsStore'),
    (s = 'displayName') in (a = b)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new b(d.Z, {
        VOICE_CHANNEL_EFFECT_CLEAR: (e) => {
            let { userId: t } = e;
            null != m[t] && delete m[t];
        },
        VOICE_CHANNEL_EFFECT_RECENT_EMOJI: (e) => {
            let { emoji: t } = e;
            if (null != t) p.unshift(t), (p = (0, l.uniqBy)(p, 'name')).length > h.e5 + 1 && p.pop();
        },
        VOICE_CHANNEL_EFFECT_SEND: (e) => {
            let { emoji: t, userId: n, animationType: r } = e;
            null != t &&
                null != r &&
                ((m[n] = {
                    emoji: t,
                    sentAt: Date.now(),
                    animationType: r
                }),
                (g = [
                    ...g,
                    {
                        emojiName: t.name,
                        userId: n
                    }
                ]),
                S());
        },
        VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
            let e = new Date();
            if ((v = [e, ...v].slice(0, 20)).length >= 20) {
                let t = v[v.length - 1],
                    n = e.getTime() - t.getTime();
                n < I && (r = new Date(e.getTime() + I - n));
            }
        },
        VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: (e) => {
            let { cooldownEndsAtMs: t } = e;
            r = new Date(Date.now() + t);
        }
    }));
