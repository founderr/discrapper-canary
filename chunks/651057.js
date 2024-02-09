"use strict";
n.r(e), n.d(e, {
  default: function() {
    return o
  }
}), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var i = n("872717"),
  r = n("913144"),
  l = n("568734"),
  s = n("299285"),
  a = n("49111"),
  o = {
    async createApplication(t) {
      let {
        name: e,
        guildId: n,
        type: l,
        teamId: s
      } = t, o = await i.default.post({
        url: a.Endpoints.APPLICATIONS,
        body: {
          name: e,
          type: l,
          guild_id: n,
          team_id: s
        }
      }), u = o.body;
      return null != n && null != l && r.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: u
      }), u
    },
    async getApplicationsForGuild(t) {
      let {
        includeTeam: e,
        ...n
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = await i.default.get({
        url: a.Endpoints.GUILD_APPLICATIONS(t),
        query: {
          ...n,
          include_team: e
        }
      }), s = l.body;
      return r.default.dispatch({
        type: "APPLICATIONS_FETCH_SUCCESS",
        applications: s
      }), s
    },
    async transferApplication(t) {
      let {
        applicationId: e,
        teamId: n
      } = t, l = await i.default.post({
        url: a.Endpoints.APPLICATION_OWNER_TRANSFER(e),
        body: {
          team_id: n
        }
      }), s = l.body;
      return r.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: s
      }), s
    },
    async fetchApplications(t) {
      let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = t;
      if (!e && (n = t.filter(t => {
          var e, n;
          let i = s.default.getApplication(t),
            r = (0, l.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, a.ApplicationFlags.EMBEDDED),
            o = r && (null == i ? void 0 : null === (e = i.embeddedActivityConfig) || void 0 === e ? void 0 : e.supported_platforms) == null;
          return !(null != i && !o) && !s.default.isFetchingApplication(t) && !s.default.didFetchingApplicationFail(t) && t.length > 0
        })), n.length > 0) {
        let t;
        r.default.dispatch({
          type: "APPLICATIONS_FETCH",
          applicationIds: n
        });
        try {
          t = await i.default.get({
            url: a.Endpoints.APPLICATIONS_PUBLIC,
            query: new URLSearchParams(n.map(t => ["application_ids", t])).toString(),
            oldFormErrors: !0
          })
        } catch (t) {
          throw r.default.dispatch({
            type: "APPLICATIONS_FETCH_FAIL",
            applicationIds: n
          }), t
        }
        r.default.dispatch({
          type: "APPLICATIONS_FETCH_SUCCESS",
          applications: t.body
        })
      }
    },
    fetchApplication(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return r.default.dispatch({
        type: "APPLICATION_FETCH",
        applicationId: t
      }), i.default.get({
        url: a.Endpoints.APPLICATION_PUBLIC(t),
        query: {
          with_guild: e
        },
        oldFormErrors: !0
      }).then(t => (r.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: t.body
      }), t.body)).catch(e => (r.default.dispatch({
        type: "APPLICATION_FETCH_FAIL",
        applicationId: t
      }), Promise.reject(e)))
    }
  }