var i = n(544891),
    r = n(314897),
    l = n(981631);
t.Z = {
    setUserAchievement(e, t, n) {
        let a = r.default.getId();
        return i.tn.put({
            url: l.ANM.USER_ACHIEVEMENTS_FOR_USER(a, e, t),
            body: { percent_complete: n },
            oldFormErrors: !0
        });
    },
    fetchForApplication: (e) =>
        i.tn
            .get({
                url: l.ANM.USER_ACHIEVEMENTS(e),
                retries: 1,
                oldFormErrors: !0
            })
            .then((e) => {
                let { body: t } = e;
                return t;
            })
};
