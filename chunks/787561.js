n.d(t, {
    X: function () {
        return Z;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(544891),
    c = n(433517),
    d = n(481060),
    u = n(852860),
    m = n(933557),
    h = n(769654),
    g = n(984933),
    x = n(650774),
    p = n(430824),
    f = n(496675),
    C = n(699516),
    I = n(594174),
    _ = n(434404),
    N = n(999382),
    v = n(54842),
    T = n(981631),
    j = n(731455),
    E = n(388032),
    S = n(105459),
    b = n(922905);
let R = 'dismissedCommunityFeaturesUpsell',
    Z = () => {
        let e;
        let {
                guild: t,
                submitting: n,
                errors: r
            } = (0, a.cj)([N.Z], () => ({
                submitting: N.Z.isSubmitting(),
                guild: N.Z.getGuild(),
                errors: N.Z.getErrors()
            })),
            l = Object.keys(r),
            s = l.length > 0 ? l[0] : null;
        if ('rules_channel_id' === s) e = E.intl.string(E.t['7IrBYm']);
        else e = null != s ? r[s] : void 0;
        return (0, i.jsx)(u.Z, {
            submitting: n,
            onReset: () => {
                if (null != t) _.Z.init(t.id);
            },
            onSave: () => {
                if (null != t)
                    _.Z.saveGuild(t.id, {
                        rulesChannelId: t.rulesChannelId,
                        preferredLocale: t.preferredLocale,
                        safetyAlertsChannelId: t.safetyAlertsChannelId,
                        publicUpdatesChannelId: t.publicUpdatesChannelId,
                        description: t.description,
                        features: t.features
                    });
            },
            errorMessage: e
        });
    },
    A = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [s, u] = r.useState(!0 === c.K.get(R)),
            m = (0, a.e7)([x.Z], () => {
                var e;
                return null !== (e = x.Z.getMemberCount(l.id)) && void 0 !== e ? e : 0;
            }),
            [g, f] = r.useState(!1);
        r.useEffect(() => {
            o.tn
                .get(T.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id))
                .then((e) => {
                    f(e.body.eligible_for_admin_server);
                })
                .catch(() => f(!1));
        }, []);
        let C = (0, a.e7)([p.Z], () => p.Z.getGuild('942897714956472401')),
            I = l.isCommunity() && m >= 1000 && g && !(null != C);
        if (t && n && !I) return null;
        let N = async () => {
            try {
                let e = await o.tn.post({
                    url: T.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0
                });
                _.Z.close(), (0, h.X)(e.body.id);
            } catch {}
        };
        return s && !I
            ? null
            : (0, i.jsxs)('div', {
                  className: S.upsellContainer,
                  children: [
                      (0, i.jsxs)('div', {
                          className: S.upsellContent,
                          children: [
                              (0, i.jsx)('img', {
                                  src: b,
                                  alt: '',
                                  width: 60,
                                  className: S.upsellImage
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(d.Heading, {
                                          variant: 'heading-md/semibold',
                                          className: S.upsellHeader,
                                          children: E.intl.string(E.t['pR/BgY'])
                                      }),
                                      (0, i.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          children: E.intl.string(E.t['V+Yo1t'])
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(d.Button, {
                          'aria-label': E.intl.string(E.t.cpT0Cg),
                          look: d.Button.Looks.BLANK,
                          size: d.Button.Sizes.NONE,
                          className: S.upsellClose,
                          onClick: () => {
                              c.K.set(R, !0), u(!0);
                          },
                          children: (0, i.jsx)(d.XSmallIcon, {
                              size: 'md',
                              color: 'currentColor'
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: S.upsellFooter,
                          children: [
                              I &&
                                  (0, i.jsx)(d.Button, {
                                      size: d.Button.Sizes.SMALL,
                                      onClick: N,
                                      className: S.upsellButton,
                                      children: E.intl.string(E.t.iF1Asr)
                                  }),
                              n
                                  ? null
                                  : (0, i.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            _.Z.setSection(T.pNK.ONBOARDING);
                                        },
                                        className: S.upsellButton,
                                        children: E.intl.string(E.t['S/DfiY'])
                                    }),
                              t
                                  ? null
                                  : (0, i.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            _.Z.setSection(T.pNK.DISCOVERY);
                                        },
                                        className: S.upsellButton,
                                        color: d.Button.Colors.PRIMARY,
                                        children: E.intl.string(E.t['0kmJd3'])
                                    }),
                              (0, i.jsx)(d.Button, {
                                  size: d.Button.Sizes.SMALL,
                                  onClick: () => {
                                      _.Z.setSection(T.pNK.ANALYTICS);
                                  },
                                  className: S.upsellButton,
                                  color: d.Button.Colors.PRIMARY,
                                  children: E.intl.string(E.t.BQIYTU)
                              })
                          ]
                      })
                  ]
              });
    },
    L = () => {
        let e = (0, a.e7)([N.Z], () => N.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, a.cj)([f.Z], () => ({
                canManageGuild: f.Z.can(T.Plq.MANAGE_GUILD, e),
                isGuildAdmin: f.Z.can(T.Plq.ADMINISTRATOR, e)
            })),
            l = (0, a.e7)([g.ZP], () => (null != e ? g.ZP.getChannels(e.id) : null)),
            o = r.useMemo(j.jb, []),
            u = !0 !== c.K.get(R);
        if (null == e) return null;
        let h = [];
        null != l &&
            l[g.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === T.d4z.GUILD_TEXT &&
                    h.push({
                        value: t.id,
                        label: (0, m.F6)(t, I.default, C.Z, !0)
                    });
            });
        let x = () => {
                _.Z.init(e.id), _.Z.open(e.id, T.pNK.MEMBER_VERIFICATION);
            },
            p = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(T.oNc.COMMUNITY),
                    t.delete(T.oNc.DISCOVERABLE),
                    !e.hasFeature(T.oNc.CLAN) && t.delete(T.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                    t.delete(T.oNc.PREVIEW_ENABLED),
                    _.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    });
            },
            v = (e) => {
                _.Z.updateGuild({ rulesChannelId: e });
            },
            b = (e) => {
                _.Z.updateGuild({ safetyAlertsChannelId: e });
            },
            Z = (e) => {
                _.Z.updateGuild({ publicUpdatesChannelId: e });
            },
            L = (e) => {
                _.Z.updateGuild({ preferredLocale: e });
            },
            y = (e) => {
                _.Z.updateGuild({ description: e });
            },
            D = () => {
                e.features.has(T.oNc.DISCOVERABLE) && e.features.has(T.oNc.PARTNERED)
                    ? (0, d.openModal)((e) =>
                          (0, i.jsx)(d.ConfirmModal, {
                              ...e,
                              header: E.intl.string(E.t.iBnVHR),
                              confirmText: E.intl.string(E.t['cY+Ooa']),
                              cancelText: E.intl.string(E.t.oEAioK),
                              onConfirm: p,
                              children: (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  children: E.intl.string(E.t['P+Sh8f'])
                              })
                          })
                      )
                    : e.features.has(T.oNc.DISCOVERABLE)
                      ? (0, d.openModal)((e) =>
                            (0, i.jsx)(d.ConfirmModal, {
                                ...e,
                                header: E.intl.string(E.t.iBnVHR),
                                confirmText: E.intl.string(E.t['cY+Ooa']),
                                cancelText: E.intl.string(E.t.oEAioK),
                                onConfirm: p,
                                children: (0, i.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: E.intl.string(E.t['eMx/ub'])
                                })
                            })
                        )
                      : e.features.has(T.oNc.PARTNERED)
                        ? (0, d.openModal)((e) =>
                              (0, i.jsx)(d.ConfirmModal, {
                                  ...e,
                                  header: E.intl.string(E.t.iBnVHR),
                                  confirmText: E.intl.string(E.t['cY+Ooa']),
                                  cancelText: E.intl.string(E.t.oEAioK),
                                  onConfirm: p,
                                  children: (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: E.intl.string(E.t.l1wLeX)
                                  })
                              })
                          )
                        : e.features.has(T.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !e.features.has(T.oNc.CLAN)
                          ? (0, d.openModal)((e) =>
                                (0, i.jsx)(d.ConfirmModal, {
                                    ...e,
                                    header: E.intl.string(E.t.iBnVHR),
                                    confirmButtonColor: d.Button.Colors.BRAND,
                                    confirmText: E.intl.string(E.t.izNBMz),
                                    cancelText: E.intl.string(E.t.oEAioK),
                                    onConfirm: x,
                                    children: (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        children: E.intl.string(E.t.kQzUNj)
                                    })
                                })
                            )
                          : p();
            };
        return (0, i.jsxs)(d.FormSection, {
            title: E.intl.string(E.t.nRtNqq),
            tag: d.FormTitleTags.H1,
            children: [
                u
                    ? (0, i.jsx)(A, {
                          discoveryEnabled: e.features.has(T.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(T.oNc.GUILD_ONBOARDING),
                          guild: e
                      })
                    : null,
                (0, i.jsxs)(d.FormSection, {
                    className: s()(S.twoColumnFormSection, S.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: S.formTitle,
                                    children: E.intl.string(E.t.otcXPz)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.intl.string(E.t.BtwmYG)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.rulesChannelId,
                                options: h,
                                onChange: v,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: S.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: s()(S.twoColumnFormSection, S.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: S.formTitle,
                                    children: E.intl.string(E.t.vAyDGR)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.intl.string(E.t.ZFeonp)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.publicUpdatesChannelId,
                                options: h,
                                onChange: Z,
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: S.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: s()(S.twoColumnFormSection, S.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: S.formTitle,
                                    children: E.intl.string(E.t.sMkYEx)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.intl.string(E.t.htioQk)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.safetyAlertsChannelId,
                                options: h,
                                onChange: b,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: S.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: S.twoColumnFormSection,
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: S.formTitle,
                                    children: E.intl.string(E.t.pO60f3)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.intl.string(E.t.aIR73d)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.preferredLocale,
                                options: o,
                                onChange: L,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: S.divider }),
                (() => {
                    var n;
                    if (null != e)
                        return (0, i.jsxs)(d.FormSection, {
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: S.formTitle,
                                    children: E.intl.string(E.t['RSfm+v'])
                                }),
                                (0, i.jsx)(d.FormText, {
                                    className: S.description,
                                    type: d.FormTextTypes.DESCRIPTION,
                                    children: E.intl.string(E.t['/B6PR0'])
                                }),
                                (0, i.jsx)(d.TextArea, {
                                    value: null !== (n = e.description) && void 0 !== n ? n : '',
                                    placeholder: E.intl.string(E.t.Nvfows),
                                    onChange: y,
                                    maxLength: 120,
                                    disabled: !t
                                })
                            ]
                        });
                })(),
                (0, i.jsx)(d.FormDivider, { className: S.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: S.twoColumnFormSection,
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: S.formTitle,
                                    children: E.intl.string(E.t.c1BmbG)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.intl.string(E.t.aQzVFx)
                                })
                            ]
                        }),
                        (0, i.jsx)(d.Tooltip, {
                            text: n ? null : E.intl.string(E.t['pjG+T0']),
                            'aria-label': n ? void 0 : E.intl.string(E.t['pjG+T0']),
                            children: (e) =>
                                (0, i.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    onClick: D,
                                    color: d.Button.Colors.RED,
                                    disabled: !n,
                                    ...e,
                                    children: E.intl.string(E.t.c1BmbG)
                                })
                        })
                    ]
                })
            ]
        });
    };
t.Z = () => {
    let e = (0, a.e7)([N.Z], () => N.Z.getGuild());
    return null == e ? null : e.features.has(T.oNc.COMMUNITY) ? (0, i.jsx)(L, {}) : (0, i.jsx)(v.Z, { guild: e });
};
