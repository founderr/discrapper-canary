s.d(l, {
    SK: function () {
        return Z;
    },
    ZP: function () {
        return E;
    },
    sK: function () {
        return _;
    }
}),
    s(47120);
var a = s(200651),
    t = s(192379),
    i = s(120356),
    n = s.n(i),
    r = s(442837),
    c = s(692547),
    d = s(780384),
    o = s(481060),
    u = s(410030),
    h = s(686546),
    m = s(372769),
    x = s(134432),
    g = s(703656),
    j = s(314897),
    v = s(271383),
    f = s(768581),
    P = s(900849),
    p = s(249842),
    N = s(838367),
    b = s(981631),
    C = s(388032),
    I = s(208052),
    T = s(892561),
    S = s(494536);
function U() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', { className: I.splashPlaceholder }),
            (0, a.jsxs)('div', {
                className: n()(I.body, I.hasSplash),
                children: [
                    (0, a.jsx)('div', { className: I.iconPlaceholder }),
                    (0, a.jsx)('div', {
                        className: I.__invalid_headerText,
                        children: (0, a.jsx)('div', { className: I.namePlaceholder })
                    }),
                    (0, a.jsxs)('div', {
                        className: I.memberInfo,
                        children: [
                            (0, a.jsx)('div', {
                                className: I.memberCount,
                                children: (0, a.jsx)('div', { className: I.memberInfoPlaceholder })
                            }),
                            (0, a.jsx)('div', {
                                className: I.memberCount,
                                children: (0, a.jsx)('div', { className: I.memberInfoPlaceholder })
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { className: I.viewButtonPlaceholder })
                ]
            })
        ]
    });
}
function Z() {
    let e = (0, u.ZP)();
    return (0, a.jsx)(o.Dialog, {
        'aria-label': C.intl.string(C.t['8LKcho']),
        className: I.guildPopout,
        children: (0, a.jsxs)('div', {
            className: I.body,
            children: [
                (0, a.jsx)('img', {
                    src: (0, d.wj)(e) ? T : S,
                    className: I.unavailableIcon,
                    width: 80,
                    height: 80,
                    alt: ''
                }),
                (0, a.jsx)(o.Heading, {
                    className: I.unavailableHeader,
                    variant: 'heading-md/semibold',
                    children: C.intl.string(C.t['+kdPHx'])
                }),
                (0, a.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: C.intl.string(C.t['Yn1+xs'])
                })
            ]
        })
    });
}
function _(e) {
    var l, s;
    let { guild: i, channelId: d, messageId: u } = e,
        { name: p, id: N, discoverySplash: T, icon: S, description: U, presenceCount: Z, memberCount: _, emojis: E } = i,
        F = (0, r.e7)([j.default], () => j.default.getId()),
        L = (0, r.e7)([v.ZP], () => v.ZP.isMember(N, F), [N, F]),
        [D, y] = t.useState(!1),
        G = (e) => {
            if ((e.stopPropagation(), L)) (0, g.XU)(N, d, u);
            else {
                let e = {
                    page: b.ZY5.GUILD_CHANNEL,
                    section: b.jXE.GUILD_POPOUT,
                    object: b.qAy.CARD
                };
                (0, P.Ub)(N, e);
            }
            y(!0);
        },
        O = f.ZP.getGuildDiscoverySplashURL({
            id: N,
            splash: T,
            size: 250 * (0, x.x_)()
        }),
        R =
            null !==
                (l = f.ZP.getGuildIconURL({
                    id: N,
                    icon: S,
                    size: 80
                })) && void 0 !== l
                ? l
                : void 0,
        k = E,
        w = null;
    return (
        null != k && k.length > 6 && null != E && ((k = null !== (s = null == E ? void 0 : E.slice(Math.max((null == E ? void 0 : E.length) - 6, 0))) && void 0 !== s ? s : []), (w = E.length - 6)),
        (0, a.jsxs)(o.Dialog, {
            'aria-label': p,
            className: I.guildPopout,
            children: [
                null != O
                    ? (0, a.jsx)('img', {
                          src: O,
                          alt: '',
                          className: I.splashImage
                      })
                    : null,
                (0, a.jsxs)('div', {
                    className: n()(I.body, { [I.hasSplash]: null != O }),
                    children: [
                        (0, a.jsx)('div', {
                            className: n()({ [I.iconWithSplash]: null != O }),
                            children: (0, a.jsx)(o.Clickable, {
                                onClick: G,
                                children: (0, a.jsx)(h.ZP, {
                                    mask: h.ZP.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, a.jsx)('div', {
                                        className: I.iconMask,
                                        children: (0, a.jsx)(h.ZP, {
                                            mask: h.ZP.Masks.SQUIRCLE,
                                            width: 80,
                                            height: 80,
                                            children: (0, a.jsx)('img', {
                                                src: R,
                                                alt: '',
                                                className: I.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        null != p
                            ? (0, a.jsxs)('div', {
                                  className: I.guildNameWrapper,
                                  children: [
                                      (0, a.jsx)(m.Z, {
                                          className: I.badge,
                                          guild: i,
                                          tooltipPosition: 'top',
                                          tooltipColor: o.Tooltip.Colors.PRIMARY,
                                          badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css
                                      }),
                                      (0, a.jsx)(o.Text, {
                                          variant: 'text-md/semibold',
                                          className: I.guildName,
                                          children: p
                                      })
                                  ]
                              })
                            : null,
                        null != U
                            ? (0, a.jsx)(o.Text, {
                                  color: 'header-secondary',
                                  className: I.description,
                                  variant: 'text-sm/normal',
                                  children: U
                              })
                            : null,
                        (0, a.jsxs)('div', {
                            className: I.memberInfo,
                            children: [
                                null != Z
                                    ? (0, a.jsxs)('div', {
                                          className: I.memberCount,
                                          children: [
                                              (0, a.jsx)('div', { className: I.dotOnline }),
                                              (0, a.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: I.memberText,
                                                  children: C.intl.format(C.t['LC+S+v'], { membersOnline: Z })
                                              })
                                          ]
                                      })
                                    : null,
                                null != _
                                    ? (0, a.jsxs)('div', {
                                          className: I.memberCount,
                                          children: [
                                              (0, a.jsx)('div', { className: I.dotOffline }),
                                              (0, a.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: I.memberText,
                                                  children: C.intl.format(C.t.zRl6XV, { count: _ })
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: I.footer,
                    children: [
                        null != k && k.length > 0
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(o.Heading, {
                                          variant: 'heading-deprecated-12/semibold',
                                          className: I.emojiHeader,
                                          color: 'header-secondary',
                                          children: C.intl.string(C.t.Q60n1N)
                                      }),
                                      (0, a.jsxs)('div', {
                                          className: n()(I.emojiContainer, { [I.withCounter]: null != w }),
                                          children: [
                                              k.map((e) => {
                                                  let l = f.ZP.getEmojiURL({
                                                      id: e.id,
                                                      animated: !1,
                                                      size: 24
                                                  });
                                                  return (0, a.jsx)(
                                                      o.Tooltip,
                                                      {
                                                          text: ':'.concat(e.name, ':'),
                                                          children: (e) =>
                                                              (0, a.jsx)('img', {
                                                                  ...e,
                                                                  width: 24,
                                                                  height: 24,
                                                                  src: l,
                                                                  className: n()({ [I.emoji]: null == w }),
                                                                  alt: ''
                                                              })
                                                      },
                                                      e.id
                                                  );
                                              }),
                                              null != w
                                                  ? (0, a.jsx)(o.Heading, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: I.emojiCounter,
                                                        color: 'header-secondary',
                                                        children: '+'.concat(w)
                                                    })
                                                  : null
                                          ]
                                      })
                                  ]
                              })
                            : null,
                        (0, a.jsx)(o.Button, {
                            look: o.Button.Looks.FILLED,
                            color: o.Button.Colors.BRAND,
                            size: o.Button.Sizes.SMALL,
                            onClick: G,
                            submitting: D,
                            autoFocus: !0,
                            children: C.intl.string(C.t['K+WeR0'])
                        })
                    ]
                })
            ]
        })
    );
}
function E(e) {
    let { guildId: l, channelId: s, messageId: i } = e,
        {
            loading: n,
            unavailable: c,
            guild: d
        } = (0, r.cj)(
            [N.Z],
            () => ({
                guild: N.Z.getGuild(l),
                loading: N.Z.isFetchingGuild(l),
                unavailable: N.Z.hasFetchFailed(l)
            }),
            [l]
        );
    return (t.useEffect(() => {
        null == d && !n && !c && (0, p.P)(l);
    }, [d, l, n, c]),
    n)
        ? (0, a.jsx)(o.Dialog, {
              'aria-label': C.intl.string(C.t.ZTNur6),
              className: I.guildPopout,
              children: (0, a.jsx)(U, {})
          })
        : null == d || c
          ? (0, a.jsx)(Z, {})
          : (0, a.jsx)(_, {
                guild: d,
                channelId: s,
                messageId: i
            });
}
