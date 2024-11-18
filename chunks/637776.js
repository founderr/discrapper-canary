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
    p = n(981631),
    g = n(388032),
    m = n(711433);
function f(e) {
    let { location: t } = e,
        [f, x] = r.useState(!1),
        { verifySuccess: _, verifyErrors: E, redirectGuildId: v } = (0, s.e7)([d.Z], () => d.Z.getState());
    r.useEffect(() => {
        let e = (0, a.Z)(t);
        l.Z.verify(e), (0, u.e)('verify_hub_email');
    }, [t]);
    let I = () => {
        (0, h.Z)(v), x(!0);
    };
    return f
        ? (0, i.jsxs)(o.ZP, {
              children: [
                  (0, i.jsx)(o.Dx, {
                      className: m.title,
                      children: g.intl.string(g.t.csrAMD)
                  }),
                  (0, i.jsx)(o.DK, {
                      className: m.subtitle,
                      children: g.intl.string(g.t['m1+IBg'])
                  }),
                  (0, i.jsx)(o.zx, {
                      className: m.spacedButton,
                      onClick: () => (0, c.uL)(p.Z5c.CHANNEL(v)),
                      children: g.intl.string(g.t.fIv16O)
                  })
              ]
          })
        : _
          ? (0, i.jsxs)(o.ZP, {
                children: [
                    (0, i.jsx)(o.Ee, {
                        className: m.image,
                        src: n(73962)
                    }),
                    (0, i.jsx)(o.Dx, {
                        className: m.title,
                        children: g.intl.string(g.t.dAfGb2)
                    }),
                    (0, i.jsx)(o.zx, {
                        onClick: I,
                        children: g.intl.string(g.t.uJWIj4)
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
                          children: g.intl.string(g.t.PCgG39)
                      }),
                      (0, i.jsx)(o.DK, {
                          className: m.subtitle,
                          children: g.intl.string(g.t.tQpeAw)
                      }),
                      (0, i.jsx)(o.zx, {
                          onClick: I,
                          children: g.intl.string(g.t.uJWIj4)
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
                          children: g.intl.string(g.t['0c8+5u'])
                      }),
                      (0, i.jsx)(o.DK, {
                          className: m.subtitle,
                          children: g.intl.string(g.t.ULTCBA)
                      }),
                      (0, i.jsx)(o.zx, {
                          submitting: !0,
                          color: o.zx.Colors.PRIMARY
                      })
                  ]
              });
}
s.ZP.initialize();
