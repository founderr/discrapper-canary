var l = e(913527),
    a = e.n(l),
    s = e(749210);
n.Z = {
    async setCommunicationDisabledDuration(t, n, e, l, i) {
        let o = null != e ? a()().add(e, 's').toISOString() : null;
        await s.Z.setCommunicationDisabledUntil({
            guildId: t,
            userId: n,
            communicationDisabledUntilTimestamp: o,
            duration: e,
            reason: l,
            location: i
        });
    }
};
