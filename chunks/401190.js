"use strict";
s.r(t);
var a = s("544891"),
  n = s("570140"),
  i = s("881052"),
  l = s("981631");
let r = {
  [l.HypeSquadHouses.HOUSE_1]: 1,
  [l.HypeSquadHouses.HOUSE_2]: 2,
  [l.HypeSquadHouses.HOUSE_3]: 3
};
t.default = {
  joinHypeSquadOnline: e => a.HTTP.post({
    url: l.Endpoints.HYPESQUAD_ONLINE,
    body: {
      house_id: r[e.houseID]
    },
    oldFormErrors: !0
  }).then(() => n.default.dispatch({
    type: "HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS",
    houseID: e.houseID
  })).catch(e => {
    throw new i.V6OrEarlierAPIError(e)
  }),
  leaveHypeSquadOnline: () => a.HTTP.del({
    url: l.Endpoints.HYPESQUAD_ONLINE,
    oldFormErrors: !0
  }).then(() => n.default.dispatch({
    type: "HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS"
  })).catch(e => {
    throw new i.V6OrEarlierAPIError(e)
  })
}