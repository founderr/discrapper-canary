n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(231239),
    l = n(129293),
    o = n(388905),
    c = n(703656),
    u = n(108427),
    d = n(844800),
    h = n(580497),
    g = n(981631),
    m = n(388032),
    f = n(71188);
function p(e) {
    let { location: t } = e,
        [p, _] = r.useState(!1),
        { verifySuccess: x, verifyErrors: E, redirectGuildId: v } = (0, s.e7)([d.Z], () => d.Z.getState());
    r.useEffect(() => {
        let e = (0, l.Z)(t);
        a.Z.verify(e), (0, u.e)('verify_hub_email');
    }, [t]);
    let I = () => {
        (0, h.Z)(v), _(!0);
    };
    return p
        ? (0, i.jsxs)(o.ZP, {
              children: [
                  (0, i.jsx)(o.Dx, {
                      className: f.title,
                      children: m.intl.string(m.t.csrAMD)
                  }),
                  (0, i.jsx)(o.DK, {
                      className: f.subtitle,
                      children: m.intl.string(m.t['m1+IBg'])
                  }),
                  (0, i.jsx)(o.zx, {
                      className: f.spacedButton,
                      onClick: () => (0, c.uL)(g.Z5c.CHANNEL(v)),
                      children: m.intl.string(m.t.fIv16O)
                  })
              ]
          })
        : x
          ? (0, i.jsxs)(o.ZP, {
                children: [
                    (0, i.jsx)(o.Ee, {
                        className: f.image,
                        src: n(73962)
                    }),
                    (0, i.jsx)(o.Dx, {
                        className: f.title,
                        children: m.intl.string(m.t.dAfGb2)
                    }),
                    (0, i.jsx)(o.zx, {
                        onClick: I,
                        children: m.intl.string(m.t.uJWIj4)
                    })
                ]
            })
          : null != E
            ? (0, i.jsxs)(o.ZP, {
                  children: [
                      (0, i.jsx)(o.Ee, {
                          className: f.image,
                          src: n(375673)
                      }),
                      (0, i.jsx)(o.Dx, {
                          className: f.title,
                          children: m.intl.string(m.t.PCgG39)
                      }),
                      (0, i.jsx)(o.DK, {
                          className: f.subtitle,
                          children: m.intl.string(m.t.tQpeAw)
                      }),
                      (0, i.jsx)(o.zx, {
                          onClick: I,
                          children: m.intl.string(m.t.uJWIj4)
                      })
                  ]
              })
            : (0, i.jsxs)(o.ZP, {
                  children: [
                      (0, i.jsx)(o.Ee, {
                          className: f.image,
                          src: n(892235)
                      }),
                      (0, i.jsx)(o.Dx, {
                          className: f.title,
                          children: m.intl.string(m.t['0c8+5u'])
                      }),
                      (0, i.jsx)(o.DK, {
                          className: f.subtitle,
                          children: m.intl.string(m.t.ULTCBA)
                      }),
                      (0, i.jsx)(o.zx, {
                          submitting: !0,
                          color: o.zx.Colors.PRIMARY
                      })
                  ]
              });
}
s.ZP.initialize();
