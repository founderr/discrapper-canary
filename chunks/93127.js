t.d(r, {
    W: function () {
        return c;
    },
    _: function () {
        return d;
    }
});
var o = t(544891),
    n = t(570140),
    a = t(480294),
    i = t(814443),
    s = t(428598),
    l = t(981631);
function c() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return i.Z.needsRefresh()
        ? (n.Z.dispatch({ type: 'LOAD_USER_AFFINITIES' }),
          o.tn
              .get({
                  url: l.ANM.USER_AFFINITIES,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: r } = e;
                      n.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_SUCCESS',
                          affinities: r
                      });
                  },
                  () => {
                      n.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
function d() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return s.Z.shouldFetch() && a.Z.hasConsented(l.pjP.PERSONALIZATION)
        ? (n.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2' }),
          o.tn
              .get({
                  url: l.ANM.USER_AFFINITIES_V2,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: r } = e;
                      n.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_V2_SUCCESS',
                          affineUsers: r.user_affinities.map((e) => {
                              var r, t, o, n, a, i, s, l;
                              return {
                                  otherUserId: e.other_user_id,
                                  userSegment: e.user_segment,
                                  otherUserSegment: e.other_user_segment,
                                  isFriend: e.is_friend,
                                  dmProbability: null !== (r = e.dm_probability) && void 0 !== r ? r : 0,
                                  dmRank: null !== (t = e.dm_rank) && void 0 !== t ? t : 0,
                                  vcProbability: null !== (o = e.vc_probability) && void 0 !== o ? o : 0,
                                  vcRank: null !== (n = e.vc_rank) && void 0 !== n ? n : 0,
                                  serverMessageProbability: null !== (a = e.server_message_probability) && void 0 !== a ? a : 0,
                                  serverMessageRank: null !== (i = e.server_message_rank) && void 0 !== i ? i : 0,
                                  communicationProbability: null !== (s = e.communication_probability) && void 0 !== s ? s : 0,
                                  communicationRank: null !== (l = e.communication_rank) && void 0 !== l ? l : 0
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
