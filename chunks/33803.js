n.d(t, {
    Z: function () {
        return J;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(913527),
    o = n.n(r),
    c = n(91192),
    d = n(722770),
    u = n(442837),
    _ = n(481060),
    E = n(287734),
    I = n(607070),
    m = n(385499),
    T = n(313889),
    N = n(825829),
    h = n(226192),
    C = n(36459),
    p = n(336197),
    f = n(359110),
    g = n(347475),
    A = n(496675),
    S = n(594174),
    M = n(5192),
    O = n(51144),
    x = n(937889),
    R = n(739566),
    v = n(779125),
    Z = n(890410),
    L = n(464891),
    P = n(507418),
    b = n(348238),
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
        { usernameProfile: l, avatarProfile: r } = n,
        o = (0, b.wq)(e.author.id, t.id),
        c = (0, b.RN)(e.author.id, t.id, e.id),
        d = (0, b.XO)(e, t, l, s),
        u = (0, b.R9)(r, s);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: d,
        onClickAvatar: u,
        onPopoutRequestClose: a.useCallback(
            () =>
                s({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }),
            [s]
        ),
        renderPopout: P.Z,
        showAvatarPopout: r,
        showUsernamePopout: l
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
        className: l()(w.footerContainer, n, { [w.compact]: a }),
        children: t
    });
}
function W(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: l()(w.annotationRow, n),
        children: t
    });
}
function K(e, t) {
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
                className: l()(w.alertActionIcon, w.alertActionSetCompletedIcon),
                ...t
            });
        case T.d.SUBMIT_FEEDBACK:
            return (0, i.jsx)(_.FlagIcon, {
                size: 'xs',
                color: 'currentColor',
                className: l()(w.alertActionIcon),
                ...t
            });
        default:
            return null;
    }
}
function z(e) {
    let { alertAction: t, guildId: n } = e,
        a = (0, u.e7)([S.default], () => S.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == a) return K(e, {});
        let s = (function (e, t, n) {
            var i;
            let a = null !== (i = M.ZP.getNickname(n, null, t)) && void 0 !== i ? i : O.ZP.getUserTag(t),
                s = o()(e.ts),
                l = ''.concat(a, ' ').concat(s.fromNow());
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
                        return l;
                }
            } catch (e) {
                return l;
            }
        })(t, a, n);
        return (0, i.jsx)(_.Tooltip, {
            text: s,
            children: (t) => K(e, t)
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
                z,
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
        { message: n, channel: a, embedChannel: s, compact: l, interactionUserId: r } = e,
        o = V(n, a),
        c = H(a, n.author),
        d = (0, R.ZP)(n),
        u = (0, L.CF)(
            {
                message: n,
                channel: a,
                author: d,
                guildId: null == a ? void 0 : a.guild_id,
                compact: l,
                ...o
            },
            c
        ),
        E = S.default.getUser(r),
        I = V(n, a),
        m = H(a, E);
    if (null != E) {
        let e = (0, R.ij)(E, a),
            i = (0, L.CF)(
                {
                    message: n,
                    channel: a,
                    author: e,
                    guildId: null == a ? void 0 : a.guild_id,
                    compact: l,
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
        children: (0, N.Mq)(
            n,
            s,
            () =>
                (0, i.jsx)('div', {
                    className: w.channelNameContainer,
                    children: (0, i.jsx)(v.Z, {
                        channel: s,
                        className: w.channelName,
                        openChatWithoutConnecting: !0
                    })
                }),
            () => u,
            t
        )
    });
});
function J(e) {
    var t;
    let { id: n, compact: s, message: r, channel: o } = e,
        {
            avatarSrc: g,
            eventHandlers: { onMouseEnter: S, onMouseLeave: M }
        } = (0, j.m)(!0),
        { onFocus: O, ...R } = (0, c.JA)(null != n ? n : ''),
        { isFocused: v, handleFocus: P, handleBlur: D } = (0, b.bb)(O),
        y = (0, u.e7)([I.Z], () => I.Z.keyboardModeEnabled),
        H = (0, u.e7)([A.Z], () => A.Z.can(B.Plq.MANAGE_MESSAGES, o), [o]),
        { ruleName: K, embedChannel: z, decisionId: J, keywordMatchedContent: q, keyword: $, content: ee, flaggedMessageId: et, timeoutDuration: en, decisionReason: ei, alertActionsExecution: ea, quarantineType: es, interactionUserId: el } = (0, N.ZP)(r),
        er = a.useMemo(() => (0, x.k$)(ee, q, o.id), [ee, q, o]),
        { selected: eo, ...ec } = V(r, o),
        ed = a.useCallback(() => {
            (0, h._s)(r.id, ee, J, o);
        }, [r.id, ee, J, o]),
        eu = a.useCallback(
            (e) => {
                if (null != et && null != z) e.stopPropagation(), e.preventDefault(), (0, p.Z)(B.Z5c.CHANNEL(null == z ? void 0 : z.guild_id, null == z ? void 0 : z.id, et));
            },
            [z, et]
        ),
        e_ = a.useCallback(
            (e) => {
                null != z &&
                    (E.default.selectChannel({
                        guildId: z.guild_id,
                        channelId: e,
                        messageId: r.id
                    }),
                    (0, f.Kh)(e));
            },
            [r, z]
        ),
        eE = a.useCallback(() => {
            (0, C.Xx)(r.id, o, T.d.DELETE_USER_MESSAGE);
        }, [o, r.id]),
        eI = (0, G.L9)(Number(en)),
        em = null != ei,
        eT = H && null != et && (null == ea || !ea.actions.hasOwnProperty(T.d.DELETE_USER_MESSAGE)),
        eN = r.embeds.length > 0 ? (null === (t = r.embeds[0].fields.find((e) => 'channel_id' === e.rawName)) || void 0 === t ? void 0 : t.rawValue) : null,
        eh = null != eN;
    return (0, i.jsx)('div', {
        onMouseEnter: S,
        onMouseLeave: M,
        children: (0, i.jsx)(U.Z, {
            className: l()(w.mainContainer, { [w.compact]: s }),
            iconNode: s ? null : (0, i.jsx)(j.S, { src: g }),
            iconContainerClassName: w.iconContainer,
            compact: s,
            children: (0, i.jsxs)('div', {
                className: l()(w.content, { [w.compact]: s }),
                children: [
                    (0, i.jsx)(L.nD, {
                        message: r,
                        messageClassname: w.spanCorrection,
                        className: l()(w.usernameContainer, w.spanCorrection, { [w.compact]: s }),
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
                                    message: r,
                                    channel: o,
                                    embedChannel: z,
                                    compact: s,
                                    interactionUserId: el
                                })
                            ]
                        }),
                        compact: s,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: l()(w.messageContent, { [w.compact]: s }),
                        children: (0, i.jsx)(Z.Z, {
                            ...R,
                            message: r,
                            channel: z,
                            content: er,
                            compact: s,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: l()(w.embedCard, {
                                [w.compact]: s,
                                [w.selected]: eo || (y && v),
                                [w.isClickable]: null != et && null != z
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
                                                        (0, i.jsx)('div', { className: l()(w.dot, w.dotMargin) })
                                                    ]
                                                }),
                                            null != K &&
                                                (0, i.jsx)(_.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    tag: 'span',
                                                    children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({ ruleName: K })
                                                }),
                                            null != eI &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: l()(w.dot, w.dotMargin) }),
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
                                                        (0, i.jsx)('div', { className: l()(w.dot, w.dotMargin) }),
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: w.titleCase,
                                                            children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({ reason: (0, N.hU)(es) })
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
                            onFocus: P,
                            onBlur: D,
                            onClick: eu
                        })
                    }),
                    (0, i.jsx)(Y, {
                        compact: s,
                        children: (0, i.jsxs)('div', {
                            className: l()(w.centeredRowContainer, w.buttonContainer, { [w.compact]: s }),
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
                                                color: d.Z.BLUE_345,
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
                                                  onClick: () => e_(eN),
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
                                    onClick: ed,
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
