n.d(t, {
    Tk: function () {
        return M;
    },
    ZP: function () {
        return P;
    },
    ef: function () {
        return y;
    },
    r8: function () {
        return D;
    }
});
var r = n(47120);
var i = n(627341);
var a = n(278074),
    o = n(263568),
    s = n(607070),
    l = n(339085),
    u = n(633302),
    c = n(715903),
    d = n(69882),
    _ = n(592125),
    E = n(271383),
    f = n(375954),
    h = n(594174),
    p = n(768581),
    m = n(176354),
    I = n(358085),
    T = n(798628),
    g = n(79390),
    S = n(839963),
    A = n(897325),
    v = n(57101),
    N = n(562293),
    O = n(981631),
    R = n(689938);
let C = {
    channelId: O.lds,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1
};
function y(e, t) {
    for (let n of e) if (('number' == typeof n.emoji.id ? ''.concat(n.emoji.id) : n.emoji.id) === t) return n;
}
let b = (e) =>
    (0, a.EQ)(e)
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
function L(e) {
    let { animateEmoji: t = !1, size: n = 48 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (null == e) return;
    let r = e.animated;
    if (null == r && null != e.id) {
        var i, a;
        r = null !== (a = null === (i = l.ZP.getCustomEmojiById(e.id)) || void 0 === i ? void 0 : i.animated) && void 0 !== a && a;
    }
    let o = t && null != r && r;
    return {
        id: null == e.id ? null : ''.concat(e.id),
        name: e.name,
        displayName: null == e.id ? u.ZP.convertSurrogateToName(e.name) : e.name,
        src:
            null == e.id
                ? m.ZP.getURL(e.name)
                : p.ZP.getEmojiURL({
                      id: e.id,
                      animated: o,
                      size: n
                  }),
        animated: o
    };
}
function D(e) {
    return null == e.poll || (f.Z.getMessage(e.channel_id, e.id) === e && !0);
}
function M(e, t) {
    var n, r, i, a;
    let { formattedExpirationLabel: o } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: s } = e;
    if (null == s) return;
    let l = e.state === O.yb.SENT,
        u = l ? (null != o ? o : (0, N.H)(s.expiry)) : '',
        h = null == u && l,
        { selectedAnswerIds: p, submitting: m, editing: I, showResults: g } = null !== (i = null != t ? t : (0, T.fU)(e.getChannelId(), e.id)) && void 0 !== i ? i : C,
        S = e.reactions,
        A = !0;
    if (!D(e)) {
        let t = f.Z.getMessage(e.channel_id, e.id);
        (A = !e.isSearchHit && null != t), (S = null !== (a = null == t ? void 0 : t.reactions) && void 0 !== a ? a : S);
    }
    let v = p.size > 0,
        R = S.some((e) => !0 === e.me_vote),
        y = !I && R,
        b = y || h || g,
        L = l && A && (!R || I || b),
        M = null === (r = _.Z.getChannel(e.getChannelId())) || void 0 === r ? void 0 : null === (n = r.getGuildId) || void 0 === n ? void 0 : n.call(r),
        P = null != M ? E.ZP.getSelfMember(M) : null,
        U = (0, c.EY)(P),
        w = (0, d.b)(P),
        x = !m && v && !y && l && !U && !w;
    return {
        poll: s,
        canTapAnswers: L,
        canRemoveVote: y && l && !h,
        canShowVoteCounts: b,
        canSubmitVote: x,
        expirationLabel: u,
        hasSelectedAnswer: v,
        hasVoted: y,
        hasVoteRecorded: R,
        isEditingVote: I,
        isExpired: h,
        isInteractive: A,
        isSent: l,
        reactions: S,
        selectedAnswerIds: p,
        submitting: m,
        tapShouldOpenVotersModal: b,
        showResults: g
    };
}
function P(e, t) {
    var n, r;
    let { animateEmoji: i = !1, theme: l = 'dark', formattedExpirationLabel: u } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: c } = e;
    if (null == c) return;
    let d = h.default.getCurrentUser();
    if (null == d) return;
    let E = s.Z.useReducedMotion,
        f = null === (r = _.Z.getChannel(e.getChannelId())) || void 0 === r ? void 0 : null === (n = r.getGuildId) || void 0 === n ? void 0 : n.call(r),
        p = (0, A.E)(d, f),
        m = c.answers,
        T = c.layout_type,
        N = M(e, t, { formattedExpirationLabel: u });
    if (null == N) return;
    let { canTapAnswers: O, canRemoveVote: C, canShowVoteCounts: D, canSubmitVote: P, expirationLabel: U = R.Z.Messages.POLL_EXPIRED, hasSelectedAnswer: w, hasVoted: x, isEditingVote: G, isExpired: k, isInteractive: B, reactions: F, selectedAnswerIds: Z, submitting: V, tapShouldOpenVotersModal: H, showResults: Y } = N,
        j = (0, g.cZ)(F),
        W = R.Z.Messages.POLL_VOTES_COUNT.format({ count: j.toLocaleString() }),
        K = Math.max(
            ...m.map((e) => {
                var t, n;
                let r = y(F, ''.concat(e.answer_id));
                return null !== (n = null == r ? void 0 : null === (t = r.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0;
            })
        ),
        z = m.map((e) => {
            var t, n, r;
            let s = ''.concat(e.answer_id),
                l = y(F, s),
                u = null !== (n = null == l ? void 0 : null === (t = l.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
                c = 0 === j ? 0 : u / j,
                d = Z.has(s),
                _ = u >= K && 0 !== u,
                f = x && null !== (r = null == l ? void 0 : l.me_vote) && void 0 !== r && r,
                h = b({
                    didSelfVote: f,
                    hasVoted: x,
                    isExpired: k,
                    isSelected: d,
                    isLeader: _,
                    showResults: Y
                });
            return {
                answerId: s,
                pollMedia: {
                    text: e.poll_media.text,
                    emoji: L(e.poll_media.emoji, { animateEmoji: i }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids
                },
                isSelected: d,
                isVictor: k && _,
                didSelfVote: f,
                style: h,
                shouldAnimateTransition: V && !E,
                votesPercentage: Math.round(100 * c),
                votes: (0, a.EQ)(T)
                    .with(o.C.IMAGE_ONLY_ANSWERS, () => '('.concat(u.toLocaleString(), ')'))
                    .otherwise(() => R.Z.Messages.POLL_VOTES_COUNT.format({ count: u.toLocaleString() }))
            };
        }),
        q = (0, a.EQ)({
            isExpired: k,
            canSubmitVote: P,
            hasVoted: x,
            isEditingVote: G,
            canRemoveVote: C,
            isInteractive: B,
            showResults: Y
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: R.Z.Messages.POLL_SUBMIT_VOTE,
                presentation: 'button',
                enabled: w,
                type: 'submit'
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: R.Z.Messages.POLL_REMOVE_VOTE,
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
                    label: R.Z.Messages.POLL_HIDE_VOTES,
                    presentation: 'secondaryButton',
                    enabled: !0,
                    type: 'showVotes'
                })
            )
            .otherwise(() => ({
                label: R.Z.Messages.POLL_SUBMIT_VOTE,
                presentation: 'button',
                enabled: P,
                type: 'submit'
            })),
        Q = (0, I.isIOS)() ? R.Z.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS : R.Z.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID,
        X = (0, a.EQ)({
            isExpired: k,
            isInteractive: B,
            isEditingVote: G
        })
            .with(
                {
                    isInteractive: !1,
                    isExpired: !1
                },
                () => ({
                    label: R.Z.Messages.POLL_NOT_INTERACTIVE,
                    presentation: 'text',
                    enabled: !1
                })
            )
            .with({ isEditingVote: !0 }, () => ({
                label: R.Z.Messages.CANCEL,
                presentation: 'textButton',
                enabled: !0,
                type: 'cancel'
            }))
            .otherwise(() => ({
                label: W,
                secondaryLabel: U,
                accessibilityHint: Q,
                presentation: 'text',
                enabled: !0,
                type: 'showVoterDetails'
            })),
        $ =
            !B || k || x || Y
                ? void 0
                : {
                      label: R.Z.Messages.POLL_SHOW_VOTES,
                      presentation: 'textButton',
                      enabled: !0,
                      type: 'showVotes'
                  },
        J = c.allow_multiselect,
        ee = (0, a.EQ)({
            isInteractive: B,
            isExpired: k,
            canSelectMultipleAnswers: J
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => R.Z.Messages.POLL_SELECT_MULTIPLE_ANSWERS)
            .otherwise(() => R.Z.Messages.POLL_SELECT_ONE_ANSWER);
    return {
        question: c.question,
        promptLabel: ee,
        answers: z,
        answersInteraction: (0, a.EQ)({
            tapShouldOpenVotersModal: H,
            canTapAnswers: O,
            canSelectMultipleAnswers: J
        })
            .with({ tapShouldOpenVotersModal: !0 }, () => S.Y7.LIST)
            .with({ canTapAnswers: !1 }, () => S.Y7.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => S.Y7.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => S.Y7.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: H ? Q : void 0,
        layoutType: T,
        resources: (0, v.Z)({
            theme: l,
            layoutType: T
        }),
        containerStyle: 'normal',
        primaryAction: q,
        isInteractive: B,
        canTapAnswers: O,
        canSelectMultipleAnswers: J,
        hasSelectedAnswer: w,
        canShowVoteCounts: D,
        hasVoted: x,
        isExpired: k,
        myAvatarUrl: p,
        secondaryAction: X,
        tertiaryAction: $
    };
}
