n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(231239),
    a = n(129293),
    o = n(388905),
    c = n(703656),
    u = n(108427),
    d = n(844800),
    h = n(580497),
    g = n(981631),
    p = n(388032),
    m = n(841094);
function f(e) {
    let { location: t } = e,
        [f, _] = r.useState(!1),
        { verifySuccess: x, verifyErrors: E, redirectGuildId: I } = (0, s.e7)([d.Z], () => d.Z.getState());
    r.useEffect(() => {
        let e = (0, a.Z)(t);
        l.Z.verify(e), (0, u.e)('verify_hub_email');
    }, [t]);
    let v = () => {
        (0, h.Z)(I), _(!0);
    };
    return f
        ? (0, i.jsxs)(o.ZP, {
              children: [
                  (0, i.jsx)(o.Dx, {
                      className: m.title,
                      children: p.intl.string(p.t.csrAMD)
                  }),
                  (0, i.jsx)(o.DK, {
                      className: m.subtitle,
                      children: p.intl.string(p.t['m1+IBg'])
                  }),
                  (0, i.jsx)(o.zx, {
                      className: m.spacedButton,
                      onClick: () => (0, c.uL)(g.Z5c.CHANNEL(I)),
                      children: p.intl.string(p.t.fIv16O)
                  })
              ]
          })
        : x
          ? (0, i.jsxs)(o.ZP, {
                children: [
                    (0, i.jsx)(o.Ee, {
                        className: m.image,
                        src: n(73962)
                    }),
                    (0, i.jsx)(o.Dx, {
                        className: m.title,
                        children: p.intl.string(p.t.dAfGb2)
                    }),
                    (0, i.jsx)(o.zx, {
                        onClick: v,
                        children: p.intl.string(p.t.uJWIj4)
                    })
                ]
            })
          : null != E
            ? (0, i.jsxs)(o.ZP, {
                  children: [
                      (0, i.jsx)(o.Ee, {
                          className: m.image,
                          src: n(375673)
                      }),
                      (0, i.jsx)(o.Dx, {
                          className: m.title,
                          children: p.intl.string(p.t.PCgG39)
                      }),
                      (0, i.jsx)(o.DK, {
                          className: m.subtitle,
                          children: p.intl.string(p.t.tQpeAw)
                      }),
                      (0, i.jsx)(o.zx, {
                          onClick: v,
                          children: p.intl.string(p.t.uJWIj4)
                      })
                  ]
              })
            : (0, i.jsxs)(o.ZP, {
                  children: [
                      (0, i.jsx)(o.Ee, {
                          className: m.image,
                          src: n(892235)
                      }),
                      (0, i.jsx)(o.Dx, {
                          className: m.title,
                          children: p.intl.string(p.t['0c8+5u'])
                      }),
                      (0, i.jsx)(o.DK, {
                          className: m.subtitle,
                          children: p.intl.string(p.t.ULTCBA)
                      }),
                      (0, i.jsx)(o.zx, {
                          submitting: !0,
                          color: o.zx.Colors.PRIMARY
                      })
                  ]
              });
}
s.ZP.initialize();
