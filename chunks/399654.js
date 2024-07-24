n.d(t, {
  a: function() {
return c;
  }
});
var i = n(544891),
  o = n(570140),
  l = n(706454),
  a = n(70956),
  s = n(844439),
  r = n(981631);
let u = 10 * a.Z.Millis.MINUTE;
async function c(e) {
  let {
channelId: t,
location: n,
withCommands: a
  } = e, c = Date.now(), d = s.ZP.getFetchState({
location: n,
channelId: t,
withCommands: a
  }), m = s.ZP.getLastFetchTimeMs({
location: n,
channelId: t,
withCommands: a
  });
  if (d !== s.M.FETCHING && (null == m || !(m + u > c))) {
o.Z.dispatch({
  type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
  location: n,
  channelId: t,
  withCommands: a
});
try {
  let e = await i.tn.get({
    url: r.ANM.APP_RECOMMENDATIONS,
    query: {
      locale: l.default.locale,
      channel_id: t,
      location: n,
      with_commands: a
    }
  });
  o.Z.dispatch({
    type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
    location: n,
    channelId: t,
    recommendations: e.body,
    withCommands: a
  });
} catch (e) {
  o.Z.dispatch({
    type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
    location: n,
    channelId: t,
    withCommands: a
  });
}
  }
}