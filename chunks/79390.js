n.d(t, {
    D$: function () {
        return N;
    },
    N4: function () {
        return D;
    },
    UI: function () {
        return y;
    },
    Uu: function () {
        return S;
    },
    _N: function () {
        return A;
    },
    cS: function () {
        return C;
    },
    cZ: function () {
        return L;
    },
    e1: function () {
        return x;
    },
    eQ: function () {
        return T;
    },
    fw: function () {
        return b;
    },
    uY: function () {
        return R;
    },
    x9: function () {
        return O;
    }
}),
    n(757143),
    n(47120),
    n(724458);
var r = n(392711),
    i = n.n(r),
    a = n(772848),
    s = n(263568),
    o = n(468194),
    l = n(442837),
    u = n(566006),
    c = n(739566),
    d = n(592125),
    f = n(542578),
    _ = n(375954),
    h = n(496675),
    p = n(699516),
    m = n(70956),
    g = n(5192),
    E = n(489887),
    v = n(981631),
    I = n(388032);
function S() {
    return {
        text: void 0,
        image: void 0,
        localCreationAnswerId: (function () {
            return (0, a.Z)();
        })()
    };
}
function b(e) {
    return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, '');
}
function T(e) {
    for (let t of e.reactions) if (null == t.me_vote) return !0;
    return !1;
}
function y(e) {
    return (0, l.e7)([h.Z], () => !!(null != e && v.TPd.POLLS.has(e.type)) && (!!e.isPrivate() || (h.Z.can(v.Plq.SEND_MESSAGES, e) && h.Z.can(v.Plq.SEND_POLLS, e))));
}
function A() {
    return !1;
}
function N(e, t, n) {
    return 0 === e.length && null == t.find((e) => C(e, n));
}
function C(e, t) {
    if (t === s.C.IMAGE_ONLY_ANSWERS) return null != e.image;
    {
        var n;
        let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
        return null != t && t.length > 0;
    }
}
function R(e, t) {
    var n;
    let r = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
    return t === s.C.DEFAULT && null != e.image && (null == r || 0 === r.length);
}
function O(e) {
    var t, n;
    if (null == e) return;
    let r =
        null == e
            ? void 0
            : null === (t = e.answers) || void 0 === t
              ? void 0
              : t.map((e, t) => {
                    var n, r;
                    let i = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
                        a = {
                            ...e.poll_media,
                            emoji:
                                null != i
                                    ? {
                                          id: i.id,
                                          name: null !== (r = i.name) && void 0 !== r ? r : ''
                                      }
                                    : void 0
                        };
                    return {
                        ...e,
                        answer_id: t + 1,
                        poll_media: a
                    };
                });
    let i = (null == e ? void 0 : e.duration) != null ? ((n = e.duration), new Date(Date.now() + n * m.Z.Millis.HOUR).toISOString()) : '0';
    return {
        ...e,
        expiry: i,
        answers: r
    };
}
function D(e) {
    let t = (0, c.ZH)(e),
        n = (function (e, t) {
            var n, r, i, a;
            let s = null !== (a = null === (i = e.embeds[0]) || void 0 === i ? void 0 : null === (r = i.fields) || void 0 === r ? void 0 : null === (n = r.find((e) => 'poll_question_text' === e.rawName)) || void 0 === n ? void 0 : n.rawValue) && void 0 !== a ? a : '';
            return null != t ? (0, o.aF)(s, t) : s;
        })(e, E.Dv);
    return I.intl.format(I.t.Vn97KS, {
        username: t.nick,
        title: n
    });
}
function L(e) {
    return e.reduce((e, t) => {
        var n, r;
        return e + (null !== (r = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== r ? r : 0);
    }, 0);
}
function x(e, t, n) {
    var r, a;
    let s = _.Z.getMessage(t, e);
    if (null == s) return '';
    let o = s.getReaction({
            id: n,
            name: '',
            animated: !1
        }),
        l = null !== (a = null == o ? void 0 : null === (r = o.count_details) || void 0 === r ? void 0 : r.vote) && void 0 !== a ? a : 0,
        c = (function (e, t) {
            let n = e.getChannelId(),
                r = f.Z.getReactions(
                    n,
                    e.id,
                    {
                        id: t,
                        name: '',
                        animated: !1
                    },
                    E.$J,
                    u.O.VOTE
                ),
                a = d.Z.getChannel(n),
                s = null == a || a.isPrivate() ? null : a.getGuildId();
            return i()(r)
                .reject((e) => p.Z.isBlockedOrIgnored(e.id))
                .take(E.$J)
                .map((e) => g.ZP.getName(s, null == a ? void 0 : a.id, e))
                .value();
        })(s, n);
    return 0 === c.length
        ? ''
        : (function (e, t) {
              let n = Math.max(0, t - e.length);
              if (1 === e.length)
                  return n > 0
                      ? I.intl.formatToPlainString(I.t['SV/iZm'], {
                            a: e[0],
                            n: n.toLocaleString()
                        })
                      : e[0];
              if (2 === e.length)
                  return n > 0
                      ? I.intl.formatToPlainString(I.t.YBnZKy, {
                            a: e[0],
                            b: e[1],
                            n: n.toLocaleString()
                        })
                      : I.intl.formatToPlainString(I.t['O5+f5e'], {
                            a: e[0],
                            b: e[1]
                        });
              if (3 !== e.length) return I.intl.formatToPlainString(I.t.yVX6kJ, { n: n.toLocaleString() });
              else
                  return n > 0
                      ? I.intl.formatToPlainString(I.t['ThXp+P'], {
                            a: e[0],
                            b: e[1],
                            c: e[2],
                            n: n.toLocaleString()
                        })
                      : I.intl.formatToPlainString(I.t['0UzBMz'], {
                            a: e[0],
                            b: e[1],
                            c: e[2]
                        });
          })(c, l);
}
