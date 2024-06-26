"use strict";
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(39154),
  l = n(739566),
  u = n(25015),
  _ = n(592125),
  c = n(998951),
  d = n(113039),
  E = n(778947),
  I = n(512665),
  T = n(768760),
  h = n(689938),
  f = n(309480);
t.Z = e => {
  let {
    message: t
  } = e, n = (0, l.ZP)(t), S = (0, s.e7)([_.Z], () => _.Z.getChannel(t.channel_id)), N = r.useMemo(() => (0, a.Z)(t), [t]), {
    content: A
  } = (0, u.Z)(N, {
    hideSimpleEmbedContent: !1
  }), m = r.useCallback(() => {
    let {
      leadingIcon: e,
      trailingIcon: n
    } = (0, I.f)(t, A, !1, "", {
      leadingIconClass: f.attachmentIcon,
      trailingIconClass: f.attachmentIcon,
      iconSize: T.WW
    }), r = null == A || "" === A || Array.isArray(A) && 0 === A.length;
    return (0, i.jsxs)("div", {
      className: f.contentContainer,
      children: [e, r ? n : (0, i.jsx)(d.ZP, {
        message: t,
        content: A
      })]
    })
  }, [t, A]);
  return null == S ? null : (0, i.jsxs)("div", {
    className: f.container,
    children: [(0, i.jsx)(o.Heading, {
      className: f.header,
      variant: "heading-sm/semibold",
      children: h.Z.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE
    }), (0, i.jsx)(o.Scroller, {
      className: f.messagePreviewContainer,
      children: (0, i.jsx)(c.Z, {
        childrenMessageContent: m(),
        childrenHeader: (0, i.jsx)(E.ZP, {
          message: t,
          channel: S,
          author: n,
          guildId: S.guild_id
        }),
        disableInteraction: !0
      })
    })]
  })
}