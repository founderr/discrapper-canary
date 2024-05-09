"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("442837"),
  o = n("481060"),
  u = n("255269"),
  d = n("937889"),
  c = n("695346"),
  f = n("496675"),
  E = n("699516"),
  h = n("68588"),
  _ = n("512665"),
  C = n("868807"),
  m = n("981631"),
  S = n("768760"),
  p = n("689938"),
  I = n("164602"),
  g = n("946278");
let T = s.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: i,
    message: T
  } = (0, C.useMessageRequestPreview)(t), A = (0, r.useStateFromStores)([E.default], () => null != T && E.default.isBlocked(T.author.id), [T]), N = (0, r.useStateFromStores)([f.default], () => f.default.can(m.Permissions.MANAGE_MESSAGES, t)), v = c.RenderSpoilers.useSetting(), {
    content: R
  } = s.useMemo(() => (null == T ? void 0 : T.content) != null && "" !== T.content ? (0, d.default)(T, {
    formatInline: !0,
    noStyleAndInteraction: !0
  }) : {
    content: null
  }, [T]), O = null;
  if (i) O = (0, a.jsx)(o.Text, {
    className: I.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: p.default.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
  });
  else if (n) {
    if (null != T && A) O = (0, a.jsx)(o.Text, {
      className: I.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: p.default.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
    });
    else if (null != T) {
      let {
        contentPlaceholder: e,
        renderedContent: t
      } = (0, _.renderSingleLineMessage)(T, R, A, l()(I.messageContent, g.inlineFormat, g.__invalid_smallFontSize), {
        iconClass: I.messageContentIcon,
        iconSize: S.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
      });
      O = null != t ? (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.messageContent,
        children: t
      }) : (0, a.jsx)(o.Text, {
        tag: "span",
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.messageReplacement,
        children: e
      })
    } else O = (0, a.jsx)(o.Text, {
      className: I.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: p.default.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
    })
  } else O = null;
  return (0, a.jsx)(h.ObscuredDisplayContext.Provider, {
    value: (0, u.default)(v, N),
    children: (0, a.jsx)(o.FocusBlock, {
      className: I.messageFocusBlock,
      children: O
    })
  })
});
t.default = T