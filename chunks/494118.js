t.d(n, {
  Z: function() {
    return T
  }
});
var i = t(735250);
t(470079);
var s = t(780384),
  l = t(481060),
  a = t(410030),
  r = t(285952),
  o = t(63063),
  c = t(725875),
  d = t(981631),
  u = t(689938),
  I = t(107586),
  N = t(893916),
  E = t(408942);

function T(e) {
  let {
    followedChannelWebhooks: n,
    editedWebhook: t,
    selectableWebhookChannels: T,
    errors: m,
    canNavigate: _
  } = e, h = (0, a.ZP)();
  return (0, i.jsxs)(l.FormSection, {
    children: [(0, i.jsx)(l.FormText, {
      type: l.FormTextTypes.DESCRIPTION,
      children: u.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_DESCRIPTION.format({
        helpdeskArticle: o.Z.getArticleURL(d.BhN.CHANNEL_FOLLOWING)
      })
    }), (0, i.jsx)(l.FormDivider, {
      className: I.headerDivider
    }), n.length > 0 ? (0, i.jsx)(c.Z, {
      webhooks: n,
      editedWebhook: t,
      selectableWebhookChannels: T,
      errors: m,
      canNavigate: _
    }) : function(e, n) {
      let t = (0, s.wj)(e) ? N : E;
      return (0, i.jsxs)(r.Z, {
        direction: r.Z.Direction.VERTICAL,
        align: r.Z.Align.CENTER,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: t,
          className: I.emptyStateImage
        }), (0, i.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: u.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY
        }), (0, i.jsx)(l.Button, {
          className: I.emptyStateButton,
          onClick: n,
          children: u.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON
        })]
      })
    }(h, () => open(o.Z.getArticleURL(d.BhN.CHANNEL_FOLLOWING)))]
  })
}