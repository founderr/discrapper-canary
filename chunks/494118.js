t.d(n, {
    Z: function () {
        return N;
    }
});
var i = t(200651);
t(192379);
var a = t(780384),
    l = t(481060),
    s = t(410030),
    o = t(600164),
    r = t(63063),
    d = t(725875),
    c = t(981631),
    u = t(689938),
    I = t(904426),
    m = t(893916),
    _ = t(408942);
function N(e) {
    let { followedChannelWebhooks: n, editedWebhook: t, selectableWebhookChannels: N, errors: E, canNavigate: T } = e,
        h = (0, s.ZP)();
    return (0, i.jsxs)(l.FormSection, {
        children: [
            (0, i.jsx)(l.FormText, {
                type: l.FormTextTypes.DESCRIPTION,
                children: u.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_DESCRIPTION.format({ helpdeskArticle: r.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING) })
            }),
            (0, i.jsx)(l.FormDivider, { className: I.headerDivider }),
            n.length > 0
                ? (0, i.jsx)(d.Z, {
                      webhooks: n,
                      editedWebhook: t,
                      selectableWebhookChannels: N,
                      errors: E,
                      canNavigate: T
                  })
                : (function (e, n) {
                      let t = (0, a.wj)(e) ? m : _;
                      return (0, i.jsxs)(o.Z, {
                          direction: o.Z.Direction.VERTICAL,
                          align: o.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: t,
                                  className: I.emptyStateImage
                              }),
                              (0, i.jsx)(l.Heading, {
                                  variant: 'heading-md/semibold',
                                  children: u.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY
                              }),
                              (0, i.jsx)(l.Button, {
                                  className: I.emptyStateButton,
                                  onClick: n,
                                  children: u.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON
                              })
                          ]
                      });
                  })(h, () => open(r.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING)))
        ]
    });
}
