var i = n(570140),
    r = n(211644);
t.Z = {
    init() {
        i.Z.subscribe('CONNECTION_OPEN', () => {
            (0, r.mc)();
        }),
            i.Z.subscribe('LOGOUT', () => {
                (0, r.mc)();
            });
    }
};
