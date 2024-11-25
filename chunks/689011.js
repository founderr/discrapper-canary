t.d(n, {
    Oc: function () {
        return v;
    },
    t: function () {
        return h;
    },
    xe: function () {
        return j;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(131388),
    a = t(409813),
    s = t(586585),
    o = t(614277),
    c = t(225715),
    u = t(750143),
    d = t(388032),
    m = t(641479),
    f = t(365627),
    x = t(753260);
let h = (e) => {
        let { step: n, onClose: t } = e,
            s = (0, l.Z)(u.X);
        return n === a.h8.CONFIRM || n === a.h8.BENEFITS
            ? (0, i.jsx)('div', {})
            : (0, i.jsxs)('div', {
                  className: m.headerContainer,
                  children: [
                      !s &&
                          (0, i.jsx)('div', {
                              className: m.headerImageContainer,
                              'aria-hidden': 'true',
                              children: (0, i.jsx)('img', {
                                  src: x,
                                  alt: '',
                                  className: m.headerImage
                              })
                          }),
                      (0, i.jsx)(r.Clickable, {
                          className: m.closeContainer,
                          onClick: () => t(),
                          'aria-label': d.intl.string(d.t.cpT0Cg),
                          children: (0, i.jsx)(r.XSmallIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: m.closeIcon
                          })
                      })
                  ]
              });
    },
    v = (e) => {
        let { icon: n, storeListingBenefits: t, skuBenefits: r, application: l, title: a, subtitle: s, description: o } = e;
        return null == l
            ? null
            : (0, i.jsx)('div', {
                  className: m.confirmationContainer,
                  children: (0, i.jsxs)(c.q$, {
                      children: [
                          (0, i.jsx)(c.CW, {
                              application: l,
                              asset: n
                          }),
                          (0, i.jsx)(c.r0, { children: a }),
                          (0, i.jsx)(c.s$, {}),
                          (0, i.jsx)(c.K9, {
                              title: s,
                              description: o
                          }),
                          (0, i.jsx)(c.G9, {
                              applicationId: l.id,
                              storeListingBenefits: t,
                              skuBenefits: r
                          })
                      ]
                  })
              });
    };
function j(e) {
    let { tierName: n, onConfirm: t, subscription: l } = e;
    return (0, i.jsxs)('div', {
        className: m.purchaseConfirmation,
        children: [
            (0, i.jsx)('img', {
                src: f,
                alt: '',
                width: 300,
                height: 126
            }),
            (0, i.jsx)(r.Heading, {
                className: m.confirmationTitle,
                variant: 'heading-xl/extrabold',
                color: 'header-primary',
                children: d.intl.format(d.t['wLFT6+'], { tier: n })
            }),
            (0, i.jsx)(r.Text, {
                className: m.confirmationSubtitle,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: d.intl.format(d.t.OsAK9v, { timestamp: null == l ? void 0 : l.currentPeriodEnd })
            }),
            (0, i.jsx)(o.O3, {
                children: (0, i.jsx)(s.Z, {
                    onPrimary: t,
                    primaryCTA: s.g.CONTINUE,
                    primaryText: d.intl.string(d.t['JtWl+f'])
                })
            })
        ]
    });
}
