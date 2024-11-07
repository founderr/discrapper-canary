i.d(t, {
    W: function () {
        return c;
    },
    _: function () {
        return u;
    }
});
var n = i(544891),
    r = i(570140),
    s = i(480294),
    o = i(814443),
    a = i(428598),
    l = i(981631);
function c() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return o.Z.needsRefresh()
        ? (r.Z.dispatch({ type: 'LOAD_USER_AFFINITIES' }),
          n.tn
              .get({
                  url: l.ANM.USER_AFFINITIES,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0
              })
              .then(
                  (e) => {
                      let { body: t } = e;
                      r.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_SUCCESS',
                          affinities: t
                      });
                  },
                  () => {
                      r.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
function u() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return a.Z.shouldFetch() && s.Z.hasConsented(l.pjP.PERSONALIZATION)
        ? (r.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2' }),
          n.tn
              .get({
                  url: l.ANM.USER_AFFINITIES_V2,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0
              })
              .then(
                  (e) => {
                      let { body: t } = e;
                      r.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_V2_SUCCESS',
                          affineUsers: t.user_affinities.map((e) => {
                              var t, i, n, r, s, o, a, l;
                              return {
                                  otherUserId: e.other_user_id,
                                  userSegment: e.user_segment,
                                  otherUserSegment: e.other_user_segment,
                                  isFriend: e.is_friend,
                                  dmProbability: null !== (t = e.dm_probability) && void 0 !== t ? t : 0,
                                  dmRank: null !== (i = e.dm_rank) && void 0 !== i ? i : 0,
                                  vcProbability: null !== (n = e.vc_probability) && void 0 !== n ? n : 0,
                                  vcRank: null !== (r = e.vc_rank) && void 0 !== r ? r : 0,
                                  serverMessageProbability: null !== (s = e.server_message_probability) && void 0 !== s ? s : 0,
                                  serverMessageRank: null !== (o = e.server_message_rank) && void 0 !== o ? o : 0,
                                  communicationProbability: null !== (a = e.communication_probability) && void 0 !== a ? a : 0,
                                  communicationRank: null !== (l = e.communication_rank) && void 0 !== l ? l : 0
                              };
                          })
                      });
                  },
                  () => {
                      r.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
