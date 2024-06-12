"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return er
  },
  PopoutContent: function() {
    return ep
  },
  PopoutInteractionsContainer: function() {
    return ed
  },
  PrimaryActionButton: function() {
    return eg
  },
  Reactor: function() {
    return ec
  },
  StreamingPopoutContent: function() {
    return eE
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
  g = n("718671"),
  C = n("352903"),
  S = n("690172"),
  _ = n("481060"),
  T = n("493683"),
  I = n("475179"),
  A = n("287734"),
  v = n("872810"),
  x = n("607070"),
  N = n("220779"),
  M = n("201133"),
  y = n("605236"),
  R = n("543241"),
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
  H = n("9156"),
  G = n("979651"),
  B = n("938475"),
  V = n("346656"),
  W = n("409216"),
  Y = n("368666"),
  z = n("626135"),
  K = n("768581"),
  Z = n("5192"),
  X = n("192918"),
  q = n("22211"),
  J = n("571243"),
  Q = n("69259"),
  $ = n("206295"),
  ee = n("111386"),
  et = n("43205"),
  en = n("469153"),
  ea = n("206583"),
  el = n("981631"),
  es = n("689938"),
  ei = n("936183");

function er(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, _.useFocusLock)(n), (0, a.jsx)("div", {
    className: ei.popout,
    ref: n,
    children: t
  })
}

function eo(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    className: l,
    style: s = {}
  } = e, {
    primaryColor: r,
    secondaryColor: o
  } = (0, $.default)(n);
  return (0, a.jsx)("div", {
    className: i()(ei.hero, "theme-".concat(el.ThemeTypes.DARK), l),
    style: {
      background: "linear-gradient(45deg, ".concat(r, ", ").concat(o, ")"),
      ...s
    },
    children: t
  })
}
let eu = l.createContext(null);

function ed(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: ei.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: ei.interactionsContainer,
      children: (0, a.jsx)(eu.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function ec(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: s,
    reactionImageAltText: i,
    closePopout: r,
    entry: A,
    requestId: v,
    buttons: x = [],
    header: R
  } = e, [L, O] = l.useState(!1), [j, P] = l.useState(null), b = (0, d.useStateFromStores)([w.default], () => w.default.can(el.Permissions.SEND_MESSAGES, t)), G = (0, J.useIsEligibleForMemberlistOneClickReply)({
    location: "PopoutReactor"
  }), [Y, K] = l.useState(!1), [X, $] = l.useState(!1), {
    voiceBar: et,
    joinVoiceButton: er
  } = function(e) {
    let {
      channel: t,
      entry: n,
      requestId: s
    } = e, {
      streamPreviewUrl: i,
      channel: r
    } = (0, q.default)(n), o = (0, d.useStateFromStores)([F.default], () => null != r ? F.default.getGuild(r.guild_id) : void 0), c = (0, d.useStateFromStoresArray)([B.default], () => null != r ? B.default.getVoiceStatesForChannel(r) : [], [r]), h = l.useMemo(() => {
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
        I.default.updateChatOpen(r.id, !0), (0, D.transitionToChannel)(r.id), (0, Q.trackInteraction)(ea.ContentInventoryInteractionTypes.VOICE_CHANNEL_PREVIEWED, {
          entry: n,
          channelId: t.id,
          guildId: t.guild_id,
          requestId: s,
          destinationChannelId: r.id,
          destinationGuildId: r.guild_id
        })
      },
      C = h ? es.default.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : es.default.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
      T = e => {
        let {
          children: t
        } = e;
        return (0, a.jsx)(_.Tooltip, {
          "aria-label": C,
          text: (0, a.jsxs)(a.Fragment, {
            children: [h && (0, a.jsx)(u.WarningIcon, {
              width: 13,
              height: 13,
              className: ei.popoutBlockedWarningIcon
            }), C]
          }),
          shouldShow: !0,
          children: t
        }, "voice-preview")
      },
      A = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)("div", {
          className: ei.voiceChannelPopoutReactorHeader,
          children: [(0, a.jsx)(T, {
            children: e => (0, a.jsxs)(_.Clickable, {
              ...e,
              "aria-label": es.default.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
              onClick: E,
              className: ei.voiceChannelPopoutReactorChannel,
              children: [(0, a.jsx)(V.default, {
                guild: o,
                size: V.default.Sizes.SMOL,
                className: ei.voiceChannelGuildIcon,
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
                className: ei.voiceChannelName,
                children: r.name
              })]
            })
          }), (0, a.jsx)(W.default, {
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
              className: ei.voiceChannelAdditionalParticipants,
              children: (0, a.jsx)(_.Text, {
                variant: "text-xxs/semibold",
                color: "text-normal",
                children: e
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: ei.primaryActionPopoutDivider
        })]
      });
    return {
      voiceBar: A,
      joinVoiceButton: (0, a.jsx)(T, {
        children: e => (0, a.jsx)(eg, {
          ...e,
          color: _.Button.Colors.GREEN,
          onClick: E,
          IconComponent: m ? g.ScreenIcon : S.VoiceNormalIcon,
          children: es.default.Messages.PREVIEW
        })
      })
    }
  }({
    channel: t,
    entry: A,
    requestId: v
  }), eo = null != er && 0 === x.length ? [er] : x, eu = eo.length > 0, ed = eo.length >= 2, [ec, eh] = l.useState(!eu), em = "#".concat(t.name), ep = Z.default.getName(t.guild_id, t.id, n), eE = L ? es.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : es.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, eC = async e => {
    if (null != e) {
      if (z.default.track(el.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: ea.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), G) {
        let l;
        if ((0, y.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), K(!0), $(!1), L) l = t;
        else {
          var a;
          let e = await T.default.getOrEnsurePrivateChannel(n.id);
          l = null !== (a = U.default.getChannel(e)) && void 0 !== a ? a : null
        }
        return o()(null != l, "Send channel must be defined"), e_({
          reply: ":".concat(e.name, ":"),
          sendToChannel: l,
          onComplete: () => {
            $(!0), setTimeout(() => {
              K(!1), r()
            }, 600)
          },
          interactionType: ea.ContentInventoryInteractionTypes.REACTION_EMOJI_REACT_SENT
        })
      }
      eh(!0), null != j && (j.insertEmoji(e, !1, !1), j.focus())
    }
  }, eS = async e => {
    let a;
    if (G && (0, y.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), L) a = t;
    else {
      let e = await T.default.openPrivateChannel(n.id, !1, !1),
        t = U.default.getChannel(e);
      o()(null != t, "DM channel must be defined"), a = t
    }
    let l = a.type === el.ChannelTypes.DM ? ea.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : ea.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
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
    }), (0, Q.trackInteraction)(u, {
      entry: A,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: v,
      destinationChannelId: l.id,
      destinationGuildId: l.guild_id
    }), null == r || r()
  }, eT = null != R ? R : null != et ? et : void 0;
  return (0, a.jsxs)("div", {
    style: {
      pointerEvents: Y ? "none" : "all"
    },
    children: [(0, a.jsx)(en.default, {
      sent: X,
      shown: Y,
      className: ei.toastContainer
    }), null != eT ? eT : G ? (0, a.jsx)(ee.default, {
      children: (0, a.jsxs)("div", {
        className: ei.emojiHotrailShareToChannel,
        children: [(0, a.jsx)(ef, {
          channel: t,
          onClickSuggestion: eC
        }), (0, a.jsx)(N.ReactionPickerButton, {
          onSelectEmoji: eC
        })]
      })
    }) : (0, a.jsx)("div", {
      className: ei.emojiHotrailShareToChannel,
      children: (0, a.jsx)(ef, {
        channel: t,
        onClickSuggestion: eC
      })
    }), (0, a.jsxs)("div", {
      className: ec ? ei.inputContainerShareToChannel : ei.hiddenButRenderedInputField,
      children: [eu && (0, a.jsx)(_.Clickable, {
        onClick: () => eh(!1),
        className: ei.primaryActionPopoutMessageCloseIcon,
        children: (0, a.jsx)(E.CloseSmallIcon, {
          width: 20,
          height: 20,
          color: f.default.colors.ICON_PRIMARY
        })
      }), (0, a.jsx)("div", {
        className: ei.replyInputWrapper,
        children: (0, a.jsx)(N.ReplyInput, {
          placeholder: es.default.Messages.TEXTAREA_PLACEHOLDER.format({
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
              className: ei.shareToChannelButton,
              onClick: () => O(e => !e),
              children: L ? (0, a.jsx)(C.TextIcon, {
                width: 20,
                height: 20
              }) : (0, a.jsx)(h.AtIcon, {
                width: 20,
                height: 20
              })
            })
          }) : void 0
        })
      })]
    }), !1 === ec && (0, a.jsxs)("div", {
      className: ei.primaryActionPopoutActionButtons,
      children: [(0, a.jsxs)(_.Button, {
        className: ei.secondaryButton,
        color: _.Button.Colors.CUSTOM,
        onClick: () => eh(!0),
        innerClassName: ei.iconButton,
        size: ed ? _.Button.Sizes.MIN : _.Button.Sizes.LARGE,
        children: [(0, a.jsx)(m.ChatIcon, {
          width: 20,
          height: 20,
          colorClass: ei.secondaryText
        }), !ed && (0, a.jsx)(_.Text, {
          variant: "text-md/semibold",
          className: ei.secondaryText,
          children: es.default.Messages.USER_POPOUT_MESSAGE
        })]
      }, "toggleMessageMode"), eo]
    })]
  })
}
let ef = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, [s, i] = l.useState(!1);
  l.useEffect(() => {
    i(!0)
  }, []);
  let r = !!x.default.keyboardModeEnabled && !s,
    o = (0, R.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
      emoji: e,
      url: e.url
    } : {
      emoji: e,
      url: (0, K.getEmojiURL)({
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
          text: es.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          position: "top",
          "aria-label": es.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          color: _.Tooltip.Colors.PRIMARY,
          shouldShow: !r && void 0,
          children: (0, a.jsx)(b.HotBarEmoji, {
            emoji: t,
            isDisabled: !s,
            onClick: () => n(t),
            className: ei.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function eh(e) {
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
  } = (0, X.default)(s, 3);
  return (0, a.jsxs)("div", {
    className: ei.popoutContentHeader,
    children: [(0, a.jsxs)("div", {
      className: ei.popoutUserContainer,
      children: [(0, a.jsx)(L.default, {
        maxUsers: 3,
        users: o,
        size: _.AvatarSizes.SIZE_24,
        avatarClassName: ei.popoutStackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }), (0, a.jsx)(_.Spacer, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(_.Heading, {
        variant: "heading-sm/normal",
        className: ei.popoutTextSecondary,
        children: n.format({
          user1: Z.default.getName(r, t.id, u),
          user2: Z.default.getName(r, t.id, d),
          countOthers: c,
          nameHook: (e, t) => (0, a.jsx)(_.Text, {
            variant: "text-sm/medium",
            className: i()(ei.popoutUsername, ei.popoutTextPrimary),
            children: e
          }, t)
        })
      })]
    }), (0, a.jsx)("div", {
      className: ei.popoutHeaderIcons,
      children: l
    })]
  })
}

function em(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? (0, a.jsx)(a.Fragment, {
    children: t
  }) : (0, a.jsx)(_.Clickable, {
    className: ei.maybeClickable,
    onClick: n,
    children: t
  })
}

function ep(e) {
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
  return (0, a.jsxs)(eo, {
    backgroundImgSrc: t,
    children: [(0, a.jsx)(eh, {
      ...c
    }), (0, a.jsxs)("div", {
      className: ei.popoutContentBody,
      children: [(0, a.jsx)("div", {
        className: ei.popoutThumbnailContainer,
        children: (0, a.jsx)(et.ContentImage, {
          size: 72,
          alt: l,
          src: t,
          fallbackSrc: n,
          className: ei.contentImage
        })
      }), (0, a.jsx)(_.Spacer, {
        size: 16,
        horizontal: !0
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(em, {
          onClick: u,
          children: (0, a.jsx)(_.Heading, {
            variant: "heading-md/medium",
            className: ei.popoutTextPrimary,
            lineClamp: 3,
            children: s
          })
        }), null != i ? (0, a.jsx)(em, {
          onClick: d,
          children: (0, a.jsx)(_.Text, {
            variant: "text-md/normal",
            className: ei.popoutTextSecondary,
            children: i
          })
        }) : null, (0, a.jsx)(_.Spacer, {
          size: 8
        }), r]
      })]
    }), o]
  })
}

function eE(e) {
  let {
    title: t,
    badges: n,
    stream: s,
    ...i
  } = e, r = (0, d.useStateFromStores)([U.default], () => U.default.getChannel(null == s ? void 0 : s.channelId)), [o] = l.useMemo(() => (0, j.canWatchStream)(r, G.default, F.default, w.default, O.default), [r]);
  return null == s ? null : (0, a.jsxs)(eo, {
    className: ei.streamingPopoutHero,
    children: [(0, a.jsx)(eh, {
      ...i,
      headerIcons: (0, a.jsx)(Y.default, {
        size: Y.default.Sizes.SMALL
      })
    }), (0, a.jsx)(_.Spacer, {
      size: 16
    }), (0, a.jsx)(em, {
      onClick: o ? () => {
        A.default.selectVoiceChannel(s.channelId), (0, v.watchStreamAndTransitionToStream)(s)
      } : void 0,
      children: (0, a.jsxs)("div", {
        style: {
          position: "relative"
        },
        children: [(0, a.jsx)(P.default, {
          className: ei.streamingPopoutHero,
          stream: s
        }), o && (0, a.jsx)("div", {
          className: ei.streamCTA,
          children: (0, a.jsx)(_.Text, {
            variant: "text-md/normal",
            children: es.default.Messages.WATCH_STREAM
          })
        })]
      })
    }), (0, a.jsx)(_.Spacer, {
      size: 16
    }), (0, a.jsx)(_.Heading, {
      variant: "heading-md/semibold",
      className: ei.popoutTextPrimary,
      lineClamp: 3,
      children: t
    }), (0, a.jsx)(_.Spacer, {
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
    className: i()(l, ei.primaryButton),
    innerClassName: null != t ? ei.iconButton : void 0,
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