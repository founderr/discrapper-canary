"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  },
  renderSingleLineMessage: function() {
    return V
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("913527"),
  l = n.n(o),
  u = n("138270"),
  d = n("304497"),
  _ = n("481060"),
  c = n("100527"),
  E = n("906732"),
  I = n("978003"),
  T = n("39154"),
  f = n("372900"),
  S = n("453687"),
  h = n("123145"),
  A = n("223021"),
  m = n("79390"),
  N = n("869765"),
  p = n("403132"),
  O = n("378233"),
  C = n("377617"),
  R = n("84017"),
  g = n("748500"),
  L = n("836879"),
  v = n("191741"),
  D = n("768581"),
  M = n("55935"),
  y = n("823379"),
  P = n("113039"),
  U = n("768760"),
  b = n("981631"),
  G = n("689938"),
  w = n("822545");

function k(e) {
  let {
    width: t = 12,
    height: n = 8,
    color: r = "currentColor",
    className: s,
    foreground: a
  } = e;
  return (0, i.jsx)("svg", {
    className: s,
    width: t,
    height: n,
    viewBox: "0 0 12 8",
    children: (0, i.jsx)("path", {
      d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
      className: a,
      fill: r
    })
  })
}

function B(e) {
  let {
    width: t = 18,
    height: n = 18,
    className: r,
    foreground: s
  } = e;
  return (0, i.jsx)("svg", {
    className: r,
    width: t,
    height: n,
    viewBox: "0 0 18 18",
    children: (0, i.jsx)("path", {
      fill: "#3ba55c",
      d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
      className: s
    })
  })
}

function V(e, t, n, r, s) {
  let a, o, l, _;
  let c = (0, T.default)(e),
    {
      trailingIconClass: E,
      leadingIconClass: f,
      iconSize: S
    } = s,
    h = null == t || "" === t || Array.isArray(t) && 0 === t.length,
    A = (0, O.getMessageStickers)(c).length > 0,
    N = null != c.interaction,
    p = c.hasFlag(b.MessageFlags.IS_VOICE_MESSAGE),
    v = c.isPoll(),
    D = c.type === b.MessageTypes.POLL_RESULT;
  if ((0, I.default)(e) && (_ = (0, i.jsx)(u.ArrowAngleRightUpIcon, {
      className: f,
      width: S,
      height: S
    })), n) a = G.default.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
  else if (c.type === b.MessageTypes.CHANNEL_PINNED_MESSAGE) a = G.default.Messages.MESSAGE_PINNED;
  else if (h) {
    if (v) {
      var M, y;
      o = null == c ? void 0 : null === (y = c.poll) || void 0 === y ? void 0 : null === (M = y.question) || void 0 === M ? void 0 : M.text
    } else D ? a = (0, m.getPollResultsReplyPreview)(c) : A ? a = G.default.Messages.REPLY_QUOTE_STICKER : N ? a = G.default.Messages.REPLY_QUOTE_COMMAND : p ? a = G.default.Messages.REPLY_QUOTE_VOICE_MESSAGE : (a = G.default.Messages.REPLY_QUOTE_NO_TEXT_CONTENT, l = (0, i.jsx)(R.default, {
      className: E,
      width: S,
      height: S
    }))
  } else o = (0, i.jsx)(P.default, {
    message: c,
    content: t,
    className: r
  });
  return A ? l = (0, i.jsx)(L.default, {
    className: E,
    width: S,
    height: S
  }) : N ? l = (0, i.jsx)(C.default, {
    className: E,
    width: S,
    height: S
  }) : p ? l = (0, i.jsx)(g.default, {
    className: E,
    width: 19 / 24 * S,
    height: S
  }) : D ? l = (0, i.jsx)(d.PollsIcon, {
    className: E,
    width: S,
    height: S
  }) : (c.attachments.length > 0 || c.embeds.length > 0) && (l = (0, i.jsx)(R.default, {
    className: E,
    width: S,
    height: S
  })), {
    contentPlaceholder: a,
    renderedContent: o,
    trailingIcon: l,
    leadingIcon: _
  }
}

function x(e) {
  let t;
  let {
    repliedAuthor: n,
    baseAuthor: s,
    baseMessage: o,
    referencedMessage: u,
    renderPopout: d
  } = e, I = r.useMemo(() => null != d && u.state === N.ReferencedMessageState.LOADED ? e => d(e, u.message) : void 0, [u, d]), T = function(e, t, n) {
    let {
      referencedMessage: r,
      compact: s,
      isReplyAuthorBlocked: o,
      repliedAuthor: l,
      showAvatarPopout: u,
      onClickAvatar: d,
      onContextMenu: I,
      onPopoutRequestClose: T
    } = e, {
      analyticsLocations: f
    } = (0, E.default)(c.default.AVATAR);
    if (s || r.state !== N.ReferencedMessageState.LOADED || o) return (0, i.jsx)("div", {
      className: w.replyBadge,
      children: (0, i.jsx)(k, {
        className: w.replyIcon
      })
    });
    if (r.message.type === b.MessageTypes.USER_JOIN || r.message.type === b.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || r.message.type === b.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || r.message.type === b.MessageTypes.GUILD_GAMING_STATS_PROMPT) return (0, i.jsx)(B, {
      className: w.userJoinSystemMessageIcon
    });
    if (r.message.type === b.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.jsx)(v.default, {
      className: w.ticketIcon
    });
    let S = () => {
      var e, n, s, o, u;
      return e = r.message.author, n = l, s = t, o = d, u = I, (0, i.jsx)("img", {
        alt: "",
        src: (null == n ? void 0 : n.guildMemberAvatar) != null && null != s ? (0, D.getGuildMemberAvatarURLSimple)({
          guildId: s,
          userId: e.id,
          avatar: n.guildMemberAvatar
        }) : e.getAvatarURL(s, 16),
        onClick: o,
        onContextMenu: u,
        className: a()({
          [w.replyAvatar]: !0,
          [w.clickable]: null != o
        })
      })
    };
    return null != n && null != u ? (0, i.jsx)(E.AnalyticsLocationProvider, {
      value: f,
      children: (0, i.jsx)(_.Popout, {
        renderPopout: n,
        shouldShow: u,
        position: "right",
        onRequestClose: T,
        children: S
      })
    }) : (0, i.jsx)(E.AnalyticsLocationProvider, {
      value: f,
      children: S()
    })
  }(e, r.useContext(f.default), I), m = function(e, t) {
    let {
      baseMessage: n,
      channel: r,
      referencedMessage: s,
      showUsernamePopout: a,
      onClickUsername: o,
      onContextMenu: l,
      onPopoutRequestClose: u
    } = e, d = (null == s ? void 0 : s.state) === N.ReferencedMessageState.LOADED ? s.message : void 0;
    return null == d || d.type === b.MessageTypes.USER_JOIN || d.type === b.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || d.type === b.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || d.type === b.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || d.type === b.MessageTypes.GUILD_GAMING_STATS_PROMPT ? null : (0, i.jsx)(h.default, {
      message: d,
      channel: r,
      compact: !0,
      withMentionPrefix: (0, p.default)(n, d),
      showPopout: a,
      renderPopout: t,
      onClick: o,
      onContextMenu: l,
      onPopoutRequestClose: u,
      isRepliedMessage: !0
    })
  }(e, I), O = function(e) {
    let {
      content: t,
      referencedMessage: n,
      isReplyAuthorBlocked: r
    } = e, s = n.state !== N.ReferencedMessageState.DELETED ? e.onClickReply : void 0;
    switch (n.state) {
      case N.ReferencedMessageState.LOADED: {
        let {
          contentPlaceholder: e,
          renderedContent: o,
          trailingIcon: l,
          leadingIcon: u
        } = V(n.message, t, r, w.repliedTextContent, {
          trailingIconClass: w.repliedTextContentTrailingIcon,
          leadingIconClass: w.repliedTextContentLeadingIcon,
          iconSize: U.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
        });
        return (0, i.jsxs)(i.Fragment, {
          children: [u, (0, i.jsx)(_.Clickable, {
            className: a()(w.repliedTextPreview, w.clickable),
            onClick: s,
            children: (0, i.jsx)(_.BlockInteractions, {
              children: null != o ? o : (0, i.jsx)("span", {
                className: w.repliedTextPlaceholder,
                children: e
              })
            })
          }), l]
        })
      }
      case N.ReferencedMessageState.NOT_LOADED:
        return (0, i.jsx)(_.Clickable, {
          className: a()(w.repliedTextPreview, w.clickable),
          onClick: s,
          children: (0, i.jsx)("span", {
            className: w.repliedTextPlaceholder,
            children: G.default.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
          })
        });
      case N.ReferencedMessageState.DELETED:
        return (0, i.jsx)("div", {
          className: w.repliedTextPreview,
          children: (0, i.jsx)("span", {
            className: w.repliedTextPlaceholder,
            children: G.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
          })
        });
      default:
        (0, y.assertNever)(n)
    }
  }(e), C = r.useMemo(() => e.compact ? (0, A.default)((0, M.dateFormat)(l()(), "LT")) : null, [e.compact]);
  return null != n && null != s && (t = G.default.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
    author: null == s ? void 0 : s.nick,
    repliedAuthor: null == n ? void 0 : n.nick
  })), (0, i.jsxs)("div", {
    id: (0, S.getMessageReplyId)(o),
    className: a()(w.repliedMessage, C),
    "aria-label": t,
    children: [T, m, O]
  })
}