"use strict";
n.d(t, {
  Z: function() {
    return y
  },
  f: function() {
    return P
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(913527),
  l = n.n(a),
  u = n(481060),
  _ = n(100527),
  c = n(906732),
  d = n(978003),
  E = n(39154),
  I = n(453687),
  T = n(123145),
  h = n(223021),
  f = n(79390),
  S = n(869765),
  A = n(403132),
  N = n(378233),
  m = n(768581),
  O = n(55935),
  R = n(823379),
  p = n(113039),
  g = n(768760),
  C = n(981631),
  v = n(689938),
  L = n(250050);

function D(e) {
  let {
    width: t = 12,
    height: n = 8,
    color: r = "currentColor",
    className: s,
    foreground: o
  } = e;
  return (0, i.jsx)("svg", {
    className: s,
    width: t,
    height: n,
    viewBox: "0 0 12 8",
    children: (0, i.jsx)("path", {
      d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
      className: o,
      fill: r
    })
  })
}

function M(e) {
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

function P(e, t, n, r, s) {
  let o, a, l, _;
  let c = (0, E.Z)(e),
    {
      trailingIconClass: I,
      leadingIconClass: T,
      iconSize: h
    } = s,
    S = null == t || "" === t || Array.isArray(t) && 0 === t.length,
    A = (0, N.cv)(c).length > 0,
    m = null != c.interaction,
    O = c.hasFlag(C.iLy.IS_VOICE_MESSAGE),
    R = c.isPoll(),
    g = c.type === C.uaV.POLL_RESULT;
  if ((0, d.Z)(e) && (_ = (0, i.jsx)(u.ChatArrowRightIcon, {
      size: "custom",
      className: T,
      width: h,
      height: h
    })), n) o = v.Z.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
  else if (c.type === C.uaV.CHANNEL_PINNED_MESSAGE) o = v.Z.Messages.MESSAGE_PINNED;
  else if (S) {
    if (R) {
      var L, D;
      a = null == c ? void 0 : null === (D = c.poll) || void 0 === D ? void 0 : null === (L = D.question) || void 0 === L ? void 0 : L.text
    } else g ? o = (0, f.N4)(c) : A ? o = v.Z.Messages.REPLY_QUOTE_STICKER : m ? o = v.Z.Messages.REPLY_QUOTE_COMMAND : O ? o = v.Z.Messages.REPLY_QUOTE_VOICE_MESSAGE : (o = v.Z.Messages.REPLY_QUOTE_NO_TEXT_CONTENT, l = (0, i.jsx)(u.ImageIcon, {
      size: "custom",
      color: "currentColor",
      className: I,
      width: h,
      height: h
    }))
  } else a = (0, i.jsx)(p.ZP, {
    message: c,
    content: t,
    className: r
  });
  return A ? l = (0, i.jsx)(u.StickerSmallIcon, {
    size: "custom",
    color: "currentColor",
    className: I,
    width: h,
    height: h
  }) : m ? l = (0, i.jsx)(u.SlashBoxIcon, {
    size: "custom",
    color: "currentColor",
    className: I,
    width: h,
    height: h
  }) : O ? l = (0, i.jsx)(u.MicrophoneIcon, {
    size: "custom",
    color: "currentColor",
    className: I,
    width: 19 / 24 * h,
    height: h
  }) : (c.attachments.length > 0 || c.embeds.length > 0) && !g && (l = (0, i.jsx)(u.ImageIcon, {
    size: "custom",
    color: "currentColor",
    className: I,
    width: h,
    height: h
  })), {
    contentPlaceholder: o,
    renderedContent: a,
    trailingIcon: l,
    leadingIcon: _
  }
}

function y(e) {
  let t;
  let {
    repliedAuthor: n,
    baseAuthor: s,
    baseMessage: a,
    referencedMessage: d,
    renderPopout: E
  } = e, f = r.useMemo(() => null != E && d.state === S.Y.LOADED ? e => E(e, d.message) : void 0, [d, E]), N = function(e, t) {
    let {
      referencedMessage: n,
      channel: r,
      compact: s,
      isReplyAuthorBlocked: a,
      repliedAuthor: l,
      showAvatarPopout: d,
      onClickAvatar: E,
      onContextMenu: I,
      onPopoutRequestClose: T
    } = e, {
      analyticsLocations: h
    } = (0, c.ZP)(_.Z.AVATAR);
    if (s || n.state !== S.Y.LOADED || a) return (0, i.jsx)("div", {
      className: L.replyBadge,
      children: (0, i.jsx)(D, {
        className: L.replyIcon
      })
    });
    if (n.message.type === C.uaV.USER_JOIN || n.message.type === C.uaV.ROLE_SUBSCRIPTION_PURCHASE || n.message.type === C.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || n.message.type === C.uaV.GUILD_GAMING_STATS_PROMPT) return (0, i.jsx)(M, {
      className: L.userJoinSystemMessageIcon
    });
    if (n.message.type === C.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.jsx)(u.TicketIcon, {
      size: "md",
      color: "currentColor",
      className: L.ticketIcon
    });
    if (n.message.type === C.uaV.POLL_RESULT) return (0, i.jsx)(u.PollsIcon, {
      className: L.repliedTextContentLeadingIcon,
      width: g.WW,
      height: g.WW,
      size: "custom"
    });
    let f = () => {
      var e, t, s, a, u;
      return e = n.message.author, t = l, s = r.guild_id, a = E, u = I, (0, i.jsx)("img", {
        alt: "",
        src: (null == t ? void 0 : t.guildMemberAvatar) != null && null != s ? (0, m.JM)({
          guildId: s,
          userId: e.id,
          avatar: t.guildMemberAvatar
        }) : e.getAvatarURL(s, 16),
        onClick: a,
        onContextMenu: u,
        className: o()({
          [L.replyAvatar]: !0,
          [L.clickable]: null != a
        })
      })
    };
    return null != t && null != d ? (0, i.jsx)(c.Gt, {
      value: h,
      children: (0, i.jsx)(u.Popout, {
        renderPopout: t,
        shouldShow: d,
        position: "right",
        onRequestClose: T,
        children: f
      })
    }) : (0, i.jsx)(c.Gt, {
      value: h,
      children: f()
    })
  }(e, f), p = function(e, t) {
    let {
      baseMessage: n,
      channel: r,
      referencedMessage: s,
      showUsernamePopout: o,
      onClickUsername: a,
      onContextMenu: l,
      onPopoutRequestClose: u
    } = e, _ = (null == s ? void 0 : s.state) === S.Y.LOADED ? s.message : void 0;
    return null == _ || _.type === C.uaV.USER_JOIN || _.type === C.uaV.ROLE_SUBSCRIPTION_PURCHASE || _.type === C.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || _.type === C.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || _.type === C.uaV.GUILD_GAMING_STATS_PROMPT || _.type === C.uaV.POLL_RESULT ? null : (0, i.jsx)(T.Z, {
      message: _,
      channel: r,
      compact: !0,
      withMentionPrefix: (0, A.Z)(n, _),
      showPopout: o,
      renderPopout: t,
      onClick: a,
      onContextMenu: l,
      onPopoutRequestClose: u,
      isRepliedMessage: !0
    })
  }(e, f), y = function(e) {
    let {
      content: t,
      referencedMessage: n,
      isReplyAuthorBlocked: r
    } = e, s = n.state !== S.Y.DELETED ? e.onClickReply : void 0;
    switch (n.state) {
      case S.Y.LOADED: {
        let {
          contentPlaceholder: e,
          renderedContent: a,
          trailingIcon: l,
          leadingIcon: _
        } = P(n.message, t, r, L.repliedTextContent, {
          trailingIconClass: L.repliedTextContentTrailingIcon,
          leadingIconClass: L.repliedTextContentLeadingIcon,
          iconSize: g.WW
        });
        return (0, i.jsxs)(i.Fragment, {
          children: [_, (0, i.jsx)(u.Clickable, {
            className: o()(L.repliedTextPreview, L.clickable),
            onClick: s,
            children: (0, i.jsx)(u.BlockInteractions, {
              children: null != a ? a : (0, i.jsx)("span", {
                className: L.repliedTextPlaceholder,
                children: e
              })
            })
          }), l]
        })
      }
      case S.Y.NOT_LOADED:
        return (0, i.jsx)(u.Clickable, {
          className: o()(L.repliedTextPreview, L.clickable),
          onClick: s,
          children: (0, i.jsx)("span", {
            className: L.repliedTextPlaceholder,
            children: v.Z.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
          })
        });
      case S.Y.DELETED:
        return (0, i.jsx)("div", {
          className: L.repliedTextPreview,
          children: (0, i.jsx)("span", {
            className: L.repliedTextPlaceholder,
            children: v.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
          })
        });
      default:
        (0, R.vE)(n)
    }
  }(e), U = r.useMemo(() => e.compact ? (0, h.Z)((0, O.vc)(l()(), "LT")) : null, [e.compact]);
  return null != n && null != s && (t = v.Z.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
    author: null == s ? void 0 : s.nick,
    repliedAuthor: null == n ? void 0 : n.nick
  })), (0, i.jsxs)("div", {
    id: (0, I.Gq)(a),
    className: o()(L.repliedMessage, U),
    "aria-label": t,
    children: [N, p, y]
  })
}