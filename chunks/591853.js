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
  PrimaryActionButton: function() {
    return e_
  },
  Reactor: function() {
    return em
  },
  StreamingPopoutContent: function() {
    return eS
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
  U = n("171368"),
  F = n("12168"),
  w = n("592125"),
  k = n("430824"),
  H = n("496675"),
  G = n("699516"),
  B = n("9156"),
  V = n("979651"),
  W = n("938475"),
  Y = n("346656"),
  z = n("409216"),
  K = n("368666"),
  Z = n("626135"),
  X = n("768581"),
  q = n("5192"),
  J = n("26033"),
  Q = n("192918"),
  $ = n("22211"),
  ee = n("571243"),
  et = n("69259"),
  en = n("206295"),
  ea = n("111386"),
  el = n("43205"),
  es = n("469153"),
  ei = n("206583"),
  er = n("981631"),
  eo = n("689938"),
  eu = n("936183");

function ed(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, _.useFocusLock)(n), (0, a.jsx)("div", {
    className: eu.popout,
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
  } = (0, en.default)(n);
  return (0, a.jsx)("div", {
    className: i()(eu.hero, "theme-".concat(er.ThemeTypes.DARK), l),
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
      className: eu.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: eu.interactionsContainer,
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
    entry: A,
    requestId: v,
    buttons: x = [],
    header: R
  } = e, [L, j] = l.useState(!1), [O, P] = l.useState(null), D = (0, d.useStateFromStores)([H.default], () => H.default.can(er.Permissions.SEND_MESSAGES, t)), U = (0, ee.useIsEligibleForMemberlistOneClickReply)({
    location: "PopoutReactor"
  }), [F, V] = l.useState(!1), [K, X] = l.useState(!1), {
    voiceBar: J,
    joinVoiceButton: Q
  } = function(e) {
    let {
      channel: t,
      entry: n,
      requestId: s
    } = e, {
      streamPreviewUrl: i,
      channel: r
    } = (0, $.default)(n), o = (0, d.useStateFromStores)([k.default], () => null != r ? k.default.getGuild(r.guild_id) : void 0), c = (0, d.useStateFromStoresArray)([W.default], () => null != r ? W.default.getVoiceStatesForChannel(r) : [], [r]), h = l.useMemo(() => {
      for (let e of c) {
        let t = w.default.getDMFromUserId(e.user.id),
          n = null != t && B.default.isChannelMuted(null, t),
          a = G.default.isBlocked(e.user.id);
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
        I.default.updateChatOpen(r.id, !0), (0, b.transitionToChannel)(r.id), (0, et.trackInteraction)(ei.ContentInventoryInteractionTypes.VOICE_CHANNEL_PREVIEWED, {
          entry: n,
          channelId: t.id,
          guildId: t.guild_id,
          requestId: s,
          destinationChannelId: r.id,
          destinationGuildId: r.guild_id
        })
      },
      g = h ? eo.default.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : eo.default.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
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
              className: eu.popoutBlockedWarningIcon
            }), g]
          }),
          shouldShow: !0,
          children: t
        }, "voice-preview")
      },
      A = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)("div", {
          className: eu.voiceChannelPopoutReactorHeader,
          children: [(0, a.jsx)(T, {
            children: e => (0, a.jsxs)(_.Clickable, {
              ...e,
              "aria-label": eo.default.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
              onClick: E,
              className: eu.voiceChannelPopoutReactorChannel,
              children: [(0, a.jsx)(Y.default, {
                guild: o,
                size: Y.default.Sizes.SMOL,
                className: eu.voiceChannelGuildIcon,
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
                className: eu.voiceChannelName,
                children: r.name
              })]
            })
          }), (0, a.jsx)(z.default, {
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
              className: eu.voiceChannelAdditionalParticipants,
              children: (0, a.jsx)(_.Text, {
                variant: "text-xxs/semibold",
                color: "text-normal",
                children: e
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: eu.primaryActionPopoutDivider
        })]
      });
    return {
      voiceBar: A,
      joinVoiceButton: (0, a.jsx)(T, {
        children: e => (0, a.jsx)(e_, {
          ...e,
          color: _.Button.Colors.GREEN,
          onClick: E,
          IconComponent: m ? C.ScreenIcon : S.VoiceNormalIcon,
          children: eo.default.Messages.PREVIEW
        })
      })
    }
  }({
    channel: t,
    entry: A,
    requestId: v
  }), en = null != Q && 0 === x.length ? [Q] : x, el = en.length > 0, ed = en.length >= 2, [ec, ef] = l.useState(!el), eh = "#".concat(t.name), em = q.default.getName(t.guild_id, t.id, n), eE = L ? eo.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : eo.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, eC = async e => {
    if (null != e) {
      if (Z.default.track(er.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: ei.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), U) {
        let l;
        if ((0, y.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), V(!0), X(!1), L) l = t;
        else {
          var a;
          let e = await T.default.getOrEnsurePrivateChannel(n.id);
          l = null !== (a = w.default.getChannel(e)) && void 0 !== a ? a : null
        }
        return o()(null != l, "Send channel must be defined"), eS({
          reply: ":".concat(e.name, ":"),
          sendToChannel: l,
          onComplete: () => {
            X(!0), setTimeout(() => {
              V(!1), r()
            }, 600)
          },
          interactionType: ei.ContentInventoryInteractionTypes.REACTION_EMOJI_REACT_SENT
        })
      }
      ef(!0), null != O && (O.insertEmoji(e, !1, !1), O.focus())
    }
  }, eg = async e => {
    let a;
    if (U && (0, y.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), L) a = t;
    else {
      let e = await T.default.openPrivateChannel(n.id, !1, !1),
        t = w.default.getChannel(e);
      o()(null != t, "DM channel must be defined"), a = t
    }
    let l = a.type === er.ChannelTypes.DM ? ei.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : ei.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
    return eS({
      reply: e,
      sendToChannel: a,
      onComplete: r,
      interactionType: l
    })
  }, eS = async e => {
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
    }), (0, et.trackInteraction)(u, {
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
      pointerEvents: F ? "none" : "all"
    },
    children: [(0, a.jsx)(es.default, {
      sent: K,
      shown: F,
      className: eu.toastContainer
    }), null != eT ? eT : U ? (0, a.jsx)(ea.default, {
      children: (0, a.jsxs)("div", {
        className: eu.emojiHotrailShareToChannel,
        children: [(0, a.jsx)(ep, {
          channel: t,
          onClickSuggestion: eC
        }), (0, a.jsx)(N.ReactionPickerButton, {
          onSelectEmoji: eC
        })]
      })
    }) : (0, a.jsx)("div", {
      className: eu.emojiHotrailShareToChannel,
      children: (0, a.jsx)(ep, {
        channel: t,
        onClickSuggestion: eC
      })
    }), (0, a.jsxs)("div", {
      className: ec ? eu.inputContainerShareToChannel : eu.hiddenButRenderedInputField,
      children: [el && (0, a.jsx)(_.Clickable, {
        onClick: () => ef(!1),
        className: eu.primaryActionPopoutMessageCloseIcon,
        children: (0, a.jsx)(E.CloseSmallIcon, {
          width: 20,
          height: 20,
          color: f.default.colors.ICON_PRIMARY
        })
      }), (0, a.jsx)("div", {
        className: eu.replyInputWrapper,
        children: (0, a.jsx)(N.ReplyInput, {
          placeholder: eo.default.Messages.TEXTAREA_PLACEHOLDER.format({
            channel: L ? eh : "@".concat(em)
          }),
          onEnter: eg,
          setEditorRef: e => P(e),
          channel: L ? t : void 0,
          showEmojiButton: null != eT,
          renderAttachButton: D ? () => (0, a.jsx)(_.Tooltip, {
            text: eE,
            children: e => (0, a.jsx)(_.Clickable, {
              ...e,
              className: eu.shareToChannelButton,
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
      className: eu.primaryActionPopoutActionButtons,
      children: [(0, a.jsxs)(_.Button, {
        className: eu.secondaryButton,
        color: _.Button.Colors.CUSTOM,
        onClick: () => ef(!0),
        innerClassName: eu.iconButton,
        size: ed ? _.Button.Sizes.MIN : _.Button.Sizes.LARGE,
        children: [(0, a.jsx)(m.ChatIcon, {
          width: 20,
          height: 20,
          colorClass: eu.secondaryText
        }), !ed && (0, a.jsx)(_.Text, {
          variant: "text-md/semibold",
          className: eu.secondaryText,
          children: eo.default.Messages.USER_POPOUT_MESSAGE
        })]
      }, "toggleMessageMode"), en]
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
  let r = !!x.default.keyboardModeEnabled && !s,
    o = (0, R.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
      emoji: e,
      url: e.url
    } : {
      emoji: e,
      url: (0, X.getEmojiURL)({
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
          text: eo.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          position: "top",
          "aria-label": eo.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          color: _.Tooltip.Colors.PRIMARY,
          shouldShow: !r && void 0,
          children: (0, a.jsx)(F.HotBarEmoji, {
            emoji: t,
            isDisabled: !s,
            onClick: () => n(t),
            className: eu.emoji
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
  } = (0, Q.default)(s, 3), f = [u, d];
  return (0, a.jsxs)("div", {
    className: eu.popoutContentHeader,
    children: [(0, a.jsxs)("div", {
      className: eu.popoutUserContainer,
      children: [(0, a.jsx)(L.default, {
        maxUsers: 3,
        users: o,
        size: _.AvatarSizes.SIZE_24,
        avatarClassName: eu.popoutStackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }), (0, a.jsx)(_.Spacer, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(_.Heading, {
        variant: "heading-sm/normal",
        className: eu.popoutTextSecondary,
        children: n.format({
          user1: q.default.getName(r, t.id, f[0]),
          user2: q.default.getName(r, t.id, f[1]),
          countOthers: c,
          nameHook: (e, t) => (0, a.jsx)(_.Clickable, {
            tag: "span",
            onClick: () => (0, U.openUserProfileModal)({
              userId: f[parseInt(t)].id
            }),
            className: eu.maybeClickable,
            children: (0, a.jsx)(_.Text, {
              variant: "text-sm/medium",
              className: i()(eu.popoutUsername, eu.popoutTextPrimary),
              children: e
            }, t)
          })
        })
      })]
    }), (0, a.jsx)("div", {
      className: eu.popoutHeaderIcons,
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
    className: eu.maybeClickable,
    onClick: n,
    children: t
  })
}

function eg(e) {
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
  } = f, p = (0, J.isGamingLikeEntry)(h), E = (0, O.useCanSeeGameProfile)("ContentPopout");
  return (0, a.jsxs)(ec, {
    backgroundImgSrc: t,
    children: [(0, a.jsx)(eE, {
      ...f
    }), (0, a.jsx)(eC, {
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
        className: eu.popoutContentBody,
        children: [(0, a.jsx)("div", {
          className: eu.popoutThumbnailContainer,
          children: (0, a.jsx)(el.ContentImage, {
            size: 72,
            alt: s,
            src: t,
            fallbackSrc: l,
            className: eu.contentImage
          })
        }), (0, a.jsx)(_.Spacer, {
          size: 16,
          horizontal: !0
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(eC, {
            onClick: d,
            children: (0, a.jsx)(_.Heading, {
              variant: "heading-md/medium",
              className: eu.popoutTextPrimary,
              lineClamp: 3,
              children: i
            })
          }), null != r ? (0, a.jsx)(eC, {
            onClick: c,
            children: (0, a.jsx)(_.Text, {
              variant: "text-md/normal",
              className: eu.popoutTextSecondary,
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

function eS(e) {
  let {
    title: t,
    badges: n,
    stream: s,
    ...i
  } = e, r = (0, d.useStateFromStores)([w.default], () => w.default.getChannel(null == s ? void 0 : s.channelId)), [o] = l.useMemo(() => (0, P.canWatchStream)(r, V.default, k.default, H.default, j.default), [r]);
  return null == s ? null : (0, a.jsxs)(ec, {
    className: eu.streamingPopoutHero,
    children: [(0, a.jsx)(eE, {
      ...i,
      headerIcons: (0, a.jsx)(K.default, {
        size: K.default.Sizes.SMALL
      })
    }), (0, a.jsx)(_.Spacer, {
      size: 16
    }), (0, a.jsx)(eC, {
      onClick: o ? () => {
        A.default.selectVoiceChannel(s.channelId), (0, v.watchStreamAndTransitionToStream)(s)
      } : void 0,
      children: (0, a.jsxs)("div", {
        style: {
          position: "relative"
        },
        children: [(0, a.jsx)(D.default, {
          className: eu.streamingPopoutHero,
          stream: s
        }), o && (0, a.jsx)("div", {
          className: eu.streamCTA,
          children: (0, a.jsx)(_.Text, {
            variant: "text-md/normal",
            children: eo.default.Messages.WATCH_STREAM
          })
        })]
      })
    }), (0, a.jsx)(_.Spacer, {
      size: 16
    }), (0, a.jsx)(_.Heading, {
      variant: "heading-md/semibold",
      className: eu.popoutTextPrimary,
      lineClamp: 3,
      children: t
    }), (0, a.jsx)(_.Spacer, {
      size: 8
    }), n]
  })
}

function e_(e) {
  let {
    IconComponent: t,
    children: n,
    className: l,
    ...s
  } = e;
  return (0, a.jsxs)(_.Button, {
    ...s,
    className: i()(l, eu.primaryButton),
    innerClassName: null != t ? eu.iconButton : void 0,
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