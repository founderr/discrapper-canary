n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(230711),
    l = n(367907),
    u = n(138201),
    c = n(187819),
    d = n(592125),
    _ = n(155647),
    E = n(185625),
    f = n(981631),
    h = n(689938),
    p = n(460676);
function I(e) {
    let { title: t, description: n, onButtonClick: a, trackSettingsUpsellsAction: s } = e,
        [o, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            s(E.M4.SETTINGS_UPSELLS_VIEWED);
        }, []),
        (0, r.jsx)(u.Z, {
            title: t,
            description: n,
            buttonText: o ? h.Z.Messages.IAR_UPSELLS_APPLIED_BUTTON : h.Z.Messages.IAR_UPSELLS_APPLY_BUTTON,
            buttonDisabled: o,
            onButtonPress: () => {
                a(), l(!0), s(E.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function m(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: u, reportType: m, reportSubType: T } = e,
        S = (0, a.e7)([d.Z], () => d.Z.getChannel(n)),
        g = (0, _.jc)(t, null == S ? void 0 : S.type),
        A = (0, E.i_)(m, T, u),
        N = (0, c._p)({ location: 'settings-upsells-element' });
    return 0 === g.length
        ? null
        : (0, r.jsxs)('div', {
              className: p.container,
              children: [
                  (0, r.jsx)(s.Heading, {
                      variant: 'text-sm/semibold',
                      className: p.header,
                      children: h.Z.Messages.IAR_UPSELLS_SECTION_TITLE
                  }),
                  (0, r.jsx)('div', {
                      className: p.upsellsContainer,
                      children: g.map((e, n) => {
                          let { getTitle: i, getDescription: a, onApply: s } = e;
                          return (0, r.jsx)(
                              I,
                              {
                                  title: i(),
                                  description: a(),
                                  onButtonClick: s,
                                  trackSettingsUpsellsAction: A(t[n])
                              },
                              n
                          );
                      })
                  }),
                  (0, r.jsx)(s.Button, {
                      className: p.navLinkButton,
                      onClick: () => {
                          N ? o.Z.open(f.oAB.CONTENT_AND_SOCIAL) : o.Z.open(f.oAB.PRIVACY_AND_SAFETY),
                              i(),
                              l.ZP.trackWithMetadata(f.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: u,
                                  report_type: m.name,
                                  report_subtype: T,
                                  action: E.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              });
                      },
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.LINK,
                      size: s.Button.Sizes.NONE,
                      children: h.Z.Messages.IAR_UPSELLS_GO_TO_SAFETY_SETTINGS
                  })
              ]
          });
}
