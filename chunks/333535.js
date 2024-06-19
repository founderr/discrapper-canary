n.d(t, {
  Z: function() {
    return f
  }
});
var l = n(735250),
  i = n(470079),
  s = n(852229),
  a = n(399606),
  r = n(481060),
  o = n(367907),
  c = n(592125),
  u = n(934415),
  d = n(63063),
  h = n(158222),
  m = n(410992),
  p = n(981631),
  E = n(689938),
  g = n(263924);

function f(e) {
  let {
    threadId: t
  } = e, n = (0, a.e7)([c.Z], () => c.Z.getChannel(t)), f = (0, a.e7)([c.Z], () => c.Z.getChannel(null == n ? void 0 : n.parent_id)), C = i.useCallback(() => {
    null != n && null != f && ((0, o.yw)(p.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, {
      media_post_id: n.id
    }), (0, s.J)((0, u.EO)(n, f)))
  }, [n, f]);
  return (0, l.jsxs)("div", {
    className: g.sharePromptContainer,
    children: [(0, l.jsx)(m.Z, {}), (0, l.jsxs)("div", {
      className: g.sharePromptContent,
      children: [(0, l.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: E.Z.Messages.MEDIA_POST_SHARE_PROMPT_TITLE
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: E.Z.Messages.MEDIA_POST_SHARE_PROMPT_SUBTITLE.format({
          helpArticleUrl: d.Z.getCreatorSupportArticleURL(p.BhN.MEDIA_CHANNEL)
        })
      }), (0, l.jsx)(r.Spacer, {
        size: 4
      }), (0, l.jsxs)(r.Button, {
        className: g.sharePromptCta,
        innerClassName: g.ctaContent,
        onClick: C,
        children: [(0, l.jsx)(r.LinkIcon, {
          color: "currentColor",
          size: "xs"
        }), (0, l.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: E.Z.Messages.MEDIA_POST_SHARE_PROMPT_CTA
        })]
      })]
    }), (0, l.jsx)(r.Clickable, {
      className: g.closeButton,
      onClick: () => {
        (0, h.fn)(t)
      },
      "aria-label": E.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, l.jsx)(r.CloseSmallIcon, {
        color: "currentColor",
        size: "xs"
      })
    })]
  })
}