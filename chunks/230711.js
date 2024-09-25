var r = n(411104);
var i = n(544891),
    a = n(433517),
    o = n(570140),
    s = n(187819),
    l = n(663389),
    u = n(626135),
    c = n(768581),
    d = n(546796),
    _ = n(37234),
    E = n(981631),
    f = n(792101),
    h = n(689938);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    o.Z.dispatch({
        type: 'USER_SETTINGS_MODAL_INIT',
        section: e,
        subsection: t,
        ...n
    });
}
t.Z = {
    open() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { openWithoutBackstack: !1 };
        (0, s.sp)({
            location: 'modal-action-creators-open',
            autoTrackExposure: !1
        }) &&
            e === E.oAB.PRIVACY_AND_SAFETY &&
            (e = E.oAB.PRIVACY_AND_SAFETY_V2),
            o.Z.dispatch({
                type: 'USER_SETTINGS_MODAL_OPEN',
                section: e,
                subsection: t,
                ...n
            });
        (0, _.jN)(E.S9g.USER_SETTINGS);
    },
    init: p,
    close() {
        let e = l.Z.onClose;
        o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }), null != e && e();
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        o.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_SET_SECTION',
            section: e,
            subsection: t,
            ...n
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
    saveAccountChanges(e, t) {
        o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_SUBMIT' });
        let { username: n, email: r, emailToken: s, password: l, avatar: _, newPassword: p, discriminator: m } = e,
            { close: I } = t;
        return (0, d.Z)(
            (e) => {
                let t = {
                        username: n,
                        email: r,
                        email_token: s,
                        password: l,
                        avatar: _,
                        new_password: p,
                        ...e,
                        discriminator: null != m && '' !== m ? m : void 0
                    },
                    o = a.K.get(E.JkL),
                    u = (0, f.xJ)();
                null != u && null != o && ((t.push_provider = u), (t.push_token = o));
                let c = a.K.get(E.scU);
                return (
                    null != f.mv && null != c && ((t.push_voip_provider = f.mv), (t.push_voip_token = c)),
                    i.tn.patch({
                        url: E.ANM.ME,
                        oldFormErrors: !0,
                        body: t
                    })
                );
            },
            {
                checkEnabled: !1,
                modalProps: { title: h.Z.Messages.TWO_FA_CHANGE_ACCOUNT },
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
                let t = e.body,
                    n = t.token;
                return (
                    u.default.track(E.rMx.USER_AVATAR_UPDATED, { animated: (0, c.xR)(t.avatar) }),
                    delete t.token,
                    o.Z.dispatch({
                        type: 'UPDATE_TOKEN',
                        token: n,
                        userId: t.id
                    }),
                    o.Z.dispatch({
                        type: 'CURRENT_USER_UPDATE',
                        user: t
                    }),
                    null != p &&
                        o.Z.dispatch({
                            type: 'USER_PASSWORD_UPDATE',
                            user: t,
                            newPassword: p
                        }),
                    null != l &&
                        null != p &&
                        o.Z.dispatch({
                            type: 'PASSWORD_UPDATED',
                            userId: t.id
                        }),
                    I ? this.close() : this.submitComplete(),
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
