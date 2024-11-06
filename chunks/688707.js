n(47120);
var i = n(243814);
n(920456);
var r = n(996106),
    l = n(452426),
    a = n(186901),
    s = n(981631);
t.Z = {
    [s.Etm.SET_USER_ACHIEVEMENT]: {
        scope: {
            [a.Gp.ANY]: [i.x.RPC, a.lH]
        },
        validation: (e) =>
            (0, l.Z)(e)
                .required()
                .keys({
                    achievement_id: e.string().min(2).max(128),
                    percent_complete: e.number().min(0).max(100).required()
                }),
        handler(e) {
            let {
                socket: t,
                args: { achievement_id: n, percent_complete: i }
            } = e;
            if (null == t.application.id) throw new r.Z({ errorCode: s.lTL.INVALID_COMMAND }, 'No application.');
            return null;
        }
    },
    [s.Etm.GET_USER_ACHIEVEMENTS]: {
        scope: {
            [a.Gp.ANY]: [i.x.RPC, a.lH]
        },
        handler(e) {
            let { socket: t } = e;
            if (null == t.application.id) throw new r.Z({ errorCode: s.lTL.INVALID_COMMAND }, 'No application.');
            return Promise.resolve([]);
        }
    }
};
