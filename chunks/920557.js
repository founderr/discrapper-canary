n.d(t, {
    K: function () {
        return M;
    }
}),
    n(47120),
    n(627341);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(297821),
    o = n(212433),
    c = n(278074),
    d = n(748780),
    u = n(481060),
    _ = n(313201),
    E = n(542578),
    I = n(203143),
    m = n(79390),
    T = n(839963),
    N = n(139256),
    h = n(294608),
    C = n(689938),
    p = n(490351);
function f(e) {
    let { percentage: t, label: n, canShowVoterDetails: s, answerId: l } = e,
        o = (0, _.Dt)(),
        { channelId: c, messageId: d } = (0, h.pE)(),
        [T, N] = a.useState(''),
        [C, f] = a.useState(!1),
        g = '' !== T && C,
        A = a.useCallback(() => {
            N((0, m.e1)(d, c, l));
        }, [d, c, l]),
        S = a.useCallback(() => {
            A(), f(!0);
        }, [A]),
        M = a.useCallback(() => {
            f(!1);
        }, []),
        O = a.useCallback(() => {
            (0, I.n)({
                channelId: c,
                messageId: d,
                answerId: l
            });
        }, [c, d, l]);
    a.useEffect(() => {
        if (!!C)
            return (
                E.Z.addReactChangeListener(A),
                () => {
                    E.Z.removeReactChangeListener(A);
                }
            );
    }, [C, A]);
    let x = (0, i.jsx)(u.Text, {
        variant: 'text-xs/semibold',
        color: 'none',
        className: p.voteCount,
        scaleFontToUserSetting: !0,
        children: n
    });
    return (0, i.jsxs)('div', {
        className: p.votesData,
        children: [
            s
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.Tooltip, {
                              text: (0, i.jsx)(u.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-muted',
                                  scaleFontToUserSetting: !0,
                                  children: T
                              }),
                              forceOpen: g,
                              'aria-label': !1,
                              children: (e) =>
                                  (0, i.jsx)(u.Button, {
                                      ...e,
                                      onMouseEnter: S,
                                      onMouseLeave: M,
                                      onFocus: S,
                                      onBlur: M,
                                      onClick: O,
                                      className: p.voteCountButton,
                                      'aria-describedby': g ? o : void 0,
                                      look: u.Button.Looks.BLANK,
                                      size: u.Button.Sizes.NONE,
                                      children: x
                                  })
                          }),
                          g &&
                              (0, i.jsx)(r.T, {
                                  id: o,
                                  children: T
                              })
                      ]
                  })
                : (0, i.jsx)(i.Fragment, { children: x }),
            (0, i.jsxs)(u.Text, {
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
        a = (0, u.useSpring)(
            {
                from: { width: n ? '0%' : ''.concat(t, '%') },
                to: { width: ''.concat(t, '%') },
                config: {
                    duration: 1200,
                    easing: d.Z.Easing.inOut(d.Z.Easing.ease)
                }
            },
            'animate-always'
        );
    return (0, i.jsx)(o.animated.span, {
        className: p.votePercentageBar,
        style: a,
        'aria-hidden': !0
    });
}
function A(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: a, isVictor: s, isExpired: l, className: r } = e;
    return (0, c.EQ)({
        answersInteraction: t,
        didSelfVote: a
    })
        .with({ answersInteraction: T.Y7.RADIO_BUTTONS }, () =>
            (0, i.jsx)(N.Og, {
                isSelected: n,
                size: 24,
                className: r
            })
        )
        .with({ answersInteraction: T.Y7.CHECKBOXES }, () =>
            (0, i.jsx)(N.zs, {
                isSelected: n,
                size: 20,
                className: r
            })
        )
        .with(
            {
                answersInteraction: T.Y7.LIST,
                didSelfVote: !0
            },
            () =>
                (0, i.jsx)(N.ZY, {
                    isVictor: s,
                    isExpired: l,
                    size: 24,
                    className: r
                })
        )
        .otherwise(() => null);
}
function S(e) {
    let { answer: t, isExpired: n, answersInteraction: a, canShowVoteCounts: s, canShowVoterDetails: o } = e,
        c = !0 === t.isSelected,
        d = !0 === t.didSelfVote,
        _ = !0 === t.isVictor,
        E = t.shouldAnimateTransition;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: l()(p.answerInner, {
                [p.currentlyVoting]: a !== T.Y7.LIST,
                [p.selected]: c
            }),
            children: [
                s
                    ? (0, i.jsx)(g, {
                          percentage: t.votesPercentage,
                          shouldAnimate: E
                      })
                    : null,
                null != t.pollMedia.emoji &&
                    (0, i.jsx)(N.sc, {
                        className: p.emoji,
                        emoji: t.pollMedia.emoji
                    }),
                (0, i.jsx)(u.Text, {
                    className: p.label,
                    variant: 'text-sm/semibold',
                    color: 'none',
                    scaleFontToUserSetting: !0,
                    children: t.pollMedia.text
                }),
                t.didSelfVote && (0, i.jsx)(r.T, { children: C.Z.Messages.POLL_ANSWER_VOTED_ARIA }),
                s &&
                    (0, i.jsx)(f, {
                        percentage: t.votesPercentage,
                        label: t.votes,
                        canShowVoterDetails: o,
                        answerId: t.answerId
                    }),
                (0, i.jsx)(A, {
                    answersInteraction: a,
                    isSelected: c,
                    didSelfVote: d,
                    isVictor: _,
                    isExpired: n,
                    className: p.answerSelectionIcon
                })
            ]
        })
    });
}
function M(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: a, canTapAnswers: s, ...l } = e;
    return (0, i.jsx)(N.$e, {
        className: p.answersContainer,
        answerClassName: p.answer,
        answersInteraction: n,
        canTapAnswers: s,
        renderAnswerContent: (e) =>
            (0, i.jsx)(S, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: a,
                canShowVoterDetails: s
            }),
        ...l
    });
}
