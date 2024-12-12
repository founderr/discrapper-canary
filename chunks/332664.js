n.d(t, {
    L: function () {
        return O;
    },
    Z: function () {
        return N;
    }
}),
    n(47120);
var o = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    r = n.n(s),
    u = n(481060),
    c = n(110924),
    d = n(600164),
    m = n(313201),
    b = n(237617),
    h = n(572539),
    _ = n(626135),
    g = n(63063),
    p = n(957115),
    f = n(531578),
    v = n(981631),
    x = n(388032),
    j = n(720816);
let C = [
    {
        className: j.emojiSad,
        rating: f.aZ.BAD,
        classNameSelected: j.selected
    },
    {
        className: j.emojiNeutral,
        rating: f.aZ.NEUTRAL,
        classNameSelected: j.selected
    },
    {
        className: j.emojiHappy,
        rating: f.aZ.GOOD,
        classNameSelected: j.selected
    }
];
function O(e) {
    let { className: t, selectedRating: n, ratingConfigs: i, onChangeRating: l } = e;
    return (0, o.jsx)(d.Z, {
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: a()(j.ratingsSelector, t),
        children: (null != i ? i : C).map((e) => {
            let { rating: t, className: i, classNameSelected: s } = e;
            return (0, o.jsx)(
                u.Clickable,
                {
                    onClick: () => l(t),
                    'aria-label': t,
                    children: (0, o.jsx)('div', { className: a()(i, n === t ? s : null) })
                },
                t
            );
        })
    });
}
function Z() {
    return (0, o.jsx)(u.Text, {
        className: j.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: x.intl.format(x.t.ybi2tL, { helpdeskURL: g.Z.getSubmitRequestURL() })
    });
}
function N(e) {
    let { modalType: t, header: n, body: l, problemTitle: s, problems: g, transitionState: C, ratingConfigs: N, feedbackProblems: k = [], otherKey: E, ratingsSelectorClassName: L, hideDontShowCheckbox: S, startRating: A = null, hideHelpDeskLink: I = !1, onSubmit: D, onClose: y } = e,
        B = (0, c.Z)(g),
        [R, T] = i.useState(!1),
        [w, M] = i.useState(A),
        [U, H] = i.useState(null),
        [F, K] = i.useState(r().shuffle(g)),
        [G, P] = i.useState(''),
        V = (0, m.Dt)(),
        z = (0, b.Z)(w),
        q = (0, b.Z)(R),
        W = (0, b.Z)(U),
        J = (0, b.Z)(D),
        Q = (0, b.Z)(G),
        X = null != U && k.includes(U);
    return (
        i.useEffect(() => {
            !r().isEqual(B, g) && K((0, p.B)(g, E));
        }, [g, B, E]),
        i.useEffect(
            () => (
                _.default.track(v.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    J.current({
                        rating: z.current,
                        problem: W.current,
                        dontShowAgain: q.current,
                        feedback: Q.current
                    });
                }
            ),
            []
        ),
        (0, o.jsxs)(u.ModalRoot, {
            transitionState: C,
            className: j.__invalid_modalRoot,
            'aria-labelledby': V,
            children: [
                (0, o.jsxs)(u.ModalHeader, {
                    separator: !1,
                    className: j.headerContainer,
                    children: [
                        (0, o.jsx)(u.Heading, {
                            id: V,
                            variant: 'heading-xl/extrabold',
                            color: 'none',
                            children: n
                        }),
                        (0, o.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            className: j.ratingBody,
                            children: l
                        }),
                        X
                            ? null
                            : (0, o.jsx)(O, {
                                  className: a()(j.emojis, L),
                                  selectedRating: w,
                                  onChangeRating: function (e) {
                                      M(e), e === f.aZ.GOOD && y();
                                  },
                                  ratingConfigs: N
                              })
                    ]
                }),
                (0, o.jsxs)(u.ModalContent, {
                    className: j.__invalid_content,
                    children: [
                        null == w || w === f.aZ.GOOD || X
                            ? null
                            : (0, o.jsx)(u.FormItem, {
                                  title: s,
                                  className: j.problemInfo,
                                  children: (0, o.jsx)(h.Z, {
                                      options: F,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          H(t), !k.includes(t) && y();
                                      },
                                      hideCaret: (e) => {
                                          let { value: t } = e;
                                          return !k.includes(t);
                                      }
                                  })
                              }),
                        X
                            ? (0, o.jsxs)(u.FormItem, {
                                  title: x.intl.string(x.t.h95hcn),
                                  className: j.problemInfo,
                                  children: [
                                      (0, o.jsx)(u.TextArea, {
                                          value: G,
                                          maxLength: f.iF,
                                          onChange: P
                                      }),
                                      !I && (0, o.jsx)(Z, {})
                                  ]
                              })
                            : null
                    ]
                }),
                (X || !S) &&
                    (0, o.jsx)(u.ModalFooter, {
                        className: j.footer,
                        direction: d.Z.Direction.HORIZONTAL,
                        children: X
                            ? (0, o.jsxs)(o.Fragment, {
                                  children: [
                                      (0, o.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          look: u.Button.Looks.LINK,
                                          color: u.Button.Colors.PRIMARY,
                                          onClick: () => {
                                              H(null), P('');
                                          },
                                          children: x.intl.string(x.t['13/7kZ'])
                                      }),
                                      (0, o.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          onClick: y,
                                          children: x.intl.string(x.t.geKm7u)
                                      })
                                  ]
                              })
                            : (0, o.jsxs)(o.Fragment, {
                                  children: [
                                      (0, o.jsx)(u.Checkbox, {
                                          type: u.Checkbox.Types.INVERTED,
                                          size: 18,
                                          value: R,
                                          onChange: () => T(!R),
                                          children: (0, o.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              children: x.intl.string(x.t['5E9SBw'])
                                          })
                                      }),
                                      null != w &&
                                          w !== f.aZ.GOOD &&
                                          (0, o.jsx)(u.Button, {
                                              type: 'submit',
                                              size: u.Button.Sizes.SMALL,
                                              onClick: y,
                                              children: x.intl.string(x.t['5WxrcX'])
                                          })
                                  ]
                              })
                    })
            ]
        })
    );
}
