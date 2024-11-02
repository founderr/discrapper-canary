n.d(t, {
    P: function () {
        return Z;
    },
    Qo: function () {
        return y;
    },
    kw: function () {
        return j;
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
    f = n(111028),
    m = n(680089),
    g = n(430824),
    C = n(496675),
    _ = n(9156),
    x = n(203818),
    v = n(438144),
    I = n(981631),
    b = n(388032),
    N = n(134743);
function E(e) {
    e.stopPropagation();
}
let S = l.memo(function (e) {
    let t,
        { channel: r, connectChannelDragSource: h, connectChannelDropTarget: x, disableManageChannels: v, position: S, sortingPosition: Z, hideIcon: y, children: T } = e,
        j = (0, s.e7)([_.ZP], () => _.ZP.isChannelMuted(r.getGuildId(), r.id)),
        A = (0, s.e7)([m.Z], () => m.Z.isCollapsed(r.id)),
        P = (0, s.e7)([C.Z], () => C.Z.can(I.Plq.MANAGE_CHANNELS, r));
    t = null != Z ? (S > Z ? N.containerDragAfter : N.containerDragBefore) : N.containerDefault;
    let R = l.useCallback(() => {
            A ? (0, u.mJ)(r.id) : (0, u.c4)(r.id);
        }, [r.id, A]),
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
                        className: a()(N.iconVisibility, N.wrapper, {
                            [N.collapsed]: A,
                            [N.muted]: j,
                            [N.clickable]: !0
                        }),
                        onContextMenu: M,
                        children: [
                            (0, i.jsxs)(c.Clickable, {
                                innerRef: k,
                                className: N.mainContent,
                                tabIndex: D,
                                ...O,
                                onClick: R,
                                'aria-label': b.intl.formatToPlainString(b.t.y5l3Jy, { categoryName: r.name }),
                                'aria-expanded': !A,
                                focusProps: { enabled: !1 },
                                children: [
                                    y
                                        ? null
                                        : (0, i.jsx)(c.ChevronSmallDownIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: N.icon
                                          }),
                                    (0, i.jsx)(p.Z, {
                                        className: N.name,
                                        children: (0, i.jsx)(f.Z, { children: r.name })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                onClick: E,
                                className: N.children,
                                children:
                                    P && !v
                                        ? (0, i.jsx)(c.Tooltip, {
                                              text: b.intl.string(b.t['fUYU+v']),
                                              children: (e) => {
                                                  let { onMouseEnter: t, onMouseLeave: n } = e;
                                                  return (0, i.jsx)(c.Button, {
                                                      'aria-label': b.intl.string(b.t['fUYU+v']),
                                                      look: c.Button.Looks.BLANK,
                                                      size: c.Button.Sizes.NONE,
                                                      className: a()(N.addButton, N.forceVisible),
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
                                                          className: N.addButtonIcon
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
    return null != x && null != h ? x(h(U)) : U;
});
t.ZP = (0, h.B)(S);
let Z = l.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, i.jsx)('li', {
            className: a()(l, N.containerDefault),
            children: (0, i.jsxs)('div', {
                className: a()(N.iconVisibility, N.wrapperStatic),
                children: [
                    (0, i.jsx)('div', {
                        className: N.mainContent,
                        children: (0, i.jsx)(p.Z, {
                            className: N.name,
                            children: (0, i.jsx)(f.Z, { children: t })
                        })
                    }),
                    null != n
                        ? (0, i.jsx)(c.TooltipContainer, {
                              text: b.intl.string(b.t['5qNmsb']),
                              className: N.dismissWrapper,
                              children: (0, i.jsx)(c.Clickable, {
                                  className: N.dismissButton,
                                  onClick: n,
                                  children: (0, i.jsx)(c.CircleXIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: N.dismiss
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
                  className: N.voiceChannelsButton,
                  onClick: r,
                  children: [
                      (0, i.jsx)(c.VoiceNormalIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: N.voiceChannelsToggleIcon
                      }),
                      (0, i.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          children: b.intl.string(b.t['/eB9Bg'])
                      })
                  ]
              })
            : (0, i.jsxs)(c.Clickable, {
                  className: N.voiceChannelsButton,
                  onClick: r,
                  children: [
                      (0, i.jsx)(c.VoiceNormalIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: N.voiceChannelsToggleIcon
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
            l = (0, s.e7)([x.Z], () => x.Z.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === I.d4z.GUILD_CATEGORY
            ? l
                ? (0, i.jsx)('li', {
                      className: a()(N.containerDefault),
                      children: (0, i.jsx)('div', {
                          className: a()(N.iconVisibility, N.wrapperStatic),
                          children: (0, i.jsx)(p.Z, {
                              className: N.name,
                              children: (0, i.jsx)(f.Z, { children: b.intl.string(b.t['V/u9Dw']) })
                          })
                      })
                  })
                : null
            : (0, i.jsx)('div', { style: { height: 16 } });
    }),
    j = l.memo(function (e) {
        let { channel: t } = e;
        return (0, i.jsx)('li', {
            className: a()(N.containerDefault),
            children: (0, i.jsx)('div', {
                className: a()(N.iconVisibility, N.wrapperStatic),
                children: (0, i.jsx)(p.Z, {
                    className: N.name,
                    children: (0, i.jsx)(f.Z, { children: t.name })
                })
            })
        });
    });
