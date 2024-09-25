n.d(t, {
    n: function () {
        return B;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(390547);
var o = n(724458);
var s = n(512722),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(263568),
    _ = n(442837),
    E = n(570140),
    f = n(668781),
    h = n(749210),
    p = n(904245),
    m = n(881052),
    I = n(367907),
    T = n(41776),
    g = n(566006),
    S = n(48854),
    A = n(869765),
    v = n(314897),
    N = n(592125),
    O = n(703558),
    R = n(607744),
    C = n(375954),
    y = n(117530),
    b = n(553803),
    L = n(316758),
    D = n(467531),
    M = n(798628),
    P = n(918088),
    U = n(981631),
    w = n(689938);
function x(e) {
    let { channelId: t, messageId: n } = e,
        r = C.Z.getMessage(t, n);
    if (null != r)
        return {
            message: r,
            channelId: t,
            messageId: n
        };
    let i = A.Z.getMessage(t, n);
    if (null != i.message)
        return {
            channelId: t,
            messageId: n,
            message: i.message
        };
    throw (l()(null != r, 'Tapped on a non-existent poll message'), Error());
}
function G(e, t) {
    let n = [...t],
        r = 0,
        i = 0;
    for (let t of n) {
        var a;
        let n = null == e ? void 0 : null === (a = e.find((e) => e.answer_id === parseInt(t))) || void 0 === a ? void 0 : a.poll_media;
        (null == n ? void 0 : n.text) != null && (r += 1), (null == n ? void 0 : n.emoji) != null && (i += 1);
    }
    return {
        analyticsSelectedAnswerIds: n,
        selectedTextAnswersCount: r,
        selectedEmojiAnswersCount: i
    };
}
function k(e) {
    let { guildId: t, title: n, body: r } = e;
    f.Z.show({
        title: n,
        body: r,
        confirmText: w.Z.Messages.LURKER_MODE_POPOUT_JOIN,
        cancelText: w.Z.Messages.LURKER_MODE_POPOUT_CANCEL,
        onConfirm: () => {
            h.Z.joinGuild(t, { source: U.vtS.POLL_ALERT });
        }
    });
}
function B(e) {
    let { channelId: t, messageId: n, answerId: r } = e,
        i = N.Z.getChannel(t);
    if (null == i) return;
    if (T.Z.isLurking(i.guild_id)) {
        k({
            guildId: i.guild_id,
            title: w.Z.Messages.POLL_LURKING_SEE_VOTES_TITLE,
            body: w.Z.Messages.POLL_LURKING_VOTE_SUBTITLE
        });
        return;
    }
    let a = C.Z.getMessage(t, n);
    if (null == a || null == a.poll || 0 === a.poll.answers.length) return;
    let o = null != r ? r : String(a.poll.answers[0].answer_id);
    b.A({
        message: a,
        initialAnswerId: o
    });
}
function F(e) {
    var t, n;
    let { answerId: r, ...i } = e,
        { channelId: a, messageId: o, message: s } = x(i),
        { tapShouldOpenVotersModal: l } = null !== (n = (0, P.Tk)(s)) && void 0 !== n ? n : {};
    if (!0 === l) {
        B({
            channelId: a,
            messageId: o,
            answerId: r
        });
        return;
    }
    let u = null === (t = s.poll) || void 0 === t ? void 0 : t.allow_multiselect;
    (0, M.eu)(a, o, (e) => {
        var t, n;
        if (null == e) {
            let e = new Set([r]),
                { analyticsSelectedAnswerIds: t, selectedTextAnswersCount: i, selectedEmojiAnswersCount: l } = G(null === (n = s.poll) || void 0 === n ? void 0 : n.answers, e);
            return (
                I.ZP.trackWithMetadata(U.rMx.POLL_VOTE_SELECTED, {
                    channel_id: a,
                    message_id: o,
                    selected_answer_ids: t,
                    selected_text_answers_count: i,
                    selected_emoji_answers_count: l
                }),
                {
                    channelId: a,
                    selectedAnswerIds: e,
                    submitting: !1,
                    editing: !1,
                    showResults: !1
                }
            );
        }
        let i = { ...e },
            l = new Set(i.selectedAnswerIds);
        if (((i.selectedAnswerIds = l), l.has(r))) l.delete(r);
        else {
            if (!u) for (let e of l) l.delete(e);
            l.add(r);
        }
        let { analyticsSelectedAnswerIds: c, selectedTextAnswersCount: d, selectedEmojiAnswersCount: _ } = G(null === (t = s.poll) || void 0 === t ? void 0 : t.answers, l);
        return (
            I.ZP.trackWithMetadata(U.rMx.POLL_VOTE_SELECTED, {
                channel_id: a,
                message_id: o,
                selected_answer_ids: c,
                selected_text_answers_count: d,
                selected_emoji_answers_count: _
            }),
            i
        );
    });
}
function Z(e) {
    let { channelId: t, messageId: n, isEditing: r } = e;
    (0, M.eu)(t, n, (e) => {
        var n;
        return {
            channelId: t,
            selectedAnswerIds: new Set(),
            submitting: !1,
            editing: r,
            showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
        };
    });
}
function V(e) {
    let { channelId: t, messageId: n } = e,
        r = C.Z.getMessage(t, n);
    return null == r ? [] : r.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function H(e) {
    let { channelId: t, messageId: n, answerIds: r } = e,
        i = V({
            channelId: t,
            messageId: n
        }),
        a = c().difference(i, r),
        o = c().difference(r, i),
        s = v.default.getId(),
        l = [
            ...a.map((e) => ({
                type: 'MESSAGE_REACTION_REMOVE',
                id: e
            })),
            ...o.map((e) => ({
                type: 'MESSAGE_REACTION_ADD',
                id: e
            }))
        ],
        u = _.ZP.Emitter.batched(() => {
            let e;
            for (let { id: r, type: i } of l)
                e = E.Z.dispatch({
                    type: i,
                    channelId: t,
                    messageId: n,
                    emoji: {
                        id: r,
                        name: r
                    },
                    userId: s,
                    optimistic: !0,
                    reactionType: g.O.VOTE
                });
            return e;
        });
    null != u && (await u);
}
async function Y(e) {
    let { channelId: t, messageId: n } = e,
        r = N.Z.getChannel(t);
    if (null == r) return;
    if (T.Z.isLurking(r.guild_id)) {
        k({
            guildId: r.guild_id,
            title: w.Z.Messages.POLL_LURKING_VOTE_TITLE,
            body: w.Z.Messages.POLL_LURKING_VOTE_SUBTITLE
        });
        return;
    }
    if (!R.Z.canChatInGuild(r.guild_id)) {
        f.Z.show({
            title: w.Z.Messages.POLL_GUILD_MEMBER_UNVERIFIED_TITLE,
            body: w.Z.Messages.POLL_GUILD_MEMBER_UNVERIFIED_SUBTITLE
        });
        return;
    }
    let i = (0, M.fU)(t, n);
    l()(null != i, 'Must not be able to vote without existing state!');
    let a = V({
        channelId: t,
        messageId: n
    });
    try {
        let e = [...i.selectedAnswerIds.values()];
        (0, M.eu)(
            t,
            n,
            (e) => (
                l()(null != e, 'Must not be able to vote without existing state!'),
                {
                    ...e,
                    submitting: !0,
                    editing: !1
                }
            )
        ),
            await H({
                channelId: t,
                messageId: n,
                answerIds: e
            }),
            await D.B({
                channelId: t,
                messageId: n,
                answerIds: e
            }),
            (0, M.eu)(t, n, () => void 0);
    } catch (e) {
        var o, s, u;
        f.Z.show({
            title: w.Z.Messages.GENERIC_ERROR_TITLE,
            body: null !== (u = null !== (s = null === (o = e.getAnyErrorMessage) || void 0 === o ? void 0 : o.call(e)) && void 0 !== s ? s : e.message) && void 0 !== u ? u : w.Z.Messages.GENERIC_ERROR_BODY
        }),
            await H({
                channelId: t,
                messageId: n,
                answerIds: a
            }),
            (0, M.eu)(t, n, (e) => {
                if (null != e)
                    return {
                        ...e,
                        submitting: !1,
                        editing: !1
                    };
            });
    }
}
async function j(e) {
    let { channelId: t, messageId: n } = e,
        r = N.Z.getChannel(t);
    if (null != r) {
        if (T.Z.isLurking(r.guild_id)) {
            k({
                guildId: r.guild_id,
                title: w.Z.Messages.POLL_LURKING_UNVOTE_TITLE,
                body: w.Z.Messages.POLL_LURKING_UNVOTE_SUBTITLE
            });
            return;
        }
        return (
            (0, M.eu)(t, n, (e) => {
                var n;
                return {
                    channelId: t,
                    selectedAnswerIds: new Set(),
                    submitting: !1,
                    editing: !1,
                    showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
                };
            }),
            await Y({
                channelId: t,
                messageId: n
            })
        );
    }
}
function W(e) {
    let { channelId: t, messageId: n } = e;
    (0, M.eu)(t, n, (e) => {
        var r, i;
        let a = null == e || !e.showResults,
            o = C.Z.getMessage(t, n),
            s =
                null != o
                    ? o.reactions.reduce((e, t) => {
                          var n, r;
                          return e + (null !== (r = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== r ? r : 0);
                      }, 0)
                    : 0;
        return (
            I.ZP.trackWithMetadata(U.rMx.POLL_SHOW_RESULTS_CLICKED, {
                channel_id: t,
                message_id: n,
                show_results: a,
                votes_count: s
            }),
            {
                channelId: t,
                selectedAnswerIds: new Set(),
                submitting: null !== (r = null == e ? void 0 : e.submitting) && void 0 !== r && r,
                editing: null !== (i = null == e ? void 0 : e.submitting) && void 0 !== i && i,
                showResults: a
            }
        );
    });
}
async function K(e) {
    let { channelId: t, messageId: n, type: r } = e;
    switch (r) {
        case 'submit':
            await Y({
                channelId: t,
                messageId: n
            });
            break;
        case 'remove':
            await j({
                channelId: t,
                messageId: n
            });
            break;
        case 'cancel':
            Z({
                channelId: t,
                messageId: n,
                isEditing: !1
            });
            break;
        case 'showVotes':
            W({
                channelId: t,
                messageId: n
            });
            break;
        case 'showVoterDetails':
            B({
                channelId: t,
                messageId: n
            });
            break;
        default:
            l()(!1, 'Unknown poll action type: '.concat(r));
    }
}
async function z(e) {
    let { channel: t, question: n, answers: r, allowMultiSelect: i, duration: a, layout: o, onClose: s } = e,
        l = y.Z.getUploads(t.id, O.d.Poll),
        u = r.map((e) => {
            var t, n;
            let r = null == l ? void 0 : l.findIndex((t) => t.id === e.localCreationAnswerId),
                i = { attachment_ids: -1 !== r ? [''.concat(r)] : void 0 };
            o === d.C.DEFAULT && (i.text = null === (n = e.text) || void 0 === n ? void 0 : n.trim());
            let a = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
            return (
                null != a &&
                    (null != a.id
                        ? (i.emoji = {
                              id: a.id,
                              name: ''
                          })
                        : null != a.optionallyDiverseSequence && (i.emoji = { name: a.optionallyDiverseSequence })),
                { poll_media: i }
            );
        }),
        c = {
            question: { text: n.trim() },
            answers: u,
            allow_multiselect: i,
            duration: a,
            layout_type: o
        };
    try {
        if (null != l && l.length > 0) {
            var _;
            let e = null !== (_ = v.default.getToken()) && void 0 !== _ ? _ : '';
            await L.sk({
                channel: t,
                items: l,
                token: e,
                poll: c,
                nonce: (0, S.r)(),
                maxSizeCallback: () => {}
            });
        } else await p.Z.sendPollMessage(t.id, c);
        null == s || s();
    } catch (e) {
        if ('poll' === (e instanceof m.Hx ? e : new m.Hx(e)).getAnyErrorMessage() && null != e.text)
            throw {
                ...e,
                body: JSON.parse(e.text)
            };
        throw e;
    }
}
async function q(e) {
    let { channelId: t, messageId: n } = e;
    (await f.Z.confirm({
        title: w.Z.Messages.POLL_END_EARLY_CONFIRMATION_TITLE,
        body: w.Z.Messages.POLL_END_EARLY_CONFIRMATION_TEXT
    })) &&
        (await D.W({
            channelId: t,
            messageId: n
        }));
}
t.Z = {
    handlePollAnswerTapped: F,
    handlePollSubmitVote: Y,
    handleUpdateVoteEditingState: Z,
    handlePollActionTapped: K,
    createPoll: z,
    endPollEarly: q
};
