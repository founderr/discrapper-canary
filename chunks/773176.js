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
    E = n(633302),
    g = n(347374),
    C = n(346610),
    I = n(868643),
    x = n(245216),
    T = n(223606),
    N = n(188597),
    v = n(41776),
    S = n(222677),
    Z = n(995774),
    A = n(931651),
    M = n(280845),
    b = n(768943),
    R = n(121254),
    L = n(665906),
    j = n(695346),
    P = n(314897),
    O = n(323873),
    y = n(271383),
    D = n(430824),
    k = n(607744),
    U = n(496675),
    w = n(626135),
    B = n(572004),
    H = n(176354),
    G = n(823379),
    V = n(970257),
    F = n(364742),
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
let es = [E.ZP.getByName('100'), E.ZP.getByName('laughing'), E.ZP.getByName('sparkling_heart')].filter(G.lm);
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
                !H.ZP.isEmojiDisabled({
                    emoji: e,
                    channel: t,
                    intention: et.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        s = (a.length >= 3 ? a : [...(0, g.Z)(a.concat(es)).values()]).slice(0, 3),
        l = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: s.map((e) => {
            var a;
            let s = l.find((t) => (0, Z.ir)(t.emoji, (0, Z.g1)(e))),
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
                            location: S.TW.MESSAGE_HOVER_BAR
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
            canReact: E,
            canConfigureJoin: g,
            canReply: T,
            canStartThread: N,
            canViewThread: S,
            canForward: Z,
            isExpanded: A,
            showMoreUtilities: O,
            showEmojiPicker: H,
            showMessageBookmarksActions: G,
            isMessageBookmark: Q,
            setPopout: et,
            hasDeveloperMode: ei,
            isGuildInviteReminder: es,
            isFocused: el
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: a, showMoreUtilities: s, setPopout: l, isFocused: r } = e,
                { author: o } = n,
                u = (0, c.e7)([D.Z], () => D.Z.getGuild(t.guild_id), [t.guild_id]),
                d = (0, c.e7)([P.default], () => P.default.getId()),
                h = (0, L.$R)(t),
                _ = (0, L.Gu)(t),
                f = j.nc.useSetting(),
                E = j.Sb.useSetting(),
                g = (0, c.e7)([k.Z], () => null == t.guild_id || k.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: x, canAddNewReactions: T } = (0, c.cj)(
                    [U.Z],
                    () => ({
                        canAddNewReactions: g && U.Z.can($.Plq.ADD_REACTIONS, t),
                        canManageMessages: U.Z.can($.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, g]
                ),
                N = (0, M.U)(t, n),
                S = (0, L.NE)(t, n),
                Z = (0, L.Ek)(n),
                A = (0, c.e7)([v.Z], () => null != t.guild_id && v.Z.isLurking(t.guild_id), [t]),
                O = (0, c.e7)([y.ZP], () => null != t.guild_id && y.ZP.isCurrentUserGuest(t.guild_id), [t]),
                w = o.id === d,
                H = (x || n.canDeleteOwnMessage(d)) && h && !$.V$x.UNDELETABLE.has(n.type);
            n.type === $.uaV.AUTO_MODERATION_ACTION && (H = H && x);
            let G = (0, V.a4)(n),
                F = (0, z.Z)(n, t, x),
                K = !t.isSystemDM() && (0, W.Z)(n, d) && h && !_,
                { disableReactionCreates: q } = (0, Y.Z)({
                    channel: t,
                    canChat: g,
                    renderReactions: f,
                    canAddNewReactions: T,
                    isLurking: A,
                    isGuest: O,
                    isActiveChannelOrUnarchivableThread: h
                }),
                X = t.type === $.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature($.oNc.NEWS) && (w || x) && (0, m.Z)(n),
                Q = t.getGuildId(),
                ee = null != Q && (n.type === $.uaV.USER_JOIN || n.type === $.uaV.GUILD_INVITE_REMINDER) && U.Z.canWithPartialContext($.Plq.MANAGE_GUILD, { guildId: Q }),
                { canForwardMessages: et } = (0, C.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                en = (0, I.a)(n),
                { enabled: ei } = R.Z.useExperiment({ location: 'message_utilities' }, { autoTrackExposure: !1 }),
                ea = (0, c.e7)([b.Z], () => b.Z.isMessageBookmarked(t.id, n.id)),
                es = (0, J.Z)(),
                el = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: F,
                canEdit: K,
                canDelete: H,
                canReport: G,
                canReply: N,
                canStartThread: S,
                canViewThread: Z,
                canForward: et && en,
                canCopy: B.wS,
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
            !O &&
                w.default.track($.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                et({ moreUtilities: !O });
        }, [O, et, n]),
        eu = a.useCallback(() => {
            et({ emojiPicker: !H });
        }, [H, et]),
        ed = (0, L.$R)(t),
        ep = n.hasFlag($.iLy.CROSSPOSTED),
        [em, e_] = (0, _.cv)(Z ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
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
        { canShowReactionsOnMessageHover: eT } = F.Z.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            A
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
                          g
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
                          G
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
                          N && Z
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
                          T && h
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
            E && !es
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          eT && !A
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
                              shouldShow: H,
                              isFocused: el,
                              channel: t,
                              message: n
                          })
                      ]
                  })
                : null,
            T && !h
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
            Z
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.MESSAGE_ACTION_FORWARD,
                          icon: x.Z,
                          onClick: () => ex(t, n),
                          onTooltipShow: eC,
                          onTooltipHide: eI,
                          showNewBadge: !eE && ef
                      },
                      'forward'
                  )
                : null,
            N && !Z
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
            !N && S
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
            r && (es || A)
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.DELETE,
                          icon: d.TrashIcon,
                          onClick: (e) => (0, q.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !A
                      },
                      'delete'
                  )
                : null,
            A && r
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
                      shouldShow: O,
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
        a = (0, c.e7)([T.Z], () => null != T.Z.getMessage(n.id), [n.id]),
        s = null == n.interaction || (null != n.interactionData && (0, N.$s)(n.interactionData));
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
    let r = (0, Z.g1)(n);
    'add' === t
        ? (0, S.rU)(i.id, a.id, r, s, { burst: l })
        : (0, S.WO)({
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
                section: (0, Z.s4)(e),
                object: $.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(A.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, a, s) => {
            ed({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: S.TW.MESSAGE_REACTION_PICKER,
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
        s = (0, c.e7)([O.Z], () => O.Z.isEditing(t.id, n.id), [t.id, n.id]),
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
