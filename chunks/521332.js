n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(138201),
    l = n(592125),
    u = n(155647),
    c = n(185625),
    d = n(689938),
    _ = n(229223);
function E(e) {
    let { title: t, description: n, onButtonClick: a, trackSettingsUpsellsAction: s } = e,
        [l, u] = i.useState(!1);
    return (
        i.useEffect(() => {
            s(c.M4.SETTINGS_UPSELLS_VIEWED);
        }, []),
        (0, r.jsx)(o.Z, {
            title: t,
            description: n,
            buttonText: l ? d.Z.Messages.IAR_UPSELLS_APPLIED_BUTTON : d.Z.Messages.IAR_UPSELLS_APPLY_BUTTON,
            buttonDisabled: l,
            onButtonPress: () => {
                a(), u(!0), s(c.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function f(e) {
    let { settingsUpsells: t, channelId: n, reportId: i, reportType: o, reportSubType: f } = e,
        h = (0, a.e7)([l.Z], () => l.Z.getChannel(n)),
        p = (0, u.jc)(t, null == h ? void 0 : h.type),
        I = (0, c.i_)(o, f, i);
    return 0 === p.length
        ? null
        : (0, r.jsxs)('div', {
              className: _.container,
              children: [
                  (0, r.jsx)(s.Heading, {
                      variant: 'heading-sm/semibold',
                      className: _.header,
                      children: d.Z.Messages.IAR_UPSELLS_SECTION_TITLE
                  }),
                  (0, r.jsx)('div', {
                      className: _.upsellsContainer,
                      children: p.map((e, n) => {
                          let { getTitle: i, getDescription: a, onApply: s } = e;
                          return (0, r.jsx)(
                              E,
                              {
                                  title: i(),
                                  description: a(),
                                  onButtonClick: s,
                                  trackSettingsUpsellsAction: I(t[n])
                              },
                              n
                          );
                      })
                  })
              ]
          });
}
