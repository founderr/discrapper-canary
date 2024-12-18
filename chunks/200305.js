n.d(t, {
    Y: function () {
        return H;
    }
}),
    n(47120);
var l,
    i,
    s = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    d = n(442837),
    u = n(481060),
    c = n(893776),
    m = n(809206),
    f = n(607070),
    x = n(600164),
    h = n(339085),
    g = n(565138),
    v = n(894376),
    j = n(446495),
    p = n(601964),
    N = n(650774),
    C = n(271383),
    I = n(430824),
    M = n(594174),
    T = n(626135),
    F = n(768581),
    b = n(863249),
    E = n(944163),
    S = n(63568),
    y = n(246364),
    Z = n(983736),
    L = n(266395),
    P = n(990488),
    R = n(592286),
    A = n(981631),
    U = n(388032),
    w = n(832311),
    O = n(419851),
    _ = n(296507),
    B = n(866402),
    G = n(246403);
((i = l || (l = {}))[(i.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (i[(i.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (i[(i.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM');
let k = (e) => {
        let { headerId: t, email: n, password: l, setEmail: i, setPassword: r, emailError: o, passwordError: a } = e;
        return (0, s.jsxs)('div', {
            className: w.content,
            children: [
                (0, s.jsx)('div', {
                    className: w.applicationIconContainer,
                    children: (0, s.jsx)('img', {
                        alt: U.intl.string(U.t.ewGfjo),
                        src: O,
                        className: w.applicationIcon
                    })
                }),
                (0, s.jsx)(u.Heading, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: w.header,
                    children: U.intl.string(U.t.MhcDLy)
                }),
                (0, s.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: U.intl.string(U.t.SPlaR0)
                }),
                (0, s.jsx)('hr', { className: w.divider }),
                (0, s.jsx)(u.FormItem, {
                    title: U.intl.string(U.t.dI4d4e),
                    className: w.formItem,
                    children: (0, s.jsx)(u.TextInput, {
                        value: n,
                        error: o,
                        onChange: i,
                        autoFocus: !0
                    })
                }),
                (0, s.jsx)(u.FormItem, {
                    title: U.intl.string(U.t['CIGa+/']),
                    className: w.formItem,
                    children: (0, s.jsx)(u.TextInput, {
                        type: 'password',
                        value: l,
                        error: a,
                        onChange: r
                    })
                })
            ]
        });
    },
    V = (e) => {
        let { headerId: t, email: n } = e;
        return (0, s.jsxs)('div', {
            className: w.content,
            children: [
                (0, s.jsx)('img', {
                    alt: U.intl.string(U.t.wNAbl5),
                    src: G,
                    className: w.applicationIcon
                }),
                (0, s.jsx)(u.Heading, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: w.header,
                    children: U.intl.format(U.t.v01XgI, { email: n })
                }),
                (0, s.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: U.intl.string(U.t['/Hw5aW'])
                }),
                (0, s.jsx)(u.Button, {
                    className: w.resendButton,
                    size: u.Button.Sizes.NONE,
                    look: u.Button.Looks.LINK,
                    onClick: () => c.Z.verifyResend(),
                    children: U.intl.string(U.t['MLk/mJ'])
                })
            ]
        });
    },
    H = (e) => {
        var t;
        let { guildId: n, formState: l, updateFormState: i, isPreview: r = !1, disableVerification: o = !1 } = e,
            a = (0, d.e7)([E.Z], () => E.Z.get(n));
        if (null == a) return null;
        let u = null !== (t = null != l ? l : null == a ? void 0 : a.formFields) && void 0 !== t ? t : [],
            c = r ? P.W : P.r;
        return (0, s.jsx)(c, {
            guildId: n,
            formFields: u,
            updateFormFields: i,
            disableVerification: o
        });
    },
    z = () =>
        n
            .e('26176')
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    J = (e) => {
        let { headerId: t, guildId: n, formState: l, updateFormState: i, useReducedMotion: r, isPreview: o = !1 } = e;
        return (0, s.jsxs)('div', {
            className: w.content,
            children: [
                (0, s.jsxs)('div', {
                    className: w.animationAndSparklesContainer,
                    children: [
                        (0, s.jsx)('img', {
                            alt: U.intl.string(U.t.VoB8OT),
                            src: B,
                            className: a()(w.sparkleIcon, w.sparkleBottom)
                        }),
                        (0, s.jsx)(u.LottieAnimation, {
                            importData: z,
                            shouldAnimate: !r,
                            className: w.animation
                        }),
                        (0, s.jsx)('img', {
                            alt: U.intl.string(U.t.VoB8OT),
                            src: _,
                            className: a()(w.sparkleIcon, w.sparkleTop)
                        })
                    ]
                }),
                (0, s.jsx)(u.Heading, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: w.header,
                    children: U.intl.string(U.t.DrEECw)
                }),
                (0, s.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: w.subheader,
                    children: U.intl.string(U.t['7D3C5u'])
                }),
                (0, s.jsx)('hr', { className: w.divider }),
                (0, s.jsx)(H, {
                    guildId: n,
                    formState: l,
                    updateFormState: i,
                    isPreview: o
                })
            ]
        });
    };
t.Z = (e) => {
    var t, n;
    let { headerId: l, guildId: i, onClose: o, onComplete: c, inviteCode: P, isPreview: O = !1, disableVerification: _ = !1 } = e,
        B = (0, L.rb)((e) => e.hasUnsubmittedChanges),
        G = (0, d.e7)([I.Z], () => I.Z.getGuild(i)),
        H = (0, d.e7)([E.Z], () => E.Z.get(i)),
        z = (0, S.jS)(i, 'MemberVerificationScreens'),
        D = (0, d.e7)([v.Z], () => v.Z.pendingState),
        Q = r.useMemo(() => {
            var e, t;
            let n;
            if (!O || !z) return null;
            if ((null == D ? void 0 : D.joinType) === j.A.APPLY && null != D.pendingVerificationFields) n = [...D.pendingVerificationFields];
            else if ((null == D ? void 0 : D.joinType) === j.A.INVITE && null != D.termRules) {
                let e = D.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
                n = [
                    {
                        field_type: y.QJ.TERMS,
                        label: U.intl.string(U.t['9suSIC']),
                        values: e,
                        required: !0
                    }
                ];
            }
            return null == n
                ? null
                : {
                      version: null !== (e = null == H ? void 0 : H.version) && void 0 !== e ? e : '',
                      description: null !== (t = null == H ? void 0 : H.description) && void 0 !== t ? t : '',
                      formFields: n,
                      guild: null == H ? void 0 : H.guild
                  };
        }, [z, O, D, H]),
        q = null != Q ? Q : H,
        Y = null == q ? void 0 : q.formFields.some((e) => e.field_type !== y.QJ.TERMS),
        W = (0, d.e7)([M.default], () => M.default.getCurrentUser()),
        X = !(null == W ? void 0 : W.isClaimed()),
        K = null == W ? void 0 : W.verified,
        $ = null == W ? void 0 : W.isPhoneVerified(),
        ee = (0, d.e7)([h.ZP], () => h.ZP.getGuildEmoji(i)),
        { storeMemberCount: et, storeOnlineCount: en } = (0, d.cj)([N.Z], () => ({
            storeMemberCount: N.Z.getMemberCount(i),
            storeOnlineCount: N.Z.getOnlineCount(i)
        })),
        [el, ei] = r.useState(null !== (t = null == q ? void 0 : q.formFields) && void 0 !== t ? t : []),
        [es, er] = r.useState(!1),
        [eo, ea] = r.useState(null),
        [ed, eu] = r.useState(!_ && X ? 0 : 2),
        [ec, em] = r.useState(''),
        [ef, ex] = r.useState(''),
        [eh, eg] = r.useState(null),
        [ev, ej] = r.useState(null),
        ep = null == q ? void 0 : q.guild,
        eN = r.useMemo(() => (null != G ? G : null != ep ? new p.ZP(ep) : null), [G, ep]),
        eC = null !== (n = null == eN ? void 0 : eN.hasFeature(A.oNc.CLAN)) && void 0 !== n && n,
        {
            emojisToRender: eI,
            remainingEmojis: eM,
            numGuildEmoji: eT
        } = r.useMemo(() => {
            var e;
            let t = [...(null !== (e = 0 === ee.length ? (null == ep ? void 0 : ep.emojis) : ee) && void 0 !== e ? e : [])].reverse(),
                n = 0,
                l = t.length;
            return (
                l > 12 && null != t && (n = Math.min(l - (t = t.slice(0, 11)).length, 99)),
                {
                    emojisToRender: t,
                    remainingEmojis: n,
                    numGuildEmoji: l
                }
            );
        }, [ep, ee]),
        eF = null != et ? et : null == ep ? void 0 : ep.approximate_member_count,
        eb = null != en ? en : null == ep ? void 0 : ep.approximate_presence_count;
    r.useEffect(
        () => (
            (0, L.a5)(!1),
            () => {
                (0, L.a5)(!1);
            }
        ),
        []
    ),
        r.useEffect(() => {
            if (!O) b.ZP.fetchVerificationForm(i, P);
        }, [i, P, O]),
        r.useEffect(() => {
            null != q && ei(q.formFields);
        }, [q]),
        r.useEffect(() => {
            null != W && W.isClaimed() && eu(2);
        }, [W]),
        r.useEffect(() => {
            1 === ed && K && eu(2);
        }, [ed, K]),
        r.useEffect(() => {
            null != i &&
                T.default.track(A.rMx.OPEN_MODAL, {
                    type: R.N4,
                    guild_id: i
                });
        }, [i]),
        r.useEffect(() => {
            let e = el.some((e) => e.field_type !== y.QJ.TERMS && (0, Z.OA)(e));
            e && !B ? (0, L.a5)(!0) : !e && B && (0, L.a5)(!1);
        }, [el, B]);
    let eE = r.useMemo(() => !(_ || (((null == eN ? void 0 : eN.verificationLevel) !== A.sFg.VERY_HIGH || (null == W ? void 0 : W.isStaff())) && K) || $) || el.some((e) => !(0, Z.OA)(e)), [el, eN, $, K, W, _]),
        eS = (0, d.e7)([f.Z], () => f.Z.useReducedMotion);
    if (null == eN) return null;
    let ey = async () => {
            er(!0), eg(null), ej(null);
            try {
                await (0, m.S2)({
                    email: ec,
                    password: ef
                }),
                    er(!1),
                    eu(1);
            } catch (n) {
                var e, t;
                eg(null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.email), ej(null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.password);
            } finally {
                er(!1);
            }
        },
        eZ = async () => {
            er(!0), ea(null);
            let e = null != W ? C.ZP.getMember(i, W.id) : null;
            if (null != e && !e.isPending) {
                null == o || o(!0);
                return;
            }
            try {
                await (null == c
                    ? void 0
                    : c({
                          ...(null != q ? q : E.t),
                          formFields: el
                      })),
                    null == o || o(!0);
            } catch (l) {
                var t, n;
                let e = null == l ? void 0 : l.body;
                (null == e ? void 0 : null === (t = e.errors) || void 0 === t ? void 0 : t.version) != null || (null == e ? void 0 : null === (n = e.errors) || void 0 === n ? void 0 : n.form_fields) != null ? ea(U.intl.string(U.t.PD09Sk)) : ea(null == e ? void 0 : e.message);
            } finally {
                er(!1);
            }
        };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(x.Z, {
                direction: x.Z.Direction.VERTICAL,
                justify: x.Z.Justify.BETWEEN,
                className: w.guildSidebar,
                shrink: 0,
                children: [
                    (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)(g.Z, {
                                guild: eN,
                                active: !0,
                                className: a()(w.guildIcon, { [w.guildIconNoIcon]: null == eN.icon })
                            }),
                            (0, s.jsx)(u.Heading, {
                                variant: 'heading-lg/semibold',
                                className: w.guildName,
                                children: null == eN ? void 0 : eN.name
                            }),
                            (0, s.jsx)(u.Text, {
                                className: w.guildDescription,
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: null == q ? void 0 : q.description
                            }),
                            null != eI && eI.length > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)('hr', { className: w.divider }),
                                          (0, s.jsx)(u.FormTitle, { children: U.intl.format(U.t.KHLg5e, { emojis: eT }) }),
                                          (0, s.jsxs)('div', {
                                              className: w.emojisContainer,
                                              children: [
                                                  eI.map((e) => {
                                                      let t = F.ZP.getEmojiURL({
                                                          id: e.id,
                                                          animated: !1,
                                                          size: 24
                                                      });
                                                      return (0, s.jsx)(
                                                          u.Tooltip,
                                                          {
                                                              text: ':'.concat(e.name, ':'),
                                                              children: (e) =>
                                                                  (0, s.jsx)('img', {
                                                                      ...e,
                                                                      width: 24,
                                                                      height: 24,
                                                                      src: t,
                                                                      className: w.emoji,
                                                                      alt: ''
                                                                  })
                                                          },
                                                          e.id
                                                      );
                                                  }),
                                                  null != eM && eM > 0
                                                      ? (0, s.jsx)(u.Heading, {
                                                            variant: 'heading-deprecated-12/semibold',
                                                            className: w.emoji,
                                                            color: 'header-secondary',
                                                            children: '+'.concat(eM)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        children: [
                            null != eb &&
                                (0, s.jsxs)(x.Z, {
                                    align: x.Z.Align.CENTER,
                                    className: w.onlineCount,
                                    children: [
                                        (0, s.jsx)('div', { className: w.dotOnline }),
                                        (0, s.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: U.intl.format(U.t['Oj3M6+'], { membersOnline: eb })
                                        })
                                    ]
                                }),
                            null != eF &&
                                (0, s.jsxs)(x.Z, {
                                    align: x.Z.Align.CENTER,
                                    children: [
                                        (0, s.jsx)('div', { className: w.dotMembers }),
                                        (0, s.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: U.intl.format(U.t.LM4ufX, { members: eF })
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: w.modal,
                children: [
                    (0, s.jsx)(u.ModalContent, {
                        className: w.modalContent,
                        children: (0, s.jsx)(u.Sequencer, {
                            className: a()(w.sequencer, { [w.centerContent]: 2 !== ed }),
                            steps: [0, 1, 2],
                            step: ed,
                            children: (() => {
                                switch (ed) {
                                    case 0:
                                        return (0, s.jsx)(k, {
                                            headerId: l,
                                            email: ec,
                                            password: ef,
                                            setEmail: em,
                                            setPassword: ex,
                                            emailError: eh,
                                            passwordError: ev
                                        });
                                    case 1:
                                        return (0, s.jsx)(V, {
                                            headerId: l,
                                            email: ec
                                        });
                                    case 2:
                                        return (0, s.jsx)(J, {
                                            headerId: l,
                                            guildId: i,
                                            formState: el,
                                            updateFormState: ei,
                                            isPreview: O,
                                            useReducedMotion: eS
                                        });
                                }
                            })()
                        })
                    }),
                    (() => {
                        switch (ed) {
                            case 0:
                                return (0, s.jsxs)(u.ModalFooter, {
                                    className: w.footer,
                                    children: [
                                        (0, s.jsx)(u.Button, {
                                            className: w.submitButton,
                                            type: 'submit',
                                            submitting: es,
                                            onClick: ey,
                                            disabled: 0 === ec.length || 0 === ef.length,
                                            children: U.intl.string(U.t.PDTjLC)
                                        }),
                                        (0, s.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-secondary',
                                            children: U.intl.string(U.t['9GPiR0'])
                                        })
                                    ]
                                });
                            case 1:
                                return null;
                            case 2:
                                return (0, s.jsxs)(u.ModalFooter, {
                                    className: w.footer,
                                    children: [
                                        (0, s.jsx)(u.Button, {
                                            className: w.submitButton,
                                            type: 'submit',
                                            submitting: es,
                                            onClick: eZ,
                                            color: u.Button.Colors.GREEN,
                                            disabled: null == c || eE,
                                            children: U.intl.string(U.t.geKm7u)
                                        }),
                                        null != eo &&
                                            (0, s.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-danger',
                                                children: eo
                                            }),
                                        null == eo &&
                                            Y &&
                                            (0, s.jsxs)('div', {
                                                className: w.disclaimerFooter,
                                                children: [
                                                    (0, s.jsx)(u.Text, {
                                                        color: 'header-secondary',
                                                        variant: 'text-xs/normal',
                                                        children: U.intl.string(U.t['+fPCTU'])
                                                    }),
                                                    eC &&
                                                        (0, s.jsx)(u.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: U.intl.string(U.t.FwXzw8)
                                                        })
                                                ]
                                            })
                                    ]
                                });
                        }
                    })()
                ]
            })
        ]
    });
};
