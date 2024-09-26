n.d(t, {
    Z: function () {
        return $;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    u = n(91192),
    c = n(722770),
    d = n(442837),
    _ = n(481060),
    E = n(287734),
    f = n(607070),
    h = n(385499),
    p = n(313889),
    m = n(825829),
    I = n(226192),
    T = n(36459),
    g = n(336197),
    S = n(359110),
    A = n(347475),
    v = n(496675),
    N = n(594174),
    O = n(5192),
    R = n(51144),
    C = n(937889),
    y = n(739566),
    L = n(779125),
    b = n(890410),
    D = n(464891),
    M = n(507418),
    P = n(348238),
    U = n(38267),
    w = n(83561),
    x = n(834129),
    G = n(959517),
    k = n(981631),
    B = n(674563),
    F = n(590433),
    Z = n(689938),
    V = n(146655);
function H(e, t) {
    let { popouts: n, selected: r, setPopout: a } = (0, U.Z)(e.id, G.d$),
        { usernameProfile: o, avatarProfile: s } = n,
        l = (0, P.wq)(e.author.id, t.id),
        u = (0, P.RN)(e.author.id, t.id, e.id),
        c = (0, P.XO)(e, t, o, a),
        d = (0, P.R9)(s, a);
    return {
        selected: r,
        onContextMenu: l,
        onContextMenuModerateUser: u,
        onClickUsername: c,
        onClickAvatar: d,
        onPopoutRequestClose: i.useCallback(
            () =>
                a({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }),
            [a]
        ),
        renderPopout: M.Z,
        showAvatarPopout: s,
        showUsernamePopout: o
    };
}
function Y(e, t) {
    return i.useMemo(() => {
        if (null != t)
            return (n) =>
                (0, r.jsx)(A.Z, {
                    ...n,
                    userId: t.id,
                    user: t,
                    channelId: e.id,
                    guildId: e.guild_id
                });
    }, [e, t]);
}
function j(e) {
    let { children: t, className: n, compact: i } = e;
    return (0, r.jsx)('div', {
        className: o()(V.footerContainer, n, { [V.compact]: i }),
        children: t
    });
}
function W(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: o()(V.annotationRow, n),
        children: t
    });
}
function K(e, t) {
    switch (e) {
        case p.d.DELETE_USER_MESSAGE:
            return (0, r.jsx)(_.TrashIcon, {
                size: 'xs',
                color: 'currentColor',
                className: V.alertActionIcon,
                ...t
            });
        case p.d.SET_COMPLETED:
            return (0, r.jsx)(_.CheckmarkLargeIcon, {
                size: 'xs',
                color: 'currentColor',
                className: o()(V.alertActionIcon, V.alertActionSetCompletedIcon),
                ...t
            });
        case p.d.SUBMIT_FEEDBACK:
            return (0, r.jsx)(_.FlagIcon, {
                size: 'xs',
                color: 'currentColor',
                className: o()(V.alertActionIcon),
                ...t
            });
        default:
            return null;
    }
}
function z(e, t, n) {
    var r;
    let i = null !== (r = O.ZP.getNickname(n, null, t)) && void 0 !== r ? r : R.ZP.getUserTag(t),
        a = l()(e.ts),
        o = ''.concat(i, ' ').concat(a.fromNow());
    try {
        switch (parseInt(e.actionType)) {
            case p.d.DELETE_USER_MESSAGE:
                return Z.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
                    userName: i,
                    timestamp: a.fromNow()
                });
            case p.d.SET_COMPLETED:
                return Z.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
                    userName: i,
                    timestamp: a.fromNow()
                });
            case p.d.SUBMIT_FEEDBACK:
                return Z.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
                    userName: i,
                    timestamp: a.fromNow()
                });
            default:
                return o;
        }
    } catch (e) {
        return o;
    }
}
function q(e) {
    let { alertAction: t, guildId: n } = e,
        i = (0, d.e7)([N.default], () => N.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == i) return K(e, {});
        let a = z(t, i, n);
        return (0, r.jsx)(_.Tooltip, {
            text: a,
            children: (t) => K(e, t)
        });
    } catch (e) {
        return null;
    }
}
function Q(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        i = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, r.jsx)('div', {
        className: V.alertActionsIconContainer,
        children: i.map((e) =>
            (0, r.jsx)(
                q,
                {
                    alertAction: e,
                    guildId: n
                },
                e.actionType
            )
        )
    });
}
let X = i.memo(function (e) {
    let t,
        { message: n, channel: i, embedChannel: a, compact: o, interactionUserId: s } = e,
        l = H(n, i),
        u = Y(i, n.author),
        c = (0, y.ZP)(n),
        d = (0, D.CF)(
            {
                message: n,
                channel: i,
                author: c,
                guildId: null == i ? void 0 : i.guild_id,
                compact: o,
                ...l
            },
            u
        ),
        E = () => d,
        f = N.default.getUser(s),
        h = H(n, i),
        p = Y(i, f);
    if (null != f) {
        let e = (0, y.ij)(f, i),
            r = (0, D.CF)(
                {
                    message: n,
                    channel: i,
                    author: e,
                    guildId: null == i ? void 0 : i.guild_id,
                    compact: o,
                    ...h
                },
                p
            );
        t = () => r;
    }
    let I = () =>
        (0, r.jsx)('div', {
            className: V.channelNameContainer,
            children: (0, r.jsx)(L.Z, {
                channel: a,
                className: V.channelName,
                openChatWithoutConnecting: !0
            })
        });
    return (0, r.jsx)(_.Text, {
        variant: 'text-md/normal',
        color: 'header-primary',
        tag: 'span',
        className: V.spanCorrection,
        children: (0, m.Mq)(n, a, I, E, t)
    });
});
function $(e) {
    var t;
    let { id: n, compact: a, message: s, channel: l } = e,
        {
            avatarSrc: A,
            eventHandlers: { onMouseEnter: N, onMouseLeave: O }
        } = (0, w.m)(!0),
        { onFocus: R, ...y } = (0, u.JA)(null != n ? n : ''),
        { isFocused: L, handleFocus: M, handleBlur: U } = (0, P.bb)(R),
        G = (0, d.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        Y = (0, d.e7)([v.Z], () => v.Z.can(k.Plq.MANAGE_MESSAGES, l), [l]),
        { ruleName: K, embedChannel: z, decisionId: q, keywordMatchedContent: $, keyword: J, content: ee, flaggedMessageId: et, timeoutDuration: en, decisionReason: er, alertActionsExecution: ei, quarantineType: ea, interactionUserId: eo } = (0, m.ZP)(s),
        es = i.useMemo(() => (0, C.k$)(ee, $, l.id), [ee, $, l]),
        { selected: el, ...eu } = H(s, l),
        ec = el || (G && L),
        ed = (e) => {
            var t;
            null === (t = eu.onContextMenuModerateUser) || void 0 === t || t.call(eu, e);
        },
        e_ = i.useCallback(() => {
            (0, I._s)(s.id, ee, q, l);
        }, [s.id, ee, q, l]),
        eE = i.useCallback(
            (e) => {
                if (null != et && null != z) e.stopPropagation(), e.preventDefault(), (0, g.Z)(k.Z5c.CHANNEL(null == z ? void 0 : z.guild_id, null == z ? void 0 : z.id, et));
            },
            [z, et]
        ),
        ef = i.useCallback(
            (e) => {
                null != z &&
                    (E.default.selectChannel({
                        guildId: z.guild_id,
                        channelId: e,
                        messageId: s.id
                    }),
                    (0, S.Kh)(e));
            },
            [s, z]
        ),
        eh = i.useCallback(() => {
            (0, T.Xx)(s.id, l, p.d.DELETE_USER_MESSAGE);
        }, [l, s.id]),
        ep = (0, F.L9)(Number(en)),
        em = null != er,
        eI = Y && null != et && (null == ei || !ei.actions.hasOwnProperty(p.d.DELETE_USER_MESSAGE)),
        eT = s.embeds.length > 0 ? (null === (t = s.embeds[0].fields.find((e) => 'channel_id' === e.rawName)) || void 0 === t ? void 0 : t.rawValue) : null,
        eg = null != eT;
    return (0, r.jsx)('div', {
        onMouseEnter: N,
        onMouseLeave: O,
        children: (0, r.jsx)(x.Z, {
            className: o()(V.mainContainer, { [V.compact]: a }),
            iconNode: a ? null : (0, r.jsx)(w.S, { src: A }),
            iconContainerClassName: V.iconContainer,
            compact: a,
            children: (0, r.jsxs)('div', {
                className: o()(V.content, { [V.compact]: a }),
                children: [
                    (0, r.jsx)(D.nD, {
                        message: s,
                        messageClassname: V.spanCorrection,
                        className: o()(V.usernameContainer, V.spanCorrection, { [V.compact]: a }),
                        username: (0, r.jsxs)('div', {
                            className: V.spanCorrection,
                            children: [
                                (0, r.jsx)(_.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: V.username,
                                    children: Z.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, r.jsx)(h.Z, {
                                    type: B.Hb.SYSTEM_DM,
                                    className: V.systemTag
                                }),
                                (0, r.jsx)(X, {
                                    message: s,
                                    channel: l,
                                    embedChannel: z,
                                    compact: a,
                                    interactionUserId: eo
                                })
                            ]
                        }),
                        compact: a,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: o()(V.messageContent, { [V.compact]: a }),
                        children: (0, r.jsx)(b.Z, {
                            ...y,
                            message: s,
                            channel: z,
                            content: es,
                            compact: a,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: o()(V.embedCard, {
                                [V.compact]: a,
                                [V.selected]: ec,
                                [V.isClickable]: null != et && null != z
                            }),
                            childrenAccessories: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: V.centeredRowContainer,
                                        children: [
                                            null != J &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            children: Z.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({ keyword: J })
                                                        }),
                                                        (0, r.jsx)('div', { className: o()(V.dot, V.dotMargin) })
                                                    ]
                                                }),
                                            null != K &&
                                                (0, r.jsx)(_.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    tag: 'span',
                                                    children: Z.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({ ruleName: K })
                                                }),
                                            null != ep &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)('div', { className: o()(V.dot, V.dotMargin) }),
                                                        (0, r.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: V.__invalid_footerText,
                                                            children: Z.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({ duration: ep })
                                                        })
                                                    ]
                                                }),
                                            null != ea &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)('div', { className: o()(V.dot, V.dotMargin) }),
                                                        (0, r.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: V.titleCase,
                                                            children: Z.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({ reason: (0, m.hU)(ea) })
                                                        })
                                                    ]
                                                })
                                        ]
                                    }),
                                    em
                                        ? (0, r.jsx)(W, {
                                              children: (0, r.jsx)(_.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-normal',
                                                  tag: 'span',
                                                  children: er
                                              })
                                          })
                                        : null
                                ]
                            }),
                            popoutProps: eu,
                            zalgo: !0,
                            onFocus: M,
                            onBlur: U,
                            onClick: eE
                        })
                    }),
                    (0, r.jsx)(j, {
                        compact: a,
                        children: (0, r.jsxs)('div', {
                            className: o()(V.centeredRowContainer, V.buttonContainer, { [V.compact]: a }),
                            children: [
                                (0, r.jsx)(_.Button, {
                                    onClick: ed,
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: V.buttonStyle,
                                    children: (0, r.jsxs)('div', {
                                        className: V.footerAction,
                                        children: [
                                            (0, r.jsx)(_.ShieldIcon, {
                                                size: 'xs',
                                                color: c.Z.BLUE_345,
                                                className: V.footerIcon
                                            }),
                                            (0, r.jsx)(_.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-link',
                                                children: Z.Z.Messages.ACTIONS
                                            })
                                        ]
                                    })
                                }),
                                eg
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: V.dot }),
                                              (0, r.jsx)(_.Button, {
                                                  onClick: () => ef(eT),
                                                  color: _.Button.Colors.LINK,
                                                  look: _.Button.Looks.LINK,
                                                  size: _.Button.Sizes.SMALL,
                                                  className: V.buttonStyle,
                                                  children: (0, r.jsx)('div', {
                                                      className: V.footerAction,
                                                      children: (0, r.jsx)(_.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: Z.Z.Messages.GUILD_AUTOMOD_JUMP_TO_SURROUNDING
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, r.jsx)('div', { className: V.dot }),
                                (0, r.jsx)(_.Button, {
                                    onClick: e_,
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: V.buttonStyle,
                                    children: (0, r.jsx)('div', {
                                        className: V.footerAction,
                                        children: (0, r.jsx)(_.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: Z.Z.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                                        })
                                    })
                                }),
                                eI
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: V.dot }),
                                              (0, r.jsx)(_.Button, {
                                                  onClick: eh,
                                                  color: _.Button.Colors.LINK,
                                                  look: _.Button.Looks.LINK,
                                                  size: _.Button.Sizes.SMALL,
                                                  className: V.buttonStyle,
                                                  children: (0, r.jsx)('div', {
                                                      className: V.footerAction,
                                                      children: (0, r.jsx)(_.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: Z.Z.Messages.GUILD_AUTOMOD_ALERT_DELETE_MEMBERS_MESSAGE
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                null != ei
                                    ? (0, r.jsx)(Q, {
                                          alertActionsExecution: ei,
                                          guildId: l.guild_id
                                      })
                                    : null
                            ]
                        })
                    })
                ]
            })
        })
    });
}
