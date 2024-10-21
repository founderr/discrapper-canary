n.r(t),
    n.d(t, {
        default: function () {
            return p;
        }
    }),
    n(47120);
var s = n(200651),
    o = n(192379),
    l = n(481060),
    r = n(893776),
    a = n(809206),
    c = n(600164),
    i = n(390885),
    u = n(626135),
    d = n(361207),
    m = n(981631),
    _ = n(630724),
    f = n(689938),
    C = n(35928);
function N(e) {
    let { email: t, setEmail: n, claimRequired: u, onSuccess: d, onClose: m } = e,
        [N, A] = o.useState(),
        [p, T] = o.useState(''),
        [g, S] = o.useState(''),
        [I, M] = o.useState(!1);
    o.useEffect(() => i.Z.flowStep(_.MK.ANY, _.mx.CLAIM_ACCOUNT), []);
    let E = async (e) => {
        e.preventDefault(), M(!0), A(''), S('');
        try {
            await (0, a.S2)({
                email: t,
                password: p
            }),
                M(!1),
                d();
        } catch (e) {
            var n, s;
            (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.email) && A(e.body.email), (null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.password) && S(e.body.password), M(!1);
        }
    };
    return (0, s.jsxs)('div', {
        children: [
            (0, s.jsxs)(l.ModalHeader, {
                className: C.formHeader,
                direction: c.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, s.jsx)('div', { className: C.formImage }),
                    (0, s.jsx)(l.Heading, {
                        className: C.formTitle,
                        variant: 'heading-xl/semibold',
                        children: f.Z.Messages.FINISH_SIGNING_UP
                    }),
                    (0, s.jsx)(l.Text, {
                        className: C.formBody,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u ? f.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : f.Z.Messages.CLAIM_ACCOUNT_BODY_2
                    }),
                    (0, s.jsx)(l.ModalCloseButton, {
                        className: C.closeButton,
                        onClick: m
                    })
                ]
            }),
            (0, s.jsx)(l.ModalContent, {
                children: (0, s.jsxs)('form', {
                    className: C.formContent,
                    onSubmit: E,
                    children: [
                        (0, s.jsx)(l.FormItem, {
                            title: f.Z.Messages.FORM_LABEL_EMAIL,
                            className: C.formItem,
                            children: (0, s.jsx)(l.TextInput, {
                                value: t,
                                error: N,
                                onChange: (e) => n(e),
                                autoFocus: !0
                            })
                        }),
                        (0, s.jsx)(l.FormItem, {
                            title: f.Z.Messages.FORM_LABEL_PASSWORD,
                            className: C.formItem,
                            children: (0, s.jsx)(l.TextInput, {
                                type: 'password',
                                value: p,
                                error: g,
                                onChange: (e) => T(e)
                            })
                        }),
                        (0, s.jsx)(l.Button, {
                            type: 'submit',
                            size: l.Button.Sizes.LARGE,
                            fullWidth: !0,
                            submitting: I,
                            disabled: 0 === t.length || 0 === p.length,
                            children: f.Z.Messages.CLAIM_ACCOUNT
                        }),
                        u &&
                            (0, s.jsx)(l.Button, {
                                className: C.logoutButton,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                size: l.Button.Sizes.NONE,
                                onClick: () => {
                                    r.Z.logout(), m();
                                },
                                children: f.Z.Messages.LOGOUT
                            })
                    ]
                })
            })
        ]
    });
}
function A(e) {
    let { email: t, claimRequired: n, onClose: r } = e,
        a = n ? f.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : f.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;
    function N() {
        window.open((0, d.t3)(), '_blank'),
            u.default.track(m.rMx.DOWNLOAD_APP, {
                platform: (0, d.DW)(),
                ptb: !1,
                released: !0,
                has_e_mail: !0,
                referring_location: 'Claim Modal',
                qr_code: !1
            });
    }
    return (
        o.useEffect(() => i.Z.flowStep(_.MK.ANY, _.mx.CLAIM_ACCOUNT_SUCCESS), []),
        (0, s.jsxs)('div', {
            children: [
                (0, s.jsxs)(l.ModalContent, {
                    className: C.successContent,
                    children: [
                        !n &&
                            (0, s.jsx)(l.ModalCloseButton, {
                                className: C.closeButton,
                                onClick: r
                            }),
                        (0, s.jsx)('div', { className: C.successImage }),
                        (0, s.jsx)(l.Text, {
                            className: C.successTitle,
                            variant: 'text-lg/semibold',
                            children: a.format({ email: t })
                        }),
                        (0, s.jsx)(l.Text, {
                            className: C.successPromotion,
                            variant: 'text-md/normal',
                            children: f.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
                        })
                    ]
                }),
                n
                    ? (0, s.jsx)(l.ModalFooter, {
                          direction: c.Z.Direction.VERTICAL,
                          children: (0, s.jsx)(l.Button, {
                              size: l.Button.Sizes.LARGE,
                              onClick: r,
                              children: f.Z.Messages.OKAY
                          })
                      })
                    : (0, s.jsx)(l.ModalFooter, {
                          direction: c.Z.Direction.VERTICAL,
                          children: (0, s.jsx)(l.Button, {
                              color: l.Button.Colors.BRAND,
                              size: l.Button.Sizes.LARGE,
                              onClick: N,
                              children: f.Z.Messages.CLAIM_ACCOUNT_GET_APP
                          })
                      })
            ]
        })
    );
}
function p(e) {
    let { onClose: t, transitionState: n, claimRequired: r = !1 } = e,
        [a, c] = o.useState(''),
        [i, u] = o.useState(!1);
    return i
        ? (0, s.jsx)(l.ModalRoot, {
              transitionState: n,
              children: (0, s.jsx)(A, {
                  email: a,
                  claimRequired: r,
                  onClose: t
              })
          })
        : (0, s.jsx)(l.ModalRoot, {
              transitionState: n,
              children: (0, s.jsx)(N, {
                  email: a,
                  setEmail: c,
                  claimRequired: r,
                  onSuccess: () => u(!0),
                  onClose: t
              })
          });
}
