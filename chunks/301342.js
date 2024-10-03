n.d(t, {
    P: function () {
        return T;
    },
    Qo: function () {
        return b;
    },
    kw: function () {
        return M;
    },
    rj: function () {
        return A;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(91192),
    o = n(442837),
    c = n(481060),
    u = n(211739),
    d = n(239091),
    h = n(146773),
    p = n(82295),
    f = n(111028),
    _ = n(680089),
    m = n(430824),
    g = n(496675),
    C = n(9156),
    I = n(203818),
    E = n(438144),
    N = n(981631),
    S = n(689938),
    x = n(134743);
function v(e) {
    e.stopPropagation();
}
let Z = l.memo(function (e) {
    let t,
        { channel: r, connectChannelDragSource: h, connectChannelDropTarget: I, disableManageChannels: E, position: Z, sortingPosition: T, hideIcon: b, children: A } = e,
        M = (0, o.e7)([C.ZP], () => C.ZP.isChannelMuted(r.getGuildId(), r.id)),
        R = (0, o.e7)([_.Z], () => _.Z.isCollapsed(r.id)),
        L = (0, o.e7)([g.Z], () => g.Z.can(N.Plq.MANAGE_CHANNELS, r));
    t = null != T ? (Z > T ? x.containerDragAfter : x.containerDragBefore) : x.containerDefault;
    let y = l.useCallback(() => {
            R ? (0, u.mJ)(r.id) : (0, u.c4)(r.id);
        }, [r.id, R]),
        P = l.useCallback(
            (e) => {
                if ('null' !== r.id) {
                    let t = m.Z.getGuild(r.getGuildId());
                    null != t &&
                        (0, d.jW)(e, async () => {
                            let { default: e } = await n.e('8965').then(n.bind(n, 139035));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    channel: r,
                                    guild: t
                                });
                        });
                }
            },
            [r]
        ),
        O = l.useCallback(() => {
            let e = r.type === N.d4z.GUILD_CATEGORY ? null : r.type,
                t = r.getGuildId();
            null != t &&
                (0, c.openModalLazy)(async () => {
                    let { default: l } = await Promise.all([n.e('45094'), n.e('5324')]).then(n.bind(n, 218613));
                    return (n) =>
                        (0, i.jsx)(l, {
                            ...n,
                            channelType: e,
                            guildId: t,
                            categoryId: 'null' !== r.id ? r.id : null
                        });
                });
        }, [r]),
        { role: j, tabIndex: D, ...w } = (0, s.JA)(r.id),
        G = l.useRef(null),
        U = l.useRef(null),
        k = (0, i.jsxs)('li', {
            className: t,
            'data-dnd-name': r.name,
            children: [
                (0, i.jsx)(c.FocusRing, {
                    focusTarget: G,
                    ringTarget: U,
                    offset: {
                        left: 4,
                        right: 4
                    },
                    children: (0, i.jsxs)('div', {
                        ref: U,
                        className: a()(x.iconVisibility, x.wrapper, {
                            [x.collapsed]: R,
                            [x.muted]: M,
                            [x.clickable]: !0
                        }),
                        onContextMenu: P,
                        children: [
                            (0, i.jsxs)(c.Clickable, {
                                innerRef: G,
                                className: x.mainContent,
                                tabIndex: D,
                                ...w,
                                onClick: y,
                                'aria-label': S.Z.Messages.CATEGORY_A11Y_LABEL.format({ categoryName: r.name }),
                                'aria-expanded': !R,
                                focusProps: { enabled: !1 },
                                children: [
                                    b
                                        ? null
                                        : (0, i.jsx)(c.ChevronSmallDownIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: x.icon
                                          }),
                                    (0, i.jsx)(p.Z, {
                                        className: x.name,
                                        children: (0, i.jsx)(f.Z, { children: r.name })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                onClick: v,
                                className: x.children,
                                children:
                                    L && !E
                                        ? (0, i.jsx)(c.Tooltip, {
                                              text: S.Z.Messages.CREATE_CHANNEL,
                                              children: (e) => {
                                                  let { onMouseEnter: t, onMouseLeave: n } = e;
                                                  return (0, i.jsx)(c.Button, {
                                                      'aria-label': S.Z.Messages.CREATE_CHANNEL,
                                                      look: c.Button.Looks.BLANK,
                                                      size: c.Button.Sizes.NONE,
                                                      className: a()(x.addButton, x.forceVisible),
                                                      onClick: O,
                                                      onMouseEnter: t,
                                                      onMouseLeave: n,
                                                      tabIndex: D,
                                                      focusProps: {
                                                          offset: {
                                                              top: -3,
                                                              right: -4,
                                                              bottom: -3,
                                                              left: -4
                                                          }
                                                      },
                                                      children: (0, i.jsx)(c.PlusSmallIcon, {
                                                          size: 'sm',
                                                          color: 'currentColor',
                                                          className: x.addButtonIcon
                                                      })
                                                  });
                                              }
                                          })
                                        : null
                            })
                        ]
                    })
                }),
                A
            ]
        });
    return null != I && null != h ? I(h(k)) : k;
});
t.ZP = (0, h.B)(Z);
let T = l.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, i.jsx)('li', {
            className: a()(l, x.containerDefault),
            children: (0, i.jsxs)('div', {
                className: a()(x.iconVisibility, x.wrapperStatic),
                children: [
                    (0, i.jsx)('div', {
                        className: x.mainContent,
                        children: (0, i.jsx)(p.Z, {
                            className: x.name,
                            children: (0, i.jsx)(f.Z, { children: t })
                        })
                    }),
                    null != n
                        ? (0, i.jsx)(c.TooltipContainer, {
                              text: S.Z.Messages.CLEAR_RECENT_CHANNELS,
                              className: x.dismissWrapper,
                              children: (0, i.jsx)(c.Clickable, {
                                  className: x.dismissButton,
                                  onClick: n,
                                  children: (0, i.jsx)(c.CircleXIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: x.dismiss
                                  })
                              })
                          })
                        : null
                ]
            })
        });
    }),
    b = l.memo(function (e) {
        let { category: t } = e,
            n = (0, o.e7)([I.Z], () => I.Z.isVoiceCategoryCollapsed(t.guild.id)),
            r = l.useCallback(() => {
                n ? (0, E.s)(t.guild.id) : (0, E.M)(t.guild.id);
            }, [t.guild.id, n]);
        return n
            ? (0, i.jsxs)(c.Clickable, {
                  className: x.voiceChannelsButton,
                  onClick: r,
                  children: [
                      (0, i.jsx)(c.VoiceNormalIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: x.voiceChannelsToggleIcon
                      }),
                      (0, i.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          children: S.Z.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_EXPAND
                      })
                  ]
              })
            : (0, i.jsxs)(c.Clickable, {
                  className: x.voiceChannelsButton,
                  onClick: r,
                  children: [
                      (0, i.jsx)(c.VoiceNormalIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: x.voiceChannelsToggleIcon
                      }),
                      (0, i.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          children: S.Z.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_COLLAPSE
                      })
                  ]
              });
    }),
    A = l.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, o.e7)([I.Z], () => I.Z.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === N.d4z.GUILD_CATEGORY
            ? l
                ? (0, i.jsx)('li', {
                      className: a()(x.containerDefault),
                      children: (0, i.jsx)('div', {
                          className: a()(x.iconVisibility, x.wrapperStatic),
                          children: (0, i.jsx)(p.Z, {
                              className: x.name,
                              children: (0, i.jsx)(f.Z, { children: S.Z.Messages.VOICE_CHANNELS_CATEGORY_HEADER })
                          })
                      })
                  })
                : null
            : (0, i.jsx)('div', { style: { height: 16 } });
    }),
    M = l.memo(function (e) {
        let { channel: t } = e;
        return (0, i.jsx)('li', {
            className: a()(x.containerDefault),
            children: (0, i.jsx)('div', {
                className: a()(x.iconVisibility, x.wrapperStatic),
                children: (0, i.jsx)(p.Z, {
                    className: x.name,
                    children: (0, i.jsx)(f.Z, { children: t.name })
                })
            })
        });
    });
