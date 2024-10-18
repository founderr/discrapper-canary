n.d(t, {
    K: function () {
        return x;
    }
}),
    n(47120),
    n(627341);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(297821),
    o = n(212433),
    c = n(278074),
    u = n(748780),
    d = n(481060),
    _ = n(313201),
    E = n(542578),
    I = n(203143),
    m = n(79390),
    T = n(839963),
    f = n(139256),
    h = n(294608),
    N = n(689938),
    p = n(490351);
function C(e) {
    let { percentage: t, label: n, canShowVoterDetails: s, answerId: r } = e,
        o = (0, _.Dt)(),
        { channelId: c, messageId: u } = (0, h.pE)(),
        [T, f] = a.useState(''),
        [N, C] = a.useState(!1),
        g = '' !== T && N,
        S = a.useCallback(() => {
            f((0, m.e1)(u, c, r));
        }, [u, c, r]),
        A = a.useCallback(() => {
            S(), C(!0);
        }, [S]),
        x = a.useCallback(() => {
            C(!1);
        }, []),
        R = a.useCallback(() => {
            (0, I.n)({
                channelId: c,
                messageId: u,
                answerId: r
            });
        }, [c, u, r]);
    a.useEffect(() => {
        if (!!N)
            return (
                E.Z.addReactChangeListener(S),
                () => {
                    E.Z.removeReactChangeListener(S);
                }
            );
    }, [N, S]);
    let v = (0, i.jsx)(d.Text, {
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
                                      onMouseEnter: A,
                                      onMouseLeave: x,
                                      onFocus: A,
                                      onBlur: x,
                                      onClick: R,
                                      className: p.voteCountButton,
                                      'aria-describedby': g ? o : void 0,
                                      look: d.Button.Looks.BLANK,
                                      size: d.Button.Sizes.NONE,
                                      children: v
                                  })
                          }),
                          g &&
                              (0, i.jsx)(l.T, {
                                  id: o,
                                  children: T
                              })
                      ]
                  })
                : (0, i.jsx)(i.Fragment, { children: v }),
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
        a = (0, d.useSpring)(
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
        className: p.votePercentageBar,
        style: a,
        'aria-hidden': !0
    });
}
function S(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: a, isVictor: s, isExpired: r, className: l } = e;
    return (0, c.EQ)({
        answersInteraction: t,
        didSelfVote: a
    })
        .with({ answersInteraction: T.Y7.RADIO_BUTTONS }, () =>
            (0, i.jsx)(f.Og, {
                isSelected: n,
                size: 24,
                className: l
            })
        )
        .with({ answersInteraction: T.Y7.CHECKBOXES }, () =>
            (0, i.jsx)(f.zs, {
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
                (0, i.jsx)(f.ZY, {
                    isVictor: s,
                    isExpired: r,
                    size: 24,
                    className: l
                })
        )
        .otherwise(() => null);
}
function A(e) {
    let { answer: t, isExpired: n, answersInteraction: a, canShowVoteCounts: s, canShowVoterDetails: o } = e,
        c = !0 === t.isSelected,
        u = !0 === t.didSelfVote,
        _ = !0 === t.isVictor,
        E = t.shouldAnimateTransition;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: r()(p.answerInner, {
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
                    (0, i.jsx)(f.sc, {
                        className: p.emoji,
                        emoji: t.pollMedia.emoji
                    }),
                (0, i.jsx)(d.Text, {
                    className: p.label,
                    variant: 'text-sm/semibold',
                    color: 'none',
                    scaleFontToUserSetting: !0,
                    children: t.pollMedia.text
                }),
                t.didSelfVote && (0, i.jsx)(l.T, { children: N.Z.Messages.POLL_ANSWER_VOTED_ARIA }),
                s &&
                    (0, i.jsx)(C, {
                        percentage: t.votesPercentage,
                        label: t.votes,
                        canShowVoterDetails: o,
                        answerId: t.answerId
                    }),
                (0, i.jsx)(S, {
                    answersInteraction: a,
                    isSelected: c,
                    didSelfVote: u,
                    isVictor: _,
                    isExpired: n,
                    className: p.answerSelectionIcon
                })
            ]
        })
    });
}
function x(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: a, canTapAnswers: s, ...r } = e;
    return (0, i.jsx)(f.$e, {
        className: p.answersContainer,
        answerClassName: p.answer,
        answersInteraction: n,
        canTapAnswers: s,
        renderAnswerContent: (e) =>
            (0, i.jsx)(A, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: a,
                canShowVoterDetails: s
            }),
        ...r
    });
}
