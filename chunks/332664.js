n.d(t, {
    L: function () {
        return v;
    },
    Z: function () {
        return N;
    }
}),
    n(47120);
var o = n(735250),
    a = n(470079),
    s = n(120356),
    i = n.n(s),
    l = n(392711),
    r = n.n(l),
    u = n(481060),
    c = n(110924),
    d = n(600164),
    _ = n(313201),
    m = n(237617),
    b = n(572539),
    E = n(626135),
    h = n(63063),
    f = n(957115),
    C = n(871364),
    O = n(531578),
    A = n(981631),
    g = n(689938),
    p = n(214859);
let L = [
    {
        className: p.emojiSad,
        rating: O.aZ.BAD,
        classNameSelected: p.selected
    },
    {
        className: p.emojiNeutral,
        rating: O.aZ.NEUTRAL,
        classNameSelected: p.selected
    },
    {
        className: p.emojiHappy,
        rating: O.aZ.GOOD,
        classNameSelected: p.selected
    }
];
function v(e) {
    let { className: t, selectedRating: n, ratingConfigs: a, onChangeRating: s } = e;
    return (0, o.jsx)(d.Z, {
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: i()(p.ratingsSelector, t),
        children: (null != a ? a : L).map((e) => {
            let { rating: t, className: a, classNameSelected: l } = e;
            return (0, o.jsx)(
                u.Clickable,
                {
                    onClick: () => s(t),
                    'aria-label': t,
                    children: (0, o.jsx)('div', { className: i()(a, n === t ? l : null) })
                },
                t
            );
        })
    });
}
function x() {
    return (0, o.jsx)(u.Text, {
        className: p.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: g.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({ helpdeskURL: h.Z.getSubmitRequestURL() })
    });
}
function N(e) {
    let { modalType: t, header: n, body: s, problemTitle: l, problems: h, transitionState: L, ratingConfigs: N, feedbackProblems: I = [], otherKey: Z, ratingsSelectorClassName: D, hideDontShowCheckbox: S, startRating: k = null, onSubmit: B, onClose: j } = e,
        M = (0, c.Z)(h),
        [T, R] = a.useState(!1),
        [y, F] = a.useState(k),
        [K, U] = a.useState(null),
        [w, P] = a.useState(r().shuffle(h)),
        [H, z] = a.useState(''),
        G = (0, _.Dt)(),
        V = (0, m.Z)(y),
        $ = (0, m.Z)(T),
        Y = (0, m.Z)(K),
        W = (0, m.Z)(B),
        q = (0, m.Z)(H),
        J = null != K && I.includes(K),
        { renderSkipButton: Q } = C.w.useExperiment({ location: 'FeedbackModal' });
    return (
        a.useEffect(() => {
            !r().isEqual(M, h) && P((0, f.B)(h, Z));
        }, [h, M, Z]),
        a.useEffect(
            () => (
                E.default.track(A.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    W.current({
                        rating: V.current,
                        problem: Y.current,
                        dontShowAgain: $.current,
                        feedback: q.current
                    });
                }
            ),
            []
        ),
        (0, o.jsxs)(u.ModalRoot, {
            transitionState: L,
            className: p.__invalid_modalRoot,
            'aria-labelledby': G,
            children: [
                (0, o.jsxs)(u.ModalHeader, {
                    separator: !1,
                    className: p.headerContainer,
                    children: [
                        (0, o.jsx)(u.Heading, {
                            id: G,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: n
                        }),
                        (0, o.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: p.ratingBody,
                            children: s
                        }),
                        J
                            ? null
                            : (0, o.jsx)(v, {
                                  className: i()(p.emojis, D),
                                  selectedRating: y,
                                  onChangeRating: function (e) {
                                      F(e), e === O.aZ.GOOD && j();
                                  },
                                  ratingConfigs: N
                              })
                    ]
                }),
                (0, o.jsxs)(u.ModalContent, {
                    className: p.__invalid_content,
                    children: [
                        null == y || y === O.aZ.GOOD || J
                            ? null
                            : (0, o.jsx)(u.FormItem, {
                                  title: l,
                                  className: p.problemInfo,
                                  children: (0, o.jsx)(b.Z, {
                                      options: w,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          U(t), !I.includes(t) && j();
                                      },
                                      hideCaret: (e) => {
                                          let { value: t } = e;
                                          return !I.includes(t);
                                      }
                                  })
                              }),
                        J
                            ? (0, o.jsxs)(u.FormItem, {
                                  title: g.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                                  className: p.problemInfo,
                                  children: [
                                      (0, o.jsx)(u.TextArea, {
                                          value: H,
                                          maxLength: O.iF,
                                          onChange: z
                                      }),
                                      (0, o.jsx)(x, {})
                                  ]
                              })
                            : null
                    ]
                }),
                (J || !S) &&
                    (0, o.jsx)(u.ModalFooter, {
                        className: p.footer,
                        direction: d.Z.Direction.HORIZONTAL,
                        children: J
                            ? (0, o.jsxs)(o.Fragment, {
                                  children: [
                                      (0, o.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          look: u.Button.Looks.LINK,
                                          color: u.Button.Colors.PRIMARY,
                                          onClick: () => {
                                              U(null), z('');
                                          },
                                          children: g.Z.Messages.BACK
                                      }),
                                      (0, o.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          onClick: j,
                                          children: g.Z.Messages.SUBMIT
                                      })
                                  ]
                              })
                            : (0, o.jsxs)(o.Fragment, {
                                  children: [
                                      (0, o.jsx)(u.Checkbox, {
                                          type: u.Checkbox.Types.INVERTED,
                                          size: 18,
                                          value: T,
                                          onChange: () => R(!T),
                                          children: (0, o.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              children: g.Z.Messages.DONT_SHOW_AGAIN
                                          })
                                      }),
                                      Q &&
                                          null != y &&
                                          y !== O.aZ.GOOD &&
                                          (0, o.jsx)(u.Button, {
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
