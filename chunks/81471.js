"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("442837"),
  o = a("481060"),
  u = a("255269"),
  d = a("937889"),
  c = a("695346"),
  f = a("496675"),
  E = a("699516"),
  h = a("68588"),
  _ = a("512665"),
  C = a("868807"),
  m = a("981631"),
  S = a("768760"),
  I = a("689938"),
  p = a("200374"),
  T = a("931093");
let g = s.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: a,
    error: l,
    message: g
  } = (0, C.useMessageRequestPreview)(t), A = (0, r.useStateFromStores)([E.default], () => null != g && E.default.isBlocked(g.author.id), [g]), N = (0, r.useStateFromStores)([f.default], () => f.default.can(m.Permissions.MANAGE_MESSAGES, t)), v = c.RenderSpoilers.useSetting(), {
    content: R
  } = s.useMemo(() => (null == g ? void 0 : g.content) != null && "" !== g.content ? (0, d.default)(g, {
    formatInline: !0,
    noStyleAndInteraction: !0
  }) : {
    content: null
  }, [g]), O = null;
  if (l) O = (0, n.jsx)(o.Text, {
    className: p.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: I.default.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
  });
  else if (a) {
    if (null != g && A) O = (0, n.jsx)(o.Text, {
      className: p.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: I.default.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
    });
    else if (null != g) {
      let {
        contentPlaceholder: e,
        renderedContent: t
      } = (0, _.renderSingleLineMessage)(g, R, A, i()(p.messageContent, T.inlineFormat, T.__invalid_smallFontSize), {
        iconClass: p.messageContentIcon,
        iconSize: S.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
      });
      O = null != t ? (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: p.messageContent,
        children: t
      }) : (0, n.jsx)(o.Text, {
        tag: "span",
        variant: "text-sm/normal",
        color: "text-muted",
        className: p.messageReplacement,
        children: e
      })
    } else O = (0, n.jsx)(o.Text, {
      className: p.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: I.default.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
    })
  } else O = null;
  return (0, n.jsx)(h.ObscuredDisplayContext.Provider, {
    value: (0, u.default)(v, N),
    children: (0, n.jsx)(o.FocusBlock, {
      className: p.messageFocusBlock,
      children: O
    })
  })
});
t.default = g