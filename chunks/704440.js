n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(773603),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(913527),
    l = n.n(o),
    u = n(235874),
    c = n(481060),
    d = n(37234),
    f = n(100527),
    _ = n(906732),
    p = n(626135),
    h = n(55935),
    m = n(63063),
    g = n(281494),
    E = n(790368),
    v = n(474936),
    b = n(981631),
    I = n(388032),
    S = n(29542),
    T = n(751599),
    y = n(397293),
    A = n(352175),
    N = n(90351);
let C = async (e, t, n) => {
        n(!0),
            await (0, g.Eo)(e)
                .then(() => {
                    t(), (0, d.Ou)();
                })
                .finally(() => {
                    n(!1);
                });
    },
    R = (e) => {
        let { onClose: t, referralsRemaining: n, recipient: a, analyticsLocations: o, shouldShowBirthdayUX: l } = e,
            [u, d] = i.useState(!1),
            f = n - 1;
        return (0, r.jsxs)('div', {
            className: S.confirmationContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: s()({
                        [S.confirmationBody]: !l,
                        [S.confirmationBirthdayBody]: l
                    }),
                    children: [
                        (0, r.jsx)(c.ModalCloseButton, {
                            onClick: t,
                            className: S.closeButton
                        }),
                        (0, r.jsx)('img', {
                            alt: '',
                            src: l ? y : A,
                            className: S.confirmationImage
                        }),
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            color: 'interactive-active',
                            className: S.confirmationHeading,
                            children: I.intl.string(I.t.dF5azM)
                        }),
                        (0, r.jsx)(c.Text, {
                            className: S.confirmationBodyCopy,
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: f > 0 ? I.intl.formatToPlainString(I.t['J/tYnp'], { count: f }) : I.intl.string(I.t.vVnRxc)
                        }),
                        (0, r.jsx)('hr', { className: S.confirmationBodySeparator })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: S.confirmationButtonContainer,
                    children: [
                        (0, r.jsx)(c.Button, {
                            className: S.confirmationShareButton,
                            submitting: u,
                            onClick: () => {
                                C(a, t, d),
                                    p.default.track(b.rMx.SHARE_NITRO_FLOW_STEPS, {
                                        location_stack: o,
                                        step: v.fz.FLOW_COMPLETED,
                                        other_user_id: Number(a)
                                    });
                            },
                            children: I.intl.string(I.t['zxlx6+'])
                        }),
                        (0, r.jsx)('div', {
                            className: S.confirmationCancelButtonContainer,
                            children: (0, r.jsx)(c.Clickable, {
                                onClick: t,
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    className: S.confirmationCancelCopy,
                                    children: I.intl.string(I.t['ETE/oK'])
                                })
                            })
                        })
                    ]
                })
            ]
        });
    };
function O(e) {
    let { referralsRemaining: t, channel: n, onClose: a, isResending: o } = e,
        [u, d] = i.useState(!1),
        [g, A] = i.useState(!1),
        O = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null,
        { analyticsLocations: D } = (0, _.ZP)(f.Z.REFERRAL_TRIALS_POPOUT),
        { enabled: L } = E.Z.useExperiment({ location: '200c24_1' }, { autoTrackExposure: !0 }),
        x = new Date('2023-06-15T08:00:00-08:00');
    return null == O
        ? null
        : u
          ? (0, r.jsx)(R, {
                onClose: a,
                referralsRemaining: t,
                recipient: O,
                analyticsLocations: D,
                shouldShowBirthdayUX: L
            })
          : (0, r.jsxs)('div', {
                className: S.generalContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: S.generalBodyContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: L ? y : N,
                                className: S.generalBodyImage
                            }),
                            (0, r.jsxs)('div', {
                                className: S.innerContent,
                                children: [
                                    (0, r.jsx)(c.ModalCloseButton, {
                                        onClick: a,
                                        className: S.closeButton
                                    }),
                                    (0, r.jsx)(c.Heading, {
                                        className: S.generalHeading,
                                        variant: 'heading-xl/bold',
                                        children: o ? I.intl.string(I.t.yCN5Qk) : I.intl.string(I.t.c1wxcX)
                                    }),
                                    (0, r.jsxs)(c.Text, {
                                        className: S.generalBodyCopy,
                                        variant: 'text-md/normal',
                                        children: [
                                            (0, r.jsx)(c.Anchor, {
                                                className: s()(S.learnMore, { [S.learnMoreResendUnderlinedText]: o }),
                                                href: m.Z.getArticleURL(b.BhN.SHARE_NITRO_FAQ),
                                                children: o ? I.intl.string(I.t.yJfqPT) : I.intl.format(I.t['+Z4ey8'], { count: t })
                                            }),
                                            o
                                                ? (0, r.jsx)('div', {
                                                      className: S.shareNitroResendCopySuffix,
                                                      children: I.intl.string(I.t['b0B69/'])
                                                  })
                                                : (0, r.jsx)('div', { children: I.intl.format(I.t['58lPt7'], { date: (0, h.vc)(l()(x), 'LL') }) })
                                        ]
                                    })
                                ]
                            }),
                            L &&
                                (0, r.jsx)('img', {
                                    alt: '',
                                    src: T,
                                    className: S.birthdayBackgroundImage
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: S.generalButtonContainer,
                        children: (0, r.jsx)(c.Button, {
                            className: S.generalShareButton,
                            submitting: g,
                            onClick: () => {
                                o
                                    ? C(O, a, A)
                                    : (d(!0),
                                      p.default.track(b.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: D,
                                          step: v.fz.FLOW_STARTED,
                                          other_user_id: Number(O)
                                      }));
                            },
                            children: o ? I.intl.string(I.t.awsERE) : I.intl.string(I.t.Ago7Zm)
                        })
                    })
                ]
            });
}
function D(e) {
    let { shouldShowPopout: t, referralsRemaining: n, channel: i, onClose: a, isResending: s } = e;
    return t
        ? (0, r.jsx)('div', {
              onMouseDown: (e) => e.stopPropagation(),
              children: (0, r.jsx)(u.y, {
                  shouldShow: !0,
                  position: 'top',
                  align: 'center',
                  renderPopout: (e) =>
                      (0, r.jsx)(O, {
                          ...e,
                          referralsRemaining: n,
                          channel: i,
                          onClose: a,
                          isResending: s
                      }),
                  onRequestClose: () => void 0,
                  closeOnScroll: !1,
                  ignoreModalClicks: !0,
                  children: () => (0, r.jsx)('div', { className: S.__invalid_popoutTarget })
              })
          })
        : null;
}
