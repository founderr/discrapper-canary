"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return w
  },
  PopoutAvatar: function() {
    return Y
  },
  PopoutHero: function() {
    return k
  },
  PopoutInteractionsContainer: function() {
    return G
  },
  PopoutJoinPrompt: function() {
    return z
  },
  PopoutReactor: function() {
    return V
  },
  PopoutTitle: function() {
    return H
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
  A = n("626135"),
  v = n("768581"),
  N = n("485267"),
  x = n("162461"),
  M = n("71585"),
  R = n("22211"),
  L = n("571243"),
  y = n("69259"),
  O = n("206295"),
  j = n("111386"),
  P = n("469153"),
  D = n("206583"),
  b = n("981631"),
  U = n("689938"),
  F = n("522791");

function w(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, c.useFocusLock)(n), (0, a.jsx)("div", {
    className: F.popout,
    ref: n,
    children: t
  })
}

function k(e) {
  let {
    children: t,
    backgroundImgSrc: n
  } = e, {
    primaryColor: l,
    secondaryColor: s
  } = (0, O.default)(n);
  return (0, a.jsx)("div", {
    className: F.hero,
    style: {
      background: "linear-gradient(45deg, ".concat(l, ", ").concat(s, ")")
    },
    children: t
  })
}

function H(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(c.Heading, {
    className: F.popoutTitle,
    variant: "heading-md/normal",
    color: "always-white",
    lineClamp: 3,
    children: t
  })
}
let B = l.createContext(null);

function G(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: F.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: F.interactionsContainer,
      children: (0, a.jsx)(B.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function V(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: s,
    reactionImageAltText: h,
    closePopout: C,
    entry: g,
    requestId: S
  } = e, I = (0, r.useStateFromStores)([M.default], () => M.default.isChannelReplyMode()), v = l.useRef(null), [x, R] = l.useState(null), O = (0, r.useStateFromStores)([T.default], () => T.default.can(b.Permissions.SEND_MESSAGES, t)), w = (0, L.useIsEligibleForMemberlistOneClickReply)({
    location: "PopoutReactor"
  }), [k, H] = l.useState(!1), [B, G] = l.useState(!1), V = "#".concat(t.name), Y = "@".concat(n.username), z = I ? U.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : U.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, K = async e => {
    if (null != e) {
      if (A.default.track(b.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: D.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), w) {
        let l;
        if ((0, E.markDismissibleContentAsDismissed)(o.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), H(!0), G(!1), I) l = t;
        else {
          var a;
          let e = await f.default.getOrEnsurePrivateChannel(n.id);
          l = null !== (a = _.default.getChannel(e)) && void 0 !== a ? a : null
        }
        return i()(null != l, "Send channel must be defined"), q({
          reply: ":".concat(e.name, ":"),
          sendToChannel: l,
          onComplete: () => {
            G(!0), setTimeout(() => {
              H(!1), C()
            }, 600)
          }
        })
      }
      null != x && (x.insertEmoji(e, !1, !1), x.focus())
    }
  }, Z = async e => {
    let a;
    if (w && (0, E.markDismissibleContentAsDismissed)(o.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), I) a = t;
    else {
      let e = await f.default.openPrivateChannel(n.id, !1, !1),
        t = _.default.getChannel(e);
      i()(null != t, "DM channel must be defined"), a = t
    }
    return q({
      reply: e,
      sendToChannel: a,
      onComplete: C
    })
  }, q = async e => {
    let {
      reply: n,
      sendToChannel: a,
      onComplete: l
    } = e, r = await s(a.id);
    i()(null != r, "Reaction image must be defined"), await (0, p.sendReply)({
      file: r,
      channel: a,
      altText: h,
      reply: n
    });
    let o = a.type === b.ChannelTypes.DM ? D.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : D.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
    (0, y.trackInteraction)(o, {
      entry: g,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: S
    }), null == l || l()
  };
  return (0, a.jsxs)("div", {
    style: {
      pointerEvents: k ? "none" : "all"
    },
    children: [(0, a.jsx)(P.default, {
      sent: B,
      shown: k,
      className: F.toastContainer
    }), w ? (0, a.jsx)(j.default, {
      children: (0, a.jsx)("div", {
        className: F.emojiHotrailShareToChannel,
        children: (0, a.jsx)(W, {
          channel: t,
          onClickSuggestion: K
        })
      })
    }) : (0, a.jsx)("div", {
      className: F.emojiHotrailShareToChannel,
      children: (0, a.jsx)(W, {
        channel: t,
        onClickSuggestion: K
      })
    }), (0, a.jsxs)("div", {
      className: F.inputContainerShareToChannel,
      children: [O && (0, a.jsx)(c.Tooltip, {
        text: z,
        children: e => (0, a.jsx)(c.Clickable, {
          ...e,
          className: F.shareToChannelButton,
          onClick: N.toggleContentInventoryReplyMode,
          children: I ? (0, a.jsx)(d.TextIcon, {
            width: 20,
            height: 20
          }) : (0, a.jsx)(u.AtIcon, {
            width: 20,
            height: 20
          })
        })
      }), (0, a.jsx)(m.ReplyInput, {
        ref: v,
        placeholder: U.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: I ? V : Y
        }),
        onEnter: Z,
        setEditorRef: e => R(e),
        autoCompletePosition: (() => {
          if (null == v || null == v.current) return "top";
          let e = v.current.getBoundingClientRect(),
            t = window.innerHeight;
          return e.top < t / 2 ? "bottom" : "top"
        })(),
        channel: I ? t : void 0,
        showEmojiButton: !0
      })]
    })]
  })
}
let W = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, C.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 6).map(e => null == e.id ? {
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
          text: U.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          position: "top",
          "aria-label": U.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          color: c.Tooltip.Colors.BLACK,
          children: (0, a.jsx)(S.HotBarEmoji, {
            emoji: t,
            isDisabled: !1,
            onClick: () => n(t),
            className: F.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function Y(e) {
  let {
    user: t,
    guildId: n
  } = e, l = t.getAvatarURL(n, 128);
  return (0, a.jsx)(c.Avatar, {
    src: l,
    size: c.AvatarSizes.SIZE_40,
    "aria-label": "avatar"
  })
}

function z(e) {
  let {
    entry: t
  } = e, {
    showJoinButton: n
  } = x.VoiceEnrichmentsExperiment.useExperiment({
    location: "popout_join_prompt"
  }), {
    channel: l
  } = (0, R.default)(t), s = (0, r.useStateFromStores)([I.default], () => I.default.getUser(t.author_id));
  return n && null != l && null != s ? (0, a.jsx)("div", {
    className: F.joinPromptContainer,
    children: (0, a.jsx)(c.Button, {
      fullWidth: !0,
      onClick: () => {
        (0, g.transitionToGuild)(l.guild_id), h.default.selectVoiceChannel(l.id)
      },
      children: U.default.Messages.CONTENT_INVENTORY_JOIN_LIVE_CHANNEL.format({
        channelName: l.name
      })
    })
  }) : null
}