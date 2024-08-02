n.d(t, {
  a: function() {
return d;
  }
});
var i = n(544891),
  o = n(570140),
  a = n(706454),
  l = n(70956),
  s = n(844439),
  r = n(981631);
let u = 10 * l.Z.Millis.MINUTE;
async function d(e) {
  let {
channelId: t,
location: n,
withCommands: l
  } = e, d = Date.now(), c = s.ZP.getFetchState({
location: n,
channelId: t,
withCommands: l
  }), m = s.ZP.getLastFetchTimeMs({
location: n,
channelId: t,
withCommands: l
  });
  if (c !== s.M.FETCHING && (null == m || !(m + u > d))) {
o.Z.dispatch({
  type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
  location: n,
  channelId: t,
  withCommands: l
});
try {
  let e = await i.tn.get({
    url: r.ANM.APP_RECOMMENDATIONS,
    query: {
      locale: a.default.locale,
      channel_id: t,
      location: n,
      with_commands: l
    }
  });
  o.Z.dispatch({
    type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
    location: n,
    channelId: t,
    recommendations: e.body,
    withCommands: l
  });
} catch (e) {
  o.Z.dispatch({
    type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
    location: n,
    channelId: t,
    withCommands: l
  });
}
  }
}