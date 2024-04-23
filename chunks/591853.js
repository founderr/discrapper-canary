"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return b
  },
  PopoutAvatar: function() {
    return G
  },
  PopoutHero: function() {
    return U
  },
  PopoutInteractionsContainer: function() {
    return k
  },
  PopoutJoinPrompt: function() {
    return V
  },
  PopoutReactor: function() {
    return H
  },
  PopoutTitle: function() {
    return F
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s);
n("699581");
var r = n("442837"),
  o = n("662645"),
  u = n("352903"),
  d = n("481060"),
  c = n("493683"),
  f = n("287734"),
  h = n("220779"),
  m = n("201133"),
  p = n("543241"),
  E = n("769654"),
  C = n("12168"),
  g = n("592125"),
  S = n("496675"),
  _ = n("594174"),
  T = n("626135"),
  I = n("768581"),
  A = n("485267"),
  v = n("162461"),
  N = n("71585"),
  x = n("22211"),
  M = n("571243"),
  R = n("69259"),
  L = n("206295"),
  y = n("469153"),
  O = n("206583"),
  j = n("981631"),
  P = n("689938"),
  D = n("522791");

function b(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, d.useFocusLock)(n), (0, a.jsx)("div", {
    className: D.popout,
    ref: n,
    children: t
  })
}

function U(e) {
  let {
    children: t,
    backgroundImgSrc: n
  } = e, {
    primaryColor: l,
    secondaryColor: s
  } = (0, L.default)(n);
  return (0, a.jsx)("div", {
    className: D.hero,
    style: {
      background: "linear-gradient(45deg, ".concat(l, ", ").concat(s, ")")
    },
    children: t
  })
}

function F(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(d.Heading, {
    className: D.popoutTitle,
    variant: "heading-md/normal",
    color: "always-white",
    lineClamp: 3,
    children: t
  })
}
let w = l.createContext(null);

function k(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: D.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: D.interactionsContainer,
      children: (0, a.jsx)(w.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function H(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: s,
    reactionImageAltText: f,
    closePopout: p,
    entry: E,
    requestId: C
  } = e, _ = (0, r.useStateFromStores)([N.default], () => N.default.isChannelReplyMode()), I = l.useRef(null), [v, x] = l.useState(null), L = (0, r.useStateFromStores)([S.default], () => S.default.can(j.Permissions.SEND_MESSAGES, t)), b = (0, M.useIsEligibleForMemberlistOneClickReply)({
    location: "PopoutReactor"
  }), [U, F] = l.useState(!1), [w, k] = l.useState(!1), H = "#".concat(t.name), G = "@".concat(n.username), V = _ ? P.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : P.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, W = async e => {
    if (null != e) {
      if (T.default.track(j.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: O.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), b) {
        let l;
        if (F(!0), k(!1), _) l = t;
        else {
          var a;
          let e = await c.default.getOrEnsurePrivateChannel(n.id);
          l = null !== (a = g.default.getChannel(e)) && void 0 !== a ? a : null
        }
        return i()(null != l, "Send channel must be defined"), z({
          reply: ":".concat(e.name, ":"),
          sendToChannel: l,
          onComplete: () => {
            k(!0), setTimeout(() => {
              F(!1), p()
            }, 600)
          }
        })
      }
      null != v && (v.insertEmoji(e, !1, !1), v.focus())
    }
  }, Y = async e => {
    let a;
    if (_) a = t;
    else {
      let e = await c.default.openPrivateChannel(n.id, !1, !1),
        t = g.default.getChannel(e);
      i()(null != t, "DM channel must be defined"), a = t
    }
    return z({
      reply: e,
      sendToChannel: a,
      onComplete: p
    })
  }, z = async e => {
    let {
      reply: n,
      sendToChannel: a,
      onComplete: l
    } = e, r = await s(a.id);
    i()(null != r, "Reaction image must be defined"), await (0, m.sendReply)({
      file: r,
      channel: a,
      altText: f,
      reply: n
    });
    let o = a.type === j.ChannelTypes.DM ? O.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : O.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
    (0, R.trackInteraction)(o, {
      entry: E,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: C
    }), null == l || l()
  };
  return (0, a.jsxs)("div", {
    style: {
      pointerEvents: U ? "none" : "all"
    },
    children: [(0, a.jsx)(y.default, {
      sent: w,
      shown: U,
      className: D.toastContainer
    }), (0, a.jsx)("div", {
      className: D.emojiHotrailShareToChannel,
      children: (0, a.jsx)(B, {
        channel: t,
        onClickSuggestion: W
      })
    }), (0, a.jsxs)("div", {
      className: D.inputContainerShareToChannel,
      children: [L && (0, a.jsx)(d.Tooltip, {
        text: V,
        children: e => (0, a.jsx)(d.Clickable, {
          ...e,
          className: D.shareToChannelButton,
          onClick: A.toggleContentInventoryReplyMode,
          children: _ ? (0, a.jsx)(u.TextIcon, {
            width: 20,
            height: 20
          }) : (0, a.jsx)(o.AtIcon, {
            width: 20,
            height: 20
          })
        })
      }), (0, a.jsx)(h.ReplyInput, {
        ref: I,
        placeholder: P.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: _ ? H : G
        }),
        onEnter: Y,
        setEditorRef: e => x(e),
        autoCompletePosition: (() => {
          if (null == I || null == I.current) return "top";
          let e = I.current.getBoundingClientRect(),
            t = window.innerHeight;
          return e.top < t / 2 ? "bottom" : "top"
        })(),
        channel: _ ? t : void 0,
        showEmojiButton: !0
      })]
    })]
  })
}
let B = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, p.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 6).map(e => null == e.id ? {
    emoji: e,
    url: e.url
  } : {
    emoji: e,
    url: (0, I.getEmojiURL)({
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
        children: (0, a.jsx)(d.TooltipContainer, {
          text: P.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          position: "top",
          "aria-label": P.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          color: d.Tooltip.Colors.BRAND,
          children: (0, a.jsx)(C.HotBarEmoji, {
            emoji: t,
            isDisabled: !1,
            onClick: () => n(t),
            className: D.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function G(e) {
  let {
    user: t,
    guildId: n
  } = e, l = t.getAvatarURL(n, 128);
  return (0, a.jsx)(d.Avatar, {
    src: l,
    size: d.AvatarSizes.SIZE_40,
    "aria-label": "avatar"
  })
}

function V(e) {
  let {
    entry: t
  } = e, {
    showJoinButton: n
  } = v.VoiceEnrichmentsExperiment.useExperiment({
    location: "popout_join_prompt"
  }), {
    channel: l
  } = (0, x.default)(t), s = (0, r.useStateFromStores)([_.default], () => _.default.getUser(t.author_id));
  return n && null != l && null != s ? (0, a.jsx)("div", {
    className: D.joinPromptContainer,
    children: (0, a.jsx)(d.Button, {
      fullWidth: !0,
      onClick: () => {
        (0, E.transitionToGuild)(l.guild_id), f.default.selectVoiceChannel(l.id)
      },
      children: P.default.Messages.CONTENT_INVENTORY_JOIN_LIVE_CHANNEL.format({
        channelName: l.name
      })
    })
  }) : null
}