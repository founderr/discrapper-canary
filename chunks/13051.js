t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(47120),
    t(315314),
    t(610138),
    t(216116),
    t(78328),
    t(815648);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(913527),
    s = t.n(o),
    d = t(442837),
    c = t(481060),
    u = t(139387),
    m = t(726542),
    h = t(600164),
    p = t(339085),
    g = t(434404),
    f = t(598077),
    x = t(430824),
    b = t(246946),
    v = t(259580),
    C = t(531087),
    I = t(768581),
    N = t(709054),
    T = t(486199),
    _ = t(981631),
    j = t(388032),
    S = t(101494),
    E = t(113207);
function Z(e) {
    let n,
        { guild: t, integration: r, editedIntegration: o, isExpanded: Z, onToggleExpand: A, onDisable: y, onEnable: R } = e,
        O = (0, d.e7)([x.Z], () => x.Z.getRoles(t.id)),
        [L, k] = l.useState(!1),
        w = (0, d.e7)([b.Z], () => b.Z.hidePersonalInformation),
        M = l.useCallback(() => {
            k(!0), R(r);
        }, [r, R]),
        B = l.useCallback(() => {
            !r.syncing &&
                (0, c.openModal)((e) => {
                    let n = 0 === r.expire_behavior ? j.intl.string(j.t['6kpw4u']) : j.intl.string(j.t.fQUQIC);
                    return (0, i.jsx)(c.ConfirmModal, {
                        ...e,
                        header: j.intl.string(j.t.emx3lJ),
                        confirmText: n,
                        cancelText: j.intl.string(j.t['ETE/oK']),
                        onConfirm: () => y(r),
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: r.type === _.ABu.YOUTUBE ? j.intl.string(j.t.anKQWV) : j.intl.string(j.t['BW/xtr'])
                        })
                    });
                });
        }, [r, y]),
        P = l.useCallback(() => {
            g.Z.syncIntegration(t.id, r.id);
        }, [t.id, r.id]),
        D = l.useCallback(() => {
            null != r.role_id && (g.Z.setSection(_.pNK.ROLES), g.Z.selectRole(r.role_id));
        }, [r.role_id]),
        {
            serviceName: U,
            channelURL: G,
            expireBehaviorLabel: F,
            syncLabel: H,
            subscribersText: W
        } = l.useMemo(() => {
            var e, n, t, i, l;
            let a = null !== (t = null === (n = m.Z.get(r.type)) || void 0 === n ? void 0 : null === (e = n.getPlatformUserUrl) || void 0 === e ? void 0 : e.call(n, r.account)) && void 0 !== t ? t : '';
            switch (r.type) {
                case _.ABu.YOUTUBE:
                    return {
                        serviceName: j.intl.string(j.t.aS6cKy),
                        expireBehaviorLabel: j.intl.string(j.t.A5MiqK),
                        syncLabel: j.intl.string(j.t['7vHKVV']),
                        subscribersText: j.intl.formatToPlainString(j.t['7lNtcX'], { subscribers: null !== (i = r.subscriber_count) && void 0 !== i ? i : 0 }),
                        channelURL: a
                    };
                case _.ABu.TWITCH:
                default:
                    return {
                        serviceName: j.intl.string(j.t.q4pBGx),
                        expireBehaviorLabel: j.intl.string(j.t['S/WCrK']),
                        syncLabel: j.intl.string(j.t['0jbPKy']),
                        subscribersText: j.intl.formatToPlainString(j.t.RdUTrq, { subscribers: null !== (l = r.subscriber_count) && void 0 !== l ? l : 0 }),
                        channelURL: a
                    };
            }
        }, [r.account, r.subscriber_count, r.type]),
        { roleLink: z, syncDescriptionText: V } = l.useMemo(() => {
            let e, n;
            let t = null != r.role_id ? O[r.role_id] : null;
            e =
                null != t
                    ? (0, i.jsx)(c.Anchor, {
                          onClick: D,
                          children: t.name
                      })
                    : j.intl.string(j.t.PoWNfX);
            let l = m.Z.get(r.type);
            return {
                roleLink: e,
                syncDescriptionText: (n =
                    r.revoked && null != l
                        ? j.intl.formatToPlainString(j.t.G16Wjo, {
                              user: r.user,
                              platformName: l.name
                          })
                        : j.intl.formatToPlainString(j.t.unl3AA, { datetime: s()(r.synced_at).calendar() }))
            };
        }, [O, D, r.revoked, r.role_id, r.synced_at, r.type, r.user]),
        K = l.useMemo(() => {
            let e = p.ZP.getGuildEmoji(t.id),
                n = Object.values(O)
                    .filter((e) => null != e.tags && e.tags.integration_id === r.id)
                    .map((e) => e.id);
            return r.enable_emoticons ? e.sort((e, n) => e.name.localeCompare(n.name)).filter((e) => null != r.role_id && (null == e ? void 0 : e.roles.some((e) => n.includes(e)))) : [];
        }, [t.id, O, r.enable_emoticons, r.id, r.role_id]);
    if (
        (l.useEffect(() => {
            (null == o ? void 0 : o.id) === r.id && (null == o ? void 0 : o.enabled) === !0 && k(!1);
        }, [o, r.id]),
        r.enabled && null != r.user)
    )
        n = [
            {
                icon: c.ClockIcon,
                text: w
                    ? j.intl.formatToPlainString(j.t.gcdJ8P, { timestamp: N.default.extractTimestamp(r.id) })
                    : j.intl.formatToPlainString(j.t.Nu9sam, {
                          user: null != r.user ? new f.Z(r.user).tag : null,
                          timestamp: N.default.extractTimestamp(r.id)
                      })
            }
        ];
    else {
        let e = new URL(G);
        n = [
            {
                text: j.intl.format(j.t.BegylZ, {
                    serviceName: U,
                    accountUrl: G,
                    accountUrlText: e.hostname + e.pathname
                })
            }
        ];
    }
    let q = (0, i.jsxs)(h.Z, {
            className: S.header,
            align: h.Z.Align.CENTER,
            children: [
                (0, i.jsx)(T.Z, {
                    name: ''.concat(r.name),
                    detailsClassName: S.description,
                    details: n
                }),
                r.enabled
                    ? (0, i.jsx)(h.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(v.Z, {
                              className: S.expandIcon,
                              expanded: Z && !L,
                              'aria-hidden': !0
                          })
                      })
                    : (0, i.jsx)(h.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              color: c.Button.Colors.PRIMARY,
                              onClick: M,
                              disabled: L,
                              children: L
                                  ? (0, i.jsx)(C.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                  : (0, i.jsx)(i.Fragment, { children: j.intl.string(j.t['7sCN8v']) })
                          })
                      })
            ]
        }),
        Y = null;
    return (
        Z &&
            !L &&
            null != o &&
            (Y = (0, i.jsxs)(h.Z, {
                className: S.body,
                direction: h.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(c.FormDivider, { className: S.topDivider }),
                    (function (e) {
                        let { integration: n, labelText: t, subscribersText: l, descriptionText: r, roleLink: a, onSync: o } = e;
                        return (0, i.jsxs)(h.Z, {
                            children: [
                                (0, i.jsxs)(h.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(c.FormTitle, {
                                            className: E.marginBottom8,
                                            children: j.intl.string(j.t.eBtNBQ)
                                        }),
                                        (0, i.jsx)(c.Text, {
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
                                        (0, i.jsx)(c.FormTitle, {
                                            className: E.marginBottom8,
                                            children: t
                                        }),
                                        (0, i.jsxs)(h.Z, {
                                            justify: h.Z.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(h.Z, {
                                                    direction: h.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(c.Text, {
                                                            color: 'header-primary',
                                                            variant: 'text-sm/normal',
                                                            children: l
                                                        }),
                                                        (0, i.jsx)(c.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: r
                                                        })
                                                    ]
                                                }),
                                                (0, i.jsx)(c.Button, {
                                                    size: c.Button.Sizes.SMALL,
                                                    look: c.Button.Looks.FILLED,
                                                    color: c.Button.Colors.PRIMARY,
                                                    disabled: n.syncing || n.revoked,
                                                    onClick: o,
                                                    children: n.syncing
                                                        ? (0, i.jsx)(C.Z, {
                                                              width: 24,
                                                              height: 24
                                                          })
                                                        : (0, i.jsx)(i.Fragment, { children: j.intl.string(j.t.BkuOOz) })
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
                        subscribersText: W,
                        descriptionText: V,
                        roleLink: z,
                        onSync: P
                    }),
                    (0, i.jsx)(c.FormDivider, { className: S.midDivider }),
                    (function (e) {
                        let { integration: n, labelText: t, onBehaviorChange: l, onGracePeriodChange: r } = e;
                        return (0, i.jsxs)(h.Z, {
                            children: [
                                (0, i.jsxs)(h.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(c.FormTitle, {
                                            className: E.marginBottom8,
                                            children: t
                                        }),
                                        (0, i.jsx)(c.SingleSelect, {
                                            placeholder: t,
                                            value: ''.concat(n.expire_behavior),
                                            options: [
                                                {
                                                    value: '0',
                                                    label: j.intl.string(j.t['6kpw4u'])
                                                },
                                                {
                                                    value: '1',
                                                    label: j.intl.string(j.t.fQUQIC)
                                                }
                                            ],
                                            isDisabled: n.syncing,
                                            onChange: (e) => l(parseInt(e))
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(h.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(c.FormTitle, {
                                            className: E.marginBottom8,
                                            children: j.intl.string(j.t.uiXMo6)
                                        }),
                                        (0, i.jsx)(c.SingleSelect, {
                                            placeholder: j.intl.string(j.t.uiXMo6),
                                            maxVisibleItems: 5,
                                            value: ''.concat(n.expire_grace_period),
                                            options: [1, 3, 7, 14, 30].map((e) => ({
                                                value: ''.concat(e),
                                                label: j.intl.formatToPlainString(j.t.eGjmy8, { days: e })
                                            })),
                                            onChange: (e) => r(parseInt(e)),
                                            isDisabled: n.syncing
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: o,
                        labelText: F,
                        onBehaviorChange: function (e) {
                            u.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            u.Z.updateIntegration({ expireGracePeriod: e });
                        }
                    }),
                    r.type === _.ABu.TWITCH
                        ? (function (e) {
                              let { integration: n, emojis: t, onToggle: l } = e;
                              return (0, i.jsxs)(h.Z, {
                                  direction: h.Z.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)(c.Checkbox, {
                                          type: c.Checkbox.Types.INVERTED,
                                          className: a()(E.marginTop20, E.marginBottom8),
                                          value: n.enable_emoticons,
                                          disabled: n.syncing,
                                          onChange: (e) => {
                                              let { currentTarget: n } = e;
                                              return l(n.checked);
                                          },
                                          children: (0, i.jsx)(c.FormText, { children: j.intl.string(j.t['7r4OKi']) })
                                      }),
                                      (0, i.jsx)(h.Z, {
                                          wrap: h.Z.Wrap.WRAP,
                                          className: S.__invalid_twitchEmojis,
                                          children: t.map((e, n) =>
                                              (0, i.jsx)(
                                                  c.Tooltip,
                                                  {
                                                      text: e.name,
                                                      children: (n) =>
                                                          (0, i.jsx)(
                                                              'img',
                                                              {
                                                                  alt: j.intl.formatToPlainString(j.t.n6ZZn5, { name: e.name }),
                                                                  draggable: !1,
                                                                  className: a()(S.emoji, 'emoji', 'jumboable'),
                                                                  src: I.ZP.getEmojiURL({
                                                                      id: e.id,
                                                                      animated: e.animated,
                                                                      size: 28
                                                                  }),
                                                                  ...n
                                                              },
                                                              e.name
                                                          )
                                                  },
                                                  n
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
                    (0, i.jsx)(c.FormDivider, { className: S.bottomDivider }),
                    (0, i.jsx)(h.Z, {
                        children: (0, i.jsx)(c.Button, {
                            className: S.disableButton,
                            size: c.Button.Sizes.SMALL,
                            color: c.Button.Colors.RED,
                            look: c.Button.Looks.LINK,
                            onClick: B,
                            children: j.intl.string(j.t.M6q6eX)
                        })
                    })
                ]
            })),
        (0, i.jsx)(c.Card, {
            editable: !0,
            className: S.card,
            children: (0, i.jsxs)(h.Z, {
                direction: h.Z.Direction.VERTICAL,
                children: [
                    r.enabled
                        ? (0, i.jsx)(c.Clickable, {
                              className: S.expandableHeader,
                              'aria-expanded': Z && !L,
                              onClick: A,
                              children: q
                          })
                        : q,
                    Y
                ]
            })
        })
    );
}
