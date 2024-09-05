t.d(s, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(512722),
    l = t.n(o),
    c = t(442837),
    d = t(780384),
    u = t(481060),
    _ = t(355467),
    E = t(100527),
    T = t(906732),
    S = t(600164),
    I = t(210887),
    N = t(301766),
    m = t(509545),
    C = t(74538),
    g = t(937615),
    A = t(689938),
    h = t(981129);
function O(e) {
    let { subscription: s, renewalMutations: t, transitionState: a, onClose: i, analyticsLocation: r } = e,
        o = (0, c.e7)([I.Z], () => I.Z.theme),
        { analyticsLocations: O } = (0, T.ZP)(E.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
    async function p() {
        await (0, _.dP)(s, s.planId, O, r), i();
    }
    let R = m.Z.get(s.planId);
    l()(null != R, 'Missing subscriptionPlan');
    let x = (0, C.aS)(s.planId, !1, !1, {
            paymentSourceId: s.paymentSourceId,
            currency: s.currency
        }),
        f = (0, g.og)((0, g.T4)(x.amount, x.currency), R.interval, R.intervalCount);
    return (0, n.jsxs)(u.ModalRoot, {
        transitionState: a,
        'aria-label': A.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
        children: [
            (0, n.jsxs)(u.ModalHeader, {
                justify: S.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, n.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H4,
                        children: A.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER
                    }),
                    (0, n.jsx)(u.ModalCloseButton, { onClick: i })
                ]
            }),
            (0, n.jsx)(u.ModalContent, {
                className: h.modalBody,
                children: (0, N.Q0)(s.planId)
                    ? A.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format({
                          downgradedPlan: C.ZP.getDisplayName(t.planId),
                          existingRate: f
                      })
                    : A.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format({
                          existingPlan: C.ZP.getDisplayName(s.planId),
                          downgradedPlan: C.ZP.getDisplayName(t.planId),
                          existingRate: f
                      })
            }),
            (0, n.jsxs)(u.ModalFooter, {
                children: [
                    (0, n.jsx)(u.Button, {
                        onClick: p,
                        children: A.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BUTTON
                    }),
                    (0, n.jsx)(u.Button, {
                        look: u.Button.Looks.LINK,
                        color: (0, d.ap)(o) ? u.Button.Colors.PRIMARY : u.Button.Colors.WHITE,
                        onClick: i,
                        children: A.Z.Messages.NEVERMIND
                    })
                ]
            })
        ]
    });
}
function p(e) {
    let { subscription: s, renewalMutations: t, className: i, analyticsLocation: o } = e,
        [l, c] = a.useState(!1);
    return (0, n.jsxs)('div', {
        className: r()(h.root, i),
        children: [
            (0, n.jsx)(u.CircleWarningIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: h.infoIcon
            }),
            (0, n.jsx)('div', {
                className: h.text,
                children: A.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
                    planName: s.hasExternalPlanChange ? (0, C.zL)(t) : C.ZP.getDisplayName(t.planId),
                    date: s.currentPeriodEnd
                })
            }),
            s.isPurchasedExternally
                ? null
                : (0, n.jsx)(u.Anchor, {
                      onClick: (e) => {
                          c(!0), e.preventDefault();
                      },
                      className: h.cancelLink,
                      children: A.Z.Messages.CANCEL
                  }),
            l
                ? (0, n.jsx)(u.Modal, {
                      renderModal: (e) => {
                          let { transitionState: a } = e;
                          return (0, n.jsx)(O, {
                              subscription: s,
                              renewalMutations: t,
                              transitionState: a,
                              onClose: () => c(!1),
                              analyticsLocation: o
                          });
                      },
                      onCloseRequest: () => c(!1)
                  })
                : null
        ]
    });
}
