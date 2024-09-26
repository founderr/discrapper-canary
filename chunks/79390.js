n.d(t, {
    D$: function () {
        return b;
    },
    N4: function () {
        return x;
    },
    UI: function () {
        return y;
    },
    Uu: function () {
        return N;
    },
    _N: function () {
        return L;
    },
    cS: function () {
        return D;
    },
    cZ: function () {
        return G;
    },
    e1: function () {
        return F;
    },
    eQ: function () {
        return C;
    },
    fw: function () {
        return R;
    },
    uY: function () {
        return M;
    },
    x9: function () {
        return U;
    }
});
var r = n(757143);
var i = n(47120);
var a = n(724458);
var o = n(392711),
    s = n.n(o),
    l = n(772848),
    u = n(263568),
    c = n(468194),
    d = n(442837),
    _ = n(566006),
    E = n(739566),
    f = n(592125),
    h = n(542578),
    p = n(375954),
    m = n(496675),
    I = n(699516),
    T = n(70956),
    g = n(5192),
    S = n(489887),
    A = n(981631),
    v = n(689938);
function N() {
    return {
        text: void 0,
        image: void 0,
        localCreationAnswerId: O()
    };
}
function O() {
    return (0, l.Z)();
}
function R(e) {
    let t = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
    return e.replace(t, '');
}
function C(e) {
    for (let t of e.reactions) if (null == t.me_vote) return !0;
    return !1;
}
function y(e) {
    return (0, d.e7)([m.Z], () => !!(null != e && A.TPd.POLLS.has(e.type)) && (!!e.isPrivate() || (m.Z.can(A.Plq.SEND_MESSAGES, e) && m.Z.can(A.Plq.SEND_POLLS, e))));
}
function L() {
    return !1;
}
function b(e, t, n) {
    return 0 === e.length && null == t.find((e) => D(e, n));
}
function D(e, t) {
    if (t === u.C.IMAGE_ONLY_ANSWERS) return null != e.image;
    {
        var n;
        let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
        return null != t && t.length > 0;
    }
}
function M(e, t) {
    var n;
    let r = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
    return t === u.C.DEFAULT && null != e.image && (null == r || 0 === r.length);
}
function P(e) {
    return new Date(Date.now() + e * T.Z.Millis.HOUR).toISOString();
}
function U(e) {
    var t;
    if (null == e) return;
    let n =
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
                    }),
        r = (null == e ? void 0 : e.duration) != null ? P(e.duration) : '0';
    return {
        ...e,
        expiry: r,
        answers: n
    };
}
function w(e, t) {
    var n, r, i, a;
    let o = null !== (a = null === (i = e.embeds[0]) || void 0 === i ? void 0 : null === (r = i.fields) || void 0 === r ? void 0 : null === (n = r.find((e) => 'poll_question_text' === e.rawName)) || void 0 === n ? void 0 : n.rawValue) && void 0 !== a ? a : '';
    return null != t ? (0, c.aF)(o, t) : o;
}
function x(e) {
    let t = (0, E.ZH)(e),
        n = w(e, S.Dv);
    return v.Z.Messages.POLL_RESULT_REPLY_TEXT.format({
        username: t.nick,
        title: n
    });
}
function G(e) {
    return e.reduce((e, t) => {
        var n, r;
        return e + (null !== (r = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== r ? r : 0);
    }, 0);
}
function k(e, t) {
    let n = {
            id: t,
            name: '',
            animated: !1
        },
        r = e.getChannelId(),
        i = h.Z.getReactions(r, e.id, n, S.$J, _.O.VOTE),
        a = f.Z.getChannel(r),
        o = null == a || a.isPrivate() ? null : a.getGuildId();
    return s()(i)
        .reject((e) => I.Z.isBlocked(e.id))
        .take(S.$J)
        .map((e) => g.ZP.getName(o, null == a ? void 0 : a.id, e))
        .value();
}
function B(e, t) {
    let n = Math.max(0, t - e.length);
    if (1 === e.length)
        return n > 0
            ? v.Z.Messages.POLL_VOTES_TOOLTIP_1_N.format({
                  a: e[0],
                  n: n.toLocaleString()
              })
            : e[0];
    if (2 === e.length)
        return n > 0
            ? v.Z.Messages.POLL_VOTES_TOOLTIP_2_N.format({
                  a: e[0],
                  b: e[1],
                  n: n.toLocaleString()
              })
            : v.Z.Messages.POLL_VOTES_TOOLTIP_2.format({
                  a: e[0],
                  b: e[1]
              });
    if (3 !== e.length) return v.Z.Messages.POLL_VOTES_TOOLTIP_N.format({ n: n.toLocaleString() });
    else
        return n > 0
            ? v.Z.Messages.POLL_VOTES_TOOLTIP_3_N.format({
                  a: e[0],
                  b: e[1],
                  c: e[2],
                  n: n.toLocaleString()
              })
            : v.Z.Messages.POLL_VOTES_TOOLTIP_3.format({
                  a: e[0],
                  b: e[1],
                  c: e[2]
              });
}
function F(e, t, n) {
    var r, i;
    let a = p.Z.getMessage(t, e);
    if (null == a) return '';
    let o = a.getReaction({
            id: n,
            name: '',
            animated: !1
        }),
        s = null !== (i = null == o ? void 0 : null === (r = o.count_details) || void 0 === r ? void 0 : r.vote) && void 0 !== i ? i : 0,
        l = k(a, n);
    return 0 === l.length ? '' : B(l, s);
}
