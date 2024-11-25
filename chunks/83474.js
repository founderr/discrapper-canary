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
    o = t(780384),
    u = t(481060),
    d = t(410030),
    h = t(686546),
    m = t(372769),
    g = t(134432),
    f = t(703656),
    _ = t(314897),
    E = t(271383),
    x = t(768581),
    T = t(900849),
    p = t(249842),
    N = t(838367),
    j = t(981631),
    P = t(388032),
    v = t(302602),
    I = t(892561),
    S = t(494536);
function b() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', { className: v.splashPlaceholder }),
            (0, l.jsxs)('div', {
                className: s()(v.body, v.hasSplash),
                children: [
                    (0, l.jsx)('div', { className: v.iconPlaceholder }),
                    (0, l.jsx)('div', {
                        className: v.__invalid_headerText,
                        children: (0, l.jsx)('div', { className: v.namePlaceholder })
                    }),
                    (0, l.jsxs)('div', {
                        className: v.memberInfo,
                        children: [
                            (0, l.jsx)('div', {
                                className: v.memberCount,
                                children: (0, l.jsx)('div', { className: v.memberInfoPlaceholder })
                            }),
                            (0, l.jsx)('div', {
                                className: v.memberCount,
                                children: (0, l.jsx)('div', { className: v.memberInfoPlaceholder })
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { className: v.viewButtonPlaceholder })
                ]
            })
        ]
    });
}
function C() {
    let e = (0, d.ZP)();
    return (0, l.jsx)(u.Dialog, {
        'aria-label': P.intl.string(P.t['8LKcho']),
        className: v.guildPopout,
        children: (0, l.jsxs)('div', {
            className: v.body,
            children: [
                (0, l.jsx)('img', {
                    src: (0, o.wj)(e) ? I : S,
                    className: v.unavailableIcon,
                    width: 80,
                    height: 80,
                    alt: ''
                }),
                (0, l.jsx)(u.Heading, {
                    className: v.unavailableHeader,
                    variant: 'heading-md/semibold',
                    children: P.intl.string(P.t['+kdPHx'])
                }),
                (0, l.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    children: P.intl.string(P.t['Yn1+xs'])
                })
            ]
        })
    });
}
function A(e) {
    var n, t;
    let { guild: a, channelId: o, messageId: d } = e,
        { name: p, id: N, discoverySplash: I, icon: S, description: b, presenceCount: C, memberCount: A, emojis: y } = a,
        O = (0, r.e7)([_.default], () => _.default.getId()),
        U = (0, r.e7)([E.ZP], () => E.ZP.isMember(N, O), [N, O]),
        [Z, D] = i.useState(!1),
        w = (e) => {
            if ((e.stopPropagation(), U)) (0, f.XU)(N, o, d);
            else {
                let e = {
                    page: j.ZY5.GUILD_CHANNEL,
                    section: j.jXE.GUILD_POPOUT,
                    object: j.qAy.CARD
                };
                (0, T.Ub)(N, e);
            }
            D(!0);
        },
        R = x.ZP.getGuildDiscoverySplashURL({
            id: N,
            splash: I,
            size: 250 * (0, g.x_)()
        }),
        G =
            null !==
                (n = x.ZP.getGuildIconURL({
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
        (0, l.jsxs)(u.Dialog, {
            'aria-label': p,
            className: v.guildPopout,
            children: [
                null != R
                    ? (0, l.jsx)('img', {
                          src: R,
                          alt: '',
                          className: v.splashImage
                      })
                    : null,
                (0, l.jsxs)('div', {
                    className: s()(v.body, { [v.hasSplash]: null != R }),
                    children: [
                        (0, l.jsx)('div', {
                            className: s()({ [v.iconWithSplash]: null != R }),
                            children: (0, l.jsx)(u.Clickable, {
                                onClick: w,
                                children: (0, l.jsx)(h.ZP, {
                                    mask: h.ZP.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, l.jsx)('div', {
                                        className: v.iconMask,
                                        children: (0, l.jsx)(h.ZP, {
                                            mask: h.ZP.Masks.SQUIRCLE,
                                            width: 80,
                                            height: 80,
                                            children: (0, l.jsx)('img', {
                                                src: G,
                                                alt: '',
                                                className: v.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        null != p
                            ? (0, l.jsxs)('div', {
                                  className: v.guildNameWrapper,
                                  children: [
                                      (0, l.jsx)(m.Z, {
                                          className: v.badge,
                                          guild: a,
                                          tooltipPosition: 'top',
                                          tooltipColor: u.Tooltip.Colors.PRIMARY,
                                          badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css
                                      }),
                                      (0, l.jsx)(u.Text, {
                                          variant: 'text-md/semibold',
                                          className: v.guildName,
                                          children: p
                                      })
                                  ]
                              })
                            : null,
                        null != b
                            ? (0, l.jsx)(u.Text, {
                                  color: 'header-secondary',
                                  className: v.description,
                                  variant: 'text-sm/normal',
                                  children: b
                              })
                            : null,
                        (0, l.jsxs)('div', {
                            className: v.memberInfo,
                            children: [
                                null != C
                                    ? (0, l.jsxs)('div', {
                                          className: v.memberCount,
                                          children: [
                                              (0, l.jsx)('div', { className: v.dotOnline }),
                                              (0, l.jsx)(u.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: v.memberText,
                                                  children: P.intl.format(P.t['LC+S+v'], { membersOnline: C })
                                              })
                                          ]
                                      })
                                    : null,
                                null != A
                                    ? (0, l.jsxs)('div', {
                                          className: v.memberCount,
                                          children: [
                                              (0, l.jsx)('div', { className: v.dotOffline }),
                                              (0, l.jsx)(u.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: v.memberText,
                                                  children: P.intl.format(P.t.zRl6XV, { count: A })
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: v.footer,
                    children: [
                        null != M && M.length > 0
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(u.Heading, {
                                          variant: 'heading-deprecated-12/semibold',
                                          className: v.emojiHeader,
                                          color: 'header-secondary',
                                          children: P.intl.string(P.t.Q60n1N)
                                      }),
                                      (0, l.jsxs)('div', {
                                          className: s()(v.emojiContainer, { [v.withCounter]: null != L }),
                                          children: [
                                              M.map((e) => {
                                                  let n = x.ZP.getEmojiURL({
                                                      id: e.id,
                                                      animated: !1,
                                                      size: 24
                                                  });
                                                  return (0, l.jsx)(
                                                      u.Tooltip,
                                                      {
                                                          text: ':'.concat(e.name, ':'),
                                                          children: (e) =>
                                                              (0, l.jsx)('img', {
                                                                  ...e,
                                                                  width: 24,
                                                                  height: 24,
                                                                  src: n,
                                                                  className: s()({ [v.emoji]: null == L }),
                                                                  alt: ''
                                                              })
                                                      },
                                                      e.id
                                                  );
                                              }),
                                              null != L
                                                  ? (0, l.jsx)(u.Heading, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: v.emojiCounter,
                                                        color: 'header-secondary',
                                                        children: '+'.concat(L)
                                                    })
                                                  : null
                                          ]
                                      })
                                  ]
                              })
                            : null,
                        (0, l.jsx)(u.Button, {
                            look: u.Button.Looks.FILLED,
                            color: u.Button.Colors.BRAND,
                            size: u.Button.Sizes.SMALL,
                            onClick: w,
                            submitting: Z,
                            autoFocus: !0,
                            children: P.intl.string(P.t['K+WeR0'])
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
            guild: o
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
        null == o && !s && !c && (0, p.P)(n);
    }, [o, n, s, c]),
    s)
        ? (0, l.jsx)(u.Dialog, {
              'aria-label': P.intl.string(P.t.ZTNur6),
              className: v.guildPopout,
              children: (0, l.jsx)(b, {})
          })
        : null == o || c
          ? (0, l.jsx)(C, {})
          : (0, l.jsx)(A, {
                guild: o,
                channelId: t,
                messageId: a
            });
}
