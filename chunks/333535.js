"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("852229"),
  i = n("399606"),
  r = n("481060"),
  o = n("367907"),
  u = n("592125"),
  d = n("465670"),
  c = n("757698"),
  f = n("934415"),
  h = n("63063"),
  m = n("158222"),
  p = n("410992"),
  E = n("981631"),
  g = n("689938"),
  C = n("250420");

function S(e) {
  let {
    threadId: t
  } = e, n = (0, i.useStateFromStores)([u.default], () => u.default.getChannel(t)), S = (0, i.useStateFromStores)([u.default], () => u.default.getChannel(null == n ? void 0 : n.parent_id)), _ = l.useCallback(() => {
    null != n && null != S && ((0, o.trackWithMetadata)(E.AnalyticEvents.MEDIA_POST_SHARE_PROMPT_CLICKED, {
      media_post_id: n.id
    }), (0, s.copy)((0, f.getChannelLinkToCopy)(n, S)))
  }, [n, S]);
  return (0, a.jsxs)("div", {
    className: C.sharePromptContainer,
    children: [(0, a.jsx)(p.default, {}), (0, a.jsxs)("div", {
      className: C.sharePromptContent,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_TITLE
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_SUBTITLE.format({
          helpArticleUrl: h.default.getCreatorSupportArticleURL(E.HelpdeskArticles.MEDIA_CHANNEL)
        })
      }), (0, a.jsx)(r.Spacer, {
        size: 4
      }), (0, a.jsxs)(r.Button, {
        className: C.sharePromptCta,
        innerClassName: C.ctaContent,
        onClick: _,
        children: [(0, a.jsx)(c.default, {
          height: "16px",
          width: "16px"
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_CTA
        })]
      })]
    }), (0, a.jsx)(r.Clickable, {
      className: C.closeButton,
      onClick: () => {
        (0, m.dismissMediaPostSharePrompt)(t)
      },
      "aria-label": g.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, a.jsx)(d.default, {
        height: "15px",
        width: "15px"
      })
    })]
  })
}