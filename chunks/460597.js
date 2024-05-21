"use strict";
n.r(t), n.d(t, {
  questTaskConfigFromServer: function() {
    return a
  }
}), n("47120");
var i = n("742635");
let r = e => {
    let t = {};
    for (let n of Object.keys(e)) {
      let i = e[n];
      null != i && (t[n] = {
        eventName: i.event_name,
        target: i.target,
        externalIds: i.external_ids
      })
    }
    return t
  },
  s = e => {
    let t = {};
    for (let n of Object.keys(e)) {
      let i = e[n];
      null != i && (t[n] = {
        eventName: i.event_name,
        title: i.title,
        target: i.target,
        description: i.description
      })
    }
    return t
  },
  a = e => {
    switch (e.type) {
      case i.QuestTaskConfigTypes.FIRST_PARTY:
        return {
          type: i.QuestTaskConfigTypes.FIRST_PARTY, tasks: r(e.tasks), joinOperator: e.join_operator
        };
      case i.QuestTaskConfigTypes.THIRD_PARTY:
        return {
          type: i.QuestTaskConfigTypes.THIRD_PARTY, tasks: s(e.tasks), enrollmentUrl: e.enrollment_url, developerApplicationId: e.developer_application_id, joinOperator: e.join_operator
        }
    }
  }