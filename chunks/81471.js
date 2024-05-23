"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("200120"),
  d = n("255269"),
  c = n("937889"),
  f = n("695346"),
  E = n("496675"),
  _ = n("699516"),
  h = n("68588"),
  C = n("512665"),
  m = n("868807"),
  S = n("981631"),
  p = n("768760"),
  I = n("689938"),
  T = n("164602"),
  g = n("946278");
let A = s.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: l,
    message: A
  } = (0, m.useMessageRequestPreview)(t), N = (0, u.useShouldFilterKeywords)(), v = (0, r.useStateFromStores)([_.default], () => null != A && _.default.isBlocked(A.author.id), [A]), R = (0, r.useStateFromStores)([E.default], () => E.default.can(S.Permissions.MANAGE_MESSAGES, t)), O = f.RenderSpoilers.useSetting(), {
    content: L
  } = s.useMemo(() => (null == A ? void 0 : A.content) != null && "" !== A.content ? (0, c.default)(A, {
    formatInline: !0,
    noStyleAndInteraction: !0,
    shouldFilterKeywords: N
  }) : {
    content: null
  }, [A, N]), M = null;
  if (l) M = (0, a.jsx)(o.Text, {
    className: T.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: I.default.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
  });
  else if (n) {
    if (null != A && v) M = (0, a.jsx)(o.Text, {
      className: T.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: I.default.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
    });
    else if (null != A) {
      let {
        contentPlaceholder: e,
        renderedContent: t
      } = (0, C.renderSingleLineMessage)(A, L, v, i()(T.messageContent, g.inlineFormat, g.__invalid_smallFontSize), {
        iconClass: T.messageContentIcon,
        iconSize: p.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
      });
      M = null != t ? (0, a.jsx)(o.Text, {
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
    } else M = (0, a.jsx)(o.Text, {
      className: T.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: I.default.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
    })
  } else M = null;
  return (0, a.jsx)(h.ObscuredDisplayContext.Provider, {
    value: (0, d.default)(O, R),
    children: (0, a.jsx)(o.FocusBlock, {
      className: T.messageFocusBlock,
      children: M
    })
  })
});
t.default = A