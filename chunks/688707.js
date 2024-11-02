n(47120);
var i = n(243814),
    r = n(920456),
    l = n(996106),
    a = n(452426),
    s = n(186901),
    o = n(981631);
t.Z = {
    [o.Etm.SET_USER_ACHIEVEMENT]: {
        scope: {
            [s.Gp.ANY]: [i.x.RPC, s.lH]
        },
        validation: (e) =>
            (0, a.Z)(e)
                .required()
                .keys({
                    achievement_id: e.string().min(2).max(128),
                    percent_complete: e.number().min(0).max(100).required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { achievement_id: n, percent_complete: i }
                } = e,
                a = t.application.id;
            if (null == a) throw new l.Z({ errorCode: o.lTL.INVALID_COMMAND }, 'No application.');
            return r.Z.setUserAchievement(a, n, i)
                .catch((e) => {
                    let { status: t, body: n } = e;
                    switch (t) {
                        case 429:
                            throw new l.Z({ errorCode: o.lTL.RATE_LIMITED }, 'You are being rate limited.');
                        case 403:
                            if (null != n && n.code === o.evJ.USER_NOT_AUTHORIZED_FOR_APPLICATION) throw new l.Z({ errorCode: o.lTL.UNAUTHORIZED_FOR_ACHIEVEMENT }, 'Not authorized to update this achievement.');
                            throw new l.Z({ errorCode: o.lTL.UNKNOWN_ERROR }, 'Unknown error from API. status='.concat(t, '.'));
                        default:
                            throw new l.Z({ errorCode: o.lTL.UNKNOWN_ERROR }, 'Unknown error from API. status='.concat(t, '.'));
                    }
                })
                .then(() => null);
        }
    },
    [o.Etm.GET_USER_ACHIEVEMENTS]: {
        scope: {
            [s.Gp.ANY]: [i.x.RPC, s.lH]
        },
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new l.Z({ errorCode: o.lTL.INVALID_COMMAND }, 'No application.');
            return r.Z.fetchForApplication(n).then((e) => e || []);
        }
    }
};
