t.d(n, {
    Z: function () {
        return g;
    }
});
var i = t(200651);
t(192379);
var l = t(780384),
    r = t(481060),
    a = t(410030),
    o = t(600164),
    s = t(63063),
    d = t(725875),
    c = t(981631),
    u = t(388032),
    m = t(904426),
    h = t(893916),
    p = t(408942);
function g(e) {
    let { followedChannelWebhooks: n, editedWebhook: t, selectableWebhookChannels: g, errors: f, canNavigate: x } = e,
        b = (0, a.ZP)();
    return (0, i.jsxs)(r.FormSection, {
        children: [
            (0, i.jsx)(r.FormText, {
                type: r.FormTextTypes.DESCRIPTION,
                children: u.intl.format(u.t['5u+aV1'], { helpdeskArticle: s.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING) })
            }),
            (0, i.jsx)(r.FormDivider, { className: m.headerDivider }),
            n.length > 0
                ? (0, i.jsx)(d.Z, {
                      webhooks: n,
                      editedWebhook: t,
                      selectableWebhookChannels: g,
                      errors: f,
                      canNavigate: x
                  })
                : (function (e, n) {
                      let t = (0, l.wj)(e) ? h : p;
                      return (0, i.jsxs)(o.Z, {
                          direction: o.Z.Direction.VERTICAL,
                          align: o.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: t,
                                  className: m.emptyStateImage
                              }),
                              (0, i.jsx)(r.Heading, {
                                  variant: 'heading-md/semibold',
                                  children: u.intl.string(u.t.gzuVHx)
                              }),
                              (0, i.jsx)(r.Button, {
                                  className: m.emptyStateButton,
                                  onClick: n,
                                  children: u.intl.string(u.t['ZwSt+f'])
                              })
                          ]
                      });
                  })(b, () => open(s.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING)))
        ]
    });
}
