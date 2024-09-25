n.d(t, {
    wU: function () {
        return y;
    }
});
var r,
    i = n(47120);
var a = n(442837),
    o = n(759174),
    s = n(846519),
    l = n(570140),
    u = n(314897),
    c = n(944486),
    d = n(585483),
    _ = n(351780),
    E = n(641033),
    f = n(524484),
    h = n(981631);
function p(e, t, n) {
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
let m = 7,
    I = 1000,
    T = new Set(),
    g = new o.h(
        function (e) {
            let { userId: t, channelId: n } = e;
            return [t, n];
        },
        function (e) {
            let { userId: t, channelId: n } = e;
            return ''.concat(n, '-').concat(t);
        }
    );
function S(e) {
    return null != e && (e.value > 0 || (null == e ? void 0 : e.multiplier) > 1);
}
let A = new o.h(
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: r }
            } = e;
            return [t, n, r];
        },
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: r }
            } = e;
            return ''.concat(n, '-').concat(r, '-').concat(t);
        }
    ),
    v = (e) => {
        let { userId: t, channelId: n } = e;
        return ''.concat(t, '-').concat(n);
    };
function N(e) {
    var t, n, r, i, a, o;
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        u = g.get(v(e)),
        c = {
            ...u,
            ...e,
            value: null !== (n = null !== (t = e.value) && void 0 !== t ? t : null == u ? void 0 : u.value) && void 0 !== n ? n : 0,
            multiplier: Math.min(null !== (i = null !== (r = e.multiplier) && void 0 !== r ? r : null == u ? void 0 : u.multiplier) && void 0 !== i ? i : 1, m),
            decayInterval: null !== (a = null == u ? void 0 : u.decayInterval) && void 0 !== a ? a : new s.Xp()
        };
    g.set(v(e), c),
        l &&
            (null === (o = c.decayInterval) ||
                void 0 === o ||
                o.start(I, () => {
                    let e = g.get(v(c));
                    if (null != e) {
                        let n = c.multiplier !== e.multiplier && c.value !== e.value;
                        if (e.value <= 0 || n) {
                            var t;
                            null === (t = e.decayInterval) || void 0 === t || t.stop(),
                                e.value <= 0 &&
                                    (N({
                                        ...e,
                                        value: 0,
                                        multiplier: 1
                                    }),
                                    D.emitChange());
                        } else
                            N({
                                ...e,
                                value: e.value - 1
                            }),
                                D.emitChange();
                    }
                }));
}
function O(e) {
    A.set(e.messageId, e);
}
function R(e) {
    let { type: t, ...n } = e;
    if (!_.Z.isEnabled()) return !1;
    N(n);
}
function C(e) {
    let { comboMessage: t } = e;
    if (!_.Z.isEnabled()) return !1;
    O(t);
}
function y(e, t, n, r) {
    return !(e !== t || null == n || r.has(n)) && (r.add(n), !0);
}
function b(e) {
    var t, n;
    let {
        channelId: r,
        message: { mentions: i, author: a, nonce: o }
    } = e;
    if (!_.Z.isEnabled()) return !1;
    let s = u.default.getId();
    if (!y(null == a ? void 0 : a.id, s, o, T)) return !1;
    let l = g.get(
        v({
            userId: null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : '???',
            channelId: r
        })
    );
    if (_.Z.screenshakeEnabled && _.Z.screenshakeEnabledLocations[f.oZ.MENTION] && null != i && null != i.find((e) => e.id === s)) {
        let e = null != l ? (null !== (n = (0, E.KH)(l, f.qi.LEVEL_4)) && void 0 !== n ? n : 0.001) : 4 * Math.random();
        return (
            d.S.dispatch(h.CkL.SHAKE_APP, {
                duration: 1000,
                intensity: e
            }),
            !0
        );
    }
    return !1;
}
class L extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(u.default, c.Z);
    }
    getComboScore(e, t) {
        let n = g.get(
            v({
                userId: e,
                channelId: t
            })
        );
        return null == n ? 0 : (0, E.Eo)(n);
    }
    getUserCombo(e, t) {
        return g.get(
            v({
                userId: e,
                channelId: t
            })
        );
    }
    isComboing(e, t) {
        let n = this.getUserCombo(e, t);
        return null != n && n.value >= _.Z.combosRequiredCount && S(n);
    }
    getMessageCombo(e) {
        var t;
        let n = A.get(e);
        return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0;
    }
    getMostRecentMessageCombo(e) {
        let t = A.values(e);
        return t[t.length - 1];
    }
    getUserComboShakeIntensity(e, t, n, r) {
        let i = this.getUserCombo(e, t);
        return null != i ? (0, E.KH)(i, r) * n : 0;
    }
}
p(L, 'displayName', 'PoggermodeStore');
let D = new L(l.Z, {
    POGGERMODE_UPDATE_COMBO: R,
    POGGERMODE_UPDATE_MESSAGE_COMBO: C,
    MESSAGE_CREATE: b
});
t.ZP = D;
