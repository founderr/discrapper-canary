n.d(t, {
  a: function() {
return s;
  }
});
var i = n(544891),
  o = n(570140),
  a = n(706454),
  l = n(70956),
  c = n(844439),
  d = n(981631);
let r = 10 * l.Z.Millis.MINUTE;
async function s(e) {
  let {
channelId: t,
location: n,
withCommands: l
  } = e, s = Date.now(), m = c.ZP.getFetchState({
location: n,
channelId: t,
withCommands: l
  }), u = c.ZP.getLastFetchTimeMs({
location: n,
channelId: t,
withCommands: l
  });
  if (m !== c.M.FETCHING && (null == u || !(u + r > s))) {
o.Z.dispatch({
  type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
  location: n,
  channelId: t,
  withCommands: l
});
try {
  let e = await i.tn.get({
    url: d.ANM.APP_RECOMMENDATIONS,
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