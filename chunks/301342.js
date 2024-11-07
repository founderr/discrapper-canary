n.d(t, {
    P: function () {
        return E;
    },
    Qo: function () {
        return y;
    },
    kw: function () {
        return T;
    },
    rj: function () {
        return j;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(211739),
    d = n(239091),
    h = n(146773),
    p = n(82295),
    f = n(111028),
    m = n(680089),
    g = n(430824),
    C = n(496675),
    _ = n(9156),
    x = n(203818),
    v = n(438144),
    I = n(981631),
    b = n(388032),
    S = n(747834);
function Z(e) {
    e.stopPropagation();
}
let N = l.memo(function (e) {
    let t,
        { channel: r, connectChannelDragSource: h, connectChannelDropTarget: x, disableManageChannels: v, position: N, sortingPosition: E, hideIcon: y, children: j } = e,
        T = (0, s.e7)([_.ZP], () => _.ZP.isChannelMuted(r.getGuildId(), r.id)),
        P = (0, s.e7)([m.Z], () => m.Z.isCollapsed(r.id)),
        A = (0, s.e7)([C.Z], () => C.Z.can(I.Plq.MANAGE_CHANNELS, r));
    t = null != E ? (N > E ? S.containerDragAfter : S.containerDragBefore) : S.containerDefault;
    let M = l.useCallback(() => {
            P ? (0, u.mJ)(r.id) : (0, u.c4)(r.id);
        }, [r.id, P]),
        w = l.useCallback(
            (e) => {
                if ('null' !== r.id) {
                    let t = g.Z.getGuild(r.getGuildId());
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
        L = l.useCallback(() => {
            let e = r.type === I.d4z.GUILD_CATEGORY ? null : r.type,
                t = r.getGuildId();
            null != t &&
                (0, c.openModalLazy)(async () => {
                    let { default: l } = await Promise.all([n.e('45094'), n.e('66889')]).then(n.bind(n, 218613));
                    return (n) =>
                        (0, i.jsx)(l, {
                            ...n,
                            channelType: e,
                            guildId: t,
                            categoryId: 'null' !== r.id ? r.id : null
                        });
                });
        }, [r]),
        { role: R, tabIndex: D, ...O } = (0, o.JA)(r.id),
        k = l.useRef(null),
        U = l.useRef(null),
        G = (0, i.jsxs)('li', {
            className: t,
            'data-dnd-name': r.name,
            children: [
                (0, i.jsx)(c.FocusRing, {
                    focusTarget: k,
                    ringTarget: U,
                    offset: {
                        left: 4,
                        right: 4
                    },
                    children: (0, i.jsxs)('div', {
                        ref: U,
                        className: a()(S.iconVisibility, S.wrapper, {
                            [S.collapsed]: P,
                            [S.muted]: T,
                            [S.clickable]: !0
                        }),
                        onContextMenu: w,
                        children: [
                            (0, i.jsxs)(c.Clickable, {
                                innerRef: k,
                                className: S.mainContent,
                                tabIndex: D,
                                ...O,
                                onClick: M,
                                'aria-label': b.intl.formatToPlainString(b.t.y5l3Jy, { categoryName: r.name }),
                                'aria-expanded': !P,
                                focusProps: { enabled: !1 },
                                children: [
                                    y
                                        ? null
                                        : (0, i.jsx)(c.ChevronSmallDownIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: S.icon
                                          }),
                                    (0, i.jsx)(p.Z, {
                                        className: S.name,
                                        children: (0, i.jsx)(f.Z, { children: r.name })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                onClick: Z,
                                className: S.children,
                                children:
                                    A && !v
                                        ? (0, i.jsx)(c.Tooltip, {
                                              text: b.intl.string(b.t['fUYU+v']),
                                              children: (e) => {
                                                  let { onMouseEnter: t, onMouseLeave: n } = e;
                                                  return (0, i.jsx)(c.Button, {
                                                      'aria-label': b.intl.string(b.t['fUYU+v']),
                                                      look: c.Button.Looks.BLANK,
                                                      size: c.Button.Sizes.NONE,
                                                      className: a()(S.addButton, S.forceVisible),
                                                      onClick: L,
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
                                                          className: S.addButtonIcon
                                                      })
                                                  });
                                              }
                                          })
                                        : null
                            })
                        ]
                    })
                }),
                j
            ]
        });
    return null != x && null != h ? x(h(G)) : G;
});
t.ZP = (0, h.B)(N);
let E = l.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, i.jsx)('li', {
            className: a()(l, S.containerDefault),
            children: (0, i.jsxs)('div', {
                className: a()(S.iconVisibility, S.wrapperStatic),
                children: [
                    (0, i.jsx)('div', {
                        className: S.mainContent,
                        children: (0, i.jsx)(p.Z, {
                            className: S.name,
                            children: (0, i.jsx)(f.Z, { children: t })
                        })
                    }),
                    null != n
                        ? (0, i.jsx)(c.TooltipContainer, {
                              text: b.intl.string(b.t['5qNmsb']),
                              className: S.dismissWrapper,
                              children: (0, i.jsx)(c.Clickable, {
                                  className: S.dismissButton,
                                  onClick: n,
                                  children: (0, i.jsx)(c.CircleXIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: S.dismiss
                                  })
                              })
                          })
                        : null
                ]
            })
        });
    }),
    y = l.memo(function (e) {
        let { category: t } = e,
            n = (0, s.e7)([x.Z], () => x.Z.isVoiceCategoryCollapsed(t.guild.id)),
            r = l.useCallback(() => {
                n ? (0, v.s)(t.guild.id) : (0, v.M)(t.guild.id);
            }, [t.guild.id, n]);
        return n
            ? (0, i.jsxs)(c.Clickable, {
                  className: S.voiceChannelsButton,
                  onClick: r,
                  children: [
                      (0, i.jsx)(c.VoiceNormalIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: S.voiceChannelsToggleIcon
                      }),
                      (0, i.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          children: b.intl.string(b.t['/eB9Bg'])
                      })
                  ]
              })
            : (0, i.jsxs)(c.Clickable, {
                  className: S.voiceChannelsButton,
                  onClick: r,
                  children: [
                      (0, i.jsx)(c.VoiceNormalIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: S.voiceChannelsToggleIcon
                      }),
                      (0, i.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          children: b.intl.string(b.t.Q2gPWl)
                      })
                  ]
              });
    }),
    j = l.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, s.e7)([x.Z], () => x.Z.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === I.d4z.GUILD_CATEGORY
            ? l
                ? (0, i.jsx)('li', {
                      className: a()(S.containerDefault),
                      children: (0, i.jsx)('div', {
                          className: a()(S.iconVisibility, S.wrapperStatic),
                          children: (0, i.jsx)(p.Z, {
                              className: S.name,
                              children: (0, i.jsx)(f.Z, { children: b.intl.string(b.t['V/u9Dw']) })
                          })
                      })
                  })
                : null
            : (0, i.jsx)('div', { style: { height: 16 } });
    }),
    T = l.memo(function (e) {
        let { channel: t } = e;
        return (0, i.jsx)('li', {
            className: a()(S.containerDefault),
            children: (0, i.jsx)('div', {
                className: a()(S.iconVisibility, S.wrapperStatic),
                children: (0, i.jsx)(p.Z, {
                    className: S.name,
                    children: (0, i.jsx)(f.Z, { children: t.name })
                })
            })
        });
    });
