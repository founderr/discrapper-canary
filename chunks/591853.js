"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return Q
  },
  PopoutContent: function() {
    return el
  },
  PopoutInteractionsContainer: function() {
    return ee
  },
  PopoutReactor: function() {
    return et
  },
  StreamingPopoutContent: function() {
    return es
  },
  VoiceChannelPopoutReactor: function() {
    return ei
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r);
n("699581");
var u = n("442837"),
  d = n("524437"),
  c = n("692547"),
  f = n("662645"),
  h = n("176743"),
  m = n("465270"),
  p = n("788698"),
  E = n("718671"),
  C = n("352903"),
  g = n("690172"),
  S = n("481060"),
  _ = n("493683"),
  T = n("475179"),
  I = n("220779"),
  A = n("201133"),
  N = n("605236"),
  v = n("543241"),
  x = n("359110"),
  M = n("12168"),
  R = n("592125"),
  L = n("430824"),
  y = n("496675"),
  O = n("938475"),
  j = n("346656"),
  P = n("682864"),
  D = n("409216"),
  b = n("368666"),
  U = n("626135"),
  F = n("768581"),
  w = n("5192"),
  k = n("485267"),
  H = n("71585"),
  B = n("571243"),
  G = n("69259"),
  V = n("206295"),
  W = n("111386"),
  Y = n("43205"),
  z = n("469153"),
  K = n("206583"),
  Z = n("981631"),
  q = n("689938"),
  X = n("50928");

function Q(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, S.useFocusLock)(n), (0, a.jsx)("div", {
    className: X.popout,
    ref: n,
    children: t
  })
}

function J(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    style: l = {}
  } = e, {
    primaryColor: s,
    secondaryColor: r
  } = (0, V.default)(n);
  return (0, a.jsx)("div", {
    className: i()(X.hero, "theme-".concat(Z.ThemeTypes.DARK)),
    style: {
      background: "linear-gradient(45deg, ".concat(s, ", ").concat(r, ")"),
      ...l
    },
    children: t
  })
}
let $ = l.createContext(null);

function ee(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: X.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: X.interactionsContainer,
      children: (0, a.jsx)($.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function et(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: s,
    reactionImageAltText: i,
    closePopout: r,
    entry: c,
    requestId: h
  } = e, m = (0, u.useStateFromStores)([H.default], () => H.default.isChannelReplyMode()), [p, E] = l.useState(null), g = (0, u.useStateFromStores)([y.default], () => y.default.can(Z.Permissions.SEND_MESSAGES, t)), T = (0, B.useIsEligibleForMemberlistOneClickReply)({
    location: "PopoutReactor"
  }), [v, x] = l.useState(!1), [M, L] = l.useState(!1), O = "#".concat(t.name), j = w.default.getName(t.guild_id, t.id, n), P = m ? q.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : q.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, D = async e => {
    if (null != e) {
      if (U.default.track(Z.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: K.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), T) {
        let l;
        if ((0, N.markDismissibleContentAsDismissed)(d.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), x(!0), L(!1), m) l = t;
        else {
          var a;
          let e = await _.default.getOrEnsurePrivateChannel(n.id);
          l = null !== (a = R.default.getChannel(e)) && void 0 !== a ? a : null
        }
        return o()(null != l, "Send channel must be defined"), F({
          reply: ":".concat(e.name, ":"),
          sendToChannel: l,
          onComplete: () => {
            L(!0), setTimeout(() => {
              x(!1), r()
            }, 600)
          },
          interactionType: K.ContentInventoryInteractionTypes.REACTION_EMOJI_REACT_SENT
        })
      }
      null != p && (p.insertEmoji(e, !1, !1), p.focus())
    }
  }, b = async e => {
    let a;
    if (T && (0, N.markDismissibleContentAsDismissed)(d.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), m) a = t;
    else {
      let e = await _.default.openPrivateChannel(n.id, !1, !1),
        t = R.default.getChannel(e);
      o()(null != t, "DM channel must be defined"), a = t
    }
    let l = a.type === Z.ChannelTypes.DM ? K.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : K.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
    return F({
      reply: e,
      sendToChannel: a,
      onComplete: r,
      interactionType: l
    })
  }, F = async e => {
    let {
      reply: n,
      sendToChannel: a,
      onComplete: l,
      interactionType: r
    } = e, u = await s(a.id);
    o()(null != u, "Reaction image must be defined"), await (0, A.sendReply)({
      file: u,
      channel: a,
      altText: i,
      reply: n
    }), (0, G.trackInteraction)(r, {
      entry: c,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: h,
      destinationChannelId: a.id,
      destinationGuildId: a.guild_id
    }), null == l || l()
  };
  return (0, a.jsxs)("div", {
    style: {
      pointerEvents: v ? "none" : "all"
    },
    children: [(0, a.jsx)(z.default, {
      sent: M,
      shown: v,
      className: X.toastContainer
    }), T ? (0, a.jsx)(W.default, {
      children: (0, a.jsxs)("div", {
        className: X.emojiHotrailShareToChannel,
        children: [(0, a.jsx)(en, {
          channel: t,
          onClickSuggestion: D
        }), (0, a.jsx)(I.ReactionPickerButton, {
          onSelectEmoji: D
        })]
      })
    }) : (0, a.jsx)("div", {
      className: X.emojiHotrailShareToChannel,
      children: (0, a.jsx)(en, {
        channel: t,
        onClickSuggestion: D
      })
    }), (0, a.jsxs)("div", {
      className: X.inputContainerShareToChannel,
      children: [g && (0, a.jsx)(S.Tooltip, {
        text: P,
        children: e => (0, a.jsx)(S.Clickable, {
          ...e,
          className: X.shareToChannelButton,
          onClick: k.toggleContentInventoryReplyMode,
          children: m ? (0, a.jsx)(C.TextIcon, {
            width: 20,
            height: 20
          }) : (0, a.jsx)(f.AtIcon, {
            width: 20,
            height: 20
          })
        })
      }), (0, a.jsx)(I.ReplyInput, {
        placeholder: q.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: m ? O : "@".concat(j)
        }),
        onEnter: b,
        setEditorRef: e => E(e),
        channel: m ? t : void 0
      })]
    })]
  })
}
let en = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, v.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
    emoji: e,
    url: e.url
  } : {
    emoji: e,
    url: (0, F.getEmojiURL)({
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
        children: (0, a.jsx)(S.TooltipContainer, {
          text: q.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          position: "top",
          "aria-label": q.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          color: S.Tooltip.Colors.PRIMARY,
          children: (0, a.jsx)(M.HotBarEmoji, {
            emoji: t,
            isDisabled: !1,
            onClick: () => n(t),
            className: X.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function ea(e) {
  let {
    user: t,
    channel: n,
    userDescription: l,
    headerIcons: s
  } = e, i = n.guild_id, r = w.default.getName(i, n.id, t);
  return (0, a.jsxs)("div", {
    className: X.popoutContentHeader,
    children: [(0, a.jsxs)("div", {
      className: X.popoutUserContainer,
      children: [(0, a.jsx)(S.Avatar, {
        src: t.getAvatarURL(i, 24),
        size: S.AvatarSizes.SIZE_24,
        "aria-label": "avatar"
      }), (0, a.jsx)(P.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(S.Heading, {
        variant: "heading-sm/normal",
        color: "text-secondary",
        children: l.format({
          username: r,
          nameHook: (e, t) => (0, a.jsx)(S.Text, {
            variant: "text-sm/medium",
            color: "header-primary",
            className: X.popoutUsername,
            children: e
          }, t)
        })
      })]
    }), s]
  })
}

function el(e) {
  let {
    thumbnailSrc: t,
    title: n,
    subtitle: l,
    badges: s,
    ...i
  } = e;
  return (0, a.jsxs)(J, {
    backgroundImgSrc: t,
    children: [(0, a.jsx)(ea, {
      ...i
    }), (0, a.jsx)(P.default, {
      size: 16
    }), (0, a.jsxs)("div", {
      className: X.popoutContentBody,
      children: [(0, a.jsx)("div", {
        className: X.popoutThumbnailContainer,
        children: (0, a.jsx)(Y.ContentImage, {
          size: 72,
          src: t,
          className: X.contentImage
        })
      }), (0, a.jsx)(P.default, {
        size: 16,
        horizontal: !0
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(S.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 3,
          children: n
        }), null != l ? (0, a.jsx)(S.Text, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: l
        }) : null, (0, a.jsx)(P.default, {
          size: 8
        }), s]
      })]
    })]
  })
}

function es(e) {
  let {
    title: t,
    badges: n,
    streamPreviewSrc: l,
    ...s
  } = e;
  return (0, a.jsxs)(J, {
    style: {
      background: "linear-gradient(45deg, #24282B, #1A2020)"
    },
    children: [(0, a.jsx)(ea, {
      ...s,
      headerIcons: (0, a.jsx)(b.default, {
        size: b.default.Sizes.SMALL
      })
    }), (0, a.jsx)(P.default, {
      size: 16
    }), (0, a.jsx)("img", {
      src: l,
      className: X.popoutStreamImg,
      alt: ""
    }), (0, a.jsx)(P.default, {
      size: 16
    }), (0, a.jsx)(S.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      lineClamp: 3,
      children: t
    }), (0, a.jsx)(P.default, {
      size: 8
    }), n]
  })
}

function ei(e) {
  let {
    user: t,
    entry: n,
    voiceChannel: s,
    channel: i,
    requestId: r,
    reactionImageAltText: d,
    generateReactionImage: f,
    isStreaming: C = !1
  } = e, N = w.default.getName(i.guild_id, i.id, t), [v, M] = l.useState(!1), y = (0, u.useStateFromStores)([L.default], () => L.default.getGuild(s.guild_id)), P = (0, u.useStateFromStoresArray)([O.default], () => O.default.getVoiceStatesForChannel(s), [s]), b = async e => {
    let a = await _.default.openPrivateChannel(t.id, !1, !1),
      l = R.default.getChannel(a);
    o()(null != l, "DM channel must be defined");
    let s = await f(l.id);
    o()(null != s, "Reaction image must be defined"), await (0, A.sendReply)({
      file: s,
      channel: l,
      altText: d,
      reply: e
    }), (0, G.trackInteraction)(K.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT, {
      entry: n,
      channelId: i.id,
      guildId: i.guild_id,
      requestId: r
    })
  };
  return null == y ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: X.voiceChannelPopoutReactorHeader,
      children: [(0, a.jsxs)("div", {
        className: X.voiceChannelPopoutReactorChannel,
        children: [(0, a.jsx)(j.default, {
          guild: y,
          size: j.default.Sizes.SMOL,
          className: X.voiceChannelGuildIcon,
          active: !0
        }), (0, a.jsx)(m.ChevronSmallRightIcon, {
          width: 12,
          height: 12,
          color: c.default.colors.INTERACTIVE_NORMAL
        }), (0, a.jsx)(g.VoiceNormalIcon, {
          width: 16,
          height: 16,
          color: c.default.colors.TEXT_NORMAL
        }), (0, a.jsx)(S.Text, {
          variant: "text-sm/medium",
          color: "text-normal",
          children: s.name
        })]
      }), (0, a.jsx)(D.default, {
        guildId: y.id,
        users: P,
        max: 3,
        renderUser: (e, t) => (0, a.jsx)(S.Avatar, {
          src: e.user.getAvatarURL(y.id, 16),
          size: S.AvatarSizes.SIZE_16,
          "aria-label": "avatar",
          className: t
        }),
        renderMoreUsers: e => (0, a.jsx)("div", {
          className: X.voiceChannelAdditionalParticipants,
          children: (0, a.jsx)(S.Text, {
            variant: "text-xxs/semibold",
            color: "text-normal",
            children: e
          })
        })
      })]
    }), (0, a.jsx)("div", {
      className: X.voicePopoutDivider
    }), v ? (0, a.jsx)(I.ReplyInput, {
      placeholder: q.default.Messages.TEXTAREA_PLACEHOLDER.format({
        channel: "@".concat(N)
      }),
      onEnter: b,
      showEmojiButton: !0,
      renderAttachButton: () => (0, a.jsx)(S.Clickable, {
        onClick: () => M(!1),
        className: X.voicePopoutMessageCloseIcon,
        children: (0, a.jsx)(p.CloseSmallIcon, {
          width: 20,
          height: 20,
          color: c.default.colors.ICON_PRIMARY
        })
      })
    }) : (0, a.jsxs)("div", {
      className: X.voicePopoutActionButtons,
      children: [(0, a.jsxs)(S.Button, {
        className: X.secondaryButton,
        color: S.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: () => M(!0),
        innerClassName: X.iconButton,
        size: S.Button.Sizes.LARGE,
        children: [(0, a.jsx)(h.ChatIcon, {
          width: 20,
          height: 20,
          colorClass: X.secondaryText
        }), (0, a.jsx)(S.Text, {
          variant: "text-md/semibold",
          className: X.secondaryText,
          children: q.default.Messages.USER_POPOUT_MESSAGE
        })]
      }), (0, a.jsxs)(S.Button, {
        color: S.Button.Colors.GREEN,
        onClick: () => {
          T.default.updateChatOpen(s.id, !0), (0, x.transitionToChannel)(s.id), (0, G.trackInteraction)(K.ContentInventoryInteractionTypes.VOICE_CHANNEL_PREVIEWED, {
            entry: n,
            channelId: i.id,
            guildId: i.guild_id,
            requestId: r,
            destinationChannelId: s.id,
            destinationGuildId: s.guild_id
          })
        },
        fullWidth: !0,
        innerClassName: X.iconButton,
        size: S.Button.Sizes.LARGE,
        children: [C ? (0, a.jsx)(E.ScreenIcon, {
          width: 20,
          height: 20,
          color: c.default.colors.WHITE
        }) : (0, a.jsx)(g.VoiceNormalIcon, {
          width: 20,
          height: 20,
          color: c.default.colors.WHITE
        }), (0, a.jsx)(S.Text, {
          variant: "text-md/semibold",
          color: "always-white",
          children: q.default.Messages.PREVIEW
        })]
      })]
    })]
  })
}