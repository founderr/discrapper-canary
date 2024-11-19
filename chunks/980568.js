var i = n(570140),
    o = n(626135),
    a = n(981631);
t.Z = {
    dismissForApplicationId(e) {
        i.Z.dispatch({
            type: 'ACTIVITY_INVITE_EDUCATION_DISMISS',
            key: e,
            value: !0
        }),
            o.default.track(a.rMx.CLOSE_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e,
                acknowledged: !0
            });
    }
};
