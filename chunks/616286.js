n.d(t, {
  T: function() {
    return T
  }
}), n(47120), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(392711),
  o = n(442837),
  c = n(475179),
  u = n(358221),
  d = n(306680),
  h = n(944486),
  m = n(111583),
  p = n(459273),
  E = n(880831),
  g = n(774168),
  f = n(871499),
  C = n(981631),
  _ = n(689938);

function I(e) {
  let t = (0, o.e7)([m.Z], () => !(0, r.isEmpty)(m.Z.getTypingUsers(e)), [e]),
    n = (0, o.e7)([h.Z], () => h.Z.getVoiceChannelId() === e, [e]),
    {
      unreadCount: l,
      mentionCount: i
    } = (0, o.cj)([d.ZP], () => ({
      unreadCount: d.ZP.getUnreadCount(e),
      mentionCount: d.ZP.getMentionCount(e)
    }), [e]);
  return {
    unreadCount: l,
    mentionCount: i,
    voiceChannelIsSelected: n,
    isTyping: t
  }
}

function x(e) {
  let {
    className: t,
    channelId: n
  } = e, {
    unreadCount: i,
    mentionCount: s,
    isTyping: a,
    voiceChannelIsSelected: r
  } = I(n);
  return (0, l.jsx)(g.Z, {
    className: t,
    unreadCount: i,
    mentionCount: s,
    isTyping: a,
    canBadge: r
  })
}

function T(e) {
  let t, {
      channelId: n,
      className: s,
      showingClassName: r,
      onClick: d,
      inPopout: h,
      showRequestToSpeakSidebar: m,
      toggleRequestToSpeakSidebar: g,
      ...T
    } = e,
    {
      disabled: N
    } = T,
    Z = i.useRef(null),
    S = (0, o.e7)([u.Z], () => u.Z.getChatOpen(n), [n]),
    {
      isShowing: v,
      unreadCount: A,
      mentionCount: M
    } = function(e) {
      let {
        unreadCount: t,
        mentionCount: n,
        isTyping: l
      } = I(e), [s, a] = i.useState(!1);
      return i.useEffect(() => {
        a(t > 0);
        let e = setTimeout(() => {
          a(!1)
        }, E.z);
        return () => {
          clearTimeout(e), a(!1)
        }
      }, [t]), {
        isShowing: s || n > 0 || l,
        unreadCount: t,
        mentionCount: n
      }
    }(n),
    R = i.useCallback(() => {
      null == d || d(), !S && m && (null == g || g()), c.Z.updateChatOpen(n, !S)
    }, [n, S, d, m, g]),
    j = i.useCallback(e => {
      let {
        className: t
      } = e;
      return (0, l.jsx)(x, {
        className: t,
        channelId: n
      })
    }, [n]),
    L = i.useCallback(() => {
      var e;
      null === (e = Z.current) || void 0 === e || e.focus()
    }, []);
  (0, p.yp)({
    event: C.CkL.FOCUS_CHAT_BUTTON,
    handler: N ? null : L
  });
  let [O, P] = i.useState(!1), y = i.useCallback(() => {
    h && P(!0)
  }, [h]);
  (0, p.yp)({
    event: C.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
    handler: y
  }), i.useEffect(() => {
    let e;
    return O && (e = setTimeout(() => {
      P(!1)
    }, 3e3)), () => {
      clearTimeout(e)
    }
  }, [O]);
  let b = [t = h && N ? _.Z.Messages.TEXT_IN_VOICE_POPOUT_DISABLED : S ? _.Z.Messages.VIDEO_CALL_HIDE_CHAT : _.Z.Messages.VIDEO_CALL_SHOW_CHAT];
  return M > 0 && b.push(_.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
    mentionCount: M
  })), A > 0 && b.push(_.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), (0, l.jsx)(f.Z, {
    buttonRef: Z,
    onClick: R,
    label: t,
    "aria-label": b.join(", "),
    iconComponent: j,
    tooltipPosition: "bottom",
    wrapperClassName: a()(s, null != r && {
      [r]: v
    }),
    forceTooltipOpen: O,
    ...T
  })
}