var i = r(411104);
var a = r(544891),
    s = r(433517),
    o = r(570140),
    l = r(663389),
    u = r(626135),
    c = r(768581),
    d = r(546796),
    f = r(37234),
    _ = r(981631),
    h = r(792101),
    p = r(388032);
function m(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        r = arguments.length > 2 ? arguments[2] : void 0;
    o.Z.dispatch({
        type: 'USER_SETTINGS_MODAL_INIT',
        section: e,
        subsection: n,
        ...r
    });
}
n.Z = {
    open() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { openWithoutBackstack: !1 };
        o.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_OPEN',
            section: e,
            subsection: n,
            ...r
        });
        (0, f.jN)(_.S9g.USER_SETTINGS);
    },
    init: m,
    close() {
        let e = l.Z.onClose;
        o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }), null != e && e();
    },
    setSection(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        o.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_SET_SECTION',
            section: e,
            subsection: n,
            ...r
        });
    },
    clearSubsection(e) {
        o.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_CLEAR_SUBSECTION',
            forSection: e
        });
    },
    clearScrollPosition(e) {
        o.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION',
            forSection: e
        });
    },
    updateAccount(e) {
        o.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_UPDATE_ACCOUNT',
            settings: e
        });
    },
    submitComplete() {
        o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_SUBMIT_COMPLETE' });
    },
    reset() {
        o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_RESET' });
    },
    saveAccountChanges(e, n) {
        o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_SUBMIT' });
        let { username: r, email: i, emailToken: l, password: f, avatar: m, newPassword: g, discriminator: E } = e,
            { close: v } = n;
        return (0, d.Z)(
            (e) => {
                let n = {
                        username: r,
                        email: i,
                        email_token: l,
                        password: f,
                        avatar: m,
                        new_password: g,
                        ...e,
                        discriminator: null != E && '' !== E ? E : void 0
                    },
                    o = s.K.get(_.JkL),
                    u = (0, h.xJ)();
                null != u && null != o && ((n.push_provider = u), (n.push_token = o));
                let c = s.K.get(_.scU);
                return (
                    null != h.mv && null != c && ((n.push_voip_provider = h.mv), (n.push_voip_token = c)),
                    a.tn.patch({
                        url: _.ANM.ME,
                        oldFormErrors: !0,
                        body: n,
                        rejectWithError: !1
                    })
                );
            },
            {
                checkEnabled: !1,
                modalProps: { title: p.intl.string(p.t.clQc1d) },
                hooks: {
                    onEarlyClose: () =>
                        o.Z.dispatch({
                            type: 'USER_SETTINGS_MODAL_SUBMIT_FAILURE',
                            errors: {}
                        })
                }
            }
        ).then(
            (e) => {
                let n = e.body,
                    r = n.token;
                return (
                    u.default.track(_.rMx.USER_AVATAR_UPDATED, { animated: (0, c.xR)(n.avatar) }),
                    delete n.token,
                    o.Z.dispatch({
                        type: 'UPDATE_TOKEN',
                        token: r,
                        userId: n.id
                    }),
                    o.Z.dispatch({
                        type: 'CURRENT_USER_UPDATE',
                        user: n
                    }),
                    null != g &&
                        o.Z.dispatch({
                            type: 'USER_PASSWORD_UPDATE',
                            user: n,
                            newPassword: g
                        }),
                    null != f &&
                        null != g &&
                        o.Z.dispatch({
                            type: 'PASSWORD_UPDATED',
                            userId: n.id
                        }),
                    v ? this.close() : this.submitComplete(),
                    e
                );
            },
            (e) => (
                o.Z.dispatch({
                    type: 'USER_SETTINGS_MODAL_SUBMIT_FAILURE',
                    errors: e.body
                }),
                e
            )
        );
    }
};
