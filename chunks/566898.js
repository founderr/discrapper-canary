n.d(t, {
    M9: function () {
        return x;
    },
    Pb: function () {
        return C;
    },
    XX: function () {
        return f;
    },
    ZP: function () {
        return v;
    },
    ZT: function () {
        return h;
    },
    iv: function () {
        return g;
    },
    pk: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(392711),
    a = n.n(s),
    o = n(481060),
    c = n(668327);
function u(e) {
    return ''.concat(e / 16, 'rem');
}
function d() {
    return (0, i.jsx)('div', {
        className: c.avatar,
        style: { opacity: 0.08 }
    });
}
function h(e) {
    let { width: t, opacity: n, className: l } = e;
    return (0, i.jsx)('div', {
        className: r()(l, { [c.blob]: !0 }),
        style: {
            width: u(t),
            opacity: null != n ? n : a().random(0.02, 0.08)
        }
    });
}
function m(e) {
    let t,
        { groupStart: n = !1, compact: l = !1, attachmentSpecs: s, usernameWidth: u, usernameOpacity: m, className: p, style: f } = e,
        g = l ? 50 : a().random(40, 50);
    return (
        !l && n
            ? (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(d, {}),
                      (0, i.jsx)(o.H, {
                          className: c.header,
                          children: (0, i.jsx)(h, {
                              width: u,
                              opacity: m,
                              className: c.__invalid_username
                          })
                      })
                  ]
              }))
            : l &&
              (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                      l &&
                          (0, i.jsx)(h, {
                              width: g,
                              className: r()({
                                  [c.compactTimestamp]: !0,
                                  [c.hidden]: !n
                              })
                          }),
                      (0, i.jsx)(o.H, {
                          className: c.header,
                          children: (0, i.jsx)(h, {
                              width: u,
                              opacity: m
                          })
                      })
                  ]
              })),
        (0, i.jsxs)('div', {
            'aria-hidden': !0,
            className: r()(p, {
                [c.wrapper]: !0,
                [c.compact]: l,
                [c.cozy]: !l
            }),
            style: f,
            children: [
                (0, i.jsxs)('div', {
                    className: c.contents,
                    children: [
                        t,
                        (0, i.jsx)('div', {
                            className: c.content,
                            children: Array(a().random(3, 8))
                                .fill(null)
                                .map(() => a().random(30, 80))
                                .map((e, t) =>
                                    (0, i.jsx)(
                                        h,
                                        {
                                            width: e,
                                            opacity: 0.06
                                        },
                                        t
                                    )
                                )
                        })
                    ]
                }),
                null != s &&
                    (0, i.jsx)('div', {
                        className: c.attachmentContainer,
                        children: (0, i.jsx)('div', {
                            className: c.attachment,
                            style: {
                                opacity: 0.03,
                                ...s
                            }
                        })
                    })
            ]
        })
    );
}
let p = 44,
    f = 22,
    g = 26,
    C = 26,
    x = 6;
function v(e) {
    let { messages: t, groupSpacing: n = 0, compact: l = !1, attachmentSpecs: r, className: s } = e,
        o = null != r ? (r.last ? t - 1 : a().random(0, t - 1)) : -1,
        c = a().random(80, 120),
        d = a().random(0.1, 0.2);
    return (0, i.jsx)(i.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, i.jsx)(
                    m,
                    {
                        compact: l,
                        className: s,
                        usernameWidth: c,
                        usernameOpacity: d,
                        groupStart: 0 === t,
                        attachmentSpecs: t === o ? r : void 0,
                        style: 0 === t ? { marginTop: u(n) } : void 0
                    },
                    t
                )
            )
    });
}
