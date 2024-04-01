"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return g
  },
  PopoutAvatar: function() {
    return A
  },
  PopoutHero: function() {
    return S
  },
  PopoutReactor: function() {
    return T
  },
  PopoutTitle: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("220779"),
  r = n("543241"),
  o = n("914010"),
  u = n("626135"),
  d = n("768581"),
  c = n("907082"),
  f = n("206295"),
  h = n("885712"),
  m = n("206583"),
  p = n("981631"),
  E = n("689938"),
  C = n("522791");

function g(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: C.popout,
    children: t
  })
}

function S(e) {
  let {
    children: t,
    backgroundImgSrc: n
  } = e, {
    primaryColor: l,
    secondaryColor: s
  } = (0, f.default)(n);
  return (0, a.jsx)("div", {
    className: C.hero,
    style: {
      background: "linear-gradient(45deg, ".concat(l, ", ").concat(s, ")")
    },
    children: t
  })
}

function _(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(s.Heading, {
    className: C.popoutTitle,
    variant: "heading-md/normal",
    color: "always-white",
    lineClamp: 3,
    children: t
  })
}

function T(e) {
  let {
    channel: t,
    onMessageReact: n,
    user: s
  } = e, [r, d] = l.useState(null), [f, g] = l.useState(null), S = l.useRef(null), _ = (0, c.useIsEligibleForMemberListShareToChannel)({
    location: "PopoutReactor"
  }), T = e => {
    null != e && null != f && (u.default.track(p.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: m.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: t.id,
      guild_id: t.guild_id
    }), f.insertEmoji(e, !1, !1), f.focus())
  };
  return (0, a.jsxs)("div", {
    className: C.reactionContainer,
    children: [(0, a.jsxs)("div", {
      className: C.emojiHotrail,
      children: [(0, a.jsx)(I, {
        channel: t,
        onClickSuggestion: T
      }), (0, a.jsx)(i.ReactionPickerButton, {
        onSelectEmoji: T
      })]
    }), (0, a.jsx)(i.ReplyInput, {
      ref: S,
      placeholder: E.default.Messages.TEXTAREA_PLACEHOLDER.format({
        channel: null == r ? "@".concat(s.globalName) : "#".concat(r.name)
      }),
      onEnter: n,
      setEditorRef: e => g(e),
      autoCompletePosition: (() => {
        if (null == S || null == S.current) return "top";
        let e = S.current.getBoundingClientRect(),
          t = window.innerHeight;
        return e.top < t / 2 ? "bottom" : "top"
      })(),
      renderAttachButton: () => _ && null != o.default.getGuildId() ? (0, a.jsx)(h.ShareToChannelDropdownSelect, {
        user: s,
        selectedChannel: r,
        onSelect: d
      }) : null
    })]
  })
}
let I = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, r.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
    emoji: e,
    url: e.url
  } : {
    emoji: e,
    url: (0, d.getEmojiURL)({
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
      return null != l ? (0, a.jsx)(s.Clickable, {
        onClick: () => n(t),
        className: C.emojiSuggestionButton,
        children: (0, a.jsx)("img", {
          alt: t.name,
          src: l,
          className: C.emoji
        })
      }) : null
    })
  })
};

function A(e) {
  let {
    user: t,
    guildId: n
  } = e, l = t.getAvatarURL(n, 128);
  return (0, a.jsx)(s.Avatar, {
    src: l,
    size: s.AvatarSizes.SIZE_40,
    "aria-label": "avatar"
  })
}