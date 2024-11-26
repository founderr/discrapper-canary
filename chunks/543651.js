var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    l = n(442837),
    u = n(481060),
    c = n(835473),
    d = n(318374),
    f = n(925329),
    _ = n(594174),
    p = n(823379),
    h = n(388032),
    m = n(795044);
t.Z = function (e) {
    let { createdAt: t, participantIds: n, applicationId: i, title: s, guildId: g, className: E } = e,
        v = (0, c.q)(i),
        I = (0, l.Wu)([_.default], () => {
            var e;
            return null !== (e = n.map((e) => _.default.getUser(e)).filter(p.lm)) && void 0 !== e ? e : [];
        }),
        T = null == v ? void 0 : v.name,
        b = o()(t).fromNow();
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: a()(E, m.container),
              children: [
                  (0, r.jsx)(f.Z, { game: v }),
                  (0, r.jsxs)('div', {
                      className: m.textSection,
                      children: [
                          null != s && '' !== s
                              ? (0, r.jsx)(u.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'interactive-active',
                                    children: s
                                })
                              : (0, r.jsx)(u.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'text-muted',
                                    children: h.intl.string(h.t.Cyxddn)
                                }),
                          (0, r.jsxs)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'text-muted',
                              className: m.__invalid_subtitle,
                              children: [null != T ? ''.concat(T, ' \u2022 ') : null, b]
                          }),
                          (0, r.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'text-muted',
                              className: m.__invalid_subtitle
                          })
                      ]
                  }),
                  null != I &&
                      I.length > 0 &&
                      (0, r.jsx)(d.Z, {
                          maxUsers: 4,
                          users: I,
                          className: m.__invalid_facePile,
                          guildId: g
                      })
              ]
          });
};
