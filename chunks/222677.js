r.d(n, {
    $E: function () {
        return D;
    },
    T6: function () {
        return R;
    },
    TW: function () {
        return i;
    },
    U0: function () {
        return N;
    },
    WO: function () {
        return L;
    },
    rU: function () {
        return C;
    },
    wX: function () {
        return O;
    }
});
var i,
    a = r(544891),
    s = r(780384),
    o = r(570140),
    l = r(668781),
    u = r(367907),
    c = r(566006),
    d = r(346479),
    f = r(314897),
    _ = r(592125),
    h = r(375954),
    p = r(626135),
    m = r(585483),
    g = r(70956),
    E = r(176354),
    v = r(563114),
    I = r(981631),
    T = r(388032);
function b(e, n, r) {
    let { headers: i, status: a, body: s } = e;
    if (429 === a) {
        let e = parseInt(i['retry-after']);
        return !isNaN(e) && setTimeout(n, e * g.Z.Millis.SECOND), !1;
    }
    if (403 === a)
        switch (s && s.code) {
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
    else if (!r.isRetry) return n(), !1;
    return !0;
}
function y(e, n, r, i, a) {
    var s, l;
    o.Z.dispatch({
        type: e,
        channelId: n,
        messageId: r,
        userId: null !== (s = null == a ? void 0 : a.userId) && void 0 !== s ? s : f.default.getId(),
        emoji: i,
        optimistic: !0,
        colors: null !== (l = null == a ? void 0 : a.colors) && void 0 !== l ? l : [],
        reactionType: (null == a ? void 0 : a.burst) ? c.O.BURST : c.O.NORMAL
    });
}
function S(e) {
    let { channelId: n, messageId: r, emoji: i, userId: a, useTypeEndpoint: s = !1, type: o = c.O.NORMAL } = e,
        l = null != i.id ? ''.concat(i.name, ':').concat(i.id) : i.name;
    return null == a ? I.ANM.REACTIONS(n, r, l) : s ? I.ANM.REACTION_WITH_TYPE(n, r, l, a, o) : I.ANM.REACTION(n, r, l, a);
}
function A(e, n, r) {
    var i;
    let a = null !== (i = r.id) && void 0 !== i ? i : r.name;
    return I.ANM.POLL_ANSWER_VOTERS(e, n, a);
}
async function N(e) {
    let { channelId: n, messageId: r, emoji: i, limit: s, after: l, type: u } = e,
        d =
            u === c.O.VOTE
                ? A(n, r, i)
                : S({
                      channelId: n,
                      messageId: r,
                      emoji: i
                  }),
        f = await a.tn.get({
            url: d,
            query: {
                limit: s,
                after: l,
                type: u
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
        _ = u === c.O.VOTE ? f.body.users : f.body;
    return (
        o.Z.dispatch({
            type: 'MESSAGE_REACTION_ADD_USERS',
            channelId: n,
            messageId: r,
            users: _,
            emoji: i,
            reactionType: u
        }),
        _
    );
}
async function C(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'Message',
        o = arguments.length > 4 ? arguments[4] : void 0,
        f = null != o && !!o.burst,
        h = null != o && !!o.isRetry;
    if (!h && w(e, n, r, f)) {
        l.Z.show({
            title: T.intl.string(T.t['uaUU/v']),
            body: T.intl.string(T.t.psMorq),
            confirmText: T.intl.string(T.t['NX+WJC'])
        });
        return;
    }
    let m = await x(r, f);
    return (
        y('MESSAGE_REACTION_ADD', e, n, r, {
            burst: f,
            colors: m
        }),
        await d.Z.unarchiveThreadIfNecessary(e),
        a.tn
            .put({
                url: S({
                    channelId: e,
                    messageId: n,
                    emoji: r,
                    userId: '@me'
                }),
                query: {
                    location: i,
                    type: f ? c.O.BURST : c.O.NORMAL
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                if ('Message Shortcut' === i) {
                    var a;
                    let i = _.Z.getChannel(e);
                    p.default.track(I.rMx.MESSAGE_SHORTCUT_ACTION_SENT, {
                        channel_id: e,
                        guild_id: null == i ? void 0 : i.guild_id,
                        original_message_id: n,
                        emoji_id: null !== (a = r.id) && void 0 !== a ? a : r.name,
                        action: 'react',
                        ...(0, u.hH)(null == i ? void 0 : i.guild_id),
                        ...(0, u.v_)(i)
                    });
                }
                f
                    ? (s.uv.announce(T.intl.formatToPlainString(T.t['RJlG+f'], { name: r.name })),
                      v.Z.triggerFullscreenAnimation({
                          channelId: e,
                          messageId: n,
                          emoji: {
                              ...r,
                              animated: !1
                          }
                      }))
                    : s.uv.announce(T.intl.formatToPlainString(T.t.ol4acH, { name: r.name }));
            })
            .catch((a) => {
                b(
                    a,
                    () =>
                        C(e, n, r, i, {
                            burst: f,
                            isRetry: !0
                        }),
                    { isRetry: h }
                ) && (y('MESSAGE_REACTION_REMOVE', e, n, r, { burst: f }), f ? s.uv.announce(T.intl.formatToPlainString(T.t['fJeu8/'], { name: r.name })) : s.uv.announce(T.intl.formatToPlainString(T.t.UUn5V1, { name: r.name })));
            })
    );
}
function R(e) {
    let { channelId: n, messageId: r, emoji: i, key: a } = e;
    o.Z.dispatch({
        type: 'BURST_REACTION_EFFECT_PLAY',
        channelId: n,
        messageId: r,
        emoji: i,
        key: a
    });
}
async function O(e, n, r) {
    let i = null != r && !!r.isRetry;
    await d.Z.unarchiveThreadIfNecessary(e),
        a.tn
            .del({
                url: I.ANM.REMOVE_REACTIONS(e, n),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .catch((r) => {
                b(r, () => O(e, n, { isRetry: !0 }), { isRetry: i });
            });
}
async function D(e, n, r, i) {
    let s = null != i && !!i.isRetry;
    await d.Z.unarchiveThreadIfNecessary(e);
    let o = null === r.id ? r.name : ''.concat(r.name, ':').concat(r.id);
    a.tn
        .del({
            url: I.ANM.REMOVE_EMOJI_REACTIONS(e, n, o),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .catch((i) => {
            b(i, () => D(e, n, r, { isRetry: !0 }), { isRetry: s });
        });
}
async function L(e) {
    let { channelId: n, messageId: r, emoji: i, location: o = 'Message', userId: l, options: u } = e,
        f = null != u && !!u.burst,
        _ = null != u && !!u.isRetry;
    y('MESSAGE_REACTION_REMOVE', n, r, i, {
        userId: l,
        burst: f
    }),
        await d.Z.unarchiveThreadIfNecessary(n),
        a.tn
            .del({
                url: S({
                    channelId: n,
                    messageId: r,
                    emoji: i,
                    userId: null != l ? l : '@me',
                    type: f ? c.O.BURST : c.O.NORMAL,
                    useTypeEndpoint: !0
                }),
                query: {
                    location: o,
                    burst: f
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                (null == u ? void 0 : u.burst) ? s.uv.announce(T.intl.formatToPlainString(T.t['3l9f6u'], { name: i.name })) : s.uv.announce(T.intl.formatToPlainString(T.t['DQxi+/'], { name: i.name }));
            })
            .catch(async (e) => {
                if (
                    b(
                        e,
                        () =>
                            L({
                                channelId: n,
                                messageId: r,
                                emoji: i,
                                location: o,
                                userId: l,
                                options: {
                                    burst: f,
                                    isRetry: !0
                                }
                            }),
                        { isRetry: _ }
                    )
                ) {
                    let e = await x(i, f);
                    y('MESSAGE_REACTION_ADD', n, r, i, {
                        userId: l,
                        burst: f,
                        colors: e
                    }),
                        (null == u ? void 0 : u.burst) ? s.uv.announce(T.intl.formatToPlainString(T.t.OamVbW, { name: i.name })) : s.uv.announce(T.intl.formatToPlainString(T.t['tD9+b2'], { name: i.name }));
                }
            });
}
async function x(e, n) {
    let r = [];
    if (n)
        try {
            r = await (0, E.B6)(e);
        } catch {}
    return r;
}
function w(e, n, r, i) {
    let a = h.Z.getMessage(e, n);
    return null != a && a.userHasReactedWithEmoji(r, i);
}
!(function (e) {
    (e.MESSAGE = 'Message'), (e.FORUM_TOOLBAR = 'Forum Toolbar'), (e.MOBILE_MEDIA_VIEWER = 'Mobile Media Viewer'), (e.MESSAGE_HOVER_BAR = 'Message Hover Bar'), (e.MESSAGE_INLINE_BUTTON = 'Message Inline Button'), (e.MESSAGE_CONTEXT_MENU = 'Message Context Menu'), (e.MESSAGE_REACTION_PICKER = 'Message Reaction Picker'), (e.MESSAGE_SHORTCUT = 'Message Shortcut');
})(i || (i = {}));
