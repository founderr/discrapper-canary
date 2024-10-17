var t = r(735250);
r(470079);
var a = r(780384),
    n = r(481060),
    i = r(410030),
    o = r(689938),
    l = r(92783),
    c = r(982404),
    u = r(299156);
s.Z = function (e) {
    let { churnUserDiscountOffer: s, onDiscountClaim: r, onContinue: m } = e,
        d = (0, i.ZP)(),
        _ = (0, a.wj)(d) ? c : u;
    return null == s
        ? null
        : (0, t.jsxs)('div', {
              className: l.churnFooterContainer,
              children: [
                  (0, t.jsx)('div', { className: l.churnFooterGlow }),
                  (0, t.jsx)('div', { className: l.churnFooterTopBorder }),
                  (0, t.jsx)('div', {
                      className: l.churnFooterContent,
                      children: (0, t.jsxs)('div', {
                          className: l.churnFooterContentBody,
                          children: [
                              (0, t.jsx)('img', {
                                  alt: '',
                                  src: _,
                                  className: l.churnFooterIcon
                              }),
                              (0, t.jsxs)('div', {
                                  className: l.churnFooterContentBodyInner,
                                  children: [
                                      (0, t.jsx)(n.Text, {
                                          variant: 'text-md/medium',
                                          className: l.churnFooterCopy,
                                          children: o.Z.Messages.CHURN_DISCOUNT_DESCRIPTION.format({
                                              percent: s.discount.amount,
                                              numMonths: s.discount.user_usage_limit
                                          })
                                      }),
                                      (0, t.jsxs)('div', {
                                          className: l.churnFooterCTAs,
                                          children: [
                                              (0, t.jsxs)(n.ShinyButton, {
                                                  className: l.churnFooterClaimCTA,
                                                  innerClassName: l.churnFooterClaimCTAInner,
                                                  look: n.ButtonLooks.OUTLINED,
                                                  color: n.ButtonColors.CUSTOM,
                                                  onClick: () => (null == r ? void 0 : r()),
                                                  children: [
                                                      (0, t.jsx)(n.NitroWheelIcon, {
                                                          size: 'xs',
                                                          color: 'currentColor',
                                                          className: l.churnFooterClaimIcon
                                                      }),
                                                      (0, t.jsx)(n.Text, {
                                                          variant: 'text-sm/semibold',
                                                          className: l.churnFooterClaimCopy,
                                                          children: o.Z.Messages.CHURN_DISCOUNT_CLAIM
                                                      })
                                                  ]
                                              }),
                                              (0, t.jsx)(n.Button, {
                                                  onClick: () => (null == m ? void 0 : m()),
                                                  children: o.Z.Messages.CONTINUE
                                              })
                                          ]
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
};
