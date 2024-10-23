t.d(n, {
    Z: function () {
        return b;
    }
}),
    t(47120),
    t(315314),
    t(610138),
    t(216116),
    t(78328),
    t(815648);
var i = t(200651),
    a = t(192379),
    l = t(120356),
    s = t.n(l),
    o = t(913527),
    r = t.n(o),
    d = t(442837),
    c = t(481060),
    u = t(139387),
    I = t(726542),
    m = t(600164),
    _ = t(339085),
    N = t(434404),
    E = t(598077),
    T = t(430824),
    h = t(246946),
    g = t(259580),
    p = t(531087),
    f = t(768581),
    C = t(709054),
    x = t(486199),
    O = t(981631),
    S = t(689938),
    A = t(101494),
    R = t(113207);
function b(e) {
    let n,
        { guild: t, integration: l, editedIntegration: o, isExpanded: b, onToggleExpand: Z, onDisable: v, onEnable: M } = e,
        L = (0, d.e7)([T.Z], () => T.Z.getRoles(t.id)),
        [j, D] = a.useState(!1),
        P = (0, d.e7)([h.Z], () => h.Z.hidePersonalInformation),
        B = a.useCallback(() => {
            D(!0), M(l);
        }, [l, M]),
        y = a.useCallback(() => {
            !l.syncing &&
                (0, c.openModal)((e) => {
                    let n = 0 === l.expire_behavior ? S.Z.Messages.REMOVE_SYNCED_ROLE : S.Z.Messages.KICK_FROM_SERVER;
                    return (0, i.jsx)(c.ConfirmModal, {
                        ...e,
                        header: S.Z.Messages.DISABLE_INTEGRATION_TITLE,
                        confirmText: n,
                        cancelText: S.Z.Messages.CANCEL,
                        onConfirm: () => v(l),
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: l.type === O.ABu.YOUTUBE ? S.Z.Messages.DISABLE_INTEGRATION_YOUTUBE_BODY : S.Z.Messages.DISABLE_INTEGRATION_TWITCH_BODY
                        })
                    });
                });
        }, [l, v]),
        G = a.useCallback(() => {
            N.Z.syncIntegration(t.id, l.id);
        }, [t.id, l.id]),
        k = a.useCallback(() => {
            null != l.role_id && (N.Z.setSection(O.pNK.ROLES), N.Z.selectRole(l.role_id));
        }, [l.role_id]),
        {
            serviceName: H,
            channelURL: w,
            expireBehaviorLabel: U,
            syncLabel: W,
            subscribersText: F
        } = a.useMemo(() => {
            var e, n, t, i, a;
            let s = null !== (t = null === (n = I.Z.get(l.type)) || void 0 === n ? void 0 : null === (e = n.getPlatformUserUrl) || void 0 === e ? void 0 : e.call(n, l.account)) && void 0 !== t ? t : '';
            switch (l.type) {
                case O.ABu.YOUTUBE:
                    return {
                        serviceName: S.Z.Messages.INTEGRATIONS_YOUTUBE,
                        expireBehaviorLabel: S.Z.Messages.FORM_LABEL_MEMBERSHIP_EXPIRE_BEHAVIOR,
                        syncLabel: S.Z.Messages.FORM_LABEL_SYNCED_MEMBERS,
                        subscribersText: S.Z.Messages.NUM_MEMBERS.format({ subscribers: null !== (i = l.subscriber_count) && void 0 !== i ? i : 0 }),
                        channelURL: s
                    };
                case O.ABu.TWITCH:
                default:
                    return {
                        serviceName: S.Z.Messages.INTEGRATIONS_TWITCH,
                        expireBehaviorLabel: S.Z.Messages.FORM_LABEL_SUB_EXPIRE_BEHAVIOR,
                        syncLabel: S.Z.Messages.FORM_LABEL_SYNCED_SUBS,
                        subscribersText: S.Z.Messages.NUM_SUBSCRIBERS.format({ subscribers: null !== (a = l.subscriber_count) && void 0 !== a ? a : 0 }),
                        channelURL: s
                    };
            }
        }, [l.account, l.subscriber_count, l.type]),
        { roleLink: V, syncDescriptionText: K } = a.useMemo(() => {
            let e, n;
            let t = null != l.role_id ? L[l.role_id] : null;
            e =
                null != t
                    ? (0, i.jsx)(c.Anchor, {
                          onClick: k,
                          children: t.name
                      })
                    : S.Z.Messages.NONE;
            let a = I.Z.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText: (n =
                    l.revoked && null != a
                        ? S.Z.Messages.SYNC_REVOKED.format({
                              user: l.user,
                              platformName: a.name
                          })
                        : S.Z.Messages.INTEGRATIONS_LAST_SYNC.format({ datetime: r()(l.synced_at).calendar() }))
            };
        }, [L, k, l.revoked, l.role_id, l.synced_at, l.type, l.user]),
        Y = a.useMemo(() => {
            let e = _.ZP.getGuildEmoji(t.id),
                n = Object.values(L)
                    .filter((e) => null != e.tags && e.tags.integration_id === l.id)
                    .map((e) => e.id);
            return l.enable_emoticons ? e.sort((e, n) => e.name.localeCompare(n.name)).filter((e) => null != l.role_id && (null == e ? void 0 : e.roles.some((e) => n.includes(e)))) : [];
        }, [t.id, L, l.enable_emoticons, l.id, l.role_id]);
    if (
        (a.useEffect(() => {
            (null == o ? void 0 : o.id) === l.id && (null == o ? void 0 : o.enabled) === !0 && D(!1);
        }, [o, l.id]),
        l.enabled && null != l.user)
    )
        n = [
            {
                icon: c.ClockIcon,
                text: P
                    ? S.Z.Messages.INTEGRATION_ADDED_DATE.format({ timestamp: C.default.extractTimestamp(l.id) })
                    : S.Z.Messages.INTEGRATION_ADDED_USER_DATE.format({
                          user: null != l.user ? new E.Z(l.user).tag : null,
                          timestamp: C.default.extractTimestamp(l.id)
                      })
            }
        ];
    else {
        let e = new URL(w);
        n = [
            {
                text: S.Z.Messages.INTEGRATIONS_ACCOUNT_DESCRIPTION.format({
                    serviceName: H,
                    accountUrl: w,
                    accountUrlText: e.hostname + e.pathname
                })
            }
        ];
    }
    let z = (0, i.jsxs)(m.Z, {
            className: A.header,
            align: m.Z.Align.CENTER,
            children: [
                (0, i.jsx)(x.Z, {
                    name: ''.concat(l.name),
                    detailsClassName: A.description,
                    details: n
                }),
                l.enabled
                    ? (0, i.jsx)(m.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(g.Z, {
                              className: A.expandIcon,
                              expanded: b && !j,
                              'aria-hidden': !0
                          })
                      })
                    : (0, i.jsx)(m.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              color: c.Button.Colors.PRIMARY,
                              onClick: B,
                              disabled: j,
                              children: j
                                  ? (0, i.jsx)(p.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                  : (0, i.jsx)(i.Fragment, { children: S.Z.Messages.INTEGRATIONS_ENABLE })
                          })
                      })
            ]
        }),
        q = null;
    return (
        b &&
            !j &&
            null != o &&
            (q = (0, i.jsxs)(m.Z, {
                className: A.body,
                direction: m.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(c.FormDivider, { className: A.topDivider }),
                    (function (e) {
                        let { integration: n, labelText: t, subscribersText: a, descriptionText: l, roleLink: s, onSync: o } = e;
                        return (0, i.jsxs)(m.Z, {
                            children: [
                                (0, i.jsxs)(m.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(c.FormTitle, {
                                            className: R.marginBottom8,
                                            children: S.Z.Messages.FORM_LABEL_SYNCED_ROLE
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            className: A.syncedRole,
                                            color: 'header-primary',
                                            variant: 'text-sm/normal',
                                            children: s
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(m.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(c.FormTitle, {
                                            className: R.marginBottom8,
                                            children: t
                                        }),
                                        (0, i.jsxs)(m.Z, {
                                            justify: m.Z.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(m.Z, {
                                                    direction: m.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(c.Text, {
                                                            color: 'header-primary',
                                                            variant: 'text-sm/normal',
                                                            children: a
                                                        }),
                                                        (0, i.jsx)(c.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: l
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
                                                        ? (0, i.jsx)(p.Z, {
                                                              width: 24,
                                                              height: 24
                                                          })
                                                        : (0, i.jsx)(i.Fragment, { children: S.Z.Messages.SYNC })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: o,
                        labelText: W,
                        subscribersText: F,
                        descriptionText: K,
                        roleLink: V,
                        onSync: G
                    }),
                    (0, i.jsx)(c.FormDivider, { className: A.midDivider }),
                    (function (e) {
                        let { integration: n, labelText: t, onBehaviorChange: a, onGracePeriodChange: l } = e;
                        return (0, i.jsxs)(m.Z, {
                            children: [
                                (0, i.jsxs)(m.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(c.FormTitle, {
                                            className: R.marginBottom8,
                                            children: t
                                        }),
                                        (0, i.jsx)(c.SingleSelect, {
                                            placeholder: t,
                                            value: ''.concat(n.expire_behavior),
                                            options: [
                                                {
                                                    value: '0',
                                                    label: S.Z.Messages.REMOVE_SYNCED_ROLE
                                                },
                                                {
                                                    value: '1',
                                                    label: S.Z.Messages.KICK_FROM_SERVER
                                                }
                                            ],
                                            isDisabled: n.syncing,
                                            onChange: (e) => a(parseInt(e))
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(m.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(c.FormTitle, {
                                            className: R.marginBottom8,
                                            children: S.Z.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD
                                        }),
                                        (0, i.jsx)(c.SingleSelect, {
                                            placeholder: S.Z.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
                                            maxVisibleItems: 5,
                                            value: ''.concat(n.expire_grace_period),
                                            options: [1, 3, 7, 14, 30].map((e) => ({
                                                value: ''.concat(e),
                                                label: S.Z.Messages.N_DAYS.format({ days: e })
                                            })),
                                            onChange: (e) => l(parseInt(e)),
                                            isDisabled: n.syncing
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: o,
                        labelText: U,
                        onBehaviorChange: function (e) {
                            u.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            u.Z.updateIntegration({ expireGracePeriod: e });
                        }
                    }),
                    l.type === O.ABu.TWITCH
                        ? (function (e) {
                              let { integration: n, emojis: t, onToggle: a } = e;
                              return (0, i.jsxs)(m.Z, {
                                  direction: m.Z.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)(c.Checkbox, {
                                          type: c.Checkbox.Types.INVERTED,
                                          className: s()(R.marginTop20, R.marginBottom8),
                                          value: n.enable_emoticons,
                                          disabled: n.syncing,
                                          onChange: (e) => {
                                              let { currentTarget: n } = e;
                                              return a(n.checked);
                                          },
                                          children: (0, i.jsx)(c.FormText, { children: S.Z.Messages.ENABLE_TWITCH_EMOJI_SYNC })
                                      }),
                                      (0, i.jsx)(m.Z, {
                                          wrap: m.Z.Wrap.WRAP,
                                          className: A.__invalid_twitchEmojis,
                                          children: t.map((e, n) =>
                                              (0, i.jsx)(
                                                  c.Tooltip,
                                                  {
                                                      text: e.name,
                                                      children: (n) =>
                                                          (0, i.jsx)(
                                                              'img',
                                                              {
                                                                  alt: S.Z.Messages.IMG_ALT_EMOJI.format({ name: e.name }),
                                                                  draggable: !1,
                                                                  className: s()(A.emoji, 'emoji', 'jumboable'),
                                                                  src: f.ZP.getEmojiURL({
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
                              emojis: Y,
                              onToggle: function (e) {
                                  u.Z.updateIntegration({ enableEmoticons: e });
                              }
                          })
                        : null,
                    (0, i.jsx)(c.FormDivider, { className: A.bottomDivider }),
                    (0, i.jsx)(m.Z, {
                        children: (0, i.jsx)(c.Button, {
                            className: A.disableButton,
                            size: c.Button.Sizes.SMALL,
                            color: c.Button.Colors.RED,
                            look: c.Button.Looks.LINK,
                            onClick: y,
                            children: S.Z.Messages.INTEGRATIONS_DISABLE
                        })
                    })
                ]
            })),
        (0, i.jsx)(c.Card, {
            editable: !0,
            className: A.card,
            children: (0, i.jsxs)(m.Z, {
                direction: m.Z.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, i.jsx)(c.Clickable, {
                              className: A.expandableHeader,
                              'aria-expanded': b && !j,
                              onClick: Z,
                              children: z
                          })
                        : z,
                    q
                ]
            })
        })
    );
}
