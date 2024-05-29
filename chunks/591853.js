"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return ed
  },
  PopoutContent: function() {
    return eg
  },
  PopoutInteractionsContainer: function() {
    return eh
  },
  PopoutReactor: function() {
    return em
  },
  PrimaryActionButton: function() {
    return eT
  },
  PrimaryActionPopoutReactor: function() {
    return e_
  },
  StreamingPopoutContent: function() {
    return eS
  },
  VoiceChannelPopoutReactor: function() {
    return eI
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r);
n("699581");
var u = n("194048"),
  d = n("442837"),
  c = n("524437"),
  f = n("692547"),
  h = n("662645"),
  m = n("176743"),
  p = n("465270"),
  E = n("788698"),
  C = n("718671"),
  g = n("352903"),
  S = n("690172"),
  _ = n("481060"),
  T = n("493683"),
  I = n("475179"),
  A = n("287734"),
  v = n("872810"),
  N = n("607070"),
  x = n("220779"),
  M = n("201133"),
  R = n("605236"),
  y = n("543241"),
  L = n("318374"),
  O = n("258609"),
  j = n("102172"),
  P = n("871118"),
  D = n("359110"),
  b = n("12168"),
  U = n("592125"),
  F = n("430824"),
  w = n("496675"),
  k = n("699516"),
  B = n("9156"),
  H = n("979651"),
  G = n("938475"),
  V = n("346656"),
  W = n("682864"),
  Y = n("409216"),
  z = n("368666"),
  K = n("626135"),
  Z = n("768581"),
  q = n("5192"),
  X = n("485267"),
  Q = n("71585"),
  J = n("192918"),
  $ = n("571243"),
  ee = n("69259"),
  et = n("206295"),
  en = n("111386"),
  ea = n("43205"),
  el = n("469153"),
  es = n("206583"),
  ei = n("981631"),
  er = n("689938"),
  eo = n("936183");

function eu(e) {
  return async function() {
    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    try {
      return await e(...n)
    } catch (e) {
      throw e
    }
  }
}

function ed(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, _.useFocusLock)(n), (0, a.jsx)("div", {
    className: eo.popout,
    ref: n,
    children: t
  })
}

function ec(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    className: l,
    style: s = {}
  } = e, {
    primaryColor: r,
    secondaryColor: o
  } = (0, et.default)(n);
  return (0, a.jsx)("div", {
    className: i()(eo.hero, "theme-".concat(ei.ThemeTypes.DARK), l),
    style: {
      background: "linear-gradient(45deg, ".concat(r, ", ").concat(o, ")"),
      ...s
    },
    children: t
  })
}
let ef = l.createContext(null);

function eh(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: eo.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: eo.interactionsContainer,
      children: (0, a.jsx)(ef.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function em(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: s,
    reactionImageAltText: i,
    closePopout: r,
    entry: u,
    requestId: f
  } = e, m = (0, d.useStateFromStores)([Q.default], () => Q.default.isChannelReplyMode()), [p, E] = l.useState(null), C = (0, d.useStateFromStores)([w.default], () => w.default.can(ei.Permissions.SEND_MESSAGES, t)), S = (0, $.useIsEligibleForMemberlistOneClickReply)({
    location: "PopoutReactor"
  }), [I, A] = l.useState(!1), [v, N] = l.useState(!1), y = "#".concat(t.name), L = q.default.getName(t.guild_id, t.id, n), O = m ? er.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : er.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, j = async e => {
    if (null != e) {
      if (K.default.track(ei.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: es.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), S) {
        let l;
        if ((0, R.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), A(!0), N(!1), m) l = t;
        else {
          var a;
          let e = await T.default.getOrEnsurePrivateChannel(n.id);
          l = null !== (a = U.default.getChannel(e)) && void 0 !== a ? a : null
        }
        return o()(null != l, "Send channel must be defined"), D({
          reply: ":".concat(e.name, ":"),
          sendToChannel: l,
          onComplete: () => {
            N(!0), setTimeout(() => {
              A(!1), r()
            }, 600)
          },
          interactionType: es.ContentInventoryInteractionTypes.REACTION_EMOJI_REACT_SENT
        })
      }
      null != p && (p.insertEmoji(e, !1, !1), p.focus())
    }
  }, P = async e => {
    let a;
    if (S && (0, R.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), m) a = t;
    else {
      let e = await T.default.openPrivateChannel(n.id, !1, !1),
        t = U.default.getChannel(e);
      o()(null != t, "DM channel must be defined"), a = t
    }
    let l = a.type === ei.ChannelTypes.DM ? es.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : es.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
    return D({
      reply: e,
      sendToChannel: a,
      onComplete: r,
      interactionType: l
    })
  }, D = async e => {
    let {
      reply: n,
      sendToChannel: a,
      onComplete: l,
      interactionType: r
    } = e, d = await eu(s)(a.id);
    o()(null != d, "Reaction image must be defined"), await (0, M.sendReply)({
      file: d,
      channel: a,
      altText: i,
      reply: n
    }), (0, ee.trackInteraction)(r, {
      entry: u,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: f,
      destinationChannelId: a.id,
      destinationGuildId: a.guild_id
    }), null == l || l()
  };
  return (0, a.jsxs)("div", {
    style: {
      pointerEvents: I ? "none" : "all"
    },
    children: [(0, a.jsx)(el.default, {
      sent: v,
      shown: I,
      className: eo.toastContainer
    }), S ? (0, a.jsx)(en.default, {
      children: (0, a.jsxs)("div", {
        className: eo.emojiHotrailShareToChannel,
        children: [(0, a.jsx)(ep, {
          channel: t,
          onClickSuggestion: j
        }), (0, a.jsx)(x.ReactionPickerButton, {
          onSelectEmoji: j
        })]
      })
    }) : (0, a.jsx)("div", {
      className: eo.emojiHotrailShareToChannel,
      children: (0, a.jsx)(ep, {
        channel: t,
        onClickSuggestion: j
      })
    }), (0, a.jsxs)("div", {
      className: eo.inputContainerShareToChannel,
      children: [C && (0, a.jsx)(_.Tooltip, {
        text: O,
        children: e => (0, a.jsx)(_.Clickable, {
          ...e,
          className: eo.shareToChannelButton,
          onClick: X.toggleContentInventoryReplyMode,
          children: m ? (0, a.jsx)(g.TextIcon, {
            width: 20,
            height: 20
          }) : (0, a.jsx)(h.AtIcon, {
            width: 20,
            height: 20
          })
        })
      }), (0, a.jsx)(x.ReplyInput, {
        placeholder: er.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: m ? y : "@".concat(L)
        }),
        onEnter: P,
        setEditorRef: e => E(e),
        channel: m ? t : void 0
      })]
    })]
  })
}
let ep = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, [s, i] = l.useState(!1);
  l.useEffect(() => {
    i(!0)
  }, []);
  let r = !!N.default.keyboardModeEnabled && !s,
    o = (0, y.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
      emoji: e,
      url: e.url
    } : {
      emoji: e,
      url: (0, Z.getEmojiURL)({
        id: e.id,
        animated: e.animated,
        size: 58
      })
    });
  return (0, a.jsx)(a.Fragment, {
    children: o.map(e => {
      let {
        emoji: t,
        url: l
      } = e;
      return null != l ? (0, a.jsx)("div", {
        children: (0, a.jsx)(_.TooltipContainer, {
          text: er.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          position: "top",
          "aria-label": er.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          color: _.Tooltip.Colors.PRIMARY,
          shouldShow: !r && void 0,
          children: (0, a.jsx)(b.HotBarEmoji, {
            emoji: t,
            isDisabled: !s,
            onClick: () => n(t),
            className: eo.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function eE(e) {
  let {
    channel: t,
    userDescription: n,
    headerIcons: l,
    entry: s
  } = e, r = t.guild_id, {
    displayParticipants: o,
    participant1: u,
    participant2: d,
    numOtherParticipants: c
  } = (0, J.default)(s, 3);
  return (0, a.jsxs)("div", {
    className: eo.popoutContentHeader,
    children: [(0, a.jsxs)("div", {
      className: eo.popoutUserContainer,
      children: [(0, a.jsx)(L.default, {
        maxUsers: 3,
        users: o,
        size: _.AvatarSizes.SIZE_24,
        avatarClassName: eo.popoutStackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }), (0, a.jsx)(W.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(_.Heading, {
        variant: "heading-sm/normal",
        className: eo.popoutTextSecondary,
        children: n.format({
          user1: q.default.getName(r, t.id, u),
          user2: q.default.getName(r, t.id, d),
          countOthers: c,
          nameHook: (e, t) => (0, a.jsx)(_.Text, {
            variant: "text-sm/medium",
            className: i()(eo.popoutUsername, eo.popoutTextPrimary),
            children: e
          }, t)
        })
      })]
    }), (0, a.jsx)("div", {
      className: eo.popoutHeaderIcons,
      children: l
    })]
  })
}

function eC(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? (0, a.jsx)(a.Fragment, {
    children: t
  }) : (0, a.jsx)(_.Clickable, {
    className: eo.maybeClickable,
    onClick: n,
    children: t
  })
}

function eg(e) {
  let {
    thumbnailSrc: t,
    thumbnailTitle: n,
    title: l,
    subtitle: s,
    badges: i,
    children: r,
    onClickTitle: o,
    onClickSubtitle: u,
    ...d
  } = e;
  return (0, a.jsxs)(ec, {
    backgroundImgSrc: t,
    children: [(0, a.jsx)(eE, {
      ...d
    }), (0, a.jsxs)("div", {
      className: eo.popoutContentBody,
      children: [(0, a.jsx)("div", {
        className: eo.popoutThumbnailContainer,
        children: (0, a.jsx)(ea.ContentImage, {
          size: 72,
          alt: n,
          src: t,
          className: eo.contentImage
        })
      }), (0, a.jsx)(W.default, {
        size: 16,
        horizontal: !0
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(eC, {
          onClick: o,
          children: (0, a.jsx)(_.Heading, {
            variant: "heading-md/medium",
            className: eo.popoutTextPrimary,
            lineClamp: 3,
            children: l
          })
        }), null != s ? (0, a.jsx)(eC, {
          onClick: u,
          children: (0, a.jsx)(_.Text, {
            variant: "text-md/normal",
            className: eo.popoutTextSecondary,
            children: s
          })
        }) : null, (0, a.jsx)(W.default, {
          size: 8
        }), i]
      })]
    }), r]
  })
}

function eS(e) {
  let {
    title: t,
    badges: n,
    stream: s,
    ...i
  } = e, r = (0, d.useStateFromStores)([U.default], () => U.default.getChannel(null == s ? void 0 : s.channelId)), [o] = l.useMemo(() => (0, j.canWatchStream)(r, H.default, F.default, w.default, O.default), [r]);
  return null == s ? null : (0, a.jsxs)(ec, {
    className: eo.streamingPopoutHero,
    children: [(0, a.jsx)(eE, {
      ...i,
      headerIcons: (0, a.jsx)(z.default, {
        size: z.default.Sizes.SMALL
      })
    }), (0, a.jsx)(W.default, {
      size: 16
    }), (0, a.jsx)(eC, {
      onClick: o ? () => {
        A.default.selectVoiceChannel(s.channelId), (0, v.watchStreamAndTransitionToStream)(s)
      } : void 0,
      children: (0, a.jsxs)("div", {
        style: {
          position: "relative"
        },
        children: [(0, a.jsx)(P.default, {
          className: eo.streamingPopoutHero,
          stream: s
        }), o && (0, a.jsx)("div", {
          className: eo.streamCTA,
          children: (0, a.jsx)(_.Text, {
            variant: "text-md/normal",
            children: er.default.Messages.WATCH_STREAM
          })
        })]
      })
    }), (0, a.jsx)(W.default, {
      size: 16
    }), (0, a.jsx)(_.Heading, {
      variant: "heading-md/semibold",
      className: eo.popoutTextPrimary,
      lineClamp: 3,
      children: t
    }), (0, a.jsx)(W.default, {
      size: 8
    }), n]
  })
}

function e_(e) {
  let {
    user: t,
    entry: n,
    channel: s,
    children: i,
    header: r,
    requestId: u,
    reactionImageAltText: d,
    generateReactionImage: c
  } = e, h = q.default.getName(s.guild_id, s.id, t), [p, C] = l.useState(!1), g = async e => {
    let a = await T.default.openPrivateChannel(t.id, !1, !1),
      l = U.default.getChannel(a);
    o()(null != l, "DM channel must be defined");
    let i = await eu(c)(l.id);
    o()(null != i, "Reaction image must be defined"), await (0, M.sendReply)({
      file: i,
      channel: l,
      altText: d,
      reply: e
    }), (0, ee.trackInteraction)(es.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT, {
      entry: n,
      channelId: s.id,
      guildId: s.guild_id,
      requestId: u
    })
  };
  return (0, a.jsxs)("div", {
    children: [r, null != r && (0, a.jsx)("div", {
      className: eo.primaryActionPopoutDivider
    }), p ? (0, a.jsx)(x.ReplyInput, {
      placeholder: er.default.Messages.TEXTAREA_PLACEHOLDER.format({
        channel: "@".concat(h)
      }),
      onEnter: g,
      showEmojiButton: !0,
      renderAttachButton: () => (0, a.jsx)(_.Clickable, {
        onClick: () => C(!1),
        className: eo.primaryActionPopoutMessageCloseIcon,
        children: (0, a.jsx)(E.CloseSmallIcon, {
          width: 20,
          height: 20,
          color: f.default.colors.ICON_PRIMARY
        })
      })
    }) : (0, a.jsxs)("div", {
      className: eo.primaryActionPopoutActionButtons,
      children: [(0, a.jsxs)(_.Button, {
        className: eo.secondaryButton,
        color: _.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: () => C(!0),
        innerClassName: eo.iconButton,
        size: _.Button.Sizes.LARGE,
        children: [(0, a.jsx)(m.ChatIcon, {
          width: 20,
          height: 20,
          colorClass: eo.secondaryText
        }), (0, a.jsx)(_.Text, {
          variant: "text-md/semibold",
          className: eo.secondaryText,
          children: er.default.Messages.USER_POPOUT_MESSAGE
        })]
      }), i]
    })]
  })
}

function eT(e) {
  let {
    IconComponent: t,
    label: n,
    ...l
  } = e;
  return (0, a.jsxs)(_.Button, {
    ...l,
    fullWidth: !0,
    innerClassName: null != t ? eo.iconButton : void 0,
    size: _.Button.Sizes.LARGE,
    children: [null != t ? (0, a.jsx)(t, {
      width: 20,
      height: 20,
      color: f.default.colors.WHITE
    }) : null, (0, a.jsx)(_.Text, {
      variant: "text-md/semibold",
      color: "always-white",
      children: n
    })]
  })
}

function eI(e) {
  let {
    voiceChannel: t,
    isStreaming: n = !1,
    ...s
  } = e, {
    channel: i,
    entry: r,
    requestId: o
  } = s, c = (0, d.useStateFromStores)([F.default], () => F.default.getGuild(t.guild_id)), h = (0, d.useStateFromStoresArray)([G.default], () => G.default.getVoiceStatesForChannel(t), [t]), m = l.useMemo(() => {
    for (let e of h) {
      let t = U.default.getDMFromUserId(e.user.id),
        n = null != t && B.default.isChannelMuted(null, t),
        a = k.default.isBlocked(e.user.id);
      if (n || a) return !0
    }
    return !1
  }, [h]);
  if (null == c) return null;
  let E = () => {
      I.default.updateChatOpen(t.id, !0), (0, D.transitionToChannel)(t.id), (0, ee.trackInteraction)(es.ContentInventoryInteractionTypes.VOICE_CHANNEL_PREVIEWED, {
        entry: r,
        channelId: i.id,
        guildId: i.guild_id,
        requestId: o,
        destinationChannelId: t.id,
        destinationGuildId: t.guild_id
      })
    },
    g = (0, a.jsxs)("div", {
      className: eo.voiceChannelPopoutReactorHeader,
      children: [(0, a.jsxs)("div", {
        className: eo.voiceChannelPopoutReactorChannel,
        children: [(0, a.jsx)(V.default, {
          guild: c,
          size: V.default.Sizes.SMOL,
          className: eo.voiceChannelGuildIcon,
          active: !0
        }), (0, a.jsx)(p.ChevronSmallRightIcon, {
          width: 12,
          height: 12,
          color: f.default.colors.INTERACTIVE_NORMAL
        }), (0, a.jsx)(S.VoiceNormalIcon, {
          width: 16,
          height: 16,
          color: f.default.colors.TEXT_NORMAL
        }), (0, a.jsx)(_.Text, {
          variant: "text-sm/medium",
          color: "text-normal",
          children: t.name
        })]
      }), (0, a.jsx)(Y.default, {
        guildId: c.id,
        users: h,
        max: 3,
        renderUser: (e, t) => (0, a.jsx)(_.Avatar, {
          src: e.user.getAvatarURL(c.id, 16),
          size: _.AvatarSizes.SIZE_16,
          "aria-label": "avatar",
          className: t
        }),
        renderMoreUsers: e => (0, a.jsx)("div", {
          className: eo.voiceChannelAdditionalParticipants,
          children: (0, a.jsx)(_.Text, {
            variant: "text-xxs/semibold",
            color: "text-normal",
            children: e
          })
        })
      })]
    });
  return (0, a.jsx)(e_, {
    header: g,
    ...s,
    children: (0, a.jsx)(_.Tooltip, {
      "aria-label": er.default.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING,
      text: (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.WarningIcon, {
          width: 13,
          height: 13,
          className: eo.popoutBlockedWarningIcon
        }), er.default.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING]
      }),
      shouldShow: m,
      children: e => (0, a.jsx)(eT, {
        ...e,
        color: _.Button.Colors.GREEN,
        onClick: E,
        IconComponent: n ? C.ScreenIcon : S.VoiceNormalIcon,
        children: er.default.Messages.PREVIEW
      })
    })
  })
}