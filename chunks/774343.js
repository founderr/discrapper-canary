var i,
    o,
    l,
    E,
    r,
    a,
    u,
    d = t(442837),
    s = t(570140),
    _ = t(592125),
    c = t(896797),
    A = t(430824),
    C = t(944486),
    S = t(55589),
    I = t(981631);
let T = (null !== (a = null === (r = window) || void 0 === r ? void 0 : null === (E = r.location) || void 0 === E ? void 0 : E.pathname) && void 0 !== a ? a : '').startsWith(I.Z5c.ACTIVITIES) ? I.Z5c.ACTIVITIES : null;
function L(e) {
    let { link: n } = e;
    if (T === n) return !1;
    T = n;
}
class N extends (u = d.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, S.Z, C.Z, A.Z, _.Z);
    }
    getHomeLink() {
        return null != T ? T : c.Z.fallbackRoute;
    }
}
(l = 'AppViewStore'),
    (o = 'displayName') in (i = N)
        ? Object.defineProperty(i, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[o] = l),
    (n.Z = new N(s.Z, {
        OVERLAY_INITIALIZE: function () {
            let e = S.Z.getPrivateChannelIds(),
                n = C.Z.getChannelId(I.ME);
            (null != n || null != e[0]) && (T = I.Z5c.CHANNEL(I.ME, null != n ? n : e[0]));
        },
        APP_VIEW_SET_HOME_LINK: L,
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            L({
                link: n.pathname,
                type: 'APP_VIEW_SET_HOME_LINK'
            });
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
            if (null == T || !T.startsWith(I.Z5c.APPLICATION_STORE)) return !1;
            T = I.Z5c.APPLICATION_STORE;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: n, channelId: t } = e;
            if (null == n && null != t) {
                let e = I.Z5c.CHANNEL(I.ME, t);
                if (e !== T) return (T = e), !0;
            }
            return !1;
        },
        CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            null == n.guild_id && null != n.id && null != T && T === I.Z5c.CHANNEL(I.ME, n.id) && (T = null);
        }
    }));
