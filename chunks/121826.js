var i = n(230487),
    r = n(998502),
    a = n(914946),
    l = n(452426),
    s = n(981631);
t.Z = {
    [s.Etm.ENCOURAGE_HW_ACCELERATION]: {
        validation: (e) => (0, l.Z)(e),
        handler(e) {
            let { socket: t } = e;
            (0, a.bu)(t.transport);
            let n = t.application.id;
            if (null != n) return (0, i.Z)(n), { enabled: r.ZP.getEnableHardwareAcceleration() };
        }
    }
};
