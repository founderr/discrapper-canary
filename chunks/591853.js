"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return j
  },
  PopoutAvatar: function() {
    return k
  },
  PopoutHero: function() {
    return P
  },
  PopoutInteractionsContainer: function() {
    return U
  },
  PopoutJoinPrompt: function() {
    return H
  },
  PopoutReactor: function() {
    return F
  },
  PopoutTitle: function() {
    return D
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
  E = n("920440"),
  C = n("592125"),
  g = n("496675"),
  S = n("594174"),
  _ = n("626135"),
  T = n("768581"),
  I = n("485267"),
  A = n("162461"),
  v = n("71585"),
  N = n("22211"),
  x = n("69259"),
  M = n("206295"),
  R = n("206583"),
  L = n("981631"),
  y = n("689938"),
  O = n("522791");

function j(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, d.useFocusLock)(n), (0, a.jsx)("div", {
    className: O.popout,
    ref: n,
    children: t
  })
}

function P(e) {
  let {
    children: t,
    backgroundImgSrc: n
  } = e, {
    primaryColor: l,
    secondaryColor: s
  } = (0, M.default)(n);
  return (0, a.jsx)("div", {
    className: O.hero,
    style: {
      background: "linear-gradient(45deg, ".concat(l, ", ").concat(s, ")")
    },
    children: t
  })
}

function D(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(d.Heading, {
    className: O.popoutTitle,
    variant: "heading-md/normal",
    color: "always-white",
    lineClamp: 3,
    children: t
  })
}
let b = l.createContext(null);

function U(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: O.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: O.interactionsContainer,
      children: (0, a.jsx)(b.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function F(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: s,
    reactionImageAltText: f,
    closePopout: p,
    entry: E,
    requestId: S
  } = e, T = (0, r.useStateFromStores)([v.default], () => v.default.isChannelReplyMode()), [A, N] = l.useState(null), M = l.useRef(null), j = (0, r.useStateFromStores)([g.default], () => g.default.can(L.Permissions.SEND_MESSAGES, t)), P = "#".concat(t.name), D = "@".concat(n.username), b = T ? y.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : y.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, U = async e => {
    let a;
    if (T) a = t;
    else {
      let e = await c.default.openPrivateChannel(n.id, !1, !1),
        t = C.default.getChannel(e);
      i()(null != t, "DM channel must be defined"), a = t
    }
    let l = await s(a.id);
    i()(null != l, "Reaction image must be defined"), await (0, m.sendReply)({
      file: l,
      channel: a,
      altText: f,
      reply: e
    });
    let r = a.type === L.ChannelTypes.DM ? R.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : R.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
    (0, x.trackInteraction)(r, {
      entry: E,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: S
    }), p()
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)("div", {
      className: O.emojiHotrailShareToChannel,
      children: (0, a.jsx)(w, {
        channel: t,
        onClickSuggestion: e => {
          null != e && null != A && (_.default.track(L.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
            surface_type: R.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
            channel_id: t.id,
            guild_id: t.guild_id
          }), A.insertEmoji(e, !1, !1), A.focus())
        }
      })
    }), (0, a.jsxs)("div", {
      className: O.inputContainerShareToChannel,
      children: [j && (0, a.jsx)(d.Tooltip, {
        text: b,
        children: e => (0, a.jsx)(d.Clickable, {
          ...e,
          className: O.shareToChannelButton,
          onClick: I.toggleContentInventoryReplyMode,
          children: T ? (0, a.jsx)(u.TextIcon, {
            width: 20,
            height: 20
          }) : (0, a.jsx)(o.AtIcon, {
            width: 20,
            height: 20
          })
        })
      }), (0, a.jsx)(h.ReplyInput, {
        ref: M,
        placeholder: y.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: T ? P : D
        }),
        onEnter: U,
        setEditorRef: e => N(e),
        autoCompletePosition: (() => {
          if (null == M || null == M.current) return "top";
          let e = M.current.getBoundingClientRect(),
            t = window.innerHeight;
          return e.top < t / 2 ? "bottom" : "top"
        })(),
        channel: T ? t : void 0,
        showEmojiButton: !0
      })]
    })]
  })
}
let w = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, p.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
    emoji: e,
    url: e.url
  } : {
    emoji: e,
    url: (0, T.getEmojiURL)({
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
      return null != l ? (0, a.jsx)(d.Clickable, {
        onClick: () => n(t),
        className: O.emojiSuggestionButton,
        children: (0, a.jsx)("img", {
          alt: t.name,
          src: l,
          className: O.emoji
        })
      }) : null
    })
  })
};

function k(e) {
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

function H(e) {
  let {
    entry: t
  } = e, {
    showJoinButton: n
  } = A.VoiceEnrichmentsExperiment.useExperiment({
    location: "popout_join_prompt"
  }), {
    channel: l
  } = (0, N.default)(t), s = (0, r.useStateFromStores)([S.default], () => S.default.getUser(t.author_id));
  return n && null != l && null != s ? (0, a.jsx)("div", {
    className: O.joinPromptContainer,
    children: (0, a.jsx)(d.Button, {
      fullWidth: !0,
      onClick: () => {
        (0, E.transitionToGuild)(l.guild_id), f.default.selectVoiceChannel(l.id)
      },
      children: y.default.Messages.CONTENT_INVENTORY_JOIN_LIVE_CHANNEL.format({
        channelName: l.name
      })
    })
  }) : null
}