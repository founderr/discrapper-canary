var i,
    a = r(47120);
var s = r(544891),
    o = r(780384),
    l = r(570140),
    u = r(391650),
    c = r(877215),
    d = r(895886),
    f = r(681678),
    _ = r(397550),
    h = r(594174),
    p = r(657682),
    m = r(51144),
    g = r(668781),
    E = r(239091),
    v = r(981631),
    I = r(858380),
    T = r(388032);
function b(e) {
    (0, E.Zy)(), g.Z.show(e);
}
function y() {
    (0, E.Zy)(), (0, d.default)();
}
function S(e, n, r) {
    let { status: i, body: a } = e,
        s = a && a.code;
    switch (i) {
        case 429:
            0 === n &&
                b({
                    title: T.intl.string(T.t['3D5eo6']),
                    body: T.intl.string(T.t.TuJriI),
                    confirmText: T.intl.string(T.t.DppXIy)
                });
            break;
        case 403:
            if (s === v.evJ.EMAIL_VERIFICATION_REQUIRED) {
                b({
                    title: T.intl.string(T.t.Gqf33N),
                    body: T.intl.string(T.t.GHOBd3),
                    confirmText: T.intl.string(T.t.HbTSEx),
                    onConfirm: () => {
                        u.j();
                    }
                });
                break;
            }
        default:
            if (s === v.evJ.USER_QUARANTINED) y();
            else if ((0, _.b)(i, s)) break;
            else if (0 === n) {
                let e = null != r ? (0, p.NF)(s || 0, r) : T.intl.string(T.t.paDJBA);
                b({
                    title: T.intl.string(T.t['6moJ8v']),
                    body: e,
                    confirmText: T.intl.string(T.t.BddRzc)
                });
            }
    }
    throw e;
}
!(function (e) {
    (e[(e.SHOW_ALWAYS = 0)] = 'SHOW_ALWAYS'), (e[(e.SHOW_ONLY_IF_ACTION_NEEDED = 1)] = 'SHOW_ONLY_IF_ACTION_NEEDED');
})(i || (i = {}));
let A = {
    sendRequest(e) {
        let { discordTag: n, context: r, captchaPayload: i, errorUxConfig: a = 0 } = e,
            [o, l] = n.split('#');
        return s.tn
            .post({
                url: v.ANM.USER_RELATIONSHIPS(),
                body: {
                    username: o,
                    discriminator: parseInt(l),
                    ...i
                },
                context: r,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .catch((e) => {
                S(e, a, n);
            });
    },
    addRelationship(e, n) {
        let { userId: r, context: i, type: a, friendToken: o, fromFriendSuggestion: l, captchaPayload: u } = e,
            c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            d = h.default.getUser(r);
        return s.tn
            .put({
                url: v.ANM.USER_RELATIONSHIP(r),
                body: {
                    type: a,
                    friend_token: o,
                    from_friend_suggestion: l,
                    ...u
                },
                context: i,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                null == n || n();
            })
            .catch((e) => {
                S(e, c, m.ZP.getUserTag(d));
            });
    },
    acceptFriendRequest(e) {
        function n() {
            o.uv.announce(T.intl.string(T.t['3goNa2']));
        }
        return A.addRelationship(e, n);
    },
    cancelFriendRequest(e, n) {
        function r() {
            o.uv.announce(T.intl.string(T.t.pLUaxc));
        }
        return A.removeRelationship(e, n, r);
    },
    removeFriend(e, n) {
        function r() {
            o.uv.announce(T.intl.string(T.t.vGSLa2));
        }
        A.removeRelationship(e, n, r);
    },
    unblockUser(e, n) {
        function r() {
            o.uv.announce(T.intl.string(T.t['9t1au7']));
        }
        return A.removeRelationship(e, n, r);
    },
    removeRelationship: (e, n, r) =>
        s.tn
            .del({
                url: v.ANM.USER_RELATIONSHIP(e),
                context: n,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                null == r || r();
            })
            .catch(() => {
                o.uv.announce(T.intl.string(T.t.n6Jo3N));
            }),
    updateRelationship: (e, n) =>
        s.tn.patch({
            url: v.ANM.USER_RELATIONSHIP(e),
            body: { nickname: n },
            rejectWithError: !1
        }),
    fetchRelationships() {
        s.tn
            .get({
                url: v.ANM.USER_RELATIONSHIPS(),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (e) =>
                    l.Z.dispatch({
                        type: 'LOAD_RELATIONSHIPS_SUCCESS',
                        relationships: e.body
                    }),
                () => l.Z.dispatch({ type: 'LOAD_RELATIONSHIPS_FAILURE' })
            );
    },
    confirmClearPendingRelationships(e) {
        (0, c.Z)(e);
    },
    clearPendingRelationships: () =>
        s.tn
            .del({
                url: v.ANM.USER_RELATIONSHIPS(),
                query: { relationship_type: v.OGo.PENDING_INCOMING },
                rejectWithError: !1
            })
            .then(() => {
                l.Z.dispatch({ type: 'RELATIONSHIP_PENDING_INCOMING_REMOVED' });
            })
            .catch(() => {
                o.uv.announce(T.intl.string(T.t.n6Jo3N));
            }),
    clearPendingSpamAndIgnored: () =>
        s.tn
            .del({
                url: v.ANM.USER_RELATIONSHIPS(),
                query: { relationship_type: v.OGo.PENDING_INCOMING },
                body: {
                    filters: [I.G.SPAM, I.G.IGNORED]
                },
                rejectWithError: !1
            })
            .then(() => {
                l.Z.dispatch({ type: 'RELATIONSHIP_PENDING_INCOMING_REMOVED' });
            })
            .catch(() => {
                o.uv.announce(T.intl.string(T.t.n6Jo3N));
            }),
    ignoreUser: (e, n, r) =>
        s.tn
            .put({
                url: v.ANM.IGNORE_USER(e),
                context: { location: n },
                rejectWithError: !1
            })
            .then(() => {
                f.Z.showIgnoreSuccessToast(e, r), o.uv.announce(T.intl.string(T.t.Us93CQ));
            })
            .catch(() => {
                f.Z.showFailedToast(), o.uv.announce(T.intl.string(T.t.n6Jo3N));
            }),
    unignoreUser: (e, n, r) =>
        s.tn
            .del({
                url: v.ANM.IGNORE_USER(e),
                context: { location: n },
                rejectWithError: !1
            })
            .then(() => {
                f.Z.showUnignoreSuccessToast(e, r), o.uv.announce(T.intl.string(T.t.QlH5w8));
            })
            .catch(() => {
                f.Z.showFailedToast(), o.uv.announce(T.intl.string(T.t.n6Jo3N));
            })
};
n.Z = A;
