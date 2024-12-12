r.d(n, {
    ZP: function () {
        return h;
    },
    nK: function () {
        return f;
    },
    uj: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(26033),
    o = r(810568),
    l = r(168524),
    u = r(858042),
    c = r(981631),
    d = r(388032);
function f(e) {
    let { user: n, activity: r, entry: i } = e;
    return null != i
        ? {
              applicationId: (0, s.dX)(i) ? i.extra.application_id : void 0,
              sourceUserId: i.author_id
          }
        : null != r
          ? {
                applicationId: r.type === c.IIU.PLAYING && null != r.application_id ? r.application_id : void 0,
                sourceUserId: n.id
            }
          : {
                applicationId: void 0,
                sourceUserId: void 0
            };
}
function _(e) {
    let { user: n, activity: r, entry: i } = e,
        { applicationId: a } = f({
            activity: r,
            entry: i,
            user: n
        });
    return (0, u.M)({
        applicationId: a,
        showOutdatedInfoOption: !1
    });
}
function h(e) {
    let { user: n, activity: r, entry: s, onAction: u, isMenuOpen: c } = e,
        { applicationId: _, sourceUserId: h } = f({
            activity: r,
            entry: s,
            user: n
        }),
        p = (0, l.Z)({
            location: 'UserProfileActivityContextMenu',
            source: o.m1.UserProfileCardContextMenu,
            trackEntryPointImpression: c,
            applicationId: _,
            sourceUserId: h
        });
    return null == p
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'game-profile',
              label: d.intl.string(d.t.ajHoOj),
              action: (e) => {
                  null == u || u({ action: 'PRESS_VIEW_GAME_PROFILE_MENU_ITEM' }), p(e);
              }
          });
}
