var i = r(570140),
    a = r(626135),
    s = r(981631);
n.Z = {
    dismissForApplicationId(e) {
        i.Z.dispatch({
            type: 'ACTIVITY_INVITE_EDUCATION_DISMISS',
            key: e,
            value: !0
        }),
            a.default.track(s.rMx.CLOSE_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e,
                acknowledged: !0
            });
    }
};
