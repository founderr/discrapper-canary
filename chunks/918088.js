n.d(t, {
    Tk: function () {
        return v;
    },
    ZP: function () {
        return L;
    },
    ef: function () {
        return O;
    },
    r8: function () {
        return R;
    }
}),
    n(47120),
    n(627341);
var i = n(278074),
    a = n(263568),
    s = n(607070),
    l = n(339085),
    r = n(633302),
    o = n(715903),
    c = n(69882),
    d = n(592125),
    u = n(271383),
    _ = n(375954),
    E = n(594174),
    I = n(768581),
    m = n(176354),
    T = n(358085),
    N = n(798628),
    h = n(79390),
    C = n(839963),
    p = n(897325),
    f = n(57101),
    A = n(562293),
    g = n(981631),
    S = n(689938);
let M = {
    channelId: g.lds,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1
};
function O(e, t) {
    for (let n of e) if (('number' == typeof n.emoji.id ? ''.concat(n.emoji.id) : n.emoji.id) === t) return n;
}
let x = (e) =>
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
function R(e) {
    return null == e.poll || (_.Z.getMessage(e.channel_id, e.id) === e && !0);
}
function v(e, t) {
    var n, i, a, s;
    let { formattedExpirationLabel: l } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: r } = e;
    if (null == r) return;
    let E = e.state === g.yb.SENT,
        I = E ? (null != l ? l : (0, A.H)(r.expiry)) : '',
        m = null == I && E,
        { selectedAnswerIds: T, submitting: h, editing: C, showResults: p } = null !== (a = null != t ? t : (0, N.fU)(e.getChannelId(), e.id)) && void 0 !== a ? a : M,
        f = e.reactions,
        S = !0;
    if (!R(e)) {
        let t = _.Z.getMessage(e.channel_id, e.id);
        (S = !e.isSearchHit && null != t), (f = null !== (s = null == t ? void 0 : t.reactions) && void 0 !== s ? s : f);
    }
    let O = T.size > 0,
        x = f.some((e) => !0 === e.me_vote),
        v = !C && x,
        L = v || m || p,
        Z = E && S && (!x || C || L),
        P = null === (i = d.Z.getChannel(e.getChannelId())) || void 0 === i ? void 0 : null === (n = i.getGuildId) || void 0 === n ? void 0 : n.call(i),
        D = null != P ? u.ZP.getSelfMember(P) : null,
        b = (0, o.EY)(D),
        j = (0, c.b)(D);
    return {
        poll: r,
        canTapAnswers: Z,
        canRemoveVote: v && E && !m,
        canShowVoteCounts: L,
        canSubmitVote: !h && O && !v && E && !b && !j,
        expirationLabel: I,
        hasSelectedAnswer: O,
        hasVoted: v,
        hasVoteRecorded: x,
        isEditingVote: C,
        isExpired: m,
        isInteractive: S,
        isSent: E,
        reactions: f,
        selectedAnswerIds: T,
        submitting: h,
        tapShouldOpenVotersModal: L,
        showResults: p
    };
}
function L(e, t) {
    var n, o;
    let { animateEmoji: c = !1, theme: u = 'dark', formattedExpirationLabel: _ } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: N } = e;
    if (null == N) return;
    let A = E.default.getCurrentUser();
    if (null == A) return;
    let g = s.Z.useReducedMotion,
        M = null === (o = d.Z.getChannel(e.getChannelId())) || void 0 === o ? void 0 : null === (n = o.getGuildId) || void 0 === n ? void 0 : n.call(o),
        R = (0, p.E)(A, M),
        L = N.answers,
        Z = N.layout_type,
        P = v(e, t, { formattedExpirationLabel: _ });
    if (null == P) return;
    let { canTapAnswers: D, canRemoveVote: b, canShowVoteCounts: j, canSubmitVote: U, expirationLabel: y = S.Z.Messages.POLL_EXPIRED, hasSelectedAnswer: B, hasVoted: k, isEditingVote: G, isExpired: F, isInteractive: w, reactions: V, selectedAnswerIds: H, submitting: Y, tapShouldOpenVotersModal: W, showResults: K } = P,
        z = (0, h.cZ)(V),
        X = S.Z.Messages.POLL_VOTES_COUNT.format({ count: z.toLocaleString() }),
        Q = Math.max(
            ...L.map((e) => {
                var t, n;
                let i = O(V, ''.concat(e.answer_id));
                return null !== (n = null == i ? void 0 : null === (t = i.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0;
            })
        ),
        J = L.map((e) => {
            var t, n, s;
            let o = ''.concat(e.answer_id),
                d = O(V, o),
                u = null !== (n = null == d ? void 0 : null === (t = d.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
                _ = 0 === z ? 0 : u / z,
                E = H.has(o),
                T = u >= Q && 0 !== u,
                N = k && null !== (s = null == d ? void 0 : d.me_vote) && void 0 !== s && s,
                h = x({
                    didSelfVote: N,
                    hasVoted: k,
                    isExpired: F,
                    isSelected: E,
                    isLeader: T,
                    showResults: K
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
                            i = null !== (s = null === (a = l.ZP.getCustomEmojiById(e.id)) || void 0 === a ? void 0 : a.animated) && void 0 !== s && s;
                        }
                        let o = t && null != i && i;
                        return {
                            id: null == e.id ? null : ''.concat(e.id),
                            name: e.name,
                            displayName: null == e.id ? r.ZP.convertSurrogateToName(e.name) : e.name,
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
                didSelfVote: N,
                style: h,
                shouldAnimateTransition: Y && !g,
                votesPercentage: Math.round(100 * _),
                votes: (0, i.EQ)(Z)
                    .with(a.C.IMAGE_ONLY_ANSWERS, () => '('.concat(u.toLocaleString(), ')'))
                    .otherwise(() => S.Z.Messages.POLL_VOTES_COUNT.format({ count: u.toLocaleString() }))
            };
        }),
        q = (0, i.EQ)({
            isExpired: F,
            canSubmitVote: U,
            hasVoted: k,
            isEditingVote: G,
            canRemoveVote: b,
            isInteractive: w,
            showResults: K
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: S.Z.Messages.POLL_SUBMIT_VOTE,
                presentation: 'button',
                enabled: B,
                type: 'submit'
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: S.Z.Messages.POLL_REMOVE_VOTE,
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
                    label: S.Z.Messages.POLL_HIDE_VOTES,
                    presentation: 'secondaryButton',
                    enabled: !0,
                    type: 'showVotes'
                })
            )
            .otherwise(() => ({
                label: S.Z.Messages.POLL_SUBMIT_VOTE,
                presentation: 'button',
                enabled: U,
                type: 'submit'
            })),
        $ = (0, T.isIOS)() ? S.Z.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS : S.Z.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID,
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
                    label: S.Z.Messages.POLL_NOT_INTERACTIVE,
                    presentation: 'text',
                    enabled: !1
                })
            )
            .with({ isEditingVote: !0 }, () => ({
                label: S.Z.Messages.CANCEL,
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
            !w || F || k || K
                ? void 0
                : {
                      label: S.Z.Messages.POLL_SHOW_VOTES,
                      presentation: 'textButton',
                      enabled: !0,
                      type: 'showVotes'
                  },
        en = N.allow_multiselect,
        ei = (0, i.EQ)({
            isInteractive: w,
            isExpired: F,
            canSelectMultipleAnswers: en
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => S.Z.Messages.POLL_SELECT_MULTIPLE_ANSWERS)
            .otherwise(() => S.Z.Messages.POLL_SELECT_ONE_ANSWER);
    return {
        question: N.question,
        promptLabel: ei,
        answers: J,
        answersInteraction: (0, i.EQ)({
            tapShouldOpenVotersModal: W,
            canTapAnswers: D,
            canSelectMultipleAnswers: en
        })
            .with({ tapShouldOpenVotersModal: !0 }, () => C.Y7.LIST)
            .with({ canTapAnswers: !1 }, () => C.Y7.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => C.Y7.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => C.Y7.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: W ? $ : void 0,
        layoutType: Z,
        resources: (0, f.Z)({
            theme: u,
            layoutType: Z
        }),
        containerStyle: 'normal',
        primaryAction: q,
        isInteractive: w,
        canTapAnswers: D,
        canSelectMultipleAnswers: en,
        hasSelectedAnswer: B,
        canShowVoteCounts: j,
        hasVoted: k,
        isExpired: F,
        myAvatarUrl: R,
        secondaryAction: ee,
        tertiaryAction: et
    };
}
