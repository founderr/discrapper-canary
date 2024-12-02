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
    v = n(858380),
    I = n(388032);
function T(e) {
    (0, g.Zy)(), m.Z.show(e);
}
function b(e, t, n) {
    let { status: r, body: i } = e,
        a = i && i.code;
    switch (r) {
        case 429:
            0 === t &&
                T({
                    title: I.intl.string(I.t['3D5eo6']),
                    body: I.intl.string(I.t.TuJriI),
                    confirmText: I.intl.string(I.t.DppXIy)
                });
            break;
        case 403:
            if (a === E.evJ.EMAIL_VERIFICATION_REQUIRED) {
                T({
                    title: I.intl.string(I.t.Gqf33N),
                    body: I.intl.string(I.t.GHOBd3),
                    confirmText: I.intl.string(I.t.HbTSEx),
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
                let e = null != n ? (0, p.NF)(a || 0, n) : I.intl.string(I.t.paDJBA);
                T({
                    title: I.intl.string(I.t['6moJ8v']),
                    body: e,
                    confirmText: I.intl.string(I.t.BddRzc)
                });
            }
    }
    throw e;
}
((i = r || (r = {}))[(i.SHOW_ALWAYS = 0)] = 'SHOW_ALWAYS'), (i[(i.SHOW_ONLY_IF_ACTION_NEEDED = 1)] = 'SHOW_ONLY_IF_ACTION_NEEDED');
let S = {
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
                b(e, i, t);
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
                b(e, u, h.ZP.getUserTag(c));
            });
    },
    acceptFriendRequest: (e) =>
        S.addRelationship(e, function () {
            s.uv.announce(I.intl.string(I.t['3goNa2']));
        }),
    cancelFriendRequest: (e, t) =>
        S.removeRelationship(e, t, function () {
            s.uv.announce(I.intl.string(I.t.pLUaxc));
        }),
    removeFriend(e, t) {
        S.removeRelationship(e, t, function () {
            s.uv.announce(I.intl.string(I.t.vGSLa2));
        });
    },
    unblockUser: (e, t) =>
        S.removeRelationship(e, t, function () {
            s.uv.announce(I.intl.string(I.t['9t1au7']));
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
                s.uv.announce(I.intl.string(I.t.n6Jo3N));
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
                s.uv.announce(I.intl.string(I.t.n6Jo3N));
            }),
    clearPendingSpamAndIgnored: () =>
        a.tn
            .del({
                url: E.ANM.USER_RELATIONSHIPS(),
                query: { relationship_type: E.OGo.PENDING_INCOMING },
                body: {
                    filters: [v.G.SPAM, v.G.IGNORED]
                },
                rejectWithError: !1
            })
            .then(() => {
                o.Z.dispatch({ type: 'RELATIONSHIP_PENDING_INCOMING_REMOVED' });
            })
            .catch(() => {
                s.uv.announce(I.intl.string(I.t.n6Jo3N));
            }),
    ignoreUser: (e, t, n) =>
        a.tn
            .put({
                url: E.ANM.IGNORE_USER(e),
                context: { location: t },
                rejectWithError: !1
            })
            .then(() => {
                d.Z.showIgnoreSuccessToast(e, n), s.uv.announce(I.intl.string(I.t.Us93CQ));
            })
            .catch(() => {
                d.Z.showFailedToast(), s.uv.announce(I.intl.string(I.t.n6Jo3N));
            }),
    unignoreUser: (e, t, n) =>
        a.tn
            .del({
                url: E.ANM.IGNORE_USER(e),
                context: { location: t },
                rejectWithError: !1
            })
            .then(() => {
                d.Z.showUnignoreSuccessToast(e, n), s.uv.announce(I.intl.string(I.t.QlH5w8));
            })
            .catch(() => {
                d.Z.showFailedToast(), s.uv.announce(I.intl.string(I.t.n6Jo3N));
            })
};
t.Z = S;
