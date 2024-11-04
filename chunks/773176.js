n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(954955),
    o = n.n(a),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(596454),
    m = n(607070),
    p = n(110630),
    f = n(706140),
    g = n(543241),
    C = n(407477),
    x = n(633302),
    v = n(347374),
    _ = n(346610),
    I = n(868643),
    E = n(245216),
    b = n(223606),
    S = n(188597),
    Z = n(41776),
    T = n(222677),
    N = n(995774),
    j = n(931651),
    A = n(280845),
    y = n(2818),
    P = n(768943),
    M = n(665906),
    R = n(695346),
    L = n(314897),
    k = n(323873),
    O = n(271383),
    w = n(430824),
    D = n(607744),
    U = n(496675),
    B = n(626135),
    H = n(572004),
    F = n(176354),
    G = n(823379),
    V = n(970257),
    z = n(418476),
    W = n(151007),
    Y = n(432376),
    K = n(373662),
    q = n(996861),
    X = n(603490),
    J = n(225138),
    Q = n(717680),
    $ = n(981631),
    ee = n(921944),
    et = n(185923),
    en = n(388032),
    ei = n(573908);
let el = [x.ZP.getByName('100'), x.ZP.getByName('laughing'), x.ZP.getByName('sparkling_heart')].filter(G.lm);
function er(e) {
    e.stopPropagation();
}
function es(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: r } = e;
    return (0, J.useMessageMenu)({
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
        onHeightUpdate: r,
        onClose: l,
        navId: 'message-actions',
        ariaLabel: en.intl.string(en.t.Lv7LxM)
    });
}
let ea = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !F.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: et.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        r = (l.length >= 3 ? l : [...(0, v.Z)(l.concat(el)).values()]).slice(0, 3),
        s = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: r.map((e) => {
            var l;
            let r = s.find((t) => (0, N.ir)(t.emoji, (0, N.g1)(e))),
                a = null != r ? en.intl.string(en.t.wunKKC) : en.intl.string(en.t.XVx5BA),
                o = null == e.id ? e.uniqueName : e.name,
                c = null != r ? en.intl.formatToPlainString(en.t.vjeruL, { emojiName: o }) : en.intl.formatToPlainString(en.t.L1JQwM, { emojiName: o });
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
                                children: a
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        eu({
                            type: null != r ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: T.TW.MESSAGE_HOVER_BAR
                        }),
                    children: (0, i.jsx)(h.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: ei.emoji,
                        canSelect: !1
                    })
                },
                ''.concat(null !== (l = e.id) && void 0 !== l ? l : 0, ':').concat(e.name)
            );
        })
    });
});
function eo(e) {
    let {
            channel: t,
            message: n,
            canCopy: r,
            canPin: s,
            canDelete: a,
            canReport: o,
            canEdit: h,
            canPublish: g,
            canReact: x,
            canConfigureJoin: v,
            canReply: b,
            canStartThread: S,
            canViewThread: T,
            canForward: N,
            isExpanded: j,
            showMoreUtilities: k,
            showEmojiPicker: F,
            showMessageBookmarksActions: G,
            isMessageBookmark: J,
            setPopout: et,
            hasDeveloperMode: ei,
            isGuildInviteReminder: el,
            isFocused: er
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: l, showMoreUtilities: r, setPopout: s, isFocused: a } = e,
                { author: o } = n,
                u = (0, c.e7)([w.Z], () => w.Z.getGuild(t.guild_id), [t.guild_id]),
                d = (0, c.e7)([L.default], () => L.default.getId()),
                h = (0, M.$R)(t),
                f = (0, M.Gu)(t),
                g = R.nc.useSetting(),
                C = R.Sb.useSetting(),
                x = (0, c.e7)([D.Z], () => null == t.guild_id || D.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: v, canAddNewReactions: E } = (0, c.cj)(
                    [U.Z],
                    () => ({
                        canAddNewReactions: x && U.Z.can($.Plq.ADD_REACTIONS, t),
                        canManageMessages: U.Z.can($.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, x]
                ),
                b = (0, A.U)(t, n),
                S = (0, M.NE)(t, n),
                T = (0, M.Ek)(n),
                N = (0, c.e7)([Z.Z], () => null != t.guild_id && Z.Z.isLurking(t.guild_id), [t]),
                j = (0, c.e7)([O.ZP], () => null != t.guild_id && O.ZP.isCurrentUserGuest(t.guild_id), [t]),
                k = o.id === d,
                B = (v || n.canDeleteOwnMessage(d)) && h && !$.V$x.UNDELETABLE.has(n.type);
            n.type === $.uaV.AUTO_MODERATION_ACTION && (B = B && v);
            let F = (0, V.a4)(n),
                G = (0, W.Z)(n, t, v),
                K = !t.isSystemDM() && (0, z.Z)(n, d) && h && !f,
                { disableReactionCreates: q } = (0, Y.Z)({
                    channel: t,
                    canChat: x,
                    renderReactions: g,
                    canAddNewReactions: E,
                    isLurking: N,
                    isGuest: j,
                    isActiveChannelOrUnarchivableThread: h
                }),
                X = t.type === $.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature($.oNc.NEWS) && (k || v) && (0, p.Z)(n),
                J = t.getGuildId(),
                ee = null != J && (n.type === $.uaV.USER_JOIN || n.type === $.uaV.GUILD_INVITE_REMINDER) && U.Z.canWithPartialContext($.Plq.MANAGE_GUILD, { guildId: J }),
                { canForwardMessages: et } = (0, _.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                en = (0, I.a)(n),
                { enabled: ei } = y.Z.useExperiment({ location: 'message_utilities' }),
                el = (0, c.e7)([P.Z], () => null != P.Z.getSavedMessage(t.id, n.id)),
                er = (0, Q.Z)(),
                es = (0, c.e7)([m.Z], () => m.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: G,
                canEdit: K,
                canDelete: B,
                canReport: F,
                canReply: b,
                canStartThread: S,
                canViewThread: T,
                canForward: et && en,
                canCopy: H.wS,
                hasDeveloperMode: C,
                canReact: !q && g,
                canPublish: X,
                canConfigureJoin: ee,
                isExpanded: er && !es && !i && !l && !r,
                showEmojiPicker: i,
                showEmojiBurstPicker: l,
                showMoreUtilities: r,
                showMessageBookmarksActions: ei,
                isMessageBookmark: el,
                setPopout: s,
                isFocused: a,
                isGuildInviteReminder: n.type === $.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        eo = l.useCallback(() => {
            !k &&
                B.default.track($.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                et({ moreUtilities: !k });
        }, [k, et, n]),
        ec = l.useCallback(() => {
            et({ emojiPicker: !F });
        }, [F, et]),
        eu = (0, M.$R)(t),
        eh = n.hasFlag($.iLy.CROSSPOSTED),
        [em, ep] = (0, f.cv)(N ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ef = em === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [eg, eC] = l.useState(!1),
        ex = l.useCallback(() => {
            eC(!0);
        }, []),
        ev = l.useCallback(() => {
            eC(!1);
        }, []),
        e_ = l.useCallback(
            (e, t) => {
                ep(ee.L.TAKE_ACTION), (0, q.ts)(e, t);
            },
            [ep]
        ),
        { canShowReactionsOnMessageHover: eI } = C.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    return (
        C.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                j
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              r && ei
                                  ? (0, i.jsx)(
                                        K.sF,
                                        {
                                            label: en.intl.string(en.t.zBoHlZ),
                                            icon: d.IdIcon,
                                            onClick: (e) => (0, q.F4)(t, n, e)
                                        },
                                        'copy-id'
                                    )
                                  : null,
                              r && !el
                                  ? (0, i.jsx)(
                                        K.sF,
                                        {
                                            label: en.intl.string(en.t.WqhZsr),
                                            icon: d.LinkIcon,
                                            onClick: () => (0, q.fB)(t, n)
                                        },
                                        'copy-link'
                                    )
                                  : null,
                              v
                                  ? (0, i.jsx)(
                                        K.sF,
                                        {
                                            label: en.intl.string(en.t.NpHUi4),
                                            icon: d.CircleQuestionIcon,
                                            onClick: () => (0, q.zW)(t)
                                        },
                                        'configure'
                                    )
                                  : null,
                              eu
                                  ? (0, i.jsx)(
                                        K.sF,
                                        {
                                            label: en.intl.string(en.t.RpE9k5),
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
                                            label: J ? en.intl.string(en.t.LHUP9P) : en.intl.string(en.t['9p3D9v']),
                                            icon: J ? d.BookmarkIcon : d.BookmarkOutlineIcon,
                                            onClick: () => (J ? (0, q.eM)(t, n) : (0, q.dF)(t, n))
                                        },
                                        'bookmark'
                                    )
                                  : null,
                              s
                                  ? (0, i.jsx)(
                                        K.sF,
                                        {
                                            label: n.pinned ? en.intl.string(en.t['Bse+Fx']) : en.intl.string(en.t['CvQ18/']),
                                            icon: d.PinIcon,
                                            onClick: (e) => (0, q.rY)(t, n, e)
                                        },
                                        'pin'
                                    )
                                  : null,
                              S && N
                                  ? (0, i.jsx)(
                                        K.sF,
                                        {
                                            label: en.intl.string(en.t.rBIGBA),
                                            icon: d.ThreadIcon,
                                            onClick: () => (0, q.gK)(t, n)
                                        },
                                        'thread'
                                    )
                                  : null,
                              b && h
                                  ? (0, i.jsx)(
                                        K.sF,
                                        {
                                            label: en.intl.string(en.t['5IEsGx']),
                                            icon: d.ArrowAngleLeftUpIcon,
                                            onClick: (e) => (0, q.HH)(t, n, e)
                                        },
                                        'reply-self'
                                    )
                                  : null
                          ]
                      })
                    : null,
                x && !el
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              eI && !j
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(ea, {
                                                channel: t,
                                                message: n
                                            }),
                                            (0, i.jsx)(K.fO, {})
                                        ]
                                    })
                                  : null,
                              (0, i.jsx)(X.Z, {
                                  togglePopout: ec,
                                  renderEmojiPicker: ed,
                                  shouldShow: F,
                                  isFocused: er,
                                  channel: t,
                                  message: n
                              })
                          ]
                      })
                    : null,
                b && !h
                    ? (0, i.jsx)(
                          K.sF,
                          {
                              label: en.intl.string(en.t['5IEsGx']),
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
                              label: en.intl.string(en.t.bt75u7),
                              icon: d.PencilIcon,
                              onClick: () => (0, q.Hd)(t, n)
                          },
                          'edit'
                      )
                    : null,
                N
                    ? (0, i.jsx)(
                          K.sF,
                          {
                              label: en.intl.string(en.t.I3ltXF),
                              icon: E.Z,
                              onClick: () => e_(t, n),
                              onTooltipShow: ex,
                              onTooltipHide: ev,
                              showNewBadge: !eg && ef
                          },
                          'forward'
                      )
                    : null,
                S && !N
                    ? (0, i.jsx)(
                          K.sF,
                          {
                              label: en.intl.string(en.t.rBIGBA),
                              icon: d.ThreadIcon,
                              onClick: () => (0, q.gK)(t, n)
                          },
                          'thread'
                      )
                    : null,
                !S && T
                    ? (0, i.jsx)(
                          K.sF,
                          {
                              label: en.intl.string(en.t['39d0Wl']),
                              icon: d.ThreadIcon,
                              onClick: () => (0, q.qe)(t, n)
                          },
                          'view-thread'
                      )
                    : null,
                g
                    ? (0, i.jsx)(
                          K.sF,
                          {
                              label: eh ? en.intl.string(en.t['1kWJAg']) : en.intl.string(en.t['MFGE5+']),
                              icon: d.AnnouncementsIcon,
                              onClick: () => (0, q.Xl)(t, n),
                              disabled: eh
                          },
                          'publish'
                      )
                    : null,
                a && (el || j)
                    ? (0, i.jsx)(
                          K.sF,
                          {
                              label: en.intl.string(en.t.oyYWHB),
                              icon: d.TrashIcon,
                              onClick: (e) => (0, q.$Z)(t, n, e),
                              dangerous: !0,
                              separator: !j
                          },
                          'delete'
                      )
                    : null,
                j && a
                    ? null
                    : (0, i.jsx)(d.Popout, {
                          renderPopout: (e) => {
                              let { updatePosition: l, closePopout: r } = e;
                              return (0, i.jsx)(es, {
                                  channel: t,
                                  message: n,
                                  canReport: o,
                                  onClose: r,
                                  updatePosition: l
                              });
                          },
                          shouldShow: k,
                          onRequestClose: eo,
                          position: 'left',
                          align: 'top',
                          animation: d.Popout.Animation.NONE,
                          children: (e, t) => {
                              let { onClick: n, ...l } = e,
                                  { isShown: r } = t;
                              return (0, i.jsx)(
                                  K.sF,
                                  {
                                      label: en.intl.string(en.t.UKOtz8),
                                      icon: d.MoreHorizontalIcon,
                                      selected: r,
                                      onClick: eo,
                                      ...l
                                  },
                                  'more'
                              );
                          }
                      })
            ]
        })
    );
}
function ec(e) {
    let { channel: t, message: n } = e,
        l = (0, c.e7)([b.Z], () => null != b.Z.getMessage(n.id), [n.id]),
        r = null == n.interaction || (null != n.interactionData && (0, S.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !l &&
                r &&
                (0, i.jsx)(
                    K.sF,
                    {
                        label: en.intl.string(en.t['5911LS']),
                        icon: d.RetryIcon,
                        onClick: () => (0, q.mG)(t, n)
                    },
                    'retry'
                ),
            (0, i.jsx)(
                K.sF,
                {
                    label: en.intl.string(en.t.oyYWHB),
                    icon: d.TrashIcon,
                    onClick: (e) => (0, q.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function eu(e) {
    let { type: t, emoji: n, channel: i, message: l, location: r, isBurst: s = !1 } = e;
    if (null == n) return;
    let a = (0, N.g1)(n);
    'add' === t
        ? (0, T.rU)(i.id, l.id, a, r, { burst: s })
        : (0, T.WO)({
              channelId: i.id,
              messageId: l.id,
              emoji: a,
              location: r,
              options: { burst: s }
          });
}
function ed(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = {
            openPopoutType: 'message_reaction_emoji_picker',
            ...(l && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
                section: (0, N.s4)(e),
                object: $.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(j.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, l, r) => {
            eu({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: T.TW.MESSAGE_REACTION_PICKER,
                isBurst: r
            }),
                l && (r ? o()(n, 150)() : n());
        },
        analyticsOverride: r,
        messageId: t.id
    });
}
t.Z = l.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: r } = e,
        a = (0, c.e7)([k.Z], () => k.Z.isEditing(t.id, n.id), [t.id, n.id]),
        o = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === $.yb.SEND_FAILED
                ? (0, i.jsx)(ec, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        u = (function (e) {
            let { message: t } = e;
            return t.state !== $.yb.SEND_FAILED ? (0, i.jsx)(eo, { ...e }) : null;
        })(e);
    return a || (null == o && null == u)
        ? null
        : (0, i.jsx)('div', {
              className: s()(e.className, {
                  [ei.container]: !0,
                  [ei.isHeader]: l,
                  [ei.isReply]: r
              }),
              onClick: er,
              onContextMenu: er,
              role: 'group',
              'aria-label': en.intl.string(en.t.Lv7LxM),
              children: (0, i.jsxs)(K.ZP, {
                  className: e.innerClassName,
                  children: [o, u]
              })
          });
});
