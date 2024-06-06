"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return eo
  },
  PopoutContent: function() {
    return eE
  },
  PopoutInteractionsContainer: function() {
    return ec
  },
  PrimaryActionButton: function() {
    return eg
  },
  Reactor: function() {
    return ef
  },
  StreamingPopoutContent: function() {
    return eC
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
  c = n("704215"),
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
  x = n("607070"),
  N = n("220779"),
  M = n("201133"),
  R = n("605236"),
  y = n("543241"),
  L = n("318374"),
  j = n("258609"),
  O = n("102172"),
  P = n("871118"),
  D = n("359110"),
  b = n("12168"),
  U = n("592125"),
  F = n("430824"),
  w = n("496675"),
  k = n("699516"),
  H = n("9156"),
  G = n("979651"),
  B = n("938475"),
  V = n("346656"),
  W = n("682864"),
  Y = n("409216"),
  z = n("368666"),
  K = n("626135"),
  Z = n("768581"),
  X = n("5192"),
  q = n("192918"),
  J = n("22211"),
  Q = n("571243"),
  $ = n("69259"),
  ee = n("206295"),
  et = n("111386"),
  en = n("43205"),
  ea = n("469153"),
  el = n("206583"),
  es = n("981631"),
  ei = n("689938"),
  er = n("936183");

function eo(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, _.useFocusLock)(n), (0, a.jsx)("div", {
    className: er.popout,
    ref: n,
    children: t
  })
}

function eu(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    className: l,
    style: s = {}
  } = e, {
    primaryColor: r,
    secondaryColor: o
  } = (0, ee.default)(n);
  return (0, a.jsx)("div", {
    className: i()(er.hero, "theme-".concat(es.ThemeTypes.DARK), l),
    style: {
      background: "linear-gradient(45deg, ".concat(r, ", ").concat(o, ")"),
      ...s
    },
    children: t
  })
}
let ed = l.createContext(null);

function ec(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: er.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: er.interactionsContainer,
      children: (0, a.jsx)(ed.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function ef(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: s,
    reactionImageAltText: i,
    closePopout: r,
    entry: A,
    requestId: v,
    buttons: x = [],
    header: y
  } = e, [L, j] = l.useState(!1), [O, P] = l.useState(null), b = (0, d.useStateFromStores)([w.default], () => w.default.can(es.Permissions.SEND_MESSAGES, t)), G = (0, Q.useIsEligibleForMemberlistOneClickReply)({
    location: "PopoutReactor"
  }), [W, z] = l.useState(!1), [Z, q] = l.useState(!1), {
    voiceBar: ee,
    joinVoiceButton: en
  } = function(e) {
    let {
      channel: t,
      entry: n,
      requestId: s
    } = e, {
      streamPreviewUrl: i,
      channel: r
    } = (0, J.default)(n), o = (0, d.useStateFromStores)([F.default], () => null != r ? F.default.getGuild(r.guild_id) : void 0), c = (0, d.useStateFromStoresArray)([B.default], () => null != r ? B.default.getVoiceStatesForChannel(r) : [], [r]), h = l.useMemo(() => {
      for (let e of c) {
        let t = U.default.getDMFromUserId(e.user.id),
          n = null != t && H.default.isChannelMuted(null, t),
          a = k.default.isBlocked(e.user.id);
        if (n || a) return !0
      }
      return !1
    }, [c]);
    if (null == r || null == o) return {
      voiceBar: void 0,
      joinVoiceButton: void 0
    };
    let m = null != i,
      E = () => {
        I.default.updateChatOpen(r.id, !0), (0, D.transitionToChannel)(r.id), (0, $.trackInteraction)(el.ContentInventoryInteractionTypes.VOICE_CHANNEL_PREVIEWED, {
          entry: n,
          channelId: t.id,
          guildId: t.guild_id,
          requestId: s,
          destinationChannelId: r.id,
          destinationGuildId: r.guild_id
        })
      },
      g = h ? ei.default.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : ei.default.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
      T = e => {
        let {
          children: t
        } = e;
        return (0, a.jsx)(_.Tooltip, {
          "aria-label": g,
          text: (0, a.jsxs)(a.Fragment, {
            children: [h && (0, a.jsx)(u.WarningIcon, {
              width: 13,
              height: 13,
              className: er.popoutBlockedWarningIcon
            }), g]
          }),
          shouldShow: !0,
          children: t
        }, "voice-preview")
      },
      A = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)("div", {
          className: er.voiceChannelPopoutReactorHeader,
          children: [(0, a.jsx)(T, {
            children: e => (0, a.jsxs)(_.Clickable, {
              ...e,
              "aria-label": ei.default.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
              onClick: E,
              className: er.voiceChannelPopoutReactorChannel,
              children: [(0, a.jsx)(V.default, {
                guild: o,
                size: V.default.Sizes.SMOL,
                className: er.voiceChannelGuildIcon,
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
                className: er.voiceChannelName,
                children: r.name
              })]
            })
          }), (0, a.jsx)(Y.default, {
            guildId: o.id,
            users: c,
            max: 3,
            renderUser: (e, t) => (0, a.jsx)(_.Avatar, {
              src: e.user.getAvatarURL(o.id, 16),
              size: _.AvatarSizes.SIZE_16,
              "aria-label": "avatar",
              className: t
            }),
            renderMoreUsers: e => (0, a.jsx)("div", {
              className: er.voiceChannelAdditionalParticipants,
              children: (0, a.jsx)(_.Text, {
                variant: "text-xxs/semibold",
                color: "text-normal",
                children: e
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: er.primaryActionPopoutDivider
        })]
      });
    return {
      voiceBar: A,
      joinVoiceButton: (0, a.jsx)(T, {
        children: e => (0, a.jsx)(eg, {
          ...e,
          color: _.Button.Colors.GREEN,
          onClick: E,
          IconComponent: m ? C.ScreenIcon : S.VoiceNormalIcon,
          children: ei.default.Messages.PREVIEW
        })
      })
    }
  }({
    channel: t,
    entry: A,
    requestId: v
  }), eo = null != en && 0 === x.length ? [en] : x, eu = eo.length > 0, ed = eo.length >= 2, [ec, ef] = l.useState(!eu), em = "#".concat(t.name), ep = X.default.getName(t.guild_id, t.id, n), eE = L ? ei.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : ei.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, eC = async e => {
    if (null != e) {
      if (K.default.track(es.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: el.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), G) {
        let l;
        if ((0, R.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), z(!0), q(!1), L) l = t;
        else {
          var a;
          let e = await T.default.getOrEnsurePrivateChannel(n.id);
          l = null !== (a = U.default.getChannel(e)) && void 0 !== a ? a : null
        }
        return o()(null != l, "Send channel must be defined"), e_({
          reply: ":".concat(e.name, ":"),
          sendToChannel: l,
          onComplete: () => {
            q(!0), setTimeout(() => {
              z(!1), r()
            }, 600)
          },
          interactionType: el.ContentInventoryInteractionTypes.REACTION_EMOJI_REACT_SENT
        })
      }
      ef(!0), null != O && (O.insertEmoji(e, !1, !1), O.focus())
    }
  }, eS = async e => {
    let a;
    if (G && (0, R.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), L) a = t;
    else {
      let e = await T.default.openPrivateChannel(n.id, !1, !1),
        t = U.default.getChannel(e);
      o()(null != t, "DM channel must be defined"), a = t
    }
    let l = a.type === es.ChannelTypes.DM ? el.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : el.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
    return e_({
      reply: e,
      sendToChannel: a,
      onComplete: r,
      interactionType: l
    })
  }, e_ = async e => {
    var n;
    let {
      reply: a,
      sendToChannel: l,
      onComplete: r,
      interactionType: u
    } = e;
    let d = await (n = s, async function() {
      for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
      try {
        return await n(...t)
      } catch (e) {
        throw e
      }
    })(l.id);
    o()(null != d, "Reaction image must be defined"), await (0, M.sendReply)({
      file: d,
      channel: l,
      altText: i,
      reply: a
    }), (0, $.trackInteraction)(u, {
      entry: A,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: v,
      destinationChannelId: l.id,
      destinationGuildId: l.guild_id
    }), null == r || r()
  }, eT = null != y ? y : null != ee ? ee : void 0;
  return (0, a.jsxs)("div", {
    style: {
      pointerEvents: W ? "none" : "all"
    },
    children: [(0, a.jsx)(ea.default, {
      sent: Z,
      shown: W,
      className: er.toastContainer
    }), null != eT ? eT : G ? (0, a.jsx)(et.default, {
      children: (0, a.jsxs)("div", {
        className: er.emojiHotrailShareToChannel,
        children: [(0, a.jsx)(eh, {
          channel: t,
          onClickSuggestion: eC
        }), (0, a.jsx)(N.ReactionPickerButton, {
          onSelectEmoji: eC
        })]
      })
    }) : (0, a.jsx)("div", {
      className: er.emojiHotrailShareToChannel,
      children: (0, a.jsx)(eh, {
        channel: t,
        onClickSuggestion: eC
      })
    }), (0, a.jsxs)("div", {
      className: ec ? er.inputContainerShareToChannel : er.hiddenButRenderedInputField,
      children: [eu && (0, a.jsx)(_.Clickable, {
        onClick: () => ef(!1),
        className: er.primaryActionPopoutMessageCloseIcon,
        children: (0, a.jsx)(E.CloseSmallIcon, {
          width: 20,
          height: 20,
          color: f.default.colors.ICON_PRIMARY
        })
      }), (0, a.jsx)(N.ReplyInput, {
        placeholder: ei.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: L ? em : "@".concat(ep)
        }),
        onEnter: eS,
        setEditorRef: e => P(e),
        channel: L ? t : void 0,
        showEmojiButton: null != eT,
        renderAttachButton: b ? () => (0, a.jsx)(_.Tooltip, {
          text: eE,
          children: e => (0, a.jsx)(_.Clickable, {
            ...e,
            className: er.shareToChannelButton,
            onClick: () => j(e => !e),
            children: L ? (0, a.jsx)(g.TextIcon, {
              width: 20,
              height: 20
            }) : (0, a.jsx)(h.AtIcon, {
              width: 20,
              height: 20
            })
          })
        }) : void 0
      })]
    }), !1 === ec && (0, a.jsxs)("div", {
      className: er.primaryActionPopoutActionButtons,
      children: [(0, a.jsxs)(_.Button, {
        className: er.secondaryButton,
        color: _.Button.Colors.CUSTOM,
        onClick: () => ef(!0),
        innerClassName: er.iconButton,
        size: ed ? _.Button.Sizes.MIN : _.Button.Sizes.LARGE,
        children: [(0, a.jsx)(m.ChatIcon, {
          width: 20,
          height: 20,
          colorClass: er.secondaryText
        }), !ed && (0, a.jsx)(_.Text, {
          variant: "text-md/semibold",
          className: er.secondaryText,
          children: ei.default.Messages.USER_POPOUT_MESSAGE
        })]
      }, "toggleMessageMode"), eo]
    })]
  })
}
let eh = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, [s, i] = l.useState(!1);
  l.useEffect(() => {
    i(!0)
  }, []);
  let r = !!x.default.keyboardModeEnabled && !s,
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
          text: ei.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          position: "top",
          "aria-label": ei.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          color: _.Tooltip.Colors.PRIMARY,
          shouldShow: !r && void 0,
          children: (0, a.jsx)(b.HotBarEmoji, {
            emoji: t,
            isDisabled: !s,
            onClick: () => n(t),
            className: er.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function em(e) {
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
  } = (0, q.default)(s, 3);
  return (0, a.jsxs)("div", {
    className: er.popoutContentHeader,
    children: [(0, a.jsxs)("div", {
      className: er.popoutUserContainer,
      children: [(0, a.jsx)(L.default, {
        maxUsers: 3,
        users: o,
        size: _.AvatarSizes.SIZE_24,
        avatarClassName: er.popoutStackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }), (0, a.jsx)(W.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(_.Heading, {
        variant: "heading-sm/normal",
        className: er.popoutTextSecondary,
        children: n.format({
          user1: X.default.getName(r, t.id, u),
          user2: X.default.getName(r, t.id, d),
          countOthers: c,
          nameHook: (e, t) => (0, a.jsx)(_.Text, {
            variant: "text-sm/medium",
            className: i()(er.popoutUsername, er.popoutTextPrimary),
            children: e
          }, t)
        })
      })]
    }), (0, a.jsx)("div", {
      className: er.popoutHeaderIcons,
      children: l
    })]
  })
}

function ep(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? (0, a.jsx)(a.Fragment, {
    children: t
  }) : (0, a.jsx)(_.Clickable, {
    className: er.maybeClickable,
    onClick: n,
    children: t
  })
}

function eE(e) {
  let {
    thumbnailSrc: t,
    thumbnailFallbackSrc: n,
    thumbnailTitle: l,
    title: s,
    subtitle: i,
    badges: r,
    children: o,
    onClickTitle: u,
    onClickSubtitle: d,
    ...c
  } = e;
  return (0, a.jsxs)(eu, {
    backgroundImgSrc: t,
    children: [(0, a.jsx)(em, {
      ...c
    }), (0, a.jsxs)("div", {
      className: er.popoutContentBody,
      children: [(0, a.jsx)("div", {
        className: er.popoutThumbnailContainer,
        children: (0, a.jsx)(en.ContentImage, {
          size: 72,
          alt: l,
          src: t,
          fallbackSrc: n,
          className: er.contentImage
        })
      }), (0, a.jsx)(W.default, {
        size: 16,
        horizontal: !0
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(ep, {
          onClick: u,
          children: (0, a.jsx)(_.Heading, {
            variant: "heading-md/medium",
            className: er.popoutTextPrimary,
            lineClamp: 3,
            children: s
          })
        }), null != i ? (0, a.jsx)(ep, {
          onClick: d,
          children: (0, a.jsx)(_.Text, {
            variant: "text-md/normal",
            className: er.popoutTextSecondary,
            children: i
          })
        }) : null, (0, a.jsx)(W.default, {
          size: 8
        }), r]
      })]
    }), o]
  })
}

function eC(e) {
  let {
    title: t,
    badges: n,
    stream: s,
    ...i
  } = e, r = (0, d.useStateFromStores)([U.default], () => U.default.getChannel(null == s ? void 0 : s.channelId)), [o] = l.useMemo(() => (0, O.canWatchStream)(r, G.default, F.default, w.default, j.default), [r]);
  return null == s ? null : (0, a.jsxs)(eu, {
    className: er.streamingPopoutHero,
    children: [(0, a.jsx)(em, {
      ...i,
      headerIcons: (0, a.jsx)(z.default, {
        size: z.default.Sizes.SMALL
      })
    }), (0, a.jsx)(W.default, {
      size: 16
    }), (0, a.jsx)(ep, {
      onClick: o ? () => {
        A.default.selectVoiceChannel(s.channelId), (0, v.watchStreamAndTransitionToStream)(s)
      } : void 0,
      children: (0, a.jsxs)("div", {
        style: {
          position: "relative"
        },
        children: [(0, a.jsx)(P.default, {
          className: er.streamingPopoutHero,
          stream: s
        }), o && (0, a.jsx)("div", {
          className: er.streamCTA,
          children: (0, a.jsx)(_.Text, {
            variant: "text-md/normal",
            children: ei.default.Messages.WATCH_STREAM
          })
        })]
      })
    }), (0, a.jsx)(W.default, {
      size: 16
    }), (0, a.jsx)(_.Heading, {
      variant: "heading-md/semibold",
      className: er.popoutTextPrimary,
      lineClamp: 3,
      children: t
    }), (0, a.jsx)(W.default, {
      size: 8
    }), n]
  })
}

function eg(e) {
  let {
    IconComponent: t,
    children: n,
    className: l,
    ...s
  } = e;
  return (0, a.jsxs)(_.Button, {
    ...s,
    className: i()(l, er.primaryButton),
    innerClassName: null != t ? er.iconButton : void 0,
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