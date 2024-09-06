E.d(_, {
    a: function () {
        return r;
    }
});
var s,
    T,
    I,
    n,
    t = E(442837),
    A = E(570140);
let r = {},
    a = {},
    N = {},
    S = !1,
    l = !1,
    D = !1;
function L(e) {
    let { guild: _ } = e.invite;
    return (null == _ ? void 0 : _.welcome_screen) != null && ((a[_.id] = _.welcome_screen), !0);
}
function U(e) {
    let { welcomeScreen: _, guildId: E } = e;
    a[E] = null != _ ? _ : r;
}
class O extends (n = t.ZP.Store) {
    get(e) {
        if (null != e) return a[e];
    }
    isFetching() {
        return l;
    }
    hasError() {
        return D;
    }
    hasSeen(e) {
        let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (_ ? S : N[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let _ = a[e];
        return null == _ || 0 === _.welcome_channels.length;
    }
}
(I = 'WelcomeScreenStore'),
    (T = 'displayName') in (s = O)
        ? Object.defineProperty(s, T, {
              value: I,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[T] = I),
    (_.Z = new O(A.Z, {
        INVITE_RESOLVE_SUCCESS: L,
        INVITE_ACCEPT_SUCCESS: L,
        WELCOME_SCREEN_SUBMIT_SUCCESS: U,
        WELCOME_SCREEN_UPDATE: U,
        WELCOME_SCREEN_VIEW: function (e) {
            let { guildId: _, isLurking: E } = e;
            (N[_] = !0), E && (S = !0);
        },
        GUILD_STOP_LURKING: function () {
            S = !1;
        },
        GUILD_DELETE: function (e) {
            let {
                guild: { id: _ }
            } = e;
            N[_] = !1;
        },
        WELCOME_SCREEN_FETCH_START: function () {
            (l = !0), (D = !1);
        },
        WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
            (l = !1), (D = !1);
            let { welcomeScreen: _, guildId: E } = e;
            a[E] = null != _ ? _ : r;
        },
        WELCOME_SCREEN_FETCH_FAIL: function () {
            (l = !1), (D = !0);
        }
    }));
