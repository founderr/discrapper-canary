n.d(t, {
    $E: function () {
        return O;
    },
    T6: function () {
        return C;
    },
    TW: function () {
        return i;
    },
    U0: function () {
        return A;
    },
    WO: function () {
        return D;
    },
    rU: function () {
        return N;
    },
    wX: function () {
        return R;
    }
});
var r,
    i,
    a = n(544891),
    s = n(780384),
    o = n(570140),
    l = n(668781),
    u = n(367907),
    c = n(566006),
    d = n(346479),
    f = n(314897),
    _ = n(592125),
    p = n(375954),
    h = n(626135),
    m = n(585483),
    g = n(70956),
    E = n(176354),
    v = n(563114),
    I = n(981631),
    T = n(388032);
function b(e, t, n) {
    let { headers: r, status: i, body: a } = e;
    if (429 === i) {
        let e = parseInt(r['retry-after']);
        return !isNaN(e) && setTimeout(t, e * g.Z.Millis.SECOND), !1;
    }
    if (403 === i)
        switch (a && a.code) {
            case I.evJ.TOO_MANY_REACTIONS:
                l.Z.show({
                    title: T.intl.string(T.t.lFddsb),
                    body: T.intl.string(T.t.h27eIi),
                    confirmText: T.intl.string(T.t.BddRzc)
                });
                break;
            case I.evJ.REACTION_BLOCKED:
                m.S.dispatch(I.CkL.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                });
        }
    else if (!n.isRetry) return t(), !1;
    return !0;
}
function S(e, t, n, r, i) {
    var a, s;
    o.Z.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: null !== (a = null == i ? void 0 : i.userId) && void 0 !== a ? a : f.default.getId(),
        emoji: r,
        optimistic: !0,
        colors: null !== (s = null == i ? void 0 : i.colors) && void 0 !== s ? s : [],
        reactionType: (null == i ? void 0 : i.burst) ? c.O.BURST : c.O.NORMAL
    });
}
function y(e) {
    let { channelId: t, messageId: n, emoji: r, userId: i, useTypeEndpoint: a = !1, type: s = c.O.NORMAL } = e,
        o = null != r.id ? ''.concat(r.name, ':').concat(r.id) : r.name;
    return null == i ? I.ANM.REACTIONS(t, n, o) : a ? I.ANM.REACTION_WITH_TYPE(t, n, o, i, s) : I.ANM.REACTION(t, n, o, i);
}
((r = i || (i = {})).MESSAGE = 'Message'), (r.FORUM_TOOLBAR = 'Forum Toolbar'), (r.MOBILE_MEDIA_VIEWER = 'Mobile Media Viewer'), (r.MESSAGE_HOVER_BAR = 'Message Hover Bar'), (r.MESSAGE_INLINE_BUTTON = 'Message Inline Button'), (r.MESSAGE_CONTEXT_MENU = 'Message Context Menu'), (r.MESSAGE_REACTION_PICKER = 'Message Reaction Picker'), (r.MESSAGE_SHORTCUT = 'Message Shortcut');
async function A(e) {
    let { channelId: t, messageId: n, emoji: r, limit: i, after: s, type: l } = e,
        u =
            l === c.O.VOTE
                ? (function (e, t, n) {
                      var r;
                      let i = null !== (r = n.id) && void 0 !== r ? r : n.name;
                      return I.ANM.POLL_ANSWER_VOTERS(e, t, i);
                  })(t, n, r)
                : y({
                      channelId: t,
                      messageId: n,
                      emoji: r
                  }),
        d = await a.tn.get({
            url: u,
            query: {
                limit: i,
                after: s,
                type: l
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
        f = l === c.O.VOTE ? d.body.users : d.body;
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
async function N(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'Message',
        i = arguments.length > 4 ? arguments[4] : void 0,
        o = null != i && !!i.burst,
        f = null != i && !!i.isRetry;
    if (
        !f &&
        (function (e, t, n, r) {
            let i = p.Z.getMessage(e, t);
            return null != i && i.userHasReactedWithEmoji(n, r);
        })(e, t, n, o)
    ) {
        l.Z.show({
            title: T.intl.string(T.t['uaUU/v']),
            body: T.intl.string(T.t.psMorq),
            confirmText: T.intl.string(T.t['NX+WJC'])
        });
        return;
    }
    let m = await L(n, o);
    return (
        S('MESSAGE_REACTION_ADD', e, t, n, {
            burst: o,
            colors: m
        }),
        await d.Z.unarchiveThreadIfNecessary(e),
        a.tn
            .put({
                url: y({
                    channelId: e,
                    messageId: t,
                    emoji: n,
                    userId: '@me'
                }),
                query: {
                    location: r,
                    type: o ? c.O.BURST : c.O.NORMAL
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                if ('Message Shortcut' === r) {
                    var i;
                    let r = _.Z.getChannel(e);
                    h.default.track(I.rMx.MESSAGE_SHORTCUT_ACTION_SENT, {
                        channel_id: e,
                        guild_id: null == r ? void 0 : r.guild_id,
                        original_message_id: t,
                        emoji_id: null !== (i = n.id) && void 0 !== i ? i : n.name,
                        action: 'react',
                        ...(0, u.hH)(null == r ? void 0 : r.guild_id),
                        ...(0, u.v_)(r)
                    });
                }
                o
                    ? (s.uv.announce(T.intl.formatToPlainString(T.t['RJlG+f'], { name: n.name })),
                      v.Z.triggerFullscreenAnimation({
                          channelId: e,
                          messageId: t,
                          emoji: {
                              ...n,
                              animated: !1
                          }
                      }))
                    : s.uv.announce(T.intl.formatToPlainString(T.t.ol4acH, { name: n.name }));
            })
            .catch((i) => {
                b(
                    i,
                    () =>
                        N(e, t, n, r, {
                            burst: o,
                            isRetry: !0
                        }),
                    { isRetry: f }
                ) && (S('MESSAGE_REACTION_REMOVE', e, t, n, { burst: o }), o ? s.uv.announce(T.intl.formatToPlainString(T.t['fJeu8/'], { name: n.name })) : s.uv.announce(T.intl.formatToPlainString(T.t.UUn5V1, { name: n.name })));
            })
    );
}
function C(e) {
    let { channelId: t, messageId: n, emoji: r, key: i } = e;
    o.Z.dispatch({
        type: 'BURST_REACTION_EFFECT_PLAY',
        channelId: t,
        messageId: n,
        emoji: r,
        key: i
    });
}
async function R(e, t, n) {
    let r = null != n && !!n.isRetry;
    await d.Z.unarchiveThreadIfNecessary(e),
        a.tn
            .del({
                url: I.ANM.REMOVE_REACTIONS(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .catch((n) => {
                b(n, () => R(e, t, { isRetry: !0 }), { isRetry: r });
            });
}
async function O(e, t, n, r) {
    let i = null != r && !!r.isRetry;
    await d.Z.unarchiveThreadIfNecessary(e);
    let s = null === n.id ? n.name : ''.concat(n.name, ':').concat(n.id);
    a.tn
        .del({
            url: I.ANM.REMOVE_EMOJI_REACTIONS(e, t, s),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .catch((r) => {
            b(r, () => O(e, t, n, { isRetry: !0 }), { isRetry: i });
        });
}
async function D(e) {
    let { channelId: t, messageId: n, emoji: r, location: i = 'Message', userId: o, options: l } = e,
        u = null != l && !!l.burst,
        f = null != l && !!l.isRetry;
    S('MESSAGE_REACTION_REMOVE', t, n, r, {
        userId: o,
        burst: u
    }),
        await d.Z.unarchiveThreadIfNecessary(t),
        a.tn
            .del({
                url: y({
                    channelId: t,
                    messageId: n,
                    emoji: r,
                    userId: null != o ? o : '@me',
                    type: u ? c.O.BURST : c.O.NORMAL,
                    useTypeEndpoint: !0
                }),
                query: {
                    location: i,
                    burst: u
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                (null == l ? void 0 : l.burst) ? s.uv.announce(T.intl.formatToPlainString(T.t['3l9f6u'], { name: r.name })) : s.uv.announce(T.intl.formatToPlainString(T.t['DQxi+/'], { name: r.name }));
            })
            .catch(async (e) => {
                if (
                    b(
                        e,
                        () =>
                            D({
                                channelId: t,
                                messageId: n,
                                emoji: r,
                                location: i,
                                userId: o,
                                options: {
                                    burst: u,
                                    isRetry: !0
                                }
                            }),
                        { isRetry: f }
                    )
                ) {
                    let e = await L(r, u);
                    S('MESSAGE_REACTION_ADD', t, n, r, {
                        userId: o,
                        burst: u,
                        colors: e
                    }),
                        (null == l ? void 0 : l.burst) ? s.uv.announce(T.intl.formatToPlainString(T.t.OamVbW, { name: r.name })) : s.uv.announce(T.intl.formatToPlainString(T.t['tD9+b2'], { name: r.name }));
                }
            });
}
async function L(e, t) {
    let n = [];
    if (t)
        try {
            n = await (0, E.B6)(e);
        } catch {}
    return n;
}
