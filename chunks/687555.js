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
    h = r(461745),
    p = r(434650),
    f = r(210887),
    u = r(51144),
    m = r(281494),
    _ = r(276444),
    j = r(955839),
    g = r(529840),
    L = r(388032),
    S = r(854540),
    v = r(724531),
    y = r(99713),
    N = r(334202),
    w = r(7234);
function Z(e) {
    let { numOfSelectedUsers: t } = e,
        r = (0, d.e7)([_.Z], () => _.Z.getReferralsRemaining());
    o()(null != r, 'Referrals remaining should not be null');
    let s = r - t,
        a = L.intl.formatToPlainString(L.t.GcKM5e, { numReferrals: r });
    return (
        s < r && ((a = L.intl.formatToPlainString(L.t.hZnIz8, { numFriends: s })), 1 === s && (a = L.intl.string(L.t.UfPk1t)), 0 === s && (a = L.intl.formatToPlainString(L.t['3PJw6e'], { numReferrals: r }))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: S.title,
                    children: [
                        (0, i.jsx)(M, { className: S.titleImage }),
                        (0, i.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            children: L.intl.string(L.t.Lm2nFR)
                        })
                    ]
                }),
                (0, i.jsx)(c.Text, {
                    className: S.description,
                    variant: 'text-md/medium',
                    color: 'header-secondary',
                    children: a
                })
            ]
        })
    );
}
function F() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: S.title,
                children: (0, i.jsx)(c.Heading, {
                    variant: 'heading-xl/bold',
                    children: L.intl.string(L.t['PFp+aG'])
                })
            }),
            (0, i.jsx)(c.Text, {
                className: S.description,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: L.intl.string(L.t.eBIGBw)
            })
        ]
    });
}
function R() {
    return (0, i.jsx)('div', {
        className: S.erroredContent,
        children: (0, i.jsx)(c.Image, {
            src: N,
            width: 225,
            height: 160
        })
    });
}
function U(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)('div', {
        className: S.erroredContainer,
        children: [
            (0, i.jsxs)('div', {
                className: n()(S.erroredHeader, S.headerSeparator),
                children: [
                    (0, i.jsx)('div', {
                        className: S.title,
                        children: (0, i.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            children: L.intl.string(L.t.a9HOKi)
                        })
                    }),
                    (0, i.jsx)(c.Text, {
                        className: S.description,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: L.intl.string(L.t.JjjeZW)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: S.erroredContent,
                children: (0, i.jsx)(c.Image, {
                    src: y,
                    width: 178,
                    height: 190
                })
            }),
            (0, i.jsx)('div', {
                className: n()(S.footer, S.footerSeparator),
                children: (0, i.jsx)(c.Button, {
                    className: S.submit,
                    onClick: () => t(),
                    children: L.intl.string(L.t.wpSqAQ)
                })
            })
        ]
    });
}
function E(e) {
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
            className: S.remindContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: n()(S.remindHeader, S.headerSeparator),
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.title,
                            children: [
                                (0, i.jsx)(M, { className: S.titleImage }),
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xl/bold',
                                    children: L.intl.string(L.t.SY9tyM)
                                })
                            ]
                        }),
                        (0, i.jsx)(c.Text, {
                            className: S.description,
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: L.intl.string(L.t.mPmPrq)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: S.list,
                    children: a.map((e) =>
                        (0, i.jsx)(
                            g.Z,
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
                    className: n()(S.footer, S.footerSeparator),
                    children: (0, i.jsx)(c.Button, {
                        className: S.submit,
                        onClick: () => t([...o.values()]),
                        children: L.intl.string(L.t.ItpQxs)
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
              src: v,
              width: 55,
              height: 38
          })
        : (0, i.jsx)(c.Image, {
              className: t,
              src: w,
              width: 55,
              height: 38
          });
}
t.Z = function (e) {
    let { onClose: t, onShare: r } = e,
        a = (0, d.e7)([_.Z], () => _.Z.getReferralsRemaining()),
        [l, x] = s.useState(''),
        f = (function (e, t) {
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
        })(l, 400),
        [m, v] = s.useState(new Map()),
        {
            eligibleUsers: y,
            fetchUsers: N,
            hasError: w,
            isFetching: M,
            resendUsers: B
        } = (0, j.q)({
            searchQuery: f,
            selectedUsers: m
        });
    o()(null != a, 'Referrals remaining should not be null');
    let A = (0, p.O)((e) => {
        e && !M && N();
    });
    if (w) return (0, i.jsx)(U, { onClose: t });
    if (0 === a) return (0, i.jsx)(E, { onShare: r });
    let I = f.length > 0 && 0 === y.length;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: n()(S.header, S.headerSeparator),
                children: [
                    I ? (0, i.jsx)(F, {}) : (0, i.jsx)(Z, { numOfSelectedUsers: m.size }),
                    (0, i.jsx)(h.ZP, {
                        className: S.searchbar,
                        size: h.ZP.Sizes.MEDIUM,
                        tags: [...m.values()].map((e) => u.ZP.getName(e)),
                        placeholder: L.intl.string(L.t.Kd5RaG),
                        query: l,
                        onRemoveTag: (e) => {
                            v((t) => {
                                let r = [...t.values()][e],
                                    i = new Map(t);
                                return i.delete(r.id), i;
                            });
                        },
                        onQueryChange: x,
                        onClear: () => x('')
                    })
                ]
            }),
            I
                ? (0, i.jsx)(R, {})
                : (0, i.jsxs)(C.w0, {
                      className: S.list,
                      children: [
                          y.map((e) =>
                              (0, i.jsx)(
                                  g.Z,
                                  {
                                      disabled: [...m.values()].filter((e) => !B.has(e.id)).length >= a && !m.has(e.id) && !B.has(e.id),
                                      checked: m.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          v((r) => {
                                              let i = new Map(r);
                                              return t ? i.set(e.id, e) : i.delete(e.id), i;
                                          });
                                      }
                                  },
                                  e.id
                              )
                          ),
                          M && (0, i.jsx)(c.Spinner, {}),
                          (0, i.jsx)('div', { ref: A })
                      ]
                  }),
            (0, i.jsx)('div', {
                className: n()(S.footer, S.footerSeparator),
                children: (0, i.jsx)(c.Button, {
                    className: S.submit,
                    disabled: 0 === m.size && !I,
                    onClick: () => {
                        if (I) {
                            t();
                            return;
                        }
                        r([...m.values()]);
                    },
                    children: I ? L.intl.string(L.t.wpSqAQ) : L.intl.string(L.t.ItpQxs)
                })
            })
        ]
    });
};
