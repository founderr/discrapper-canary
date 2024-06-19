var n = t(544891),
  i = t(570140),
  a = t(881052),
  l = t(981631);
let r = {
  [l.gkr.HOUSE_1]: 1,
  [l.gkr.HOUSE_2]: 2,
  [l.gkr.HOUSE_3]: 3
};
s.Z = {
  joinHypeSquadOnline: e => n.tn.post({
    url: l.ANM.HYPESQUAD_ONLINE,
    body: {
      house_id: r[e.houseID]
    },
    oldFormErrors: !0
  }).then(() => i.Z.dispatch({
    type: "HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS",
    houseID: e.houseID
  })).catch(e => {
    throw new a.yZ(e)
  }),
  leaveHypeSquadOnline: () => n.tn.del({
    url: l.ANM.HYPESQUAD_ONLINE,
    oldFormErrors: !0
  }).then(() => i.Z.dispatch({
    type: "HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS"
  })).catch(e => {
    throw new a.yZ(e)
  })
}