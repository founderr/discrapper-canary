n.d(t, {
    P: function () {
        return y;
    },
    Qo: function () {
        return T;
    },
    kw: function () {
        return A;
    },
    rj: function () {
        return j;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(211739),
    d = n(239091),
    h = n(146773),
    p = n(82295),
    m = n(111028),
    f = n(540059),
    g = n(680089),
    C = n(430824),
    v = n(496675),
    _ = n(9156),
    x = n(203818),
    I = n(438144),
    b = n(981631),
    E = n(388032),
    S = n(147903);
function Z(e) {
    e.stopPropagation();
}
let N = l.memo(function (e) {
    let t,
        { channel: r, connectChannelDragSource: h, connectChannelDropTarget: x, disableManageChannels: I, position: N, sortingPosition: y, hideIcon: T, children: j } = e,
        A = (0, f.Q3)('CategoryChannel'),
        P = (0, s.e7)([_.ZP], () => _.ZP.isChannelMuted(r.getGuildId(), r.id)),
        R = (0, s.e7)([g.Z], () => g.Z.isCollapsed(r.id)),
        M = (0, s.e7)([v.Z], () => v.Z.can(b.Plq.MANAGE_CHANNELS, r));
    t = null != y ? (N > y ? S.containerDragAfter : S.containerDragBefore) : S.containerDefault;
    let w = l.useCallback(() => {
            R ? (0, u.mJ)(r.id) : (0, u.c4)(r.id);
        }, [r.id, R]),
        L = l.useCallback(
            (e) => {
                if ('null' !== r.id) {
                    let t = C.Z.getGuild(r.getGuildId());
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
        D = l.useCallback(() => {
            let e = r.type === b.d4z.GUILD_CATEGORY ? null : r.type,
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
        { role: O, tabIndex: k, ...G } = (0, a.JA)(r.id),
        U = l.useRef(null),
        B = l.useRef(null),
        H = (0, i.jsxs)('li', {
            className: t,
            'data-dnd-name': r.name,
            children: [
                (0, i.jsx)(c.FocusRing, {
                    focusTarget: U,
                    ringTarget: B,
                    offset: {
                        left: 4,
                        right: 4
                    },
                    children: (0, i.jsxs)('div', {
                        ref: B,
                        className: o()(S.iconVisibility, S.wrapper, {
                            [S.collapsed]: R,
                            [S.muted]: P,
                            [S.clickable]: !0
                        }),
                        onContextMenu: L,
                        children: [
                            (0, i.jsxs)(c.Clickable, {
                                innerRef: U,
                                className: S.mainContent,
                                tabIndex: k,
                                ...G,
                                onClick: w,
                                'aria-label': E.intl.formatToPlainString(E.t.y5l3Jy, { categoryName: r.name }),
                                'aria-expanded': !R,
                                focusProps: { enabled: !1 },
                                children: [
                                    A || T
                                        ? null
                                        : (0, i.jsx)(c.ChevronSmallDownIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: S.icon
                                          }),
                                    (0, i.jsx)(p.Z, {
                                        className: S.name,
                                        children: (0, i.jsx)(m.Z, { children: r.name })
                                    }),
                                    A && !T
                                        ? (0, i.jsx)(c.ChevronSmallDownIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: S.icon
                                          })
                                        : null
                                ]
                            }),
                            (0, i.jsx)('div', {
                                onClick: Z,
                                className: S.children,
                                children:
                                    M && !I
                                        ? (0, i.jsx)(c.Tooltip, {
                                              text: E.intl.string(E.t['fUYU+v']),
                                              children: (e) => {
                                                  let { onMouseEnter: t, onMouseLeave: n } = e;
                                                  return (0, i.jsx)(c.Button, {
                                                      'aria-label': E.intl.string(E.t['fUYU+v']),
                                                      look: c.Button.Looks.BLANK,
                                                      size: c.Button.Sizes.NONE,
                                                      className: o()(S.addButton, S.forceVisible),
                                                      onClick: D,
                                                      onMouseEnter: t,
                                                      onMouseLeave: n,
                                                      tabIndex: k,
                                                      focusProps: {
                                                          offset: {
                                                              top: -3,
                                                              right: -4,
                                                              bottom: -3,
                                                              left: -4
                                                          }
                                                      },
                                                      children: A
                                                          ? (0, i.jsx)(c.PlusMediumIcon, {
                                                                size: 'refresh_sm',
                                                                color: 'currentColor',
                                                                className: S.addButtonIcon
                                                            })
                                                          : (0, i.jsx)(c.PlusSmallIcon, {
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
    return null != x && null != h ? x(h(H)) : H;
});
t.ZP = (0, h.B)(N);
let y = l.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, i.jsx)('li', {
            className: o()(l, S.containerDefault),
            children: (0, i.jsxs)('div', {
                className: o()(S.iconVisibility, S.wrapperStatic),
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
                              text: E.intl.string(E.t['5qNmsb']),
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
    T = l.memo(function (e) {
        let { category: t } = e,
            n = (0, s.e7)([x.Z], () => x.Z.isVoiceCategoryCollapsed(t.guild.id)),
            r = l.useCallback(() => {
                n ? (0, I.s)(t.guild.id) : (0, I.M)(t.guild.id);
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
                          children: E.intl.string(E.t['/eB9Bg'])
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
                          children: E.intl.string(E.t.Q2gPWl)
                      })
                  ]
              });
    }),
    j = l.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, s.e7)([x.Z], () => x.Z.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === b.d4z.GUILD_CATEGORY
            ? l
                ? (0, i.jsx)('li', {
                      className: o()(S.containerDefault),
                      children: (0, i.jsx)('div', {
                          className: o()(S.iconVisibility, S.wrapperStatic),
                          children: (0, i.jsx)(p.Z, {
                              className: S.name,
                              children: (0, i.jsx)(m.Z, { children: E.intl.string(E.t['V/u9Dw']) })
                          })
                      })
                  })
                : null
            : (0, i.jsx)('div', { style: { height: 16 } });
    }),
    A = l.memo(function (e) {
        let { channel: t } = e;
        return (0, i.jsx)('li', {
            className: o()(S.containerDefault),
            children: (0, i.jsx)('div', {
                className: o()(S.iconVisibility, S.wrapperStatic),
                children: (0, i.jsx)(p.Z, {
                    className: S.name,
                    children: (0, i.jsx)(m.Z, { children: t.name })
                })
            })
        });
    });
