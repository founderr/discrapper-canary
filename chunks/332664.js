o.d(t, {
    L: function () {
        return N;
    },
    Z: function () {
        return I;
    }
}),
    o(47120);
var n = o(735250),
    a = o(470079),
    s = o(120356),
    l = o.n(s),
    i = o(392711),
    r = o.n(i),
    u = o(481060),
    c = o(110924),
    d = o(600164),
    _ = o(313201),
    b = o(237617),
    E = o(572539),
    m = o(626135),
    O = o(63063),
    h = o(957115),
    C = o(871364),
    A = o(531578),
    p = o(981631),
    f = o(689938),
    g = o(940256);
let L = [
    {
        className: g.emojiSad,
        rating: A.aZ.BAD,
        classNameSelected: g.selected
    },
    {
        className: g.emojiNeutral,
        rating: A.aZ.NEUTRAL,
        classNameSelected: g.selected
    },
    {
        className: g.emojiHappy,
        rating: A.aZ.GOOD,
        classNameSelected: g.selected
    }
];
function N(e) {
    let { className: t, selectedRating: o, ratingConfigs: a, onChangeRating: s } = e;
    return (0, n.jsx)(d.Z, {
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: l()(g.ratingsSelector, t),
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
function D() {
    return (0, n.jsx)(u.Text, {
        className: g.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: f.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({ helpdeskURL: O.Z.getSubmitRequestURL() })
    });
}
function I(e) {
    let { modalType: t, header: o, body: s, problemTitle: i, problems: O, transitionState: L, ratingConfigs: I, feedbackProblems: v = [], otherKey: x, ratingsSelectorClassName: Z, hideDontShowCheckbox: B, startRating: S = null, onSubmit: T, onClose: j } = e,
        k = (0, c.Z)(O),
        [M, R] = a.useState(!1),
        [F, K] = a.useState(S),
        [H, P] = a.useState(null),
        [U, y] = a.useState(r().shuffle(O)),
        [w, G] = a.useState(''),
        V = (0, _.Dt)(),
        z = (0, b.Z)(F),
        Y = (0, b.Z)(M),
        q = (0, b.Z)(H),
        W = (0, b.Z)(T),
        J = (0, b.Z)(w),
        Q = null != H && v.includes(H),
        { renderSkipButton: X } = C.w.useExperiment({ location: 'FeedbackModal' });
    return (
        a.useEffect(() => {
            !r().isEqual(k, O) && y((0, h.B)(O, x));
        }, [O, k, x]),
        a.useEffect(
            () => (
                m.default.track(p.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    W.current({
                        rating: z.current,
                        problem: q.current,
                        dontShowAgain: Y.current,
                        feedback: J.current
                    });
                }
            ),
            []
        ),
        (0, n.jsxs)(u.ModalRoot, {
            transitionState: L,
            className: g.__invalid_modalRoot,
            'aria-labelledby': V,
            children: [
                (0, n.jsxs)(u.ModalHeader, {
                    separator: !1,
                    className: g.headerContainer,
                    children: [
                        (0, n.jsx)(u.Heading, {
                            id: V,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: o
                        }),
                        (0, n.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: g.ratingBody,
                            children: s
                        }),
                        Q
                            ? null
                            : (0, n.jsx)(N, {
                                  className: l()(g.emojis, Z),
                                  selectedRating: F,
                                  onChangeRating: function (e) {
                                      K(e), e === A.aZ.GOOD && j();
                                  },
                                  ratingConfigs: I
                              })
                    ]
                }),
                (0, n.jsxs)(u.ModalContent, {
                    className: g.__invalid_content,
                    children: [
                        null == F || F === A.aZ.GOOD || Q
                            ? null
                            : (0, n.jsx)(u.FormItem, {
                                  title: i,
                                  className: g.problemInfo,
                                  children: (0, n.jsx)(E.Z, {
                                      options: U,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          P(t), !v.includes(t) && j();
                                      },
                                      hideCaret: (e) => {
                                          let { value: t } = e;
                                          return !v.includes(t);
                                      }
                                  })
                              }),
                        Q
                            ? (0, n.jsxs)(u.FormItem, {
                                  title: f.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                                  className: g.problemInfo,
                                  children: [
                                      (0, n.jsx)(u.TextArea, {
                                          value: w,
                                          maxLength: A.iF,
                                          onChange: G
                                      }),
                                      (0, n.jsx)(D, {})
                                  ]
                              })
                            : null
                    ]
                }),
                (Q || !B) &&
                    (0, n.jsx)(u.ModalFooter, {
                        className: g.footer,
                        direction: d.Z.Direction.HORIZONTAL,
                        children: Q
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          look: u.Button.Looks.LINK,
                                          color: u.Button.Colors.PRIMARY,
                                          onClick: () => {
                                              P(null), G('');
                                          },
                                          children: f.Z.Messages.BACK
                                      }),
                                      (0, n.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          onClick: j,
                                          children: f.Z.Messages.SUBMIT
                                      })
                                  ]
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(u.Checkbox, {
                                          type: u.Checkbox.Types.INVERTED,
                                          size: 18,
                                          value: M,
                                          onChange: () => R(!M),
                                          children: (0, n.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              children: f.Z.Messages.DONT_SHOW_AGAIN
                                          })
                                      }),
                                      X &&
                                          null != F &&
                                          F !== A.aZ.GOOD &&
                                          (0, n.jsx)(u.Button, {
                                              type: 'submit',
                                              size: u.Button.Sizes.SMALL,
                                              onClick: j,
                                              children: f.Z.Messages.SKIP
                                          })
                                  ]
                              })
                    })
            ]
        })
    );
}
