"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return A
  },
  PopoutAvatar: function() {
    return y
  },
  PopoutHero: function() {
    return v
  },
  PopoutReactor: function() {
    return x
  },
  PopoutTitle: function() {
    return N
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("493683"),
  u = n("220779"),
  d = n("543241"),
  c = n("592125"),
  f = n("682864"),
  h = n("626135"),
  m = n("768581"),
  p = n("956664"),
  E = n("907082"),
  C = n("206295"),
  g = n("885712"),
  S = n("206583"),
  _ = n("981631"),
  T = n("689938"),
  I = n("522791");

function A(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: I.popout,
    children: t
  })
}

function v(e) {
  let {
    children: t,
    backgroundImgSrc: n
  } = e, {
    primaryColor: l,
    secondaryColor: s
  } = (0, C.default)(n);
  return (0, a.jsx)("div", {
    className: I.hero,
    style: {
      background: "linear-gradient(45deg, ".concat(l, ", ").concat(s, ")")
    },
    children: t
  })
}

function N(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(r.Heading, {
    className: I.popoutTitle,
    variant: "heading-md/normal",
    color: "always-white",
    lineClamp: 3,
    children: t
  })
}

function x(e) {
  return (0, E.useIsEligibleForMemberListShareToChannel)({
    location: "PopoutReactor"
  }) ? (0, a.jsx)(M, {
    ...e
  }) : (0, a.jsx)(R, {
    ...e
  })
}

function M(e) {
  let {
    channel: t,
    onMessageReact: n,
    user: s,
    updatePopoutPosition: r,
    generateReactionImage: d
  } = e, [m, E] = l.useState(null), [C, A] = l.useState(null), v = l.useRef(null), [N, x] = l.useState(), M = null != N && null != m, R = null == m || m.type === _.ChannelTypes.DM ? "@".concat(s.username) : "#".concat(m.name);
  l.useEffect(() => {
    null == N && e();
    async function e() {
      let e = await (null == d ? void 0 : d()),
        t = null == e ? void 0 : e.item.file;
      null != t && x(await (0, p.readFileAsBase64)(t))
    }
  }, [d, N]), l.useEffect(() => {
    let e = c.default.getDMFromUserId(s.id);
    null == c.default.getChannel(e) && o.default.getOrEnsurePrivateChannel(s.id)
  }, [s.id]);
  let y = e => {
    null != e && null != C && (h.default.track(_.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: S.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: t.id,
      guild_id: t.guild_id
    }), C.insertEmoji(e, !1, !1), C.focus())
  };
  return (0, a.jsxs)("div", {
    className: I.reactionContainerShareToChannel,
    children: [null == m ? (0, a.jsxs)("div", {
      className: I.emojiHotrailShareToChannel,
      children: [(0, a.jsx)(L, {
        channel: t,
        onClickSuggestion: y
      }), (0, a.jsx)(u.ReactionPickerButton, {
        onSelectEmoji: y
      })]
    }) : (0, a.jsx)(g.ShareToChannelHeader, {
      channel: m,
      onClose: () => {
        E(null), null == r || r()
      }
    }), null != m && (0, a.jsx)(g.MessageHistory, {
      channel: m,
      onMessagesLoad: r
    }), (0, a.jsxs)("div", {
      className: I.inputContainerShareToChannel,
      children: [M && (0, a.jsx)("div", {
        className: I.attachmentContainer,
        children: (0, a.jsx)("img", {
          src: N,
          alt: "",
          className: I.attachment
        })
      }), (0, a.jsxs)("div", {
        className: i()(I.shareToChannelInput, M && I.shareToChannelInputHasAttachments),
        children: [null == m && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(f.default, {
            size: 16,
            horizontal: !0
          }), (0, a.jsx)(g.ShareToChannelDropdownSelect, {
            user: s,
            selectedChannel: m,
            onSelect: e => {
              E(e), null == C || C.focus()
            }
          })]
        }), (0, a.jsx)(u.ReplyInput, {
          ref: v,
          placeholder: T.default.Messages.TEXTAREA_PLACEHOLDER.format({
            channel: R
          }),
          onFocus: () => {
            if (null == m) {
              let e = c.default.getDMFromUserId(s.id),
                t = c.default.getChannel(e);
              null != t && (E(t), null == C || C.focus())
            }
          },
          onEnter: n,
          setEditorRef: e => A(e),
          autoCompletePosition: (() => {
            if (null == v || null == v.current) return "top";
            let e = v.current.getBoundingClientRect(),
              t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top"
          })()
        })]
      })]
    })]
  })
}

function R(e) {
  let {
    channel: t,
    onMessageReact: n,
    user: s
  } = e, [i, r] = l.useState(null), o = l.useRef(null), d = e => {
    null != e && null != i && (h.default.track(_.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: S.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: t.id,
      guild_id: t.guild_id
    }), i.insertEmoji(e, !1, !1), i.focus())
  };
  return (0, a.jsxs)("div", {
    className: I.reactionContainer,
    children: [(0, a.jsxs)("div", {
      className: I.emojiHotrail,
      children: [(0, a.jsx)(L, {
        channel: t,
        onClickSuggestion: d
      }), (0, a.jsx)(u.ReactionPickerButton, {
        onSelectEmoji: d
      })]
    }), (0, a.jsx)(u.ReplyInput, {
      ref: o,
      placeholder: T.default.Messages.TEXTAREA_PLACEHOLDER.format({
        channel: "@".concat(s.username)
      }),
      onEnter: n,
      setEditorRef: e => r(e),
      autoCompletePosition: (() => {
        if (null == o || null == o.current) return "top";
        let e = o.current.getBoundingClientRect(),
          t = window.innerHeight;
        return e.top < t / 2 ? "bottom" : "top"
      })()
    })]
  })
}
let L = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, d.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
    emoji: e,
    url: e.url
  } : {
    emoji: e,
    url: (0, m.getEmojiURL)({
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
      return null != l ? (0, a.jsx)(r.Clickable, {
        onClick: () => n(t),
        className: I.emojiSuggestionButton,
        children: (0, a.jsx)("img", {
          alt: t.name,
          src: l,
          className: I.emoji
        })
      }) : null
    })
  })
};

function y(e) {
  let {
    user: t,
    guildId: n
  } = e, l = t.getAvatarURL(n, 128);
  return (0, a.jsx)(r.Avatar, {
    src: l,
    size: r.AvatarSizes.SIZE_40,
    "aria-label": "avatar"
  })
}