"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return eu
  },
  PopoutContent: function() {
    return eC
  },
  PopoutInteractionsContainer: function() {
    return ef
  },
  PrimaryActionButton: function() {
    return eS
  },
  Reactor: function() {
    return eh
  },
  StreamingPopoutContent: function() {
    return eg
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
  y = n("605236"),
  R = n("543241"),
  L = n("318374"),
  j = n("258609"),
  O = n("539746"),
  P = n("102172"),
  D = n("871118"),
  b = n("359110"),
  U = n("12168"),
  F = n("592125"),
  w = n("430824"),
  k = n("496675"),
  H = n("699516"),
  G = n("9156"),
  B = n("979651"),
  V = n("938475"),
  W = n("346656"),
  Y = n("409216"),
  z = n("368666"),
  K = n("626135"),
  Z = n("768581"),
  X = n("5192"),
  q = n("26033"),
  J = n("192918"),
  Q = n("22211"),
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
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, _.useFocusLock)(n), (0, a.jsx)("div", {
    className: eo.popout,
    ref: n,
    children: t
  })
}

function ed(e) {
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
let ec = l.createContext(null);

function ef(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: eo.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: eo.interactionsContainer,
      children: (0, a.jsx)(ec.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function eh(e) {
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
  } = e, [L, j] = l.useState(!1), [O, P] = l.useState(null), D = (0, d.useStateFromStores)([k.default], () => k.default.can(ei.Permissions.SEND_MESSAGES, t)), U = (0, $.useIsEligibleForMemberlistOneClickReply)({
    location: "PopoutReactor"
  }), [B, z] = l.useState(!1), [Z, q] = l.useState(!1), {
    voiceBar: J,
    joinVoiceButton: et
  } = function(e) {
    let {
      channel: t,
      entry: n,
      requestId: s
    } = e, {
      streamPreviewUrl: i,
      channel: r
    } = (0, Q.default)(n), o = (0, d.useStateFromStores)([w.default], () => null != r ? w.default.getGuild(r.guild_id) : void 0), c = (0, d.useStateFromStoresArray)([V.default], () => null != r ? V.default.getVoiceStatesForChannel(r) : [], [r]), h = l.useMemo(() => {
      for (let e of c) {
        let t = F.default.getDMFromUserId(e.user.id),
          n = null != t && G.default.isChannelMuted(null, t),
          a = H.default.isBlocked(e.user.id);
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
        I.default.updateChatOpen(r.id, !0), (0, b.transitionToChannel)(r.id), (0, ee.trackInteraction)(es.ContentInventoryInteractionTypes.VOICE_CHANNEL_PREVIEWED, {
          entry: n,
          channelId: t.id,
          guildId: t.guild_id,
          requestId: s,
          destinationChannelId: r.id,
          destinationGuildId: r.guild_id
        })
      },
      g = h ? er.default.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : er.default.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
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
              className: eo.popoutBlockedWarningIcon
            }), g]
          }),
          shouldShow: !0,
          children: t
        }, "voice-preview")
      },
      A = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)("div", {
          className: eo.voiceChannelPopoutReactorHeader,
          children: [(0, a.jsx)(T, {
            children: e => (0, a.jsxs)(_.Clickable, {
              ...e,
              "aria-label": er.default.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
              onClick: E,
              className: eo.voiceChannelPopoutReactorChannel,
              children: [(0, a.jsx)(W.default, {
                guild: o,
                size: W.default.Sizes.SMOL,
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
                className: eo.voiceChannelName,
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
              className: eo.voiceChannelAdditionalParticipants,
              children: (0, a.jsx)(_.Text, {
                variant: "text-xxs/semibold",
                color: "text-normal",
                children: e
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: eo.primaryActionPopoutDivider
        })]
      });
    return {
      voiceBar: A,
      joinVoiceButton: (0, a.jsx)(T, {
        children: e => (0, a.jsx)(eS, {
          ...e,
          color: _.Button.Colors.GREEN,
          onClick: E,
          IconComponent: m ? C.ScreenIcon : S.VoiceNormalIcon,
          children: er.default.Messages.PREVIEW
        })
      })
    }
  }({
    channel: t,
    entry: A,
    requestId: v
  }), ea = null != et && 0 === x.length ? [et] : x, eu = ea.length > 0, ed = ea.length >= 2, [ec, ef] = l.useState(!eu), eh = "#".concat(t.name), ep = X.default.getName(t.guild_id, t.id, n), eE = L ? er.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : er.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, eC = async e => {
    if (null != e) {
      if (K.default.track(ei.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: es.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), U) {
        let l;
        if ((0, y.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), z(!0), q(!1), L) l = t;
        else {
          var a;
          let e = await T.default.getOrEnsurePrivateChannel(n.id);
          l = null !== (a = F.default.getChannel(e)) && void 0 !== a ? a : null
        }
        return o()(null != l, "Send channel must be defined"), e_({
          reply: ":".concat(e.name, ":"),
          sendToChannel: l,
          onComplete: () => {
            q(!0), setTimeout(() => {
              z(!1), r()
            }, 600)
          },
          interactionType: es.ContentInventoryInteractionTypes.REACTION_EMOJI_REACT_SENT
        })
      }
      ef(!0), null != O && (O.insertEmoji(e, !1, !1), O.focus())
    }
  }, eg = async e => {
    let a;
    if (U && (0, y.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), L) a = t;
    else {
      let e = await T.default.openPrivateChannel(n.id, !1, !1),
        t = F.default.getChannel(e);
      o()(null != t, "DM channel must be defined"), a = t
    }
    let l = a.type === ei.ChannelTypes.DM ? es.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : es.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
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
    }), (0, ee.trackInteraction)(u, {
      entry: A,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: v,
      destinationChannelId: l.id,
      destinationGuildId: l.guild_id
    }), null == r || r()
  }, eT = null != R ? R : null != J ? J : void 0;
  return (0, a.jsxs)("div", {
    style: {
      pointerEvents: B ? "none" : "all"
    },
    children: [(0, a.jsx)(el.default, {
      sent: Z,
      shown: B,
      className: eo.toastContainer
    }), null != eT ? eT : U ? (0, a.jsx)(en.default, {
      children: (0, a.jsxs)("div", {
        className: eo.emojiHotrailShareToChannel,
        children: [(0, a.jsx)(em, {
          channel: t,
          onClickSuggestion: eC
        }), (0, a.jsx)(N.ReactionPickerButton, {
          onSelectEmoji: eC
        })]
      })
    }) : (0, a.jsx)("div", {
      className: eo.emojiHotrailShareToChannel,
      children: (0, a.jsx)(em, {
        channel: t,
        onClickSuggestion: eC
      })
    }), (0, a.jsxs)("div", {
      className: ec ? eo.inputContainerShareToChannel : eo.hiddenButRenderedInputField,
      children: [eu && (0, a.jsx)(_.Clickable, {
        onClick: () => ef(!1),
        className: eo.primaryActionPopoutMessageCloseIcon,
        children: (0, a.jsx)(E.CloseSmallIcon, {
          width: 20,
          height: 20,
          color: f.default.colors.ICON_PRIMARY
        })
      }), (0, a.jsx)("div", {
        className: eo.replyInputWrapper,
        children: (0, a.jsx)(N.ReplyInput, {
          placeholder: er.default.Messages.TEXTAREA_PLACEHOLDER.format({
            channel: L ? eh : "@".concat(ep)
          }),
          onEnter: eg,
          setEditorRef: e => P(e),
          channel: L ? t : void 0,
          showEmojiButton: null != eT,
          renderAttachButton: D ? () => (0, a.jsx)(_.Tooltip, {
            text: eE,
            children: e => (0, a.jsx)(_.Clickable, {
              ...e,
              className: eo.shareToChannelButton,
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
        })
      })]
    }), !1 === ec && (0, a.jsxs)("div", {
      className: eo.primaryActionPopoutActionButtons,
      children: [(0, a.jsxs)(_.Button, {
        className: eo.secondaryButton,
        color: _.Button.Colors.CUSTOM,
        onClick: () => ef(!0),
        innerClassName: eo.iconButton,
        size: ed ? _.Button.Sizes.MIN : _.Button.Sizes.LARGE,
        children: [(0, a.jsx)(m.ChatIcon, {
          width: 20,
          height: 20,
          colorClass: eo.secondaryText
        }), !ed && (0, a.jsx)(_.Text, {
          variant: "text-md/semibold",
          className: eo.secondaryText,
          children: er.default.Messages.USER_POPOUT_MESSAGE
        })]
      }, "toggleMessageMode"), ea]
    })]
  })
}
let em = e => {
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
          children: (0, a.jsx)(U.HotBarEmoji, {
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

function ep(e) {
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
      }), (0, a.jsx)(_.Spacer, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(_.Heading, {
        variant: "heading-sm/normal",
        className: eo.popoutTextSecondary,
        children: n.format({
          user1: X.default.getName(r, t.id, u),
          user2: X.default.getName(r, t.id, d),
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

function eE(e) {
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

function eC(e) {
  let {
    thumbnailSrc: t,
    thumbnailFallbackSrc: l,
    thumbnailTitle: s,
    title: i,
    subtitle: r,
    badges: o,
    children: u,
    onClickTitle: d,
    onClickSubtitle: c,
    ...f
  } = e, {
    entry: h,
    channel: m
  } = f, p = (0, q.isGamingLikeEntry)(h), E = (0, O.useCanSeeGameProfile)("ContentPopout");
  return (0, a.jsxs)(ed, {
    backgroundImgSrc: t,
    children: [(0, a.jsx)(ep, {
      ...f
    }), (0, a.jsx)(eE, {
      onClick: p && E ? () => {
        (0, _.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("7613")]).then(n.bind(n, "644941"));
          return t => (0, a.jsx)(e, {
            applicationId: h.extra.application_id,
            channel: m,
            ...t
          })
        })
      } : void 0,
      children: (0, a.jsxs)("div", {
        className: eo.popoutContentBody,
        children: [(0, a.jsx)("div", {
          className: eo.popoutThumbnailContainer,
          children: (0, a.jsx)(ea.ContentImage, {
            size: 72,
            alt: s,
            src: t,
            fallbackSrc: l,
            className: eo.contentImage
          })
        }), (0, a.jsx)(_.Spacer, {
          size: 16,
          horizontal: !0
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(eE, {
            onClick: d,
            children: (0, a.jsx)(_.Heading, {
              variant: "heading-md/medium",
              className: eo.popoutTextPrimary,
              lineClamp: 3,
              children: i
            })
          }), null != r ? (0, a.jsx)(eE, {
            onClick: c,
            children: (0, a.jsx)(_.Text, {
              variant: "text-md/normal",
              className: eo.popoutTextSecondary,
              children: r
            })
          }) : null, (0, a.jsx)(_.Spacer, {
            size: 8
          }), o]
        })]
      })
    }), u]
  })
}

function eg(e) {
  let {
    title: t,
    badges: n,
    stream: s,
    ...i
  } = e, r = (0, d.useStateFromStores)([F.default], () => F.default.getChannel(null == s ? void 0 : s.channelId)), [o] = l.useMemo(() => (0, P.canWatchStream)(r, B.default, w.default, k.default, j.default), [r]);
  return null == s ? null : (0, a.jsxs)(ed, {
    className: eo.streamingPopoutHero,
    children: [(0, a.jsx)(ep, {
      ...i,
      headerIcons: (0, a.jsx)(z.default, {
        size: z.default.Sizes.SMALL
      })
    }), (0, a.jsx)(_.Spacer, {
      size: 16
    }), (0, a.jsx)(eE, {
      onClick: o ? () => {
        A.default.selectVoiceChannel(s.channelId), (0, v.watchStreamAndTransitionToStream)(s)
      } : void 0,
      children: (0, a.jsxs)("div", {
        style: {
          position: "relative"
        },
        children: [(0, a.jsx)(D.default, {
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
    }), (0, a.jsx)(_.Spacer, {
      size: 16
    }), (0, a.jsx)(_.Heading, {
      variant: "heading-md/semibold",
      className: eo.popoutTextPrimary,
      lineClamp: 3,
      children: t
    }), (0, a.jsx)(_.Spacer, {
      size: 8
    }), n]
  })
}

function eS(e) {
  let {
    IconComponent: t,
    children: n,
    className: l,
    ...s
  } = e;
  return (0, a.jsxs)(_.Button, {
    ...s,
    className: i()(l, eo.primaryButton),
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