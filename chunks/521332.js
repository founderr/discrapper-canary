n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(230711),
    u = n(367907),
    c = n(138201),
    d = n(592125),
    _ = n(155647),
    E = n(185625),
    f = n(981631),
    h = n(689938),
    p = n(460676);
function m(e) {
    let { title: t, description: n, onButtonClick: r, trackSettingsUpsellsAction: o } = e,
        [s, l] = a.useState(!1);
    return (
        a.useEffect(() => {
            o(E.M4.SETTINGS_UPSELLS_VIEWED);
        }, []),
        (0, i.jsx)(c.Z, {
            title: t,
            description: n,
            buttonText: s ? h.Z.Messages.IAR_UPSELLS_APPLIED_BUTTON : h.Z.Messages.IAR_UPSELLS_APPLY_BUTTON,
            buttonDisabled: s,
            onButtonPress: () => {
                r(), l(!0), o(E.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function I(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: r, reportId: a, reportType: c, reportSubType: I } = e,
        T = (0, o.e7)([d.Z], () => d.Z.getChannel(n)),
        g = (0, _.jc)(t, null == T ? void 0 : T.type),
        S = (0, E.i_)(c, I, a);
    return 0 === g.length
        ? null
        : (0, i.jsxs)('div', {
              className: p.container,
              children: [
                  (0, i.jsx)(s.Heading, {
                      variant: 'text-sm/semibold',
                      className: p.header,
                      children: h.Z.Messages.IAR_UPSELLS_SECTION_TITLE
                  }),
                  (0, i.jsx)('div', {
                      className: p.upsellsContainer,
                      children: g.map((e, n) => {
                          let { getTitle: r, getDescription: a, onApply: o } = e;
                          return (0, i.jsx)(
                              m,
                              {
                                  title: r(),
                                  description: a(),
                                  onButtonClick: o,
                                  trackSettingsUpsellsAction: S(t[n])
                              },
                              n
                          );
                      })
                  }),
                  (0, i.jsx)(s.Button, {
                      className: p.navLinkButton,
                      onClick: () => {
                          l.Z.open(f.oAB.PRIVACY_AND_SAFETY),
                              r(),
                              u.ZP.trackWithMetadata(f.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: a,
                                  report_type: c.name,
                                  report_subtype: I,
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
