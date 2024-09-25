t.d(s, {
    Z: function () {
        return D;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(512722),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(570140),
    d = t(497321),
    _ = t(100527),
    u = t(367907),
    E = t(906732),
    T = t(296810),
    S = t(921813),
    I = t(621853),
    N = t(246946),
    A = t(594174),
    m = t(63063),
    C = t(74538),
    g = t(18438),
    h = t(778825),
    O = t(856607),
    p = t(594496),
    R = t(856768),
    x = t(981631),
    f = t(689938);
function M(e) {
    (0, l.openModalLazy)(async () => {
        let { default: s } = await t.e('84509').then(t.bind(t, 933696));
        return (t) =>
            (0, n.jsx)(s, {
                source: {
                    ...e,
                    page: x.ZY5.GUILD_MEMBER_PROFILE_SETTINGS
                },
                ...t
            });
    });
}
function D(e) {
    let { selectedGuild: s } = e,
        { analyticsLocations: t } = (0, E.ZP)(_.Z.GUILD_PROFILE),
        i = (0, o.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return r()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        D = (0, o.e7)([I.Z], () => !I.Z.isFetchingProfile(i.id, null == s ? void 0 : s.id)),
        P = (0, o.e7)([N.Z], () => N.Z.hidePersonalInformation),
        { source: L, ...b } = (0, o.cj)([h.Z], () => ({
            ...h.Z.getAllPending(),
            source: h.Z.getSource()
        }));
    return (a.useEffect(() => () => c.Z.wait(g.W3), []),
    a.useEffect(() => {
        null != L &&
            u.ZP.trackWithMetadata(x.rMx.SETTINGS_PANE_VIEWED, {
                settings_type: 'guild',
                destination_pane: x.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                source: L
            });
    }, [L]),
    P)
        ? (0, n.jsx)(d.Z, {})
        : D
          ? (0, n.jsxs)(E.Gt, {
                value: t,
                children: [
                    (0, n.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: f.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_HINT.format({ helpCenterLink: m.Z.getArticleURL(x.BhN.GUILD_PROFILES) })
                    }),
                    null != s
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(R.Z, {
                                      guildId: s.id,
                                      onChange: (e) => {
                                          null != e && (0, g.HP)(e);
                                      }
                                  }),
                                  (0, n.jsx)(T.Z, {
                                      previewTitle: f.Z.Messages.CHANGE_IDENTITY_PREVIEW_WITH_GUILD_NAME.format({ guildName: null == s ? void 0 : s.name }),
                                      profilePreview: (0, n.jsx)(S.Z, {
                                          user: i,
                                          guild: s,
                                          canUsePremiumCustomization: C.ZP.canUsePremiumProfileCustomization(i),
                                          onUpsellClick: M,
                                          ...b
                                      }),
                                      children: (0, n.jsx)(p.Z, {})
                                  })
                              ]
                          })
                        : (0, n.jsx)(O.Z, {})
                ]
            })
          : (0, n.jsx)(l.Spinner, {});
}
