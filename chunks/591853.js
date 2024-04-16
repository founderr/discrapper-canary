"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return P
  },
  PopoutAvatar: function() {
    return G
  },
  PopoutHero: function() {
    return D
  },
  PopoutInteractionsContainer: function() {
    return F
  },
  PopoutJoinPrompt: function() {
    return V
  },
  PopoutReactor: function() {
    return w
  },
  PopoutTitle: function() {
    return b
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
  x = n("907082"),
  M = n("69259"),
  R = n("206295"),
  L = n("206583"),
  y = n("981631"),
  O = n("689938"),
  j = n("522791");

function P(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, d.useFocusLock)(n), (0, a.jsx)("div", {
    className: j.popout,
    ref: n,
    children: t
  })
}

function D(e) {
  let {
    children: t,
    backgroundImgSrc: n
  } = e, {
    primaryColor: l,
    secondaryColor: s
  } = (0, R.default)(n);
  return (0, a.jsx)("div", {
    className: j.hero,
    style: {
      background: "linear-gradient(45deg, ".concat(l, ", ").concat(s, ")")
    },
    children: t
  })
}

function b(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(d.Heading, {
    className: j.popoutTitle,
    variant: "heading-md/normal",
    color: "always-white",
    lineClamp: 3,
    children: t
  })
}
let U = l.createContext(null);

function F(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: j.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: j.interactionsContainer,
      children: (0, a.jsx)(U.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function w(e) {
  let {
    generateReactionImage: t,
    reactionImageAltText: n,
    entry: s,
    requestId: r,
    ...o
  } = e, u = (0, x.useIsEligibleForMemberListShareToChannel)({
    location: "PopoutReactor"
  }), [d, c] = l.useState();
  l.useEffect(() => {
    null == d && e();
    async function e() {
      let e = await t("0");
      null != e && c(e)
    }
  }, [t, d]);
  let f = async e => {
    let {
      reply: t,
      channel: a
    } = e;
    i()(null != d, "Reaction image must be defined"), d.channelId = a.id, await (0, m.sendReply)({
      file: d,
      channel: a,
      altText: n,
      reply: t
    });
    let l = a.type === y.ChannelTypes.DM ? L.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : L.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
    (0, M.trackInteraction)(l, {
      entry: s,
      channelId: o.channel.id,
      guildId: o.channel.guild_id,
      requestId: r
    })
  };
  return u ? (0, a.jsx)(k, {
    ...o,
    reactionImage: d,
    onMessageReact: f
  }) : (0, a.jsx)(H, {
    ...o,
    reactionImage: d,
    onMessageReact: f
  })
}

function k(e) {
  let {
    channel: t,
    user: n,
    onMessageReact: s,
    closePopout: f
  } = e, m = (0, r.useStateFromStores)([v.default], () => v.default.isChannelReplyMode()), [p, E] = l.useState(null), S = l.useRef(null), T = (0, r.useStateFromStores)([g.default], () => g.default.can(y.Permissions.SEND_MESSAGES, t)), A = "#".concat(t.name), N = "@".concat(n.username), x = m ? O.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : O.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, M = async e => {
    if (m) return f(), await s({
      reply: e,
      channel: t
    });
    {
      let t = await c.default.openPrivateChannel(n.id, !1, !1),
        a = C.default.getChannel(t);
      return i()(null != a, "DM channel must be defined"), await s({
        reply: e,
        channel: a
      })
    }
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)("div", {
      className: j.emojiHotrailShareToChannel,
      children: (0, a.jsx)(B, {
        channel: t,
        onClickSuggestion: e => {
          null != e && null != p && (_.default.track(y.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
            surface_type: L.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
            channel_id: t.id,
            guild_id: t.guild_id
          }), p.insertEmoji(e, !1, !1), p.focus())
        }
      })
    }), (0, a.jsxs)("div", {
      className: j.inputContainerShareToChannel,
      children: [T && (0, a.jsx)(d.Tooltip, {
        text: x,
        children: e => (0, a.jsx)(d.Clickable, {
          ...e,
          className: j.shareToChannelButton,
          onClick: I.toggleContentInventoryReplyMode,
          children: m ? (0, a.jsx)(u.TextIcon, {
            width: 20,
            height: 20
          }) : (0, a.jsx)(o.AtIcon, {
            width: 20,
            height: 20
          })
        })
      }), (0, a.jsx)(h.ReplyInput, {
        ref: S,
        placeholder: O.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: m ? A : N
        }),
        onEnter: M,
        setEditorRef: e => E(e),
        autoCompletePosition: (() => {
          if (null == S || null == S.current) return "top";
          let e = S.current.getBoundingClientRect(),
            t = window.innerHeight;
          return e.top < t / 2 ? "bottom" : "top"
        })(),
        channel: m ? t : void 0,
        showEmojiButton: !0
      })]
    })]
  })
}

function H(e) {
  let {
    channel: t,
    onMessageReact: n,
    user: s
  } = e, [r, o] = l.useState(null), u = l.useRef(null), d = e => {
    null != e && null != r && (_.default.track(y.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: L.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: t.id,
      guild_id: t.guild_id
    }), r.insertEmoji(e, !1, !1), r.focus())
  }, f = async e => {
    let t = await c.default.openPrivateChannel(s.id, !1, !1),
      a = C.default.getChannel(t);
    i()(null != a, "DM channel must be defined"), await n({
      reply: e,
      channel: a
    })
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: j.emojiHotrail,
      children: [(0, a.jsx)(B, {
        channel: t,
        onClickSuggestion: d
      }), (0, a.jsx)(h.ReactionPickerButton, {
        onSelectEmoji: d
      })]
    }), (0, a.jsx)(h.ReplyInput, {
      ref: u,
      placeholder: O.default.Messages.TEXTAREA_PLACEHOLDER.format({
        channel: "@".concat(s.username)
      }),
      onEnter: f,
      setEditorRef: e => o(e),
      autoCompletePosition: (() => {
        if (null == u || null == u.current) return "top";
        let e = u.current.getBoundingClientRect(),
          t = window.innerHeight;
        return e.top < t / 2 ? "bottom" : "top"
      })()
    })]
  })
}
let B = e => {
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
        className: j.emojiSuggestionButton,
        children: (0, a.jsx)("img", {
          alt: t.name,
          src: l,
          className: j.emoji
        })
      }) : null
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
  } = A.VoiceEnrichmentsExperiment.useExperiment({
    location: "popout_join_prompt"
  }), {
    channel: l
  } = (0, N.default)(t), s = (0, r.useStateFromStores)([S.default], () => S.default.getUser(t.author_id));
  return n && null != l && null != s ? (0, a.jsx)("div", {
    className: j.joinPromptContainer,
    children: (0, a.jsx)(d.Button, {
      fullWidth: !0,
      onClick: () => {
        (0, E.transitionToGuild)(l.guild_id), f.default.selectVoiceChannel(l.id)
      },
      children: O.default.Messages.CONTENT_INVENTORY_JOIN_LIVE_CHANNEL.format({
        channelName: l.name
      })
    })
  }) : null
}