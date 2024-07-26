t.d(n, {
  a: function() {
return c;
  }
});
var i = t(544891),
  o = t(570140),
  a = t(706454),
  l = t(70956),
  s = t(844439),
  r = t(981631);
let u = 10 * l.Z.Millis.MINUTE;
async function c(e) {
  let {
channelId: n,
location: t,
withCommands: l
  } = e, c = Date.now(), d = s.ZP.getFetchState({
location: t,
channelId: n,
withCommands: l
  }), m = s.ZP.getLastFetchTimeMs({
location: t,
channelId: n,
withCommands: l
  });
  if (d !== s.M.FETCHING && (null == m || !(m + u > c))) {
o.Z.dispatch({
  type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
  location: t,
  channelId: n,
  withCommands: l
});
try {
  let e = await i.tn.get({
    url: r.ANM.APP_RECOMMENDATIONS,
    query: {
      locale: a.default.locale,
      channel_id: n,
      location: t,
      with_commands: l
    }
  });
  o.Z.dispatch({
    type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
    location: t,
    channelId: n,
    recommendations: e.body,
    withCommands: l
  });
} catch (e) {
  o.Z.dispatch({
    type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
    location: t,
    channelId: n,
    withCommands: l
  });
}
  }
}