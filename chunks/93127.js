r.d(t, {
    W: function () {
        return l;
    },
    _: function () {
        return d;
    }
});
var n = r(544891),
    o = r(570140),
    i = r(480294),
    a = r(814443),
    s = r(428598),
    c = r(981631);
function l() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return a.Z.needsRefresh()
        ? (o.Z.dispatch({ type: 'LOAD_USER_AFFINITIES' }),
          n.tn
              .get({
                  url: c.ANM.USER_AFFINITIES,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: t } = e;
                      o.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_SUCCESS',
                          affinities: t
                      });
                  },
                  () => {
                      o.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
function d() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return s.Z.shouldFetch() && i.Z.hasConsented(c.pjP.PERSONALIZATION)
        ? (o.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2' }),
          n.tn
              .get({
                  url: c.ANM.USER_AFFINITIES_V2,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: t } = e;
                      o.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_V2_SUCCESS',
                          affineUsers: t.user_affinities.map((e) => {
                              var t, r, n, o, i, a, s, c;
                              return {
                                  otherUserId: e.other_user_id,
                                  userSegment: e.user_segment,
                                  otherUserSegment: e.other_user_segment,
                                  isFriend: e.is_friend,
                                  dmProbability: null !== (t = e.dm_probability) && void 0 !== t ? t : 0,
                                  dmRank: null !== (r = e.dm_rank) && void 0 !== r ? r : 0,
                                  vcProbability: null !== (n = e.vc_probability) && void 0 !== n ? n : 0,
                                  vcRank: null !== (o = e.vc_rank) && void 0 !== o ? o : 0,
                                  serverMessageProbability: null !== (i = e.server_message_probability) && void 0 !== i ? i : 0,
                                  serverMessageRank: null !== (a = e.server_message_rank) && void 0 !== a ? a : 0,
                                  communicationProbability: null !== (s = e.communication_probability) && void 0 !== s ? s : 0,
                                  communicationRank: null !== (c = e.communication_rank) && void 0 !== c ? c : 0
                              };
                          })
                      });
                  },
                  () => {
                      o.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
