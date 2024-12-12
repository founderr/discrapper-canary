r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(481060),
    u = r(230711),
    c = r(367907),
    d = r(138201),
    f = r(187819),
    _ = r(592125),
    h = r(155647),
    p = r(185625),
    m = r(981631),
    g = r(388032),
    E = r(442031);
function v(e) {
    let { title: n, description: r, onButtonClick: i, trackSettingsUpsellsAction: o } = e,
        [l, u] = s.useState(!1);
    return (
        s.useEffect(() => {
            o(p.M4.SETTINGS_UPSELLS_VIEWED);
        }, []),
        (0, a.jsx)(d.Z, {
            title: n,
            description: r,
            buttonText: l ? g.intl.string(g.t['h+WsPT']) : g.intl.string(g.t.A8t4NT),
            buttonDisabled: l,
            onButtonPress: () => {
                i(), u(!0), o(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function I(e) {
    let { settingsUpsells: n, channelId: r, onModalClose: i, reportId: s, reportType: d, reportSubType: I } = e,
        T = (0, o.e7)([_.Z], () => _.Z.getChannel(r)),
        b = (0, h.jc)(n, null == T ? void 0 : T.type),
        y = (0, p.i_)(d, I, s),
        S = (0, f._p)({ location: 'settings-upsells-element' });
    return 0 === b.length
        ? null
        : (0, a.jsxs)('div', {
              className: E.container,
              children: [
                  (0, a.jsx)(l.Heading, {
                      variant: 'text-sm/semibold',
                      className: E.header,
                      children: g.intl.string(g.t['1yxTIC'])
                  }),
                  (0, a.jsx)('div', {
                      className: E.upsellsContainer,
                      children: b.map((e, r) => {
                          let { getTitle: i, getDescription: s, onApply: o } = e;
                          return (0, a.jsx)(
                              v,
                              {
                                  title: i(),
                                  description: s(),
                                  onButtonClick: o,
                                  trackSettingsUpsellsAction: y(n[r])
                              },
                              r
                          );
                      })
                  }),
                  (0, a.jsx)(l.Button, {
                      className: E.navLinkButton,
                      onClick: () => {
                          S ? u.Z.open(m.oAB.CONTENT_AND_SOCIAL) : u.Z.open(m.oAB.PRIVACY_AND_SAFETY),
                              i(),
                              c.ZP.trackWithMetadata(m.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: d.name,
                                  report_subtype: I,
                                  action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              });
                      },
                      look: l.Button.Looks.LINK,
                      color: l.Button.Colors.LINK,
                      size: l.Button.Sizes.NONE,
                      children: g.intl.string(g.t.olebGx)
                  })
              ]
          });
}
