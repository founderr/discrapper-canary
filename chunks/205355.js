n(47120);
var s = n(544891),
  i = n(570140),
  l = n(981631);
let a = "".concat(l.dGm, "/api/v2/scheduled-maintenances"),
  r = "".concat(l.dGm, "/api/v2/incidents/unresolved.json");
t.Z = {
  checkIncidents() {
    Promise.all([s.tn.get("".concat(a, "/active.json")), s.tn.get(r)]).then(e => {
      let [t, n] = e, [s] = t.body.scheduled_maintenances, [l] = n.body.incidents;
      i.Z.dispatch({
        type: "STATUS_PAGE_INCIDENT",
        incident: l || s
      })
    })
  },
  checkScheduledMaintenances() {
    s.tn.get("".concat(a, "/upcoming.json")).then(e => {
      let [t] = e.body.scheduled_maintenances;
      i.Z.dispatch({
        type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
        maintenance: t
      })
    })
  },
  ackScheduledMaintenance() {
    i.Z.dispatch({
      type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
    })
  }
}