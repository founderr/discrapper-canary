n(47120);
var i = n(544891),
    r = n(570140),
    l = n(981631);
let a = ''.concat(l.dGm, '/api/v2/scheduled-maintenances'),
    o = ''.concat(l.dGm, '/api/v2/incidents/unresolved.json');
t.Z = {
    checkIncidents() {
        Promise.all([
            i.tn.get({
                url: ''.concat(a, '/active.json'),
                rejectWithError: !1
            }),
            i.tn.get(o)
        ]).then((e) => {
            let [t, n] = e,
                [i] = t.body.scheduled_maintenances,
                [l] = n.body.incidents;
            r.Z.dispatch({
                type: 'STATUS_PAGE_INCIDENT',
                incident: l || i
            });
        });
    },
    checkScheduledMaintenances() {
        i.tn
            .get({
                url: ''.concat(a, '/upcoming.json'),
                rejectWithError: !1
            })
            .then((e) => {
                let [t] = e.body.scheduled_maintenances;
                r.Z.dispatch({
                    type: 'STATUS_PAGE_SCHEDULED_MAINTENANCE',
                    maintenance: t
                });
            });
    },
    ackScheduledMaintenance() {
        r.Z.dispatch({ type: 'STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK' });
    }
};
