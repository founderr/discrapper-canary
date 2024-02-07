"use strict";
n.r(e), n.d(e, {
  usePrivateChannelIntegrationState: function() {
    return d
  }
}), n("222007");
var i = n("884691"),
  u = n("446674"),
  a = n("201155"),
  r = n("21121"),
  l = n("970755"),
  o = n("140596");

function d(t) {
  let {
    channelId: e
  } = t;
  (0, r.useInMainTabsExperiment)();
  let n = (0, a.useShowApplicationInGDM)(e),
    {
      installedIntegrations: d,
      applicationsShelf: s,
      integrationsFetchState: E,
      applicationsShelfFetchState: c
    } = (0, u.useStateFromStoresObject)([o.default], () => ({
      installedIntegrations: o.default.getIntegrations(e),
      applicationsShelf: o.default.getApplicationsShelf(),
      integrationsFetchState: o.default.getIntegrationsFetchState(e),
      applicationsShelfFetchState: o.default.getApplicationsShelfFetchState()
    }));
  i.useEffect(() => {
    n && ((E === o.FetchState.NOT_FETCHED || E === o.FetchState.FETCH_FAILED) && (0, l.fetchPrivateChannelIntegrations)(e), (c === o.FetchState.NOT_FETCHED || c === o.FetchState.FETCH_FAILED) && (0, l.fetchApplicationsShelf)())
  }, [n, e, E, c]);
  let _ = new Set(d.map(t => t.application.id)),
    T = s.filter(t => !_.has(t.id));
  return {
    installedIntegrations: d,
    availableApplications: T,
    applicationsShelf: s,
    fetched: E !== o.FetchState.NOT_FETCHED && E !== o.FetchState.FETCHING && c !== o.FetchState.NOT_FETCHED && c !== o.FetchState.FETCHING,
    appsInGDMEnabled: n
  }
}