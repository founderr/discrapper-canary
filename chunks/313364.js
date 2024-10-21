n.d(t, {
    Z: function () {
        return O;
    }
});
var s = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    l = n(399606),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(434404),
    _ = n(171368),
    I = n(430824),
    E = n(893966),
    T = n(527379),
    m = n(305473),
    N = n(113679),
    S = n(440857),
    g = n(472596),
    h = n(598948),
    C = n(428936),
    x = n(41586),
    p = n(918192),
    R = n(981631),
    L = n(689938),
    f = n(444383);
function O(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([I.Z], () => I.Z.getGuild(t)),
        { analyticsLocations: i } = (0, d.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE),
        O = !1 == !!(null == n ? void 0 : n.hasFeature(R.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        A = (0, l.e7)([E.Z], () => E.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        M = a.useCallback(
            (e) => {
                if (null != e)
                    (0, _.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId,
                        sourceAnalyticsLocations: i,
                        analyticsLocation: { section: R.jXE.GUILD_SETTINGS_MEMBERS }
                    });
            },
            [i]
        ),
        D = a.useRef(null),
        v = a.useCallback(() => {
            var e;
            null === (e = D.current) || void 0 === e || e.resetSearchText();
        }, []);
    if (null == n) return null;
    let j = (0, g.xb)(!1, !1, A);
    return (0, s.jsx)(d.Gt, {
        value: i,
        children: (0, s.jsx)('div', {
            className: f.settingsColumn,
            children: (0, s.jsx)('div', {
                className: f.settingsContainer,
                children: (0, s.jsx)(o.ScrollerAuto, {
                    className: f.settingsScroller,
                    orientation: 'auto',
                    children: (0, s.jsxs)('main', {
                        className: f.settingsContent,
                        children: [
                            (0, s.jsx)(
                                o.FormSection,
                                {
                                    className: r()(f.header),
                                    children: (0, s.jsx)(o.FormTitle, {
                                        tag: o.FormTitleTags.H1,
                                        children: L.Z.Messages.GUILD_SETTINGS_MEMBERS_SERVER_MEMBERS
                                    })
                                },
                                'header'
                            ),
                            (0, s.jsx)(
                                o.FormSection,
                                {
                                    children: (0, s.jsxs)('div', {
                                        className: r()(f.tableContainer),
                                        children: [
                                            (0, s.jsx)(N.Z, { guild: n }),
                                            (0, s.jsx)(m.Z, { guild: n }),
                                            O
                                                ? (0, s.jsxs)('div', {
                                                      className: r()(f.mainTableContainer),
                                                      children: [
                                                          (0, s.jsx)(x.Z, {
                                                              guild: n,
                                                              ref: D
                                                          }),
                                                          (0, s.jsx)(h.Z, {
                                                              guild: n,
                                                              searchState: j,
                                                              compact: !0,
                                                              onSelectRow: M,
                                                              onResetForNewMembers: v
                                                          }),
                                                          j !== g.po.SUCCESS_STILL_INDEXING && (0, s.jsx)(C.Z, { guildId: n.id })
                                                      ]
                                                  })
                                                : (0, s.jsx)('div', {
                                                      className: r()(f.movedTable),
                                                      children: (0, s.jsxs)('div', {
                                                          className: r()(f.noResultsContainer),
                                                          children: [
                                                              (0, s.jsx)('div', {
                                                                  className: r()(f.__invalid_noResultsIconContainer),
                                                                  children: (0, s.jsx)(p.Z, {})
                                                              }),
                                                              (0, s.jsx)(o.Text, {
                                                                  variant: 'text-md/normal',
                                                                  color: 'text-muted',
                                                                  children: L.Z.Messages.GUILD_SETTINGS_SAFETY_MODERATION_EXPERIENCE_ENABLED.format({
                                                                      onClick: (e) => {
                                                                          if (null != n) e.preventDefault(), u.Z.close(), (0, T._X)(n.id);
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
                            (0, s.jsx)(S.Z, { guildId: n.id })
                        ]
                    })
                })
            })
        })
    });
}
