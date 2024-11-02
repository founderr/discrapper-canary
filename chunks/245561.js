t.d(n, {
    GU: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    a = t(481060),
    s = t(596454),
    o = t(889989),
    c = t(600699);
function u(e) {
    let n,
        { applicationId: t, storeListingBenefits: r, skuBenefits: a, className: s } = e;
    return (
        null != r
            ? (n = r.map((e) =>
                  (0, i.jsx)(
                      m,
                      {
                          applicationId: t,
                          benefit: e,
                          className: l()(c.__invalid_benefit, s)
                      },
                      e.id
                  )
              ))
            : null != a &&
              (n = a.map((e, n) =>
                  (0, i.jsx)(
                      d,
                      {
                          benefit: e,
                          className: l()(c.__invalid_benefit, s)
                      },
                      n
                  )
              )),
        (0, i.jsx)(i.Fragment, { children: n })
    );
}
function d(e) {
    let { benefit: n, className: t, emojiContainerClassName: r, showsDescription: o = !0, nameTextVariant: u = 'text-md/medium', nameTextColor: d = 'header-primary' } = e;
    return (0, i.jsxs)('div', {
        className: l()(c.container, t),
        children: [
            null != n.emoji &&
                (0, i.jsx)('div', {
                    className: l()(c.emojiContainer, r),
                    children: (0, i.jsx)(s.Z, {
                        emojiId: n.emoji.id,
                        emojiName: n.emoji.name,
                        animated: n.emoji.animated
                    })
                }),
            (0, i.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: u,
                        color: d,
                        className: c.name,
                        children: n.name
                    }),
                    o &&
                        (0, i.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: n.description
                        })
                ]
            })
        ]
    });
}
function m(e) {
    let { applicationId: n, benefit: t, className: r, emojiContainerClassName: s, showsDescription: u = !0, nameTextVariant: d = 'text-md/medium', nameTextColor: m = 'header-primary' } = e;
    return (0, i.jsxs)('div', {
        className: l()(c.container, r),
        children: [
            (0, i.jsx)('div', {
                className: l()(c.emojiContainer, s),
                children: (0, o.n)(n, t.icon)
            }),
            (0, i.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: d,
                        color: m,
                        className: c.name,
                        children: t.name
                    }),
                    u &&
                        (0, i.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: t.description
                        })
                ]
            })
        ]
    });
}
