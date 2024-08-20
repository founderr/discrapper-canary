n.d(t, {
    Z: function () {
        return q;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
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
    h = n(825829),
    N = n(226192),
    C = n(36459),
    f = n(336197),
    p = n(103575),
    g = n(496675),
    S = n(594174),
    A = n(5192),
    R = n(51144),
    x = n(937889),
    O = n(739566),
    M = n(779125),
    v = n(890410),
    L = n(464891),
    Z = n(507418),
    P = n(348238),
    D = n(38267),
    b = n(83561),
    j = n(834129),
    U = n(959517),
    y = n(981631),
    B = n(674563),
    k = n(590433),
    F = n(689938),
    G = n(735612);
function w(e, t) {
    let { popouts: n, selected: i, setPopout: a } = (0, D.Z)(e.id, U.d$),
        { usernameProfile: r, avatarProfile: l } = n,
        o = (0, P.wq)(e.author.id, t.id),
        c = (0, P.RN)(e.author.id, t.id, e.id),
        u = (0, P.XO)(e, t, r, a),
        d = (0, P.R9)(l, a);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: d,
        onPopoutRequestClose: s.useCallback(
            () =>
                a({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }),
            [a]
        ),
        renderPopout: Z.Z,
        showAvatarPopout: l,
        showUsernamePopout: r
    };
}
function V(e, t) {
    return s.useMemo(() => {
        if (null != t)
            return (n) =>
                (0, i.jsx)(p.Z, {
                    ...n,
                    location: 'AutomodFlagToChannel',
                    userId: t.id,
                    user: t,
                    channelId: e.id,
                    guildId: e.guild_id
                });
    }, [e, t]);
}
function H(e) {
    let { children: t, className: n, compact: s } = e;
    return (0, i.jsx)('div', {
        className: r()(G.footerContainer, n, { [G.compact]: s }),
        children: t
    });
}
function Y(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: r()(G.annotationRow, n),
        children: t
    });
}
function W(e, t) {
    switch (e) {
        case T.d.DELETE_USER_MESSAGE:
            return (0, i.jsx)(_.TrashIcon, {
                size: 'xs',
                color: 'currentColor',
                className: G.alertActionIcon,
                ...t
            });
        case T.d.SET_COMPLETED:
            return (0, i.jsx)(_.CheckmarkLargeIcon, {
                size: 'xs',
                color: 'currentColor',
                className: r()(G.alertActionIcon, G.alertActionSetCompletedIcon),
                ...t
            });
        case T.d.SUBMIT_FEEDBACK:
            return (0, i.jsx)(_.FlagIcon, {
                size: 'xs',
                color: 'currentColor',
                className: r()(G.alertActionIcon),
                ...t
            });
        default:
            return null;
    }
}
function K(e) {
    let { alertAction: t, guildId: n } = e,
        s = (0, d.e7)([S.default], () => S.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == s) return W(e, {});
        let a = (function (e, t, n) {
            var i;
            let s = null !== (i = A.ZP.getNickname(n, null, t)) && void 0 !== i ? i : R.ZP.getUserTag(t),
                a = o()(e.ts),
                r = ''.concat(s, ' ').concat(a.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                    case T.d.DELETE_USER_MESSAGE:
                        return F.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
                            userName: s,
                            timestamp: a.fromNow()
                        });
                    case T.d.SET_COMPLETED:
                        return F.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
                            userName: s,
                            timestamp: a.fromNow()
                        });
                    case T.d.SUBMIT_FEEDBACK:
                        return F.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
                            userName: s,
                            timestamp: a.fromNow()
                        });
                    default:
                        return r;
                }
            } catch (e) {
                return r;
            }
        })(t, s, n);
        return (0, i.jsx)(_.Tooltip, {
            text: a,
            children: (t) => W(e, t)
        });
    } catch (e) {
        return null;
    }
}
function z(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        s = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, i.jsx)('div', {
        className: G.alertActionsIconContainer,
        children: s.map((e) =>
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
let Q = s.memo(function (e) {
    let t,
        { message: n, channel: s, embedChannel: a, compact: r, interactionUserId: l } = e,
        o = w(n, s),
        c = V(s, n.author),
        u = (0, O.ZP)(n),
        d = (0, L.CF)(
            {
                message: n,
                channel: s,
                author: u,
                guildId: null == s ? void 0 : s.guild_id,
                compact: r,
                ...o
            },
            c
        ),
        E = S.default.getUser(l),
        I = w(n, s),
        m = V(s, E);
    if (null != E) {
        let e = (0, O.ij)(E, s),
            i = (0, L.CF)(
                {
                    message: n,
                    channel: s,
                    author: e,
                    guildId: null == s ? void 0 : s.guild_id,
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
        className: G.spanCorrection,
        children: (0, h.Mq)(
            n,
            a,
            () =>
                (0, i.jsx)('div', {
                    className: G.channelNameContainer,
                    children: (0, i.jsx)(M.Z, {
                        channel: a,
                        className: G.channelName,
                        openChatWithoutConnecting: !0
                    })
                }),
            () => d,
            t
        )
    });
});
function q(e) {
    let { id: t, compact: n, message: a, channel: l } = e,
        {
            avatarSrc: o,
            eventHandlers: { onMouseEnter: p, onMouseLeave: S }
        } = (0, b.m)(!0),
        { onFocus: A, ...R } = (0, c.JA)(null != t ? t : ''),
        { isFocused: O, handleFocus: M, handleBlur: Z } = (0, P.bb)(A),
        D = (0, d.e7)([I.Z], () => I.Z.keyboardModeEnabled),
        U = (0, d.e7)([g.Z], () => g.Z.can(y.Plq.MANAGE_MESSAGES, l), [l]),
        { ruleName: V, embedChannel: W, decisionId: K, keywordMatchedContent: q, keyword: X, content: J, flaggedMessageId: $, timeoutDuration: ee, decisionReason: et, alertActionsExecution: en, quarantineType: ei, interactionUserId: es } = (0, h.ZP)(a),
        ea = s.useMemo(() => (0, x.k$)(J, q, l.id), [J, q, l]),
        { selected: er, ...el } = w(a, l),
        eo = s.useCallback(() => {
            (0, N._s)(a.id, J, K, l);
        }, [a.id, J, K, l]),
        ec = s.useCallback(
            (e) => {
                if (null != $ && null != W) e.stopPropagation(), e.preventDefault(), (0, f.Z)(y.Z5c.CHANNEL(null == W ? void 0 : W.guild_id, null == W ? void 0 : W.id, $));
            },
            [W, $]
        ),
        eu = s.useCallback(() => {
            null != W &&
                E.default.selectChannel({
                    guildId: W.guild_id,
                    channelId: W.id,
                    messageId: a.id
                });
        }, [a, W]),
        ed = s.useCallback(() => {
            (0, C.Xx)(a.id, l, T.d.DELETE_USER_MESSAGE);
        }, [l, a.id]),
        e_ = (0, k.L9)(Number(ee)),
        eE = null != et,
        eI = U && null != $ && (null == en || !en.actions.hasOwnProperty(T.d.DELETE_USER_MESSAGE));
    return (0, i.jsx)('div', {
        onMouseEnter: p,
        onMouseLeave: S,
        children: (0, i.jsx)(j.Z, {
            className: r()(G.mainContainer, { [G.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(b.S, { src: o }),
            iconContainerClassName: G.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: r()(G.content, { [G.compact]: n }),
                children: [
                    (0, i.jsx)(L.nD, {
                        message: a,
                        messageClassname: G.spanCorrection,
                        className: r()(G.usernameContainer, G.spanCorrection, { [G.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: G.spanCorrection,
                            children: [
                                (0, i.jsx)(_.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: G.username,
                                    children: F.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(m.Z, {
                                    type: B.Hb.SYSTEM_DM,
                                    className: G.systemTag
                                }),
                                (0, i.jsx)(Q, {
                                    message: a,
                                    channel: l,
                                    embedChannel: W,
                                    compact: n,
                                    interactionUserId: es
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: r()(G.messageContent, { [G.compact]: n }),
                        children: (0, i.jsx)(v.Z, {
                            ...R,
                            message: a,
                            channel: W,
                            content: ea,
                            compact: n,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: r()(G.embedCard, {
                                [G.compact]: n,
                                [G.selected]: er || (D && O),
                                [G.isClickable]: null != $ && null != W
                            }),
                            childrenAccessories: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: G.centeredRowContainer,
                                        children: [
                                            null != X &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({ keyword: X })
                                                        }),
                                                        (0, i.jsx)('div', { className: r()(G.dot, G.dotMargin) })
                                                    ]
                                                }),
                                            null != V &&
                                                (0, i.jsx)(_.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    tag: 'span',
                                                    children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({ ruleName: V })
                                                }),
                                            null != e_ &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: r()(G.dot, G.dotMargin) }),
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: G.__invalid_footerText,
                                                            children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({ duration: e_ })
                                                        })
                                                    ]
                                                }),
                                            null != ei &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: r()(G.dot, G.dotMargin) }),
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: G.titleCase,
                                                            children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({ reason: (0, h.hU)(ei) })
                                                        })
                                                    ]
                                                })
                                        ]
                                    }),
                                    eE
                                        ? (0, i.jsx)(Y, {
                                              children: (0, i.jsx)(_.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-normal',
                                                  tag: 'span',
                                                  children: et
                                              })
                                          })
                                        : null
                                ]
                            }),
                            popoutProps: el,
                            zalgo: !0,
                            onFocus: M,
                            onBlur: Z,
                            onClick: ec
                        })
                    }),
                    (0, i.jsx)(H, {
                        compact: n,
                        children: (0, i.jsxs)('div', {
                            className: r()(G.centeredRowContainer, G.buttonContainer, { [G.compact]: n }),
                            children: [
                                (0, i.jsx)(_.Button, {
                                    onClick: (e) => {
                                        var t;
                                        null === (t = el.onContextMenuModerateUser) || void 0 === t || t.call(el, e);
                                    },
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: G.buttonStyle,
                                    children: (0, i.jsxs)('div', {
                                        className: G.footerAction,
                                        children: [
                                            (0, i.jsx)(_.ShieldIcon, {
                                                size: 'xs',
                                                color: u.Z.BLUE_345,
                                                className: G.footerIcon
                                            }),
                                            (0, i.jsx)(_.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-link',
                                                children: F.Z.Messages.ACTIONS
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)('div', { className: G.dot }),
                                (0, i.jsx)(_.Button, {
                                    onClick: eu,
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: G.buttonStyle,
                                    children: (0, i.jsx)('div', {
                                        className: G.footerAction,
                                        children: (0, i.jsx)(_.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: F.Z.Messages.GUILD_AUTOMOD_JUMP_TO_SURROUNDING
                                        })
                                    })
                                }),
                                (0, i.jsx)('div', { className: G.dot }),
                                (0, i.jsx)(_.Button, {
                                    onClick: eo,
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: G.buttonStyle,
                                    children: (0, i.jsx)('div', {
                                        className: G.footerAction,
                                        children: (0, i.jsx)(_.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: F.Z.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                                        })
                                    })
                                }),
                                eI
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', { className: G.dot }),
                                              (0, i.jsx)(_.Button, {
                                                  onClick: ed,
                                                  color: _.Button.Colors.LINK,
                                                  look: _.Button.Looks.LINK,
                                                  size: _.Button.Sizes.SMALL,
                                                  className: G.buttonStyle,
                                                  children: (0, i.jsx)('div', {
                                                      className: G.footerAction,
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
                                null != en
                                    ? (0, i.jsx)(z, {
                                          alertActionsExecution: en,
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
