"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  s = n("442837"),
  a = n("481060"),
  o = n("39154"),
  l = n("739566"),
  u = n("25015"),
  d = n("592125"),
  _ = n("998951"),
  c = n("113039"),
  E = n("778947"),
  I = n("512665"),
  T = n("768760"),
  f = n("689938"),
  S = n("287889");
t.default = e => {
  let {
    message: t
  } = e, n = (0, l.default)(t), h = (0, s.useStateFromStores)([d.default], () => d.default.getChannel(t.channel_id)), A = r.useMemo(() => (0, o.default)(t), [t]), {
    content: m
  } = (0, u.default)(A, {
    hideSimpleEmbedContent: !1
  }), N = r.useCallback(() => {
    let {
      leadingIcon: e,
      trailingIcon: n
    } = (0, I.renderSingleLineMessage)(t, m, !1, "", {
      leadingIconClass: S.attachmentIcon,
      trailingIconClass: S.attachmentIcon,
      iconSize: T.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
    }), r = null == m || "" === m || Array.isArray(m) && 0 === m.length;
    return (0, i.jsxs)("div", {
      className: S.contentContainer,
      children: [e, r ? n : (0, i.jsx)(c.default, {
        message: t,
        content: m
      })]
    })
  }, [t, m]);
  return null == h ? null : (0, i.jsxs)("div", {
    className: S.container,
    children: [(0, i.jsx)(a.Heading, {
      className: S.header,
      variant: "heading-sm/semibold",
      children: f.default.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE
    }), (0, i.jsx)(a.Scroller, {
      className: S.messagePreviewContainer,
      children: (0, i.jsx)(_.default, {
        childrenMessageContent: N(),
        childrenHeader: (0, i.jsx)(E.default, {
          message: t,
          channel: h,
          author: n,
          guildId: h.guild_id
        }),
        disableInteraction: !0
      })
    })]
  })
}