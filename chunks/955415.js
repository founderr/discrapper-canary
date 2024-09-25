var r = n(653041);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(481060),
    c = n(43267),
    d = n(933557),
    _ = n(471445),
    E = n(600164),
    f = n(925329),
    h = n(565138),
    p = n(134432),
    m = n(695346),
    I = n(768581),
    T = n(153066),
    g = n(689938),
    S = n(850393);
let A = (e) => {
        let { text: t, extra: n } = e;
        return (0, a.jsxs)(u.FormTitle, {
            className: S.header,
            children: [t, n]
        });
    },
    v = (e) => {
        let { resolving: t, children: n } = e;
        return (0, a.jsx)('div', {
            className: S.content,
            children: t
                ? (0, a.jsxs)('div', {
                      className: S.resolvingWrapper,
                      children: [
                          (0, a.jsx)('div', {
                              className: S.resolving,
                              children: (0, a.jsx)('div', { className: S.resolvingBackground })
                          }),
                          (0, a.jsx)('div', {
                              className: S.resolvingFakeButton,
                              children: (0, a.jsx)('div', { className: S.resolvingBackground })
                          })
                      ]
                  })
                : n
        });
    },
    N = (e) => {
        var t;
        let { application: n, guild: r, channel: i, onClick: o, expired: s = !1, user: _, className: E } = e,
            p = null !== (t = (0, d.ZP)(i)) && void 0 !== t ? t : '',
            I = m.QK.useSetting();
        if (s) return (0, a.jsx)('div', { className: S.guildIconExpired });
        let g = null == r || null != r.icon,
            A = l()((0, T.l)(S, 'guildIcon', g ? 'Image' : '', null != o ? 'Joined' : ''), E);
        if (null != n)
            return (0, a.jsx)(f.Z, {
                game: n,
                onClick: o,
                size: S.applicationIcon,
                className: A
            });
        if (null != r)
            return (0, a.jsx)(h.Z, {
                onClick: o,
                active: !0,
                guild: r,
                className: A,
                animate: I
            });
        if (null != i)
            return (0, a.jsx)(u.Avatar, {
                onClick: o,
                src: (0, c.x)(i),
                size: u.AvatarSizes.SIZE_56,
                className: A,
                'aria-label': p
            });
        else if (null != _)
            return (0, a.jsx)(u.Avatar, {
                onClick: o,
                src: _.getAvatarURL(null, 56),
                size: u.AvatarSizes.SIZE_56,
                className: A,
                'aria-label': p
            });
        return null;
    },
    O = (e) => {
        let { title: t, onClick: n, expired: r, children: i } = e,
            o = (0, a.jsx)(u.Heading, {
                variant: 'heading-md/semibold',
                className: (0, T.l)(S, 'inviteDestination', r ? 'Expired' : null != n ? 'Joined' : ''),
                children: t
            });
        return (0, a.jsxs)(E.Z, {
            className: S.guildInfo,
            direction: E.Z.Direction.VERTICAL,
            justify: E.Z.Justify.CENTER,
            children: [
                null == n
                    ? o
                    : (0, a.jsx)(u.Clickable, {
                          onClick: n,
                          children: o
                      }),
                (0, a.jsx)(u.Text, {
                    tag: 'strong',
                    className: S.guildDetail,
                    variant: 'text-sm/normal',
                    children: i
                })
            ]
        });
    },
    R = (e) => {
        let { membersOnline: t, members: n } = e,
            r = [];
        return (
            null != t &&
                t > 0 &&
                r.push(
                    (0, a.jsxs)(
                        'div',
                        {
                            className: S.statusWrapper,
                            children: [
                                (0, a.jsx)('i', { className: S.statusOnline }),
                                (0, a.jsx)('span', {
                                    className: S.count,
                                    children: g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: t })
                                })
                            ]
                        },
                        'onlineCount'
                    )
                ),
            null != n &&
                r.push(
                    (0, a.jsxs)(
                        'div',
                        {
                            className: S.statusWrapper,
                            children: [
                                (0, a.jsx)('i', { className: S.statusOffline }),
                                (0, a.jsx)('span', {
                                    className: S.count,
                                    children: g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: n })
                                })
                            ]
                        },
                        'memberCount'
                    )
                ),
            (0, a.jsx)('div', {
                className: S.statusCounts,
                children: r
            })
        );
    },
    C = (e) => {
        let { channel: t, guild: n } = e,
            r = (0, _.KS)(t, n);
        return null == t || null == r
            ? null
            : (0, a.jsxs)('div', {
                  className: S.channel,
                  children: [
                      (0, a.jsx)(r, {
                          className: S.channelIcon,
                          color: 'currentColor',
                          size: 'custom',
                          width: 20,
                          height: 20
                      }),
                      (0, a.jsx)('span', {
                          className: S.channelName,
                          children: t.name
                      })
                  ]
              });
    },
    y = (e) => {
        let { children: t, onClick: n, className: r, isDisabled: i, ...o } = e;
        return (0, a.jsx)(u.Button, {
            ...o,
            disabled: i,
            onClick: n,
            size: S.buttonSize,
            className: l()(S.button, r),
            children: t
        });
    };
(y.Colors = u.Button.Colors),
    (y.Looks = u.Button.Looks),
    (y.defaultProps = {
        className: null,
        isDisabled: !1
    });
let b = (e) => {
        let { children: t, className: n, containerRef: r } = e;
        return (0, a.jsx)('div', {
            ref: r,
            className: l()(S.wrapper, n),
            children: t
        });
    },
    L = (e) => {
        let { guild: t } = e,
            [n, r] = o.useState(!1),
            i = I.ZP.getGuildSplashURL({
                id: t.id,
                splash: t.splash,
                size: 400 * (0, p.x_)()
            });
        return null == i
            ? null
            : (0, a.jsx)('div', {
                  className: S.inviteSplash,
                  children: (0, a.jsx)('img', {
                      src: i,
                      alt: '',
                      className: l()(S.inviteSplashImage, { [S.inviteSplashImageLoaded]: n }),
                      onLoad: () => r(!0)
                  })
              });
    },
    D = (e) => {
        let { guild: t } = e;
        return (0, a.jsx)('div', {
            className: S.guildNameWrapper,
            children: (0, a.jsx)('span', {
                className: S.guildName,
                children: t.name
            })
        });
    },
    M = (e) => {
        let { guildTemplate: t } = e;
        return (0, a.jsx)('div', {
            className: S.guildNameWrapper,
            children: (0, a.jsx)('span', {
                className: S.guildName,
                children: t.serializedSourceGuild.name
            })
        });
    };
(b.Header = A), (b.Body = v), (b.Icon = N), (b.Info = O), (b.Data = R), (b.Channel = C), (b.Button = y), (b.GuildSplash = L), (b.GuildName = D), (b.GuildTemplateName = M), (A.displayName = 'InviteButton.Header'), (v.displayName = 'InviteButton.Body'), (N.displayName = 'InviteButton.Icon'), (O.displayName = 'InviteButton.Info'), (R.displayName = 'InviteButton.Data'), (C.displayName = 'InviteButton.Channel'), (y.displayName = 'InviteButton.Button'), (L.displayName = 'InviteButton.GuildSplash'), (D.displayName = 'InviteButton.GuildName'), (M.displayName = 'InviteButton.GuildTemplateName'), (t.Z = b);
