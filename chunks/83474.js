t.d(n, {
    SK: function () {
        return A;
    },
    ZP: function () {
        return D;
    },
    sK: function () {
        return O;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(442837),
    c = t(692547),
    o = t(780384),
    u = t(481060),
    d = t(410030),
    h = t(686546),
    m = t(372769),
    f = t(134432),
    g = t(703656),
    x = t(314897),
    _ = t(271383),
    j = t(768581),
    v = t(900849),
    p = t(249842),
    E = t(838367),
    N = t(576306),
    P = t(637134),
    T = t(981631),
    b = t(388032),
    C = t(302602),
    I = t(892561),
    S = t(494536);
function y() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', { className: C.splashPlaceholder }),
            (0, l.jsxs)('div', {
                className: a()(C.body, C.hasSplash),
                children: [
                    (0, l.jsx)('div', { className: C.iconPlaceholder }),
                    (0, l.jsx)('div', {
                        className: C.__invalid_headerText,
                        children: (0, l.jsx)('div', { className: C.namePlaceholder })
                    }),
                    (0, l.jsxs)('div', {
                        className: C.memberInfo,
                        children: [
                            (0, l.jsx)('div', {
                                className: C.memberCount,
                                children: (0, l.jsx)('div', { className: C.memberInfoPlaceholder })
                            }),
                            (0, l.jsx)('div', {
                                className: C.memberCount,
                                children: (0, l.jsx)('div', { className: C.memberInfoPlaceholder })
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { className: C.viewButtonPlaceholder })
                ]
            })
        ]
    });
}
function A() {
    let e = (0, d.ZP)();
    return (0, l.jsx)(u.Dialog, {
        'aria-label': b.intl.string(b.t['8LKcho']),
        className: C.guildPopout,
        children: (0, l.jsxs)('div', {
            className: C.body,
            children: [
                (0, l.jsx)('img', {
                    src: (0, o.wj)(e) ? I : S,
                    className: C.unavailableIcon,
                    width: 80,
                    height: 80,
                    alt: ''
                }),
                (0, l.jsx)(u.Heading, {
                    className: C.unavailableHeader,
                    variant: 'heading-md/semibold',
                    children: b.intl.string(b.t['+kdPHx'])
                }),
                (0, l.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    children: b.intl.string(b.t['Yn1+xs'])
                })
            ]
        })
    });
}
function O(e) {
    var n, t;
    let { guild: r, channelId: o, messageId: d } = e,
        { name: p, id: E, discoverySplash: N, icon: P, description: I, presenceCount: S, memberCount: y, emojis: A } = r,
        O = (0, s.e7)([x.default], () => x.default.getId()),
        w = (0, s.e7)([_.ZP], () => _.ZP.isMember(E, O), [E, O]),
        [D, Z] = i.useState(!1),
        U = (e) => {
            if ((e.stopPropagation(), w)) (0, g.XU)(E, o, d);
            else {
                let e = {
                    page: T.ZY5.GUILD_CHANNEL,
                    section: T.jXE.GUILD_POPOUT,
                    object: T.qAy.CARD
                };
                (0, v.Ub)(E, e);
            }
            Z(!0);
        },
        R = j.ZP.getGuildDiscoverySplashURL({
            id: E,
            splash: N,
            size: 250 * (0, f.x_)()
        }),
        G =
            null !==
                (n = j.ZP.getGuildIconURL({
                    id: E,
                    icon: P,
                    size: 80
                })) && void 0 !== n
                ? n
                : void 0,
        L = A,
        M = null;
    return (
        null != L && L.length > 6 && null != A && ((L = null !== (t = null == A ? void 0 : A.slice(Math.max((null == A ? void 0 : A.length) - 6, 0))) && void 0 !== t ? t : []), (M = A.length - 6)),
        (0, l.jsxs)(u.Dialog, {
            'aria-label': p,
            className: C.guildPopout,
            children: [
                null != R
                    ? (0, l.jsx)('img', {
                          src: R,
                          alt: '',
                          className: C.splashImage
                      })
                    : null,
                (0, l.jsxs)('div', {
                    className: a()(C.body, { [C.hasSplash]: null != R }),
                    children: [
                        (0, l.jsx)('div', {
                            className: a()({ [C.iconWithSplash]: null != R }),
                            children: (0, l.jsx)(u.Clickable, {
                                onClick: U,
                                children: (0, l.jsx)(h.ZP, {
                                    mask: h.ZP.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, l.jsx)('div', {
                                        className: C.iconMask,
                                        children: (0, l.jsx)(h.ZP, {
                                            mask: h.ZP.Masks.SQUIRCLE,
                                            width: 80,
                                            height: 80,
                                            children: (0, l.jsx)('img', {
                                                src: G,
                                                alt: '',
                                                className: C.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        null != p
                            ? (0, l.jsxs)('div', {
                                  className: C.guildNameWrapper,
                                  children: [
                                      (0, l.jsx)(m.Z, {
                                          className: C.badge,
                                          guild: r,
                                          tooltipPosition: 'top',
                                          tooltipColor: u.Tooltip.Colors.PRIMARY,
                                          badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css
                                      }),
                                      (0, l.jsx)(u.Text, {
                                          variant: 'text-md/semibold',
                                          className: C.guildName,
                                          children: p
                                      })
                                  ]
                              })
                            : null,
                        null != I
                            ? (0, l.jsx)(u.Text, {
                                  color: 'header-secondary',
                                  className: C.description,
                                  variant: 'text-sm/normal',
                                  children: I
                              })
                            : null,
                        (0, l.jsxs)('div', {
                            className: C.memberInfo,
                            children: [
                                null != S
                                    ? (0, l.jsxs)('div', {
                                          className: C.memberCount,
                                          children: [
                                              (0, l.jsx)('div', { className: C.dotOnline }),
                                              (0, l.jsx)(u.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: C.memberText,
                                                  children: b.intl.format(b.t['LC+S+v'], { membersOnline: S })
                                              })
                                          ]
                                      })
                                    : null,
                                null != y
                                    ? (0, l.jsxs)('div', {
                                          className: C.memberCount,
                                          children: [
                                              (0, l.jsx)('div', { className: C.dotOffline }),
                                              (0, l.jsx)(u.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: C.memberText,
                                                  children: b.intl.format(b.t.zRl6XV, { count: y })
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: C.footer,
                    children: [
                        null != L && L.length > 0
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(u.Heading, {
                                          variant: 'heading-deprecated-12/semibold',
                                          className: C.emojiHeader,
                                          color: 'header-secondary',
                                          children: b.intl.string(b.t.Q60n1N)
                                      }),
                                      (0, l.jsxs)('div', {
                                          className: a()(C.emojiContainer, { [C.withCounter]: null != M }),
                                          children: [
                                              L.map((e) => {
                                                  let n = j.ZP.getEmojiURL({
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
                                                                  className: a()({ [C.emoji]: null == M }),
                                                                  alt: ''
                                                              })
                                                      },
                                                      e.id
                                                  );
                                              }),
                                              null != M
                                                  ? (0, l.jsx)(u.Heading, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: C.emojiCounter,
                                                        color: 'header-secondary',
                                                        children: '+'.concat(M)
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
                            onClick: U,
                            submitting: D,
                            autoFocus: !0,
                            children: b.intl.string(b.t['K+WeR0'])
                        })
                    ]
                })
            ]
        })
    );
}
function w(e) {
    let { guildId: n, channelId: t, messageId: r } = e,
        {
            loading: a,
            unavailable: c,
            guild: o
        } = (0, s.cj)(
            [E.Z],
            () => ({
                guild: E.Z.getGuild(n),
                loading: E.Z.isFetchingGuild(n),
                unavailable: E.Z.hasFetchFailed(n)
            }),
            [n]
        );
    return (i.useEffect(() => {
        null == o && !a && !c && (0, p.P)(n);
    }, [o, n, a, c]),
    a)
        ? (0, l.jsx)(u.Dialog, {
              'aria-label': b.intl.string(b.t.ZTNur6),
              className: C.guildPopout,
              children: (0, l.jsx)(y, {})
          })
        : null == o || c
          ? (0, l.jsx)(A, {})
          : (0, l.jsx)(O, {
                guild: o,
                channelId: t,
                messageId: r
            });
}
function D(e) {
    return (0, N.h)() ? (0, l.jsx)(P.Z, { guildId: e.guildId }) : (0, l.jsx)(w, { ...e });
}
