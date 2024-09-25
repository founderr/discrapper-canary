n.d(t, {
    K: function () {
        return L;
    }
});
var r = n(47120);
var i = n(627341);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(297821),
    c = n(526629),
    d = n(278074),
    _ = n(748780),
    E = n(481060),
    f = n(313201),
    h = n(542578),
    p = n(203143),
    m = n(79390),
    I = n(839963),
    T = n(139256),
    g = n(294608),
    S = n(689938),
    A = n(490351);
let v = 24,
    N = 24,
    O = 20;
function R(e) {
    let { percentage: t, label: n, canShowVoterDetails: r, answerId: i } = e,
        s = (0, f.Dt)(),
        { channelId: l, messageId: c } = (0, g.pE)(),
        [d, _] = o.useState(''),
        [I, T] = o.useState(!1),
        S = '' !== d && I,
        v = o.useCallback(() => {
            _((0, m.e1)(c, l, i));
        }, [c, l, i]),
        N = o.useCallback(() => {
            v(), T(!0);
        }, [v]),
        O = o.useCallback(() => {
            T(!1);
        }, []),
        R = o.useCallback(() => {
            (0, p.n)({
                channelId: l,
                messageId: c,
                answerId: i
            });
        }, [l, c, i]);
    o.useEffect(() => {
        if (!!I)
            return (
                h.Z.addReactChangeListener(v),
                () => {
                    h.Z.removeReactChangeListener(v);
                }
            );
    }, [I, v]);
    let C = (0, a.jsx)(E.Text, {
        variant: 'text-xs/semibold',
        color: 'none',
        className: A.voteCount,
        scaleFontToUserSetting: !0,
        children: n
    });
    return (0, a.jsxs)('div', {
        className: A.votesData,
        children: [
            r
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(E.Tooltip, {
                              text: (0, a.jsx)(E.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-muted',
                                  scaleFontToUserSetting: !0,
                                  children: d
                              }),
                              forceOpen: S,
                              'aria-label': !1,
                              children: (e) =>
                                  (0, a.jsx)(E.Button, {
                                      ...e,
                                      onMouseEnter: N,
                                      onMouseLeave: O,
                                      onFocus: N,
                                      onBlur: O,
                                      onClick: R,
                                      className: A.voteCountButton,
                                      'aria-describedby': S ? s : void 0,
                                      look: E.Button.Looks.BLANK,
                                      size: E.Button.Sizes.NONE,
                                      children: C
                                  })
                          }),
                          S &&
                              (0, a.jsx)(u.T, {
                                  id: s,
                                  children: d
                              })
                      ]
                  })
                : (0, a.jsx)(a.Fragment, { children: C }),
            (0, a.jsxs)(E.Text, {
                variant: 'text-md/bold',
                color: 'none',
                scaleFontToUserSetting: !0,
                children: [t, '%']
            })
        ]
    });
}
function C(e) {
    let { percentage: t, shouldAnimate: n } = e,
        r = (0, E.useSpring)(
            {
                from: { width: n ? '0%' : ''.concat(t, '%') },
                to: { width: ''.concat(t, '%') },
                config: {
                    duration: 1200,
                    easing: _.Z.Easing.inOut(_.Z.Easing.ease)
                }
            },
            'animate-always'
        );
    return (0, a.jsx)(c.animated.span, {
        className: A.votePercentageBar,
        style: r,
        'aria-hidden': !0
    });
}
function y(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: r, isVictor: i, isExpired: o, className: s } = e;
    return (0, d.EQ)({
        answersInteraction: t,
        didSelfVote: r
    })
        .with({ answersInteraction: I.Y7.RADIO_BUTTONS }, () =>
            (0, a.jsx)(T.Og, {
                isSelected: n,
                size: N,
                className: s
            })
        )
        .with({ answersInteraction: I.Y7.CHECKBOXES }, () =>
            (0, a.jsx)(T.zs, {
                isSelected: n,
                size: O,
                className: s
            })
        )
        .with(
            {
                answersInteraction: I.Y7.LIST,
                didSelfVote: !0
            },
            () =>
                (0, a.jsx)(T.ZY, {
                    isVictor: i,
                    isExpired: o,
                    size: v,
                    className: s
                })
        )
        .otherwise(() => null);
}
function b(e) {
    let { answer: t, isExpired: n, answersInteraction: r, canShowVoteCounts: i, canShowVoterDetails: o } = e,
        s = !0 === t.isSelected,
        c = !0 === t.didSelfVote,
        d = !0 === t.isVictor,
        _ = t.shouldAnimateTransition;
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: l()(A.answerInner, {
                [A.currentlyVoting]: r !== I.Y7.LIST,
                [A.selected]: s
            }),
            children: [
                i
                    ? (0, a.jsx)(C, {
                          percentage: t.votesPercentage,
                          shouldAnimate: _
                      })
                    : null,
                null != t.pollMedia.emoji &&
                    (0, a.jsx)(T.sc, {
                        className: A.emoji,
                        emoji: t.pollMedia.emoji
                    }),
                (0, a.jsx)(E.Text, {
                    className: A.label,
                    variant: 'text-sm/semibold',
                    color: 'none',
                    scaleFontToUserSetting: !0,
                    children: t.pollMedia.text
                }),
                t.didSelfVote && (0, a.jsx)(u.T, { children: S.Z.Messages.POLL_ANSWER_VOTED_ARIA }),
                i &&
                    (0, a.jsx)(R, {
                        percentage: t.votesPercentage,
                        label: t.votes,
                        canShowVoterDetails: o,
                        answerId: t.answerId
                    }),
                (0, a.jsx)(y, {
                    answersInteraction: r,
                    isSelected: s,
                    didSelfVote: c,
                    isVictor: d,
                    isExpired: n,
                    className: A.answerSelectionIcon
                })
            ]
        })
    });
}
function L(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: r, canTapAnswers: i, ...o } = e;
    return (0, a.jsx)(T.$e, {
        className: A.answersContainer,
        answerClassName: A.answer,
        answersInteraction: n,
        canTapAnswers: i,
        renderAnswerContent: (e) =>
            (0, a.jsx)(b, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: r,
                canShowVoterDetails: i
            }),
        ...o
    });
}
