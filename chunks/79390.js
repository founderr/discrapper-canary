r.d(n, {
    D$: function () {
        return L;
    },
    N4: function () {
        return U;
    },
    UI: function () {
        return O;
    },
    Uu: function () {
        return A;
    },
    _N: function () {
        return D;
    },
    cS: function () {
        return x;
    },
    cZ: function () {
        return B;
    },
    e1: function () {
        return F;
    },
    eQ: function () {
        return R;
    },
    fw: function () {
        return C;
    },
    uY: function () {
        return w;
    },
    x9: function () {
        return M;
    }
});
var i = r(757143);
var a = r(47120);
var s = r(724458);
var o = r(392711),
    l = r.n(o),
    u = r(772848),
    c = r(263568),
    d = r(468194),
    f = r(442837),
    _ = r(566006),
    h = r(739566),
    p = r(592125),
    m = r(542578),
    g = r(375954),
    E = r(496675),
    v = r(699516),
    I = r(70956),
    T = r(5192),
    b = r(489887),
    y = r(981631),
    S = r(388032);
function A() {
    return {
        text: void 0,
        image: void 0,
        localCreationAnswerId: N()
    };
}
function N() {
    return (0, u.Z)();
}
function C(e) {
    let n = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
    return e.replace(n, '');
}
function R(e) {
    for (let n of e.reactions) if (null == n.me_vote) return !0;
    return !1;
}
function O(e) {
    return (0, f.e7)([E.Z], () => !!(null != e && y.TPd.POLLS.has(e.type)) && (!!e.isPrivate() || (E.Z.can(y.Plq.SEND_MESSAGES, e) && E.Z.can(y.Plq.SEND_POLLS, e))));
}
function D() {
    return !1;
}
function L(e, n, r) {
    return 0 === e.length && null == n.find((e) => x(e, r));
}
function x(e, n) {
    if (n === c.C.IMAGE_ONLY_ANSWERS) return null != e.image;
    {
        var r;
        let n = null === (r = e.text) || void 0 === r ? void 0 : r.trim();
        return null != n && n.length > 0;
    }
}
function w(e, n) {
    var r;
    let i = null === (r = e.text) || void 0 === r ? void 0 : r.trim();
    return n === c.C.DEFAULT && null != e.image && (null == i || 0 === i.length);
}
function P(e) {
    return new Date(Date.now() + e * I.Z.Millis.HOUR).toISOString();
}
function M(e) {
    var n;
    if (null == e) return;
    let r =
            null == e
                ? void 0
                : null === (n = e.answers) || void 0 === n
                  ? void 0
                  : n.map((e, n) => {
                        var r, i;
                        let a = null === (r = e.poll_media) || void 0 === r ? void 0 : r.emoji,
                            s = {
                                ...e.poll_media,
                                emoji:
                                    null != a
                                        ? {
                                              id: a.id,
                                              name: null !== (i = a.name) && void 0 !== i ? i : ''
                                          }
                                        : void 0
                            };
                        return {
                            ...e,
                            answer_id: n + 1,
                            poll_media: s
                        };
                    }),
        i = (null == e ? void 0 : e.duration) != null ? P(e.duration) : '0';
    return {
        ...e,
        expiry: i,
        answers: r
    };
}
function k(e, n) {
    var r, i, a, s;
    let o = null !== (s = null === (a = e.embeds[0]) || void 0 === a ? void 0 : null === (i = a.fields) || void 0 === i ? void 0 : null === (r = i.find((e) => 'poll_question_text' === e.rawName)) || void 0 === r ? void 0 : r.rawValue) && void 0 !== s ? s : '';
    return null != n ? (0, d.aF)(o, n) : o;
}
function U(e) {
    let n = (0, h.ZH)(e),
        r = k(e, b.Dv);
    return S.intl.format(S.t.Vn97KS, {
        username: n.nick,
        title: r
    });
}
function B(e) {
    return e.reduce((e, n) => {
        var r, i;
        return e + (null !== (i = null === (r = n.count_details) || void 0 === r ? void 0 : r.vote) && void 0 !== i ? i : 0);
    }, 0);
}
function G(e, n) {
    let r = {
            id: n,
            name: '',
            animated: !1
        },
        i = e.getChannelId(),
        a = m.Z.getReactions(i, e.id, r, b.$J, _.O.VOTE),
        s = p.Z.getChannel(i),
        o = null == s || s.isPrivate() ? null : s.getGuildId();
    return l()(a)
        .reject((e) => v.Z.isBlockedOrIgnored(e.id))
        .take(b.$J)
        .map((e) => T.ZP.getName(o, null == s ? void 0 : s.id, e))
        .value();
}
function Z(e, n) {
    let r = Math.max(0, n - e.length);
    if (1 === e.length)
        return r > 0
            ? S.intl.formatToPlainString(S.t['SV/iZm'], {
                  a: e[0],
                  n: r.toLocaleString()
              })
            : e[0];
    if (2 === e.length)
        return r > 0
            ? S.intl.formatToPlainString(S.t.YBnZKy, {
                  a: e[0],
                  b: e[1],
                  n: r.toLocaleString()
              })
            : S.intl.formatToPlainString(S.t['O5+f5e'], {
                  a: e[0],
                  b: e[1]
              });
    if (3 !== e.length) return S.intl.formatToPlainString(S.t.yVX6kJ, { n: r.toLocaleString() });
    else
        return r > 0
            ? S.intl.formatToPlainString(S.t['ThXp+P'], {
                  a: e[0],
                  b: e[1],
                  c: e[2],
                  n: r.toLocaleString()
              })
            : S.intl.formatToPlainString(S.t['0UzBMz'], {
                  a: e[0],
                  b: e[1],
                  c: e[2]
              });
}
function F(e, n, r) {
    var i, a;
    let s = g.Z.getMessage(n, e);
    if (null == s) return '';
    let o = s.getReaction({
            id: r,
            name: '',
            animated: !1
        }),
        l = null !== (a = null == o ? void 0 : null === (i = o.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== a ? a : 0,
        u = G(s, r);
    return 0 === u.length ? '' : Z(u, l);
}
