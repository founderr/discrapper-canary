var i = n(45792),
    r = n(914946),
    a = n(238679),
    l = n(981631);
t.Z = {
    [l.Etm.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: (0, i.S)(l.Etm.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
        scope: a.KW,
        handler(e) {
            let { socket: t } = e;
            return (0, r.bu)(t.transport), (0, a.dO)();
        }
    })
};
