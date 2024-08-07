t.d(n, {
  Z: function() {
return s;
  }
});
var i = t(990547),
  a = t(442837),
  l = t(213609),
  r = t(541099),
  o = t(312871);

function s(e) {
  let {
applicationId: n,
commandId: t,
searchResultsPosition: s,
query: c
  } = e, u = (0, a.e7)([r.Z], () => r.Z.entrypoint());
  return {
trackSearchResultsItemImpressionRef: (0, o.Z)({
  onVisible: () => {
    (0, l.h)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
      properties: {
        application_id: n,
        command_id: t,
        search_results_position: s,
        query: c,
        source: u
      }
    });
  },
  threshold: 1
})
  };
}