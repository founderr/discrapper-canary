n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(355467),
    h = n(100527),
    g = n(906732),
    p = n(600164),
    x = n(210887),
    S = n(301766),
    T = n(509545),
    C = n(74538),
    E = n(937615),
    _ = n(388032),
    I = n(742652);
function f(e) {
    let { subscription: t, renewalMutations: n, transitionState: s, onClose: r, analyticsLocation: l } = e,
        a = (0, c.e7)([x.Z], () => x.Z.theme),
        { analyticsLocations: f } = (0, g.ZP)(h.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
    async function N() {
        await (0, m.dP)(t, t.planId, f, l), r();
    }
    let A = T.Z.get(t.planId);
    o()(null != A, 'Missing subscriptionPlan');
    let b = (0, C.aS)(t.planId, !1, !1, {
            paymentSourceId: t.paymentSourceId,
            currency: t.currency
        }),
        v = (0, E.og)((0, E.T4)(b.amount, b.currency), A.interval, A.intervalCount);
    return (0, i.jsxs)(u.ModalRoot, {
        transitionState: s,
        'aria-label': _.intl.string(_.t['E9kB4+']),
        children: [
            (0, i.jsxs)(u.ModalHeader, {
                justify: p.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H4,
                        children: _.intl.string(_.t['E9kB4+'])
                    }),
                    (0, i.jsx)(u.ModalCloseButton, { onClick: r })
                ]
            }),
            (0, i.jsx)(u.ModalContent, {
                className: I.modalBody,
                children: (0, S.Q0)(t.planId)
                    ? _.intl.format(_.t.GMp54O, {
                          downgradedPlan: C.ZP.getDisplayName(n.planId),
                          existingRate: v
                      })
                    : _.intl.format(_.t['vx/NZ2'], {
                          existingPlan: C.ZP.getDisplayName(t.planId),
                          downgradedPlan: C.ZP.getDisplayName(n.planId),
                          existingRate: v
                      })
            }),
            (0, i.jsxs)(u.ModalFooter, {
                children: [
                    (0, i.jsx)(u.Button, {
                        onClick: N,
                        children: _.intl.string(_.t.frE8KC)
                    }),
                    (0, i.jsx)(u.Button, {
                        look: u.Button.Looks.LINK,
                        color: (0, d.ap)(a) ? u.Button.Colors.PRIMARY : u.Button.Colors.WHITE,
                        onClick: r,
                        children: _.intl.string(_.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function N(e) {
    let { subscription: t, renewalMutations: n, className: r, analyticsLocation: a } = e,
        [o, c] = s.useState(!1);
    return (0, i.jsxs)('div', {
        className: l()(I.root, r),
        children: [
            (0, i.jsx)(u.CircleWarningIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: I.infoIcon
            }),
            (0, i.jsx)('div', {
                className: I.text,
                children: _.intl.format(_.t.ar1cPj, {
                    planName: t.hasExternalPlanChange ? (0, C.zL)(n) : C.ZP.getDisplayName(n.planId),
                    date: t.currentPeriodEnd
                })
            }),
            t.isPurchasedExternally
                ? null
                : (0, i.jsx)(u.Anchor, {
                      onClick: (e) => {
                          c(!0), e.preventDefault();
                      },
                      className: I.cancelLink,
                      children: _.intl.string(_.t['ETE/oK'])
                  }),
            o
                ? (0, i.jsx)(u.Modal, {
                      renderModal: (e) => {
                          let { transitionState: s } = e;
                          return (0, i.jsx)(f, {
                              subscription: t,
                              renewalMutations: n,
                              transitionState: s,
                              onClose: () => c(!1),
                              analyticsLocation: a
                          });
                      },
                      onCloseRequest: () => c(!1)
                  })
                : null
        ]
    });
}
