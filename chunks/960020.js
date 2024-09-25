n.d(t, {
    I: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(442837),
    s = n(570140);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
!(function (e) {
    (e.HOVER = 'HOVER'), (e.EXTERNAL = 'EXTERNAL'), (e.RANDOM = 'RANDOM');
})(r || (r = {}));
let u = 5,
    c = {},
    d = {},
    _ = {},
    E = (e, t) => {
        let n = null != t.id ? t.id : t.name;
        return ''.concat(e, ':').concat(n);
    },
    f = (e, t) => {
        var n;
        let r;
        switch (e) {
            case 'HOVER':
                r = 'HOVER';
                break;
            case 'RANDOM':
                r = 'RANDOM';
                break;
            default:
                r = 'EXTERNAL';
        }
        let i = Object.fromEntries(
            Object.entries(null !== (n = d[t]) && void 0 !== n ? n : {}).filter((e) => {
                let [, t] = e;
                return t === r;
            })
        );
        if (Object.keys(i).length >= u && 'EXTERNAL' === e) {
            for (let e in i)
                if (null == _[t] || null == _[t][e]) {
                    delete d[t][e], delete i[e];
                    break;
                }
        }
        return Object.keys(i).length;
    },
    h = (e) => {
        var t, n, r;
        let { channelId: i, messageId: a, emoji: o, key: s } = e,
            l = E(a, o);
        if (f(s, i) >= u) return;
        let c = null !== (t = d[i]) && void 0 !== t ? t : {},
            h = (null !== (n = _[i]) && void 0 !== n ? n : {})[l],
            p = c[l];
        if ('HOVER' !== s || null == p) {
            'HOVER' === p && 'EXTERNAL' === s && null != h && ('function' == typeof h.destroy && h.destroy(), null === (r = _[i]) || void 0 === r || delete r[l], (p = void 0));
            null == p && (null != d[i] ? (d[i][l] = s) : (d[i] = { [l]: s }));
        }
    },
    p = (e) => {
        var t;
        let { channelId: n, messageId: r, emoji: i } = e,
            a = E(r, i);
        null === (t = d[n]) || void 0 === t || delete t[a];
    },
    m = (e) => {
        let { channelId: t, messageId: n, emoji: r, animation: i } = e,
            a = E(n, r);
        null == _[t] && (_[t] = {}), (_[t][a] = i);
    },
    I = (e) => {
        let { messageId: t, emojiName: n, emojiId: r, startPosition: i } = e;
        c[
            ''
                .concat(t, ':')
                .concat(n, ':')
                .concat(null != r ? r : '')
        ] = i;
    },
    T = (e) => {
        let { messageId: t, emojiName: n, emojiId: r } = e;
        delete c[
            ''
                .concat(t, ':')
                .concat(n, ':')
                .concat(null != r ? r : '')
        ];
    };
class g extends (i = o.ZP.Store) {
    getReactionPickerAnimation(e, t, n) {
        return c[
            ''
                .concat(e, ':')
                .concat(t, ':')
                .concat(null != n ? n : '')
        ];
    }
    getEffectForEmojiId(e, t, n) {
        var r;
        let i = E(t, n);
        return null === (r = d[e]) || void 0 === r ? void 0 : r[i];
    }
}
l(g, 'displayName', 'BurstReactionEffectsStore'),
    (t.Z = new g(s.Z, {
        BURST_REACTION_EFFECT_CLEAR: p,
        BURST_REACTION_EFFECT_PLAY: h,
        BURST_REACTION_ANIMATION_ADD: m,
        BURST_REACTION_PICKER_ANIMATION_ADD: I,
        BURST_REACTION_PICKER_ANIMATION_CLEAR: T
    }));
