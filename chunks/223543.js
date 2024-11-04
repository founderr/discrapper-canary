var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(893776),
    l = n(129293),
    o = n(388905),
    c = n(108427),
    u = n(314897),
    d = n(388032),
    h = n(113207);
t.Z = (e) => {
    let { location: t } = e,
        { verifyFailed: g, verifySucceeded: f } = (0, s.cj)([u.default], () => ({
            verifyFailed: u.default.didVerifyFail(),
            verifySucceeded: u.default.didVerifySucceed()
        }));
    return (r.useEffect(() => {
        let e = (0, l.Z)(t);
        null != e && a.Z.authorizePayment(e), (0, c.e)('authorize_payment');
    }, [t]),
    g)
        ? (0, i.jsxs)(o.ZP, {
              children: [
                  (0, i.jsx)('img', {
                      alt: '',
                      src: n(375673),
                      className: h.marginBottom20
                  }),
                  (0, i.jsx)(o.Dx, {
                      className: h.marginBottom8,
                      children: d.intl.string(d.t.GHRpub)
                  }),
                  (0, i.jsx)(o.DK, {
                      className: h.marginBottom40,
                      children: d.intl.string(d.t['1nO55u'])
                  })
              ]
          })
        : f
          ? (0, i.jsxs)(o.ZP, {
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        src: n(73962),
                        className: h.marginBottom20
                    }),
                    (0, i.jsx)(o.Dx, {
                        className: h.marginBottom8,
                        children: d.intl.string(d.t['ihHX5+'])
                    }),
                    (0, i.jsx)(o.DK, {
                        className: h.marginBottom40,
                        children: d.intl.string(d.t.pGPCv7)
                    })
                ]
            })
          : (0, i.jsxs)(o.ZP, {
                children: [(0, i.jsx)(o.Hh, {}), (0, i.jsx)(o.Dx, { children: d.intl.string(d.t.T3vC7u) })]
            });
};
