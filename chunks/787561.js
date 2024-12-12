n.d(t, {
    X: function () {
        return y;
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
    _ = n(594174),
    I = n(434404),
    v = n(999382),
    N = n(54842),
    T = n(929834),
    b = n(981631),
    j = n(388032),
    S = n(831609),
    E = n(922905);
let R = 'dismissedCommunityFeaturesUpsell',
    y = () => {
        let e;
        let {
                guild: t,
                submitting: n,
                errors: r
            } = (0, a.cj)([v.Z], () => ({
                submitting: v.Z.isSubmitting(),
                guild: v.Z.getGuild(),
                errors: v.Z.getErrors()
            })),
            l = Object.keys(r),
            s = l.length > 0 ? l[0] : null;
        if ('rules_channel_id' === s) e = j.intl.string(j.t['7IrBYm']);
        else e = null != s ? r[s] : void 0;
        return (0, i.jsx)(u.Z, {
            submitting: n,
            onReset: () => {
                if (null != t) I.Z.init(t.id);
            },
            onSave: () => {
                if (null != t)
                    I.Z.saveGuild(t.id, {
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
    Z = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [s, u] = r.useState(!0 === c.K.get(R)),
            m = (0, a.e7)([x.Z], () => {
                var e;
                return null !== (e = x.Z.getMemberCount(l.id)) && void 0 !== e ? e : 0;
            }),
            [g, f] = r.useState(!1);
        r.useEffect(() => {
            o.tn
                .get({
                    url: b.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0
                })
                .then((e) => {
                    f(e.body.eligible_for_admin_server);
                })
                .catch(() => f(!1));
        }, []);
        let C = (0, a.e7)([p.Z], () => p.Z.getGuild('942897714956472401')),
            _ = l.isCommunity() && m >= 1000 && g && !(null != C);
        if (t && n && !_) return null;
        let v = async () => {
            try {
                let e = await o.tn.post({
                    url: b.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                I.Z.close(), (0, h.X)(e.body.id);
            } catch {}
        };
        return s && !_
            ? null
            : (0, i.jsxs)('div', {
                  className: S.upsellContainer,
                  children: [
                      (0, i.jsxs)('div', {
                          className: S.upsellContent,
                          children: [
                              (0, i.jsx)('img', {
                                  src: E,
                                  alt: '',
                                  width: 60,
                                  className: S.upsellImage
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(d.Heading, {
                                          variant: 'heading-md/semibold',
                                          className: S.upsellHeader,
                                          children: j.intl.string(j.t['pR/BgY'])
                                      }),
                                      (0, i.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          children: j.intl.string(j.t['V+Yo1t'])
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(d.Button, {
                          'aria-label': j.intl.string(j.t.cpT0Cg),
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
                              _ &&
                                  (0, i.jsx)(d.Button, {
                                      size: d.Button.Sizes.SMALL,
                                      onClick: v,
                                      className: S.upsellButton,
                                      children: j.intl.string(j.t.iF1Asr)
                                  }),
                              n
                                  ? null
                                  : (0, i.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            I.Z.setSection(b.pNK.ONBOARDING);
                                        },
                                        className: S.upsellButton,
                                        children: j.intl.string(j.t['S/DfiY'])
                                    }),
                              t
                                  ? null
                                  : (0, i.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            I.Z.setSection(b.pNK.DISCOVERY);
                                        },
                                        className: S.upsellButton,
                                        color: d.Button.Colors.PRIMARY,
                                        children: j.intl.string(j.t['0kmJd3'])
                                    }),
                              (0, i.jsx)(d.Button, {
                                  size: d.Button.Sizes.SMALL,
                                  onClick: () => {
                                      I.Z.setSection(b.pNK.ANALYTICS);
                                  },
                                  className: S.upsellButton,
                                  color: d.Button.Colors.PRIMARY,
                                  children: j.intl.string(j.t.BQIYTU)
                              })
                          ]
                      })
                  ]
              });
    },
    A = () => {
        let e = (0, a.e7)([v.Z], () => v.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, a.cj)([f.Z], () => ({
                canManageGuild: f.Z.can(b.Plq.MANAGE_GUILD, e),
                isGuildAdmin: f.Z.can(b.Plq.ADMINISTRATOR, e)
            })),
            l = (0, a.e7)([g.ZP], () => (null != e ? g.ZP.getChannels(e.id) : null)),
            o = r.useMemo(T.jb, []),
            u = !0 !== c.K.get(R);
        if (null == e) return null;
        let h = [];
        null != l &&
            l[g.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === b.d4z.GUILD_TEXT &&
                    h.push({
                        value: t.id,
                        label: (0, m.F6)(t, _.default, C.Z, !0)
                    });
            });
        let x = () => {
                I.Z.init(e.id), I.Z.open(e.id, b.pNK.MEMBER_VERIFICATION);
            },
            p = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(b.oNc.COMMUNITY),
                    t.delete(b.oNc.DISCOVERABLE),
                    !e.hasFeature(b.oNc.CLAN) && t.delete(b.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                    t.delete(b.oNc.PREVIEW_ENABLED),
                    I.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    });
            },
            N = (e) => {
                I.Z.updateGuild({ rulesChannelId: e });
            },
            E = (e) => {
                I.Z.updateGuild({ safetyAlertsChannelId: e });
            },
            y = (e) => {
                I.Z.updateGuild({ publicUpdatesChannelId: e });
            },
            A = (e) => {
                I.Z.updateGuild({ preferredLocale: e });
            },
            L = (e) => {
                I.Z.updateGuild({ description: e });
            },
            D = () => {
                e.features.has(b.oNc.DISCOVERABLE) && e.features.has(b.oNc.PARTNERED)
                    ? (0, d.openModal)((e) =>
                          (0, i.jsx)(d.ConfirmModal, {
                              ...e,
                              header: j.intl.string(j.t.iBnVHR),
                              confirmText: j.intl.string(j.t['cY+Ooa']),
                              cancelText: j.intl.string(j.t.oEAioK),
                              onConfirm: p,
                              children: (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  children: j.intl.string(j.t['P+Sh8f'])
                              })
                          })
                      )
                    : e.features.has(b.oNc.DISCOVERABLE)
                      ? (0, d.openModal)((e) =>
                            (0, i.jsx)(d.ConfirmModal, {
                                ...e,
                                header: j.intl.string(j.t.iBnVHR),
                                confirmText: j.intl.string(j.t['cY+Ooa']),
                                cancelText: j.intl.string(j.t.oEAioK),
                                onConfirm: p,
                                children: (0, i.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: j.intl.string(j.t['eMx/ub'])
                                })
                            })
                        )
                      : e.features.has(b.oNc.PARTNERED)
                        ? (0, d.openModal)((e) =>
                              (0, i.jsx)(d.ConfirmModal, {
                                  ...e,
                                  header: j.intl.string(j.t.iBnVHR),
                                  confirmText: j.intl.string(j.t['cY+Ooa']),
                                  cancelText: j.intl.string(j.t.oEAioK),
                                  onConfirm: p,
                                  children: (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: j.intl.string(j.t.l1wLeX)
                                  })
                              })
                          )
                        : e.features.has(b.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !e.features.has(b.oNc.CLAN)
                          ? (0, d.openModal)((e) =>
                                (0, i.jsx)(d.ConfirmModal, {
                                    ...e,
                                    header: j.intl.string(j.t.iBnVHR),
                                    confirmButtonColor: d.Button.Colors.BRAND,
                                    confirmText: j.intl.string(j.t.izNBMz),
                                    cancelText: j.intl.string(j.t.oEAioK),
                                    onConfirm: x,
                                    children: (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        children: j.intl.string(j.t.kQzUNj)
                                    })
                                })
                            )
                          : p();
            };
        return (0, i.jsxs)(d.FormSection, {
            title: j.intl.string(j.t.nRtNqq),
            tag: d.FormTitleTags.H1,
            children: [
                u
                    ? (0, i.jsx)(Z, {
                          discoveryEnabled: e.features.has(b.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(b.oNc.GUILD_ONBOARDING),
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
                                    children: j.intl.string(j.t.otcXPz)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: j.intl.string(j.t.BtwmYG)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.rulesChannelId,
                                options: h,
                                onChange: N,
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
                                    children: j.intl.string(j.t.vAyDGR)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: j.intl.string(j.t.ZFeonp)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.publicUpdatesChannelId,
                                options: h,
                                onChange: y,
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
                                    children: j.intl.string(j.t.sMkYEx)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: j.intl.string(j.t.htioQk)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.safetyAlertsChannelId,
                                options: h,
                                onChange: E,
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
                                    children: j.intl.string(j.t.pO60f3)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: j.intl.string(j.t.aIR73d)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.preferredLocale,
                                options: o,
                                onChange: A,
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
                                    children: j.intl.string(j.t['RSfm+v'])
                                }),
                                (0, i.jsx)(d.FormText, {
                                    className: S.description,
                                    type: d.FormTextTypes.DESCRIPTION,
                                    children: j.intl.string(j.t['/B6PR0'])
                                }),
                                (0, i.jsx)(d.TextArea, {
                                    value: null !== (n = e.description) && void 0 !== n ? n : '',
                                    placeholder: j.intl.string(j.t.Nvfows),
                                    onChange: L,
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
                                    children: j.intl.string(j.t.c1BmbG)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: j.intl.string(j.t.aQzVFx)
                                })
                            ]
                        }),
                        (0, i.jsx)(d.Tooltip, {
                            text: n ? null : j.intl.string(j.t['pjG+T0']),
                            'aria-label': n ? void 0 : j.intl.string(j.t['pjG+T0']),
                            children: (e) =>
                                (0, i.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    onClick: D,
                                    color: d.Button.Colors.RED,
                                    disabled: !n,
                                    ...e,
                                    children: j.intl.string(j.t.c1BmbG)
                                })
                        })
                    ]
                })
            ]
        });
    };
t.Z = () => {
    let e = (0, a.e7)([v.Z], () => v.Z.getGuild());
    return null == e ? null : e.features.has(b.oNc.COMMUNITY) ? (0, i.jsx)(A, {}) : (0, i.jsx)(N.Z, { guild: e });
};
