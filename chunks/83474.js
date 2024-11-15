t.d(n, {
    SK: function () {
        return C;
    },
    ZP: function () {
        return y;
    },
    sK: function () {
        return A;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    a = t(120356),
    s = t.n(a),
    r = t(442837),
    c = t(692547),
    u = t(780384),
    d = t(481060),
    o = t(410030),
    h = t(686546),
    m = t(372769),
    g = t(134432),
    f = t(703656),
    _ = t(314897),
    x = t(271383),
    T = t(768581),
    p = t(900849),
    E = t(249842),
    N = t(838367),
    P = t(981631),
    v = t(388032),
    j = t(846610),
    I = t(892561),
    S = t(494536);
function b() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', { className: j.splashPlaceholder }),
            (0, l.jsxs)('div', {
                className: s()(j.body, j.hasSplash),
                children: [
                    (0, l.jsx)('div', { className: j.iconPlaceholder }),
                    (0, l.jsx)('div', {
                        className: j.__invalid_headerText,
                        children: (0, l.jsx)('div', { className: j.namePlaceholder })
                    }),
                    (0, l.jsxs)('div', {
                        className: j.memberInfo,
                        children: [
                            (0, l.jsx)('div', {
                                className: j.memberCount,
                                children: (0, l.jsx)('div', { className: j.memberInfoPlaceholder })
                            }),
                            (0, l.jsx)('div', {
                                className: j.memberCount,
                                children: (0, l.jsx)('div', { className: j.memberInfoPlaceholder })
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { className: j.viewButtonPlaceholder })
                ]
            })
        ]
    });
}
function C() {
    let e = (0, o.ZP)();
    return (0, l.jsx)(d.Dialog, {
        'aria-label': v.intl.string(v.t['8LKcho']),
        className: j.guildPopout,
        children: (0, l.jsxs)('div', {
            className: j.body,
            children: [
                (0, l.jsx)('img', {
                    src: (0, u.wj)(e) ? I : S,
                    className: j.unavailableIcon,
                    width: 80,
                    height: 80,
                    alt: ''
                }),
                (0, l.jsx)(d.Heading, {
                    className: j.unavailableHeader,
                    variant: 'heading-md/semibold',
                    children: v.intl.string(v.t['+kdPHx'])
                }),
                (0, l.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: v.intl.string(v.t['Yn1+xs'])
                })
            ]
        })
    });
}
function A(e) {
    var n, t;
    let { guild: a, channelId: u, messageId: o } = e,
        { name: E, id: N, discoverySplash: I, icon: S, description: b, presenceCount: C, memberCount: A, emojis: y } = a,
        O = (0, r.e7)([_.default], () => _.default.getId()),
        U = (0, r.e7)([x.ZP], () => x.ZP.isMember(N, O), [N, O]),
        [Z, D] = i.useState(!1),
        w = (e) => {
            if ((e.stopPropagation(), U)) (0, f.XU)(N, u, o);
            else {
                let e = {
                    page: P.ZY5.GUILD_CHANNEL,
                    section: P.jXE.GUILD_POPOUT,
                    object: P.qAy.CARD
                };
                (0, p.Ub)(N, e);
            }
            D(!0);
        },
        R = T.ZP.getGuildDiscoverySplashURL({
            id: N,
            splash: I,
            size: 250 * (0, g.x_)()
        }),
        G =
            null !==
                (n = T.ZP.getGuildIconURL({
                    id: N,
                    icon: S,
                    size: 80
                })) && void 0 !== n
                ? n
                : void 0,
        M = y,
        L = null;
    return (
        null != M && M.length > 6 && null != y && ((M = null !== (t = null == y ? void 0 : y.slice(Math.max((null == y ? void 0 : y.length) - 6, 0))) && void 0 !== t ? t : []), (L = y.length - 6)),
        (0, l.jsxs)(d.Dialog, {
            'aria-label': E,
            className: j.guildPopout,
            children: [
                null != R
                    ? (0, l.jsx)('img', {
                          src: R,
                          alt: '',
                          className: j.splashImage
                      })
                    : null,
                (0, l.jsxs)('div', {
                    className: s()(j.body, { [j.hasSplash]: null != R }),
                    children: [
                        (0, l.jsx)('div', {
                            className: s()({ [j.iconWithSplash]: null != R }),
                            children: (0, l.jsx)(d.Clickable, {
                                onClick: w,
                                children: (0, l.jsx)(h.ZP, {
                                    mask: h.ZP.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, l.jsx)('div', {
                                        className: j.iconMask,
                                        children: (0, l.jsx)(h.ZP, {
                                            mask: h.ZP.Masks.SQUIRCLE,
                                            width: 80,
                                            height: 80,
                                            children: (0, l.jsx)('img', {
                                                src: G,
                                                alt: '',
                                                className: j.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        null != E
                            ? (0, l.jsxs)('div', {
                                  className: j.guildNameWrapper,
                                  children: [
                                      (0, l.jsx)(m.Z, {
                                          className: j.badge,
                                          guild: a,
                                          tooltipPosition: 'top',
                                          tooltipColor: d.Tooltip.Colors.PRIMARY,
                                          badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css
                                      }),
                                      (0, l.jsx)(d.Text, {
                                          variant: 'text-md/semibold',
                                          className: j.guildName,
                                          children: E
                                      })
                                  ]
                              })
                            : null,
                        null != b
                            ? (0, l.jsx)(d.Text, {
                                  color: 'header-secondary',
                                  className: j.description,
                                  variant: 'text-sm/normal',
                                  children: b
                              })
                            : null,
                        (0, l.jsxs)('div', {
                            className: j.memberInfo,
                            children: [
                                null != C
                                    ? (0, l.jsxs)('div', {
                                          className: j.memberCount,
                                          children: [
                                              (0, l.jsx)('div', { className: j.dotOnline }),
                                              (0, l.jsx)(d.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: j.memberText,
                                                  children: v.intl.format(v.t['LC+S+v'], { membersOnline: C })
                                              })
                                          ]
                                      })
                                    : null,
                                null != A
                                    ? (0, l.jsxs)('div', {
                                          className: j.memberCount,
                                          children: [
                                              (0, l.jsx)('div', { className: j.dotOffline }),
                                              (0, l.jsx)(d.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: j.memberText,
                                                  children: v.intl.format(v.t.zRl6XV, { count: A })
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: j.footer,
                    children: [
                        null != M && M.length > 0
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(d.Heading, {
                                          variant: 'heading-deprecated-12/semibold',
                                          className: j.emojiHeader,
                                          color: 'header-secondary',
                                          children: v.intl.string(v.t.Q60n1N)
                                      }),
                                      (0, l.jsxs)('div', {
                                          className: s()(j.emojiContainer, { [j.withCounter]: null != L }),
                                          children: [
                                              M.map((e) => {
                                                  let n = T.ZP.getEmojiURL({
                                                      id: e.id,
                                                      animated: !1,
                                                      size: 24
                                                  });
                                                  return (0, l.jsx)(
                                                      d.Tooltip,
                                                      {
                                                          text: ':'.concat(e.name, ':'),
                                                          children: (e) =>
                                                              (0, l.jsx)('img', {
                                                                  ...e,
                                                                  width: 24,
                                                                  height: 24,
                                                                  src: n,
                                                                  className: s()({ [j.emoji]: null == L }),
                                                                  alt: ''
                                                              })
                                                      },
                                                      e.id
                                                  );
                                              }),
                                              null != L
                                                  ? (0, l.jsx)(d.Heading, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: j.emojiCounter,
                                                        color: 'header-secondary',
                                                        children: '+'.concat(L)
                                                    })
                                                  : null
                                          ]
                                      })
                                  ]
                              })
                            : null,
                        (0, l.jsx)(d.Button, {
                            look: d.Button.Looks.FILLED,
                            color: d.Button.Colors.BRAND,
                            size: d.Button.Sizes.SMALL,
                            onClick: w,
                            submitting: Z,
                            autoFocus: !0,
                            children: v.intl.string(v.t['K+WeR0'])
                        })
                    ]
                })
            ]
        })
    );
}
function y(e) {
    let { guildId: n, channelId: t, messageId: a } = e,
        {
            loading: s,
            unavailable: c,
            guild: u
        } = (0, r.cj)(
            [N.Z],
            () => ({
                guild: N.Z.getGuild(n),
                loading: N.Z.isFetchingGuild(n),
                unavailable: N.Z.hasFetchFailed(n)
            }),
            [n]
        );
    return (i.useEffect(() => {
        null == u && !s && !c && (0, E.P)(n);
    }, [u, n, s, c]),
    s)
        ? (0, l.jsx)(d.Dialog, {
              'aria-label': v.intl.string(v.t.ZTNur6),
              className: j.guildPopout,
              children: (0, l.jsx)(b, {})
          })
        : null == u || c
          ? (0, l.jsx)(C, {})
          : (0, l.jsx)(A, {
                guild: u,
                channelId: t,
                messageId: a
            });
}
