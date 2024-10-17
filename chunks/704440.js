n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(773603),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(913527),
    l = n.n(o),
    u = n(235874),
    c = n(481060),
    d = n(37234),
    _ = n(100527),
    E = n(906732),
    f = n(626135),
    h = n(55935),
    p = n(63063),
    I = n(281494),
    m = n(790368),
    T = n(474936),
    S = n(981631),
    g = n(689938),
    A = n(776222),
    N = n(751599),
    R = n(397293),
    O = n(352175),
    v = n(90351);
let C = async (e, t, n) => {
        n(!0),
            await (0, I.Eo)(e)
                .then(() => {
                    t(), (0, d.Ou)();
                })
                .finally(() => {
                    n(!1);
                });
    },
    L = (e) => {
        let { onClose: t, referralsRemaining: n, recipient: a, analyticsLocations: o, shouldShowBirthdayUX: l } = e,
            [u, d] = i.useState(!1),
            _ = n - 1;
        return (0, r.jsxs)('div', {
            className: A.confirmationContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: s()({
                        [A.confirmationBody]: !l,
                        [A.confirmationBirthdayBody]: l
                    }),
                    children: [
                        (0, r.jsx)(c.ModalCloseButton, {
                            onClick: t,
                            className: A.closeButton
                        }),
                        (0, r.jsx)('img', {
                            alt: '',
                            src: l ? R : O,
                            className: A.confirmationImage
                        }),
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            color: 'interactive-active',
                            className: A.confirmationHeading,
                            children: g.Z.Messages.SAHRE_NITRO_MODAL_CONFIRMATION_HEADER
                        }),
                        (0, r.jsx)(c.Text, {
                            className: A.confirmationBodyCopy,
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: _ > 0 ? g.Z.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL.format({ count: _ }) : g.Z.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL_LAST_REFERRAL
                        }),
                        (0, r.jsx)('hr', { className: A.confirmationBodySeparator })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: A.confirmationButtonContainer,
                    children: [
                        (0, r.jsx)(c.Button, {
                            className: A.confirmationShareButton,
                            submitting: u,
                            onClick: () => {
                                C(a, t, d),
                                    f.default.track(S.rMx.SHARE_NITRO_FLOW_STEPS, {
                                        location_stack: o,
                                        step: T.fz.FLOW_COMPLETED,
                                        other_user_id: Number(a)
                                    });
                            },
                            children: g.Z.Messages.SHAER_NITRO_CONFIRMATION_BUTTON_TEXT
                        }),
                        (0, r.jsx)('div', {
                            className: A.confirmationCancelButtonContainer,
                            children: (0, r.jsx)(c.Clickable, {
                                onClick: t,
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    className: A.confirmationCancelCopy,
                                    children: g.Z.Messages.CANCEL
                                })
                            })
                        })
                    ]
                })
            ]
        });
    };
function D(e) {
    let { referralsRemaining: t, channel: n, onClose: a, isResending: o } = e,
        [u, d] = i.useState(!1),
        [I, O] = i.useState(!1),
        D = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null,
        { analyticsLocations: y } = (0, E.ZP)(_.Z.REFERRAL_TRIALS_POPOUT),
        { enabled: b } = m.Z.useExperiment({ location: '200c24_1' }, { autoTrackExposure: !0 }),
        M = new Date('2023-06-15T08:00:00-08:00');
    return null == D
        ? null
        : u
          ? (0, r.jsx)(L, {
                onClose: a,
                referralsRemaining: t,
                recipient: D,
                analyticsLocations: y,
                shouldShowBirthdayUX: b
            })
          : (0, r.jsxs)('div', {
                className: A.generalContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: A.generalBodyContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: b ? R : v,
                                className: A.generalBodyImage
                            }),
                            (0, r.jsxs)('div', {
                                className: A.innerContent,
                                children: [
                                    (0, r.jsx)(c.ModalCloseButton, {
                                        onClick: a,
                                        className: A.closeButton
                                    }),
                                    (0, r.jsx)(c.Heading, {
                                        className: A.generalHeading,
                                        variant: 'heading-xl/bold',
                                        children: o ? g.Z.Messages.SHARE_NITRO_RESEND_TRIAL_HEADER : g.Z.Messages.SHARE_NITRO_MODAL_HEADER
                                    }),
                                    (0, r.jsxs)(c.Text, {
                                        className: A.generalBodyCopy,
                                        variant: 'text-md/normal',
                                        children: [
                                            (0, r.jsx)(c.Anchor, {
                                                className: s()(A.learnMore, { [A.learnMoreResendUnderlinedText]: o }),
                                                href: p.Z.getArticleURL(S.BhN.SHARE_NITRO_FAQ),
                                                children: o ? g.Z.Messages.SHARE_NITRO_RESEND_TRIAL_BODY : g.Z.Messages.SHARE_NITRO_MODAL_BODY_GENERAL.format({ count: t })
                                            }),
                                            o
                                                ? (0, r.jsx)('div', {
                                                      className: A.shareNitroResendCopySuffix,
                                                      children: g.Z.Messages.SHARE_NITRO_RESEND_TRIAL_BODY_2
                                                  })
                                                : (0, r.jsx)('div', { children: g.Z.Messages.SHARE_NITRO_MODAL_BODY_SHARE_THEM_BY.format({ date: (0, h.vc)(l()(M), 'LL') }) })
                                        ]
                                    })
                                ]
                            }),
                            b &&
                                (0, r.jsx)('img', {
                                    alt: '',
                                    src: N,
                                    className: A.birthdayBackgroundImage
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: A.generalButtonContainer,
                        children: (0, r.jsx)(c.Button, {
                            className: A.generalShareButton,
                            submitting: I,
                            onClick: () => {
                                o
                                    ? C(D, a, O)
                                    : (d(!0),
                                      f.default.track(S.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: y,
                                          step: T.fz.FLOW_STARTED,
                                          other_user_id: Number(D)
                                      }));
                            },
                            children: o ? g.Z.Messages.SHARE_NITRO_RESEND_BUTTON_TEXT : g.Z.Messages.SHARE_NITRO_BUTTON_TEXT
                        })
                    })
                ]
            });
}
function y(e) {
    let { shouldShowPopout: t, referralsRemaining: n, channel: i, onClose: a, isResending: s } = e;
    return t
        ? (0, r.jsx)('div', {
              onMouseDown: (e) => e.stopPropagation(),
              children: (0, r.jsx)(u.y, {
                  shouldShow: !0,
                  position: 'top',
                  align: 'center',
                  renderPopout: (e) =>
                      (0, r.jsx)(D, {
                          ...e,
                          referralsRemaining: n,
                          channel: i,
                          onClose: a,
                          isResending: s
                      }),
                  onRequestClose: () => void 0,
                  closeOnScroll: !1,
                  ignoreModalClicks: !0,
                  children: () => (0, r.jsx)('div', { className: A.__invalid_popoutTarget })
              })
          })
        : null;
}
