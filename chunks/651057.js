"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var u = n("872717"),
  i = n("913144"),
  a = n("568734"),
  l = n("299285"),
  r = n("49111"),
  d = {
    async createApplication(e) {
      let {
        name: t,
        guildId: n,
        type: a,
        teamId: l
      } = e, d = await u.default.post({
        url: r.Endpoints.APPLICATIONS,
        body: {
          name: t,
          type: a,
          guild_id: n,
          team_id: l
        }
      }), o = d.body;
      return null != n && null != a && i.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: o
      }), o
    },
    async getApplicationsForGuild(e) {
      let {
        includeTeam: t,
        ...n
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = await u.default.get({
        url: r.Endpoints.GUILD_APPLICATIONS(e),
        query: {
          ...n,
          include_team: t
        }
      }), l = a.body;
      return i.default.dispatch({
        type: "APPLICATIONS_FETCH_SUCCESS",
        applications: l
      }), l
    },
    async transferApplication(e) {
      let {
        applicationId: t,
        teamId: n
      } = e, a = await u.default.post({
        url: r.Endpoints.APPLICATION_OWNER_TRANSFER(t),
        body: {
          team_id: n
        }
      }), l = a.body;
      return i.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: l
      }), l
    },
    async fetchApplications(e) {
      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
      if (!t && (n = e.filter(e => {
          var t, n;
          let u = l.default.getApplication(e),
            i = (0, a.hasFlag)(null !== (n = null == u ? void 0 : u.flags) && void 0 !== n ? n : 0, r.ApplicationFlags.EMBEDDED),
            d = i && (null == u ? void 0 : null === (t = u.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
          return !(null != u && !d) && !l.default.isFetchingApplication(e) && !l.default.didFetchingApplicationFail(e) && e.length > 0
        })), n.length > 0) {
        let e;
        i.default.dispatch({
          type: "APPLICATIONS_FETCH",
          applicationIds: n
        });
        try {
          e = await u.default.get({
            url: r.Endpoints.APPLICATIONS_PUBLIC,
            query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
            oldFormErrors: !0
          })
        } catch (e) {
          throw i.default.dispatch({
            type: "APPLICATIONS_FETCH_FAIL",
            applicationIds: n
          }), e
        }
        i.default.dispatch({
          type: "APPLICATIONS_FETCH_SUCCESS",
          applications: e.body
        })
      }
    },
    fetchApplication(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return i.default.dispatch({
        type: "APPLICATION_FETCH",
        applicationId: e
      }), u.default.get({
        url: r.Endpoints.APPLICATION_PUBLIC(e),
        query: {
          with_guild: t
        },
        oldFormErrors: !0
      }).then(e => (i.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: e.body
      }), e.body)).catch(t => (i.default.dispatch({
        type: "APPLICATION_FETCH_FAIL",
        applicationId: e
      }), Promise.reject(t)))
    }
  }