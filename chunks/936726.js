t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120),
    t(653041);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(544891),
    s = t(846519),
    d = t(481060),
    c = t(668781),
    u = t(139387),
    m = t(308063),
    h = t(600164),
    p = t(208567),
    g = t(598077),
    f = t(259580),
    x = t(768581),
    b = t(572004),
    v = t(709054),
    C = t(51144),
    I = t(486199),
    N = t(981631),
    T = t(388032),
    _ = t(230685);
let j = (e) => {
    if (null == e) return null;
    let n = new g.Z(e);
    return C.ZP.getUserTag(n);
};
function S(e, n) {
    return null != n && /^data:/.test(n)
        ? n
        : (0, x.ov)({
              id: e.id,
              avatar: n,
              discriminator: N.fo$
          });
}
function E(e) {
    let { id: n, webhook: t, editedWebhook: r, channelOptions: g, isExpanded: x, isNew: C, errors: E, onToggleExpand: Z } = e,
        [A, y] = l.useState(!1),
        [R] = l.useState(new s.V7());
    l.useEffect(() => () => R.stop(), [R]);
    let O = l.useMemo(() => S(t, t.avatar), [t]),
        L = l.useCallback(() => {
            let e = ''.concat((0, o.K0)(!1)).concat(N.ANM.WEBHOOK_INTEGRATION(t.id, t.token));
            (0, b.JG)(e);
        }, [t]),
        k = l.useCallback(() => {
            (0, d.openModal)((e) =>
                (0, i.jsx)(d.ConfirmModal, {
                    ...e,
                    header: T.intl.formatToPlainString(T.t.QVFjHh, { name: t.name }),
                    confirmText: T.intl.string(T.t['W+K1Fh']),
                    cancelText: T.intl.string(T.t.xNhj0N),
                    onConfirm: () => {
                        m.Z.delete(t.guild_id, t.id).catch((e) => {
                            let { status: n } = e;
                            429 === n
                                ? c.Z.show({
                                      title: T.intl.string(T.t.N5riYm),
                                      body: T.intl.string(T.t.eAxcCQ)
                                  })
                                : c.Z.show({
                                      title: T.intl.string(T.t.N5riYm),
                                      body: T.intl.string(T.t['/4TwKS'])
                                  });
                        });
                    },
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        children: T.intl.format(T.t['rIWe+/'], { name: t.name })
                    })
                })
            );
        }, [t.guild_id, t.id, t.name]),
        w = [];
    null != t.user
        ? w.push({
              icon: d.ClockIcon,
              text: T.intl.formatToPlainString(T.t['7EcUbm'], {
                  user: j(t.user),
                  timestamp: v.default.extractTimestamp(t.id)
              })
          })
        : w.push({
              icon: d.ClockIcon,
              text: T.intl.formatToPlainString(T.t['7mv59P'], { timestamp: v.default.extractTimestamp(t.id) })
          });
    let M = null;
    return (
        x &&
            null != r &&
            (M = (0, i.jsxs)('div', {
                className: _.body,
                children: [
                    (0, i.jsx)(d.FormDivider, { className: _.topDivider }),
                    (0, i.jsxs)(h.Z, {
                        children: [
                            (0, i.jsx)(h.Z.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, i.jsxs)(h.Z, {
                                    className: _.avatarWrapper,
                                    direction: h.Z.Direction.VERTICAL,
                                    children: [
                                        (0, i.jsx)(p.Z, {
                                            image: r.avatar,
                                            onChange: (e) => {
                                                u.Z.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => S(t, e),
                                            imageClassName: _.avatarUploaderInner,
                                            showIcon: !0
                                        }),
                                        null != E.avatar && '' !== E.avatar
                                            ? (0, i.jsx)(d.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-sm/normal',
                                                  children: E.avatar
                                              })
                                            : null
                                    ]
                                })
                            }),
                            (0, i.jsxs)(h.Z, {
                                direction: h.Z.Direction.VERTICAL,
                                children: [
                                    (0, i.jsxs)(h.Z, {
                                        children: [
                                            (0, i.jsx)(h.Z.Child, {
                                                basis: '50%',
                                                children: (0, i.jsx)(d.FormItem, {
                                                    title: T.intl.string(T.t.ukdxur),
                                                    children: (0, i.jsx)(d.TextInput, {
                                                        value: r.name,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ name: e });
                                                        },
                                                        maxLength: 80,
                                                        error: E.name
                                                    })
                                                })
                                            }),
                                            (0, i.jsx)(h.Z.Child, {
                                                basis: '50%',
                                                children: (0, i.jsx)(d.FormItem, {
                                                    title: T.intl.string(T.t.GK18KC),
                                                    children: (0, i.jsx)(d.SearchableSelect, {
                                                        value: r.channel_id,
                                                        options: g,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: T.intl.string(T.t.r2pts7)
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(d.FormDivider, { className: _.bottomDivider }),
                                    (0, i.jsxs)(h.Z, {
                                        children: [
                                            (0, i.jsx)(d.Tooltip, {
                                                text: T.intl.string(T.t.wwdb3t),
                                                forceOpen: A,
                                                color: d.TooltipColors.GREEN,
                                                disableTooltipPointerEvents: !0,
                                                children: (e) => {
                                                    let { onClick: n, onMouseEnter: l, onMouseLeave: r, onBlur: a, onFocus: o, ...s } = e;
                                                    return (0, i.jsx)(d.Button, {
                                                        ...s,
                                                        'aria-label': '',
                                                        onClick: () => {
                                                            null == n || n(), y(!0), d.AccessibilityAnnouncer.announce(T.intl.string(T.t.wwdb3t)), R.start(1000, () => y(!1)), L();
                                                        },
                                                        size: d.Button.Sizes.SMALL,
                                                        color: d.Button.Colors.PRIMARY,
                                                        look: d.Button.Looks.FILLED,
                                                        className: _.copyButton,
                                                        disabled: null == t.token || '' === t.token,
                                                        children: T.intl.string(T.t.Ae9rUV)
                                                    });
                                                }
                                            }),
                                            (0, i.jsx)(d.Button, {
                                                onClick: k,
                                                size: d.Button.Sizes.SMALL,
                                                color: d.Button.Colors.RED,
                                                look: d.Button.Looks.LINK,
                                                children: T.intl.string(T.t.jVrUnJ)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })),
        (0, i.jsx)(d.Card, {
            editable: !0,
            id: n,
            className: a()(_.card, C ? _.pulse : null),
            children: (0, i.jsxs)(h.Z, {
                direction: h.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(d.Clickable, {
                        className: _.header,
                        'aria-expanded': x,
                        onClick: Z,
                        children: (0, i.jsxs)(h.Z, {
                            align: h.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(I.Z, {
                                    name: t.name,
                                    imageSrc: O,
                                    details: w
                                }),
                                (0, i.jsx)(f.Z, {
                                    className: _.expandIcon,
                                    expanded: x,
                                    'aria-hidden': !0
                                })
                            ]
                        })
                    }),
                    M
                ]
            })
        })
    );
}
