var i,
    l,
    o,
    r,
    u,
    a,
    d,
    E = e(442837),
    s = e(570140),
    c = e(592125),
    _ = e(896797),
    C = e(430824),
    A = e(944486),
    S = e(55589),
    I = e(981631);
let T = (null !== (a = null === (u = window) || void 0 === u ? void 0 : null === (r = u.location) || void 0 === r ? void 0 : r.pathname) && void 0 !== a ? a : '').startsWith(I.Z5c.ACTIVITIES) ? I.Z5c.ACTIVITIES : null;
function L(n) {
    let { link: t } = n;
    if (T === t) return !1;
    T = t;
}
class h extends (d = E.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, S.Z, A.Z, C.Z, c.Z);
    }
    getHomeLink() {
        return null != T ? T : _.Z.fallbackRoute;
    }
}
(o = 'AppViewStore'),
    (l = 'displayName') in (i = h)
        ? Object.defineProperty(i, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = o),
    (t.Z = new h(s.Z, {
        OVERLAY_INITIALIZE: function () {
            let n = S.Z.getPrivateChannelIds(),
                t = A.Z.getChannelId(I.ME);
            (null != t || null != n[0]) && (T = I.Z5c.CHANNEL(I.ME, null != t ? t : n[0]));
        },
        APP_VIEW_SET_HOME_LINK: L,
        APPLICATION_STORE_LOCATION_CHANGE: function (n) {
            let { location: t } = n;
            L({
                link: t.pathname,
                type: 'APP_VIEW_SET_HOME_LINK'
            });
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
            if (null == T || !T.startsWith(I.Z5c.APPLICATION_STORE)) return !1;
            T = I.Z5c.APPLICATION_STORE;
        },
        CHANNEL_SELECT: function (n) {
            let { guildId: t, channelId: e } = n;
            if (null == t && null != e) {
                let n = I.Z5c.CHANNEL(I.ME, e);
                if (n !== T) return (T = n), !0;
            }
            return !1;
        },
        CHANNEL_DELETE: function (n) {
            let { channel: t } = n;
            null == t.guild_id && null != t.id && null != T && T === I.Z5c.CHANNEL(I.ME, t.id) && (T = null);
        }
    }));
