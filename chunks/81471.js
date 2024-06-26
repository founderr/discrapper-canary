var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(481060),
  c = n(905405),
  d = n(255269),
  u = n(937889),
  _ = n(695346),
  E = n(496675),
  h = n(699516),
  I = n(68588),
  m = n(512665),
  p = n(868807),
  g = n(981631),
  T = n(768760),
  C = n(689938),
  S = n(608524),
  f = n(622322);
let N = s.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: a,
    message: N
  } = (0, p.a)(t), A = (0, c.p)(), Z = (0, l.e7)([h.Z], () => null != N && h.Z.isBlockedForMessage(N), [N]), L = (0, l.e7)([E.Z], () => E.Z.can(g.Plq.MANAGE_MESSAGES, t)), v = _.cC.useSetting(), {
    content: O
  } = s.useMemo(() => (null == N ? void 0 : N.content) != null && "" !== N.content ? (0, u.ZP)(N, {
    formatInline: !0,
    noStyleAndInteraction: !0,
    shouldFilterKeywords: A
  }) : {
    content: null
  }, [N, A]), R = null;
  if (a) R = (0, i.jsx)(o.Text, {
    className: S.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: C.Z.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
  });
  else if (n) {
    if (null != N && Z) R = (0, i.jsx)(o.Text, {
      className: S.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: C.Z.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
    });
    else if (null != N) {
      let {
        contentPlaceholder: e,
        renderedContent: t
      } = (0, m.f)(N, O, Z, r()(S.messageContent, f.inlineFormat), {
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
      children: C.Z.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
    })
  } else R = null;
  return (0, i.jsx)(I.a.Provider, {
    value: (0, d.Z)(v, L),
    children: (0, i.jsx)(o.FocusBlock, {
      className: S.messageFocusBlock,
      children: R
    })
  })
});
t.Z = N