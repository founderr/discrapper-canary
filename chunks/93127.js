o.d(t, {
    W: function () {
        return l;
    },
    _: function () {
        return c;
    }
});
var r = o(544891),
    n = o(570140),
    a = o(480294),
    i = o(814443),
    s = o(428598),
    d = o(981631);
function l() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return i.Z.needsRefresh()
        ? (n.Z.dispatch({ type: 'LOAD_USER_AFFINITIES' }),
          r.tn
              .get({
                  url: d.ANM.USER_AFFINITIES,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: t } = e;
                      n.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_SUCCESS',
                          affinities: t
                      });
                  },
                  () => {
                      n.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
function c() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return s.Z.shouldFetch() && a.Z.hasConsented(d.pjP.PERSONALIZATION)
        ? (n.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2' }),
          r.tn
              .get({
                  url: d.ANM.USER_AFFINITIES_V2,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: t } = e;
                      n.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_V2_SUCCESS',
                          affineUsers: t.user_affinities.map((e) => {
                              var t, o, r, n, a, i, s, d;
                              return {
                                  otherUserId: e.other_user_id,
                                  userSegment: e.user_segment,
                                  otherUserSegment: e.other_user_segment,
                                  isFriend: e.is_friend,
                                  dmProbability: null !== (t = e.dm_probability) && void 0 !== t ? t : 0,
                                  dmRank: null !== (o = e.dm_rank) && void 0 !== o ? o : 0,
                                  vcProbability: null !== (r = e.vc_probability) && void 0 !== r ? r : 0,
                                  vcRank: null !== (n = e.vc_rank) && void 0 !== n ? n : 0,
                                  serverMessageProbability: null !== (a = e.server_message_probability) && void 0 !== a ? a : 0,
                                  serverMessageRank: null !== (i = e.server_message_rank) && void 0 !== i ? i : 0,
                                  communicationProbability: null !== (s = e.communication_probability) && void 0 !== s ? s : 0,
                                  communicationRank: null !== (d = e.communication_rank) && void 0 !== d ? d : 0
                              };
                          })
                      });
                  },
                  () => {
                      n.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
