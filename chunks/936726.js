t.d(n, {
    Z: function () {
        return R;
    }
}),
    t(47120),
    t(653041);
var i = t(200651),
    a = t(192379),
    s = t(120356),
    l = t.n(s),
    r = t(544891),
    o = t(846519),
    c = t(481060),
    d = t(668781),
    u = t(139387),
    I = t(308063),
    m = t(600164),
    _ = t(208567),
    N = t(598077),
    E = t(259580),
    T = t(768581),
    h = t(572004),
    g = t(709054),
    p = t(51144),
    f = t(486199),
    x = t(981631),
    C = t(689938),
    O = t(230685);
let S = (e) => {
    if (null == e) return null;
    let n = new N.Z(e);
    return p.ZP.getUserTag(n);
};
function A(e, n) {
    return null != n && /^data:/.test(n)
        ? n
        : (0, T.ov)({
              id: e.id,
              avatar: n,
              discriminator: x.fo$
          });
}
function R(e) {
    let { id: n, webhook: t, editedWebhook: s, channelOptions: N, isExpanded: T, isNew: p, errors: R, onToggleExpand: b } = e,
        [Z, v] = a.useState(!1),
        [M] = a.useState(new o.V7());
    a.useEffect(() => () => M.stop(), [M]);
    let L = a.useMemo(() => A(t, t.avatar), [t]),
        j = a.useCallback(() => {
            let e = ''.concat((0, r.K0)(!1)).concat(x.ANM.WEBHOOK_INTEGRATION(t.id, t.token));
            (0, h.JG)(e);
        }, [t]),
        D = a.useCallback(() => {
            (0, c.openModal)((e) =>
                (0, i.jsx)(c.ConfirmModal, {
                    ...e,
                    header: C.Z.Messages.WEBHOOK_DELETE_TITLE.format({ name: t.name }),
                    confirmText: C.Z.Messages.WEBHOOK_DELETE,
                    cancelText: C.Z.Messages.WEBHOOK_CANCEL,
                    onConfirm: () => {
                        I.Z.delete(t.guild_id, t.id).catch((e) => {
                            let { status: n } = e;
                            429 === n
                                ? d.Z.show({
                                      title: C.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                                      body: C.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK_RATE_LIMIT
                                  })
                                : d.Z.show({
                                      title: C.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                                      body: C.Z.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
                                  });
                        });
                    },
                    children: (0, i.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: C.Z.Messages.WEBHOOK_DELETE_BODY.format({ name: t.name })
                    })
                })
            );
        }, [t.guild_id, t.id, t.name]),
        P = [];
    null != t.user
        ? P.push({
              icon: c.ClockIcon,
              text: C.Z.Messages.INTEGRATION_CREATED_USER_DATE.format({
                  user: S(t.user),
                  timestamp: g.default.extractTimestamp(t.id)
              })
          })
        : P.push({
              icon: c.ClockIcon,
              text: C.Z.Messages.INTEGRATION_CREATED_DATE.format({ timestamp: g.default.extractTimestamp(t.id) })
          });
    let B = null;
    return (
        T &&
            null != s &&
            (B = (0, i.jsxs)('div', {
                className: O.body,
                children: [
                    (0, i.jsx)(c.FormDivider, { className: O.topDivider }),
                    (0, i.jsxs)(m.Z, {
                        children: [
                            (0, i.jsx)(m.Z.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, i.jsxs)(m.Z, {
                                    className: O.avatarWrapper,
                                    direction: m.Z.Direction.VERTICAL,
                                    children: [
                                        (0, i.jsx)(_.Z, {
                                            image: s.avatar,
                                            onChange: (e) => {
                                                u.Z.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => A(t, e),
                                            imageClassName: O.avatarUploaderInner,
                                            showIcon: !0
                                        }),
                                        null != R.avatar && '' !== R.avatar
                                            ? (0, i.jsx)(c.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-sm/normal',
                                                  children: R.avatar
                                              })
                                            : null
                                    ]
                                })
                            }),
                            (0, i.jsxs)(m.Z, {
                                direction: m.Z.Direction.VERTICAL,
                                children: [
                                    (0, i.jsxs)(m.Z, {
                                        children: [
                                            (0, i.jsx)(m.Z.Child, {
                                                basis: '50%',
                                                children: (0, i.jsx)(c.FormItem, {
                                                    title: C.Z.Messages.WEBHOOK_FORM_NAME,
                                                    children: (0, i.jsx)(c.TextInput, {
                                                        value: s.name,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ name: e });
                                                        },
                                                        maxLength: 80,
                                                        error: R.name
                                                    })
                                                })
                                            }),
                                            (0, i.jsx)(m.Z.Child, {
                                                basis: '50%',
                                                children: (0, i.jsx)(c.FormItem, {
                                                    title: C.Z.Messages.CHANNEL,
                                                    children: (0, i.jsx)(c.SearchableSelect, {
                                                        value: s.channel_id,
                                                        options: N,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: C.Z.Messages.CHANNEL_SELECT
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(c.FormDivider, { className: O.bottomDivider }),
                                    (0, i.jsxs)(m.Z, {
                                        children: [
                                            (0, i.jsx)(c.Tooltip, {
                                                text: C.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL,
                                                forceOpen: Z,
                                                color: c.TooltipColors.GREEN,
                                                disableTooltipPointerEvents: !0,
                                                children: (e) => {
                                                    let { onClick: n, onMouseEnter: a, onMouseLeave: s, onBlur: l, onFocus: r, ...o } = e;
                                                    return (0, i.jsx)(c.Button, {
                                                        ...o,
                                                        'aria-label': '',
                                                        onClick: () => {
                                                            null == n || n(), v(!0), c.AccessibilityAnnouncer.announce(C.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL), M.start(1000, () => v(!1)), j();
                                                        },
                                                        size: c.Button.Sizes.SMALL,
                                                        color: c.Button.Colors.PRIMARY,
                                                        look: c.Button.Looks.FILLED,
                                                        className: O.copyButton,
                                                        disabled: null == t.token || '' === t.token,
                                                        children: C.Z.Messages.INTEGRATIONS_WEBHOOK_COPY_URL
                                                    });
                                                }
                                            }),
                                            (0, i.jsx)(c.Button, {
                                                onClick: D,
                                                size: c.Button.Sizes.SMALL,
                                                color: c.Button.Colors.RED,
                                                look: c.Button.Looks.LINK,
                                                children: C.Z.Messages.INTEGRATIONS_WEBHOOK_DELETE
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })),
        (0, i.jsx)(c.Card, {
            editable: !0,
            id: n,
            className: l()(O.card, p ? O.pulse : null),
            children: (0, i.jsxs)(m.Z, {
                direction: m.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(c.Clickable, {
                        className: O.header,
                        'aria-expanded': T,
                        onClick: b,
                        children: (0, i.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(f.Z, {
                                    name: t.name,
                                    imageSrc: L,
                                    details: P
                                }),
                                (0, i.jsx)(E.Z, {
                                    className: O.expandIcon,
                                    expanded: T,
                                    'aria-hidden': !0
                                })
                            ]
                        })
                    }),
                    B
                ]
            })
        })
    );
}
