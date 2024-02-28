"use strict";
n.r(t), n.d(t, {
  ChatButton: function() {
    return T
  }
}), n("222007"), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n("446674"),
  o = n("255397"),
  d = n("191145"),
  c = n("660478"),
  f = n("18494"),
  h = n("191542"),
  m = n("378765"),
  p = n("115531"),
  E = n("585513"),
  g = n("981913"),
  S = n("49111"),
  C = n("782340");

function _(e) {
  let t = (0, u.useStateFromStores)([h.default], () => !(0, r.isEmpty)(h.default.getTypingUsers(e)), [e]),
    n = (0, u.useStateFromStores)([f.default], () => f.default.getVoiceChannelId() === e, [e]),
    {
      unreadCount: l,
      mentionCount: a
    } = (0, u.useStateFromStoresObject)([c.default], () => ({
      unreadCount: c.default.getUnreadCount(e),
      mentionCount: c.default.getMentionCount(e)
    }), [e]);
  return {
    unreadCount: l,
    mentionCount: a,
    voiceChannelIsSelected: n,
    isTyping: t
  }
}

function I(e) {
  let {
    className: t,
    channelId: n
  } = e, {
    unreadCount: a,
    mentionCount: s,
    isTyping: i,
    voiceChannelIsSelected: r
  } = _(n);
  return (0, l.jsx)(E.default, {
    className: t,
    unreadCount: a,
    mentionCount: s,
    isTyping: i,
    canBadge: r
  })
}

function T(e) {
  let t, {
      channelId: n,
      className: s,
      showingClassName: r,
      onClick: c,
      inPopout: f,
      showRequestToSpeakSidebar: h,
      toggleRequestToSpeakSidebar: E,
      ...T
    } = e,
    {
      disabled: v
    } = T,
    x = a.useRef(null),
    N = (0, u.useStateFromStores)([d.default], () => d.default.getChatOpen(n), [n]),
    {
      isShowing: A,
      unreadCount: M,
      mentionCount: R
    } = function(e) {
      let {
        unreadCount: t,
        mentionCount: n,
        isTyping: l
      } = _(e), [s, i] = a.useState(!1);
      return a.useEffect(() => {
        i(t > 0);
        let e = setTimeout(() => {
          i(!1)
        }, p.TOAST_LINGER_MS);
        return () => {
          clearTimeout(e), i(!1)
        }
      }, [t]), {
        isShowing: s || n > 0 || l,
        unreadCount: t,
        mentionCount: n
      }
    }(n),
    j = a.useCallback(() => {
      null == c || c(), !N && h && (null == E || E()), o.default.updateChatOpen(n, !N)
    }, [n, N, c, h, E]),
    L = a.useCallback(e => {
      let {
        className: t
      } = e;
      return (0, l.jsx)(I, {
        className: t,
        channelId: n
      })
    }, [n]),
    y = a.useCallback(() => {
      var e;
      null === (e = x.current) || void 0 === e || e.focus()
    }, []);
  (0, m.useComponentAction)({
    event: S.ComponentActions.FOCUS_CHAT_BUTTON,
    handler: v ? null : y
  });
  let [O, P] = a.useState(!1), b = a.useCallback(() => {
    f && P(!0)
  }, [f]);
  (0, m.useComponentAction)({
    event: S.ComponentActions.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
    handler: b
  }), a.useEffect(() => {
    let e;
    return O && (e = setTimeout(() => {
      P(!1)
    }, 3e3)), () => {
      clearTimeout(e)
    }
  }, [O]), t = f && v ? C.default.Messages.TEXT_IN_VOICE_POPOUT_DISABLED : N ? C.default.Messages.VIDEO_CALL_HIDE_CHAT : C.default.Messages.VIDEO_CALL_SHOW_CHAT;
  let D = [t];
  return R > 0 && D.push(C.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
    mentionCount: R
  })), M > 0 && D.push(C.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), (0, l.jsx)(g.default, {
    buttonRef: x,
    onClick: j,
    label: t,
    "aria-label": D.join(", "),
    iconComponent: L,
    tooltipPosition: "bottom",
    wrapperClassName: i(s, null != r && {
      [r]: A
    }),
    forceTooltipOpen: O,
    ...T
  })
}