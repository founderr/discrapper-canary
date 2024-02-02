"use strict";
n.r(t), n.d(t, {
  updateLinkForUserId: function() {
    return o
  },
  removeLinkForUserId: function() {
    return u
  },
  getLinkCodeForCurrentUser: function() {
    return d
  },
  default: function() {
    return c
  }
});
var a = n("872717"),
  s = n("913144"),
  l = n("599110"),
  i = n("922832"),
  r = n("49111");
async function o(e, t) {
  await a.default.patch({
    url: r.Endpoints.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: e,
      link_status: t
    }
  }).then(e => {
    let {
      body: t
    } = e;
    return s.default.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
      linkedUsers: t
    }), t
  })
}
async function u(e) {
  await a.default.delete({
    url: r.Endpoints.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: e
    }
  }).then(t => {
    let {
      body: n
    } = t;
    return s.default.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
      linkedUsers: n,
      deletedUserId: e
    }), n
  })
}
async function d() {
  await a.default.get({
    url: r.Endpoints.FAMILY_CENTER_LINK_CODE
  }).then(e => {
    let {
      body: t
    } = e, n = t.link_code;
    return s.default.dispatch({
      type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
      linkCode: n
    }), n
  })
}
var c = {
  async initialPageLoad() {
    var e, t, n, l;
    s.default.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let {
      body: i
    } = await a.default.get({
      url: r.Endpoints.FAMILY_CENTER_TEEN_ACTIVITY_ME
    }), {
      teen_audit_log: o,
      linked_users: u,
      users: d
    } = i, c = {
      teenId: null == o ? void 0 : o.teen_user_id,
      rangeStartId: null == o ? void 0 : o.range_start_id,
      totals: null !== (e = null == o ? void 0 : o.totals) && void 0 !== e ? e : {},
      actions: null !== (t = null == o ? void 0 : o.actions) && void 0 !== t ? t : [],
      users: null !== (n = null == o ? void 0 : o.users) && void 0 !== n ? n : [],
      guilds: null !== (l = null == o ? void 0 : o.guilds) && void 0 !== l ? l : []
    };
    return s.default.dispatch({
      type: "FAMILY_CENTER_INITIAL_LOAD",
      familyCenterTeenActivity: c,
      linkedUsers: u,
      users: d
    }), c
  },
  async fetchLinkedUsers() {
    let {
      body: e
    } = await a.default.get({
      url: r.Endpoints.FAMILY_CENTER_LINKED_USERS
    }), t = {
      linkedUsers: e.linked_users,
      users: e.users
    };
    return s.default.dispatch({
      type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS",
      ...t
    }), t
  },
  async requestLink(e, t) {
    let {
      body: n
    } = await a.default.post({
      url: r.Endpoints.FAMILY_CENTER_LINKED_USERS,
      body: {
        recipient_id: e,
        code: t
      }
    }), l = {
      linkedUsers: n.linked_users,
      users: n.users
    };
    return s.default.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS",
      ...l
    }), l
  },
  async fetchTeenActivity(e) {
    s.default.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let t = r.Endpoints.FAMILY_CENTER_TEEN_ACTIVITY(e),
      {
        body: n
      } = await a.default.get({
        url: t
      }),
      l = n.teen_audit_log,
      i = {
        teenId: l.teen_user_id,
        rangeStartId: l.range_start_id,
        totals: l.totals,
        actions: l.actions,
        users: l.users,
        guilds: l.guilds
      };
    return s.default.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
      familyCenterTeenActivity: i
    }), i
  },
  async fetchMoreTeenActivity(e, t, n, o) {
    let {
      body: u
    } = await a.default.get({
      url: r.Endpoints.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, o)
    }), {
      teen_audit_log: d
    } = u, c = {
      teenId: d.teen_user_id,
      rangeStartId: d.range_start_id,
      actions: d.actions,
      users: d.users,
      guilds: d.guilds
    };
    return l.default.track(r.AnalyticEvents.FAMILY_CENTER_ACTION, {
      action: i.FamilyCenterAction.LoadMore,
      selected_teen_id: e,
      action_display_type: t
    }), s.default.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
      familyCenterTeenActivity: c
    }), d
  },
  selectTab(e) {
    s.default.dispatch({
      type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
      tab: e
    })
  }
}