n.d(t, {
    Z: function () {
        return q;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(91192),
    u = n(722770),
    d = n(442837),
    m = n(481060),
    f = n(287734),
    h = n(607070),
    p = n(385499),
    g = n(313889),
    _ = n(825829),
    C = n(226192),
    E = n(36459),
    I = n(336197),
    x = n(359110),
    v = n(347475),
    N = n(496675),
    T = n(594174),
    S = n(5192),
    b = n(51144),
    A = n(937889),
    j = n(739566),
    Z = n(779125),
    R = n(890410),
    P = n(464891),
    y = n(507418),
    L = n(348238),
    O = n(38267),
    M = n(83561),
    k = n(834129),
    D = n(959517),
    B = n(981631),
    w = n(674563),
    U = n(590433),
    F = n(388032),
    G = n(146655);
function V(e, t) {
    let { popouts: n, selected: i, setPopout: l } = (0, O.Z)(e.id, D.d$),
        { usernameProfile: a, avatarProfile: o } = n,
        s = (0, L.wq)(e.author.id, t.id),
        c = (0, L.RN)(e.author.id, t.id, e.id),
        u = (0, L.XO)(e, t, a, l),
        d = (0, L.R9)(o, l);
    return {
        selected: i,
        onContextMenu: s,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: d,
        onPopoutRequestClose: r.useCallback(
            () =>
                l({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }),
            [l]
        ),
        renderPopout: y.Z,
        showAvatarPopout: o,
        showUsernamePopout: a
    };
}
function H(e, t) {
    return r.useMemo(() => {
        if (null != t)
            return (n) =>
                (0, i.jsx)(v.Z, {
                    ...n,
                    userId: t.id,
                    user: t,
                    channelId: e.id,
                    guildId: e.guild_id
                });
    }, [e, t]);
}
function z(e) {
    let { children: t, className: n, compact: r } = e;
    return (0, i.jsx)('div', {
        className: a()(G.footerContainer, n, { [G.compact]: r }),
        children: t
    });
}
function W(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: a()(G.annotationRow, n),
        children: t
    });
}
function K(e, t) {
    switch (e) {
        case g.d.DELETE_USER_MESSAGE:
            return (0, i.jsx)(m.TrashIcon, {
                size: 'xs',
                color: 'currentColor',
                className: G.alertActionIcon,
                ...t
            });
        case g.d.SET_COMPLETED:
            return (0, i.jsx)(m.CheckmarkLargeIcon, {
                size: 'xs',
                color: 'currentColor',
                className: a()(G.alertActionIcon, G.alertActionSetCompletedIcon),
                ...t
            });
        case g.d.SUBMIT_FEEDBACK:
            return (0, i.jsx)(m.FlagIcon, {
                size: 'xs',
                color: 'currentColor',
                className: a()(G.alertActionIcon),
                ...t
            });
        default:
            return null;
    }
}
function Y(e) {
    let { alertAction: t, guildId: n } = e,
        r = (0, d.e7)([T.default], () => T.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == r) return K(e, {});
        let l = (function (e, t, n) {
            var i;
            let r = null !== (i = S.ZP.getNickname(n, null, t)) && void 0 !== i ? i : b.ZP.getUserTag(t),
                l = s()(e.ts),
                a = ''.concat(r, ' ').concat(l.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                    case g.d.DELETE_USER_MESSAGE:
                        return F.intl.formatToPlainString(F.t.BtKE9v, {
                            userName: r,
                            timestamp: l.fromNow()
                        });
                    case g.d.SET_COMPLETED:
                        return F.intl.formatToPlainString(F.t.dyo9UV, {
                            userName: r,
                            timestamp: l.fromNow()
                        });
                    case g.d.SUBMIT_FEEDBACK:
                        return F.intl.formatToPlainString(F.t['C9/kIC'], {
                            userName: r,
                            timestamp: l.fromNow()
                        });
                    default:
                        return a;
                }
            } catch (e) {
                return a;
            }
        })(t, r, n);
        return (0, i.jsx)(m.Tooltip, {
            text: l,
            children: (t) => K(e, t)
        });
    } catch (e) {
        return null;
    }
}
function X(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        r = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, i.jsx)('div', {
        className: G.alertActionsIconContainer,
        children: r.map((e) =>
            (0, i.jsx)(
                Y,
                {
                    alertAction: e,
                    guildId: n
                },
                e.actionType
            )
        )
    });
}
let Q = r.memo(function (e) {
    let t,
        { message: n, channel: r, embedChannel: l, compact: a, interactionUserId: o } = e,
        s = V(n, r),
        c = H(r, n.author),
        u = (0, j.ZP)(n),
        d = (0, P.CF)(
            {
                message: n,
                channel: r,
                author: u,
                guildId: null == r ? void 0 : r.guild_id,
                compact: a,
                ...s
            },
            c
        ),
        f = T.default.getUser(o),
        h = V(n, r),
        p = H(r, f);
    if (null != f) {
        let e = (0, j.ij)(f, r),
            i = (0, P.CF)(
                {
                    message: n,
                    channel: r,
                    author: e,
                    guildId: null == r ? void 0 : r.guild_id,
                    compact: a,
                    ...h
                },
                p
            );
        t = () => i;
    }
    return (0, i.jsx)(m.Text, {
        variant: 'text-md/normal',
        color: 'header-primary',
        tag: 'span',
        className: G.spanCorrection,
        children: (0, _.Mq)(
            n,
            l,
            () =>
                (0, i.jsx)('div', {
                    className: G.channelNameContainer,
                    children: (0, i.jsx)(Z.Z, {
                        channel: l,
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
    var t;
    let { id: n, compact: l, message: o, channel: s } = e,
        {
            avatarSrc: v,
            eventHandlers: { onMouseEnter: T, onMouseLeave: S }
        } = (0, M.m)(!0),
        { onFocus: b, ...j } = (0, c.JA)(null != n ? n : ''),
        { isFocused: Z, handleFocus: y, handleBlur: O } = (0, L.bb)(b),
        D = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        H = (0, d.e7)([N.Z], () => N.Z.can(B.Plq.MANAGE_MESSAGES, s), [s]),
        { ruleName: K, embedChannel: Y, decisionId: q, keywordMatchedContent: J, keyword: $, content: ee, flaggedMessageId: et, timeoutDuration: en, decisionReason: ei, alertActionsExecution: er, quarantineType: el, interactionUserId: ea } = (0, _.ZP)(o),
        eo = r.useMemo(() => (0, A.k$)(ee, J, s.id), [ee, J, s]),
        { selected: es, ...ec } = V(o, s),
        eu = r.useCallback(() => {
            (0, C._s)(o.id, ee, q, s);
        }, [o.id, ee, q, s]),
        ed = r.useCallback(
            (e) => {
                if (null != et && null != Y) e.stopPropagation(), e.preventDefault(), (0, I.Z)(B.Z5c.CHANNEL(null == Y ? void 0 : Y.guild_id, null == Y ? void 0 : Y.id, et));
            },
            [Y, et]
        ),
        em = r.useCallback(
            (e) => {
                null != Y &&
                    (f.default.selectChannel({
                        guildId: Y.guild_id,
                        channelId: e,
                        messageId: o.id
                    }),
                    (0, x.Kh)(e));
            },
            [o, Y]
        ),
        ef = r.useCallback(() => {
            (0, E.Xx)(o.id, s, g.d.DELETE_USER_MESSAGE);
        }, [s, o.id]),
        eh = (0, U.L9)(Number(en)),
        ep = null != ei,
        eg = H && null != et && (null == er || !er.actions.hasOwnProperty(g.d.DELETE_USER_MESSAGE)),
        e_ = o.embeds.length > 0 ? (null === (t = o.embeds[0].fields.find((e) => 'channel_id' === e.rawName)) || void 0 === t ? void 0 : t.rawValue) : null,
        eC = null != e_;
    return (0, i.jsx)('div', {
        onMouseEnter: T,
        onMouseLeave: S,
        children: (0, i.jsx)(k.Z, {
            className: a()(G.mainContainer, { [G.compact]: l }),
            iconNode: l ? null : (0, i.jsx)(M.S, { src: v }),
            iconContainerClassName: G.iconContainer,
            compact: l,
            children: (0, i.jsxs)('div', {
                className: a()(G.content, { [G.compact]: l }),
                children: [
                    (0, i.jsx)(P.nD, {
                        message: o,
                        messageClassname: G.spanCorrection,
                        className: a()(G.usernameContainer, G.spanCorrection, { [G.compact]: l }),
                        username: (0, i.jsxs)('div', {
                            className: G.spanCorrection,
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: G.username,
                                    children: F.intl.string(F.t.hG1StL)
                                }),
                                (0, i.jsx)(p.Z, {
                                    type: w.Hb.SYSTEM_DM,
                                    className: G.systemTag
                                }),
                                (0, i.jsx)(Q, {
                                    message: o,
                                    channel: s,
                                    embedChannel: Y,
                                    compact: l,
                                    interactionUserId: ea
                                })
                            ]
                        }),
                        compact: l,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: a()(G.messageContent, { [G.compact]: l }),
                        children: (0, i.jsx)(R.Z, {
                            ...j,
                            message: o,
                            channel: Y,
                            content: eo,
                            compact: l,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: a()(G.embedCard, {
                                [G.compact]: l,
                                [G.selected]: es || (D && Z),
                                [G.isClickable]: null != et && null != Y
                            }),
                            childrenAccessories: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: G.centeredRowContainer,
                                        children: [
                                            null != $ &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(m.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            children: F.intl.format(F.t.SYIUTU, { keyword: $ })
                                                        }),
                                                        (0, i.jsx)('div', { className: a()(G.dot, G.dotMargin) })
                                                    ]
                                                }),
                                            null != K &&
                                                (0, i.jsx)(m.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    tag: 'span',
                                                    children: F.intl.format(F.t.ZoOyKC, { ruleName: K })
                                                }),
                                            null != eh &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: a()(G.dot, G.dotMargin) }),
                                                        (0, i.jsx)(m.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: G.__invalid_footerText,
                                                            children: F.intl.format(F.t['3LYql5'], { duration: eh })
                                                        })
                                                    ]
                                                }),
                                            null != el &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: a()(G.dot, G.dotMargin) }),
                                                        (0, i.jsx)(m.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: G.titleCase,
                                                            children: F.intl.format(F.t['26bB2N'], { reason: (0, _.hU)(el) })
                                                        })
                                                    ]
                                                })
                                        ]
                                    }),
                                    ep
                                        ? (0, i.jsx)(W, {
                                              children: (0, i.jsx)(m.Text, {
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
                            onFocus: y,
                            onBlur: O,
                            onClick: ed
                        })
                    }),
                    (0, i.jsx)(z, {
                        compact: l,
                        children: (0, i.jsxs)('div', {
                            className: a()(G.centeredRowContainer, G.buttonContainer, { [G.compact]: l }),
                            children: [
                                (0, i.jsx)(m.Button, {
                                    onClick: (e) => {
                                        var t;
                                        null === (t = ec.onContextMenuModerateUser) || void 0 === t || t.call(ec, e);
                                    },
                                    color: m.Button.Colors.LINK,
                                    look: m.Button.Looks.LINK,
                                    size: m.Button.Sizes.SMALL,
                                    className: G.buttonStyle,
                                    children: (0, i.jsxs)('div', {
                                        className: G.footerAction,
                                        children: [
                                            (0, i.jsx)(m.ShieldIcon, {
                                                size: 'xs',
                                                color: u.Z.BLUE_345,
                                                className: G.footerIcon
                                            }),
                                            (0, i.jsx)(m.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-link',
                                                children: F.intl.string(F.t.DEoVWV)
                                            })
                                        ]
                                    })
                                }),
                                eC
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', { className: G.dot }),
                                              (0, i.jsx)(m.Button, {
                                                  onClick: () => em(e_),
                                                  color: m.Button.Colors.LINK,
                                                  look: m.Button.Looks.LINK,
                                                  size: m.Button.Sizes.SMALL,
                                                  className: G.buttonStyle,
                                                  children: (0, i.jsx)('div', {
                                                      className: G.footerAction,
                                                      children: (0, i.jsx)(m.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: F.intl.string(F.t.jtkj09)
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, i.jsx)('div', { className: G.dot }),
                                (0, i.jsx)(m.Button, {
                                    onClick: eu,
                                    color: m.Button.Colors.LINK,
                                    look: m.Button.Looks.LINK,
                                    size: m.Button.Sizes.SMALL,
                                    className: G.buttonStyle,
                                    children: (0, i.jsx)('div', {
                                        className: G.footerAction,
                                        children: (0, i.jsx)(m.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: F.intl.string(F.t['94JbMz'])
                                        })
                                    })
                                }),
                                eg
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', { className: G.dot }),
                                              (0, i.jsx)(m.Button, {
                                                  onClick: ef,
                                                  color: m.Button.Colors.LINK,
                                                  look: m.Button.Looks.LINK,
                                                  size: m.Button.Sizes.SMALL,
                                                  className: G.buttonStyle,
                                                  children: (0, i.jsx)('div', {
                                                      className: G.footerAction,
                                                      children: (0, i.jsx)(m.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: F.intl.string(F.t['3A52tb'])
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                null != er
                                    ? (0, i.jsx)(X, {
                                          alertActionsExecution: er,
                                          guildId: s.guild_id
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
