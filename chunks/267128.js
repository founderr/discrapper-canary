n.d(t, {
    Z: function () {
        return B;
    },
    f: function () {
        return k;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(913527),
    u = n.n(l),
    c = n(481060),
    d = n(100527),
    _ = n(906732),
    E = n(407477),
    f = n(978003),
    h = n(39154),
    p = n(245216),
    m = n(79390),
    I = n(869765),
    T = n(403132),
    g = n(378233),
    S = n(768581),
    A = n(55935),
    v = n(823379),
    N = n(453687),
    O = n(930282),
    R = n(123145),
    C = n(223021),
    y = n(217702),
    L = n(981631),
    b = n(689938),
    D = n(825193);
function M(e) {
    let { width: t = 12, height: n = 8, color: r = 'currentColor', className: a, foreground: o } = e;
    return (0, i.jsx)('svg', {
        className: a,
        width: t,
        height: n,
        viewBox: '0 0 12 8',
        children: (0, i.jsx)('path', {
            d: 'M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z',
            className: o,
            fill: r
        })
    });
}
function P(e) {
    let { width: t = 18, height: n = 18, className: r, foreground: a } = e;
    return (0, i.jsx)('svg', {
        className: r,
        width: t,
        height: n,
        viewBox: '0 0 18 18',
        children: (0, i.jsx)('path', {
            fill: '#3ba55c',
            d: 'M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0',
            className: a
        })
    });
}
function U(e, t, n, r, a) {
    return (0, i.jsx)('img', {
        alt: '',
        src:
            (null == t ? void 0 : t.guildMemberAvatar) != null && null != n
                ? (0, S.JM)({
                      guildId: n,
                      userId: e.id,
                      avatar: t.guildMemberAvatar
                  })
                : e.getAvatarURL(n, 16),
        onClick: r,
        onContextMenu: a,
        className: s()({
            [D.replyAvatar]: !0,
            [D.clickable]: null != r
        })
    });
}
function w(e, t, n) {
    let { referencedMessage: r, channel: a, compact: o, isReplyAuthorBlocked: s, repliedAuthor: l, showAvatarPopout: u, onClickAvatar: E, onContextMenu: f, onPopoutRequestClose: h } = e,
        { analyticsLocations: p } = (0, _.ZP)(d.Z.AVATAR);
    if (o || r.state !== I.Y.LOADED || s)
        return n === L.uaV.CONTEXT_MENU_COMMAND
            ? (0, i.jsx)('div', {
                  className: D.replyChatIconContainer,
                  children: (0, i.jsx)(c.ChatIcon, { size: 'xs' })
              })
            : (0, i.jsx)('div', {
                  className: D.replyBadge,
                  children: (0, i.jsx)(M, { className: D.replyIcon })
              });
    if (r.message.type === L.uaV.USER_JOIN || r.message.type === L.uaV.ROLE_SUBSCRIPTION_PURCHASE || r.message.type === L.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || r.message.type === L.uaV.GUILD_GAMING_STATS_PROMPT) return (0, i.jsx)(P, { className: D.userJoinSystemMessageIcon });
    if (r.message.type === L.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
        return (0, i.jsx)(c.TicketIcon, {
            size: 'md',
            color: 'currentColor',
            className: D.ticketIcon
        });
    if (r.message.type === L.uaV.POLL_RESULT)
        return (0, i.jsx)(c.PollsIcon, {
            className: D.repliedTextContentLeadingIcon,
            width: y.WW,
            height: y.WW,
            size: 'custom'
        });
    let m = () => U(r.message.author, l, a.guild_id, E, f);
    return null != t && null != u
        ? (0, i.jsx)(_.Gt, {
              value: p,
              children: (0, i.jsx)(c.Popout, {
                  renderPopout: t,
                  shouldShow: u,
                  position: 'right',
                  onRequestClose: h,
                  children: m
              })
          })
        : (0, i.jsx)(_.Gt, {
              value: p,
              children: m()
          });
}
function x(e, t) {
    let { baseMessage: n, channel: r, referencedMessage: a, showUsernamePopout: o, onClickUsername: s, onContextMenu: l, onPopoutRequestClose: u } = e,
        c = (null == a ? void 0 : a.state) === I.Y.LOADED ? a.message : void 0;
    return null == c || c.type === L.uaV.USER_JOIN || c.type === L.uaV.ROLE_SUBSCRIPTION_PURCHASE || c.type === L.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || c.type === L.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || c.type === L.uaV.GUILD_GAMING_STATS_PROMPT || c.type === L.uaV.POLL_RESULT
        ? null
        : (0, i.jsx)(R.Z, {
              message: c,
              channel: r,
              compact: !0,
              withMentionPrefix: (0, T.Z)(n, c),
              showPopout: o,
              renderPopout: t,
              onClick: s,
              onContextMenu: l,
              onPopoutRequestClose: u,
              isRepliedMessage: !0
          });
}
function G(e, t, n) {
    let { content: r, referencedMessage: a, isReplyAuthorBlocked: o, onClickReply: l } = e,
        u = a.state !== I.Y.DELETED ? l : void 0;
    switch (a.state) {
        case I.Y.LOADED: {
            let {
                contentPlaceholder: e,
                renderedContent: l,
                trailingIcon: d,
                leadingIcon: _
            } = k(a.message, r, o, D.repliedTextContent, {
                trailingIconClass: D.repliedTextContentTrailingIcon,
                leadingIconClass: D.repliedTextContentLeadingIcon,
                iconSize: y.WW
            });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    _,
                    (0, i.jsx)(c.Clickable, {
                        className: s()(D.repliedTextPreview, D.clickable, { [D.repliedMessageClickableSpineHovered]: t }),
                        onClick: u,
                        onMouseEnter: n,
                        onMouseLeave: n,
                        children: (0, i.jsx)(c.BlockInteractions, {
                            children:
                                null != l
                                    ? l
                                    : (0, i.jsx)('span', {
                                          className: D.repliedTextPlaceholder,
                                          children: e
                                      })
                        })
                    }),
                    d
                ]
            });
        }
        case I.Y.NOT_LOADED:
            return (0, i.jsx)(c.Clickable, {
                className: s()(D.repliedTextPreview, D.clickable),
                onClick: u,
                children: (0, i.jsx)('span', {
                    className: D.repliedTextPlaceholder,
                    children: b.Z.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
                })
            });
        case I.Y.DELETED:
            return (0, i.jsx)('div', {
                className: D.repliedTextPreview,
                children: (0, i.jsx)('span', {
                    className: D.repliedTextPlaceholder,
                    children: b.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
                })
            });
        default:
            (0, v.vE)(a);
    }
}
function k(e, t, n, r, a) {
    let o, s, l, u;
    let d = (0, h.Z)(e),
        { trailingIconClass: _, leadingIconClass: E, iconSize: I } = a,
        T = null == t || '' === t || (Array.isArray(t) && 0 === t.length),
        S = (0, g.cv)(d).length > 0,
        A = null != d.interaction,
        v = d.hasFlag(L.iLy.IS_VOICE_MESSAGE),
        N = d.isPoll(),
        R = d.type === L.uaV.POLL_RESULT;
    if (
        ((0, f.Z)(e) &&
            (u = (0, i.jsx)(p.Z, {
                size: 'custom',
                className: E,
                width: I,
                height: I
            })),
        n)
    )
        o = b.Z.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
    else if (d.type === L.uaV.CHANNEL_PINNED_MESSAGE) o = b.Z.Messages.MESSAGE_PINNED;
    else if (T) {
        if (N) {
            var C, y;
            s = null == d ? void 0 : null === (y = d.poll) || void 0 === y ? void 0 : null === (C = y.question) || void 0 === C ? void 0 : C.text;
        } else
            R
                ? (o = (0, m.N4)(d))
                : S
                  ? (o = b.Z.Messages.REPLY_QUOTE_STICKER)
                  : A
                    ? (o = b.Z.Messages.REPLY_QUOTE_COMMAND)
                    : v
                      ? (o = b.Z.Messages.REPLY_QUOTE_VOICE_MESSAGE)
                      : ((o = b.Z.Messages.REPLY_QUOTE_NO_TEXT_CONTENT),
                        (l = (0, i.jsx)(c.ImageIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            className: _,
                            width: I,
                            height: I
                        })));
    } else
        s = (0, i.jsx)(O.ZP, {
            message: d,
            content: t,
            className: r
        });
    return (
        S
            ? (l = (0, i.jsx)(c.StickerSmallIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  className: _,
                  width: I,
                  height: I
              }))
            : A
              ? (l = (0, i.jsx)(c.SlashBoxIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: _,
                    width: I,
                    height: I
                }))
              : v
                ? (l = (0, i.jsx)(c.MicrophoneIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      className: _,
                      width: (19 / 24) * I,
                      height: I
                  }))
                : (d.attachments.length > 0 || d.embeds.length > 0) &&
                  !R &&
                  (l = (0, i.jsx)(c.ImageIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      className: _,
                      width: I,
                      height: I
                  })),
        {
            contentPlaceholder: o,
            renderedContent: s,
            trailingIcon: l,
            leadingIcon: u
        }
    );
}
function B(e) {
    let t;
    let { repliedAuthor: n, baseAuthor: r, baseMessage: o, referencedMessage: l, renderPopout: d, isReplySpineClickable: _, showReplySpine: f } = e,
        { canShowReactionsOnMessageHover: h } = E.ZP.useExperiment({ location: 'RepliedMessage' }, { autoTrackExposure: !1 }),
        [p, m] = a.useState(!1),
        T = a.useMemo(() => (null != d && l.state === I.Y.LOADED ? (e) => d(e, l.message) : void 0), [l, d]),
        g = a.useCallback(() => m((e) => !e), []),
        S = w(e, T, o.type),
        v = x(e, T),
        O = G(e, p, g),
        R = a.useMemo(() => (e.compact ? (0, C.Z)((0, A.vc)(u()(), 'LT')) : null), [e.compact]);
    return (
        null != n &&
            null != r &&
            (t = b.Z.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
                author: null == r ? void 0 : r.nick,
                repliedAuthor: null == n ? void 0 : n.nick
            })),
        (0, i.jsxs)('div', {
            id: (0, N.Gq)(o),
            className: s()(D.repliedMessage, R, { [D.messageSpine]: !h || (!_ && f) }),
            'aria-label': t,
            children: [
                h &&
                    _ &&
                    f &&
                    (0, i.jsx)(c.Clickable, {
                        tag: 'div',
                        'aria-label': b.Z.Messages.JUMP_TO_REPLY,
                        className: s()(D.repliedMessageClickableSpine, { [D.repliedMessageContentHovered]: p }),
                        onClick: e.onClickReply,
                        onMouseEnter: g,
                        onMouseLeave: g
                    }),
                S,
                v,
                O
            ]
        })
    );
}
