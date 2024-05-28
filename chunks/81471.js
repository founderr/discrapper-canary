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
  h = n("699516"),
  _ = n("68588"),
  C = n("512665"),
  m = n("868807"),
  S = n("981631"),
  p = n("768760"),
  I = n("689938"),
  g = n("164602"),
  T = n("946278");
let A = s.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: l,
    message: A
  } = (0, m.useMessageRequestPreview)(t), N = (0, u.useActiveKeywordFiltersCacheKey)(), v = (0, r.useStateFromStores)([h.default], () => null != A && h.default.isBlocked(A.author.id), [A]), R = (0, r.useStateFromStores)([E.default], () => E.default.can(S.Permissions.MANAGE_MESSAGES, t)), O = f.RenderSpoilers.useSetting(), {
    content: L
  } = s.useMemo(() => (null == A ? void 0 : A.content) != null && "" !== A.content ? (0, c.default)(A, {
    formatInline: !0,
    noStyleAndInteraction: !0,
    shouldFilterKeywords: null != N
  }) : {
    content: null
  }, [A, N]), M = null;
  if (l) M = (0, a.jsx)(o.Text, {
    className: g.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: I.default.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
  });
  else if (n) {
    if (null != A && v) M = (0, a.jsx)(o.Text, {
      className: g.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: I.default.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
    });
    else if (null != A) {
      let {
        contentPlaceholder: e,
        renderedContent: t
      } = (0, C.renderSingleLineMessage)(A, L, v, i()(g.messageContent, T.inlineFormat, T.__invalid_smallFontSize), {
        iconClass: g.messageContentIcon,
        iconSize: p.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
      });
      M = null != t ? (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: g.messageContent,
        children: t
      }) : (0, a.jsx)(o.Text, {
        tag: "span",
        variant: "text-sm/normal",
        color: "text-muted",
        className: g.messageReplacement,
        children: e
      })
    } else M = (0, a.jsx)(o.Text, {
      className: g.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: I.default.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
    })
  } else M = null;
  return (0, a.jsx)(_.ObscuredDisplayContext.Provider, {
    value: (0, d.default)(O, R),
    children: (0, a.jsx)(o.FocusBlock, {
      className: g.messageFocusBlock,
      children: M
    })
  })
});
t.default = A