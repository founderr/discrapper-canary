n.d(t, {
    Z: function () {
        return H;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(913527),
    o = n.n(r),
    c = n(722770),
    d = n(320285),
    u = n(688813),
    _ = n(442837),
    E = n(692547),
    I = n(481060),
    m = n(256638),
    T = n(385499),
    N = n(528011),
    h = n(533244),
    C = n(825829),
    p = n(226192),
    f = n(36459),
    g = n(434404),
    A = n(518950),
    S = n(347475),
    M = n(592125),
    O = n(271383),
    x = n(594174),
    R = n(464891),
    v = n(348238),
    L = n(83561),
    Z = n(834129),
    P = n(981631),
    b = n(674563),
    D = n(689938),
    j = n(38814);
function U() {
    return (0, i.jsx)('div', { className: j.dot });
}
function y(e) {
    let { message: t, compact: n } = e,
        { notificationType: a } = (0, C.FL)(t);
    switch (a) {
        case C.nj:
        case d.p.RAID:
            return (0, i.jsx)(F, {
                message: t,
                compact: n
            });
        case d.p.MENTION_RAID:
            return (0, i.jsx)(w, {
                message: t,
                compact: n
            });
        case d.p.ACTIVITY_ALERTS_ENABLED:
            return (0, i.jsx)(G, {
                message: t,
                compact: n
            });
        case d.p.INTERACTION_BLOCKED:
            return (0, i.jsx)(k, { compact: n });
        default:
            return (0, i.jsx)(B, { compact: n });
    }
}
function B(e) {
    let { compact: t } = e;
    return (0, i.jsx)(V, {
        compact: t,
        header: (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(I.CircleWarningIcon, {
                    size: 'xs',
                    color: E.Z.colors.HEADER_SECONDARY.css
                }),
                (0, i.jsx)(I.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: D.Z.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_TITLE
                })
            ]
        }),
        content: (0, i.jsx)(I.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: D.Z.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_DESCRIPTION
        })
    });
}
function k(e) {
    let { compact: t } = e;
    return (0, i.jsx)(V, {
        compact: t,
        header: (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(I.CircleWarningIcon, {
                    size: 'xs',
                    color: E.Z.colors.HEADER_SECONDARY.css
                }),
                (0, i.jsx)(I.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: D.Z.Messages.GUILD_AUTOMOD_NOTFICATION_APP_INTERACTION_BLOCKED_TITLE
                })
            ]
        }),
        content: (0, i.jsx)(I.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: D.Z.Messages.GUILD_AUTOMOD_NOTFICATION_APP_INTERACTION_BLOCKED_DESCRIPTION
        })
    });
}
function G(e) {
    var t;
    let { message: n, compact: s } = e,
        l = x.default.getUser((0, C.Sw)(n)),
        r = null === (t = M.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id,
        c = null != r && null != l ? O.ZP.getMember(r, l.id) : null,
        {
            avatarSrc: d,
            avatarDecorationSrc: u,
            eventHandlers: _
        } = (0, A.Z)({
            user: l,
            guildId: r,
            size: 12
        });
    return (0, i.jsx)(V, {
        compact: s,
        header: (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(I.SettingsInfoIcon, {
                    size: 'xs',
                    color: E.Z.colors.TEXT_POSITIVE.css
                }),
                (0, i.jsx)(I.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-positive',
                    children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_TITLE
                })
            ]
        }),
        subheader: (0, i.jsxs)('div', {
            className: j.dotSeparatedRow,
            children: [
                (0, i.jsx)('div', {
                    className: j.alertsEnabledSubHeader,
                    children:
                        null != c &&
                        null != l &&
                        (0, i.jsxs)(a.Fragment, {
                            children: [
                                (0, i.jsx)(I.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_BY_PREFIX
                                }),
                                (0, i.jsx)(I.Popout, {
                                    renderPopout: function (e) {
                                        return null == l
                                            ? (0, i.jsx)(i.Fragment, {})
                                            : (0, i.jsx)(S.Z, {
                                                  ...e,
                                                  userId: l.id,
                                                  user: l,
                                                  guildId: r,
                                                  channelId: n.channel_id,
                                                  messageId: n.id
                                              });
                                    },
                                    children: (e) =>
                                        (0, i.jsxs)(I.Clickable, {
                                            className: j.alertsEnabledSubHeaderAvatarUsername,
                                            ...e,
                                            children: [
                                                (0, i.jsx)('div', {
                                                    ..._,
                                                    children: (0, i.jsx)(I.Avatar, {
                                                        src: d,
                                                        avatarDecoration: u,
                                                        size: I.AvatarSizes.SIZE_16,
                                                        'aria-label': 'TODO'
                                                    })
                                                }),
                                                (0, i.jsxs)(I.Text, {
                                                    variant: 'text-xs/medium',
                                                    style: { color: null != c.colorString ? c.colorString : E.Z.colors.TEXT_NORMAL.css },
                                                    children: [' ', '@', l.username]
                                                })
                                            ]
                                        })
                                })
                            ]
                        })
                }),
                (0, i.jsx)(U, {}),
                (0, i.jsx)(I.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: o()(n.timestamp).fromNow()
                })
            ]
        }),
        content: (0, i.jsx)(I.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_DESCRIPTION
        })
    });
}
function F(e) {
    var t;
    let { message: n, compact: s } = e,
        { joinAttempts: l, raidDatetime: r, dmsSent: d, raidType: m, resolvedReason: T } = (0, C.FL)(n),
        f = (0, _.e7)([M.Z], () => M.Z.getChannel(n.channel_id), [n.channel_id]),
        g = null !== (t = null == f ? void 0 : f.guild_id) && void 0 !== t ? t : null,
        { shouldShowIncidentActions: A } = (0, N.mI)(g),
        S = (0, v.sR)(n.author.id, n.channel_id),
        O = a.useCallback(() => {
            let e = null == f ? void 0 : f.guild_id;
            null != e && (0, p.kW)(n.id, e);
        }, [n.id, f]),
        x = m === u.$.DM_RAID,
        R = x ? I.CircleWarningIcon : I.ChatWarningIcon;
    return (0, i.jsx)(V, {
        compact: s,
        header: (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(R, {
                    size: 'xs',
                    color: E.Z.colors.TEXT_DANGER.css
                }),
                (0, i.jsx)(I.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: x ? D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_DM_RAID_TITLE : D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_TITLE
                })
            ]
        }),
        subheader: (0, i.jsxs)('div', {
            className: j.dotSeparatedRow,
            children: [
                null != l &&
                    (0, i.jsx)(I.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_JOINS.format({ joinCount: l })
                    }),
                null != d &&
                    (0, i.jsx)(I.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_DMS.format({ dmsSent: d })
                    }),
                null != r &&
                    (0, i.jsxs)(a.Fragment, {
                        children: [
                            (0, i.jsx)(U, {}),
                            (0, i.jsx)(I.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-normal',
                                children: o()(r).fromNow()
                            })
                        ]
                    })
            ]
        }),
        content:
            null != r
                ? (0, i.jsx)(I.Text, {
                      variant: 'text-md/normal',
                      color: 'text-muted',
                      children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({ dateTime: r.toLocaleString(D.Z.getLocale(), h.pQ) })
                  })
                : null,
        footerButtons: A
            ? (0, i.jsxs)('div', {
                  className: j.dotSeparatedRow,
                  children: [
                      (0, i.jsx)(I.Button, {
                          onClick: (e) => {
                              S(e);
                          },
                          color: I.Button.Colors.LINK,
                          look: I.Button.Looks.LINK,
                          size: I.Button.Sizes.SMALL,
                          className: j.buttonStyle,
                          children: (0, i.jsxs)('div', {
                              className: j.footerAction,
                              children: [
                                  (0, i.jsx)(I.ShieldIcon, {
                                      size: 'xs',
                                      color: c.Z.BLUE_345,
                                      className: j.footerIcon
                                  }),
                                  (0, i.jsx)(I.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-link',
                                      children: D.Z.Messages.ACTIONS
                                  })
                              ]
                          })
                      }),
                      (0, i.jsx)(U, {}),
                      (0, i.jsx)(I.Button, {
                          onClick: O,
                          color: I.Button.Colors.LINK,
                          look: I.Button.Looks.LINK,
                          size: I.Button.Sizes.SMALL,
                          className: j.buttonStyle,
                          children: (0, i.jsx)('div', {
                              className: j.footerAction,
                              children: (0, i.jsx)(I.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-link',
                                  children: (0, C.ge)(T)
                              })
                          })
                      })
                  ]
              })
            : null
    });
}
function w(e) {
    var t;
    let { message: n, compact: s } = e,
        l = null === (t = M.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id,
        { raidDatetime: r, decisionId: c, suspiciousMentionActivityUntil: d } = (0, C.FL)(n);
    return (0, i.jsx)(V, {
        compact: s,
        header: (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(I.CircleWarningIcon, {
                    size: 'xs',
                    color: E.Z.colors.TEXT_DANGER.css
                }),
                (0, i.jsx)(I.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_TITLE
                })
            ]
        }),
        subheader: (0, i.jsx)('div', {
            className: j.dotSeparatedRow,
            children:
                null != r &&
                (0, i.jsx)(I.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: o()(r).fromNow()
                })
        }),
        content: (0, i.jsx)(I.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_DESCRIPTION
        }),
        footerButtons: (0, i.jsxs)('div', {
            className: j.dotSeparatedRow,
            children: [
                (0, i.jsx)(I.Button, {
                    onClick: function () {
                        null != l &&
                            null != c &&
                            (0, f.UE)(l, c, () => {
                                (0, m.c)(d), (0, f.T9)(l);
                            });
                    },
                    color: I.Button.Colors.LINK,
                    look: I.Button.Looks.LINK,
                    size: I.Button.Sizes.SMALL,
                    className: j.buttonStyle,
                    children: (0, i.jsx)('div', {
                        className: j.footerAction,
                        children: (0, i.jsx)(I.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: D.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
                        })
                    })
                }),
                (0, i.jsx)(U, {}),
                (0, i.jsx)(I.Button, {
                    onClick: function () {
                        null != l && g.Z.open(l, P.pNK.GUILD_AUTOMOD, void 0, P.KsC.AUTOMOD_MENTION_SPAM);
                    },
                    color: I.Button.Colors.LINK,
                    look: I.Button.Looks.LINK,
                    size: I.Button.Sizes.SMALL,
                    className: j.buttonStyle,
                    children: (0, i.jsx)('div', {
                        className: j.footerAction,
                        children: (0, i.jsx)(I.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: D.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
                        })
                    })
                })
            ]
        })
    });
}
function V(e) {
    let { compact: t, header: n, subheader: a, content: s, footerButtons: r } = e;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: l()(j.embedCard, { [j.compact]: t }),
            children: [
                (0, i.jsxs)('div', {
                    className: j.cardContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: j.cardHeaderContianer,
                            children: [
                                (0, i.jsx)('div', {
                                    className: j.cardHeader,
                                    children: n
                                }),
                                null != a &&
                                    (0, i.jsx)('div', {
                                        className: j.subheader,
                                        children: a
                                    })
                            ]
                        }),
                        s
                    ]
                }),
                null != r &&
                    (0, i.jsx)('div', {
                        className: l()(j.centeredRowContainer, j.cardFooter, { [j.compact]: t }),
                        children: r
                    })
            ]
        })
    });
}
function H(e) {
    let { id: t, compact: n, message: a, channel: s } = e,
        {
            avatarSrc: r,
            eventHandlers: { onMouseEnter: o, onMouseLeave: c }
        } = (0, L.m)(!0),
        { notificationType: u } = (0, C.FL)(a),
        _ = null == u || u === d.p.RAID;
    return (0, i.jsx)('div', {
        onMouseEnter: o,
        onMouseLeave: c,
        children: (0, i.jsx)(Z.Z, {
            className: l()(j.mainContainer, { [j.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(L.S, { src: r }),
            iconContainerClassName: j.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: l()(j.content, { [j.compact]: n }),
                children: [
                    (0, i.jsx)(R.nD, {
                        message: a,
                        messageClassname: j.spanCorrection,
                        className: l()(j.usernameContainer, j.spanCorrection, { [j.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: j.spanCorrection,
                            children: [
                                (0, i.jsx)(I.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: j.username,
                                    children: D.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(T.Z, {
                                    type: b.Hb.SYSTEM_DM,
                                    className: j.systemTag
                                }),
                                _ &&
                                    (0, i.jsx)(I.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-primary',
                                        tag: 'span',
                                        className: j.spanCorrection,
                                        children: D.Z.Messages.GUILD_AUTOMOD_NOTFICATION_ALERT_TITLE
                                    })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', { className: j.flexLineBreak }),
                    (0, i.jsx)(y, {
                        message: a,
                        compact: n
                    })
                ]
            })
        })
    });
}
