"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return b
  },
  PopoutAvatar: function() {
    return Y
  },
  PopoutHero: function() {
    return U
  },
  PopoutInteractionsContainer: function() {
    return k
  },
  PopoutJoinPrompt: function() {
    return z
  },
  PopoutReactor: function() {
    return B
  },
  PopoutTitle: function() {
    return F
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("699581"),
  d = n.n(u),
  c = n("442837"),
  f = n("481060"),
  h = n("493683"),
  m = n("287734"),
  p = n("220779"),
  E = n("201133"),
  C = n("543241"),
  g = n("920440"),
  S = n("592125"),
  _ = n("594174"),
  T = n("682864"),
  I = n("626135"),
  A = n("768581"),
  v = n("956664"),
  x = n("162461"),
  N = n("22211"),
  M = n("907082"),
  R = n("69259"),
  L = n("206295"),
  y = n("885712"),
  j = n("206583"),
  O = n("981631"),
  P = n("689938"),
  D = n("522791");

function b(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: D.popout,
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
  return (0, a.jsx)(f.Heading, {
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
    children: t
  } = e, n = l.useContext(w);
  return null == n ? null : d().createPortal(t, n)
}

function B(e) {
  let {
    generateReactionImage: t,
    reactionImageAltText: n,
    entry: s,
    requestId: i,
    ...r
  } = e, u = (0, M.useIsEligibleForMemberListShareToChannel)({
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
    o()(null != d, "Reaction image must be defined"), d.channelId = a.id, await (0, E.sendReply)({
      file: d,
      channel: a,
      altText: n,
      reply: t
    }), (0, R.trackInteraction)(j.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
      entry: s,
      channelId: r.channel.id,
      guildId: r.channel.guild_id,
      requestId: i
    })
  };
  return u ? (0, a.jsx)(G, {
    ...r,
    reactionImage: d,
    onMessageReact: f
  }) : (0, a.jsx)(V, {
    ...r,
    reactionImage: d,
    onMessageReact: f
  })
}

function G(e) {
  let {
    channel: t,
    user: n,
    updatePopoutPosition: s,
    reactionImage: r,
    onMessageReact: u
  } = e, [d, c] = l.useState(null), [f, m] = l.useState(null), E = l.useRef(null), [C, g] = l.useState(), [_, A] = l.useState(!1), x = null != r && null != d && !_, N = null == d || d.type === O.ChannelTypes.DM ? "@".concat(n.username) : "#".concat(d.name);
  l.useEffect(() => {
    (async function e() {
      let e = null == r ? void 0 : r.item.file;
      null != e && g(await (0, v.readFileAsBase64)(e))
    })()
  }, [r]), l.useEffect(() => {
    let e = S.default.getDMFromUserId(n.id);
    null == S.default.getChannel(e) && h.default.getOrEnsurePrivateChannel(n.id)
  }, [n.id]);
  let M = e => {
      null != e && null != f && (I.default.track(O.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
        surface_type: j.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
        channel_id: t.id,
        guild_id: t.guild_id
      }), f.focus(), R(":".concat(e.name, ":")))
    },
    R = async e => {
      let t = d;
      if (null == t) {
        var a;
        let e = S.default.getDMFromUserId(n.id);
        t = null !== (a = S.default.getChannel(e)) && void 0 !== a ? a : null
      }
      o()(null != t, "Selected channel must be defined"), A(!0), !_ && await u({
        reply: e,
        channel: t
      })
    };
  return (0, a.jsxs)("div", {
    children: [null == d ? (0, a.jsxs)("div", {
      className: D.emojiHotrailShareToChannel,
      children: [(0, a.jsx)(W, {
        channel: t,
        onClickSuggestion: M
      }), (0, a.jsx)(p.ReactionPickerButton, {
        onSelectEmoji: M
      })]
    }) : (0, a.jsx)(H, {
      children: (0, a.jsx)(y.ShareToChannelHeader, {
        channel: d,
        onClose: () => {
          c(null), A(!1), null == s || s()
        }
      })
    }), null != d && (0, a.jsx)(y.MessageHistory, {
      channel: d,
      onMessagesLoad: s
    }), (0, a.jsxs)("div", {
      children: [x && (0, a.jsx)("div", {
        className: D.attachmentContainer,
        children: (0, a.jsx)("img", {
          src: C,
          alt: "",
          className: D.attachment
        })
      }), (0, a.jsxs)("div", {
        className: i()(D.shareToChannelInput, x && D.shareToChannelInputHasAttachments),
        children: [null == d && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(T.default, {
            size: 16,
            horizontal: !0
          }), (0, a.jsx)(y.ShareToChannelDropdownSelect, {
            user: n,
            selectedChannel: d,
            onSelect: e => {
              c(e), null == f || f.focus()
            }
          })]
        }), (0, a.jsx)(p.ReplyInput, {
          ref: E,
          placeholder: P.default.Messages.TEXTAREA_PLACEHOLDER.format({
            channel: N
          }),
          onFocus: () => {
            if (null == d) {
              let e = S.default.getDMFromUserId(n.id),
                t = S.default.getChannel(e);
              null != t && (c(t), null == f || f.focus())
            }
          },
          onEnter: R,
          setEditorRef: e => m(e),
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

function V(e) {
  let {
    channel: t,
    onMessageReact: n,
    user: s
  } = e, [i, r] = l.useState(null), u = l.useRef(null), d = e => {
    null != e && null != i && (I.default.track(O.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: j.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: t.id,
      guild_id: t.guild_id
    }), i.insertEmoji(e, !1, !1), i.focus())
  }, c = async e => {
    let t = await h.default.openPrivateChannel(s.id, !1, !1),
      a = S.default.getChannel(t);
    o()(null != a, "DM channel must be defined"), await n({
      reply: e,
      channel: a
    })
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: D.emojiHotrail,
      children: [(0, a.jsx)(W, {
        channel: t,
        onClickSuggestion: d
      }), (0, a.jsx)(p.ReactionPickerButton, {
        onSelectEmoji: d
      })]
    }), (0, a.jsx)(p.ReplyInput, {
      ref: u,
      placeholder: P.default.Messages.TEXTAREA_PLACEHOLDER.format({
        channel: "@".concat(s.username)
      }),
      onEnter: c,
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
let W = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, C.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
    emoji: e,
    url: e.url
  } : {
    emoji: e,
    url: (0, A.getEmojiURL)({
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
      return null != l ? (0, a.jsx)(f.Clickable, {
        onClick: () => n(t),
        className: D.emojiSuggestionButton,
        children: (0, a.jsx)("img", {
          alt: t.name,
          src: l,
          className: D.emoji
        })
      }) : null
    })
  })
};

function Y(e) {
  let {
    user: t,
    guildId: n
  } = e, l = t.getAvatarURL(n, 128);
  return (0, a.jsx)(f.Avatar, {
    src: l,
    size: f.AvatarSizes.SIZE_40,
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
  } = (0, N.default)(t), s = (0, c.useStateFromStores)([_.default], () => _.default.getUser(t.author_id));
  return n && null != l && null != s ? (0, a.jsx)("div", {
    className: D.joinPromptContainer,
    children: (0, a.jsx)(f.Button, {
      fullWidth: !0,
      onClick: () => {
        (0, g.transitionToGuild)(l.guild_id), m.default.selectVoiceChannel(l.id)
      },
      children: P.default.Messages.CONTENT_INVENTORY_JOIN_LIVE_CHANNEL.format({
        channelName: l.name
      })
    })
  }) : null
}