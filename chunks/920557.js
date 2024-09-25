n.d(t, {
    K: function () {
        return x;
    }
}),
    n(47120),
    n(627341);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    l = n(297821),
    o = n(526629),
    c = n(278074),
    u = n(748780),
    d = n(481060),
    _ = n(313201),
    E = n(542578),
    I = n(203143),
    m = n(79390),
    T = n(839963),
    h = n(139256),
    N = n(294608),
    f = n(689938),
    C = n(490351);
function p(e) {
    let { percentage: t, label: n, canShowVoterDetails: a, answerId: r } = e,
        o = (0, _.Dt)(),
        { channelId: c, messageId: u } = (0, N.pE)(),
        [T, h] = s.useState(''),
        [f, p] = s.useState(!1),
        g = '' !== T && f,
        A = s.useCallback(() => {
            h((0, m.e1)(u, c, r));
        }, [u, c, r]),
        S = s.useCallback(() => {
            A(), p(!0);
        }, [A]),
        x = s.useCallback(() => {
            p(!1);
        }, []),
        R = s.useCallback(() => {
            (0, I.n)({
                channelId: c,
                messageId: u,
                answerId: r
            });
        }, [c, u, r]);
    s.useEffect(() => {
        if (!!f)
            return (
                E.Z.addReactChangeListener(A),
                () => {
                    E.Z.removeReactChangeListener(A);
                }
            );
    }, [f, A]);
    let O = (0, i.jsx)(d.Text, {
        variant: 'text-xs/semibold',
        color: 'none',
        className: C.voteCount,
        scaleFontToUserSetting: !0,
        children: n
    });
    return (0, i.jsxs)('div', {
        className: C.votesData,
        children: [
            a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d.Tooltip, {
                              text: (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-muted',
                                  scaleFontToUserSetting: !0,
                                  children: T
                              }),
                              forceOpen: g,
                              'aria-label': !1,
                              children: (e) =>
                                  (0, i.jsx)(d.Button, {
                                      ...e,
                                      onMouseEnter: S,
                                      onMouseLeave: x,
                                      onFocus: S,
                                      onBlur: x,
                                      onClick: R,
                                      className: C.voteCountButton,
                                      'aria-describedby': g ? o : void 0,
                                      look: d.Button.Looks.BLANK,
                                      size: d.Button.Sizes.NONE,
                                      children: O
                                  })
                          }),
                          g &&
                              (0, i.jsx)(l.T, {
                                  id: o,
                                  children: T
                              })
                      ]
                  })
                : (0, i.jsx)(i.Fragment, { children: O }),
            (0, i.jsxs)(d.Text, {
                variant: 'text-md/bold',
                color: 'none',
                scaleFontToUserSetting: !0,
                children: [t, '%']
            })
        ]
    });
}
function g(e) {
    let { percentage: t, shouldAnimate: n } = e,
        s = (0, d.useSpring)(
            {
                from: { width: n ? '0%' : ''.concat(t, '%') },
                to: { width: ''.concat(t, '%') },
                config: {
                    duration: 1200,
                    easing: u.Z.Easing.inOut(u.Z.Easing.ease)
                }
            },
            'animate-always'
        );
    return (0, i.jsx)(o.animated.span, {
        className: C.votePercentageBar,
        style: s,
        'aria-hidden': !0
    });
}
function A(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: s, isVictor: a, isExpired: r, className: l } = e;
    return (0, c.EQ)({
        answersInteraction: t,
        didSelfVote: s
    })
        .with({ answersInteraction: T.Y7.RADIO_BUTTONS }, () =>
            (0, i.jsx)(h.Og, {
                isSelected: n,
                size: 24,
                className: l
            })
        )
        .with({ answersInteraction: T.Y7.CHECKBOXES }, () =>
            (0, i.jsx)(h.zs, {
                isSelected: n,
                size: 20,
                className: l
            })
        )
        .with(
            {
                answersInteraction: T.Y7.LIST,
                didSelfVote: !0
            },
            () =>
                (0, i.jsx)(h.ZY, {
                    isVictor: a,
                    isExpired: r,
                    size: 24,
                    className: l
                })
        )
        .otherwise(() => null);
}
function S(e) {
    let { answer: t, isExpired: n, answersInteraction: s, canShowVoteCounts: a, canShowVoterDetails: o } = e,
        c = !0 === t.isSelected,
        u = !0 === t.didSelfVote,
        _ = !0 === t.isVictor,
        E = t.shouldAnimateTransition;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: r()(C.answerInner, {
                [C.currentlyVoting]: s !== T.Y7.LIST,
                [C.selected]: c
            }),
            children: [
                a
                    ? (0, i.jsx)(g, {
                          percentage: t.votesPercentage,
                          shouldAnimate: E
                      })
                    : null,
                null != t.pollMedia.emoji &&
                    (0, i.jsx)(h.sc, {
                        className: C.emoji,
                        emoji: t.pollMedia.emoji
                    }),
                (0, i.jsx)(d.Text, {
                    className: C.label,
                    variant: 'text-sm/semibold',
                    color: 'none',
                    scaleFontToUserSetting: !0,
                    children: t.pollMedia.text
                }),
                t.didSelfVote && (0, i.jsx)(l.T, { children: f.Z.Messages.POLL_ANSWER_VOTED_ARIA }),
                a &&
                    (0, i.jsx)(p, {
                        percentage: t.votesPercentage,
                        label: t.votes,
                        canShowVoterDetails: o,
                        answerId: t.answerId
                    }),
                (0, i.jsx)(A, {
                    answersInteraction: s,
                    isSelected: c,
                    didSelfVote: u,
                    isVictor: _,
                    isExpired: n,
                    className: C.answerSelectionIcon
                })
            ]
        })
    });
}
function x(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: s, canTapAnswers: a, ...r } = e;
    return (0, i.jsx)(h.$e, {
        className: C.answersContainer,
        answerClassName: C.answer,
        answersInteraction: n,
        canTapAnswers: a,
        renderAnswerContent: (e) =>
            (0, i.jsx)(S, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: s,
                canShowVoterDetails: a
            }),
        ...r
    });
}
