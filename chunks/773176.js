n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(954955),
    o = n.n(r),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(596454),
    m = n(607070),
    p = n(110630),
    _ = n(706140),
    f = n(543241),
    E = n(346610),
    C = n(868643),
    g = n(245216),
    I = n(223606),
    x = n(188597),
    T = n(41776),
    N = n(222677),
    v = n(995774),
    S = n(931651),
    Z = n(280845),
    A = n(768943),
    M = n(121254),
    b = n(665906),
    R = n(695346),
    j = n(314897),
    L = n(323873),
    P = n(271383),
    O = n(430824),
    y = n(607744),
    D = n(496675),
    k = n(626135),
    U = n(572004),
    w = n(970257),
    B = n(364742),
    H = n(418476),
    G = n(151007),
    V = n(432376),
    F = n(373662),
    W = n(996861),
    z = n(603490),
    Y = n(225138),
    K = n(717680),
    q = n(981631),
    X = n(921944),
    Q = n(689938),
    J = n(547881),
    $ = n(589958);
function ee(e) {
    e.stopPropagation();
}
function et(e) {
    let { message: t, channel: n, canReport: i, onClose: a, updatePosition: s } = e;
    return (0, Y.useMessageMenu)({
        message: t,
        channel: n,
        textSelection: '',
        favoriteableType: null,
        favoriteableId: null,
        favoriteableName: null,
        itemHref: void 0,
        itemSrc: void 0,
        itemSafeSrc: void 0,
        itemTextContent: void 0,
        canReport: i,
        onHeightUpdate: s,
        onClose: a,
        navId: 'message-actions',
        ariaLabel: Q.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
    });
}
let en = a.memo(function (e) {
    let { channel: t, message: n } = e,
        a = (0, f.q5)(t.guild_id).slice(0, 3),
        s = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: a.map((e) => {
            var a;
            let l = s.find((t) => (0, v.ir)(t.emoji, (0, v.g1)(e))),
                r = null != l ? Q.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE : Q.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD,
                o = null == e.id ? e.uniqueName : e.name,
                c = null != l ? Q.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE_ALLY.format({ emojiName: o }) : Q.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD_ALLY.format({ emojiName: o });
            return (0, i.jsx)(
                F.sF,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: J.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: J.emojiTooltipText,
                                children: r
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        es({
                            type: null != l ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: N.TW.MESSAGE_HOVER_BAR
                        }),
                    buttonClassName: $.reactionSuggestion,
                    children: (0, i.jsx)(h.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: J.emoji
                    })
                },
                ''.concat(null !== (a = e.id) && void 0 !== a ? a : 0, ':').concat(e.name)
            );
        })
    });
});
function ei(e) {
    let {
            channel: t,
            message: n,
            canCopy: s,
            canPin: l,
            canDelete: r,
            canReport: o,
            canEdit: h,
            canPublish: f,
            canReact: I,
            canConfigureJoin: x,
            canReply: N,
            canStartThread: v,
            canViewThread: S,
            canForward: L,
            isExpanded: Y,
            showMoreUtilities: J,
            showEmojiPicker: ee,
            showMessageBookmarksActions: ei,
            isMessageBookmark: ea,
            setPopout: es,
            hasDeveloperMode: er,
            isGuildInviteReminder: eo,
            isFocused: ec
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: a, showMoreUtilities: s, setPopout: l, isFocused: r } = e,
                { author: o } = n,
                u = (0, c.e7)([O.Z], () => O.Z.getGuild(t.guild_id), [t.guild_id]),
                d = (0, c.e7)([j.default], () => j.default.getId()),
                h = (0, b.$R)(t),
                _ = (0, b.Gu)(t),
                f = R.nc.useSetting(),
                g = R.Sb.useSetting(),
                I = (0, c.e7)([y.Z], () => null == t.guild_id || y.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: x, canAddNewReactions: N } = (0, c.cj)(
                    [D.Z],
                    () => ({
                        canAddNewReactions: I && D.Z.can(q.Plq.ADD_REACTIONS, t),
                        canManageMessages: D.Z.can(q.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, I]
                ),
                v = (0, Z.U)(t, n),
                S = (0, b.NE)(t, n),
                L = (0, b.Ek)(n),
                k = (0, c.e7)([T.Z], () => null != t.guild_id && T.Z.isLurking(t.guild_id), [t]),
                B = (0, c.e7)([P.ZP], () => null != t.guild_id && P.ZP.isCurrentUserGuest(t.guild_id), [t]),
                F = o.id === d,
                W = (x || n.canDeleteOwnMessage(d)) && h && !q.V$x.UNDELETABLE.has(n.type);
            n.type === q.uaV.AUTO_MODERATION_ACTION && (W = W && x);
            let z = (0, w.a4)(n),
                Y = (0, G.Z)(n, t, x),
                X = !t.isSystemDM() && (0, H.Z)(n, d) && h && !_,
                { disableReactionCreates: Q } = (0, V.Z)({
                    channel: t,
                    canChat: I,
                    renderReactions: f,
                    canAddNewReactions: N,
                    isLurking: k,
                    isGuest: B,
                    isActiveChannelOrUnarchivableThread: h
                }),
                J = t.type === q.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(q.oNc.NEWS) && (F || x) && (0, p.Z)(n),
                $ = t.getGuildId(),
                ee = null != $ && (n.type === q.uaV.USER_JOIN || n.type === q.uaV.GUILD_INVITE_REMINDER) && D.Z.canWithPartialContext(q.Plq.MANAGE_GUILD, { guildId: $ }),
                { canForwardMessages: et } = (0, E.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                en = (0, C.a)(n),
                { enabled: ei } = M.Z.useExperiment({ location: 'message_utilities' }, { autoTrackExposure: !1 }),
                ea = (0, c.e7)([A.Z], () => A.Z.isMessageBookmarked(t.id, n.id)),
                es = (0, K.Z)(),
                el = (0, c.e7)([m.Z], () => m.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: Y,
                canEdit: X,
                canDelete: W,
                canReport: z,
                canReply: v,
                canStartThread: S,
                canViewThread: L,
                canForward: et && en,
                canCopy: U.wS,
                hasDeveloperMode: g,
                canReact: !Q && f,
                canPublish: J,
                canConfigureJoin: ee,
                isExpanded: es && !el && !i && !a && !s,
                showEmojiPicker: i,
                showEmojiBurstPicker: a,
                showMoreUtilities: s,
                showMessageBookmarksActions: ei,
                isMessageBookmark: ea,
                setPopout: l,
                isFocused: r,
                isGuildInviteReminder: n.type === q.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        eu = a.useCallback(() => {
            !J &&
                k.default.track(q.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                es({ moreUtilities: !J });
        }, [J, es, n]),
        ed = a.useCallback(() => {
            es({ emojiPicker: !ee });
        }, [ee, es]),
        eh = (0, b.$R)(t),
        em = n.hasFlag(q.iLy.CROSSPOSTED),
        [ep, e_] = (0, _.cv)(L ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ef = ep === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [eE, eC] = a.useState(!1),
        eg = a.useCallback(() => {
            eC(!0);
        }, []),
        eI = a.useCallback(() => {
            eC(!1);
        }, []),
        ex = a.useCallback(
            (e, t) => {
                e_(X.L.TAKE_ACTION), (0, W.ts)(e, t);
            },
            [e_]
        ),
        { canShowReactionsOnMessageHover: eT } = B.Z.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            Y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          s && er
                              ? (0, i.jsx)(
                                    F.sF,
                                    {
                                        label: Q.Z.Messages.COPY_ID_MESSAGE,
                                        icon: d.IdIcon,
                                        onClick: (e) => (0, W.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          s && !eo
                              ? (0, i.jsx)(
                                    F.sF,
                                    {
                                        label: Q.Z.Messages.COPY_LINK,
                                        icon: d.LinkIcon,
                                        onClick: () => (0, W.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          x
                              ? (0, i.jsx)(
                                    F.sF,
                                    {
                                        label: Q.Z.Messages.CONFIGURE,
                                        icon: d.CircleQuestionIcon,
                                        onClick: () => (0, W.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          eh
                              ? (0, i.jsx)(
                                    F.sF,
                                    {
                                        label: Q.Z.Messages.MARK_UNREAD,
                                        icon: d.ChatMarkUnreadIcon,
                                        onClick: () => (0, W.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          ei
                              ? (0, i.jsx)(
                                    F.sF,
                                    {
                                        label: ea ? Q.Z.Messages.MESSAGE_BOOKMARKS_REMOVE : Q.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
                                        icon: ea ? d.BookmarkIcon : d.BookmarkOutlineIcon,
                                        onClick: () => (ea ? (0, W.eM)(t, n) : (0, W.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          l
                              ? (0, i.jsx)(
                                    F.sF,
                                    {
                                        label: n.pinned ? Q.Z.Messages.UNPIN_MESSAGE : Q.Z.Messages.PIN_MESSAGE,
                                        icon: d.PinIcon,
                                        onClick: (e) => (0, W.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          v && L
                              ? (0, i.jsx)(
                                    F.sF,
                                    {
                                        label: Q.Z.Messages.CREATE_THREAD,
                                        icon: d.ThreadIcon,
                                        onClick: () => (0, W.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          N && h
                              ? (0, i.jsx)(
                                    F.sF,
                                    {
                                        label: Q.Z.Messages.MESSAGE_ACTION_REPLY,
                                        icon: d.ArrowAngleLeftUpIcon,
                                        onClick: (e) => (0, W.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            I && !eo
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          eT && !Y
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(en, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, i.jsx)(F.fO, { className: $.separator })
                                    ]
                                })
                              : null,
                          (0, i.jsx)(z.Z, {
                              togglePopout: ed,
                              renderEmojiPicker: el,
                              shouldShow: ee,
                              isFocused: ec,
                              channel: t,
                              message: n
                          })
                      ]
                  })
                : null,
            N && !h
                ? (0, i.jsx)(
                      F.sF,
                      {
                          label: Q.Z.Messages.MESSAGE_ACTION_REPLY,
                          icon: d.ArrowAngleLeftUpIcon,
                          onClick: (e) => (0, W.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            h
                ? (0, i.jsx)(
                      F.sF,
                      {
                          label: Q.Z.Messages.EDIT,
                          icon: d.PencilIcon,
                          onClick: () => (0, W.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            L
                ? (0, i.jsx)(
                      F.sF,
                      {
                          label: Q.Z.Messages.MESSAGE_ACTION_FORWARD,
                          icon: g.Z,
                          onClick: () => ex(t, n),
                          onTooltipShow: eg,
                          onTooltipHide: eI,
                          showNewBadge: !eE && ef
                      },
                      'forward'
                  )
                : null,
            v && !L
                ? (0, i.jsx)(
                      F.sF,
                      {
                          label: Q.Z.Messages.CREATE_THREAD,
                          icon: d.ThreadIcon,
                          onClick: () => (0, W.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !v && S
                ? (0, i.jsx)(
                      F.sF,
                      {
                          label: Q.Z.Messages.VIEW_THREAD,
                          icon: d.ThreadIcon,
                          onClick: () => (0, W.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            f
                ? (0, i.jsx)(
                      F.sF,
                      {
                          label: em ? Q.Z.Messages.NEWS_CHANNEL_PUBLISHED : Q.Z.Messages.NEWS_CHANNEL_PUBLISH,
                          icon: d.AnnouncementsIcon,
                          onClick: () => (0, W.Xl)(t, n),
                          disabled: em
                      },
                      'publish'
                  )
                : null,
            r && (eo || Y)
                ? (0, i.jsx)(
                      F.sF,
                      {
                          label: Q.Z.Messages.DELETE,
                          icon: d.TrashIcon,
                          onClick: (e) => (0, W.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !Y
                      },
                      'delete'
                  )
                : null,
            Y && r
                ? null
                : (0, i.jsx)(d.Popout, {
                      renderPopout: (e) => {
                          let { updatePosition: a, closePopout: s } = e;
                          return (0, i.jsx)(et, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: s,
                              updatePosition: a
                          });
                      },
                      shouldShow: J,
                      onRequestClose: eu,
                      position: 'left',
                      align: 'top',
                      animation: d.Popout.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...a } = e,
                              { isShown: s } = t;
                          return (0, i.jsx)(
                              F.sF,
                              {
                                  label: Q.Z.Messages.MORE,
                                  icon: d.MoreHorizontalIcon,
                                  selected: s,
                                  onClick: eu,
                                  ...a
                              },
                              'more'
                          );
                      }
                  })
        ]
    });
}
function ea(e) {
    let { channel: t, message: n } = e,
        a = (0, c.e7)([I.Z], () => null != I.Z.getMessage(n.id), [n.id]),
        s = null == n.interaction || (null != n.interactionData && (0, x.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !a &&
                s &&
                (0, i.jsx)(
                    F.sF,
                    {
                        label: Q.Z.Messages.RETRY,
                        icon: d.RetryIcon,
                        onClick: () => (0, W.mG)(t, n)
                    },
                    'retry'
                ),
            (0, i.jsx)(
                F.sF,
                {
                    label: Q.Z.Messages.DELETE,
                    icon: d.TrashIcon,
                    onClick: (e) => (0, W.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function es(e) {
    let { type: t, emoji: n, channel: i, message: a, location: s, isBurst: l = !1 } = e;
    if (null == n) return;
    let r = (0, v.g1)(n);
    'add' === t
        ? (0, N.rU)(i.id, a.id, r, s, { burst: l })
        : (0, N.WO)({
              channelId: i.id,
              messageId: a.id,
              emoji: r,
              location: s,
              options: { burst: l }
          });
}
function el(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = {
            openPopoutType: 'message_reaction_emoji_picker',
            ...(a && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? q.ZY5.GUILD_CHANNEL : q.ZY5.DM_CHANNEL,
                section: (0, v.s4)(e),
                object: q.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(S.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, a, s) => {
            es({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: N.TW.MESSAGE_REACTION_PICKER,
                isBurst: s
            }),
                a && (s ? o()(n, 150)() : n());
        },
        analyticsOverride: s,
        messageId: t.id
    });
}
t.Z = a.memo(function (e) {
    let { channel: t, message: n, isHeader: a } = e,
        s = (0, c.e7)([L.Z], () => L.Z.isEditing(t.id, n.id), [t.id, n.id]),
        r = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === q.yb.SEND_FAILED
                ? (0, i.jsx)(ea, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== q.yb.SEND_FAILED ? (0, i.jsx)(ei, { ...e }) : null;
        })(e);
    return s || (null == r && null == o)
        ? null
        : (0, i.jsx)('div', {
              className: l()(e.className, {
                  [J.container]: !0,
                  [J.isHeader]: a
              }),
              onClick: ee,
              onContextMenu: ee,
              role: 'group',
              'aria-label': Q.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
              children: (0, i.jsxs)(F.ZP, {
                  className: e.innerClassName,
                  children: [r, o]
              })
          });
});
