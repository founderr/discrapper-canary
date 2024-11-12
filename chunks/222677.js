n.d(t, {
    $E: function () {
        return N;
    },
    T6: function () {
        return y;
    },
    TW: function () {
        return i;
    },
    U0: function () {
        return S;
    },
    WO: function () {
        return C;
    },
    rU: function () {
        return T;
    },
    wX: function () {
        return A;
    }
});
var r,
    i,
    a = n(544891),
    s = n(780384),
    o = n(570140),
    l = n(668781),
    u = n(566006),
    c = n(346479),
    d = n(314897),
    f = n(375954),
    _ = n(585483),
    p = n(70956),
    h = n(176354),
    m = n(563114),
    g = n(981631),
    E = n(388032);
function v(e, t, n) {
    let { headers: r, status: i, body: a } = e;
    if (429 === i) {
        let e = parseInt(r['retry-after']);
        return !isNaN(e) && setTimeout(t, e * p.Z.Millis.SECOND), !1;
    }
    if (403 === i)
        switch (a && a.code) {
            case g.evJ.TOO_MANY_REACTIONS:
                l.Z.show({
                    title: E.intl.string(E.t.lFddsb),
                    body: E.intl.string(E.t.h27eIi),
                    confirmText: E.intl.string(E.t.BddRzc)
                });
                break;
            case g.evJ.REACTION_BLOCKED:
                _.S.dispatch(g.CkL.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                });
        }
    else if (!n.isRetry) return t(), !1;
    return !0;
}
function I(e, t, n, r, i) {
    var a, s;
    o.Z.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: null !== (a = null == i ? void 0 : i.userId) && void 0 !== a ? a : d.default.getId(),
        emoji: r,
        optimistic: !0,
        colors: null !== (s = null == i ? void 0 : i.colors) && void 0 !== s ? s : [],
        reactionType: (null == i ? void 0 : i.burst) ? u.O.BURST : u.O.NORMAL
    });
}
function b(e) {
    let { channelId: t, messageId: n, emoji: r, userId: i, useTypeEndpoint: a = !1, type: s = u.O.NORMAL } = e,
        o = null != r.id ? ''.concat(r.name, ':').concat(r.id) : r.name;
    return null == i ? g.ANM.REACTIONS(t, n, o) : a ? g.ANM.REACTION_WITH_TYPE(t, n, o, i, s) : g.ANM.REACTION(t, n, o, i);
}
((r = i || (i = {})).MESSAGE = 'Message'), (r.FORUM_TOOLBAR = 'Forum Toolbar'), (r.MOBILE_MEDIA_VIEWER = 'Mobile Media Viewer'), (r.MESSAGE_HOVER_BAR = 'Message Hover Bar'), (r.MESSAGE_INLINE_BUTTON = 'Message Inline Button'), (r.MESSAGE_CONTEXT_MENU = 'Message Context Menu'), (r.MESSAGE_REACTION_PICKER = 'Message Reaction Picker');
async function S(e) {
    let { channelId: t, messageId: n, emoji: r, limit: i, after: s, type: l } = e,
        c =
            l === u.O.VOTE
                ? (function (e, t, n) {
                      var r;
                      let i = null !== (r = n.id) && void 0 !== r ? r : n.name;
                      return g.ANM.POLL_ANSWER_VOTERS(e, t, i);
                  })(t, n, r)
                : b({
                      channelId: t,
                      messageId: n,
                      emoji: r
                  }),
        d = await a.tn.get({
            url: c,
            query: {
                limit: i,
                after: s,
                type: l
            },
            oldFormErrors: !0
        }),
        f = l === u.O.VOTE ? d.body.users : d.body;
    return (
        o.Z.dispatch({
            type: 'MESSAGE_REACTION_ADD_USERS',
            channelId: t,
            messageId: n,
            users: f,
            emoji: r,
            reactionType: l
        }),
        f
    );
}
async function T(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'Message',
        i = arguments.length > 4 ? arguments[4] : void 0,
        o = null != i && !!i.burst,
        d = null != i && !!i.isRetry;
    if (
        !d &&
        (function (e, t, n, r) {
            let i = f.Z.getMessage(e, t);
            return null != i && i.userHasReactedWithEmoji(n, r);
        })(e, t, n, o)
    ) {
        l.Z.show({
            title: E.intl.string(E.t['uaUU/v']),
            body: E.intl.string(E.t.psMorq),
            confirmText: E.intl.string(E.t['NX+WJC'])
        });
        return;
    }
    let _ = await R(n, o);
    return (
        I('MESSAGE_REACTION_ADD', e, t, n, {
            burst: o,
            colors: _
        }),
        await c.Z.unarchiveThreadIfNecessary(e),
        a.tn
            .put({
                url: b({
                    channelId: e,
                    messageId: t,
                    emoji: n,
                    userId: '@me'
                }),
                query: {
                    location: r,
                    type: o ? u.O.BURST : u.O.NORMAL
                },
                oldFormErrors: !0
            })
            .then(() => {
                o
                    ? (s.uv.announce(E.intl.formatToPlainString(E.t['RJlG+f'], { name: n.name })),
                      m.Z.triggerFullscreenAnimation({
                          channelId: e,
                          messageId: t,
                          emoji: {
                              ...n,
                              animated: !1
                          }
                      }))
                    : s.uv.announce(E.intl.formatToPlainString(E.t.ol4acH, { name: n.name }));
            })
            .catch((i) => {
                v(
                    i,
                    () =>
                        T(e, t, n, r, {
                            burst: o,
                            isRetry: !0
                        }),
                    { isRetry: d }
                ) && (I('MESSAGE_REACTION_REMOVE', e, t, n, { burst: o }), o ? s.uv.announce(E.intl.formatToPlainString(E.t['fJeu8/'], { name: n.name })) : s.uv.announce(E.intl.formatToPlainString(E.t.UUn5V1, { name: n.name })));
            })
    );
}
function y(e) {
    let { channelId: t, messageId: n, emoji: r, key: i } = e;
    o.Z.dispatch({
        type: 'BURST_REACTION_EFFECT_PLAY',
        channelId: t,
        messageId: n,
        emoji: r,
        key: i
    });
}
async function A(e, t, n) {
    let r = null != n && !!n.isRetry;
    await c.Z.unarchiveThreadIfNecessary(e),
        a.tn
            .del({
                url: g.ANM.REMOVE_REACTIONS(e, t),
                oldFormErrors: !0
            })
            .catch((n) => {
                v(n, () => A(e, t, { isRetry: !0 }), { isRetry: r });
            });
}
async function N(e, t, n, r) {
    let i = null != r && !!r.isRetry;
    await c.Z.unarchiveThreadIfNecessary(e);
    let s = null === n.id ? n.name : ''.concat(n.name, ':').concat(n.id);
    a.tn
        .del({
            url: g.ANM.REMOVE_EMOJI_REACTIONS(e, t, s),
            oldFormErrors: !0
        })
        .catch((r) => {
            v(r, () => N(e, t, n, { isRetry: !0 }), { isRetry: i });
        });
}
async function C(e) {
    let { channelId: t, messageId: n, emoji: r, location: i = 'Message', userId: o, options: l } = e,
        d = null != l && !!l.burst,
        f = null != l && !!l.isRetry;
    I('MESSAGE_REACTION_REMOVE', t, n, r, {
        userId: o,
        burst: d
    }),
        await c.Z.unarchiveThreadIfNecessary(t),
        a.tn
            .del({
                url: b({
                    channelId: t,
                    messageId: n,
                    emoji: r,
                    userId: null != o ? o : '@me',
                    type: d ? u.O.BURST : u.O.NORMAL,
                    useTypeEndpoint: !0
                }),
                query: {
                    location: i,
                    burst: d
                },
                oldFormErrors: !0
            })
            .then(() => {
                (null == l ? void 0 : l.burst) ? s.uv.announce(E.intl.formatToPlainString(E.t['3l9f6u'], { name: r.name })) : s.uv.announce(E.intl.formatToPlainString(E.t['DQxi+/'], { name: r.name }));
            })
            .catch(async (e) => {
                if (
                    v(
                        e,
                        () =>
                            C({
                                channelId: t,
                                messageId: n,
                                emoji: r,
                                location: i,
                                userId: o,
                                options: {
                                    burst: d,
                                    isRetry: !0
                                }
                            }),
                        { isRetry: f }
                    )
                ) {
                    let e = await R(r, d);
                    I('MESSAGE_REACTION_ADD', t, n, r, {
                        userId: o,
                        burst: d,
                        colors: e
                    }),
                        (null == l ? void 0 : l.burst) ? s.uv.announce(E.intl.formatToPlainString(E.t.OamVbW, { name: r.name })) : s.uv.announce(E.intl.formatToPlainString(E.t['tD9+b2'], { name: r.name }));
                }
            });
}
async function R(e, t) {
    let n = [];
    if (t)
        try {
            n = await (0, h.B6)(e);
        } catch {}
    return n;
}
