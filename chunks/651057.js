"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var i = n("872717"),
  r = n("913144"),
  l = n("568734"),
  u = n("299285"),
  a = n("49111"),
  s = {
    async createApplication(e) {
      let {
        name: t,
        guildId: n,
        type: l,
        teamId: u
      } = e, s = await i.default.post({
        url: a.Endpoints.APPLICATIONS,
        body: {
          name: t,
          type: l,
          guild_id: n,
          team_id: u
        }
      }), o = s.body;
      return null != n && null != l && r.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: o
      }), o
    },
    async getApplicationsForGuild(e) {
      let {
        includeTeam: t,
        ...n
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = await i.default.get({
        url: a.Endpoints.GUILD_APPLICATIONS(e),
        query: {
          ...n,
          include_team: t
        }
      }), u = l.body;
      return r.default.dispatch({
        type: "APPLICATIONS_FETCH_SUCCESS",
        applications: u
      }), u
    },
    async transferApplication(e) {
      let {
        applicationId: t,
        teamId: n
      } = e, l = await i.default.post({
        url: a.Endpoints.APPLICATION_OWNER_TRANSFER(t),
        body: {
          team_id: n
        }
      }), u = l.body;
      return r.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: u
      }), u
    },
    async fetchApplications(e) {
      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
      if (!t && (n = e.filter(e => {
          var t, n;
          let i = u.default.getApplication(e),
            r = (0, l.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, a.ApplicationFlags.EMBEDDED),
            s = r && (null == i ? void 0 : null === (t = i.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
          return !(null != i && !s) && !u.default.isFetchingApplication(e) && !u.default.didFetchingApplicationFail(e) && e.length > 0
        })), n.length > 0) {
        let e;
        r.default.dispatch({
          type: "APPLICATIONS_FETCH",
          applicationIds: n
        });
        try {
          e = await i.default.get({
            url: a.Endpoints.APPLICATIONS_PUBLIC,
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
        url: a.Endpoints.APPLICATION_PUBLIC(e),
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