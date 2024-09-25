E.d(_, {
    a: function () {
        return I;
    }
});
var s,
    n,
    t,
    r,
    T = E(442837),
    a = E(570140);
let I = {},
    l = {},
    A = {},
    o = !1,
    i = !1,
    N = !1;
function D(e) {
    let { guild: _ } = e.invite;
    return (null == _ ? void 0 : _.welcome_screen) != null && ((l[_.id] = _.welcome_screen), !0);
}
function L(e) {
    let { welcomeScreen: _, guildId: E } = e;
    l[E] = null != _ ? _ : I;
}
class S extends (r = T.ZP.Store) {
    get(e) {
        if (null != e) return l[e];
    }
    isFetching() {
        return i;
    }
    hasError() {
        return N;
    }
    hasSeen(e) {
        let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (_ ? o : A[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let _ = l[e];
        return null == _ || 0 === _.welcome_channels.length;
    }
}
(t = 'WelcomeScreenStore'),
    (n = 'displayName') in (s = S)
        ? Object.defineProperty(s, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[n] = t),
    (_.Z = new S(a.Z, {
        INVITE_RESOLVE_SUCCESS: D,
        INVITE_ACCEPT_SUCCESS: D,
        WELCOME_SCREEN_SUBMIT_SUCCESS: L,
        WELCOME_SCREEN_UPDATE: L,
        WELCOME_SCREEN_VIEW: function (e) {
            let { guildId: _, isLurking: E } = e;
            (A[_] = !0), E && (o = !0);
        },
        GUILD_STOP_LURKING: function () {
            o = !1;
        },
        GUILD_DELETE: function (e) {
            let {
                guild: { id: _ }
            } = e;
            A[_] = !1;
        },
        WELCOME_SCREEN_FETCH_START: function () {
            (i = !0), (N = !1);
        },
        WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
            (i = !1), (N = !1);
            let { welcomeScreen: _, guildId: E } = e;
            l[E] = null != _ ? _ : I;
        },
        WELCOME_SCREEN_FETCH_FAIL: function () {
            (i = !1), (N = !0);
        }
    }));
