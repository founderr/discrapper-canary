r.d(n, {
    wU: function () {
        return O;
    }
});
var i,
    a = r(47120);
var s = r(442837),
    o = r(759174),
    l = r(846519),
    u = r(570140),
    c = r(314897),
    d = r(944486),
    f = r(585483),
    _ = r(351780),
    h = r(641033),
    p = r(524484),
    m = r(981631);
function g(e, n, r) {
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
let E = 7,
    v = 1000,
    I = new Set(),
    T = new o.h(
        function (e) {
            let { userId: n, channelId: r } = e;
            return [n, r];
        },
        function (e) {
            let { userId: n, channelId: r } = e;
            return ''.concat(r, '-').concat(n);
        }
    );
function b(e) {
    return null != e && (e.value > 0 || (null == e ? void 0 : e.multiplier) > 1);
}
let y = new o.h(
        function (e) {
            let {
                messageId: n,
                channelId: r,
                combo: { userId: i }
            } = e;
            return [n, r, i];
        },
        function (e) {
            let {
                messageId: n,
                channelId: r,
                combo: { userId: i }
            } = e;
            return ''.concat(r, '-').concat(i, '-').concat(n);
        }
    ),
    S = (e) => {
        let { userId: n, channelId: r } = e;
        return ''.concat(n, '-').concat(r);
    };
function A(e) {
    var n, r, i, a, s, o;
    let u = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        c = T.get(S(e)),
        d = {
            ...c,
            ...e,
            value: null !== (r = null !== (n = e.value) && void 0 !== n ? n : null == c ? void 0 : c.value) && void 0 !== r ? r : 0,
            multiplier: Math.min(null !== (a = null !== (i = e.multiplier) && void 0 !== i ? i : null == c ? void 0 : c.multiplier) && void 0 !== a ? a : 1, E),
            decayInterval: null !== (s = null == c ? void 0 : c.decayInterval) && void 0 !== s ? s : new l.Xp()
        };
    T.set(S(e), d),
        u &&
            (null === (o = d.decayInterval) ||
                void 0 === o ||
                o.start(v, () => {
                    let e = T.get(S(d));
                    if (null != e) {
                        let r = d.multiplier !== e.multiplier && d.value !== e.value;
                        if (e.value <= 0 || r) {
                            var n;
                            null === (n = e.decayInterval) || void 0 === n || n.stop(),
                                e.value <= 0 &&
                                    (A({
                                        ...e,
                                        value: 0,
                                        multiplier: 1
                                    }),
                                    x.emitChange());
                        } else
                            A({
                                ...e,
                                value: e.value - 1
                            }),
                                x.emitChange();
                    }
                }));
}
function N(e) {
    y.set(e.messageId, e);
}
function C(e) {
    let { type: n, ...r } = e;
    if (!_.Z.isEnabled()) return !1;
    A(r);
}
function R(e) {
    let { comboMessage: n } = e;
    if (!_.Z.isEnabled()) return !1;
    N(n);
}
function O(e, n, r, i) {
    return !(e !== n || null == r || i.has(r)) && (i.add(r), !0);
}
function D(e) {
    var n, r;
    let {
        channelId: i,
        message: { mentions: a, author: s, nonce: o }
    } = e;
    if (!_.Z.isEnabled()) return !1;
    let l = c.default.getId();
    if (!O(null == s ? void 0 : s.id, l, o, I)) return !1;
    let u = T.get(
        S({
            userId: null !== (n = null == s ? void 0 : s.id) && void 0 !== n ? n : '???',
            channelId: i
        })
    );
    if (_.Z.screenshakeEnabled && _.Z.screenshakeEnabledLocations[p.oZ.MENTION] && null != a && null != a.find((e) => e.id === l)) {
        let e = null != u ? (null !== (r = (0, h.KH)(u, p.qi.LEVEL_4)) && void 0 !== r ? r : 0.001) : 4 * Math.random();
        return (
            f.S.dispatch(m.CkL.SHAKE_APP, {
                duration: 1000,
                intensity: e
            }),
            !0
        );
    }
    return !1;
}
class L extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(c.default, d.Z);
    }
    getComboScore(e, n) {
        let r = T.get(
            S({
                userId: e,
                channelId: n
            })
        );
        return null == r ? 0 : (0, h.Eo)(r);
    }
    getUserCombo(e, n) {
        return T.get(
            S({
                userId: e,
                channelId: n
            })
        );
    }
    isComboing(e, n) {
        let r = this.getUserCombo(e, n);
        return null != r && r.value >= _.Z.combosRequiredCount && b(r);
    }
    getMessageCombo(e) {
        var n;
        let r = y.get(e);
        return null !== (n = null == r ? void 0 : r.combo) && void 0 !== n ? n : void 0;
    }
    getMostRecentMessageCombo(e) {
        let n = y.values(e);
        return n[n.length - 1];
    }
    getUserComboShakeIntensity(e, n, r, i) {
        let a = this.getUserCombo(e, n);
        return null != a ? (0, h.KH)(a, i) * r : 0;
    }
}
g(L, 'displayName', 'PoggermodeStore');
let x = new L(u.Z, {
    POGGERMODE_UPDATE_COMBO: C,
    POGGERMODE_UPDATE_MESSAGE_COMBO: R,
    MESSAGE_CREATE: D
});
n.ZP = x;
