n.d(e, {
    Yw: function () {
        return a;
    },
    fc: function () {
        return u;
    },
    qd: function () {
        return s;
    }
});
var i = n(544891),
    r = n(570140),
    l = n(626135),
    o = n(292352),
    E = n(981631);
async function a(t, e) {
    await i.tn
        .patch({
            url: E.ANM.FAMILY_CENTER_LINKED_USERS,
            body: {
                linked_user_id: t,
                link_status: e
            },
            rejectWithError: !1
        })
        .then((t) => {
            let { body: e } = t;
            return (
                r.Z.dispatch({
                    type: 'FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS',
                    linkedUsers: e
                }),
                e
            );
        });
}
async function u(t) {
    await i.tn
        .del({
            url: E.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: t },
            rejectWithError: !1
        })
        .then((e) => {
            let { body: n } = e;
            return (
                r.Z.dispatch({
                    type: 'FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS',
                    linkedUsers: n,
                    deletedUserId: t
                }),
                n
            );
        });
}
async function s() {
    await i.tn
        .get({
            url: E.ANM.FAMILY_CENTER_LINK_CODE,
            rejectWithError: !1
        })
        .then((t) => {
            let { body: e } = t,
                n = e.link_code;
            return (
                r.Z.dispatch({
                    type: 'FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS',
                    linkCode: n
                }),
                n
            );
        });
}
e.ZP = {
    async initialPageLoad() {
        var t, e, n, l;
        r.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let { body: o } = await i.tn.get({
                url: E.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
                rejectWithError: !1
            }),
            { teen_audit_log: a, linked_users: u, users: s } = o,
            _ = {
                teenId: null == a ? void 0 : a.teen_user_id,
                rangeStartId: null == a ? void 0 : a.range_start_id,
                totals: null !== (t = null == a ? void 0 : a.totals) && void 0 !== t ? t : {},
                actions: null !== (e = null == a ? void 0 : a.actions) && void 0 !== e ? e : [],
                users: null !== (n = null == a ? void 0 : a.users) && void 0 !== n ? n : [],
                guilds: null !== (l = null == a ? void 0 : a.guilds) && void 0 !== l ? l : []
            };
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_INITIAL_LOAD',
                familyCenterTeenActivity: _,
                linkedUsers: u,
                users: s
            }),
            _
        );
    },
    async fetchLinkedUsers() {
        let { body: t } = await i.tn.get({
                url: E.ANM.FAMILY_CENTER_LINKED_USERS,
                rejectWithError: !1
            }),
            e = {
                linkedUsers: t.linked_users,
                users: t.users
            };
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS',
                ...e
            }),
            e
        );
    },
    async requestLink(t, e) {
        let { body: n } = await i.tn.post({
                url: E.ANM.FAMILY_CENTER_LINKED_USERS,
                body: {
                    recipient_id: t,
                    code: e
                },
                rejectWithError: !1
            }),
            l = {
                linkedUsers: n.linked_users,
                users: n.users
            };
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_REQUEST_LINK_SUCCESS',
                ...l
            }),
            l
        );
    },
    async fetchTeenActivity(t) {
        r.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let e = E.ANM.FAMILY_CENTER_TEEN_ACTIVITY(t),
            { body: n } = await i.tn.get({
                url: e,
                rejectWithError: !1
            }),
            l = n.teen_audit_log,
            o = {
                teenId: l.teen_user_id,
                rangeStartId: l.range_start_id,
                totals: l.totals,
                actions: l.actions,
                users: l.users,
                guilds: l.guilds
            };
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS',
                familyCenterTeenActivity: o
            }),
            o
        );
    },
    async fetchMoreTeenActivity(t, e, n, a) {
        let { body: u } = await i.tn.get({
                url: E.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, e, n, a),
                rejectWithError: !1
            }),
            { teen_audit_log: s } = u,
            _ = {
                teenId: s.teen_user_id,
                rangeStartId: s.range_start_id,
                actions: s.actions,
                users: s.users,
                guilds: s.guilds
            };
        return (
            l.default.track(E.rMx.FAMILY_CENTER_ACTION, {
                action: o.YC.LoadMore,
                selected_teen_id: t,
                action_display_type: e
            }),
            r.Z.dispatch({
                type: 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS',
                familyCenterTeenActivity: _
            }),
            s
        );
    },
    selectTab(t) {
        r.Z.dispatch({
            type: 'FAMILY_CENTER_HANDLE_TAB_SELECT',
            tab: t
        });
    }
};
