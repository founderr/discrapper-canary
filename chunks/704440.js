r.d(n, {
    Z: function () {
        return w;
    }
});
var i = r(773603);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(913527),
    d = r.n(c),
    f = r(235874),
    _ = r(481060),
    h = r(37234),
    p = r(100527),
    m = r(906732),
    g = r(626135),
    E = r(55935),
    v = r(63063),
    I = r(281494),
    T = r(790368),
    b = r(474936),
    y = r(981631),
    S = r(388032),
    A = r(735633),
    N = r(751599),
    C = r(397293),
    R = r(352175),
    O = r(90351);
let D = async (e, n, r) => {
        r(!0),
            await (0, I.Eo)(e)
                .then(() => {
                    n(), (0, h.Ou)();
                })
                .finally(() => {
                    r(!1);
                });
    },
    L = (e) => {
        let { onClose: n, referralsRemaining: r, recipient: i, analyticsLocations: a, shouldShowBirthdayUX: l } = e,
            [c, d] = o.useState(!1),
            f = r - 1;
        return (0, s.jsxs)('div', {
            className: A.confirmationContainer,
            children: [
                (0, s.jsxs)('div', {
                    className: u()({
                        [A.confirmationBody]: !l,
                        [A.confirmationBirthdayBody]: l
                    }),
                    children: [
                        (0, s.jsx)(_.ModalCloseButton, {
                            onClick: n,
                            className: A.closeButton
                        }),
                        (0, s.jsx)('img', {
                            alt: '',
                            src: l ? C : R,
                            className: A.confirmationImage
                        }),
                        (0, s.jsx)(_.Heading, {
                            variant: 'heading-xl/bold',
                            color: 'interactive-active',
                            className: A.confirmationHeading,
                            children: S.intl.string(S.t.dF5azM)
                        }),
                        (0, s.jsx)(_.Text, {
                            className: A.confirmationBodyCopy,
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: f > 0 ? S.intl.formatToPlainString(S.t['J/tYnp'], { count: f }) : S.intl.string(S.t.vVnRxc)
                        }),
                        (0, s.jsx)('hr', { className: A.confirmationBodySeparator })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: A.confirmationButtonContainer,
                    children: [
                        (0, s.jsx)(_.Button, {
                            className: A.confirmationShareButton,
                            submitting: c,
                            onClick: () => {
                                D(i, n, d),
                                    g.default.track(y.rMx.SHARE_NITRO_FLOW_STEPS, {
                                        location_stack: a,
                                        step: b.fz.FLOW_COMPLETED,
                                        other_user_id: Number(i)
                                    });
                            },
                            children: S.intl.string(S.t['zxlx6+'])
                        }),
                        (0, s.jsx)('div', {
                            className: A.confirmationCancelButtonContainer,
                            children: (0, s.jsx)(_.Clickable, {
                                onClick: n,
                                children: (0, s.jsx)(_.Text, {
                                    variant: 'text-sm/medium',
                                    className: A.confirmationCancelCopy,
                                    children: S.intl.string(S.t['ETE/oK'])
                                })
                            })
                        })
                    ]
                })
            ]
        });
    };
function x(e) {
    let { referralsRemaining: n, channel: r, onClose: i, isResending: a } = e,
        [l, c] = o.useState(!1),
        [f, h] = o.useState(!1),
        I = r.isDM() && void 0 !== r.recipients ? r.recipients[0] : null,
        { analyticsLocations: R } = (0, m.ZP)(p.Z.REFERRAL_TRIALS_POPOUT),
        { enabled: x } = T.Z.useExperiment({ location: '200c24_1' }, { autoTrackExposure: !0 }),
        w = new Date('2023-06-15T08:00:00-08:00');
    return null == I
        ? null
        : l
          ? (0, s.jsx)(L, {
                onClose: i,
                referralsRemaining: n,
                recipient: I,
                analyticsLocations: R,
                shouldShowBirthdayUX: x
            })
          : (0, s.jsxs)('div', {
                className: A.generalContainer,
                children: [
                    (0, s.jsxs)('div', {
                        className: A.generalBodyContainer,
                        children: [
                            (0, s.jsx)('img', {
                                alt: '',
                                src: x ? C : O,
                                className: A.generalBodyImage
                            }),
                            (0, s.jsxs)('div', {
                                className: A.innerContent,
                                children: [
                                    (0, s.jsx)(_.ModalCloseButton, {
                                        onClick: i,
                                        className: A.closeButton
                                    }),
                                    (0, s.jsx)(_.Heading, {
                                        className: A.generalHeading,
                                        variant: 'heading-xl/bold',
                                        children: a ? S.intl.string(S.t.yCN5Qk) : S.intl.string(S.t.c1wxcX)
                                    }),
                                    (0, s.jsxs)(_.Text, {
                                        className: A.generalBodyCopy,
                                        variant: 'text-md/normal',
                                        children: [
                                            (0, s.jsx)(_.Anchor, {
                                                className: u()(A.learnMore, { [A.learnMoreResendUnderlinedText]: a }),
                                                href: v.Z.getArticleURL(y.BhN.SHARE_NITRO_FAQ),
                                                children: a ? S.intl.string(S.t.yJfqPT) : S.intl.format(S.t['+Z4ey8'], { count: n })
                                            }),
                                            a
                                                ? (0, s.jsx)('div', {
                                                      className: A.shareNitroResendCopySuffix,
                                                      children: S.intl.string(S.t['b0B69/'])
                                                  })
                                                : (0, s.jsx)('div', { children: S.intl.format(S.t['58lPt7'], { date: (0, E.vc)(d()(w), 'LL') }) })
                                        ]
                                    })
                                ]
                            }),
                            x &&
                                (0, s.jsx)('img', {
                                    alt: '',
                                    src: N,
                                    className: A.birthdayBackgroundImage
                                })
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: A.generalButtonContainer,
                        children: (0, s.jsx)(_.Button, {
                            className: A.generalShareButton,
                            submitting: f,
                            onClick: () => {
                                a
                                    ? D(I, i, h)
                                    : (c(!0),
                                      g.default.track(y.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: R,
                                          step: b.fz.FLOW_STARTED,
                                          other_user_id: Number(I)
                                      }));
                            },
                            children: a ? S.intl.string(S.t.awsERE) : S.intl.string(S.t.Ago7Zm)
                        })
                    })
                ]
            });
}
function w(e) {
    let { shouldShowPopout: n, referralsRemaining: r, channel: i, onClose: a, isResending: o } = e;
    return n
        ? (0, s.jsx)('div', {
              onMouseDown: (e) => e.stopPropagation(),
              children: (0, s.jsx)(f.y, {
                  shouldShow: !0,
                  position: 'top',
                  align: 'center',
                  renderPopout: (e) =>
                      (0, s.jsx)(x, {
                          ...e,
                          referralsRemaining: r,
                          channel: i,
                          onClose: a,
                          isResending: o
                      }),
                  onRequestClose: () => void 0,
                  closeOnScroll: !1,
                  ignoreModalClicks: !0,
                  children: () => (0, s.jsx)('div', { className: A.__invalid_popoutTarget })
              })
          })
        : null;
}
