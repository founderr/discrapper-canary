n.d(t, {
    $E: function () {
        return R;
    },
    T6: function () {
        return N;
    },
    TW: function () {
        return r;
    },
    U0: function () {
        return A;
    },
    WO: function () {
        return C;
    },
    rU: function () {
        return v;
    },
    wX: function () {
        return O;
    }
});
var r,
    i = n(544891),
    a = n(780384),
    o = n(570140),
    s = n(668781),
    l = n(566006),
    u = n(346479),
    c = n(314897),
    d = n(375954),
    _ = n(585483),
    E = n(70956),
    f = n(176354),
    h = n(563114),
    p = n(981631),
    m = n(689938);
function I(e, t, n) {
    let { headers: r, status: i, body: a } = e;
    if (429 === i) {
        let e = parseInt(r['retry-after']);
        return !isNaN(e) && setTimeout(t, e * E.Z.Millis.SECOND), !1;
    }
    if (403 === i)
        switch (a && a.code) {
            case p.evJ.TOO_MANY_REACTIONS:
                s.Z.show({
                    title: m.Z.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                    body: m.Z.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                    confirmText: m.Z.Messages.OKAY
                });
                break;
            case p.evJ.REACTION_BLOCKED:
                _.S.dispatch(p.CkL.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                });
        }
    else if (!n.isRetry) return t(), !1;
    return !0;
}
function T(e, t, n, r, i) {
    var a, s;
    o.Z.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: null !== (a = null == i ? void 0 : i.userId) && void 0 !== a ? a : c.default.getId(),
        emoji: r,
        optimistic: !0,
        colors: null !== (s = null == i ? void 0 : i.colors) && void 0 !== s ? s : [],
        reactionType: (null == i ? void 0 : i.burst) ? l.O.BURST : l.O.NORMAL
    });
}
function g(e) {
    let { channelId: t, messageId: n, emoji: r, userId: i, useTypeEndpoint: a = !1, type: o = l.O.NORMAL } = e,
        s = null != r.id ? ''.concat(r.name, ':').concat(r.id) : r.name;
    return null == i ? p.ANM.REACTIONS(t, n, s) : a ? p.ANM.REACTION_WITH_TYPE(t, n, s, i, o) : p.ANM.REACTION(t, n, s, i);
}
function S(e, t, n) {
    var r;
    let i = null !== (r = n.id) && void 0 !== r ? r : n.name;
    return p.ANM.POLL_ANSWER_VOTERS(e, t, i);
}
async function A(e) {
    let { channelId: t, messageId: n, emoji: r, limit: a, after: s, type: u } = e,
        c =
            u === l.O.VOTE
                ? S(t, n, r)
                : g({
                      channelId: t,
                      messageId: n,
                      emoji: r
                  }),
        d = await i.tn.get({
            url: c,
            query: {
                limit: a,
                after: s,
                type: u
            },
            oldFormErrors: !0
        }),
        _ = u === l.O.VOTE ? d.body.users : d.body;
    return (
        o.Z.dispatch({
            type: 'MESSAGE_REACTION_ADD_USERS',
            channelId: t,
            messageId: n,
            users: _,
            emoji: r,
            reactionType: u
        }),
        _
    );
}
async function v(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'Message',
        o = arguments.length > 4 ? arguments[4] : void 0,
        c = null != o && !!o.burst,
        d = null != o && !!o.isRetry;
    if (!d && b(e, t, n, c)) {
        s.Z.show({
            title: m.Z.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
            body: m.Z.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
            confirmText: m.Z.Messages.GOT_IT
        });
        return;
    }
    let _ = await y(n, c);
    return (
        T('MESSAGE_REACTION_ADD', e, t, n, {
            burst: c,
            colors: _
        }),
        await u.Z.unarchiveThreadIfNecessary(e),
        i.tn
            .put({
                url: g({
                    channelId: e,
                    messageId: t,
                    emoji: n,
                    userId: '@me'
                }),
                query: {
                    location: r,
                    type: c ? l.O.BURST : l.O.NORMAL
                },
                oldFormErrors: !0
            })
            .then(() => {
                c
                    ? (a.uv.announce(m.Z.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({ name: n.name })),
                      h.Z.triggerFullscreenAnimation({
                          channelId: e,
                          messageId: t,
                          emoji: {
                              ...n,
                              animated: !1
                          }
                      }))
                    : a.uv.announce(m.Z.Messages.REACTION_ADD_SUCCESS_A11Y.format({ name: n.name }));
            })
            .catch((i) => {
                I(
                    i,
                    () =>
                        v(e, t, n, r, {
                            burst: c,
                            isRetry: !0
                        }),
                    { isRetry: d }
                ) && (T('MESSAGE_REACTION_REMOVE', e, t, n, { burst: c }), c ? a.uv.announce(m.Z.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({ name: n.name })) : a.uv.announce(m.Z.Messages.REACTION_ADD_ERROR_A11Y.format({ name: n.name })));
            })
    );
}
function N(e) {
    let { channelId: t, messageId: n, emoji: r, key: i } = e;
    o.Z.dispatch({
        type: 'BURST_REACTION_EFFECT_PLAY',
        channelId: t,
        messageId: n,
        emoji: r,
        key: i
    });
}
async function O(e, t, n) {
    let r = null != n && !!n.isRetry;
    await u.Z.unarchiveThreadIfNecessary(e),
        i.tn
            .del({
                url: p.ANM.REMOVE_REACTIONS(e, t),
                oldFormErrors: !0
            })
            .catch((n) => {
                I(n, () => O(e, t, { isRetry: !0 }), { isRetry: r });
            });
}
async function R(e, t, n, r) {
    let a = null != r && !!r.isRetry;
    await u.Z.unarchiveThreadIfNecessary(e);
    let o = null === n.id ? n.name : ''.concat(n.name, ':').concat(n.id);
    i.tn
        .del({
            url: p.ANM.REMOVE_EMOJI_REACTIONS(e, t, o),
            oldFormErrors: !0
        })
        .catch((r) => {
            I(r, () => R(e, t, n, { isRetry: !0 }), { isRetry: a });
        });
}
async function C(e) {
    let { channelId: t, messageId: n, emoji: r, location: o = 'Message', userId: s, options: c } = e,
        d = null != c && !!c.burst,
        _ = null != c && !!c.isRetry;
    T('MESSAGE_REACTION_REMOVE', t, n, r, {
        userId: s,
        burst: d
    }),
        await u.Z.unarchiveThreadIfNecessary(t),
        i.tn
            .del({
                url: g({
                    channelId: t,
                    messageId: n,
                    emoji: r,
                    userId: null != s ? s : '@me',
                    type: d ? l.O.BURST : l.O.NORMAL,
                    useTypeEndpoint: !0
                }),
                query: {
                    location: o,
                    burst: d
                },
                oldFormErrors: !0
            })
            .then(() => {
                (null == c ? void 0 : c.burst) ? a.uv.announce(m.Z.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({ name: r.name })) : a.uv.announce(m.Z.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({ name: r.name }));
            })
            .catch(async (e) => {
                if (
                    I(
                        e,
                        () =>
                            C({
                                channelId: t,
                                messageId: n,
                                emoji: r,
                                location: o,
                                userId: s,
                                options: {
                                    burst: d,
                                    isRetry: !0
                                }
                            }),
                        { isRetry: _ }
                    )
                ) {
                    let e = await y(r, d);
                    T('MESSAGE_REACTION_ADD', t, n, r, {
                        userId: s,
                        burst: d,
                        colors: e
                    }),
                        (null == c ? void 0 : c.burst) ? a.uv.announce(m.Z.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({ name: r.name })) : a.uv.announce(m.Z.Messages.REACTION_REMOVE_ERROR_A11Y.format({ name: r.name }));
                }
            });
}
async function y(e, t) {
    let n = [];
    if (t)
        try {
            n = await (0, f.B6)(e);
        } catch {}
    return n;
}
function b(e, t, n, r) {
    let i = d.Z.getMessage(e, t);
    return null != i && i.userHasReactedWithEmoji(n, r);
}
!(function (e) {
    (e.MESSAGE = 'Message'), (e.FORUM_TOOLBAR = 'Forum Toolbar'), (e.MOBILE_MEDIA_VIEWER = 'Mobile Media Viewer'), (e.MESSAGE_HOVER_BAR = 'Message Hover Bar'), (e.MESSAGE_INLINE_BUTTON = 'Message Inline Button'), (e.MESSAGE_CONTEXT_MENU = 'Message Context Menu'), (e.MESSAGE_REACTION_PICKER = 'Message Reaction Picker');
})(r || (r = {}));
