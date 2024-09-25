n.d(t, {
    SK: function () {
        return U;
    },
    ZP: function () {
        return x;
    },
    sK: function () {
        return w;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(692547),
    c = n(780384),
    d = n(481060),
    _ = n(410030),
    E = n(686546),
    f = n(372769),
    h = n(134432),
    p = n(703656),
    m = n(314897),
    I = n(271383),
    T = n(768581),
    g = n(900849),
    S = n(249842),
    A = n(838367),
    v = n(981631),
    N = n(689938),
    O = n(208052),
    R = n(892561),
    C = n(494536);
let y = 80,
    b = 4,
    L = 250,
    D = 6,
    M = 24;
function P() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: O.splashPlaceholder }),
            (0, i.jsxs)('div', {
                className: s()(O.body, O.hasSplash),
                children: [
                    (0, i.jsx)('div', { className: O.iconPlaceholder }),
                    (0, i.jsx)('div', {
                        className: O.__invalid_headerText,
                        children: (0, i.jsx)('div', { className: O.namePlaceholder })
                    }),
                    (0, i.jsxs)('div', {
                        className: O.memberInfo,
                        children: [
                            (0, i.jsx)('div', {
                                className: O.memberCount,
                                children: (0, i.jsx)('div', { className: O.memberInfoPlaceholder })
                            }),
                            (0, i.jsx)('div', {
                                className: O.memberCount,
                                children: (0, i.jsx)('div', { className: O.memberInfoPlaceholder })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: O.viewButtonPlaceholder })
                ]
            })
        ]
    });
}
function U() {
    let e = (0, _.ZP)();
    return (0, i.jsx)(d.Dialog, {
        'aria-label': N.Z.Messages.GUILD_UNAVAILABLE_HEADER,
        className: O.guildPopout,
        children: (0, i.jsxs)('div', {
            className: O.body,
            children: [
                (0, i.jsx)('img', {
                    src: (0, c.wj)(e) ? R : C,
                    className: O.unavailableIcon,
                    width: y,
                    height: y,
                    alt: ''
                }),
                (0, i.jsx)(d.Heading, {
                    className: O.unavailableHeader,
                    variant: 'heading-md/semibold',
                    children: N.Z.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER
                }),
                (0, i.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: N.Z.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR
                })
            ]
        })
    });
}
function w(e) {
    var t, n;
    let { guild: r, channelId: o, messageId: c } = e,
        { name: _, id: S, discoverySplash: A, icon: R, description: C, presenceCount: P, memberCount: U, emojis: w } = r,
        x = S,
        G = (0, l.e7)([m.default], () => m.default.getId()),
        k = (0, l.e7)([I.ZP], () => I.ZP.isMember(x, G), [x, G]),
        [B, F] = a.useState(!1),
        Z = (e) => {
            if ((e.stopPropagation(), k)) (0, p.XU)(x, o, c);
            else {
                let e = {
                    page: v.ZY5.GUILD_CHANNEL,
                    section: v.jXE.GUILD_POPOUT,
                    object: v.qAy.CARD
                };
                (0, g.Ub)(x, e);
            }
            F(!0);
        },
        V = T.ZP.getGuildDiscoverySplashURL({
            id: S,
            splash: A,
            size: L * (0, h.x_)()
        }),
        H =
            null !==
                (t = T.ZP.getGuildIconURL({
                    id: S,
                    icon: R,
                    size: y
                })) && void 0 !== t
                ? t
                : void 0,
        Y = w,
        j = null;
    return (
        null != Y && Y.length > D && null != w && ((Y = null !== (n = null == w ? void 0 : w.slice(Math.max((null == w ? void 0 : w.length) - D, 0))) && void 0 !== n ? n : []), (j = w.length - D)),
        (0, i.jsxs)(d.Dialog, {
            'aria-label': _,
            className: O.guildPopout,
            children: [
                null != V
                    ? (0, i.jsx)('img', {
                          src: V,
                          alt: '',
                          className: O.splashImage
                      })
                    : null,
                (0, i.jsxs)('div', {
                    className: s()(O.body, { [O.hasSplash]: null != V }),
                    children: [
                        (0, i.jsx)('div', {
                            className: s()({ [O.iconWithSplash]: null != V }),
                            children: (0, i.jsx)(d.Clickable, {
                                onClick: Z,
                                children: (0, i.jsx)(E.ZP, {
                                    mask: E.ZP.Masks.SQUIRCLE,
                                    width: y + 2 * b,
                                    height: y + 2 * b,
                                    children: (0, i.jsx)('div', {
                                        className: O.iconMask,
                                        children: (0, i.jsx)(E.ZP, {
                                            mask: E.ZP.Masks.SQUIRCLE,
                                            width: y,
                                            height: y,
                                            children: (0, i.jsx)('img', {
                                                src: H,
                                                alt: '',
                                                className: O.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        null != _
                            ? (0, i.jsxs)('div', {
                                  className: O.guildNameWrapper,
                                  children: [
                                      (0, i.jsx)(f.Z, {
                                          className: O.badge,
                                          guild: r,
                                          tooltipPosition: 'top',
                                          tooltipColor: d.Tooltip.Colors.PRIMARY,
                                          badgeColor: u.Z.unsafe_rawColors.PRIMARY_500.css
                                      }),
                                      (0, i.jsx)(d.Text, {
                                          variant: 'text-md/semibold',
                                          className: O.guildName,
                                          children: _
                                      })
                                  ]
                              })
                            : null,
                        null != C
                            ? (0, i.jsx)(d.Text, {
                                  color: 'header-secondary',
                                  className: O.description,
                                  variant: 'text-sm/normal',
                                  children: C
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: O.memberInfo,
                            children: [
                                null != P
                                    ? (0, i.jsxs)('div', {
                                          className: O.memberCount,
                                          children: [
                                              (0, i.jsx)('div', { className: O.dotOnline }),
                                              (0, i.jsx)(d.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: O.memberText,
                                                  children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: P })
                                              })
                                          ]
                                      })
                                    : null,
                                null != U
                                    ? (0, i.jsxs)('div', {
                                          className: O.memberCount,
                                          children: [
                                              (0, i.jsx)('div', { className: O.dotOffline }),
                                              (0, i.jsx)(d.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: O.memberText,
                                                  children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: U })
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: O.footer,
                    children: [
                        null != Y && Y.length > 0
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.Heading, {
                                          variant: 'heading-deprecated-12/semibold',
                                          className: O.emojiHeader,
                                          color: 'header-secondary',
                                          children: N.Z.Messages.SERVER_EMOJI
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: s()(O.emojiContainer, { [O.withCounter]: null != j }),
                                          children: [
                                              Y.map((e) => {
                                                  let t = T.ZP.getEmojiURL({
                                                      id: e.id,
                                                      animated: !1,
                                                      size: M
                                                  });
                                                  return (0, i.jsx)(
                                                      d.Tooltip,
                                                      {
                                                          text: ':'.concat(e.name, ':'),
                                                          children: (e) =>
                                                              (0, i.jsx)('img', {
                                                                  ...e,
                                                                  width: M,
                                                                  height: M,
                                                                  src: t,
                                                                  className: s()({ [O.emoji]: null == j }),
                                                                  alt: ''
                                                              })
                                                      },
                                                      e.id
                                                  );
                                              }),
                                              null != j
                                                  ? (0, i.jsx)(d.Heading, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: O.emojiCounter,
                                                        color: 'header-secondary',
                                                        children: '+'.concat(j)
                                                    })
                                                  : null
                                          ]
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsx)(d.Button, {
                            look: d.Button.Looks.FILLED,
                            color: d.Button.Colors.BRAND,
                            size: d.Button.Sizes.SMALL,
                            onClick: Z,
                            submitting: B,
                            autoFocus: !0,
                            children: N.Z.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON
                        })
                    ]
                })
            ]
        })
    );
}
function x(e) {
    let { guildId: t, channelId: n, messageId: r } = e,
        {
            loading: o,
            unavailable: s,
            guild: u
        } = (0, l.cj)(
            [A.Z],
            () => ({
                guild: A.Z.getGuild(t),
                loading: A.Z.isFetchingGuild(t),
                unavailable: A.Z.hasFetchFailed(t)
            }),
            [t]
        );
    return (a.useEffect(() => {
        null == u && !o && !s && (0, S.P)(t);
    }, [u, t, o, s]),
    o)
        ? (0, i.jsx)(d.Dialog, {
              'aria-label': N.Z.Messages.LOADING,
              className: O.guildPopout,
              children: (0, i.jsx)(P, {})
          })
        : null == u || s
          ? (0, i.jsx)(U, {})
          : (0, i.jsx)(w, {
                guild: u,
                channelId: n,
                messageId: r
            });
}
