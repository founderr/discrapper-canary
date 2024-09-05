o.d(t, {
    L: function () {
        return g;
    },
    Z: function () {
        return N;
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
    m = o(63063),
    O = o(957115),
    h = o(871364),
    C = o(531578),
    A = o(689938),
    p = o(940256);
let f = [
    {
        className: p.emojiSad,
        rating: C.aZ.BAD,
        classNameSelected: p.selected
    },
    {
        className: p.emojiNeutral,
        rating: C.aZ.NEUTRAL,
        classNameSelected: p.selected
    },
    {
        className: p.emojiHappy,
        rating: C.aZ.GOOD,
        classNameSelected: p.selected
    }
];
function g(e) {
    let { className: t, selectedRating: o, ratingConfigs: a, onChangeRating: s } = e;
    return (0, n.jsx)(d.Z, {
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: l()(p.ratingsSelector, t),
        children: (null != a ? a : f).map((e) => {
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
function L() {
    return (0, n.jsx)(u.Text, {
        className: p.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: A.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({ helpdeskURL: m.Z.getSubmitRequestURL() })
    });
}
function N(e) {
    let { header: t, body: o, problemTitle: s, problems: i, transitionState: m, ratingConfigs: f, feedbackProblems: N = [], otherKey: D, ratingsSelectorClassName: I, hideDontShowCheckbox: Z, startRating: v = null, onSubmit: x, onClose: B } = e,
        S = (0, c.Z)(i),
        [T, j] = a.useState(!1),
        [k, M] = a.useState(v),
        [R, K] = a.useState(null),
        [F, H] = a.useState(r().shuffle(i)),
        [P, U] = a.useState(''),
        y = (0, _.Dt)(),
        w = (0, b.Z)(k),
        G = (0, b.Z)(T),
        V = (0, b.Z)(R),
        z = (0, b.Z)(x),
        Y = (0, b.Z)(P),
        q = null != R && N.includes(R),
        { renderSkipButton: W } = h.w.useExperiment({ location: 'FeedbackModal' });
    return (
        a.useEffect(() => {
            !r().isEqual(S, i) && H((0, O.B)(i, D));
        }, [i, S, D]),
        a.useEffect(
            () => () => {
                z.current({
                    rating: w.current,
                    problem: V.current,
                    dontShowAgain: G.current,
                    feedback: Y.current
                });
            },
            []
        ),
        (0, n.jsxs)(u.ModalRoot, {
            transitionState: m,
            className: p.__invalid_modalRoot,
            'aria-labelledby': y,
            children: [
                (0, n.jsxs)(u.ModalHeader, {
                    separator: !1,
                    className: p.headerContainer,
                    children: [
                        (0, n.jsx)(u.Heading, {
                            id: y,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: t
                        }),
                        (0, n.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: p.ratingBody,
                            children: o
                        }),
                        q
                            ? null
                            : (0, n.jsx)(g, {
                                  className: l()(p.emojis, I),
                                  selectedRating: k,
                                  onChangeRating: function (e) {
                                      M(e), e === C.aZ.GOOD && B();
                                  },
                                  ratingConfigs: f
                              })
                    ]
                }),
                (0, n.jsxs)(u.ModalContent, {
                    className: p.__invalid_content,
                    children: [
                        null == k || k === C.aZ.GOOD || q
                            ? null
                            : (0, n.jsx)(u.FormItem, {
                                  title: s,
                                  className: p.problemInfo,
                                  children: (0, n.jsx)(E.Z, {
                                      options: F,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          K(t), !N.includes(t) && B();
                                      },
                                      hideCaret: (e) => {
                                          let { value: t } = e;
                                          return !N.includes(t);
                                      }
                                  })
                              }),
                        q
                            ? (0, n.jsxs)(u.FormItem, {
                                  title: A.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                                  className: p.problemInfo,
                                  children: [
                                      (0, n.jsx)(u.TextArea, {
                                          value: P,
                                          maxLength: C.iF,
                                          onChange: U
                                      }),
                                      (0, n.jsx)(L, {})
                                  ]
                              })
                            : null
                    ]
                }),
                (q || !Z) &&
                    (0, n.jsx)(u.ModalFooter, {
                        className: p.footer,
                        direction: d.Z.Direction.HORIZONTAL,
                        children: q
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          look: u.Button.Looks.LINK,
                                          color: u.Button.Colors.PRIMARY,
                                          onClick: () => {
                                              K(null), U('');
                                          },
                                          children: A.Z.Messages.BACK
                                      }),
                                      (0, n.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          onClick: B,
                                          children: A.Z.Messages.SUBMIT
                                      })
                                  ]
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(u.Checkbox, {
                                          type: u.Checkbox.Types.INVERTED,
                                          size: 18,
                                          value: T,
                                          onChange: () => j(!T),
                                          children: (0, n.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              children: A.Z.Messages.DONT_SHOW_AGAIN
                                          })
                                      }),
                                      W &&
                                          null != k &&
                                          k !== C.aZ.GOOD &&
                                          (0, n.jsx)(u.Button, {
                                              type: 'submit',
                                              size: u.Button.Sizes.SMALL,
                                              onClick: B,
                                              children: A.Z.Messages.SKIP
                                          })
                                  ]
                              })
                    })
            ]
        })
    );
}
