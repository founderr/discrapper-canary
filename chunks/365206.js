n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(297821),
    s = n(481060),
    l = n(839963),
    u = n(139256),
    c = n(689938),
    d = n(829932);
let _ = 40,
    E = 18;
function f(e) {
    let { didSelfVote: t, label: n, percentage: i } = e;
    return (0, r.jsxs)('div', {
        className: d.votesData,
        children: [
            t && (0, r.jsx)(o.T, { children: c.Z.Messages.POLL_ANSWER_VOTED_ARIA }),
            (0, r.jsxs)(s.Text, {
                variant: 'text-md/semibold',
                color: 'none',
                children: [i, '%']
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/semibold',
                color: 'none',
                children: n
            })
        ]
    });
}
function h(e) {
    let { answer: t, isExpired: n, myAvatarUrl: i, canShowVoteCounts: o } = e,
        s = !0 === t.isSelected,
        l = !0 === t.didSelfVote,
        c = !0 === t.isVictor;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.$w, {
                attachmentClassName: a()(d.attachment, { [d.attachmentWithResults]: o }),
                emojiClassName: d.emoji,
                media: t.pollMedia,
                fallback: (0, r.jsx)('div', { className: a()(d.attachment, d.mediaMissing) })
            }),
            s &&
                (0, r.jsx)(u.ZY, {
                    size: _,
                    isVictor: c,
                    isExpired: n,
                    className: d.selectedIcon
                }),
            o &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f, {
                            didSelfVote: l,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: l ? i : void 0
                        }),
                        ((!n && l) || c) &&
                            (0, r.jsx)(u.ZY, {
                                size: E,
                                isVictor: c,
                                isExpired: n,
                                className: d.pollAnswerIcon
                            })
                    ]
                })
        ]
    });
}
function p(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: o, ...s } = e;
    return (0, r.jsx)(u.$e, {
        className: d.answersContainer,
        answerClassName: a()(d.answer, { [d.currentlyVoting]: i !== l.Y7.LIST }),
        myAvatarUrl: n,
        answersInteraction: i,
        renderAnswerContent: (e) =>
            (0, r.jsx)(h, {
                answer: e,
                isExpired: t,
                myAvatarUrl: n,
                answersInteraction: i,
                canShowVoteCounts: o
            }),
        ...s
    });
}
