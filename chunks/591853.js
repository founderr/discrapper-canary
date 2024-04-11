"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return j
  },
  PopoutAvatar: function() {
    return B
  },
  PopoutHero: function() {
    return P
  },
  PopoutInteractionsContainer: function() {
    return U
  },
  PopoutJoinPrompt: function() {
    return G
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
  I = n("162461"),
  A = n("22211"),
  v = n("907082"),
  N = n("69259"),
  x = n("206295"),
  M = n("206583"),
  R = n("981631"),
  L = n("689938"),
  y = n("522791");
let O = e => {
  _.default.track(R.AnalyticEvents.MEMBERLIST_POPOUT_SHARE_TO_CHANNEL_TOGGLED, {
    is_send_to_channel: e
  })
};

function j(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, d.useFocusLock)(n), (0, a.jsx)("div", {
    className: y.popout,
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
  } = (0, x.default)(n);
  return (0, a.jsx)("div", {
    className: y.hero,
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
    className: y.popoutTitle,
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
      className: y.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: y.interactionsContainer,
      children: (0, a.jsx)(b.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function F(e) {
  let {
    generateReactionImage: t,
    reactionImageAltText: n,
    entry: s,
    requestId: r,
    ...o
  } = e, u = (0, v.useIsEligibleForMemberListShareToChannel)({
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
    let l = a.type === R.ChannelTypes.DM ? M.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : M.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
    (0, N.trackInteraction)(l, {
      entry: s,
      channelId: o.channel.id,
      guildId: o.channel.guild_id,
      requestId: r
    })
  };
  return u ? (0, a.jsx)(w, {
    ...o,
    reactionImage: d,
    onMessageReact: f
  }) : (0, a.jsx)(k, {
    ...o,
    reactionImage: d,
    onMessageReact: f
  })
}

function w(e) {
  let {
    channel: t,
    user: n,
    onMessageReact: s,
    closePopout: f
  } = e, [m, p] = l.useState(!1), [E, S] = l.useState(null), T = l.useRef(null), I = m ? "#".concat(t.name) : "@".concat(n.username), A = (0, r.useStateFromStores)([g.default], () => g.default.can(R.Permissions.SEND_MESSAGES, t)), v = async e => {
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
      className: y.emojiHotrailShareToChannel,
      children: (0, a.jsx)(H, {
        channel: t,
        onClickSuggestion: e => {
          null != e && null != E && (_.default.track(R.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
            surface_type: M.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
            channel_id: t.id,
            guild_id: t.guild_id
          }), E.insertEmoji(e, !1, !1), E.focus())
        }
      })
    }), (0, a.jsxs)("div", {
      className: y.inputContainerShareToChannel,
      children: [A && (0, a.jsx)(d.Clickable, {
        className: y.shareToChannelButton,
        onClick: () => {
          p(e => {
            let t = !e;
            return O(t), t
          })
        },
        children: m ? (0, a.jsx)(u.TextIcon, {
          width: 20,
          height: 20
        }) : (0, a.jsx)(o.AtIcon, {
          width: 20,
          height: 20
        })
      }), (0, a.jsx)(h.ReplyInput, {
        ref: T,
        placeholder: L.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: I
        }),
        onEnter: v,
        setEditorRef: e => S(e),
        autoCompletePosition: (() => {
          if (null == T || null == T.current) return "top";
          let e = T.current.getBoundingClientRect(),
            t = window.innerHeight;
          return e.top < t / 2 ? "bottom" : "top"
        })(),
        channel: m ? t : void 0,
        showEmojiButton: !0
      })]
    })]
  })
}

function k(e) {
  let {
    channel: t,
    onMessageReact: n,
    user: s
  } = e, [r, o] = l.useState(null), u = l.useRef(null), d = e => {
    null != e && null != r && (_.default.track(R.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: M.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
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
      className: y.emojiHotrail,
      children: [(0, a.jsx)(H, {
        channel: t,
        onClickSuggestion: d
      }), (0, a.jsx)(h.ReactionPickerButton, {
        onSelectEmoji: d
      })]
    }), (0, a.jsx)(h.ReplyInput, {
      ref: u,
      placeholder: L.default.Messages.TEXTAREA_PLACEHOLDER.format({
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
let H = e => {
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
        className: y.emojiSuggestionButton,
        children: (0, a.jsx)("img", {
          alt: t.name,
          src: l,
          className: y.emoji
        })
      }) : null
    })
  })
};

function B(e) {
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

function G(e) {
  let {
    entry: t
  } = e, {
    showJoinButton: n
  } = I.VoiceEnrichmentsExperiment.useExperiment({
    location: "popout_join_prompt"
  }), {
    channel: l
  } = (0, A.default)(t), s = (0, r.useStateFromStores)([S.default], () => S.default.getUser(t.author_id));
  return n && null != l && null != s ? (0, a.jsx)("div", {
    className: y.joinPromptContainer,
    children: (0, a.jsx)(d.Button, {
      fullWidth: !0,
      onClick: () => {
        (0, E.transitionToGuild)(l.guild_id), f.default.selectVoiceChannel(l.id)
      },
      children: L.default.Messages.CONTENT_INVENTORY_JOIN_LIVE_CHANNEL.format({
        channelName: l.name
      })
    })
  }) : null
}