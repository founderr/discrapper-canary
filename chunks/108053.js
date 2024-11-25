n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(780384),
    a = n(481060),
    o = n(668781),
    s = n(308063),
    c = n(410030),
    d = n(600164),
    u = n(63063),
    m = n(725875),
    h = n(981631),
    p = n(388032),
    g = n(112151),
    x = n(893916),
    f = n(408942);
function b(e) {
    let t,
        { guild: n, channel: b, customWebhooks: v, editedWebhook: C, selectableWebhookChannels: N, refToScroller: I, errors: j, canNavigate: _ } = e,
        T = (0, c.ZP)(),
        [S, Z] = l.useState(null),
        [E, y] = l.useState(null);
    if (null != b) t = b;
    else {
        let e = Object.values(N);
        t = e.length > 0 ? e[0] : null;
    }
    let A = l.useCallback(async () => {
        if (_() && null !== t) {
            let e = await s.Z.create(n.id, t.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === h.evJ.TOO_MANY_WEBHOOKS
                        ? o.Z.show({
                              title: p.intl.string(p.t.cCqscX),
                              body: p.intl.string(p.t['w+QZoa'])
                          })
                        : 429 === n
                          ? o.Z.show({
                                title: p.intl.string(p.t.cCqscX),
                                body: p.intl.string(p.t['YBM+UV'])
                            })
                          : o.Z.show({
                                title: p.intl.string(p.t.cCqscX),
                                body: p.intl.string(p.t['/4TwKS'])
                            }),
                    null
                );
            });
            null != e && (y(e.id), Z(e));
        }
    }, [_, t, n]);
    l.useEffect(() => {
        0 === v.length && A();
    }, []);
    let R = null !== t;
    return (0, i.jsxs)(a.FormSection, {
        children: [
            (0, i.jsx)(a.FormText, {
                type: a.FormTextTypes.DESCRIPTION,
                children: p.intl.format(p.t.WL0d0d, {
                    helpdeskArticle: u.Z.getArticleURL(h.BhN.WEBHOOKS),
                    developersArticle: h.EYA.API_DOCS_WEBHOOKS
                })
            }),
            (0, i.jsx)(a.FormDivider, { className: g.headerDivider }),
            v.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(a.Button, {
                              className: g.createButton,
                              size: a.Button.Sizes.SMALL,
                              disabled: !R,
                              onClick: A,
                              children: p.intl.string(p.t['nrO/HB'])
                          }),
                          (0, i.jsx)(m.Z, {
                              webhooks: v,
                              editedWebhook: C,
                              selectableWebhookChannels: N,
                              lastCreatedWebhookId: null == S ? void 0 : S.id,
                              errors: j,
                              canNavigate: _
                          })
                      ]
                  })
                : (function (e, t, n) {
                      let l = (0, r.wj)(e) ? x : f;
                      return (0, i.jsxs)(d.Z, {
                          direction: d.Z.Direction.VERTICAL,
                          align: d.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: l,
                                  className: g.emptyStateImage
                              }),
                              (0, i.jsx)(a.Heading, {
                                  variant: 'heading-md/semibold',
                                  children: p.intl.string(p.t.LzmsWl)
                              }),
                              (0, i.jsx)(a.Button, {
                                  className: g.emptyStateButton,
                                  disabled: !t,
                                  onClick: n,
                                  children: p.intl.string(p.t.lOQqJC)
                              })
                          ]
                      });
                  })(T, R, A)
        ]
    });
}
