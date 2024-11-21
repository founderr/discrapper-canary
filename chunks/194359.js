n(47120);
var r,
    i,
    a = n(544891),
    s = n(780384),
    o = n(570140),
    l = n(391650),
    u = n(877215),
    c = n(895886),
    d = n(681678),
    f = n(397550),
    _ = n(594174),
    p = n(657682),
    h = n(51144),
    m = n(668781),
    g = n(239091),
    E = n(981631),
    v = n(388032);
function b(e) {
    (0, g.Zy)(), m.Z.show(e);
}
function I(e, t, n) {
    let { status: r, body: i } = e,
        a = i && i.code;
    switch (r) {
        case 429:
            0 === t &&
                b({
                    title: v.intl.string(v.t['3D5eo6']),
                    body: v.intl.string(v.t.TuJriI),
                    confirmText: v.intl.string(v.t.DppXIy)
                });
            break;
        case 403:
            if (a === E.evJ.EMAIL_VERIFICATION_REQUIRED) {
                b({
                    title: v.intl.string(v.t.Gqf33N),
                    body: v.intl.string(v.t.GHOBd3),
                    confirmText: v.intl.string(v.t.HbTSEx),
                    onConfirm: () => {
                        l.j();
                    }
                });
                break;
            }
        default:
            if (a === E.evJ.USER_QUARANTINED) (0, g.Zy)(), (0, c.default)();
            else if ((0, f.b)(r, a)) break;
            else if (0 === t) {
                let e = null != n ? (0, p.NF)(a || 0, n) : v.intl.string(v.t.paDJBA);
                b({
                    title: v.intl.string(v.t['6moJ8v']),
                    body: e,
                    confirmText: v.intl.string(v.t.BddRzc)
                });
            }
    }
    throw e;
}
((i = r || (r = {}))[(i.SHOW_ALWAYS = 0)] = 'SHOW_ALWAYS'), (i[(i.SHOW_ONLY_IF_ACTION_NEEDED = 1)] = 'SHOW_ONLY_IF_ACTION_NEEDED');
let T = {
    sendRequest(e) {
        let { discordTag: t, context: n, captchaPayload: r, errorUxConfig: i = 0 } = e,
            [s, o] = t.split('#');
        return a.tn
            .post({
                url: E.ANM.USER_RELATIONSHIPS(),
                body: {
                    username: s,
                    discriminator: parseInt(o),
                    ...r
                },
                context: n,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .catch((e) => {
                I(e, i, t);
            });
    },
    addRelationship(e, t) {
        let { userId: n, context: r, type: i, friendToken: s, fromFriendSuggestion: o, captchaPayload: l } = e,
            u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            c = _.default.getUser(n);
        return a.tn
            .put({
                url: E.ANM.USER_RELATIONSHIP(n),
                body: {
                    type: i,
                    friend_token: s,
                    from_friend_suggestion: o,
                    ...l
                },
                context: r,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                null == t || t();
            })
            .catch((e) => {
                I(e, u, h.ZP.getUserTag(c));
            });
    },
    acceptFriendRequest: (e) =>
        T.addRelationship(e, function () {
            s.uv.announce(v.intl.string(v.t['3goNa2']));
        }),
    cancelFriendRequest: (e, t) =>
        T.removeRelationship(e, t, function () {
            s.uv.announce(v.intl.string(v.t.pLUaxc));
        }),
    removeFriend(e, t) {
        T.removeRelationship(e, t, function () {
            s.uv.announce(v.intl.string(v.t.vGSLa2));
        });
    },
    unblockUser: (e, t) =>
        T.removeRelationship(e, t, function () {
            s.uv.announce(v.intl.string(v.t['9t1au7']));
        }),
    removeRelationship: (e, t, n) =>
        a.tn
            .del({
                url: E.ANM.USER_RELATIONSHIP(e),
                context: t,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                null == n || n();
            })
            .catch(() => {
                s.uv.announce(v.intl.string(v.t.n6Jo3N));
            }),
    updateRelationship: (e, t) =>
        a.tn.patch({
            url: E.ANM.USER_RELATIONSHIP(e),
            body: { nickname: t },
            rejectWithError: !1
        }),
    fetchRelationships() {
        a.tn
            .get({
                url: E.ANM.USER_RELATIONSHIPS(),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (e) =>
                    o.Z.dispatch({
                        type: 'LOAD_RELATIONSHIPS_SUCCESS',
                        relationships: e.body
                    }),
                () => o.Z.dispatch({ type: 'LOAD_RELATIONSHIPS_FAILURE' })
            );
    },
    confirmClearPendingRelationships(e) {
        (0, u.Z)(e);
    },
    clearPendingRelationships: () =>
        a.tn
            .del({
                url: E.ANM.USER_RELATIONSHIPS(),
                query: { relationship_type: E.OGo.PENDING_INCOMING },
                rejectWithError: !1
            })
            .then(() => {
                o.Z.dispatch({ type: 'RELATIONSHIP_PENDING_INCOMING_REMOVED' });
            })
            .catch(() => {
                s.uv.announce(v.intl.string(v.t.n6Jo3N));
            }),
    clearPendingSpam: () =>
        a.tn
            .del({
                url: E.ANM.USER_RELATIONSHIPS(),
                query: {
                    relationship_type: E.OGo.PENDING_INCOMING,
                    only_spam: !0
                },
                rejectWithError: !1
            })
            .then(() => {
                o.Z.dispatch({ type: 'RELATIONSHIP_PENDING_INCOMING_REMOVED' });
            })
            .catch(() => {
                s.uv.announce(v.intl.string(v.t.n6Jo3N));
            }),
    ignoreUser: (e, t, n) =>
        a.tn
            .put({
                url: E.ANM.IGNORE_USER(e),
                context: { location: t },
                rejectWithError: !1
            })
            .then(() => {
                d.Z.showIgnoreSuccessToast(e, n);
            })
            .catch(() => {
                d.Z.showFailedToast();
            }),
    unignoreUser: (e, t, n) =>
        a.tn
            .del({
                url: E.ANM.IGNORE_USER(e),
                context: { location: t },
                rejectWithError: !1
            })
            .then(() => {
                d.Z.showUnignoreSuccessToast(e, n);
            })
            .catch(() => {
                d.Z.showFailedToast();
            })
};
t.Z = T;
