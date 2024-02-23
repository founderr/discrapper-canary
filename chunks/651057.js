"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var i = n("872717"),
  l = n("913144"),
  r = n("568734"),
  s = n("299285"),
  a = n("49111"),
  u = {
    async createApplication(e) {
      let {
        name: t,
        guildId: n,
        type: r,
        teamId: s
      } = e, u = await i.default.post({
        url: a.Endpoints.APPLICATIONS,
        body: {
          name: t,
          type: r,
          guild_id: n,
          team_id: s
        }
      }), o = u.body;
      return null != n && null != r && l.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: o
      }), o
    },
    async getApplicationsForGuild(e) {
      let {
        includeTeam: t,
        ...n
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = await i.default.get({
        url: a.Endpoints.GUILD_APPLICATIONS(e),
        query: {
          ...n,
          include_team: t
        }
      }), s = r.body;
      return l.default.dispatch({
        type: "APPLICATIONS_FETCH_SUCCESS",
        applications: s
      }), s
    },
    async transferApplication(e) {
      let {
        applicationId: t,
        teamId: n
      } = e, r = await i.default.post({
        url: a.Endpoints.APPLICATION_OWNER_TRANSFER(t),
        body: {
          team_id: n
        }
      }), s = r.body;
      return l.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: s
      }), s
    },
    async fetchApplications(e) {
      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
      if (!t && (n = e.filter(e => {
          var t, n;
          let i = s.default.getApplication(e),
            l = (0, r.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, a.ApplicationFlags.EMBEDDED),
            u = l && (null == i ? void 0 : null === (t = i.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
          return !(null != i && !u) && !s.default.isFetchingApplication(e) && !s.default.didFetchingApplicationFail(e) && e.length > 0
        })), n.length > 0) {
        let e;
        l.default.dispatch({
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
          throw l.default.dispatch({
            type: "APPLICATIONS_FETCH_FAIL",
            applicationIds: n
          }), e
        }
        l.default.dispatch({
          type: "APPLICATIONS_FETCH_SUCCESS",
          applications: e.body
        })
      }
    },
    fetchApplication(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return l.default.dispatch({
        type: "APPLICATION_FETCH",
        applicationId: e
      }), i.default.get({
        url: a.Endpoints.APPLICATION_PUBLIC(e),
        query: {
          with_guild: t
        },
        oldFormErrors: !0
      }).then(e => (l.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: e.body
      }), e.body)).catch(t => (l.default.dispatch({
        type: "APPLICATION_FETCH_FAIL",
        applicationId: e
      }), Promise.reject(t)))
    }
  }