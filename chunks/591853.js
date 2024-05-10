"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return ea
  },
  PopoutContent: function() {
    return ed
  },
  PopoutInteractionsContainer: function() {
    return ei
  },
  PopoutReactor: function() {
    return er
  },
  StreamingPopoutContent: function() {
    return ec
  },
  VoiceChannelPopoutReactor: function() {
    return ef
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
  A = n("220779"),
  N = n("201133"),
  v = n("605236"),
  x = n("543241"),
  M = n("318374"),
  R = n("359110"),
  y = n("12168"),
  L = n("592125"),
  O = n("430824"),
  j = n("496675"),
  P = n("699516"),
  D = n("9156"),
  b = n("938475"),
  U = n("346656"),
  F = n("682864"),
  w = n("409216"),
  k = n("368666"),
  H = n("626135"),
  B = n("768581"),
  G = n("5192"),
  V = n("485267"),
  W = n("71585"),
  Y = n("192918"),
  z = n("571243"),
  K = n("69259"),
  Z = n("206295"),
  q = n("111386"),
  X = n("43205"),
  Q = n("469153"),
  J = n("206583"),
  $ = n("981631"),
  ee = n("689938"),
  et = n("936183");

function en(e) {
  return async function() {
    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    try {
      return await e(...n)
    } catch (e) {
      throw e
    }
  }
}

function ea(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, _.useFocusLock)(n), (0, a.jsx)("div", {
    className: et.popout,
    ref: n,
    children: t
  })
}

function el(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    style: l = {}
  } = e, {
    primaryColor: s,
    secondaryColor: r
  } = (0, Z.default)(n);
  return (0, a.jsx)("div", {
    className: i()(et.hero, "theme-".concat($.ThemeTypes.DARK)),
    style: {
      background: "linear-gradient(45deg, ".concat(s, ", ").concat(r, ")"),
      ...l
    },
    children: t
  })
}
let es = l.createContext(null);

function ei(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: et.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: et.interactionsContainer,
      children: (0, a.jsx)(es.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function er(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: s,
    reactionImageAltText: i,
    closePopout: r,
    entry: u,
    requestId: f
  } = e, m = (0, d.useStateFromStores)([W.default], () => W.default.isChannelReplyMode()), [p, E] = l.useState(null), C = (0, d.useStateFromStores)([j.default], () => j.default.can($.Permissions.SEND_MESSAGES, t)), S = (0, z.useIsEligibleForMemberlistOneClickReply)({
    location: "PopoutReactor"
  }), [I, x] = l.useState(!1), [M, R] = l.useState(!1), y = "#".concat(t.name), O = G.default.getName(t.guild_id, t.id, n), P = m ? ee.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : ee.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, D = async e => {
    if (null != e) {
      if (H.default.track($.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: J.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), S) {
        let l;
        if ((0, v.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), x(!0), R(!1), m) l = t;
        else {
          var a;
          let e = await T.default.getOrEnsurePrivateChannel(n.id);
          l = null !== (a = L.default.getChannel(e)) && void 0 !== a ? a : null
        }
        return o()(null != l, "Send channel must be defined"), U({
          reply: ":".concat(e.name, ":"),
          sendToChannel: l,
          onComplete: () => {
            R(!0), setTimeout(() => {
              x(!1), r()
            }, 600)
          },
          interactionType: J.ContentInventoryInteractionTypes.REACTION_EMOJI_REACT_SENT
        })
      }
      null != p && (p.insertEmoji(e, !1, !1), p.focus())
    }
  }, b = async e => {
    let a;
    if (S && (0, v.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), m) a = t;
    else {
      let e = await T.default.openPrivateChannel(n.id, !1, !1),
        t = L.default.getChannel(e);
      o()(null != t, "DM channel must be defined"), a = t
    }
    let l = a.type === $.ChannelTypes.DM ? J.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : J.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
    return U({
      reply: e,
      sendToChannel: a,
      onComplete: r,
      interactionType: l
    })
  }, U = async e => {
    let {
      reply: n,
      sendToChannel: a,
      onComplete: l,
      interactionType: r
    } = e, d = await en(s)(a.id);
    o()(null != d, "Reaction image must be defined"), await (0, N.sendReply)({
      file: d,
      channel: a,
      altText: i,
      reply: n
    }), (0, K.trackInteraction)(r, {
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
    children: [(0, a.jsx)(Q.default, {
      sent: M,
      shown: I,
      className: et.toastContainer
    }), S ? (0, a.jsx)(q.default, {
      children: (0, a.jsxs)("div", {
        className: et.emojiHotrailShareToChannel,
        children: [(0, a.jsx)(eo, {
          channel: t,
          onClickSuggestion: D
        }), (0, a.jsx)(A.ReactionPickerButton, {
          onSelectEmoji: D
        })]
      })
    }) : (0, a.jsx)("div", {
      className: et.emojiHotrailShareToChannel,
      children: (0, a.jsx)(eo, {
        channel: t,
        onClickSuggestion: D
      })
    }), (0, a.jsxs)("div", {
      className: et.inputContainerShareToChannel,
      children: [C && (0, a.jsx)(_.Tooltip, {
        text: P,
        children: e => (0, a.jsx)(_.Clickable, {
          ...e,
          className: et.shareToChannelButton,
          onClick: V.toggleContentInventoryReplyMode,
          children: m ? (0, a.jsx)(g.TextIcon, {
            width: 20,
            height: 20
          }) : (0, a.jsx)(h.AtIcon, {
            width: 20,
            height: 20
          })
        })
      }), (0, a.jsx)(A.ReplyInput, {
        placeholder: ee.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: m ? y : "@".concat(O)
        }),
        onEnter: b,
        setEditorRef: e => E(e),
        channel: m ? t : void 0
      })]
    })]
  })
}
let eo = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, x.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
    emoji: e,
    url: e.url
  } : {
    emoji: e,
    url: (0, B.getEmojiURL)({
      id: e.id,
      animated: e.animated,
      size: 58
    })
  });
  return (0, a.jsx)(a.Fragment, {
    children: l.map(e => {
      let {
        emoji: t,
        url: l
      } = e;
      return null != l ? (0, a.jsx)("div", {
        children: (0, a.jsx)(_.TooltipContainer, {
          text: ee.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          position: "top",
          "aria-label": ee.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          color: _.Tooltip.Colors.PRIMARY,
          children: (0, a.jsx)(y.HotBarEmoji, {
            emoji: t,
            isDisabled: !1,
            onClick: () => n(t),
            className: et.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function eu(e) {
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
  } = (0, Y.default)(s, 3);
  return (0, a.jsxs)("div", {
    className: et.popoutContentHeader,
    children: [(0, a.jsxs)("div", {
      className: et.popoutUserContainer,
      children: [(0, a.jsx)(M.default, {
        maxUsers: 3,
        users: o,
        size: _.AvatarSizes.SIZE_24,
        avatarClassName: et.popoutStackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }), (0, a.jsx)(F.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(_.Heading, {
        variant: "heading-sm/normal",
        className: et.popoutTextSecondary,
        children: n.format({
          user1: G.default.getName(r, t.id, u),
          user2: G.default.getName(r, t.id, d),
          countOthers: c,
          nameHook: (e, t) => (0, a.jsx)(_.Text, {
            variant: "text-sm/medium",
            className: i()(et.popoutUsername, et.popoutTextPrimary),
            children: e
          }, t)
        })
      })]
    }), l]
  })
}

function ed(e) {
  let {
    thumbnailSrc: t,
    title: n,
    subtitle: l,
    badges: s,
    children: i,
    ...r
  } = e;
  return (0, a.jsxs)(el, {
    backgroundImgSrc: t,
    children: [(0, a.jsx)(eu, {
      ...r
    }), (0, a.jsxs)("div", {
      className: et.popoutContentBody,
      children: [(0, a.jsx)("div", {
        className: et.popoutThumbnailContainer,
        children: (0, a.jsx)(X.ContentImage, {
          size: 72,
          src: t,
          className: et.contentImage
        })
      }), (0, a.jsx)(F.default, {
        size: 16,
        horizontal: !0
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(_.Heading, {
          variant: "heading-md/medium",
          className: et.popoutTextPrimary,
          lineClamp: 3,
          children: n
        }), null != l ? (0, a.jsx)(_.Text, {
          variant: "text-md/normal",
          className: et.popoutTextSecondary,
          children: l
        }) : null, (0, a.jsx)(F.default, {
          size: 8
        }), s]
      })]
    }), i]
  })
}

function ec(e) {
  let {
    title: t,
    badges: n,
    streamPreviewSrc: l,
    ...s
  } = e;
  return (0, a.jsxs)(el, {
    style: {
      background: "linear-gradient(45deg, #24282B, #1A2020)"
    },
    children: [(0, a.jsx)(eu, {
      ...s,
      headerIcons: (0, a.jsx)(k.default, {
        size: k.default.Sizes.SMALL
      })
    }), (0, a.jsx)(F.default, {
      size: 16
    }), (0, a.jsx)("img", {
      src: l,
      className: et.popoutStreamImg,
      alt: ""
    }), (0, a.jsx)(F.default, {
      size: 16
    }), (0, a.jsx)(_.Heading, {
      variant: "heading-md/semibold",
      className: et.popoutTextPrimary,
      lineClamp: 3,
      children: t
    }), (0, a.jsx)(F.default, {
      size: 8
    }), n]
  })
}

function ef(e) {
  let {
    user: t,
    entry: n,
    voiceChannel: s,
    channel: i,
    requestId: r,
    reactionImageAltText: c,
    generateReactionImage: h,
    isStreaming: g = !1
  } = e, v = G.default.getName(i.guild_id, i.id, t), [x, M] = l.useState(!1), y = (0, d.useStateFromStores)([O.default], () => O.default.getGuild(s.guild_id)), j = (0, d.useStateFromStoresArray)([b.default], () => b.default.getVoiceStatesForChannel(s), [s]), F = l.useMemo(() => {
    for (let e of j) {
      let t = L.default.getDMFromUserId(e.user.id),
        n = null != t && D.default.isChannelMuted(null, t),
        a = P.default.isBlocked(e.user.id);
      if (n || a) return !0
    }
    return !1
  }, [j]), k = async e => {
    let a = await T.default.openPrivateChannel(t.id, !1, !1),
      l = L.default.getChannel(a);
    o()(null != l, "DM channel must be defined");
    let s = await en(h)(l.id);
    o()(null != s, "Reaction image must be defined"), await (0, N.sendReply)({
      file: s,
      channel: l,
      altText: c,
      reply: e
    }), (0, K.trackInteraction)(J.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT, {
      entry: n,
      channelId: i.id,
      guildId: i.guild_id,
      requestId: r
    })
  }, H = () => {
    I.default.updateChatOpen(s.id, !0), (0, R.transitionToChannel)(s.id), (0, K.trackInteraction)(J.ContentInventoryInteractionTypes.VOICE_CHANNEL_PREVIEWED, {
      entry: n,
      channelId: i.id,
      guildId: i.guild_id,
      requestId: r,
      destinationChannelId: s.id,
      destinationGuildId: s.guild_id
    })
  };
  return null == y ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: et.voiceChannelPopoutReactorHeader,
      children: [(0, a.jsxs)("div", {
        className: et.voiceChannelPopoutReactorChannel,
        children: [(0, a.jsx)(U.default, {
          guild: y,
          size: U.default.Sizes.SMOL,
          className: et.voiceChannelGuildIcon,
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
          children: s.name
        })]
      }), (0, a.jsx)(w.default, {
        guildId: y.id,
        users: j,
        max: 3,
        renderUser: (e, t) => (0, a.jsx)(_.Avatar, {
          src: e.user.getAvatarURL(y.id, 16),
          size: _.AvatarSizes.SIZE_16,
          "aria-label": "avatar",
          className: t
        }),
        renderMoreUsers: e => (0, a.jsx)("div", {
          className: et.voiceChannelAdditionalParticipants,
          children: (0, a.jsx)(_.Text, {
            variant: "text-xxs/semibold",
            color: "text-normal",
            children: e
          })
        })
      })]
    }), (0, a.jsx)("div", {
      className: et.voicePopoutDivider
    }), x ? (0, a.jsx)(A.ReplyInput, {
      placeholder: ee.default.Messages.TEXTAREA_PLACEHOLDER.format({
        channel: "@".concat(v)
      }),
      onEnter: k,
      showEmojiButton: !0,
      renderAttachButton: () => (0, a.jsx)(_.Clickable, {
        onClick: () => M(!1),
        className: et.voicePopoutMessageCloseIcon,
        children: (0, a.jsx)(E.CloseSmallIcon, {
          width: 20,
          height: 20,
          color: f.default.colors.ICON_PRIMARY
        })
      })
    }) : (0, a.jsxs)("div", {
      className: et.voicePopoutActionButtons,
      children: [(0, a.jsxs)(_.Button, {
        className: et.secondaryButton,
        color: _.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: () => M(!0),
        innerClassName: et.iconButton,
        size: _.Button.Sizes.LARGE,
        children: [(0, a.jsx)(m.ChatIcon, {
          width: 20,
          height: 20,
          colorClass: et.secondaryText
        }), (0, a.jsx)(_.Text, {
          variant: "text-md/semibold",
          className: et.secondaryText,
          children: ee.default.Messages.USER_POPOUT_MESSAGE
        })]
      }), (0, a.jsx)(_.Tooltip, {
        "aria-label": ee.default.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING,
        text: (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(u.WarningIcon, {
            width: 13,
            height: 13,
            className: et.popoutBlockedWarningIcon
          }), ee.default.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING]
        }),
        shouldShow: F,
        children: e => (0, a.jsxs)(_.Button, {
          ...e,
          color: _.Button.Colors.GREEN,
          onClick: H,
          fullWidth: !0,
          innerClassName: et.iconButton,
          size: _.Button.Sizes.LARGE,
          children: [g ? (0, a.jsx)(C.ScreenIcon, {
            width: 20,
            height: 20,
            color: f.default.colors.WHITE
          }) : (0, a.jsx)(S.VoiceNormalIcon, {
            width: 20,
            height: 20,
            color: f.default.colors.WHITE
          }), (0, a.jsx)(_.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            children: ee.default.Messages.PREVIEW
          })]
        })
      })]
    })]
  })
}