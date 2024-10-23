t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var a = t(120356),
    l = t.n(a),
    s = t(481060),
    o = t(600164),
    r = t(528144),
    d = t(689938),
    c = t(365515);
function u(e) {
    let { name: n, description: t, icon: a, imageSrc: u, iconBackgroundColor: I, iconClassName: m, iconWrapperClassName: _, details: N, detailsClassName: E, isHeader: T, isPremium: h } = e;
    return (0, i.jsxs)(o.Z, {
        justify: o.Z.Justify.CENTER,
        className: c.wrapper,
        children: [
            null != a || null != u
                ? (0, i.jsx)(o.Z.Child, {
                      shrink: 0,
                      grow: 0,
                      children: (function (e, n, t, a, s) {
                          if (null != n)
                              return (0, i.jsx)('img', {
                                  alt: '',
                                  src: n,
                                  className: l()(c.iconWrapper, a)
                              });
                          let r = null;
                          return (
                              null != e &&
                                  (r =
                                      'string' == typeof e
                                          ? (0, i.jsx)('img', {
                                                alt: '',
                                                src: e,
                                                className: l()(c.icon, a)
                                            })
                                          : (0, i.jsx)(e, {
                                                className: l()(c.icon, a),
                                                color: 'currentColor'
                                            })),
                              (0, i.jsx)(o.Z, {
                                  align: o.Z.Align.CENTER,
                                  justify: o.Z.Justify.CENTER,
                                  style: { backgroundColor: t },
                                  className: l()(c.iconWrapper, s),
                                  children: r
                              })
                          );
                      })(a, u, I, m, _)
                  })
                : null,
            (function (e) {
                let { name: n, description: t, details: a, detailsClassName: u, isHeader: I, isPremium: m } = e,
                    _ =
                        null == a
                            ? void 0
                            : a.map((e, n) => {
                                  let { icon: t, text: a } = e;
                                  return (0, i.jsxs)(
                                      'div',
                                      {
                                          className: l()(c.detailsWrapper, I ? c.headerDetailsWrapper : null),
                                          children: [
                                              null != t
                                                  ? (0, i.jsx)(t, {
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: c.detailsIcon
                                                    })
                                                  : null,
                                              (0, i.jsx)(s.Text, {
                                                  variant: 'text-xs/normal',
                                                  color: 'header-secondary',
                                                  className: u,
                                                  children: a
                                              })
                                          ]
                                      },
                                      n
                                  );
                              });
                return (0, i.jsxs)(o.Z, {
                    direction: o.Z.Direction.VERTICAL,
                    children: [
                        (0, i.jsxs)(r.Z, {
                            size: I ? r.Z.Sizes.SIZE_24 : r.Z.Sizes.SIZE_16,
                            className: I ? c.header : c.secondaryHeader,
                            children: [
                                n,
                                m &&
                                    (0, i.jsx)(s.Tooltip, {
                                        text: d.Z.Messages.APPLICATION_SUBSCRIPTION_PREMIUM,
                                        children: (e) =>
                                            (0, i.jsx)(s.TicketIcon, {
                                                size: 'xs',
                                                color: 'currentColor',
                                                ...e,
                                                className: c.premiumIcon
                                            })
                                    })
                            ]
                        }),
                        null != t
                            ? (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: t
                              })
                            : null,
                        (0, i.jsx)(o.Z, {
                            direction: o.Z.Direction.HORIZONTAL,
                            align: o.Z.Align.CENTER,
                            wrap: o.Z.Wrap.WRAP,
                            children: _
                        })
                    ]
                });
            })({
                name: n,
                description: t,
                details: N,
                detailsClassName: E,
                isHeader: T,
                isPremium: h
            })
        ]
    });
}
