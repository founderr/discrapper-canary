n.d(t, {
    Tk: function () {
        return M;
    },
    ZP: function () {
        return L;
    },
    ef: function () {
        return R;
    },
    r8: function () {
        return v;
    }
}),
    n(47120),
    n(627341);
var i = n(278074),
    a = n(263568),
    s = n(607070),
    r = n(339085),
    l = n(633302),
    o = n(715903),
    c = n(69882),
    u = n(592125),
    d = n(271383),
    _ = n(375954),
    E = n(594174),
    I = n(768581),
    m = n(176354),
    T = n(358085),
    f = n(798628),
    h = n(79390),
    N = n(839963),
    p = n(897325),
    C = n(57101),
    g = n(562293),
    S = n(981631),
    A = n(689938);
let x = {
    channelId: S.lds,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1
};
function R(e, t) {
    for (let n of e) if (('number' == typeof n.emoji.id ? ''.concat(n.emoji.id) : n.emoji.id) === t) return n;
}
let O = (e) =>
    (0, i.EQ)(e)
        .with(
            {
                isExpired: !0,
                isLeader: !0,
                didSelfVote: !0
            },
            () => 'victorSelected'
        )
        .with(
            {
                isExpired: !0,
                isLeader: !0,
                didSelfVote: !1
            },
            () => 'victorNotSelected'
        )
        .with(
            {
                isExpired: !0,
                didSelfVote: !0
            },
            () => 'loserSelected'
        )
        .with({ isExpired: !0 }, () => 'notVoted')
        .with(
            {
                didSelfVote: !0,
                isExpired: !1
            },
            () => 'voted'
        )
        .with(
            {
                hasVoted: !0,
                isExpired: !1
            },
            () => 'notVoted'
        )
        .with({ isSelected: !0 }, () => 'selected')
        .with(
            {
                isExpired: !1,
                showResults: !0
            },
            () => 'notVoted'
        )
        .otherwise(() => 'normalVote');
function v(e) {
    return null == e.poll || (_.Z.getMessage(e.channel_id, e.id) === e && !0);
}
function M(e, t) {
    var n, i, a, s;
    let { formattedExpirationLabel: r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: l } = e;
    if (null == l) return;
    let E = e.state === S.yb.SENT,
        I = E ? (null != r ? r : (0, g.H)(l.expiry)) : '',
        m = null == I && E,
        { selectedAnswerIds: T, submitting: h, editing: N, showResults: p } = null !== (a = null != t ? t : (0, f.fU)(e.getChannelId(), e.id)) && void 0 !== a ? a : x,
        C = e.reactions,
        A = !0;
    if (!v(e)) {
        let t = _.Z.getMessage(e.channel_id, e.id);
        (A = !e.isSearchHit && null != t), (C = null !== (s = null == t ? void 0 : t.reactions) && void 0 !== s ? s : C);
    }
    let R = T.size > 0,
        O = C.some((e) => !0 === e.me_vote),
        M = !N && O,
        L = M || m || p,
        Z = E && A && (!O || N || L),
        P = null === (i = u.Z.getChannel(e.getChannelId())) || void 0 === i ? void 0 : null === (n = i.getGuildId) || void 0 === n ? void 0 : n.call(i),
        b = null != P ? d.ZP.getSelfMember(P) : null,
        D = (0, o.EY)(b),
        j = (0, c.b)(b);
    return {
        poll: l,
        canTapAnswers: Z,
        canRemoveVote: M && E && !m,
        canShowVoteCounts: L,
        canSubmitVote: !h && R && !M && E && !D && !j,
        expirationLabel: I,
        hasSelectedAnswer: R,
        hasVoted: M,
        hasVoteRecorded: O,
        isEditingVote: N,
        isExpired: m,
        isInteractive: A,
        isSent: E,
        reactions: C,
        selectedAnswerIds: T,
        submitting: h,
        tapShouldOpenVotersModal: L,
        showResults: p
    };
}
function L(e, t) {
    var n, o;
    let { animateEmoji: c = !1, theme: d = 'dark', formattedExpirationLabel: _ } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: f } = e;
    if (null == f) return;
    let g = E.default.getCurrentUser();
    if (null == g) return;
    let S = s.Z.useReducedMotion,
        x = null === (o = u.Z.getChannel(e.getChannelId())) || void 0 === o ? void 0 : null === (n = o.getGuildId) || void 0 === n ? void 0 : n.call(o),
        v = (0, p.E)(g, x),
        L = f.answers,
        Z = f.layout_type,
        P = M(e, t, { formattedExpirationLabel: _ });
    if (null == P) return;
    let { canTapAnswers: b, canRemoveVote: D, canShowVoteCounts: j, canSubmitVote: U, expirationLabel: y = A.Z.Messages.POLL_EXPIRED, hasSelectedAnswer: B, hasVoted: k, isEditingVote: G, isExpired: F, isInteractive: w, reactions: V, selectedAnswerIds: H, submitting: Y, tapShouldOpenVotersModal: W, showResults: z } = P,
        K = (0, h.cZ)(V),
        X = A.Z.Messages.POLL_VOTES_COUNT.format({ count: K.toLocaleString() }),
        Q = Math.max(
            ...L.map((e) => {
                var t, n;
                let i = R(V, ''.concat(e.answer_id));
                return null !== (n = null == i ? void 0 : null === (t = i.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0;
            })
        ),
        J = L.map((e) => {
            var t, n, s;
            let o = ''.concat(e.answer_id),
                u = R(V, o),
                d = null !== (n = null == u ? void 0 : null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
                _ = 0 === K ? 0 : d / K,
                E = H.has(o),
                T = d >= Q && 0 !== d,
                f = k && null !== (s = null == u ? void 0 : u.me_vote) && void 0 !== s && s,
                h = O({
                    didSelfVote: f,
                    hasVoted: k,
                    isExpired: F,
                    isSelected: E,
                    isLeader: T,
                    showResults: z
                });
            return {
                answerId: o,
                pollMedia: {
                    text: e.poll_media.text,
                    emoji: (function (e) {
                        let { animateEmoji: t = !1, size: n = 48 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (null == e) return;
                        let i = e.animated;
                        if (null == i && null != e.id) {
                            var a, s;
                            i = null !== (s = null === (a = r.ZP.getCustomEmojiById(e.id)) || void 0 === a ? void 0 : a.animated) && void 0 !== s && s;
                        }
                        let o = t && null != i && i;
                        return {
                            id: null == e.id ? null : ''.concat(e.id),
                            name: e.name,
                            displayName: null == e.id ? l.ZP.convertSurrogateToName(e.name) : e.name,
                            src:
                                null == e.id
                                    ? m.ZP.getURL(e.name)
                                    : I.ZP.getEmojiURL({
                                          id: e.id,
                                          animated: o,
                                          size: n
                                      }),
                            animated: o
                        };
                    })(e.poll_media.emoji, { animateEmoji: c }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids
                },
                isSelected: E,
                isVictor: F && T,
                didSelfVote: f,
                style: h,
                shouldAnimateTransition: Y && !S,
                votesPercentage: Math.round(100 * _),
                votes: (0, i.EQ)(Z)
                    .with(a.C.IMAGE_ONLY_ANSWERS, () => '('.concat(d.toLocaleString(), ')'))
                    .otherwise(() => A.Z.Messages.POLL_VOTES_COUNT.format({ count: d.toLocaleString() }))
            };
        }),
        q = (0, i.EQ)({
            isExpired: F,
            canSubmitVote: U,
            hasVoted: k,
            isEditingVote: G,
            canRemoveVote: D,
            isInteractive: w,
            showResults: z
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: A.Z.Messages.POLL_SUBMIT_VOTE,
                presentation: 'button',
                enabled: B,
                type: 'submit'
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: A.Z.Messages.POLL_REMOVE_VOTE,
                presentation: 'secondaryButton',
                enabled: !0,
                type: 'remove'
            }))
            .with(
                {
                    hasVoted: !1,
                    showResults: !0
                },
                () => ({
                    label: A.Z.Messages.POLL_HIDE_VOTES,
                    presentation: 'secondaryButton',
                    enabled: !0,
                    type: 'showVotes'
                })
            )
            .otherwise(() => ({
                label: A.Z.Messages.POLL_SUBMIT_VOTE,
                presentation: 'button',
                enabled: U,
                type: 'submit'
            })),
        $ = (0, T.isIOS)() ? A.Z.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS : A.Z.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID,
        ee = (0, i.EQ)({
            isExpired: F,
            isInteractive: w,
            isEditingVote: G
        })
            .with(
                {
                    isInteractive: !1,
                    isExpired: !1
                },
                () => ({
                    label: A.Z.Messages.POLL_NOT_INTERACTIVE,
                    presentation: 'text',
                    enabled: !1
                })
            )
            .with({ isEditingVote: !0 }, () => ({
                label: A.Z.Messages.CANCEL,
                presentation: 'textButton',
                enabled: !0,
                type: 'cancel'
            }))
            .otherwise(() => ({
                label: X,
                secondaryLabel: y,
                accessibilityHint: $,
                presentation: 'text',
                enabled: !0,
                type: 'showVoterDetails'
            })),
        et =
            !w || F || k || z
                ? void 0
                : {
                      label: A.Z.Messages.POLL_SHOW_VOTES,
                      presentation: 'textButton',
                      enabled: !0,
                      type: 'showVotes'
                  },
        en = f.allow_multiselect,
        ei = (0, i.EQ)({
            isInteractive: w,
            isExpired: F,
            canSelectMultipleAnswers: en
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => A.Z.Messages.POLL_SELECT_MULTIPLE_ANSWERS)
            .otherwise(() => A.Z.Messages.POLL_SELECT_ONE_ANSWER);
    return {
        question: f.question,
        promptLabel: ei,
        answers: J,
        answersInteraction: (0, i.EQ)({
            tapShouldOpenVotersModal: W,
            canTapAnswers: b,
            canSelectMultipleAnswers: en
        })
            .with({ tapShouldOpenVotersModal: !0 }, () => N.Y7.LIST)
            .with({ canTapAnswers: !1 }, () => N.Y7.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => N.Y7.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => N.Y7.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: W ? $ : void 0,
        layoutType: Z,
        resources: (0, C.Z)({
            theme: d,
            layoutType: Z
        }),
        containerStyle: 'normal',
        primaryAction: q,
        isInteractive: w,
        canTapAnswers: b,
        canSelectMultipleAnswers: en,
        hasSelectedAnswer: B,
        canShowVoteCounts: j,
        hasVoted: k,
        isExpired: F,
        myAvatarUrl: v,
        secondaryAction: ee,
        tertiaryAction: et
    };
}
