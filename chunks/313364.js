n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(399606),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(434404),
    m = n(171368),
    h = n(430824),
    g = n(893966),
    x = n(527379),
    p = n(305473),
    f = n(113679),
    C = n(440857),
    I = n(472596),
    _ = n(598948),
    N = n(428936),
    v = n(41586),
    T = n(918192),
    j = n(981631),
    S = n(388032),
    b = n(444383);
function E(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([h.Z], () => h.Z.getGuild(t)),
        { analyticsLocations: l } = (0, d.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE),
        E = !1 == !!(null == n ? void 0 : n.hasFeature(j.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        R = (0, a.e7)([g.Z], () => g.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        Z = r.useCallback(
            (e) => {
                if (null != e)
                    (0, m.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId,
                        sourceAnalyticsLocations: l,
                        analyticsLocation: { section: j.jXE.GUILD_SETTINGS_MEMBERS }
                    });
            },
            [l]
        ),
        A = r.useRef(null),
        L = r.useCallback(() => {
            var e;
            null === (e = A.current) || void 0 === e || e.resetSearchText();
        }, []);
    if (null == n) return null;
    let y = (0, I.xb)(!1, !1, R);
    return (0, i.jsx)(d.Gt, {
        value: l,
        children: (0, i.jsx)('div', {
            className: b.settingsColumn,
            children: (0, i.jsx)('div', {
                className: b.settingsContainer,
                children: (0, i.jsx)(o.ScrollerAuto, {
                    className: b.settingsScroller,
                    orientation: 'auto',
                    children: (0, i.jsxs)('main', {
                        className: b.settingsContent,
                        children: [
                            (0, i.jsx)(
                                o.FormSection,
                                {
                                    className: s()(b.header),
                                    children: (0, i.jsx)(o.FormTitle, {
                                        tag: o.FormTitleTags.H1,
                                        children: S.intl.string(S.t['S40K6+'])
                                    })
                                },
                                'header'
                            ),
                            (0, i.jsx)(
                                o.FormSection,
                                {
                                    children: (0, i.jsxs)('div', {
                                        className: s()(b.tableContainer),
                                        children: [
                                            (0, i.jsx)(f.Z, { guild: n }),
                                            (0, i.jsx)(p.Z, { guild: n }),
                                            E
                                                ? (0, i.jsxs)('div', {
                                                      className: s()(b.mainTableContainer),
                                                      children: [
                                                          (0, i.jsx)(v.Z, {
                                                              guild: n,
                                                              ref: A
                                                          }),
                                                          (0, i.jsx)(_.Z, {
                                                              guild: n,
                                                              searchState: y,
                                                              compact: !0,
                                                              onSelectRow: Z,
                                                              onResetForNewMembers: L
                                                          }),
                                                          y !== I.po.SUCCESS_STILL_INDEXING && (0, i.jsx)(N.Z, { guildId: n.id })
                                                      ]
                                                  })
                                                : (0, i.jsx)('div', {
                                                      className: s()(b.movedTable),
                                                      children: (0, i.jsxs)('div', {
                                                          className: s()(b.noResultsContainer),
                                                          children: [
                                                              (0, i.jsx)('div', {
                                                                  className: s()(b.__invalid_noResultsIconContainer),
                                                                  children: (0, i.jsx)(T.Z, {})
                                                              }),
                                                              (0, i.jsx)(o.Text, {
                                                                  variant: 'text-md/normal',
                                                                  color: 'text-muted',
                                                                  children: S.intl.format(S.t.Bf6yxM, {
                                                                      onClick: (e) => {
                                                                          if (null != n) e.preventDefault(), u.Z.close(), (0, x._X)(n.id);
                                                                      }
                                                                  })
                                                              })
                                                          ]
                                                      })
                                                  })
                                        ]
                                    })
                                },
                                'body'
                            ),
                            (0, i.jsx)(C.Z, { guildId: n.id })
                        ]
                    })
                })
            })
        })
    });
}
