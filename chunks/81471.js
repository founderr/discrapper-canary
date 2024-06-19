var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(200120),
  u = n(255269),
  d = n(937889),
  E = n(695346),
  h = n(496675),
  _ = n(699516),
  I = n(68588),
  m = n(512665),
  g = n(868807),
  p = n(981631),
  T = n(768760),
  N = n(689938),
  S = n(608524),
  C = n(622322);
let A = s.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: l,
    message: A
  } = (0, g.a)(t), f = (0, c.B)(), Z = (0, r.e7)([_.Z], () => null != A && _.Z.isBlockedForMessage(A), [A]), v = (0, r.e7)([h.Z], () => h.Z.can(p.Plq.MANAGE_MESSAGES, t)), L = E.cC.useSetting(), {
    content: O
  } = s.useMemo(() => (null == A ? void 0 : A.content) != null && "" !== A.content ? (0, d.ZP)(A, {
    formatInline: !0,
    noStyleAndInteraction: !0,
    shouldFilterKeywords: null != f
  }) : {
    content: null
  }, [A, f]), R = null;
  if (l) R = (0, i.jsx)(o.Text, {
    className: S.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: N.Z.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
  });
  else if (n) {
    if (null != A && Z) R = (0, i.jsx)(o.Text, {
      className: S.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: N.Z.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
    });
    else if (null != A) {
      let {
        contentPlaceholder: e,
        renderedContent: t
      } = (0, m.f)(A, O, Z, a()(S.messageContent, C.inlineFormat), {
        leadingIconClass: S.messageContentIcon,
        trailingIconClass: S.messageContentIcon,
        iconSize: T.WW
      });
      R = null != t ? (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: S.messageContent,
        children: t
      }) : (0, i.jsx)(o.Text, {
        tag: "span",
        variant: "text-sm/normal",
        color: "text-muted",
        className: S.messageReplacement,
        children: e
      })
    } else R = (0, i.jsx)(o.Text, {
      className: S.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: N.Z.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
    })
  } else R = null;
  return (0, i.jsx)(I.a.Provider, {
    value: (0, u.Z)(L, v),
    children: (0, i.jsx)(o.FocusBlock, {
      className: S.messageFocusBlock,
      children: R
    })
  })
});
t.Z = A