var i = n(230487),
    r = n(998502),
    l = n(914946),
    a = n(452426),
    o = n(981631);
t.Z = {
    [o.Etm.ENCOURAGE_HW_ACCELERATION]: {
        validation: (e) => (0, a.Z)(e),
        handler(e) {
            let { socket: t } = e;
            (0, l.bu)(t.transport);
            let n = t.application.id;
            if (null != n) return (0, i.Z)(n), { enabled: r.ZP.getEnableHardwareAcceleration() };
        }
    }
};
