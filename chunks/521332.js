n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(230711),
    l = n(367907),
    u = n(138201),
    c = n(187819),
    d = n(592125),
    f = n(155647),
    _ = n(185625),
    p = n(981631),
    h = n(388032),
    m = n(460676);
function g(e) {
    let { title: t, description: n, onButtonClick: a, trackSettingsUpsellsAction: s } = e,
        [o, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            s(_.M4.SETTINGS_UPSELLS_VIEWED);
        }, []),
        (0, r.jsx)(u.Z, {
            title: t,
            description: n,
            buttonText: o ? h.intl.string(h.t['h+WsPT']) : h.intl.string(h.t.A8t4NT),
            buttonDisabled: o,
            onButtonPress: () => {
                a(), l(!0), s(_.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function E(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: u, reportType: E, reportSubType: v } = e,
        b = (0, a.e7)([d.Z], () => d.Z.getChannel(n)),
        I = (0, f.jc)(t, null == b ? void 0 : b.type),
        T = (0, _.i_)(E, v, u),
        S = (0, c._p)({ location: 'settings-upsells-element' });
    return 0 === I.length
        ? null
        : (0, r.jsxs)('div', {
              className: m.container,
              children: [
                  (0, r.jsx)(s.Heading, {
                      variant: 'text-sm/semibold',
                      className: m.header,
                      children: h.intl.string(h.t['1yxTIC'])
                  }),
                  (0, r.jsx)('div', {
                      className: m.upsellsContainer,
                      children: I.map((e, n) => {
                          let { getTitle: i, getDescription: a, onApply: s } = e;
                          return (0, r.jsx)(
                              g,
                              {
                                  title: i(),
                                  description: a(),
                                  onButtonClick: s,
                                  trackSettingsUpsellsAction: T(t[n])
                              },
                              n
                          );
                      })
                  }),
                  (0, r.jsx)(s.Button, {
                      className: m.navLinkButton,
                      onClick: () => {
                          S ? o.Z.open(p.oAB.CONTENT_AND_SOCIAL) : o.Z.open(p.oAB.PRIVACY_AND_SAFETY),
                              i(),
                              l.ZP.trackWithMetadata(p.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: u,
                                  report_type: E.name,
                                  report_subtype: v,
                                  action: _.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              });
                      },
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.LINK,
                      size: s.Button.Sizes.NONE,
                      children: h.intl.string(h.t.olebGx)
                  })
              ]
          });
}
