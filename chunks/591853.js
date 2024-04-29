"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return B
  },
  PopoutContent: function() {
    return Z
  },
  PopoutInteractionsContainer: function() {
    return W
  },
  PopoutJoinPrompt: function() {
    return K
  },
  PopoutReactor: function() {
    return Y
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s);
n("699581");
var r = n("442837"),
  o = n("524437"),
  u = n("662645"),
  d = n("352903"),
  c = n("481060"),
  f = n("493683"),
  h = n("287734"),
  m = n("220779"),
  p = n("201133"),
  E = n("605236"),
  C = n("543241"),
  g = n("769654"),
  S = n("12168"),
  _ = n("592125"),
  T = n("496675"),
  I = n("594174"),
  A = n("682864"),
  N = n("626135"),
  v = n("768581"),
  x = n("5192"),
  M = n("485267"),
  R = n("162461"),
  L = n("71585"),
  y = n("22211"),
  O = n("571243"),
  j = n("69259"),
  P = n("206295"),
  D = n("111386"),
  b = n("43205"),
  U = n("469153"),
  F = n("206583"),
  w = n("981631"),
  k = n("689938"),
  H = n("50928");

function B(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, c.useFocusLock)(n), (0, a.jsx)("div", {
    className: H.popout,
    ref: n,
    children: t
  })
}

function G(e) {
  let {
    children: t,
    backgroundImgSrc: n
  } = e, {
    primaryColor: l,
    secondaryColor: s
  } = (0, P.default)(n);
  return (0, a.jsx)("div", {
    className: H.hero,
    style: {
      background: "linear-gradient(45deg, ".concat(l, ", ").concat(s, ")")
    },
    children: t
  })
}
let V = l.createContext(null);

function W(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: H.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: H.interactionsContainer,
      children: (0, a.jsx)(V.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function Y(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: s,
    reactionImageAltText: h,
    closePopout: C,
    entry: g,
    requestId: S
  } = e, I = (0, r.useStateFromStores)([L.default], () => L.default.isChannelReplyMode()), A = l.useRef(null), [v, R] = l.useState(null), y = (0, r.useStateFromStores)([T.default], () => T.default.can(w.Permissions.SEND_MESSAGES, t)), P = (0, O.useIsEligibleForMemberlistOneClickReply)({
    location: "PopoutReactor"
  }), [b, B] = l.useState(!1), [G, V] = l.useState(!1), W = "#".concat(t.name), Y = x.default.getName(t.guild_id, t.id, n), K = I ? k.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : k.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, Z = async e => {
    if (null != e) {
      if (N.default.track(w.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: F.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), P) {
        let l;
        if ((0, E.markDismissibleContentAsDismissed)(o.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), B(!0), V(!1), I) l = t;
        else {
          var a;
          let e = await f.default.getOrEnsurePrivateChannel(n.id);
          l = null !== (a = _.default.getChannel(e)) && void 0 !== a ? a : null
        }
        return i()(null != l, "Send channel must be defined"), X({
          reply: ":".concat(e.name, ":"),
          sendToChannel: l,
          onComplete: () => {
            V(!0), setTimeout(() => {
              B(!1), C()
            }, 600)
          },
          interactionType: F.ContentInventoryInteractionTypes.REACTION_EMOJI_REACT_SENT
        })
      }
      null != v && (v.insertEmoji(e, !1, !1), v.focus())
    }
  }, q = async e => {
    let a;
    if (P && (0, E.markDismissibleContentAsDismissed)(o.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), I) a = t;
    else {
      let e = await f.default.openPrivateChannel(n.id, !1, !1),
        t = _.default.getChannel(e);
      i()(null != t, "DM channel must be defined"), a = t
    }
    let l = a.type === w.ChannelTypes.DM ? F.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : F.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
    return X({
      reply: e,
      sendToChannel: a,
      onComplete: C,
      interactionType: l
    })
  }, X = async e => {
    let {
      reply: n,
      sendToChannel: a,
      onComplete: l,
      interactionType: r
    } = e, o = await s(a.id);
    i()(null != o, "Reaction image must be defined"), await (0, p.sendReply)({
      file: o,
      channel: a,
      altText: h,
      reply: n
    }), (0, j.trackInteraction)(r, {
      entry: g,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: S,
      destinationChannelId: a.id,
      destinationGuildId: a.guild_id
    }), null == l || l()
  };
  return (0, a.jsxs)("div", {
    style: {
      pointerEvents: b ? "none" : "all"
    },
    children: [(0, a.jsx)(U.default, {
      sent: G,
      shown: b,
      className: H.toastContainer
    }), P ? (0, a.jsx)(D.default, {
      children: (0, a.jsxs)("div", {
        className: H.emojiHotrailShareToChannel,
        children: [(0, a.jsx)(z, {
          channel: t,
          onClickSuggestion: Z
        }), (0, a.jsx)(m.ReactionPickerButton, {
          onSelectEmoji: Z
        })]
      })
    }) : (0, a.jsx)("div", {
      className: H.emojiHotrailShareToChannel,
      children: (0, a.jsx)(z, {
        channel: t,
        onClickSuggestion: Z
      })
    }), (0, a.jsxs)("div", {
      className: H.inputContainerShareToChannel,
      children: [y && (0, a.jsx)(c.Tooltip, {
        text: K,
        children: e => (0, a.jsx)(c.Clickable, {
          ...e,
          className: H.shareToChannelButton,
          onClick: M.toggleContentInventoryReplyMode,
          children: I ? (0, a.jsx)(d.TextIcon, {
            width: 20,
            height: 20
          }) : (0, a.jsx)(u.AtIcon, {
            width: 20,
            height: 20
          })
        })
      }), (0, a.jsx)(m.ReplyInput, {
        ref: A,
        placeholder: k.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: I ? W : "@".concat(Y)
        }),
        onEnter: q,
        setEditorRef: e => R(e),
        autoCompletePosition: (() => {
          if (null == A || null == A.current) return "top";
          let e = A.current.getBoundingClientRect(),
            t = window.innerHeight;
          return e.top < t / 2 ? "bottom" : "top"
        })(),
        channel: I ? t : void 0
      })]
    })]
  })
}
let z = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, C.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
    emoji: e,
    url: e.url
  } : {
    emoji: e,
    url: (0, v.getEmojiURL)({
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
        children: (0, a.jsx)(c.TooltipContainer, {
          text: k.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          position: "top",
          "aria-label": k.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          color: c.Tooltip.Colors.PRIMARY,
          children: (0, a.jsx)(S.HotBarEmoji, {
            emoji: t,
            isDisabled: !1,
            onClick: () => n(t),
            className: H.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function K(e) {
  let {
    entry: t,
    requestId: n,
    channel: l
  } = e, {
    showJoinButton: s
  } = R.VoiceEnrichmentsExperiment.useExperiment({
    location: "popout_join_prompt"
  }), {
    channel: i
  } = (0, y.default)(t), o = (0, r.useStateFromStores)([I.default], () => I.default.getUser(t.author_id));
  return s && null != i && null != o ? (0, a.jsx)("div", {
    className: H.joinPromptContainer,
    children: (0, a.jsx)(c.Button, {
      fullWidth: !0,
      onClick: () => {
        (0, j.trackInteraction)(F.ContentInventoryInteractionTypes.VOICE_CHANNEL_JOINED, {
          requestId: n,
          entry: t,
          channelId: l.id,
          guildId: l.guild_id,
          destinationChannelId: i.id,
          destinationGuildId: i.guild_id
        }), (0, g.transitionToGuild)(i.guild_id), h.default.selectVoiceChannel(i.id)
      },
      children: k.default.Messages.CONTENT_INVENTORY_JOIN_LIVE_CHANNEL.format({
        channelName: i.name
      })
    })
  }) : null
}

function Z(e) {
  let {
    thumbnailSrc: t,
    user: n,
    channel: l,
    userDescription: s,
    ContentTypeIcon: i,
    title: r,
    subtitle: o,
    badges: u
  } = e, d = l.guild_id, f = x.default.getName(d, l.id, n);
  return (0, a.jsx)("div", {
    className: "theme-".concat(w.ThemeTypes.DARK),
    children: (0, a.jsxs)(G, {
      backgroundImgSrc: t,
      children: [(0, a.jsxs)("div", {
        className: H.popoutContentHeader,
        children: [(0, a.jsxs)("div", {
          className: H.popoutUserContainer,
          children: [(0, a.jsx)(c.Avatar, {
            src: n.getAvatarURL(d, 24),
            size: c.AvatarSizes.SIZE_24,
            "aria-label": "avatar"
          }), (0, a.jsx)(A.default, {
            size: 8,
            horizontal: !0
          }), (0, a.jsx)(c.Heading, {
            variant: "heading-sm/normal",
            color: "text-secondary",
            children: s.format({
              username: f,
              nameHook: e => (0, a.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "header-primary",
                className: H.popoutUsername,
                children: e
              })
            })
          })]
        }), null != i ? (0, a.jsx)(i, {}) : null]
      }), (0, a.jsx)(A.default, {
        size: 16
      }), (0, a.jsxs)("div", {
        className: H.popoutContentBody,
        children: [(0, a.jsx)("div", {
          className: H.popoutThumbnailContainer,
          children: (0, a.jsx)(b.ContentImage, {
            size: 72,
            src: t,
            className: H.contentImage
          })
        }), (0, a.jsx)(A.default, {
          size: 16,
          horizontal: !0
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            lineClamp: 3,
            children: r
          }), null != o ? (0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-secondary",
            children: o
          }) : null, (0, a.jsx)(A.default, {
            size: 8
          }), u]
        })]
      })]
    })
  })
}