"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return P
  },
  PopoutAvatar: function() {
    return B
  },
  PopoutHero: function() {
    return D
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
    return b
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("493683"),
  f = n("287734"),
  h = n("220779"),
  m = n("201133"),
  p = n("543241"),
  E = n("920440"),
  C = n("592125"),
  g = n("594174"),
  S = n("682864"),
  _ = n("626135"),
  T = n("768581"),
  I = n("956664"),
  A = n("162461"),
  v = n("22211"),
  x = n("907082"),
  N = n("69259"),
  M = n("206295"),
  R = n("885712"),
  L = n("206583"),
  y = n("981631"),
  O = n("689938"),
  j = n("522791");

function P(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: j.popout,
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
  } = (0, M.default)(n);
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

function U(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: j.interactionsContainer,
    children: t
  })
}

function F(e) {
  let {
    generateReactionImage: t,
    reactionImageAltText: n,
    entry: s,
    requestId: i,
    ...r
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
    o()(null != d, "Reaction image must be defined"), d.channelId = a.id, await (0, m.sendReply)({
      file: d,
      channel: a,
      altText: n,
      reply: t
    }), (0, N.trackInteraction)(L.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
      entry: s,
      channelId: r.channel.id,
      guildId: r.channel.guild_id,
      requestId: i
    })
  };
  return u ? (0, a.jsx)(w, {
    ...r,
    reactionImage: d,
    onMessageReact: f
  }) : (0, a.jsx)(k, {
    ...r,
    reactionImage: d,
    onMessageReact: f
  })
}

function w(e) {
  let {
    channel: t,
    user: n,
    updatePopoutPosition: s,
    reactionImage: r,
    onMessageReact: u
  } = e, [d, f] = l.useState(null), [m, p] = l.useState(null), E = l.useRef(null), [g, T] = l.useState(), [A, v] = l.useState(!1), x = null != r && null != d && !A, N = null == d || d.type === y.ChannelTypes.DM ? "@".concat(n.username) : "#".concat(d.name);
  l.useEffect(() => {
    (async function e() {
      let e = null == r ? void 0 : r.item.file;
      null != e && T(await (0, I.readFileAsBase64)(e))
    })()
  }, [r]), l.useEffect(() => {
    let e = C.default.getDMFromUserId(n.id);
    null == C.default.getChannel(e) && c.default.getOrEnsurePrivateChannel(n.id)
  }, [n.id]);
  let M = e => {
      null != e && null != m && (_.default.track(y.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
        surface_type: L.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
        channel_id: t.id,
        guild_id: t.guild_id
      }), m.focus(), P(":".concat(e.name, ":")))
    },
    P = async e => {
      let t = d;
      if (null == t) {
        var a;
        let e = C.default.getDMFromUserId(n.id);
        t = null !== (a = C.default.getChannel(e)) && void 0 !== a ? a : null
      }
      o()(null != t, "Selected channel must be defined"), v(!0), !A && await u({
        reply: e,
        channel: t
      })
    };
  return (0, a.jsxs)("div", {
    children: [null == d ? (0, a.jsxs)("div", {
      className: j.emojiHotrailShareToChannel,
      children: [(0, a.jsx)(H, {
        channel: t,
        onClickSuggestion: M
      }), (0, a.jsx)(h.ReactionPickerButton, {
        onSelectEmoji: M
      })]
    }) : (0, a.jsx)(R.ShareToChannelHeader, {
      channel: d,
      onClose: () => {
        f(null), v(!1), null == s || s()
      }
    }), null != d && (0, a.jsx)(R.MessageHistory, {
      channel: d,
      onMessagesLoad: s
    }), (0, a.jsxs)("div", {
      className: j.inputContainerShareToChannel,
      children: [x && (0, a.jsx)("div", {
        className: j.attachmentContainer,
        children: (0, a.jsx)("img", {
          src: g,
          alt: "",
          className: j.attachment
        })
      }), (0, a.jsxs)("div", {
        className: i()(j.shareToChannelInput, x && j.shareToChannelInputHasAttachments),
        children: [null == d && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(S.default, {
            size: 16,
            horizontal: !0
          }), (0, a.jsx)(R.ShareToChannelDropdownSelect, {
            user: n,
            selectedChannel: d,
            onSelect: e => {
              f(e), null == m || m.focus()
            }
          })]
        }), (0, a.jsx)(h.ReplyInput, {
          ref: E,
          placeholder: O.default.Messages.TEXTAREA_PLACEHOLDER.format({
            channel: N
          }),
          onFocus: () => {
            if (null == d) {
              let e = C.default.getDMFromUserId(n.id),
                t = C.default.getChannel(e);
              null != t && (f(t), null == m || m.focus())
            }
          },
          onEnter: P,
          setEditorRef: e => p(e),
          autoCompletePosition: (() => {
            if (null == E || null == E.current) return "top";
            let e = E.current.getBoundingClientRect(),
              t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top"
          })(),
          channel: d
        })]
      })]
    })]
  })
}

function k(e) {
  let {
    channel: t,
    onMessageReact: n,
    user: s
  } = e, [i, r] = l.useState(null), u = l.useRef(null), d = e => {
    null != e && null != i && (_.default.track(y.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: L.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: t.id,
      guild_id: t.guild_id
    }), i.insertEmoji(e, !1, !1), i.focus())
  }, f = async e => {
    let t = await c.default.openPrivateChannel(s.id, !1, !1),
      a = C.default.getChannel(t);
    o()(null != a, "DM channel must be defined"), await n({
      reply: e,
      channel: a
    })
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: j.emojiHotrail,
      children: [(0, a.jsx)(H, {
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
      setEditorRef: e => r(e),
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
  } = A.VoiceEnrichmentsExperiment.useExperiment({
    location: "popout_join_prompt"
  }), {
    channel: l
  } = (0, v.default)(t), s = (0, u.useStateFromStores)([g.default], () => g.default.getUser(t.author_id));
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