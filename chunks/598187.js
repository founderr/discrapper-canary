n.d(t, {
    Z: function () {
        return Y;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    u = n(722770),
    c = n(320285),
    d = n(688813),
    _ = n(442837),
    E = n(692547),
    f = n(481060),
    h = n(256638),
    p = n(385499),
    m = n(528011),
    I = n(533244),
    T = n(825829),
    g = n(226192),
    S = n(36459),
    A = n(434404),
    v = n(518950),
    N = n(347475),
    O = n(592125),
    R = n(271383),
    C = n(594174),
    y = n(464891),
    b = n(348238),
    L = n(83561),
    D = n(834129),
    M = n(981631),
    P = n(674563),
    U = n(689938),
    w = n(38814);
function x() {
    return (0, r.jsx)('div', { className: w.dot });
}
function G(e) {
    let { message: t, compact: n } = e,
        { notificationType: i } = (0, T.FL)(t);
    switch (i) {
        case T.nj:
        case c.p.RAID:
            return (0, r.jsx)(Z, {
                message: t,
                compact: n
            });
        case c.p.MENTION_RAID:
            return (0, r.jsx)(V, {
                message: t,
                compact: n
            });
        case c.p.ACTIVITY_ALERTS_ENABLED:
            return (0, r.jsx)(F, {
                message: t,
                compact: n
            });
        case c.p.INTERACTION_BLOCKED:
            return (0, r.jsx)(B, { compact: n });
        default:
            return (0, r.jsx)(k, { compact: n });
    }
}
function k(e) {
    let { compact: t } = e;
    return (0, r.jsx)(H, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(f.CircleWarningIcon, {
                    size: 'xs',
                    color: E.Z.colors.HEADER_SECONDARY.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: U.Z.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_TITLE
                })
            ]
        }),
        content: (0, r.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: U.Z.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_DESCRIPTION
        })
    });
}
function B(e) {
    let { compact: t } = e;
    return (0, r.jsx)(H, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(f.CircleWarningIcon, {
                    size: 'xs',
                    color: E.Z.colors.HEADER_SECONDARY.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: U.Z.Messages.GUILD_AUTOMOD_NOTFICATION_APP_INTERACTION_BLOCKED_TITLE
                })
            ]
        }),
        content: (0, r.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: U.Z.Messages.GUILD_AUTOMOD_NOTFICATION_APP_INTERACTION_BLOCKED_DESCRIPTION
        })
    });
}
function F(e) {
    var t;
    let { message: n, compact: a } = e,
        o = C.default.getUser((0, T.Sw)(n)),
        s = null === (t = O.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id,
        u = null != s && null != o ? R.ZP.getMember(s, o.id) : null,
        {
            avatarSrc: c,
            avatarDecorationSrc: d,
            eventHandlers: _
        } = (0, v.Z)({
            user: o,
            guildId: s,
            size: 12
        });
    function h(e) {
        return null == o
            ? (0, r.jsx)(r.Fragment, {})
            : (0, r.jsx)(N.Z, {
                  ...e,
                  userId: o.id,
                  user: o,
                  guildId: s,
                  channelId: n.channel_id,
                  messageId: n.id
              });
    }
    return (0, r.jsx)(H, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(f.SettingsInfoIcon, {
                    size: 'xs',
                    color: E.Z.colors.TEXT_POSITIVE.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-positive',
                    children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_TITLE
                })
            ]
        }),
        subheader: (0, r.jsxs)('div', {
            className: w.dotSeparatedRow,
            children: [
                (0, r.jsx)('div', {
                    className: w.alertsEnabledSubHeader,
                    children:
                        null != u &&
                        null != o &&
                        (0, r.jsxs)(i.Fragment, {
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_BY_PREFIX
                                }),
                                (0, r.jsx)(f.Popout, {
                                    renderPopout: h,
                                    children: (e) =>
                                        (0, r.jsxs)(f.Clickable, {
                                            className: w.alertsEnabledSubHeaderAvatarUsername,
                                            ...e,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    ..._,
                                                    children: (0, r.jsx)(f.Avatar, {
                                                        src: c,
                                                        avatarDecoration: d,
                                                        size: f.AvatarSizes.SIZE_16,
                                                        'aria-label': 'TODO'
                                                    })
                                                }),
                                                (0, r.jsxs)(f.Text, {
                                                    variant: 'text-xs/medium',
                                                    style: { color: null != u.colorString ? u.colorString : E.Z.colors.TEXT_NORMAL.css },
                                                    children: [' ', '@', o.username]
                                                })
                                            ]
                                        })
                                })
                            ]
                        })
                }),
                (0, r.jsx)(x, {}),
                (0, r.jsx)(f.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: l()(n.timestamp).fromNow()
                })
            ]
        }),
        content: (0, r.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_DESCRIPTION
        })
    });
}
function Z(e) {
    var t;
    let { message: n, compact: a } = e,
        { joinAttempts: o, raidDatetime: s, dmsSent: c, raidType: h, resolvedReason: p } = (0, T.FL)(n),
        S = (0, _.e7)([O.Z], () => O.Z.getChannel(n.channel_id), [n.channel_id]),
        A = null !== (t = null == S ? void 0 : S.guild_id) && void 0 !== t ? t : null,
        { shouldShowIncidentActions: v } = (0, m.mI)(A),
        N = (0, b.sR)(n.author.id, n.channel_id),
        R = (e) => {
            N(e);
        },
        C = i.useCallback(() => {
            let e = null == S ? void 0 : S.guild_id;
            null != e && (0, g.kW)(n.id, e);
        }, [n.id, S]),
        y = h === d.$.DM_RAID,
        L = y ? f.CircleWarningIcon : f.ChatWarningIcon;
    return (0, r.jsx)(H, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(L, {
                    size: 'xs',
                    color: E.Z.colors.TEXT_DANGER.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: y ? U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_DM_RAID_TITLE : U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_TITLE
                })
            ]
        }),
        subheader: (0, r.jsxs)('div', {
            className: w.dotSeparatedRow,
            children: [
                null != o &&
                    (0, r.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_JOINS.format({ joinCount: o })
                    }),
                null != c &&
                    (0, r.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_DMS.format({ dmsSent: c })
                    }),
                null != s &&
                    (0, r.jsxs)(i.Fragment, {
                        children: [
                            (0, r.jsx)(x, {}),
                            (0, r.jsx)(f.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-normal',
                                children: l()(s).fromNow()
                            })
                        ]
                    })
            ]
        }),
        content:
            null != s
                ? (0, r.jsx)(f.Text, {
                      variant: 'text-md/normal',
                      color: 'text-muted',
                      children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({ dateTime: s.toLocaleString(U.Z.getLocale(), I.pQ) })
                  })
                : null,
        footerButtons: v
            ? (0, r.jsxs)('div', {
                  className: w.dotSeparatedRow,
                  children: [
                      (0, r.jsx)(f.Button, {
                          onClick: R,
                          color: f.Button.Colors.LINK,
                          look: f.Button.Looks.LINK,
                          size: f.Button.Sizes.SMALL,
                          className: w.buttonStyle,
                          children: (0, r.jsxs)('div', {
                              className: w.footerAction,
                              children: [
                                  (0, r.jsx)(f.ShieldIcon, {
                                      size: 'xs',
                                      color: u.Z.BLUE_345,
                                      className: w.footerIcon
                                  }),
                                  (0, r.jsx)(f.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-link',
                                      children: U.Z.Messages.ACTIONS
                                  })
                              ]
                          })
                      }),
                      (0, r.jsx)(x, {}),
                      (0, r.jsx)(f.Button, {
                          onClick: C,
                          color: f.Button.Colors.LINK,
                          look: f.Button.Looks.LINK,
                          size: f.Button.Sizes.SMALL,
                          className: w.buttonStyle,
                          children: (0, r.jsx)('div', {
                              className: w.footerAction,
                              children: (0, r.jsx)(f.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-link',
                                  children: (0, T.ge)(p)
                              })
                          })
                      })
                  ]
              })
            : null
    });
}
function V(e) {
    var t;
    let { message: n, compact: a } = e,
        o = null === (t = O.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id,
        { raidDatetime: s, decisionId: u, suspiciousMentionActivityUntil: c } = (0, T.FL)(n);
    function d() {
        null != o &&
            null != u &&
            (0, S.UE)(o, u, () => {
                (0, h.c)(c), (0, S.T9)(o);
            });
    }
    function _() {
        null != o && A.Z.open(o, M.pNK.GUILD_AUTOMOD, void 0, M.KsC.AUTOMOD_MENTION_SPAM);
    }
    return (0, r.jsx)(H, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(f.CircleWarningIcon, {
                    size: 'xs',
                    color: E.Z.colors.TEXT_DANGER.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_TITLE
                })
            ]
        }),
        subheader: (0, r.jsx)('div', {
            className: w.dotSeparatedRow,
            children:
                null != s &&
                (0, r.jsx)(f.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: l()(s).fromNow()
                })
        }),
        content: (0, r.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: U.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_DESCRIPTION
        }),
        footerButtons: (0, r.jsxs)('div', {
            className: w.dotSeparatedRow,
            children: [
                (0, r.jsx)(f.Button, {
                    onClick: d,
                    color: f.Button.Colors.LINK,
                    look: f.Button.Looks.LINK,
                    size: f.Button.Sizes.SMALL,
                    className: w.buttonStyle,
                    children: (0, r.jsx)('div', {
                        className: w.footerAction,
                        children: (0, r.jsx)(f.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: U.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
                        })
                    })
                }),
                (0, r.jsx)(x, {}),
                (0, r.jsx)(f.Button, {
                    onClick: _,
                    color: f.Button.Colors.LINK,
                    look: f.Button.Looks.LINK,
                    size: f.Button.Sizes.SMALL,
                    className: w.buttonStyle,
                    children: (0, r.jsx)('div', {
                        className: w.footerAction,
                        children: (0, r.jsx)(f.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: U.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
                        })
                    })
                })
            ]
        })
    });
}
function H(e) {
    let { compact: t, header: n, subheader: i, content: a, footerButtons: s } = e;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: o()(w.embedCard, { [w.compact]: t }),
            children: [
                (0, r.jsxs)('div', {
                    className: w.cardContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: w.cardHeaderContianer,
                            children: [
                                (0, r.jsx)('div', {
                                    className: w.cardHeader,
                                    children: n
                                }),
                                null != i &&
                                    (0, r.jsx)('div', {
                                        className: w.subheader,
                                        children: i
                                    })
                            ]
                        }),
                        a
                    ]
                }),
                null != s &&
                    (0, r.jsx)('div', {
                        className: o()(w.centeredRowContainer, w.cardFooter, { [w.compact]: t }),
                        children: s
                    })
            ]
        })
    });
}
function Y(e) {
    let { id: t, compact: n, message: i, channel: a } = e,
        {
            avatarSrc: s,
            eventHandlers: { onMouseEnter: l, onMouseLeave: u }
        } = (0, L.m)(!0),
        { notificationType: d } = (0, T.FL)(i),
        _ = null == d || d === c.p.RAID;
    return (0, r.jsx)('div', {
        onMouseEnter: l,
        onMouseLeave: u,
        children: (0, r.jsx)(D.Z, {
            className: o()(w.mainContainer, { [w.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(L.S, { src: s }),
            iconContainerClassName: w.iconContainer,
            compact: n,
            children: (0, r.jsxs)('div', {
                className: o()(w.content, { [w.compact]: n }),
                children: [
                    (0, r.jsx)(y.nD, {
                        message: i,
                        messageClassname: w.spanCorrection,
                        className: o()(w.usernameContainer, w.spanCorrection, { [w.compact]: n }),
                        username: (0, r.jsxs)('div', {
                            className: w.spanCorrection,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: w.username,
                                    children: U.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, r.jsx)(p.Z, {
                                    type: P.Hb.SYSTEM_DM,
                                    className: w.systemTag
                                }),
                                _ &&
                                    (0, r.jsx)(f.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-primary',
                                        tag: 'span',
                                        className: w.spanCorrection,
                                        children: U.Z.Messages.GUILD_AUTOMOD_NOTFICATION_ALERT_TITLE
                                    })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', { className: w.flexLineBreak }),
                    (0, r.jsx)(G, {
                        message: i,
                        compact: n
                    })
                ]
            })
        })
    });
}
