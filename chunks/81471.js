var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(905405),
  u = n(255269),
  d = n(937889),
  E = n(695346),
  h = n(496675),
  _ = n(699516),
  I = n(68588),
  m = n(512665),
  T = n(868807),
  g = n(981631),
  p = n(768760),
  N = n(689938),
  S = n(608524),
  C = n(622322);
let A = i.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: l,
    message: A
  } = (0, T.a)(t), f = (0, c.p)(), Z = (0, r.e7)([_.Z], () => null != A && _.Z.isBlockedForMessage(A), [A]), L = (0, r.e7)([h.Z], () => h.Z.can(g.Plq.MANAGE_MESSAGES, t)), O = E.cC.useSetting(), {
    content: v
  } = i.useMemo(() => (null == A ? void 0 : A.content) != null && "" !== A.content ? (0, d.ZP)(A, {
    formatInline: !0,
    noStyleAndInteraction: !0,
    shouldFilterKeywords: f
  }) : {
    content: null
  }, [A, f]), R = null;
  if (l) R = (0, s.jsx)(o.Text, {
    className: S.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: N.Z.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
  });
  else if (n) {
    if (null != A && Z) R = (0, s.jsx)(o.Text, {
      className: S.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: N.Z.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
    });
    else if (null != A) {
      let {
        contentPlaceholder: e,
        renderedContent: t
      } = (0, m.f)(A, v, Z, a()(S.messageContent, C.inlineFormat), {
        leadingIconClass: S.messageContentIcon,
        trailingIconClass: S.messageContentIcon,
        iconSize: p.WW
      });
      R = null != t ? (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: S.messageContent,
        children: t
      }) : (0, s.jsx)(o.Text, {
        tag: "span",
        variant: "text-sm/normal",
        color: "text-muted",
        className: S.messageReplacement,
        children: e
      })
    } else R = (0, s.jsx)(o.Text, {
      className: S.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: N.Z.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
    })
  } else R = null;
  return (0, s.jsx)(I.a.Provider, {
    value: (0, u.Z)(O, L),
    children: (0, s.jsx)(o.FocusBlock, {
      className: S.messageFocusBlock,
      children: R
    })
  })
});
t.Z = A