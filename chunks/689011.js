n.d(t, {
    Oc: function () {
        return p;
    },
    t: function () {
        return h;
    },
    xe: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(131388),
    o = n(409813),
    s = n(586585),
    l = n(614277),
    u = n(225715),
    c = n(750143),
    d = n(689938),
    _ = n(555730),
    E = n(365627),
    f = n(753260);
let h = (e) => {
        let { step: t, onClose: n } = e,
            s = (0, a.Z)(c.X);
        return t === o.h8.CONFIRM || t === o.h8.BENEFITS
            ? (0, r.jsx)('div', {})
            : (0, r.jsxs)('div', {
                  className: _.headerContainer,
                  children: [
                      !s &&
                          (0, r.jsx)('div', {
                              className: _.headerImageContainer,
                              'aria-hidden': 'true',
                              children: (0, r.jsx)('img', {
                                  src: f,
                                  alt: '',
                                  className: _.headerImage
                              })
                          }),
                      (0, r.jsx)(i.Clickable, {
                          className: _.closeContainer,
                          onClick: () => n(),
                          'aria-label': d.Z.Messages.CLOSE,
                          children: (0, r.jsx)(i.XSmallIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: _.closeIcon
                          })
                      })
                  ]
              });
    },
    p = (e) => {
        let { icon: t, storeListingBenefits: n, skuBenefits: i, application: a, title: o, subtitle: s, description: l } = e;
        return null == a
            ? null
            : (0, r.jsx)('div', {
                  className: _.confirmationContainer,
                  children: (0, r.jsxs)(u.q$, {
                      children: [
                          (0, r.jsx)(u.CW, {
                              application: a,
                              asset: t
                          }),
                          (0, r.jsx)(u.r0, { children: o }),
                          (0, r.jsx)(u.s$, {}),
                          (0, r.jsx)(u.K9, {
                              title: s,
                              description: l
                          }),
                          (0, r.jsx)(u.G9, {
                              applicationId: a.id,
                              storeListingBenefits: n,
                              skuBenefits: i
                          })
                      ]
                  })
              });
    };
function m(e) {
    let { tierName: t, onConfirm: n, subscription: a } = e;
    return (0, r.jsxs)('div', {
        className: _.purchaseConfirmation,
        children: [
            (0, r.jsx)('img', {
                src: E,
                alt: '',
                width: 300,
                height: 126
            }),
            (0, r.jsx)(i.Heading, {
                className: _.confirmationTitle,
                variant: 'heading-xl/extrabold',
                color: 'header-primary',
                children: d.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({ tier: t })
            }),
            (0, r.jsx)(i.Text, {
                className: _.confirmationSubtitle,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: d.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({ timestamp: null == a ? void 0 : a.currentPeriodEnd })
            }),
            (0, r.jsx)(l.O3, {
                children: (0, r.jsx)(s.Z, {
                    onPrimary: n,
                    primaryCTA: s.g.CONTINUE,
                    primaryText: d.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                })
            })
        ]
    });
}
