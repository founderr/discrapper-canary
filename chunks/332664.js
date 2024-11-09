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
    b = n(313201),
    m = n(237617),
    h = n(572539),
    _ = n(626135),
    p = n(63063),
    g = n(957115),
    f = n(871364),
    v = n(531578),
    x = n(981631),
    k = n(388032),
    j = n(214859);
let C = [
    {
        className: j.emojiSad,
        rating: v.aZ.BAD,
        classNameSelected: j.selected
    },
    {
        className: j.emojiNeutral,
        rating: v.aZ.NEUTRAL,
        classNameSelected: j.selected
    },
    {
        className: j.emojiHappy,
        rating: v.aZ.GOOD,
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
        children: k.intl.format(k.t.ybi2tL, { helpdeskURL: p.Z.getSubmitRequestURL() })
    });
}
function N(e) {
    let { modalType: t, header: n, body: l, problemTitle: s, problems: p, transitionState: C, ratingConfigs: N, feedbackProblems: S = [], otherKey: E, ratingsSelectorClassName: A, hideDontShowCheckbox: L, startRating: I = null, hideHelpDeskLink: D = !1, onSubmit: y, onClose: B } = e,
        w = (0, c.Z)(p),
        [R, T] = i.useState(!1),
        [M, U] = i.useState(I),
        [H, F] = i.useState(null),
        [K, G] = i.useState(r().shuffle(p)),
        [P, V] = i.useState(''),
        z = (0, b.Dt)(),
        q = (0, m.Z)(M),
        W = (0, m.Z)(R),
        J = (0, m.Z)(H),
        Q = (0, m.Z)(y),
        X = (0, m.Z)(P),
        Y = null != H && S.includes(H),
        { renderSkipButton: $ } = f.w.useExperiment({ location: 'FeedbackModal' });
    return (
        i.useEffect(() => {
            !r().isEqual(w, p) && G((0, g.B)(p, E));
        }, [p, w, E]),
        i.useEffect(
            () => (
                _.default.track(x.rMx.OPEN_MODAL, {
                    type: t,
                    source: 'Feedback Modal'
                }),
                () => {
                    Q.current({
                        rating: q.current,
                        problem: J.current,
                        dontShowAgain: W.current,
                        feedback: X.current
                    });
                }
            ),
            []
        ),
        (0, o.jsxs)(u.ModalRoot, {
            transitionState: C,
            className: j.__invalid_modalRoot,
            'aria-labelledby': z,
            children: [
                (0, o.jsxs)(u.ModalHeader, {
                    separator: !1,
                    className: j.headerContainer,
                    children: [
                        (0, o.jsx)(u.Heading, {
                            id: z,
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
                        Y
                            ? null
                            : (0, o.jsx)(O, {
                                  className: a()(j.emojis, A),
                                  selectedRating: M,
                                  onChangeRating: function (e) {
                                      U(e), e === v.aZ.GOOD && B();
                                  },
                                  ratingConfigs: N
                              })
                    ]
                }),
                (0, o.jsxs)(u.ModalContent, {
                    className: j.__invalid_content,
                    children: [
                        null == M || M === v.aZ.GOOD || Y
                            ? null
                            : (0, o.jsx)(u.FormItem, {
                                  title: s,
                                  className: j.problemInfo,
                                  children: (0, o.jsx)(h.Z, {
                                      options: K,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          F(t), !S.includes(t) && B();
                                      },
                                      hideCaret: (e) => {
                                          let { value: t } = e;
                                          return !S.includes(t);
                                      }
                                  })
                              }),
                        Y
                            ? (0, o.jsxs)(u.FormItem, {
                                  title: k.intl.string(k.t.h95hcn),
                                  className: j.problemInfo,
                                  children: [
                                      (0, o.jsx)(u.TextArea, {
                                          value: P,
                                          maxLength: v.iF,
                                          onChange: V
                                      }),
                                      !D && (0, o.jsx)(Z, {})
                                  ]
                              })
                            : null
                    ]
                }),
                (Y || !L) &&
                    (0, o.jsx)(u.ModalFooter, {
                        className: j.footer,
                        direction: d.Z.Direction.HORIZONTAL,
                        children: Y
                            ? (0, o.jsxs)(o.Fragment, {
                                  children: [
                                      (0, o.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          look: u.Button.Looks.LINK,
                                          color: u.Button.Colors.PRIMARY,
                                          onClick: () => {
                                              F(null), V('');
                                          },
                                          children: k.intl.string(k.t['13/7kZ'])
                                      }),
                                      (0, o.jsx)(u.Button, {
                                          size: u.Button.Sizes.SMALL,
                                          onClick: B,
                                          children: k.intl.string(k.t.geKm7u)
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
                                              children: k.intl.string(k.t['5E9SBw'])
                                          })
                                      }),
                                      $ &&
                                          null != M &&
                                          M !== v.aZ.GOOD &&
                                          (0, o.jsx)(u.Button, {
                                              type: 'submit',
                                              size: u.Button.Sizes.SMALL,
                                              onClick: B,
                                              children: k.intl.string(k.t['5WxrcX'])
                                          })
                                  ]
                              })
                    })
            ]
        })
    );
}
