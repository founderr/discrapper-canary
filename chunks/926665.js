t.r(n),
    t.d(n, {
        default: function () {
            return x;
        }
    });
var s = t(200651),
    r = t(192379),
    o = t(120356),
    i = t.n(o),
    l = t(512969),
    c = t(873546),
    a = t(481060),
    u = t(169382),
    d = t(726542),
    f = t(656649),
    g = t(981631),
    m = t(388032),
    h = t(197435);
let v = 'https://dis.gd/Amazon-Music-Connection',
    p = null != window.opener;
function x() {
    let { type: e } = (0, l.UO)(),
        n = (0, f.vJ)(e),
        t = (0, u.l)().get('error-code'),
        o = r.useCallback(() => {
            window.close();
        }, []),
        x = r.useMemo(() => {
            switch (n) {
                case g.ABu.AMAZON_MUSIC:
                    return (0, s.jsx)('div', {
                        className: i()(h.message, h.details),
                        children: c.tq
                            ? m.intl.format(m.t['0EikXl'], {
                                  link: () =>
                                      (0, s.jsx)(a.Anchor, {
                                          href: v,
                                          children: v
                                      })
                              })
                            : m.intl.format(m.t.hKHZhI, {
                                  link: () =>
                                      (0, s.jsx)(a.Anchor, {
                                          href: v,
                                          children: v
                                      })
                              })
                    });
                case g.ABu.YOUTUBE:
                    if (t === g.evJ.UNKNOWN_ACCOUNT.toString())
                        return (0, s.jsx)('div', {
                            className: i()(h.message, h.details),
                            children: m.intl.format(m.t.nQPJdH, { link: 'https://support.google.com/youtube/answer/1646861' })
                        });
                    return null;
                default:
                    return null;
            }
        }, [t, n]);
    if (null == n) return null;
    let b = d.Z.get(n);
    return (0, s.jsxs)(f.UV, {
        platformType: n,
        children: [
            (0, s.jsx)('div', {
                className: i()(h.message, h.error),
                children: m.intl.format(m.t.E62dXl, { name: b.name })
            }),
            (0, s.jsx)('div', {
                className: i()(h.message, h.details),
                children: m.intl.string(m.t.Ra6lcn)
            }),
            x,
            p
                ? (0, s.jsx)(a.Button, {
                      className: h.btn,
                      onClick: o,
                      children: m.intl.string(m.t.i4jeWV)
                  })
                : null
        ]
    });
}
