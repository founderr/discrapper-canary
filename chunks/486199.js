t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    a = t(481060),
    o = t(600164),
    s = t(528144),
    d = t(388032),
    c = t(365515);
function u(e) {
    let { name: n, description: t, icon: l, imageSrc: u, iconBackgroundColor: m, iconClassName: h, iconWrapperClassName: p, details: g, detailsClassName: f, isHeader: x, isPremium: b } = e;
    return (0, i.jsxs)(o.Z, {
        justify: o.Z.Justify.CENTER,
        className: c.wrapper,
        children: [
            null != l || null != u
                ? (0, i.jsx)(o.Z.Child, {
                      shrink: 0,
                      grow: 0,
                      children: (function (e, n, t, l, a) {
                          if (null != n)
                              return (0, i.jsx)('img', {
                                  alt: '',
                                  src: n,
                                  className: r()(c.iconWrapper, l)
                              });
                          let s = null;
                          return (
                              null != e &&
                                  (s =
                                      'string' == typeof e
                                          ? (0, i.jsx)('img', {
                                                alt: '',
                                                src: e,
                                                className: r()(c.icon, l)
                                            })
                                          : (0, i.jsx)(e, {
                                                className: r()(c.icon, l),
                                                color: 'currentColor'
                                            })),
                              (0, i.jsx)(o.Z, {
                                  align: o.Z.Align.CENTER,
                                  justify: o.Z.Justify.CENTER,
                                  style: { backgroundColor: t },
                                  className: r()(c.iconWrapper, a),
                                  children: s
                              })
                          );
                      })(l, u, m, h, p)
                  })
                : null,
            (function (e) {
                let { name: n, description: t, details: l, detailsClassName: u, isHeader: m, isPremium: h } = e,
                    p =
                        null == l
                            ? void 0
                            : l.map((e, n) => {
                                  let { icon: t, text: l } = e;
                                  return (0, i.jsxs)(
                                      'div',
                                      {
                                          className: r()(c.detailsWrapper, m ? c.headerDetailsWrapper : null),
                                          children: [
                                              null != t
                                                  ? (0, i.jsx)(t, {
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: c.detailsIcon
                                                    })
                                                  : null,
                                              (0, i.jsx)(a.Text, {
                                                  variant: 'text-xs/normal',
                                                  color: 'header-secondary',
                                                  className: u,
                                                  children: l
                                              })
                                          ]
                                      },
                                      n
                                  );
                              });
                return (0, i.jsxs)(o.Z, {
                    direction: o.Z.Direction.VERTICAL,
                    children: [
                        (0, i.jsxs)(s.Z, {
                            size: m ? s.Z.Sizes.SIZE_24 : s.Z.Sizes.SIZE_16,
                            className: m ? c.header : c.secondaryHeader,
                            children: [
                                n,
                                h &&
                                    (0, i.jsx)(a.Tooltip, {
                                        text: d.intl.string(d.t.VFuFur),
                                        children: (e) =>
                                            (0, i.jsx)(a.TicketIcon, {
                                                size: 'xs',
                                                color: 'currentColor',
                                                ...e,
                                                className: c.premiumIcon
                                            })
                                    })
                            ]
                        }),
                        null != t
                            ? (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: t
                              })
                            : null,
                        (0, i.jsx)(o.Z, {
                            direction: o.Z.Direction.HORIZONTAL,
                            align: o.Z.Align.CENTER,
                            wrap: o.Z.Wrap.WRAP,
                            children: p
                        })
                    ]
                });
            })({
                name: n,
                description: t,
                details: g,
                detailsClassName: f,
                isHeader: x,
                isPremium: b
            })
        ]
    });
}
