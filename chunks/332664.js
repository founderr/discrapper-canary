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
    let { modalType: t, header: o, body: s, problemTitle: i, problems: h, transitionState: L, ratingConfigs: I, feedbackProblems: Z = [], otherKey: D, ratingsSelectorClassName: x, hideDontShowCheckbox: B, startRating: S = null, onSubmit: M, onClose: T } = e,
        j = (0, c.Z)(h),
        [k, R] = a.useState(!1),
        [y, K] = a.useState(S),
        [F, H] = a.useState(null),
        [U, P] = a.useState(r().shuffle(h)),
        [w, G] = a.useState(''),
        V = (0, _.Dt)(),
        z = (0, b.Z)(y),
        Y = (0, b.Z)(k),
        q = (0, b.Z)(F),
        J = (0, b.Z)(M),
        W = (0, b.Z)(w),
        Q = null != F && Z.includes(F),
        { renderSkipButton: X } = C.w.useExperiment({ location: 'FeedbackModal' });
    return (
        a.useEffect(() => {
            !r().isEqual(j, h) && P((0, O.B)(h, D));
        }, [h, j, D]),
        a.useEffect(
            () => (
                E.default.track(p.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    J.current({
                        rating: z.current,
                        problem: q.current,
                        dontShowAgain: Y.current,
                        feedback: W.current
                    });
                }
            ),
            []
        ),
        (0, n.jsxs)(u.ModalRoot, {
            transitionState: L,
            className: f.__invalid_modalRoot,
            'aria-labelledby': V,
            children: [
                (0, n.jsxs)(u.ModalHeader, {
                    separator: !1,
                    className: f.headerContainer,
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
                            className: f.ratingBody,
                            children: s
                        }),
                        Q
                            ? null
                            : (0, n.jsx)(N, {
                                  className: l()(f.emojis, x),
                                  selectedRating: y,
                                  onChangeRating: function (e) {
                                      K(e), e === A.aZ.GOOD && T();
                                  },
                                  ratingConfigs: I
                              })
                    ]
                }),
                (0, n.jsxs)(u.ModalContent, {
                    className: f.__invalid_content,
                    children: [
                        null == y || y === A.aZ.GOOD || Q
                            ? null
                            : (0, n.jsx)(u.FormItem, {
                                  title: i,
                                  className: f.problemInfo,
                                  children: (0, n.jsx)(m.Z, {
                                      options: U,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          H(t), !Z.includes(t) && T();
                                      },
                                      hideCaret: (e) => {
                                          let { value: t } = e;
                                          return !Z.includes(t);
                                      }
                                  })
                              }),
                        Q
                            ? (0, n.jsxs)(u.FormItem, {
                                  title: g.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                                  className: f.problemInfo,
                                  children: [
                                      (0, n.jsx)(u.TextArea, {
                                          value: w,
                                          maxLength: A.iF,
                                          onChange: G
                                      }),
                                      (0, n.jsx)(v, {})
                                  ]
                              })
                            : null
                    ]
                }),
                (Q || !B) &&
                    (0, n.jsx)(u.ModalFooter, {
                        className: f.footer,
                        direction: d.Z.Direction.HORIZONTAL,
                        children: Q
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          look: u.Button.Looks.LINK,
                                          color: u.Button.Colors.PRIMARY,
                                          onClick: () => {
                                              H(null), G('');
                                          },
                                          children: g.Z.Messages.BACK
                                      }),
                                      (0, n.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          onClick: T,
                                          children: g.Z.Messages.SUBMIT
                                      })
                                  ]
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(u.Checkbox, {
                                          type: u.Checkbox.Types.INVERTED,
                                          size: 18,
                                          value: k,
                                          onChange: () => R(!k),
                                          children: (0, n.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              children: g.Z.Messages.DONT_SHOW_AGAIN
                                          })
                                      }),
                                      X &&
                                          null != y &&
                                          y !== A.aZ.GOOD &&
                                          (0, n.jsx)(u.Button, {
                                              type: 'submit',
                                              size: u.Button.Sizes.SMALL,
                                              onClick: T,
                                              children: g.Z.Messages.SKIP
                                          })
                                  ]
                              })
                    })
            ]
        })
    );
}
