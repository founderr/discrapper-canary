"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return M
  },
  PopoutAvatar: function() {
    return D
  },
  PopoutHero: function() {
    return R
  },
  PopoutReactor: function() {
    return y
  },
  PopoutTitle: function() {
    return L
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("481060"),
  d = n("493683"),
  c = n("220779"),
  f = n("201133"),
  h = n("543241"),
  m = n("592125"),
  p = n("682864"),
  E = n("626135"),
  C = n("768581"),
  g = n("956664"),
  S = n("907082"),
  _ = n("69259"),
  T = n("206295"),
  I = n("885712"),
  A = n("206583"),
  v = n("981631"),
  x = n("689938"),
  N = n("522791");

function M(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: N.popout,
    children: t
  })
}

function R(e) {
  let {
    children: t,
    backgroundImgSrc: n
  } = e, {
    primaryColor: l,
    secondaryColor: s
  } = (0, T.default)(n);
  return (0, a.jsx)("div", {
    className: N.hero,
    style: {
      background: "linear-gradient(45deg, ".concat(l, ", ").concat(s, ")")
    },
    children: t
  })
}

function L(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(u.Heading, {
    className: N.popoutTitle,
    variant: "heading-md/normal",
    color: "always-white",
    lineClamp: 3,
    children: t
  })
}

function y(e) {
  let {
    generateReactionImage: t,
    reactionImageAltText: n,
    entry: s,
    requestId: i,
    ...r
  } = e, u = (0, S.useIsEligibleForMemberListShareToChannel)({
    location: "PopoutReactor"
  }), [d, c] = l.useState();
  l.useEffect(() => {
    null == d && e();
    async function e() {
      let e = await t("0");
      null != e && c(e)
    }
  }, [t, d]);
  let h = async e => {
    let {
      reply: t,
      channel: a
    } = e;
    o()(null != d, "Reaction image must be defined"), d.channelId = a.id, await (0, f.sendReply)({
      file: d,
      channel: a,
      altText: n,
      reply: t
    }), (0, _.trackInteraction)(A.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
      entry: s,
      channelId: r.channel.id,
      guildId: r.channel.guild_id,
      requestId: i
    })
  };
  return u ? (0, a.jsx)(O, {
    ...r,
    reactionImage: d,
    onMessageReact: h
  }) : (0, a.jsx)(j, {
    ...r,
    reactionImage: d,
    onMessageReact: h
  })
}

function O(e) {
  let {
    channel: t,
    user: n,
    updatePopoutPosition: s,
    reactionImage: r,
    onMessageReact: u
  } = e, [f, h] = l.useState(null), [C, S] = l.useState(null), _ = l.useRef(null), [T, M] = l.useState(), [R, L] = l.useState(!1), y = null != r && null != f && !R, O = null == f || f.type === v.ChannelTypes.DM ? "@".concat(n.username) : "#".concat(f.name);
  l.useEffect(() => {
    (async function e() {
      let e = null == r ? void 0 : r.item.file;
      null != e && M(await (0, g.readFileAsBase64)(e))
    })()
  }, [r]), l.useEffect(() => {
    let e = m.default.getDMFromUserId(n.id);
    null == m.default.getChannel(e) && d.default.getOrEnsurePrivateChannel(n.id)
  }, [n.id]);
  let j = e => {
      null != e && null != C && (E.default.track(v.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
        surface_type: A.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
        channel_id: t.id,
        guild_id: t.guild_id
      }), C.focus(), D(":".concat(e.name, ":")))
    },
    D = async e => {
      let t = f;
      if (null == t) {
        var a;
        let e = m.default.getDMFromUserId(n.id);
        t = null !== (a = m.default.getChannel(e)) && void 0 !== a ? a : null
      }
      o()(null != t, "Selected channel must be defined"), L(!0), !R && await u({
        reply: e,
        channel: t
      })
    };
  return (0, a.jsxs)("div", {
    className: N.reactionContainerShareToChannel,
    children: [null == f ? (0, a.jsxs)("div", {
      className: N.emojiHotrailShareToChannel,
      children: [(0, a.jsx)(P, {
        channel: t,
        onClickSuggestion: j
      }), (0, a.jsx)(c.ReactionPickerButton, {
        onSelectEmoji: j
      })]
    }) : (0, a.jsx)(I.ShareToChannelHeader, {
      channel: f,
      onClose: () => {
        h(null), L(!1), null == s || s()
      }
    }), null != f && (0, a.jsx)(I.MessageHistory, {
      channel: f,
      onMessagesLoad: s
    }), (0, a.jsxs)("div", {
      className: N.inputContainerShareToChannel,
      children: [y && (0, a.jsx)("div", {
        className: N.attachmentContainer,
        children: (0, a.jsx)("img", {
          src: T,
          alt: "",
          className: N.attachment
        })
      }), (0, a.jsxs)("div", {
        className: i()(N.shareToChannelInput, y && N.shareToChannelInputHasAttachments),
        children: [null == f && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(p.default, {
            size: 16,
            horizontal: !0
          }), (0, a.jsx)(I.ShareToChannelDropdownSelect, {
            user: n,
            selectedChannel: f,
            onSelect: e => {
              h(e), null == C || C.focus()
            }
          })]
        }), (0, a.jsx)(c.ReplyInput, {
          ref: _,
          placeholder: x.default.Messages.TEXTAREA_PLACEHOLDER.format({
            channel: O
          }),
          onFocus: () => {
            if (null == f) {
              let e = m.default.getDMFromUserId(n.id),
                t = m.default.getChannel(e);
              null != t && (h(t), null == C || C.focus())
            }
          },
          onEnter: D,
          setEditorRef: e => S(e),
          autoCompletePosition: (() => {
            if (null == _ || null == _.current) return "top";
            let e = _.current.getBoundingClientRect(),
              t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top"
          })(),
          channel: f
        })]
      })]
    })]
  })
}

function j(e) {
  let {
    channel: t,
    onMessageReact: n,
    user: s
  } = e, [i, r] = l.useState(null), u = l.useRef(null), f = e => {
    null != e && null != i && (E.default.track(v.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: A.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: t.id,
      guild_id: t.guild_id
    }), i.insertEmoji(e, !1, !1), i.focus())
  }, h = async e => {
    let t = await d.default.openPrivateChannel(s.id, !1, !1),
      a = m.default.getChannel(t);
    o()(null != a, "DM channel must be defined"), await n({
      reply: e,
      channel: a
    })
  };
  return (0, a.jsxs)("div", {
    className: N.reactionContainer,
    children: [(0, a.jsxs)("div", {
      className: N.emojiHotrail,
      children: [(0, a.jsx)(P, {
        channel: t,
        onClickSuggestion: f
      }), (0, a.jsx)(c.ReactionPickerButton, {
        onSelectEmoji: f
      })]
    }), (0, a.jsx)(c.ReplyInput, {
      ref: u,
      placeholder: x.default.Messages.TEXTAREA_PLACEHOLDER.format({
        channel: "@".concat(s.username)
      }),
      onEnter: h,
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
let P = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, h.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
    emoji: e,
    url: e.url
  } : {
    emoji: e,
    url: (0, C.getEmojiURL)({
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
      return null != l ? (0, a.jsx)(u.Clickable, {
        onClick: () => n(t),
        className: N.emojiSuggestionButton,
        children: (0, a.jsx)("img", {
          alt: t.name,
          src: l,
          className: N.emoji
        })
      }) : null
    })
  })
};

function D(e) {
  let {
    user: t,
    guildId: n
  } = e, l = t.getAvatarURL(n, 128);
  return (0, a.jsx)(u.Avatar, {
    src: l,
    size: u.AvatarSizes.SIZE_40,
    "aria-label": "avatar"
  })
}