o.d(t, {
    L: function () {
        return N;
    },
    Z: function () {
        return I;
    }
}),
    o(47120);
var n = o(200651),
    a = o(192379),
    s = o(120356),
    l = o.n(s),
    i = o(392711),
    r = o.n(i),
    u = o(481060),
    c = o(110924),
    d = o(600164),
    _ = o(313201),
    b = o(237617),
    m = o(572539),
    E = o(626135),
    h = o(63063),
    O = o(957115),
    C = o(871364),
    A = o(531578),
    p = o(981631),
    g = o(689938),
    f = o(214859);
let L = [
    {
        className: f.emojiSad,
        rating: A.aZ.BAD,
        classNameSelected: f.selected
    },
    {
        className: f.emojiNeutral,
        rating: A.aZ.NEUTRAL,
        classNameSelected: f.selected
    },
    {
        className: f.emojiHappy,
        rating: A.aZ.GOOD,
        classNameSelected: f.selected
    }
];
function N(e) {
    let { className: t, selectedRating: o, ratingConfigs: a, onChangeRating: s } = e;
    return (0, n.jsx)(d.Z, {
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: l()(f.ratingsSelector, t),
        children: (null != a ? a : L).map((e) => {
            let { rating: t, className: a, classNameSelected: i } = e;
            return (0, n.jsx)(
                u.Clickable,
                {
                    onClick: () => s(t),
                    'aria-label': t,
                    children: (0, n.jsx)('div', { className: l()(a, o === t ? i : null) })
                },
                t
            );
        })
    });
}
function v() {
    return (0, n.jsx)(u.Text, {
        className: f.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: g.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({ helpdeskURL: h.Z.getSubmitRequestURL() })
    });
}
function I(e) {
    let { modalType: t, header: o, body: s, problemTitle: i, problems: h, transitionState: L, ratingConfigs: I, feedbackProblems: Z = [], otherKey: D, ratingsSelectorClassName: x, hideDontShowCheckbox: B, startRating: S = null, hideHelpDeskLink: M = !1, onSubmit: T, onClose: j } = e,
        k = (0, c.Z)(h),
        [R, y] = a.useState(!1),
        [K, F] = a.useState(S),
        [H, U] = a.useState(null),
        [P, w] = a.useState(r().shuffle(h)),
        [G, V] = a.useState(''),
        z = (0, _.Dt)(),
        Y = (0, b.Z)(K),
        q = (0, b.Z)(R),
        J = (0, b.Z)(H),
        W = (0, b.Z)(T),
        Q = (0, b.Z)(G),
        X = null != H && Z.includes(H),
        { renderSkipButton: $ } = C.w.useExperiment({ location: 'FeedbackModal' });
    return (
        a.useEffect(() => {
            !r().isEqual(k, h) && w((0, O.B)(h, D));
        }, [h, k, D]),
        a.useEffect(
            () => (
                E.default.track(p.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    W.current({
                        rating: Y.current,
                        problem: J.current,
                        dontShowAgain: q.current,
                        feedback: Q.current
                    });
                }
            ),
            []
        ),
        (0, n.jsxs)(u.ModalRoot, {
            transitionState: L,
            className: f.__invalid_modalRoot,
            'aria-labelledby': z,
            children: [
                (0, n.jsxs)(u.ModalHeader, {
                    separator: !1,
                    className: f.headerContainer,
                    children: [
                        (0, n.jsx)(u.Heading, {
                            id: z,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: o
                        }),
                        (0, n.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: f.ratingBody,
                            children: s
                        }),
                        X
                            ? null
                            : (0, n.jsx)(N, {
                                  className: l()(f.emojis, x),
                                  selectedRating: K,
                                  onChangeRating: function (e) {
                                      F(e), e === A.aZ.GOOD && j();
                                  },
                                  ratingConfigs: I
                              })
                    ]
                }),
                (0, n.jsxs)(u.ModalContent, {
                    className: f.__invalid_content,
                    children: [
                        null == K || K === A.aZ.GOOD || X
                            ? null
                            : (0, n.jsx)(u.FormItem, {
                                  title: i,
                                  className: f.problemInfo,
                                  children: (0, n.jsx)(m.Z, {
                                      options: P,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          U(t), !Z.includes(t) && j();
                                      },
                                      hideCaret: (e) => {
                                          let { value: t } = e;
                                          return !Z.includes(t);
                                      }
                                  })
                              }),
                        X
                            ? (0, n.jsxs)(u.FormItem, {
                                  title: g.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                                  className: f.problemInfo,
                                  children: [
                                      (0, n.jsx)(u.TextArea, {
                                          value: G,
                                          maxLength: A.iF,
                                          onChange: V
                                      }),
                                      !M && (0, n.jsx)(v, {})
                                  ]
                              })
                            : null
                    ]
                }),
                (X || !B) &&
                    (0, n.jsx)(u.ModalFooter, {
                        className: f.footer,
                        direction: d.Z.Direction.HORIZONTAL,
                        children: X
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          look: u.Button.Looks.LINK,
                                          color: u.Button.Colors.PRIMARY,
                                          onClick: () => {
                                              U(null), V('');
                                          },
                                          children: g.Z.Messages.BACK
                                      }),
                                      (0, n.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          onClick: j,
                                          children: g.Z.Messages.SUBMIT
                                      })
                                  ]
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(u.Checkbox, {
                                          type: u.Checkbox.Types.INVERTED,
                                          size: 18,
                                          value: R,
                                          onChange: () => y(!R),
                                          children: (0, n.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              children: g.Z.Messages.DONT_SHOW_AGAIN
                                          })
                                      }),
                                      $ &&
                                          null != K &&
                                          K !== A.aZ.GOOD &&
                                          (0, n.jsx)(u.Button, {
                                              type: 'submit',
                                              size: u.Button.Sizes.SMALL,
                                              onClick: j,
                                              children: g.Z.Messages.SKIP
                                          })
                                  ]
                              })
                    })
            ]
        })
    );
}
