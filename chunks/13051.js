n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    d = n(481060),
    u = n(139387),
    m = n(726542),
    h = n(600164),
    p = n(339085),
    g = n(434404),
    x = n(598077),
    f = n(430824),
    b = n(246946),
    v = n(259580),
    C = n(531087),
    N = n(768581),
    I = n(709054),
    j = n(486199),
    _ = n(981631),
    T = n(388032),
    S = n(101494),
    Z = n(113207);
function E(e) {
    let t,
        { guild: n, integration: r, editedIntegration: o, isExpanded: E, onToggleExpand: y, onDisable: A, onEnable: R } = e,
        k = (0, c.e7)([f.Z], () => f.Z.getRoles(n.id)),
        [L, O] = l.useState(!1),
        w = (0, c.e7)([b.Z], () => b.Z.hidePersonalInformation),
        M = l.useCallback(() => {
            O(!0), R(r);
        }, [r, R]),
        B = l.useCallback(() => {
            !r.syncing &&
                (0, d.openModal)((e) => {
                    let t = 0 === r.expire_behavior ? T.intl.string(T.t['6kpw4u']) : T.intl.string(T.t.fQUQIC);
                    return (0, i.jsx)(d.ConfirmModal, {
                        ...e,
                        header: T.intl.string(T.t.emx3lJ),
                        confirmText: t,
                        cancelText: T.intl.string(T.t['ETE/oK']),
                        onConfirm: () => A(r),
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-md/normal',
                            children: r.type === _.ABu.YOUTUBE ? T.intl.string(T.t.anKQWV) : T.intl.string(T.t['BW/xtr'])
                        })
                    });
                });
        }, [r, A]),
        P = l.useCallback(() => {
            g.Z.syncIntegration(n.id, r.id);
        }, [n.id, r.id]),
        D = l.useCallback(() => {
            null != r.role_id && (g.Z.setSection(_.pNK.ROLES), g.Z.selectRole(r.role_id));
        }, [r.role_id]),
        {
            serviceName: U,
            channelURL: F,
            expireBehaviorLabel: W,
            syncLabel: H,
            subscribersText: G
        } = l.useMemo(() => {
            var e, t, n, i, l;
            let a = null !== (n = null === (t = m.Z.get(r.type)) || void 0 === t ? void 0 : null === (e = t.getPlatformUserUrl) || void 0 === e ? void 0 : e.call(t, r.account)) && void 0 !== n ? n : '';
            switch (r.type) {
                case _.ABu.YOUTUBE:
                    return {
                        serviceName: T.intl.string(T.t.aS6cKy),
                        expireBehaviorLabel: T.intl.string(T.t.A5MiqK),
                        syncLabel: T.intl.string(T.t['7vHKVV']),
                        subscribersText: T.intl.formatToPlainString(T.t['7lNtcX'], { subscribers: null !== (i = r.subscriber_count) && void 0 !== i ? i : 0 }),
                        channelURL: a
                    };
                case _.ABu.TWITCH:
                default:
                    return {
                        serviceName: T.intl.string(T.t.q4pBGx),
                        expireBehaviorLabel: T.intl.string(T.t['S/WCrK']),
                        syncLabel: T.intl.string(T.t['0jbPKy']),
                        subscribersText: T.intl.formatToPlainString(T.t.RdUTrq, { subscribers: null !== (l = r.subscriber_count) && void 0 !== l ? l : 0 }),
                        channelURL: a
                    };
            }
        }, [r.account, r.subscriber_count, r.type]),
        { roleLink: z, syncDescriptionText: V } = l.useMemo(() => {
            let e, t;
            let n = null != r.role_id ? k[r.role_id] : null;
            e =
                null != n
                    ? (0, i.jsx)(d.Anchor, {
                          onClick: D,
                          children: n.name
                      })
                    : T.intl.string(T.t.PoWNfX);
            let l = m.Z.get(r.type);
            return {
                roleLink: e,
                syncDescriptionText: (t =
                    r.revoked && null != l
                        ? T.intl.formatToPlainString(T.t.G16Wjo, {
                              user: r.user,
                              platformName: l.name
                          })
                        : T.intl.formatToPlainString(T.t.unl3AA, { datetime: s()(r.synced_at).calendar() }))
            };
        }, [k, D, r.revoked, r.role_id, r.synced_at, r.type, r.user]),
        K = l.useMemo(() => {
            let e = p.ZP.getGuildEmoji(n.id),
                t = Object.values(k)
                    .filter((e) => null != e.tags && e.tags.integration_id === r.id)
                    .map((e) => e.id);
            return r.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter((e) => null != r.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e)))) : [];
        }, [n.id, k, r.enable_emoticons, r.id, r.role_id]);
    if (
        (l.useEffect(() => {
            (null == o ? void 0 : o.id) === r.id && (null == o ? void 0 : o.enabled) === !0 && O(!1);
        }, [o, r.id]),
        r.enabled && null != r.user)
    )
        t = [
            {
                icon: d.ClockIcon,
                text: w
                    ? T.intl.formatToPlainString(T.t.gcdJ8P, { timestamp: I.default.extractTimestamp(r.id) })
                    : T.intl.formatToPlainString(T.t.Nu9sam, {
                          user: null != r.user ? new x.Z(r.user).tag : null,
                          timestamp: I.default.extractTimestamp(r.id)
                      })
            }
        ];
    else {
        let e = new URL(F);
        t = [
            {
                text: T.intl.format(T.t.BegylZ, {
                    serviceName: U,
                    accountUrl: F,
                    accountUrlText: e.hostname + e.pathname
                })
            }
        ];
    }
    let q = (0, i.jsxs)(h.Z, {
            className: S.header,
            align: h.Z.Align.CENTER,
            children: [
                (0, i.jsx)(j.Z, {
                    name: ''.concat(r.name),
                    detailsClassName: S.description,
                    details: t
                }),
                r.enabled
                    ? (0, i.jsx)(h.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(v.Z, {
                              className: S.expandIcon,
                              expanded: E && !L,
                              'aria-hidden': !0
                          })
                      })
                    : (0, i.jsx)(h.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(d.Button, {
                              size: d.Button.Sizes.SMALL,
                              color: d.Button.Colors.PRIMARY,
                              onClick: M,
                              disabled: L,
                              children: L
                                  ? (0, i.jsx)(C.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                  : (0, i.jsx)(i.Fragment, { children: T.intl.string(T.t['7sCN8v']) })
                          })
                      })
            ]
        }),
        Y = null;
    return (
        E &&
            !L &&
            null != o &&
            (Y = (0, i.jsxs)(h.Z, {
                className: S.body,
                direction: h.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(d.FormDivider, { className: S.topDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, subscribersText: l, descriptionText: r, roleLink: a, onSync: o } = e;
                        return (0, i.jsxs)(h.Z, {
                            children: [
                                (0, i.jsxs)(h.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(d.FormTitle, {
                                            className: Z.marginBottom8,
                                            children: T.intl.string(T.t.eBtNBQ)
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            className: S.syncedRole,
                                            color: 'header-primary',
                                            variant: 'text-sm/normal',
                                            children: a
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(h.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(d.FormTitle, {
                                            className: Z.marginBottom8,
                                            children: n
                                        }),
                                        (0, i.jsxs)(h.Z, {
                                            justify: h.Z.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(h.Z, {
                                                    direction: h.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(d.Text, {
                                                            color: 'header-primary',
                                                            variant: 'text-sm/normal',
                                                            children: l
                                                        }),
                                                        (0, i.jsx)(d.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: r
                                                        })
                                                    ]
                                                }),
                                                (0, i.jsx)(d.Button, {
                                                    size: d.Button.Sizes.SMALL,
                                                    look: d.Button.Looks.FILLED,
                                                    color: d.Button.Colors.PRIMARY,
                                                    disabled: t.syncing || t.revoked,
                                                    onClick: o,
                                                    children: t.syncing
                                                        ? (0, i.jsx)(C.Z, {
                                                              width: 24,
                                                              height: 24
                                                          })
                                                        : (0, i.jsx)(i.Fragment, { children: T.intl.string(T.t.BkuOOz) })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: o,
                        labelText: H,
                        subscribersText: G,
                        descriptionText: V,
                        roleLink: z,
                        onSync: P
                    }),
                    (0, i.jsx)(d.FormDivider, { className: S.midDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: l, onGracePeriodChange: r } = e;
                        return (0, i.jsxs)(h.Z, {
                            children: [
                                (0, i.jsxs)(h.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(d.FormTitle, {
                                            className: Z.marginBottom8,
                                            children: n
                                        }),
                                        (0, i.jsx)(d.SingleSelect, {
                                            placeholder: n,
                                            value: ''.concat(t.expire_behavior),
                                            options: [
                                                {
                                                    value: '0',
                                                    label: T.intl.string(T.t['6kpw4u'])
                                                },
                                                {
                                                    value: '1',
                                                    label: T.intl.string(T.t.fQUQIC)
                                                }
                                            ],
                                            isDisabled: t.syncing,
                                            onChange: (e) => l(parseInt(e))
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(h.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(d.FormTitle, {
                                            className: Z.marginBottom8,
                                            children: T.intl.string(T.t.uiXMo6)
                                        }),
                                        (0, i.jsx)(d.SingleSelect, {
                                            placeholder: T.intl.string(T.t.uiXMo6),
                                            maxVisibleItems: 5,
                                            value: ''.concat(t.expire_grace_period),
                                            options: [1, 3, 7, 14, 30].map((e) => ({
                                                value: ''.concat(e),
                                                label: T.intl.formatToPlainString(T.t.eGjmy8, { days: e })
                                            })),
                                            onChange: (e) => r(parseInt(e)),
                                            isDisabled: t.syncing
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: o,
                        labelText: W,
                        onBehaviorChange: function (e) {
                            u.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            u.Z.updateIntegration({ expireGracePeriod: e });
                        }
                    }),
                    r.type === _.ABu.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: l } = e;
                              return (0, i.jsxs)(h.Z, {
                                  direction: h.Z.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)(d.Checkbox, {
                                          type: d.Checkbox.Types.INVERTED,
                                          className: a()(Z.marginTop20, Z.marginBottom8),
                                          value: t.enable_emoticons,
                                          disabled: t.syncing,
                                          onChange: (e) => {
                                              let { currentTarget: t } = e;
                                              return l(t.checked);
                                          },
                                          children: (0, i.jsx)(d.FormText, { children: T.intl.string(T.t['7r4OKi']) })
                                      }),
                                      (0, i.jsx)(h.Z, {
                                          wrap: h.Z.Wrap.WRAP,
                                          className: S.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  d.Tooltip,
                                                  {
                                                      text: e.name,
                                                      children: (t) =>
                                                          (0, i.jsx)(
                                                              'img',
                                                              {
                                                                  alt: T.intl.formatToPlainString(T.t.n6ZZn5, { name: e.name }),
                                                                  draggable: !1,
                                                                  className: a()(S.emoji, 'emoji', 'jumboable'),
                                                                  src: N.ZP.getEmojiURL({
                                                                      id: e.id,
                                                                      animated: e.animated,
                                                                      size: 28
                                                                  }),
                                                                  ...t
                                                              },
                                                              e.name
                                                          )
                                                  },
                                                  t
                                              )
                                          )
                                      })
                                  ]
                              });
                          })({
                              integration: o,
                              emojis: K,
                              onToggle: function (e) {
                                  u.Z.updateIntegration({ enableEmoticons: e });
                              }
                          })
                        : null,
                    (0, i.jsx)(d.FormDivider, { className: S.bottomDivider }),
                    (0, i.jsx)(h.Z, {
                        children: (0, i.jsx)(d.Button, {
                            className: S.disableButton,
                            size: d.Button.Sizes.SMALL,
                            color: d.Button.Colors.RED,
                            look: d.Button.Looks.LINK,
                            onClick: B,
                            children: T.intl.string(T.t.M6q6eX)
                        })
                    })
                ]
            })),
        (0, i.jsx)(d.Card, {
            editable: !0,
            className: S.card,
            children: (0, i.jsxs)(h.Z, {
                direction: h.Z.Direction.VERTICAL,
                children: [
                    r.enabled
                        ? (0, i.jsx)(d.Clickable, {
                              className: S.expandableHeader,
                              'aria-expanded': E && !L,
                              onClick: y,
                              children: q
                          })
                        : q,
                    Y
                ]
            })
        })
    );
}
