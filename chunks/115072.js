n.r(t),
    n.d(t, {
        default: function () {
            return N;
        }
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(772848),
    o = n(442837),
    l = n(780384),
    s = n(481060),
    c = n(53281),
    u = n(476326),
    m = n(273031),
    d = n(898463),
    h = n(118012),
    p = n(951394),
    f = n(210887),
    x = n(594174),
    v = n(768581),
    g = n(358085),
    j = n(223356),
    I = n(225452),
    C = n(388032),
    _ = n(541278),
    y = n(289575),
    b = n(371411);
let S = ['Android', 'iOS', 'Windows Mobile', 'Windows', 'Linux', 'Mac OS X'].map((e) => ({
    label: e,
    value: e
}));
function N(e) {
    var t, N, T, w, P;
    let { transitionState: k, onClose: E } = e,
        B = r.useRef(null),
        L = r.useRef(null),
        [D, O] = r.useState(''),
        [R, F] = r.useState(''),
        [Z, A] = r.useState(),
        [G, M] = r.useState(''),
        [V, W] = r.useState([]),
        [H, z] = r.useState(),
        [q, U] = r.useState(),
        [K, X] = r.useState(!1),
        [Y, J] = r.useState(''),
        [Q, $] = r.useState(
            (function (e) {
                switch (e) {
                    case 'windows':
                        return 'Windows';
                    case 'macos':
                        return 'Mac OS X';
                    case 'linux':
                        return 'Linux';
                }
                return '';
            })((0, g.getOS)())
        ),
        [ee, et] = r.useState(''),
        [en, ei] = r.useState(''),
        [er, ea] = r.useState(''),
        [eo, el] = r.useState(''),
        [es, ec] = r.useState(!1),
        [eu, em] = r.useState(!1),
        [ed, eh] = r.useState(!1),
        ep = (0, o.e7)([f.Z], () => f.Z.theme),
        ef = (0, o.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        ex = () => {
            null == E || E();
        },
        ev = (e) => {
            W(V.filter((t) => t.id !== e));
        };
    async function eg() {
        var e;
        if ((eh(!1), '' === D || null == Z)) {
            ec(!0);
            return;
        }
        let t = null == H ? void 0 : null === (e = H.features) || void 0 === e ? void 0 : e.find((e) => (0, j.pD)(e) === q);
        em(!0), ec(!1);
        let r = (0, I.D)(
                V.map((e) => {
                    let { item: t } = e;
                    return t;
                })
            ),
            a =
                !0 === K
                    ? {
                          overridePlatformInformation: K,
                          device: Y,
                          operatingSystem: Q,
                          operatingSystemVersion: ee,
                          clientVersion: en,
                          clientBuildNumber: er,
                          locale: eo
                      }
                    : { overridePlatformInformation: K },
            o = await (0, j.ZD)(
                {
                    name: D,
                    description: R,
                    priority: Z,
                    feature: t,
                    url: G
                },
                a,
                r
            ).catch(() => eh(!0));
        em(!1),
            null != o && o.ok
                ? (ef && window.open(o.body.permalink_url, '_blank'),
                  ex(),
                  (0, s.openModalLazy)(async () => {
                      let { default: e } = await n.e('64648').then(n.bind(n, 81155));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              asanaTask: o.body
                          });
                  }))
                : eh(!0);
    }
    r.useEffect(() => {
        async function e() {
            z(await (0, j.WG)());
        }
        ef && e();
    }, [ef]),
        r.useEffect(() => {
            if (V.length > 0) {
                var e;
                null === (e = L.current) ||
                    void 0 === e ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });
            }
        }, [V]);
    let ej = (0, l.wj)(ep) ? y : b;
    return (0, i.jsx)(s.ModalRoot, {
        className: _.modalRoot,
        transitionState: k,
        'aria-label': C.intl.string(C.t.mCCdws),
        children: (0, i.jsx)(s.ModalContent, {
            className: _.modalContent,
            paddingFix: !1,
            children: (0, i.jsx)('div', {
                className: _.container,
                children: (0, i.jsx)(s.HeadingLevel, {
                    forceLevel: 1,
                    component: (0, i.jsx)('div', {
                        className: _.sidebarContainer,
                        children: (0, i.jsx)(h.Z, {
                            strong: !0,
                            color: h.Z.Colors.HEADER_PRIMARY,
                            size: h.Z.Sizes.SIZE_24,
                            children: (0, i.jsx)(s.H, { children: C.intl.string(C.t['5Lqopa']) })
                        })
                    }),
                    children: (0, i.jsxs)('div', {
                        className: _.contentContainer,
                        children: [
                            (0, i.jsx)('img', {
                                className: _.contentIcon,
                                alt: '',
                                src: ej
                            }),
                            (0, i.jsxs)('form', {
                                className: _.form,
                                onSubmit: eg,
                                children: [
                                    (0, i.jsx)(s.FormItem, {
                                        error: es && '' === D ? C.intl.string(C.t.EkokLy) : null,
                                        title: C.intl.string(C.t.OZRgj4),
                                        className: _.formInput,
                                        children: (0, i.jsx)(s.TextInput, {
                                            placeholder: 'Something is broken on this screen.',
                                            type: 'text',
                                            value: D,
                                            maxLength: 100,
                                            onChange: O
                                        })
                                    }),
                                    (0, i.jsxs)(s.FormItem, {
                                        title: C.intl.string(C.t['1SplHx']),
                                        className: _.formInput,
                                        children: [
                                            (0, i.jsx)(s.TextArea, {
                                                placeholder: 'What did you expect to see?',
                                                value: R,
                                                onChange: F
                                            }),
                                            (0, i.jsx)(s.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'info-help-text',
                                                children: 'You can add additional information/media on the ticket after submitting'
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(s.FormItem, {
                                        error: es && void 0 === Z ? C.intl.string(C.t.EkokLy) : null,
                                        title: C.intl.string(C.t.xMXLdX),
                                        className: _.formInput,
                                        children: (0, i.jsx)(s.SingleSelect, {
                                            renderOptionLabel: (e) =>
                                                (function (e) {
                                                    let t = e.priority;
                                                    return (0, i.jsxs)('div', {
                                                        className: _.formPriorityImageContainer,
                                                        children: [
                                                            (0, i.jsxs)('div', {
                                                                className: _.formPriorityTitleContainer,
                                                                children: [
                                                                    (0, i.jsx)('img', {
                                                                        alt: '',
                                                                        className: _.formPriorityImage,
                                                                        src: (0, v.gT)({
                                                                            id: t.emoji,
                                                                            animated: !0,
                                                                            size: 48
                                                                        })
                                                                    }),
                                                                    (0, i.jsx)(s.Text, {
                                                                        color: 'header-primary',
                                                                        variant: 'text-sm/semibold',
                                                                        className: _.formPriorityTitle,
                                                                        children: t.title
                                                                    })
                                                                ]
                                                            }),
                                                            (0, i.jsx)(s.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                className: _.formPriorityDescription,
                                                                children: t.description
                                                            })
                                                        ]
                                                    });
                                                })(e),
                                            onChange: A,
                                            options: (0, j.Tj)().map((e) => ({
                                                priority: e,
                                                value: e.value,
                                                label: e.title
                                            })),
                                            value: Z,
                                            maxVisibleItems: 3,
                                            closeOnSelect: !0
                                        })
                                    }),
                                    ef &&
                                        (0, i.jsx)(s.FormItem, {
                                            title: C.intl.string(C.t['77VVd3']),
                                            className: _.formInput,
                                            children: (0, i.jsx)(s.SearchableSelect, {
                                                value: q,
                                                options:
                                                    null !==
                                                        (P =
                                                            null == (t = H)
                                                                ? void 0
                                                                : null === (w = t.features) || void 0 === w
                                                                  ? void 0
                                                                  : null === (T = w.filter((e) => '' !== (0, j.pD)(e))) || void 0 === T
                                                                    ? void 0
                                                                    : null ===
                                                                            (N = T.map((e) => {
                                                                                var t;
                                                                                return {
                                                                                    label: null !== (t = e.name) && void 0 !== t ? t : '',
                                                                                    value: (0, j.pD)(e)
                                                                                };
                                                                            })) || void 0 === N
                                                                      ? void 0
                                                                      : N.sort((e, t) => e.label.localeCompare(t.label))) && void 0 !== P
                                                        ? P
                                                        : [],
                                                isDisabled: null == H,
                                                onChange: (e) => U(e)
                                            })
                                        }),
                                    (0, i.jsx)(s.FormItem, {
                                        title: C.intl.string(C.t['7p5pqq']),
                                        className: _.formInput,
                                        children: (0, i.jsx)(s.TextInput, {
                                            placeholder: C.intl.string(C.t.HewMzs),
                                            type: 'text',
                                            value: G,
                                            maxLength: 5000,
                                            onChange: M
                                        })
                                    }),
                                    (0, i.jsx)(s.FormItem, {
                                        className: _.formInput,
                                        children: (0, i.jsx)(s.Checkbox, {
                                            value: K,
                                            onChange: (e, t) => X(t),
                                            children: (0, i.jsx)(s.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'info-help-text',
                                                children: C.intl.string(C.t.ayhqiI)
                                            })
                                        })
                                    }),
                                    K
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(s.FormItem, {
                                                      title: C.intl.string(C.t.rrI4Tk),
                                                      className: _.formInput,
                                                      children: (0, i.jsx)(s.TextInput, {
                                                          placeholder: 'Device',
                                                          value: Y,
                                                          onChange: (e) => J(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.FormItem, {
                                                      title: C.intl.string(C.t.kcHxi4),
                                                      className: _.formInput,
                                                      children: (0, i.jsx)(s.SingleSelect, {
                                                          value: Q,
                                                          options: S,
                                                          onChange: (e) => $(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.FormItem, {
                                                      title: C.intl.string(C.t.rEtxdn),
                                                      className: _.formInput,
                                                      children: (0, i.jsx)(s.TextInput, {
                                                          placeholder: 'Operating System Version',
                                                          value: ee,
                                                          onChange: (e) => et(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.FormItem, {
                                                      title: C.intl.string(C.t['wy1M/v']),
                                                      className: _.formInput,
                                                      children: (0, i.jsx)(s.TextInput, {
                                                          placeholder: 'Client Version',
                                                          value: en,
                                                          onChange: (e) => ei(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.FormItem, {
                                                      title: C.intl.string(C.t.f7kbVl),
                                                      className: _.formInput,
                                                      children: (0, i.jsx)(s.TextInput, {
                                                          placeholder: 'Client Build Number',
                                                          value: er,
                                                          onChange: (e) => ea(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.FormItem, {
                                                      title: C.intl.string(C.t['4Z5+zs']),
                                                      className: _.formInput,
                                                      children: (0, i.jsx)(s.TextInput, {
                                                          placeholder: 'Locale',
                                                          value: eo,
                                                          onChange: (e) => el(e)
                                                      })
                                                  })
                                              ]
                                          })
                                        : null,
                                    (0, i.jsxs)(s.Button, {
                                        className: _.uploadButton,
                                        children: [
                                            C.intl.string(C.t.HVxmOD),
                                            (0, i.jsx)(c.Z, {
                                                ref: B,
                                                onChange: (e) => {
                                                    var t, n;
                                                    (null === (n = e.currentTarget) || void 0 === n ? void 0 : null === (t = n.files) || void 0 === t ? void 0 : t[0]) != null &&
                                                        W([
                                                            ...V,
                                                            ...Array.from(e.currentTarget.files).map(
                                                                (e) =>
                                                                    new u.ZP({
                                                                        id: (0, a.Z)(),
                                                                        file: e,
                                                                        platform: u.ow.WEB
                                                                    })
                                                            )
                                                        ]);
                                                },
                                                multiple: !0
                                            })
                                        ]
                                    }),
                                    V.length > 0
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('div', {
                                                      className: _.imageOptionsContainer,
                                                      children: (0, i.jsx)(s.FormTitle, { children: 'Preview' })
                                                  }),
                                                  (0, i.jsx)('div', {
                                                      ref: L,
                                                      className: _.attachmentsGrid,
                                                      children:
                                                          V.length > 0 &&
                                                          V.map((e) =>
                                                              (0, i.jsxs)(
                                                                  'div',
                                                                  {
                                                                      className: _.attachmentsGridItem,
                                                                      children: [
                                                                          (0, i.jsx)(s.Text, {
                                                                              variant: 'text-sm/normal',
                                                                              children: e.filename
                                                                          }),
                                                                          (0, i.jsxs)('div', {
                                                                              className: _.attachmentContainer,
                                                                              children: [
                                                                                  (0, i.jsx)(d.r, { upload: e }),
                                                                                  (0, i.jsx)('div', {
                                                                                      className: _.toolBar,
                                                                                      children: (0, i.jsx)(p.ZP, {
                                                                                          children: (0, i.jsx)(m.Z, {
                                                                                              tooltip: C.intl.string(C.t.vN7REx),
                                                                                              onClick: () => ev(e.id),
                                                                                              dangerous: !0,
                                                                                              children: (0, i.jsx)(s.TrashIcon, {
                                                                                                  size: 'md',
                                                                                                  color: 'currentColor'
                                                                                              })
                                                                                          })
                                                                                      })
                                                                                  })
                                                                              ]
                                                                          })
                                                                      ]
                                                                  },
                                                                  e.id
                                                              )
                                                          )
                                                  })
                                              ]
                                          })
                                        : null,
                                    ed
                                        ? (0, i.jsx)(s.Text, {
                                              color: 'text-danger',
                                              variant: 'text-sm/normal',
                                              children: 'Something went wrong, try again!'
                                          })
                                        : null
                                ]
                            }),
                            (0, i.jsxs)(s.ModalFooter, {
                                className: _.submitContainer,
                                children: [
                                    (0, i.jsx)(s.Button, {
                                        className: _.formButton,
                                        look: s.ButtonLooks.BLANK,
                                        onClick: ex,
                                        children: (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            children: C.intl.string(C.t['ETE/oK'])
                                        })
                                    }),
                                    (0, i.jsx)(s.Button, {
                                        submitting: eu,
                                        className: _.formButton,
                                        onClick: eg,
                                        children: 'Submit and Open Report'
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
