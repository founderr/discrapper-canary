var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(905405),
  u = n(255269),
  d = n(937889),
  E = n(267128),
  h = n(695346),
  _ = n(496675),
  I = n(699516),
  m = n(68588),
  g = n(868807),
  p = n(981631),
  N = n(217702),
  T = n(689938),
  C = n(608524),
  S = n(25450);
let A = s.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: l,
    message: A
  } = (0, g.a)(t), f = (0, c.p)(), Z = (0, r.e7)([I.Z], () => null != A && I.Z.isBlockedForMessage(A), [A]), v = (0, r.e7)([_.Z], () => _.Z.can(p.Plq.MANAGE_MESSAGES, t)), L = h.cC.useSetting(), {
    content: O
  } = s.useMemo(() => (null == A ? void 0 : A.content) != null && "" !== A.content ? (0, d.ZP)(A, {
    formatInline: !0,
    noStyleAndInteraction: !0,
    shouldFilterKeywords: f
  }) : {
    content: null
  }, [A, f]), R = null;
  if (l) R = (0, i.jsx)(o.Text, {
    className: C.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: T.Z.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
  });
  else if (n) {
    if (null != A && Z) R = (0, i.jsx)(o.Text, {
      className: C.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: T.Z.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
    });
    else if (null != A) {
      let {
        contentPlaceholder: e,
        renderedContent: t
      } = (0, E.f)(A, O, Z, a()(C.messageContent, S.inlineFormat), {
        leadingIconClass: C.messageContentIcon,
        trailingIconClass: C.messageContentIcon,
        iconSize: N.WW
      });
      R = null != t ? (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: C.messageContent,
        children: t
      }) : (0, i.jsx)(o.Text, {
        tag: "span",
        variant: "text-sm/normal",
        color: "text-muted",
        className: C.messageReplacement,
        children: e
      })
    } else R = (0, i.jsx)(o.Text, {
      className: C.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: T.Z.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
    })
  } else R = null;
  return (0, i.jsx)(m.a.Provider, {
    value: (0, u.Z)(L, v),
    children: (0, i.jsx)(o.FocusBlock, {
      className: C.messageFocusBlock,
      children: R
    })
  })
});
t.Z = A