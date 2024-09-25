var r = n(47120);
var i = n(544891),
    a = n(570140),
    o = n(981631);
let s = ''.concat(o.dGm, '/api/v2/scheduled-maintenances'),
    l = ''.concat(o.dGm, '/api/v2/incidents/unresolved.json');
t.Z = {
    checkIncidents() {
        Promise.all([i.tn.get(''.concat(s, '/active.json')), i.tn.get(l)]).then((e) => {
            let [t, n] = e,
                [r] = t.body.scheduled_maintenances,
                [i] = n.body.incidents;
            a.Z.dispatch({
                type: 'STATUS_PAGE_INCIDENT',
                incident: i || r
            });
        });
    },
    checkScheduledMaintenances() {
        i.tn.get(''.concat(s, '/upcoming.json')).then((e) => {
            let [t] = e.body.scheduled_maintenances;
            a.Z.dispatch({
                type: 'STATUS_PAGE_SCHEDULED_MAINTENANCE',
                maintenance: t
            });
        });
    },
    ackScheduledMaintenance() {
        a.Z.dispatch({ type: 'STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK' });
    }
};
