n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(367907),
    o = n(434404),
    l = n(138201),
    u = n(430824),
    c = n(981631),
    d = n(388032);
t.Z = (e) => {
    let { guildId: t, reportId: n } = e,
        [f, _] = i.useState(!1),
        p = u.Z.getGuild(t),
        h = null != p;
    i.useEffect(() => {
        _(!h);
    }, [h]);
    let m = i.useCallback(() => {
        _(!0),
            s.ZP.trackWithMetadata(c.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n
            }),
            o.Z.leaveGuild(t);
    }, [t, n]);
    return null == p
        ? null
        : (0, r.jsx)(l.Z, {
              title: d.intl.string(d.t.cU96io),
              description: d.intl.formatToPlainString(d.t['26mR6+'], { guildName: null == p ? void 0 : p.name }),
              buttonText: f ? d.intl.string(d.t['9Ak99v']) : d.intl.string(d.t.F3qExs),
              buttonDisabled: f,
              buttonColor: a.Button.Colors.RED,
              onButtonPress: () => {
                  (0, a.openModal)((e) =>
                      (0, r.jsx)(a.ConfirmModal, {
                          header: d.intl.formatToPlainString(d.t['1GX6Pz'], { name: p.name }),
                          confirmText: d.intl.string(d.t.J2TBi4),
                          cancelText: d.intl.string(d.t['ETE/oK']),
                          onConfirm: m,
                          ...e,
                          children: (0, r.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              children: d.intl.format(d.t.ZEXC0t, { name: p.name })
                          })
                      })
                  );
              }
          });
};
