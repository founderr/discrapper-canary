"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var i = n("872717"),
  r = n("913144"),
  u = n("568734"),
  a = n("299285"),
  s = n("49111"),
  l = {
    async createApplication(e) {
      let {
        name: t,
        guildId: n,
        type: u,
        teamId: a
      } = e, l = await i.default.post({
        url: s.Endpoints.APPLICATIONS,
        body: {
          name: t,
          type: u,
          guild_id: n,
          team_id: a
        }
      }), o = l.body;
      return null != n && null != u && r.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: o
      }), o
    },
    async getApplicationsForGuild(e) {
      let {
        includeTeam: t,
        ...n
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u = await i.default.get({
        url: s.Endpoints.GUILD_APPLICATIONS(e),
        query: {
          ...n,
          include_team: t
        }
      }), a = u.body;
      return r.default.dispatch({
        type: "APPLICATIONS_FETCH_SUCCESS",
        applications: a
      }), a
    },
    async transferApplication(e) {
      let {
        applicationId: t,
        teamId: n
      } = e, u = await i.default.post({
        url: s.Endpoints.APPLICATION_OWNER_TRANSFER(t),
        body: {
          team_id: n
        }
      }), a = u.body;
      return r.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: a
      }), a
    },
    async fetchApplications(e) {
      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
      if (!t && (n = e.filter(e => {
          var t, n;
          let i = a.default.getApplication(e),
            r = (0, u.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, s.ApplicationFlags.EMBEDDED),
            l = r && (null == i ? void 0 : null === (t = i.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
          return !(null != i && !l) && !a.default.isFetchingApplication(e) && !a.default.didFetchingApplicationFail(e) && e.length > 0
        })), n.length > 0) {
        let e;
        r.default.dispatch({
          type: "APPLICATIONS_FETCH",
          applicationIds: n
        });
        try {
          e = await i.default.get({
            url: s.Endpoints.APPLICATIONS_PUBLIC,
            query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
            oldFormErrors: !0
          })
        } catch (e) {
          throw r.default.dispatch({
            type: "APPLICATIONS_FETCH_FAIL",
            applicationIds: n
          }), e
        }
        r.default.dispatch({
          type: "APPLICATIONS_FETCH_SUCCESS",
          applications: e.body
        })
      }
    },
    fetchApplication(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return r.default.dispatch({
        type: "APPLICATION_FETCH",
        applicationId: e
      }), i.default.get({
        url: s.Endpoints.APPLICATION_PUBLIC(e),
        query: {
          with_guild: t
        },
        oldFormErrors: !0
      }).then(e => (r.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: e.body
      }), e.body)).catch(t => (r.default.dispatch({
        type: "APPLICATION_FETCH_FAIL",
        applicationId: e
      }), Promise.reject(t)))
    }
  }