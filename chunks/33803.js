n.d(t, {
    Z: function () {
        return q;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(913527),
    o = n.n(l),
    c = n(91192),
    u = n(722770),
    d = n(442837),
    _ = n(481060),
    E = n(287734),
    I = n(607070),
    m = n(385499),
    T = n(313889),
    f = n(825829),
    h = n(226192),
    N = n(36459),
    p = n(336197),
    C = n(359110),
    g = n(347475),
    S = n(496675),
    A = n(594174),
    x = n(5192),
    R = n(51144),
    v = n(937889),
    O = n(739566),
    M = n(779125),
    L = n(890410),
    Z = n(464891),
    b = n(507418),
    P = n(348238),
    D = n(38267),
    j = n(83561),
    U = n(834129),
    y = n(959517),
    B = n(981631),
    k = n(674563),
    G = n(590433),
    F = n(689938),
    w = n(146655);
function V(e, t) {
    let { popouts: n, selected: i, setPopout: s } = (0, D.Z)(e.id, y.d$),
        { usernameProfile: r, avatarProfile: l } = n,
        o = (0, P.wq)(e.author.id, t.id),
        c = (0, P.RN)(e.author.id, t.id, e.id),
        u = (0, P.XO)(e, t, r, s),
        d = (0, P.R9)(l, s);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: d,
        onPopoutRequestClose: a.useCallback(
            () =>
                s({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }),
            [s]
        ),
        renderPopout: b.Z,
        showAvatarPopout: l,
        showUsernamePopout: r
    };
}
function H(e, t) {
    return a.useMemo(() => {
        if (null != t)
            return (n) =>
                (0, i.jsx)(g.Z, {
                    ...n,
                    userId: t.id,
                    user: t,
                    channelId: e.id,
                    guildId: e.guild_id
                });
    }, [e, t]);
}
function Y(e) {
    let { children: t, className: n, compact: a } = e;
    return (0, i.jsx)('div', {
        className: r()(w.footerContainer, n, { [w.compact]: a }),
        children: t
    });
}
function W(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: r()(w.annotationRow, n),
        children: t
    });
}
function z(e, t) {
    switch (e) {
        case T.d.DELETE_USER_MESSAGE:
            return (0, i.jsx)(_.TrashIcon, {
                size: 'xs',
                color: 'currentColor',
                className: w.alertActionIcon,
                ...t
            });
        case T.d.SET_COMPLETED:
            return (0, i.jsx)(_.CheckmarkLargeIcon, {
                size: 'xs',
                color: 'currentColor',
                className: r()(w.alertActionIcon, w.alertActionSetCompletedIcon),
                ...t
            });
        case T.d.SUBMIT_FEEDBACK:
            return (0, i.jsx)(_.FlagIcon, {
                size: 'xs',
                color: 'currentColor',
                className: r()(w.alertActionIcon),
                ...t
            });
        default:
            return null;
    }
}
function K(e) {
    let { alertAction: t, guildId: n } = e,
        a = (0, d.e7)([A.default], () => A.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == a) return z(e, {});
        let s = (function (e, t, n) {
            var i;
            let a = null !== (i = x.ZP.getNickname(n, null, t)) && void 0 !== i ? i : R.ZP.getUserTag(t),
                s = o()(e.ts),
                r = ''.concat(a, ' ').concat(s.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                    case T.d.DELETE_USER_MESSAGE:
                        return F.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
                            userName: a,
                            timestamp: s.fromNow()
                        });
                    case T.d.SET_COMPLETED:
                        return F.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
                            userName: a,
                            timestamp: s.fromNow()
                        });
                    case T.d.SUBMIT_FEEDBACK:
                        return F.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
                            userName: a,
                            timestamp: s.fromNow()
                        });
                    default:
                        return r;
                }
            } catch (e) {
                return r;
            }
        })(t, a, n);
        return (0, i.jsx)(_.Tooltip, {
            text: s,
            children: (t) => z(e, t)
        });
    } catch (e) {
        return null;
    }
}
function X(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        a = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, i.jsx)('div', {
        className: w.alertActionsIconContainer,
        children: a.map((e) =>
            (0, i.jsx)(
                K,
                {
                    alertAction: e,
                    guildId: n
                },
                e.actionType
            )
        )
    });
}
let Q = a.memo(function (e) {
    let t,
        { message: n, channel: a, embedChannel: s, compact: r, interactionUserId: l } = e,
        o = V(n, a),
        c = H(a, n.author),
        u = (0, O.ZP)(n),
        d = (0, Z.CF)(
            {
                message: n,
                channel: a,
                author: u,
                guildId: null == a ? void 0 : a.guild_id,
                compact: r,
                ...o
            },
            c
        ),
        E = A.default.getUser(l),
        I = V(n, a),
        m = H(a, E);
    if (null != E) {
        let e = (0, O.ij)(E, a),
            i = (0, Z.CF)(
                {
                    message: n,
                    channel: a,
                    author: e,
                    guildId: null == a ? void 0 : a.guild_id,
                    compact: r,
                    ...I
                },
                m
            );
        t = () => i;
    }
    return (0, i.jsx)(_.Text, {
        variant: 'text-md/normal',
        color: 'header-primary',
        tag: 'span',
        className: w.spanCorrection,
        children: (0, f.Mq)(
            n,
            s,
            () =>
                (0, i.jsx)('div', {
                    className: w.channelNameContainer,
                    children: (0, i.jsx)(M.Z, {
                        channel: s,
                        className: w.channelName,
                        openChatWithoutConnecting: !0
                    })
                }),
            () => d,
            t
        )
    });
});
function q(e) {
    var t;
    let { id: n, compact: s, message: l, channel: o } = e,
        {
            avatarSrc: g,
            eventHandlers: { onMouseEnter: A, onMouseLeave: x }
        } = (0, j.m)(!0),
        { onFocus: R, ...O } = (0, c.JA)(null != n ? n : ''),
        { isFocused: M, handleFocus: b, handleBlur: D } = (0, P.bb)(R),
        y = (0, d.e7)([I.Z], () => I.Z.keyboardModeEnabled),
        H = (0, d.e7)([S.Z], () => S.Z.can(B.Plq.MANAGE_MESSAGES, o), [o]),
        { ruleName: z, embedChannel: K, decisionId: q, keywordMatchedContent: J, keyword: $, content: ee, flaggedMessageId: et, timeoutDuration: en, decisionReason: ei, alertActionsExecution: ea, quarantineType: es, interactionUserId: er } = (0, f.ZP)(l),
        el = a.useMemo(() => (0, v.k$)(ee, J, o.id), [ee, J, o]),
        { selected: eo, ...ec } = V(l, o),
        eu = a.useCallback(() => {
            (0, h._s)(l.id, ee, q, o);
        }, [l.id, ee, q, o]),
        ed = a.useCallback(
            (e) => {
                if (null != et && null != K) e.stopPropagation(), e.preventDefault(), (0, p.Z)(B.Z5c.CHANNEL(null == K ? void 0 : K.guild_id, null == K ? void 0 : K.id, et));
            },
            [K, et]
        ),
        e_ = a.useCallback(
            (e) => {
                null != K &&
                    (E.default.selectChannel({
                        guildId: K.guild_id,
                        channelId: e,
                        messageId: l.id
                    }),
                    (0, C.Kh)(e));
            },
            [l, K]
        ),
        eE = a.useCallback(() => {
            (0, N.Xx)(l.id, o, T.d.DELETE_USER_MESSAGE);
        }, [o, l.id]),
        eI = (0, G.L9)(Number(en)),
        em = null != ei,
        eT = H && null != et && (null == ea || !ea.actions.hasOwnProperty(T.d.DELETE_USER_MESSAGE)),
        ef = l.embeds.length > 0 ? (null === (t = l.embeds[0].fields.find((e) => 'channel_id' === e.rawName)) || void 0 === t ? void 0 : t.rawValue) : null,
        eh = null != ef;
    return (0, i.jsx)('div', {
        onMouseEnter: A,
        onMouseLeave: x,
        children: (0, i.jsx)(U.Z, {
            className: r()(w.mainContainer, { [w.compact]: s }),
            iconNode: s ? null : (0, i.jsx)(j.S, { src: g }),
            iconContainerClassName: w.iconContainer,
            compact: s,
            children: (0, i.jsxs)('div', {
                className: r()(w.content, { [w.compact]: s }),
                children: [
                    (0, i.jsx)(Z.nD, {
                        message: l,
                        messageClassname: w.spanCorrection,
                        className: r()(w.usernameContainer, w.spanCorrection, { [w.compact]: s }),
                        username: (0, i.jsxs)('div', {
                            className: w.spanCorrection,
                            children: [
                                (0, i.jsx)(_.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: w.username,
                                    children: F.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(m.Z, {
                                    type: k.Hb.SYSTEM_DM,
                                    className: w.systemTag
                                }),
                                (0, i.jsx)(Q, {
                                    message: l,
                                    channel: o,
                                    embedChannel: K,
                                    compact: s,
                                    interactionUserId: er
                                })
                            ]
                        }),
                        compact: s,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: r()(w.messageContent, { [w.compact]: s }),
                        children: (0, i.jsx)(L.Z, {
                            ...O,
                            message: l,
                            channel: K,
                            content: el,
                            compact: s,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: r()(w.embedCard, {
                                [w.compact]: s,
                                [w.selected]: eo || (y && M),
                                [w.isClickable]: null != et && null != K
                            }),
                            childrenAccessories: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: w.centeredRowContainer,
                                        children: [
                                            null != $ &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({ keyword: $ })
                                                        }),
                                                        (0, i.jsx)('div', { className: r()(w.dot, w.dotMargin) })
                                                    ]
                                                }),
                                            null != z &&
                                                (0, i.jsx)(_.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    tag: 'span',
                                                    children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({ ruleName: z })
                                                }),
                                            null != eI &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: r()(w.dot, w.dotMargin) }),
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: w.__invalid_footerText,
                                                            children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({ duration: eI })
                                                        })
                                                    ]
                                                }),
                                            null != es &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: r()(w.dot, w.dotMargin) }),
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: w.titleCase,
                                                            children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({ reason: (0, f.hU)(es) })
                                                        })
                                                    ]
                                                })
                                        ]
                                    }),
                                    em
                                        ? (0, i.jsx)(W, {
                                              children: (0, i.jsx)(_.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-normal',
                                                  tag: 'span',
                                                  children: ei
                                              })
                                          })
                                        : null
                                ]
                            }),
                            popoutProps: ec,
                            zalgo: !0,
                            onFocus: b,
                            onBlur: D,
                            onClick: ed
                        })
                    }),
                    (0, i.jsx)(Y, {
                        compact: s,
                        children: (0, i.jsxs)('div', {
                            className: r()(w.centeredRowContainer, w.buttonContainer, { [w.compact]: s }),
                            children: [
                                (0, i.jsx)(_.Button, {
                                    onClick: (e) => {
                                        var t;
                                        null === (t = ec.onContextMenuModerateUser) || void 0 === t || t.call(ec, e);
                                    },
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: w.buttonStyle,
                                    children: (0, i.jsxs)('div', {
                                        className: w.footerAction,
                                        children: [
                                            (0, i.jsx)(_.ShieldIcon, {
                                                size: 'xs',
                                                color: u.Z.BLUE_345,
                                                className: w.footerIcon
                                            }),
                                            (0, i.jsx)(_.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-link',
                                                children: F.Z.Messages.ACTIONS
                                            })
                                        ]
                                    })
                                }),
                                eh
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', { className: w.dot }),
                                              (0, i.jsx)(_.Button, {
                                                  onClick: () => e_(ef),
                                                  color: _.Button.Colors.LINK,
                                                  look: _.Button.Looks.LINK,
                                                  size: _.Button.Sizes.SMALL,
                                                  className: w.buttonStyle,
                                                  children: (0, i.jsx)('div', {
                                                      className: w.footerAction,
                                                      children: (0, i.jsx)(_.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: F.Z.Messages.GUILD_AUTOMOD_JUMP_TO_SURROUNDING
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, i.jsx)('div', { className: w.dot }),
                                (0, i.jsx)(_.Button, {
                                    onClick: eu,
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: w.buttonStyle,
                                    children: (0, i.jsx)('div', {
                                        className: w.footerAction,
                                        children: (0, i.jsx)(_.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: F.Z.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                                        })
                                    })
                                }),
                                eT
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', { className: w.dot }),
                                              (0, i.jsx)(_.Button, {
                                                  onClick: eE,
                                                  color: _.Button.Colors.LINK,
                                                  look: _.Button.Looks.LINK,
                                                  size: _.Button.Sizes.SMALL,
                                                  className: w.buttonStyle,
                                                  children: (0, i.jsx)('div', {
                                                      className: w.footerAction,
                                                      children: (0, i.jsx)(_.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: F.Z.Messages.GUILD_AUTOMOD_ALERT_DELETE_MEMBERS_MESSAGE
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                null != ea
                                    ? (0, i.jsx)(X, {
                                          alertActionsExecution: ea,
                                          guildId: o.guild_id
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
