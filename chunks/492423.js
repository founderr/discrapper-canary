var r = n(735250),
    i = n(512722),
    a = n.n(i),
    o = n(481060);
function s(e) {
    let { applicationId: t, gameProfileModalChecks: i, source: s, sourceUserId: l } = e;
    a()(i.shouldOpenGameProfile, 'Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?'),
        a()(i.applicationId === t, 'Passed an unexpected [applicationId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?'),
        (0, o.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('28128'), n.e('87881')]).then(n.bind(n, 644941));
            return (n) =>
                (0, r.jsx)(e, {
                    applicationId: t,
                    source: s,
                    sourceUserId: l,
                    ...n
                });
        });
}
t.Z = { openGameProfileModal: s };
