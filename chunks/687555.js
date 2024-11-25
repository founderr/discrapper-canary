r(47120), r(653041);
var i = r(200651),
    s = r(192379),
    a = r(120356),
    n = r.n(a),
    l = r(512722),
    o = r.n(l),
    C = r(597312),
    d = r(442837),
    c = r(481060),
    x = r(232567),
    p = r(461745),
    h = r(434650),
    f = r(210887),
    u = r(51144),
    m = r(281494),
    _ = r(276444),
    j = r(529840),
    g = r(388032),
    L = r(854540),
    S = r(724531),
    v = r(99713),
    y = r(334202),
    N = r(7234);
function w(e) {
    let { numOfSelectedUsers: t } = e,
        r = (0, d.e7)([_.Z], () => _.Z.getReferralsRemaining());
    o()(null != r, 'Referrals remaining should not be null');
    let s = r - t,
        a = g.intl.formatToPlainString(g.t.GcKM5e, { numReferrals: r });
    return (
        s < r && ((a = g.intl.formatToPlainString(g.t.hZnIz8, { numFriends: s })), 1 === s && (a = g.intl.string(g.t.UfPk1t)), 0 === s && (a = g.intl.formatToPlainString(g.t['3PJw6e'], { numReferrals: r }))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: L.title,
                    children: [
                        (0, i.jsx)(M, { className: L.titleImage }),
                        (0, i.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            children: g.intl.string(g.t.Lm2nFR)
                        })
                    ]
                }),
                (0, i.jsx)(c.Text, {
                    className: L.description,
                    variant: 'text-md/medium',
                    color: 'header-secondary',
                    children: a
                })
            ]
        })
    );
}
function Z() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: L.title,
                children: (0, i.jsx)(c.Heading, {
                    variant: 'heading-xl/bold',
                    children: g.intl.string(g.t['PFp+aG'])
                })
            }),
            (0, i.jsx)(c.Text, {
                className: L.description,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: g.intl.string(g.t.eBIGBw)
            })
        ]
    });
}
function F() {
    return (0, i.jsx)('div', {
        className: L.erroredContent,
        children: (0, i.jsx)(c.Image, {
            src: y,
            width: 225,
            height: 160
        })
    });
}
function R(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)('div', {
        className: L.erroredContainer,
        children: [
            (0, i.jsxs)('div', {
                className: n()(L.erroredHeader, L.headerSeparator),
                children: [
                    (0, i.jsx)('div', {
                        className: L.title,
                        children: (0, i.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            children: g.intl.string(g.t.a9HOKi)
                        })
                    }),
                    (0, i.jsx)(c.Text, {
                        className: L.description,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: g.intl.string(g.t.JjjeZW)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: L.erroredContent,
                children: (0, i.jsx)(c.Image, {
                    src: v,
                    width: 178,
                    height: 190
                })
            }),
            (0, i.jsx)('div', {
                className: n()(L.footer, L.footerSeparator),
                children: (0, i.jsx)(c.Button, {
                    className: L.submit,
                    onClick: () => t(),
                    children: g.intl.string(g.t.wpSqAQ)
                })
            })
        ]
    });
}
function U(e) {
    let { onShare: t } = e,
        r = (0, d.e7)([_.Z], () => _.Z.getRecipientStatus()),
        [a, l] = s.useState([]),
        [o, C] = s.useState(new Set());
    return (
        s.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, i] of r)
                    if (i === m.Fe.PENDING) {
                        let r = await (0, x.PR)(t);
                        e.push(r);
                    }
                l(e);
            })();
        }, [r]),
        (0, i.jsxs)('div', {
            className: L.remindContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: n()(L.remindHeader, L.headerSeparator),
                    children: [
                        (0, i.jsxs)('div', {
                            className: L.title,
                            children: [
                                (0, i.jsx)(M, { className: L.titleImage }),
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xl/bold',
                                    children: g.intl.string(g.t.SY9tyM)
                                })
                            ]
                        }),
                        (0, i.jsx)(c.Text, {
                            className: L.description,
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: g.intl.string(g.t.mPmPrq)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: L.list,
                    children: a.map((e) =>
                        (0, i.jsx)(
                            j.Z,
                            {
                                user: e,
                                checked: o.has(e),
                                onChange: (e, t) => {
                                    C((r) => {
                                        let i = new Set(r);
                                        return t ? i.add(e) : i.delete(e), i;
                                    });
                                }
                            },
                            e.id
                        )
                    )
                }),
                (0, i.jsx)('div', {
                    className: n()(L.footer, L.footerSeparator),
                    children: (0, i.jsx)(c.Button, {
                        className: L.submit,
                        onClick: () => t([...o.values()]),
                        children: g.intl.string(g.t.ItpQxs)
                    })
                })
            ]
        })
    );
}
function M(e) {
    let { className: t } = e;
    return 'light' === (0, d.e7)([f.Z], () => f.Z.theme)
        ? (0, i.jsx)(c.Image, {
              className: t,
              src: S,
              width: 55,
              height: 38
          })
        : (0, i.jsx)(c.Image, {
              className: t,
              src: N,
              width: 55,
              height: 38
          });
}
t.Z = function (e) {
    let { onClose: t, onShare: r } = e,
        a = (0, d.e7)([_.Z], () => _.Z.getReferralsRemaining()),
        l = (0, d.e7)([_.Z], () => _.Z.getRecipientStatus()),
        [f, S] = s.useState(0),
        [v, y] = s.useState(''),
        [N, M] = s.useState([]),
        [B, E] = s.useState(!1),
        [A, I] = s.useState(!1),
        O = (function (e, t) {
            let [r, i] = s.useState(e);
            return (
                s.useEffect(() => {
                    let r = setTimeout(() => {
                        i(e);
                    }, t);
                    return () => {
                        clearTimeout(r);
                    };
                }, [e, t]),
                r
            );
        })(v, 400),
        [b, k] = s.useState(new Map()),
        [G, H] = s.useState(new Map());
    s.useEffect(() => {
        P(0);
    }, [O]),
        o()(null != a, 'Referrals remaining should not be null');
    let P = async (e) => {
            try {
                if (null == e) return;
                E(!0);
                let t = [...G.values()];
                for (let [e, r] of l)
                    if (r === m.Fe.PENDING && !G.has(e)) {
                        let r = await (0, x.PR)(e);
                        t.push(r);
                    }
                let r = await (0, m.iF)(e, O);
                M((i) => {
                    let s = r.users.filter((e) => !b.has(e.id));
                    return ((t = t.filter((e) => !b.has(e.id))), 0 === e) ? [...b.values(), ...t.values(), ...s] : [...i, ...s];
                }),
                    H((e) => {
                        let r = new Map(e);
                        for (let e of t) r.set(e.id, e);
                        return r;
                    }),
                    S(r.nextIndex);
            } catch (e) {
                I(!0);
            } finally {
                E(!1);
            }
        },
        D = (0, h.O)((e) => {
            e && !B && P(f);
        });
    if (A) return (0, i.jsx)(R, { onClose: t });
    if (0 === a) return (0, i.jsx)(U, { onShare: r });
    let T = O.length > 0 && 0 === N.length;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: n()(L.header, L.headerSeparator),
                children: [
                    T ? (0, i.jsx)(Z, {}) : (0, i.jsx)(w, { numOfSelectedUsers: b.size }),
                    (0, i.jsx)(p.ZP, {
                        className: L.searchbar,
                        size: p.ZP.Sizes.MEDIUM,
                        tags: [...b.values()].map((e) => u.ZP.getName(e)),
                        placeholder: g.intl.string(g.t.Kd5RaG),
                        query: v,
                        onRemoveTag: (e) => {
                            k((t) => {
                                let r = [...t.values()][e],
                                    i = new Map(t);
                                return i.delete(r.id), i;
                            });
                        },
                        onQueryChange: y,
                        onClear: () => y('')
                    })
                ]
            }),
            T
                ? (0, i.jsx)(F, {})
                : (0, i.jsxs)(C.w0, {
                      className: L.list,
                      children: [
                          N.map((e) =>
                              (0, i.jsx)(
                                  j.Z,
                                  {
                                      disabled: [...b.values()].filter((e) => !G.has(e.id)).length >= a && !b.has(e.id) && !G.has(e.id),
                                      checked: b.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          k((r) => {
                                              let i = new Map(r);
                                              return t ? i.set(e.id, e) : i.delete(e.id), i;
                                          });
                                      }
                                  },
                                  e.id
                              )
                          ),
                          B && (0, i.jsx)(c.Spinner, {}),
                          (0, i.jsx)('div', { ref: D })
                      ]
                  }),
            (0, i.jsx)('div', {
                className: n()(L.footer, L.footerSeparator),
                children: (0, i.jsx)(c.Button, {
                    className: L.submit,
                    disabled: 0 === b.size && !T,
                    onClick: () => {
                        if (T) {
                            t();
                            return;
                        }
                        r([...b.values()]);
                    },
                    children: T ? g.intl.string(g.t.wpSqAQ) : g.intl.string(g.t.ItpQxs)
                })
            })
        ]
    });
};
