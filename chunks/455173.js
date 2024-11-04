var i,
    r,
    a,
    l,
    s = n(442837),
    o = n(570140),
    c = n(292556),
    d = n(812206);
class u extends (l = s.ZP.Store) {}
(a = 'UserAchievementStore'),
    (r = 'displayName') in (i = u)
        ? Object.defineProperty(i, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = a);
new u(o.Z, {
    USER_ACHIEVEMENT_UPDATE: function (e) {
        let { userAchievement: t } = e,
            { application_id: n, achievement: i, percent_complete: r } = t;
        if (100 === r && null != i) {
            let e = d.Z.getApplication(n),
                t = null != e ? e.getIconURL(64) : null;
            c.default.showNotification(t, i.name, i.description, { notif_type: 'USER_ACHIEVEMENT_UPDATE' }, { omitViewTracking: !0 });
        }
    }
});
