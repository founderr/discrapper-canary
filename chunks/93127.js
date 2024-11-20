n.d(t, {
    W: function () {
        return c;
    },
    _: function () {
        return d;
    }
});
var r = n(544891),
    i = n(570140),
    o = n(480294),
    a = n(814443),
    l = n(428598),
    s = n(981631);
function c() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return a.Z.needsRefresh()
        ? (i.Z.dispatch({ type: 'LOAD_USER_AFFINITIES' }),
          r.tn
              .get({
                  url: s.ANM.USER_AFFINITIES,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: t } = e;
                      i.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_SUCCESS',
                          affinities: t
                      });
                  },
                  () => {
                      i.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
function d() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return l.Z.shouldFetch() && o.Z.hasConsented(s.pjP.PERSONALIZATION)
        ? (i.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2' }),
          r.tn
              .get({
                  url: s.ANM.USER_AFFINITIES_V2,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: t } = e;
                      i.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_V2_SUCCESS',
                          affineUsers: t.user_affinities.map((e) => {
                              var t, n, r, i, o, a, l, s;
                              return {
                                  otherUserId: e.other_user_id,
                                  userSegment: e.user_segment,
                                  otherUserSegment: e.other_user_segment,
                                  isFriend: e.is_friend,
                                  dmProbability: null !== (t = e.dm_probability) && void 0 !== t ? t : 0,
                                  dmRank: null !== (n = e.dm_rank) && void 0 !== n ? n : 0,
                                  vcProbability: null !== (r = e.vc_probability) && void 0 !== r ? r : 0,
                                  vcRank: null !== (i = e.vc_rank) && void 0 !== i ? i : 0,
                                  serverMessageProbability: null !== (o = e.server_message_probability) && void 0 !== o ? o : 0,
                                  serverMessageRank: null !== (a = e.server_message_rank) && void 0 !== a ? a : 0,
                                  communicationProbability: null !== (l = e.communication_probability) && void 0 !== l ? l : 0,
                                  communicationRank: null !== (s = e.communication_rank) && void 0 !== s ? s : 0
                              };
                          })
                      });
                  },
                  () => {
                      i.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
