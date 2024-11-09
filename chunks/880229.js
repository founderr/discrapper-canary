n.d(t, {
    C: function () {
        return W;
    },
    K: function () {
        return G;
    }
}),
    n(47120),
    n(390547);
var i,
    r,
    l = n(200651),
    s = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(75124),
    d = n(149765),
    u = n(866442),
    m = n(442837),
    h = n(902704),
    g = n(477690),
    x = n(481060),
    p = n(596454),
    f = n(471445),
    C = n(605436),
    I = n(91218),
    _ = n(313201),
    N = n(339085),
    v = n(518738),
    T = n(131704),
    j = n(324067),
    S = n(430824),
    b = n(259580),
    E = n(624138),
    R = n(817460),
    Z = n(166803),
    A = n(629262),
    L = n(686807),
    y = n(981631),
    D = n(388032),
    O = n(954477);
let M = (0, _.hQ)(),
    P = (0, _.hQ)(),
    k = (0, E.Mg)(g.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function w(e) {
    var t;
    let { emojiId: n, emojiName: i, className: r } = e,
        s = (0, m.e7)([N.ZP], () => (null != n ? N.ZP.getCustomEmojiById(n) : void 0));
    return (0, l.jsx)(p.Z, {
        emojiId: n,
        emojiName: i,
        animated: null !== (t = null == s ? void 0 : s.animated) && void 0 !== t && t,
        className: r
    });
}
function B(e) {
    let { icon: t, children: n, checked: i, disabled: r = !1, onChange: s } = e,
        a = i || r;
    return (0, l.jsxs)('label', {
        className: o()(O.row, {
            [O.checked]: a,
            [O.disabled]: r
        }),
        children: [
            (0, l.jsx)('div', {
                className: O.rowIconWrapper,
                children: t
            }),
            (0, l.jsx)('div', {
                className: O.rowText,
                children: n
            }),
            (0, l.jsxs)('div', {
                className: O.rowCheckbox,
                children: [
                    (0, l.jsx)(x.FocusRing, {
                        children: (0, l.jsx)('input', {
                            type: 'checkbox',
                            checked: a,
                            disabled: r,
                            className: O.checkboxInput,
                            onChange: function (e) {
                                s(e.target.checked);
                            }
                        })
                    }),
                    (0, l.jsx)('div', {
                        className: O.checkboxDisplay,
                        children: (0, l.jsx)(x.CheckmarkLargeIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: O.checkboxIcon,
                            'aria-hidden': !0
                        })
                    })
                ]
            })
        ]
    });
}
function U(e) {
    let { title: t, selectAllText: n, benefits: i, dupeBenefits: r, selectedBenefits: s, onToggleBenefit: a } = e,
        o = i.every((e) => s.has(e));
    return i.length > 0
        ? (0, l.jsxs)(x.FormSection, {
              title: t,
              className: O.section,
              children: [
                  i.length - r.size > 1 &&
                      (0, l.jsx)('div', {
                          className: O.list,
                          children: (0, l.jsx)(B, {
                              icon: (0, l.jsx)(x.ChannelListPlusIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: O.rowIcon
                              }),
                              checked: o,
                              onChange: function (e) {
                                  for (let t of i) !r.has(t) && a(t, e);
                              },
                              children: (0, l.jsx)(x.Text, {
                                  color: 'header-primary',
                                  variant: 'text-md/normal',
                                  children: n
                              })
                          })
                      }),
                  (0, l.jsx)('div', {
                      className: O.list,
                      children: i.map((e) =>
                          (0, l.jsxs)(
                              B,
                              {
                                  icon: (0, l.jsx)(w, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: O.rowIcon
                                  }),
                                  checked: s.has(e),
                                  disabled: r.has(e),
                                  onChange: (t) => a(e, t),
                                  children: [
                                      (0, l.jsx)(x.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: (0, L.Z)(e)
                                      }),
                                      (0, l.jsx)(x.Text, {
                                          color: 'interactive-normal',
                                          variant: 'text-sm/normal',
                                          children: e.description
                                      })
                                  ]
                              },
                              (0, R.ab)(e)
                          )
                      )
                  })
              ]
          })
        : null;
}
function G(e) {
    let { transitionState: t, fromSubscriptionListing: n, existingChannelBenefits: i, existingIntangibleBenefits: r, onSubmit: a, onClose: o } = e,
        c = n.role_benefits.benefits,
        [d, u] = s.useState(() => new Set(c)),
        m = s.useMemo(() => c.filter(R.rC), [c]),
        g = (0, A.Z)(m),
        p = s.useMemo(() => c.filter(R.lL), [c]),
        f = s.useMemo(() => new Set(g.filter((e) => i.some((t) => t.ref_id === e.ref_id))), [g, i]),
        C = s.useMemo(() => new Set(p.filter((e) => r.some((t) => (0, h.Z)(e, t)))), [r, p]),
        I = (0, _.Dt)();
    function N(e, t) {
        u((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    return (0, l.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault();
            let t = c.filter((e) => d.has(e)),
                n = t.filter(R.rC).filter((e) => !f.has(e));
            a(
                n,
                t.filter(R.lL).filter((e) => !C.has(e))
            ),
                o();
        },
        children: (0, l.jsxs)(x.ModalRoot, {
            transitionState: t,
            'aria-labelledby': I,
            children: [
                (0, l.jsxs)(x.ModalHeader, {
                    children: [
                        (0, l.jsx)(x.Heading, {
                            id: I,
                            variant: 'heading-md/semibold',
                            children: D.intl.format(D.t['7zpiYG'], { tierName: n.name })
                        }),
                        (0, l.jsx)(x.ModalCloseButton, {
                            className: O.modalCloseButton,
                            onClick: o
                        })
                    ]
                }),
                (0, l.jsxs)(x.ModalContent, {
                    className: O.modalContent,
                    children: [
                        (0, l.jsx)(U, {
                            title: D.intl.string(D.t.S2kKzM),
                            selectAllText: D.intl.string(D.t['5Q/fLC']),
                            benefits: g,
                            dupeBenefits: f,
                            selectedBenefits: d,
                            onToggleBenefit: N
                        }),
                        (0, l.jsx)(U, {
                            title: D.intl.string(D.t.RdwKw8),
                            selectAllText: D.intl.string(D.t.aJPLVF),
                            benefits: p,
                            dupeBenefits: C,
                            selectedBenefits: d,
                            onToggleBenefit: N
                        })
                    ]
                }),
                (0, l.jsxs)(x.ModalFooter, {
                    children: [
                        (0, l.jsx)(x.Button, {
                            type: 'submit',
                            children: D.intl.string(D.t['27a219'])
                        }),
                        (0, l.jsx)(x.Button, {
                            look: x.Button.Looks.LINK,
                            color: x.Button.Colors.PRIMARY,
                            onClick: o,
                            children: D.intl.string(D.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function F(e) {
    var t;
    let { guildId: n, role: i, channelCount: r, onSelect: s } = e,
        a = (0, v.p9)({
            guildId: n,
            roleId: i.id,
            size: k
        });
    return (0, l.jsxs)(x.Clickable, {
        className: O.roleRow,
        onClick: s,
        children: [
            (0, l.jsx)('div', {
                className: O.rowIconWrapper,
                children:
                    null != a
                        ? (0, l.jsx)(I.Z, { ...a })
                        : (0, l.jsx)(x.ShieldUserIcon, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: null !== (t = i.colorString) && void 0 !== t ? t : (0, u.Rf)(y.p6O),
                              className: O.roleRowIconDefault
                          })
            }),
            (0, l.jsxs)('div', {
                className: O.rowText,
                children: [
                    (0, l.jsx)(x.Text, {
                        color: 'header-primary',
                        variant: 'text-md/normal',
                        className: O.__invalid_benefitTitle,
                        children: i.name
                    }),
                    (0, l.jsx)(x.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: D.intl.format(D.t['2KzH8/'], { num: r })
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: O.rowCheckbox,
                children: (0, l.jsx)(b.Z, { direction: b.Z.Directions.RIGHT })
            })
        ]
    });
}
function H(e) {
    let { guild: t, onSelect: n } = e,
        i = (0, m.e7)([S.Z], () => S.Z.getRoles(t.id)),
        r = (0, m.e7)([j.Z], () => j.Z.getCategories(t.id)),
        a = s.useMemo(
            () =>
                r._categories.flatMap((e) =>
                    r[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return T.zS.has(t.type);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t;
                        })
                ),
            [r]
        ),
        o = s.useMemo(
            () =>
                Object.values(i).flatMap((e) => {
                    var n;
                    if ((0, C.pM)(t.id, e.id) || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || d.Db(e.permissions, y.TC2)) return [];
                    let i = (0, Z.Z)(a, e).length;
                    return i > 0
                        ? {
                              role: e,
                              channelCount: i
                          }
                        : [];
                }),
            [t, i, a]
        );
    return o.length > 0
        ? (0, l.jsx)('div', {
              className: O.list,
              children: o.map((e) =>
                  (0, l.jsx)(
                      F,
                      {
                          guildId: t.id,
                          role: e.role,
                          channelCount: e.channelCount,
                          onSelect: () => n(e.role)
                      },
                      e.role.id
                  )
              )
          })
        : (0, l.jsx)(x.Text, {
              variant: 'text-md/normal',
              children: D.intl.string(D.t.u09gKi)
          });
}
function z(e) {
    let { onClose: t, guildId: n, onSelect: i } = e,
        r = (0, m.e7)([S.Z], () => S.Z.getGuild(n));
    return null == r
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)(x.ModalHeader, {
                      children: [
                          (0, l.jsx)(x.Heading, {
                              id: M,
                              variant: 'heading-md/semibold',
                              children: D.intl.string(D.t['3JrZ/P'])
                          }),
                          (0, l.jsx)(x.ModalCloseButton, {
                              className: O.modalCloseButton,
                              onClick: t
                          })
                      ]
                  }),
                  (0, l.jsx)(x.ModalContent, {
                      className: O.modalContent,
                      children: (0, l.jsx)(H, {
                          guild: r,
                          onSelect: i
                      })
                  })
              ]
          });
}
function V(e) {
    let { onClose: t, guildId: n, role: i, onCancel: r, onImport: a } = e,
        o = s.useRef(i);
    null != i && (o.current = i);
    let d = null != i ? i : o.current,
        u = (0, c.Z)(() => {
            let e = j.Z.getCategories(n);
            return e._categories.flatMap((t) =>
                e[t.channel.id]
                    .filter((e) => {
                        let { channel: t } = e;
                        return T.zS.has(t.type);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    })
            );
        }),
        m = s.useMemo(() => (0, Z.Z)(u, d), [u, d]),
        [h, g] = s.useState(() => new Set(m.map((e) => e.id)));
    function p(e, t) {
        g((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    return (0, l.jsxs)('form', {
        onSubmit: function (e) {
            e.preventDefault(), a(m.map((e) => e.id).filter((e) => h.has(e))), t();
        },
        className: O.slideForm,
        children: [
            (0, l.jsxs)(x.ModalHeader, {
                children: [
                    (0, l.jsx)(x.Heading, {
                        id: P,
                        variant: 'heading-md/semibold',
                        children: D.intl.format(D.t.iuPodH, { roleName: d.name })
                    }),
                    (0, l.jsx)(x.ModalCloseButton, {
                        className: O.modalCloseButton,
                        onClick: t
                    })
                ]
            }),
            (0, l.jsxs)(x.ModalContent, {
                className: O.modalContent,
                children: [
                    m.length > 1 &&
                        (0, l.jsx)('div', {
                            className: O.list,
                            children: (0, l.jsx)(B, {
                                icon: (0, l.jsx)(x.ChannelListPlusIcon, {
                                    size: 'md',
                                    color: 'currentColor'
                                }),
                                checked: h.size === m.length,
                                onChange: function (e) {
                                    for (let t of m) p(t.id, e);
                                },
                                children: (0, l.jsx)(x.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: D.intl.string(D.t['5Q/fLC'])
                                })
                            })
                        }),
                    (0, l.jsx)('div', {
                        className: O.list,
                        children: m.map((e) => {
                            var t;
                            let n = null !== (t = (0, f.Th)(e.type)) && void 0 !== t ? t : x.TextIcon;
                            return (0, l.jsx)(
                                B,
                                {
                                    icon: (0, l.jsx)('div', {
                                        className: O.rowIcon,
                                        children: (0, l.jsx)(n, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: '100%',
                                            height: '100%'
                                        })
                                    }),
                                    checked: h.has(e.id),
                                    onChange: (t) => p(e.id, t),
                                    children: (0, l.jsx)(x.Text, {
                                        color: 'header-primary',
                                        variant: 'text-md/normal',
                                        className: O.__invalid_benefitTitle,
                                        children: e.name
                                    })
                                },
                                e.id
                            );
                        })
                    })
                ]
            }),
            (0, l.jsxs)(x.ModalFooter, {
                children: [
                    (0, l.jsx)(x.Button, {
                        type: 'submit',
                        children: D.intl.string(D.t['1j8So6'])
                    }),
                    (0, l.jsx)(x.Button, {
                        look: x.Button.Looks.LINK,
                        color: x.Button.Colors.PRIMARY,
                        onClick: r,
                        children: D.intl.string(D.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
function W(e) {
    let { transitionState: t, guildId: n, onClose: i, onImport: r } = e,
        [a, o] = s.useState();
    return (0, l.jsx)(x.ModalRoot, {
        transitionState: t,
        'aria-labelledby': null == a ? M : P,
        children: (0, l.jsxs)(x.Slides, {
            contentDisplay: 'flex',
            activeSlide: null == a ? 0 : 1,
            width: 440,
            children: [
                (0, l.jsx)(x.Slide, {
                    id: 0,
                    children: (0, l.jsx)(z, {
                        onClose: i,
                        guildId: n,
                        onSelect: o
                    })
                }),
                (0, l.jsx)(x.Slide, {
                    id: 1,
                    children: (0, l.jsx)(V, {
                        onClose: i,
                        guildId: n,
                        role: a,
                        onCancel: () => o(void 0),
                        onImport: r
                    })
                })
            ]
        })
    });
}
((r = i || (i = {}))[(r.SELECT_ROLE = 0)] = 'SELECT_ROLE'), (r[(r.SELECT_CHANNELS = 1)] = 'SELECT_CHANNELS');
