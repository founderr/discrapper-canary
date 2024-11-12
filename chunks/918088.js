n.d(t, {
    Tk: function () {
        return Z;
    },
    ZP: function () {
        return R;
    },
    ef: function () {
        return A;
    },
    r8: function () {
        return j;
    }
}),
    n(47120),
    n(627341);
var i = n(278074),
    r = n(263568),
    l = n(607070),
    a = n(339085),
    o = n(633302),
    s = n(715903),
    c = n(69882),
    d = n(592125),
    u = n(271383),
    m = n(375954),
    h = n(594174),
    f = n(768581),
    p = n(176354),
    _ = n(358085),
    g = n(798628),
    E = n(79390),
    C = n(839963),
    I = n(897325),
    x = n(57101),
    v = n(562293),
    N = n(981631),
    T = n(388032);
let S = {
    channelId: N.lds,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1
};
function A(e, t) {
    for (let n of e) if (('number' == typeof n.emoji.id ? ''.concat(n.emoji.id) : n.emoji.id) === t) return n;
}
let b = (e) =>
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
function j(e) {
    return null == e.poll || (m.Z.getMessage(e.channel_id, e.id) === e && !0);
}
function Z(e, t) {
    var n, i, r, l;
    let { formattedExpirationLabel: a } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: o } = e;
    if (null == o) return;
    let h = e.state === N.yb.SENT,
        f = h ? (null != a ? a : (0, v.H)(o.expiry)) : '',
        p = null == f && h,
        { selectedAnswerIds: _, submitting: E, editing: C, showResults: I } = null !== (r = null != t ? t : (0, g.fU)(e.getChannelId(), e.id)) && void 0 !== r ? r : S,
        x = e.reactions,
        T = !0;
    if (!j(e)) {
        let t = m.Z.getMessage(e.channel_id, e.id);
        (T = !e.isSearchHit && null != t), (x = null !== (l = null == t ? void 0 : t.reactions) && void 0 !== l ? l : x);
    }
    let A = _.size > 0,
        b = x.some((e) => !0 === e.me_vote),
        Z = !C && b,
        R = Z || p || I,
        L = h && T && (!b || C || R),
        P = null === (i = d.Z.getChannel(e.getChannelId())) || void 0 === i ? void 0 : null === (n = i.getGuildId) || void 0 === n ? void 0 : n.call(i),
        y = null != P ? u.ZP.getSelfMember(P) : null,
        O = (0, s.EY)(y),
        M = (0, c.b)(y);
    return {
        poll: o,
        canTapAnswers: L,
        canRemoveVote: Z && h && !p,
        canShowVoteCounts: R,
        canSubmitVote: !E && A && !Z && h && !O && !M,
        expirationLabel: f,
        hasSelectedAnswer: A,
        hasVoted: Z,
        hasVoteRecorded: b,
        isEditingVote: C,
        isExpired: p,
        isInteractive: T,
        isSent: h,
        reactions: x,
        selectedAnswerIds: _,
        submitting: E,
        tapShouldOpenVotersModal: R,
        showResults: I
    };
}
function R(e, t) {
    var n, s;
    let { animateEmoji: c = !1, theme: u = 'dark', formattedExpirationLabel: m } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: g } = e;
    if (null == g) return;
    let v = h.default.getCurrentUser();
    if (null == v) return;
    let N = l.Z.useReducedMotion,
        S = null === (s = d.Z.getChannel(e.getChannelId())) || void 0 === s ? void 0 : null === (n = s.getGuildId) || void 0 === n ? void 0 : n.call(s),
        j = (0, I.E)(v, S),
        R = g.answers,
        L = g.layout_type,
        P = Z(e, t, { formattedExpirationLabel: m });
    if (null == P) return;
    let { canTapAnswers: y, canRemoveVote: O, canShowVoteCounts: M, canSubmitVote: k, expirationLabel: D = T.intl.string(T.t['e+J3JS']), hasSelectedAnswer: B, hasVoted: U, isEditingVote: w, isExpired: F, isInteractive: G, reactions: V, selectedAnswerIds: H, submitting: z, tapShouldOpenVotersModal: W, showResults: K } = P,
        Y = (0, E.cZ)(V),
        X = T.intl.formatToPlainString(T.t.XRkuoa, { count: Y.toLocaleString() }),
        Q = Math.max(
            ...R.map((e) => {
                var t, n;
                let i = A(V, ''.concat(e.answer_id));
                return null !== (n = null == i ? void 0 : null === (t = i.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0;
            })
        ),
        q = R.map((e) => {
            var t, n, l;
            let s = ''.concat(e.answer_id),
                d = A(V, s),
                u = null !== (n = null == d ? void 0 : null === (t = d.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
                m = 0 === Y ? 0 : u / Y,
                h = H.has(s),
                _ = u >= Q && 0 !== u,
                g = U && null !== (l = null == d ? void 0 : d.me_vote) && void 0 !== l && l,
                E = b({
                    didSelfVote: g,
                    hasVoted: U,
                    isExpired: F,
                    isSelected: h,
                    isLeader: _,
                    showResults: K
                });
            return {
                answerId: s,
                pollMedia: {
                    text: e.poll_media.text,
                    emoji: (function (e) {
                        let { animateEmoji: t = !1, size: n = 48 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (null == e) return;
                        let i = e.animated;
                        if (null == i && null != e.id) {
                            var r, l;
                            i = null !== (l = null === (r = a.ZP.getCustomEmojiById(e.id)) || void 0 === r ? void 0 : r.animated) && void 0 !== l && l;
                        }
                        let s = t && null != i && i;
                        return {
                            id: null == e.id ? null : ''.concat(e.id),
                            name: e.name,
                            displayName: null == e.id ? o.ZP.convertSurrogateToName(e.name) : e.name,
                            src:
                                null == e.id
                                    ? p.ZP.getURL(e.name)
                                    : f.ZP.getEmojiURL({
                                          id: e.id,
                                          animated: s,
                                          size: n
                                      }),
                            animated: s
                        };
                    })(e.poll_media.emoji, { animateEmoji: c }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids
                },
                isSelected: h,
                isVictor: F && _,
                didSelfVote: g,
                style: E,
                shouldAnimateTransition: z && !N,
                votesPercentage: Math.round(100 * m),
                votes: (0, i.EQ)(L)
                    .with(r.C.IMAGE_ONLY_ANSWERS, () => '('.concat(u.toLocaleString(), ')'))
                    .otherwise(() => T.intl.formatToPlainString(T.t.XRkuoa, { count: u.toLocaleString() }))
            };
        }),
        J = (0, i.EQ)({
            isExpired: F,
            canSubmitVote: k,
            hasVoted: U,
            isEditingVote: w,
            canRemoveVote: O,
            isInteractive: G,
            showResults: K
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: T.intl.string(T.t.JwkNU1),
                presentation: 'button',
                enabled: B,
                type: 'submit'
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: T.intl.string(T.t.XhQEh4),
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
                    label: T.intl.string(T.t.gNj6Ii),
                    presentation: 'secondaryButton',
                    enabled: !0,
                    type: 'showVotes'
                })
            )
            .otherwise(() => ({
                label: T.intl.string(T.t.JwkNU1),
                presentation: 'button',
                enabled: k,
                type: 'submit'
            })),
        $ = (0, _.isIOS)() ? T.intl.string(T.t.PVATMz) : T.intl.string(T.t.cHfFqq),
        ee = (0, i.EQ)({
            isExpired: F,
            isInteractive: G,
            isEditingVote: w
        })
            .with(
                {
                    isInteractive: !1,
                    isExpired: !1
                },
                () => ({
                    label: T.intl.string(T.t.trrip6),
                    presentation: 'text',
                    enabled: !1
                })
            )
            .with({ isEditingVote: !0 }, () => ({
                label: T.intl.string(T.t['ETE/oK']),
                presentation: 'textButton',
                enabled: !0,
                type: 'cancel'
            }))
            .otherwise(() => ({
                label: X,
                secondaryLabel: D,
                accessibilityHint: $,
                presentation: 'text',
                enabled: !0,
                type: 'showVoterDetails'
            })),
        et =
            !G || F || U || K
                ? void 0
                : {
                      label: T.intl.string(T.t['/KHAUF']),
                      presentation: 'textButton',
                      enabled: !0,
                      type: 'showVotes'
                  },
        en = g.allow_multiselect,
        ei = (0, i.EQ)({
            isInteractive: G,
            isExpired: F,
            canSelectMultipleAnswers: en
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => T.intl.string(T.t.yCXvxc))
            .otherwise(() => T.intl.string(T.t['9Y2wKC']));
    return {
        question: g.question,
        promptLabel: ei,
        answers: q,
        answersInteraction: (0, i.EQ)({
            tapShouldOpenVotersModal: W,
            canTapAnswers: y,
            canSelectMultipleAnswers: en
        })
            .with({ tapShouldOpenVotersModal: !0 }, () => C.Y7.LIST)
            .with({ canTapAnswers: !1 }, () => C.Y7.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => C.Y7.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => C.Y7.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: W ? $ : void 0,
        layoutType: L,
        resources: (0, x.Z)({
            theme: u,
            layoutType: L
        }),
        containerStyle: 'normal',
        primaryAction: J,
        isInteractive: G,
        canTapAnswers: y,
        canSelectMultipleAnswers: en,
        hasSelectedAnswer: B,
        canShowVoteCounts: M,
        hasVoted: U,
        isExpired: F,
        myAvatarUrl: j,
        secondaryAction: ee,
        tertiaryAction: et
    };
}
