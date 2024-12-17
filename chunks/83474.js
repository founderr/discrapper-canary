t.d(n, {
    SK: function () {
        return A;
    },
    ZP: function () {
        return w;
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
    o = t(692547),
    c = t(780384),
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
    P = t(914620),
    T = t(981631),
    b = t(388032),
    I = t(302602),
    C = t(892561),
    S = t(494536);
function y() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', { className: I.splashPlaceholder }),
            (0, l.jsxs)('div', {
                className: a()(I.body, I.hasSplash),
                children: [
                    (0, l.jsx)('div', { className: I.iconPlaceholder }),
                    (0, l.jsx)('div', {
                        className: I.__invalid_headerText,
                        children: (0, l.jsx)('div', { className: I.namePlaceholder })
                    }),
                    (0, l.jsxs)('div', {
                        className: I.memberInfo,
                        children: [
                            (0, l.jsx)('div', {
                                className: I.memberCount,
                                children: (0, l.jsx)('div', { className: I.memberInfoPlaceholder })
                            }),
                            (0, l.jsx)('div', {
                                className: I.memberCount,
                                children: (0, l.jsx)('div', { className: I.memberInfoPlaceholder })
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { className: I.viewButtonPlaceholder })
                ]
            })
        ]
    });
}
function A() {
    let e = (0, d.ZP)();
    return (0, l.jsx)(u.Dialog, {
        'aria-label': b.intl.string(b.t['8LKcho']),
        className: I.guildPopout,
        children: (0, l.jsxs)('div', {
            className: I.body,
            children: [
                (0, l.jsx)('img', {
                    src: (0, c.wj)(e) ? C : S,
                    className: I.unavailableIcon,
                    width: 80,
                    height: 80,
                    alt: ''
                }),
                (0, l.jsx)(u.Heading, {
                    className: I.unavailableHeader,
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
    let { guild: r, channelId: c, messageId: d } = e,
        { name: p, id: E, discoverySplash: N, icon: P, description: C, presenceCount: S, memberCount: y, emojis: A } = r,
        O = (0, s.e7)([x.default], () => x.default.getId()),
        Z = (0, s.e7)([_.ZP], () => _.ZP.isMember(E, O), [E, O]),
        [w, R] = i.useState(!1),
        U = (e) => {
            if ((e.stopPropagation(), Z)) (0, g.XU)(E, c, d);
            else {
                let e = {
                    page: T.ZY5.GUILD_CHANNEL,
                    section: T.jXE.GUILD_POPOUT,
                    object: T.qAy.CARD
                };
                (0, v.Ub)(E, e);
            }
            R(!0);
        },
        D = j.ZP.getGuildDiscoverySplashURL({
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
            className: I.guildPopout,
            children: [
                null != D
                    ? (0, l.jsx)('img', {
                          src: D,
                          alt: '',
                          className: I.splashImage
                      })
                    : null,
                (0, l.jsxs)('div', {
                    className: a()(I.body, { [I.hasSplash]: null != D }),
                    children: [
                        (0, l.jsx)('div', {
                            className: a()({ [I.iconWithSplash]: null != D }),
                            children: (0, l.jsx)(u.Clickable, {
                                onClick: U,
                                children: (0, l.jsx)(h.ZP, {
                                    mask: h.ZP.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, l.jsx)('div', {
                                        className: I.iconMask,
                                        children: (0, l.jsx)(h.ZP, {
                                            mask: h.ZP.Masks.SQUIRCLE,
                                            width: 80,
                                            height: 80,
                                            children: (0, l.jsx)('img', {
                                                src: G,
                                                alt: '',
                                                className: I.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        null != p
                            ? (0, l.jsxs)('div', {
                                  className: I.guildNameWrapper,
                                  children: [
                                      (0, l.jsx)(m.Z, {
                                          className: I.badge,
                                          guild: r,
                                          tooltipPosition: 'top',
                                          tooltipColor: u.Tooltip.Colors.PRIMARY,
                                          badgeColor: o.Z.unsafe_rawColors.PRIMARY_500.css
                                      }),
                                      (0, l.jsx)(u.Text, {
                                          variant: 'text-md/semibold',
                                          className: I.guildName,
                                          children: p
                                      })
                                  ]
                              })
                            : null,
                        null != C
                            ? (0, l.jsx)(u.Text, {
                                  color: 'header-secondary',
                                  className: I.description,
                                  variant: 'text-sm/normal',
                                  children: C
                              })
                            : null,
                        (0, l.jsxs)('div', {
                            className: I.memberInfo,
                            children: [
                                null != S
                                    ? (0, l.jsxs)('div', {
                                          className: I.memberCount,
                                          children: [
                                              (0, l.jsx)('div', { className: I.dotOnline }),
                                              (0, l.jsx)(u.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: I.memberText,
                                                  children: b.intl.format(b.t['LC+S+v'], { membersOnline: S })
                                              })
                                          ]
                                      })
                                    : null,
                                null != y
                                    ? (0, l.jsxs)('div', {
                                          className: I.memberCount,
                                          children: [
                                              (0, l.jsx)('div', { className: I.dotOffline }),
                                              (0, l.jsx)(u.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: I.memberText,
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
                    className: I.footer,
                    children: [
                        null != L && L.length > 0
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(u.Heading, {
                                          variant: 'heading-deprecated-12/semibold',
                                          className: I.emojiHeader,
                                          color: 'header-secondary',
                                          children: b.intl.string(b.t.Q60n1N)
                                      }),
                                      (0, l.jsxs)('div', {
                                          className: a()(I.emojiContainer, { [I.withCounter]: null != M }),
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
                                                                  className: a()({ [I.emoji]: null == M }),
                                                                  alt: ''
                                                              })
                                                      },
                                                      e.id
                                                  );
                                              }),
                                              null != M
                                                  ? (0, l.jsx)(u.Heading, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: I.emojiCounter,
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
                            submitting: w,
                            autoFocus: !0,
                            children: b.intl.string(b.t['K+WeR0'])
                        })
                    ]
                })
            ]
        })
    );
}
function Z(e) {
    let { guildId: n, channelId: t, messageId: r } = e,
        {
            loading: a,
            unavailable: o,
            guild: c
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
        null == c && !a && !o && (0, p.P)(n);
    }, [c, n, a, o]),
    a)
        ? (0, l.jsx)(u.Dialog, {
              'aria-label': b.intl.string(b.t.ZTNur6),
              className: I.guildPopout,
              children: (0, l.jsx)(y, {})
          })
        : null == c || o
          ? (0, l.jsx)(A, {})
          : (0, l.jsx)(O, {
                guild: c,
                channelId: t,
                messageId: r
            });
}
function w(e) {
    return (0, N.h)()
        ? (0, l.jsx)(P.Z, {
              setPopoutRef: e.setPopoutRef,
              guildId: e.guildId
          })
        : (0, l.jsx)(Z, { ...e });
}
