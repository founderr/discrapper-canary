"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("255269"),
  d = n("937889"),
  c = n("695346"),
  f = n("496675"),
  E = n("699516"),
  _ = n("68588"),
  h = n("512665"),
  C = n("868807"),
  m = n("981631"),
  S = n("768760"),
  I = n("689938"),
  T = n("200374"),
  p = n("931093");
let g = s.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: l,
    message: g
  } = (0, C.useMessageRequestPreview)(t), N = (0, r.useStateFromStores)([E.default], () => null != g && E.default.isBlocked(g.author.id), [g]), A = (0, r.useStateFromStores)([f.default], () => f.default.can(m.Permissions.MANAGE_MESSAGES, t)), R = c.RenderSpoilers.useSetting(), {
    content: O
  } = s.useMemo(() => (null == g ? void 0 : g.content) != null && "" !== g.content ? (0, d.default)(g, {
    formatInline: !0,
    noStyleAndInteraction: !0
  }) : {
    content: null
  }, [g]), v = null;
  if (l) v = (0, a.jsx)(o.Text, {
    className: T.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: I.default.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
  });
  else if (n) {
    if (null != g && N) v = (0, a.jsx)(o.Text, {
      className: T.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: I.default.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
    });
    else if (null != g) {
      let {
        contentPlaceholder: e,
        renderedContent: t
      } = (0, h.renderSingleLineMessage)(g, O, N, i()(T.messageContent, p.inlineFormat, p.__invalid_smallFontSize), {
        iconClass: T.messageContentIcon,
        iconSize: S.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
      });
      v = null != t ? (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: T.messageContent,
        children: t
      }) : (0, a.jsx)(o.Text, {
        tag: "span",
        variant: "text-sm/normal",
        color: "text-muted",
        className: T.messageReplacement,
        children: e
      })
    } else v = (0, a.jsx)(o.Text, {
      className: T.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: I.default.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
    })
  } else v = null;
  return (0, a.jsx)(_.ObscuredDisplayContext.Provider, {
    value: (0, u.default)(R, A),
    children: (0, a.jsx)(o.FocusBlock, {
      className: T.messageFocusBlock,
      children: v
    })
  })
});
t.default = g