n.d(t, {
    P: function () {
        return N;
    },
    Qo: function () {
        return y;
    },
    kw: function () {
        return A;
    },
    rj: function () {
        return T;
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
    m = n(111028),
    f = n(680089),
    g = n(430824),
    C = n(496675),
    _ = n(9156),
    v = n(203818),
    x = n(438144),
    I = n(981631),
    b = n(388032),
    S = n(147903);
function E(e) {
    e.stopPropagation();
}
let Z = l.memo(function (e) {
    let t,
        { channel: r, connectChannelDragSource: h, connectChannelDropTarget: v, disableManageChannels: x, position: Z, sortingPosition: N, hideIcon: y, children: T } = e,
        A = (0, s.e7)([_.ZP], () => _.ZP.isChannelMuted(r.getGuildId(), r.id)),
        j = (0, s.e7)([f.Z], () => f.Z.isCollapsed(r.id)),
        P = (0, s.e7)([C.Z], () => C.Z.can(I.Plq.MANAGE_CHANNELS, r));
    t = null != N ? (Z > N ? S.containerDragAfter : S.containerDragBefore) : S.containerDefault;
    let R = l.useCallback(() => {
            j ? (0, u.mJ)(r.id) : (0, u.c4)(r.id);
        }, [r.id, j]),
        M = l.useCallback(
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
                    let { default: l } = await Promise.all([n.e('45094'), n.e('5506')]).then(n.bind(n, 218613));
                    return (n) =>
                        (0, i.jsx)(l, {
                            ...n,
                            channelType: e,
                            guildId: t,
                            categoryId: 'null' !== r.id ? r.id : null
                        });
                });
        }, [r]),
        { role: w, tabIndex: D, ...O } = (0, o.JA)(r.id),
        k = l.useRef(null),
        G = l.useRef(null),
        U = (0, i.jsxs)('li', {
            className: t,
            'data-dnd-name': r.name,
            children: [
                (0, i.jsx)(c.FocusRing, {
                    focusTarget: k,
                    ringTarget: G,
                    offset: {
                        left: 4,
                        right: 4
                    },
                    children: (0, i.jsxs)('div', {
                        ref: G,
                        className: a()(S.iconVisibility, S.wrapper, {
                            [S.collapsed]: j,
                            [S.muted]: A,
                            [S.clickable]: !0
                        }),
                        onContextMenu: M,
                        children: [
                            (0, i.jsxs)(c.Clickable, {
                                innerRef: k,
                                className: S.mainContent,
                                tabIndex: D,
                                ...O,
                                onClick: R,
                                'aria-label': b.intl.formatToPlainString(b.t.y5l3Jy, { categoryName: r.name }),
                                'aria-expanded': !j,
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
                                        children: (0, i.jsx)(m.Z, { children: r.name })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                onClick: E,
                                className: S.children,
                                children:
                                    P && !x
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
                T
            ]
        });
    return null != v && null != h ? v(h(U)) : U;
});
t.ZP = (0, h.B)(Z);
let N = l.memo(function (e) {
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
                            children: (0, i.jsx)(m.Z, { children: t })
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
            n = (0, s.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id)),
            r = l.useCallback(() => {
                n ? (0, x.s)(t.guild.id) : (0, x.M)(t.guild.id);
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
    T = l.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, s.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === I.d4z.GUILD_CATEGORY
            ? l
                ? (0, i.jsx)('li', {
                      className: a()(S.containerDefault),
                      children: (0, i.jsx)('div', {
                          className: a()(S.iconVisibility, S.wrapperStatic),
                          children: (0, i.jsx)(p.Z, {
                              className: S.name,
                              children: (0, i.jsx)(m.Z, { children: b.intl.string(b.t['V/u9Dw']) })
                          })
                      })
                  })
                : null
            : (0, i.jsx)('div', { style: { height: 16 } });
    }),
    A = l.memo(function (e) {
        let { channel: t } = e;
        return (0, i.jsx)('li', {
            className: a()(S.containerDefault),
            children: (0, i.jsx)('div', {
                className: a()(S.iconVisibility, S.wrapperStatic),
                children: (0, i.jsx)(p.Z, {
                    className: S.name,
                    children: (0, i.jsx)(m.Z, { children: t.name })
                })
            })
        });
    });
