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
    p = n(607070),
    m = n(110630),
    _ = n(706140),
    f = n(543241),
    E = n(407477),
    g = n(633302),
    C = n(347374),
    I = n(346610),
    x = n(868643),
    T = n(245216),
    N = n(223606),
    S = n(188597),
    v = n(41776),
    Z = n(222677),
    A = n(995774),
    M = n(931651),
    b = n(280845),
    R = n(768943),
    L = n(121254),
    j = n(665906),
    O = n(695346),
    P = n(314897),
    y = n(323873),
    D = n(271383),
    k = n(430824),
    U = n(607744),
    w = n(496675),
    B = n(626135),
    H = n(572004),
    G = n(176354),
    V = n(823379),
    F = n(970257),
    W = n(418476),
    z = n(151007),
    Y = n(432376),
    K = n(373662),
    q = n(996861),
    X = n(603490),
    Q = n(225138),
    J = n(717680),
    $ = n(981631),
    ee = n(921944),
    et = n(185923),
    en = n(689938),
    ei = n(547881),
    ea = n(589958);
let es = [g.ZP.getByName('100'), g.ZP.getByName('laughing'), g.ZP.getByName('sparkling_heart')].filter(V.lm);
function el(e) {
    e.stopPropagation();
}
function er(e) {
    let { message: t, channel: n, canReport: i, onClose: a, updatePosition: s } = e;
    return (0, Q.useMessageMenu)({
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
        ariaLabel: en.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
    });
}
let eo = a.memo(function (e) {
    let { channel: t, message: n } = e,
        a = (0, f.q5)(t.guild_id).filter(
            (e) =>
                !G.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: et.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        s = (a.length >= 3 ? a : [...(0, C.Z)(a.concat(es)).values()]).slice(0, 3),
        l = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: s.map((e) => {
            var a;
            let s = l.find((t) => (0, A.ir)(t.emoji, (0, A.g1)(e))),
                r = null != s ? en.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE : en.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD,
                o = null == e.id ? e.uniqueName : e.name,
                c = null != s ? en.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE_ALLY.format({ emojiName: o }) : en.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD_ALLY.format({ emojiName: o });
            return (0, i.jsx)(
                K.sF,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: ei.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: ei.emojiTooltipText,
                                children: r
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        ed({
                            type: null != s ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: Z.TW.MESSAGE_HOVER_BAR
                        }),
                    buttonClassName: ea.reactionSuggestion,
                    children: (0, i.jsx)(h.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: ei.emoji
                    })
                },
                ''.concat(null !== (a = e.id) && void 0 !== a ? a : 0, ':').concat(e.name)
            );
        })
    });
});
function ec(e) {
    let {
            channel: t,
            message: n,
            canCopy: s,
            canPin: l,
            canDelete: r,
            canReport: o,
            canEdit: h,
            canPublish: f,
            canReact: g,
            canConfigureJoin: C,
            canReply: N,
            canStartThread: S,
            canViewThread: Z,
            canForward: A,
            isExpanded: M,
            showMoreUtilities: y,
            showEmojiPicker: G,
            showMessageBookmarksActions: V,
            isMessageBookmark: Q,
            setPopout: et,
            hasDeveloperMode: ei,
            isGuildInviteReminder: es,
            isFocused: el
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: a, showMoreUtilities: s, setPopout: l, isFocused: r } = e,
                { author: o } = n,
                u = (0, c.e7)([k.Z], () => k.Z.getGuild(t.guild_id), [t.guild_id]),
                d = (0, c.e7)([P.default], () => P.default.getId()),
                h = (0, j.$R)(t),
                _ = (0, j.Gu)(t),
                f = O.nc.useSetting(),
                E = O.Sb.useSetting(),
                g = (0, c.e7)([U.Z], () => null == t.guild_id || U.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: C, canAddNewReactions: T } = (0, c.cj)(
                    [w.Z],
                    () => ({
                        canAddNewReactions: g && w.Z.can($.Plq.ADD_REACTIONS, t),
                        canManageMessages: w.Z.can($.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, g]
                ),
                N = (0, b.U)(t, n),
                S = (0, j.NE)(t, n),
                Z = (0, j.Ek)(n),
                A = (0, c.e7)([v.Z], () => null != t.guild_id && v.Z.isLurking(t.guild_id), [t]),
                M = (0, c.e7)([D.ZP], () => null != t.guild_id && D.ZP.isCurrentUserGuest(t.guild_id), [t]),
                y = o.id === d,
                B = (C || n.canDeleteOwnMessage(d)) && h && !$.V$x.UNDELETABLE.has(n.type);
            n.type === $.uaV.AUTO_MODERATION_ACTION && (B = B && C);
            let G = (0, F.a4)(n),
                V = (0, z.Z)(n, t, C),
                K = !t.isSystemDM() && (0, W.Z)(n, d) && h && !_,
                { disableReactionCreates: q } = (0, Y.Z)({
                    channel: t,
                    canChat: g,
                    renderReactions: f,
                    canAddNewReactions: T,
                    isLurking: A,
                    isGuest: M,
                    isActiveChannelOrUnarchivableThread: h
                }),
                X = t.type === $.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature($.oNc.NEWS) && (y || C) && (0, m.Z)(n),
                Q = t.getGuildId(),
                ee = null != Q && (n.type === $.uaV.USER_JOIN || n.type === $.uaV.GUILD_INVITE_REMINDER) && w.Z.canWithPartialContext($.Plq.MANAGE_GUILD, { guildId: Q }),
                { canForwardMessages: et } = (0, I.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                en = (0, x.a)(n),
                { enabled: ei } = L.Z.useExperiment({ location: 'message_utilities' }, { autoTrackExposure: !1 }),
                ea = (0, c.e7)([R.Z], () => R.Z.isMessageBookmarked(t.id, n.id)),
                es = (0, J.Z)(),
                el = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: V,
                canEdit: K,
                canDelete: B,
                canReport: G,
                canReply: N,
                canStartThread: S,
                canViewThread: Z,
                canForward: et && en,
                canCopy: H.wS,
                hasDeveloperMode: E,
                canReact: !q && f,
                canPublish: X,
                canConfigureJoin: ee,
                isExpanded: es && !el && !i && !a && !s,
                showEmojiPicker: i,
                showEmojiBurstPicker: a,
                showMoreUtilities: s,
                showMessageBookmarksActions: ei,
                isMessageBookmark: ea,
                setPopout: l,
                isFocused: r,
                isGuildInviteReminder: n.type === $.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        ec = a.useCallback(() => {
            !y &&
                B.default.track($.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                et({ moreUtilities: !y });
        }, [y, et, n]),
        eu = a.useCallback(() => {
            et({ emojiPicker: !G });
        }, [G, et]),
        ed = (0, j.$R)(t),
        ep = n.hasFlag($.iLy.CROSSPOSTED),
        [em, e_] = (0, _.cv)(A ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ef = em === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [eE, eg] = a.useState(!1),
        eC = a.useCallback(() => {
            eg(!0);
        }, []),
        eI = a.useCallback(() => {
            eg(!1);
        }, []),
        ex = a.useCallback(
            (e, t) => {
                e_(ee.L.TAKE_ACTION), (0, q.ts)(e, t);
            },
            [e_]
        ),
        { canShowReactionsOnMessageHover: eT } = E.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            M
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          s && ei
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: en.Z.Messages.COPY_ID_MESSAGE,
                                        icon: d.IdIcon,
                                        onClick: (e) => (0, q.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          s && !es
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: en.Z.Messages.COPY_LINK,
                                        icon: d.LinkIcon,
                                        onClick: () => (0, q.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          C
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: en.Z.Messages.CONFIGURE,
                                        icon: d.CircleQuestionIcon,
                                        onClick: () => (0, q.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          ed
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: en.Z.Messages.MARK_UNREAD,
                                        icon: d.ChatMarkUnreadIcon,
                                        onClick: () => (0, q.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          V
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: Q ? en.Z.Messages.MESSAGE_BOOKMARKS_REMOVE : en.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
                                        icon: Q ? d.BookmarkIcon : d.BookmarkOutlineIcon,
                                        onClick: () => (Q ? (0, q.eM)(t, n) : (0, q.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          l
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: n.pinned ? en.Z.Messages.UNPIN_MESSAGE : en.Z.Messages.PIN_MESSAGE,
                                        icon: d.PinIcon,
                                        onClick: (e) => (0, q.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          S && A
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: en.Z.Messages.CREATE_THREAD,
                                        icon: d.ThreadIcon,
                                        onClick: () => (0, q.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          N && h
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: en.Z.Messages.MESSAGE_ACTION_REPLY,
                                        icon: d.ArrowAngleLeftUpIcon,
                                        onClick: (e) => (0, q.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            g && !es
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          eT && !M
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(eo, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, i.jsx)(K.fO, { className: ea.separator })
                                    ]
                                })
                              : null,
                          (0, i.jsx)(X.Z, {
                              togglePopout: eu,
                              renderEmojiPicker: eh,
                              shouldShow: G,
                              isFocused: el,
                              channel: t,
                              message: n
                          })
                      ]
                  })
                : null,
            N && !h
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.MESSAGE_ACTION_REPLY,
                          icon: d.ArrowAngleLeftUpIcon,
                          onClick: (e) => (0, q.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            h
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.EDIT,
                          icon: d.PencilIcon,
                          onClick: () => (0, q.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            A
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.MESSAGE_ACTION_FORWARD,
                          icon: T.Z,
                          onClick: () => ex(t, n),
                          onTooltipShow: eC,
                          onTooltipHide: eI,
                          showNewBadge: !eE && ef
                      },
                      'forward'
                  )
                : null,
            S && !A
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.CREATE_THREAD,
                          icon: d.ThreadIcon,
                          onClick: () => (0, q.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !S && Z
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.VIEW_THREAD,
                          icon: d.ThreadIcon,
                          onClick: () => (0, q.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            f
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: ep ? en.Z.Messages.NEWS_CHANNEL_PUBLISHED : en.Z.Messages.NEWS_CHANNEL_PUBLISH,
                          icon: d.AnnouncementsIcon,
                          onClick: () => (0, q.Xl)(t, n),
                          disabled: ep
                      },
                      'publish'
                  )
                : null,
            r && (es || M)
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.DELETE,
                          icon: d.TrashIcon,
                          onClick: (e) => (0, q.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !M
                      },
                      'delete'
                  )
                : null,
            M && r
                ? null
                : (0, i.jsx)(d.Popout, {
                      renderPopout: (e) => {
                          let { updatePosition: a, closePopout: s } = e;
                          return (0, i.jsx)(er, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: s,
                              updatePosition: a
                          });
                      },
                      shouldShow: y,
                      onRequestClose: ec,
                      position: 'left',
                      align: 'top',
                      animation: d.Popout.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...a } = e,
                              { isShown: s } = t;
                          return (0, i.jsx)(
                              K.sF,
                              {
                                  label: en.Z.Messages.MORE,
                                  icon: d.MoreHorizontalIcon,
                                  selected: s,
                                  onClick: ec,
                                  ...a
                              },
                              'more'
                          );
                      }
                  })
        ]
    });
}
function eu(e) {
    let { channel: t, message: n } = e,
        a = (0, c.e7)([N.Z], () => null != N.Z.getMessage(n.id), [n.id]),
        s = null == n.interaction || (null != n.interactionData && (0, S.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !a &&
                s &&
                (0, i.jsx)(
                    K.sF,
                    {
                        label: en.Z.Messages.RETRY,
                        icon: d.RetryIcon,
                        onClick: () => (0, q.mG)(t, n)
                    },
                    'retry'
                ),
            (0, i.jsx)(
                K.sF,
                {
                    label: en.Z.Messages.DELETE,
                    icon: d.TrashIcon,
                    onClick: (e) => (0, q.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function ed(e) {
    let { type: t, emoji: n, channel: i, message: a, location: s, isBurst: l = !1 } = e;
    if (null == n) return;
    let r = (0, A.g1)(n);
    'add' === t
        ? (0, Z.rU)(i.id, a.id, r, s, { burst: l })
        : (0, Z.WO)({
              channelId: i.id,
              messageId: a.id,
              emoji: r,
              location: s,
              options: { burst: l }
          });
}
function eh(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = {
            openPopoutType: 'message_reaction_emoji_picker',
            ...(a && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
                section: (0, A.s4)(e),
                object: $.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(M.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, a, s) => {
            ed({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: Z.TW.MESSAGE_REACTION_PICKER,
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
        s = (0, c.e7)([y.Z], () => y.Z.isEditing(t.id, n.id), [t.id, n.id]),
        r = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === $.yb.SEND_FAILED
                ? (0, i.jsx)(eu, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== $.yb.SEND_FAILED ? (0, i.jsx)(ec, { ...e }) : null;
        })(e);
    return s || (null == r && null == o)
        ? null
        : (0, i.jsx)('div', {
              className: l()(e.className, {
                  [ei.container]: !0,
                  [ei.isHeader]: a
              }),
              onClick: el,
              onContextMenu: el,
              role: 'group',
              'aria-label': en.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
              children: (0, i.jsxs)(K.ZP, {
                  className: e.innerClassName,
                  children: [r, o]
              })
          });
});
