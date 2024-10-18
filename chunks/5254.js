n(47120);
var i,
    a,
    s,
    r,
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(570140),
    u = n(598077),
    _ = n(594174),
    E = n(388380),
    h = n(72937);
let m = {},
    I = 0,
    p = !1,
    g = !1;
function T(e) {
    var t;
    let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: null === (t = o().first(e.reasons)) || void 0 === t ? void 0 : t.name,
        user: new u.Z(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: n
    };
}
class S extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(_.default);
    }
    getSuggestionCount() {
        return I;
    }
    getSuggestions() {
        return Object.entries(m).map((e) => {
            let [t, n] = e;
            return n;
        });
    }
    getSuggestion(e) {
        return m[e];
    }
}
(r = 'FriendSuggestionStore'),
    (s = 'displayName') in (a = S)
        ? Object.defineProperty(a, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = r),
    (t.Z = new S(d.Z, {
        CONNECTION_OPEN: function (e) {
            (m = {}), (I = e.friendSuggestionCount) > 0 && ((g = !0), p || !g || ((p = !0), (g = !1), E.Z.fetch())), (0, h.Z)();
        },
        FRIEND_SUGGESTION_CREATE: function (e) {
            let t = T(e.suggestion);
            if (null != m[t.key]) return !1;
            I++,
                (m = {
                    ...m,
                    [t.key]: t
                });
        },
        FRIEND_SUGGESTION_DELETE: function (e) {
            (I = Math.max(0, --I)), delete m[e.suggestedUserId];
        },
        LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
            var t;
            (p = !1),
                (t = e.suggestions),
                (m = o()
                    .chain(t)
                    .map((e) => T(e))
                    .keyBy((e) => e.key)
                    .value()),
                (I = o().keys(m).length);
        },
        LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
            (p = !1), (m = {});
        }
    }));
