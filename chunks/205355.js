"use strict";
n.r(t), n("47120");
var s = n("544891"),
  l = n("570140"),
  a = n("981631");
let i = "".concat(a.STATUS_PAGE_ENDPOINT, "/api/v2/scheduled-maintenances"),
  r = "".concat(a.STATUS_PAGE_ENDPOINT, "/api/v2/incidents/unresolved.json");
t.default = {
  checkIncidents() {
    Promise.all([s.HTTP.get("".concat(i, "/active.json")), s.HTTP.get(r)]).then(e => {
      let [t, n] = e, [s] = t.body.scheduled_maintenances, [a] = n.body.incidents;
      l.default.dispatch({
        type: "STATUS_PAGE_INCIDENT",
        incident: a || s
      })
    })
  },
  checkScheduledMaintenances() {
    s.HTTP.get("".concat(i, "/upcoming.json")).then(e => {
      let [t] = e.body.scheduled_maintenances;
      l.default.dispatch({
        type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
        maintenance: t
      })
    })
  },
  ackScheduledMaintenance() {
    l.default.dispatch({
      type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
    })
  }
}