n.d(t, {
    Z: function () {
        return M;
    }
});
var r = n(773603);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(913527),
    c = n.n(u),
    d = n(235874),
    _ = n(481060),
    E = n(37234),
    f = n(100527),
    h = n(906732),
    p = n(626135),
    m = n(55935),
    I = n(63063),
    T = n(281494),
    g = n(790368),
    S = n(474936),
    A = n(981631),
    v = n(689938),
    N = n(776222),
    O = n(751599),
    R = n(397293),
    C = n(352175),
    y = n(90351);
let b = async (e, t, n) => {
        n(!0),
            await (0, T.Eo)(e)
                .then(() => {
                    t(), (0, E.Ou)();
                })
                .finally(() => {
                    n(!1);
                });
    },
    L = (e) => {
        let { onClose: t, referralsRemaining: n, recipient: r, analyticsLocations: i, shouldShowBirthdayUX: s } = e,
            [u, c] = o.useState(!1),
            d = n - 1;
        return (0, a.jsxs)('div', {
            className: N.confirmationContainer,
            children: [
                (0, a.jsxs)('div', {
                    className: l()({
                        [N.confirmationBody]: !s,
                        [N.confirmationBirthdayBody]: s
                    }),
                    children: [
                        (0, a.jsx)(_.ModalCloseButton, {
                            onClick: t,
                            className: N.closeButton
                        }),
                        (0, a.jsx)('img', {
                            alt: '',
                            src: s ? R : C,
                            className: N.confirmationImage
                        }),
                        (0, a.jsx)(_.Heading, {
                            variant: 'heading-xl/bold',
                            color: 'interactive-active',
                            className: N.confirmationHeading,
                            children: v.Z.Messages.SAHRE_NITRO_MODAL_CONFIRMATION_HEADER
                        }),
                        (0, a.jsx)(_.Text, {
                            className: N.confirmationBodyCopy,
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: d > 0 ? v.Z.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL.format({ count: d }) : v.Z.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL_LAST_REFERRAL
                        }),
                        (0, a.jsx)('hr', { className: N.confirmationBodySeparator })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: N.confirmationButtonContainer,
                    children: [
                        (0, a.jsx)(_.Button, {
                            className: N.confirmationShareButton,
                            submitting: u,
                            onClick: () => {
                                b(r, t, c),
                                    p.default.track(A.rMx.SHARE_NITRO_FLOW_STEPS, {
                                        location_stack: i,
                                        step: S.fz.FLOW_COMPLETED,
                                        other_user_id: Number(r)
                                    });
                            },
                            children: v.Z.Messages.SHAER_NITRO_CONFIRMATION_BUTTON_TEXT
                        }),
                        (0, a.jsx)('div', {
                            className: N.confirmationCancelButtonContainer,
                            children: (0, a.jsx)(_.Clickable, {
                                onClick: t,
                                children: (0, a.jsx)(_.Text, {
                                    variant: 'text-sm/medium',
                                    className: N.confirmationCancelCopy,
                                    children: v.Z.Messages.CANCEL
                                })
                            })
                        })
                    ]
                })
            ]
        });
    };
function D(e) {
    let { referralsRemaining: t, channel: n, onClose: r, isResending: i } = e,
        [s, u] = o.useState(!1),
        [d, E] = o.useState(!1),
        T = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null,
        { analyticsLocations: C } = (0, h.ZP)(f.Z.REFERRAL_TRIALS_POPOUT),
        { enabled: D } = g.Z.useExperiment({ location: '200c24_1' }, { autoTrackExposure: !0 }),
        M = new Date('2023-06-15T08:00:00-08:00');
    return null == T
        ? null
        : s
          ? (0, a.jsx)(L, {
                onClose: r,
                referralsRemaining: t,
                recipient: T,
                analyticsLocations: C,
                shouldShowBirthdayUX: D
            })
          : (0, a.jsxs)('div', {
                className: N.generalContainer,
                children: [
                    (0, a.jsxs)('div', {
                        className: N.generalBodyContainer,
                        children: [
                            (0, a.jsx)('img', {
                                alt: '',
                                src: D ? R : y,
                                className: N.generalBodyImage
                            }),
                            (0, a.jsxs)('div', {
                                className: N.innerContent,
                                children: [
                                    (0, a.jsx)(_.ModalCloseButton, {
                                        onClick: r,
                                        className: N.closeButton
                                    }),
                                    (0, a.jsx)(_.Heading, {
                                        className: N.generalHeading,
                                        variant: 'heading-xl/bold',
                                        children: i ? v.Z.Messages.SHARE_NITRO_RESEND_TRIAL_HEADER : v.Z.Messages.SHARE_NITRO_MODAL_HEADER
                                    }),
                                    (0, a.jsxs)(_.Text, {
                                        className: N.generalBodyCopy,
                                        variant: 'text-md/normal',
                                        children: [
                                            (0, a.jsx)(_.Anchor, {
                                                className: l()(N.learnMore, { [N.learnMoreResendUnderlinedText]: i }),
                                                href: I.Z.getArticleURL(A.BhN.SHARE_NITRO_FAQ),
                                                children: i ? v.Z.Messages.SHARE_NITRO_RESEND_TRIAL_BODY : v.Z.Messages.SHARE_NITRO_MODAL_BODY_GENERAL.format({ count: t })
                                            }),
                                            i
                                                ? (0, a.jsx)('div', {
                                                      className: N.shareNitroResendCopySuffix,
                                                      children: v.Z.Messages.SHARE_NITRO_RESEND_TRIAL_BODY_2
                                                  })
                                                : (0, a.jsx)('div', { children: v.Z.Messages.SHARE_NITRO_MODAL_BODY_SHARE_THEM_BY.format({ date: (0, m.vc)(c()(M), 'LL') }) })
                                        ]
                                    })
                                ]
                            }),
                            D &&
                                (0, a.jsx)('img', {
                                    alt: '',
                                    src: O,
                                    className: N.birthdayBackgroundImage
                                })
                        ]
                    }),
                    (0, a.jsx)('div', {
                        className: N.generalButtonContainer,
                        children: (0, a.jsx)(_.Button, {
                            className: N.generalShareButton,
                            submitting: d,
                            onClick: () => {
                                i
                                    ? b(T, r, E)
                                    : (u(!0),
                                      p.default.track(A.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: C,
                                          step: S.fz.FLOW_STARTED,
                                          other_user_id: Number(T)
                                      }));
                            },
                            children: i ? v.Z.Messages.SHARE_NITRO_RESEND_BUTTON_TEXT : v.Z.Messages.SHARE_NITRO_BUTTON_TEXT
                        })
                    })
                ]
            });
}
function M(e) {
    let { shouldShowPopout: t, referralsRemaining: n, channel: r, onClose: i, isResending: o } = e;
    return t
        ? (0, a.jsx)('div', {
              onMouseDown: (e) => e.stopPropagation(),
              children: (0, a.jsx)(d.y, {
                  shouldShow: !0,
                  position: 'top',
                  align: 'center',
                  renderPopout: (e) =>
                      (0, a.jsx)(D, {
                          ...e,
                          referralsRemaining: n,
                          channel: r,
                          onClose: i,
                          isResending: o
                      }),
                  onRequestClose: () => void 0,
                  closeOnScroll: !1,
                  ignoreModalClicks: !0,
                  children: () => (0, a.jsx)('div', { className: N.__invalid_popoutTarget })
              })
          })
        : null;
}
