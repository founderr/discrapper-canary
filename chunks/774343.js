var l,
    i,
    o,
    a,
    u,
    r,
    d,
    c = t(442837),
    s = t(570140),
    E = t(592125),
    C = t(896797),
    _ = t(430824),
    h = t(944486),
    S = t(55589),
    I = t(981631);
let A = (null !== (r = null === (u = window) || void 0 === u ? void 0 : null === (a = u.location) || void 0 === a ? void 0 : a.pathname) && void 0 !== r ? r : '').startsWith(I.Z5c.ACTIVITIES) ? I.Z5c.ACTIVITIES : null;
function T(e) {
    let { link: n } = e;
    if (A === n) return !1;
    A = n;
}
class f extends (d = c.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, S.Z, h.Z, _.Z, E.Z);
    }
    getHomeLink() {
        return null != A ? A : C.Z.fallbackRoute;
    }
}
(o = 'AppViewStore'),
    (i = 'displayName') in (l = f)
        ? Object.defineProperty(l, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[i] = o),
    (n.Z = new f(s.Z, {
        OVERLAY_INITIALIZE: function () {
            let e = S.Z.getPrivateChannelIds(),
                n = h.Z.getChannelId(I.ME);
            (null != n || null != e[0]) && (A = I.Z5c.CHANNEL(I.ME, null != n ? n : e[0]));
        },
        APP_VIEW_SET_HOME_LINK: T,
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            T({
                link: n.pathname,
                type: 'APP_VIEW_SET_HOME_LINK'
            });
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
            if (null == A || !A.startsWith(I.Z5c.APPLICATION_STORE)) return !1;
            A = I.Z5c.APPLICATION_STORE;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: n, channelId: t } = e;
            if (null == n && null != t) {
                let e = I.Z5c.CHANNEL(I.ME, t);
                if (e !== A) return (A = e), !0;
            }
            return !1;
        },
        CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            null == n.guild_id && null != n.id && null != A && A === I.Z5c.CHANNEL(I.ME, n.id) && (A = null);
        }
    }));
