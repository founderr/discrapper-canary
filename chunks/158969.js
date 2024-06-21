var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(653603),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(904245),
  h = n(232961),
  m = n(223606),
  p = n(63063),
  E = n(530472),
  g = n(453687),
  f = n(930282),
  C = n(318713),
  _ = n(981631),
  I = n(689938),
  x = n(200933),
  T = n(425577),
  N = n(25450);
let Z = i.memo(function(e) {
  let {
    message: t,
    notice: n,
    compact: i = !1,
    onDismiss: s
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: a()(x.blockedNoticeContainer, {
        [x.compact]: i
      }),
      children: [(0, l.jsx)("div", {
        className: x.blockedNoticeIcon,
        children: (0, l.jsx)(u.ShieldIcon, {
          size: "xs",
          color: "currentColor",
          className: x.shieldIcon
        })
      }), (0, l.jsx)("div", {
        className: x.blockedNotice,
        children: (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "interactive-normal",
          children: n
        })
      })]
    }), (0, l.jsx)("div", {
      className: a()(x.ephemeralAccessories, {
        [x.compact]: i
      }),
      children: (0, l.jsx)(E.Z, {
        message: t,
        onDeleteMessage: s,
        children: (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "interactive-normal",
          tag: "span",
          className: x.learnMore,
          children: I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_LEARN_MORE.format({
            helpUrl: p.Z.getArticleURL(_.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })
      })
    })]
  })
});
t.Z = i.memo(function(e) {
  var t, n;
  let {
    className: s,
    compact: r,
    message: u,
    children: p,
    content: E,
    onUpdate: _
  } = e, S = null === (t = u.editedTimestamp) || void 0 === t ? void 0 : t.toString(), v = i.useRef(!1), A = (0, c.e7)([m.Z], () => m.Z.getMessage(u.id), [u.id]), M = i.useCallback(() => {
    (null == A ? void 0 : A.isBlockedEdit) ? (0, h.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0)
  }, [u, A]);
  return i.useLayoutEffect(() => {
    v.current ? null != _ && _() : v.current = !0
  }, [_, u.content, E, S, p]), (0, l.jsxs)("div", {
    id: (0, g.ut)(u),
    className: a()(s, N.markup, {
      [T.messageContent]: !0,
      [T.markupRtl]: "rtl" === o()(u.content),
      [x.blockedEdit]: null == A ? void 0 : A.isBlockedEdit,
      [x.blockedSend]: !(null == A ? void 0 : A.isBlockedEdit)
    }),
    children: [null != p ? p : (0, f.L5)(u, E), (null == A ? void 0 : A.isBlockedEdit) && null != u.timestamp && (0, l.jsxs)(l.Fragment, {
      children: [" ", (0, l.jsx)(C.Z, {
        timestamp: u.timestamp,
        isEdited: !0,
        isInline: !1,
        children: (0, l.jsxs)("span", {
          className: T.edited,
          children: ["(", I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_POSTFIX, ")"]
        })
      })]
    }), (0, l.jsx)(Z, {
      notice: null !== (n = null == A ? void 0 : A.errorMessage) && void 0 !== n ? n : I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE,
      message: u,
      compact: r,
      onDismiss: M
    })]
  })
}, f.HR)