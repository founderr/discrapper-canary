"use strict";
n.r(t), n.d(t, {
  goHome: function() {
    return u
  },
  goSearch: function() {
    return E
  },
  goToAppDirectory: function() {
    return l
  },
  goToApplication: function() {
    return d
  },
  goToApplicationSection: function() {
    return _
  },
  goToApplicationStoreSku: function() {
    return c
  },
  goToCategory: function() {
    return I
  },
  replaceAppDirectoryURLWith: function() {
    return T
  }
}), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var i = n("703656"),
  r = n("626135"),
  s = n("34674"),
  a = n("132871"),
  o = n("981631");
let l = e => {
    let {
      view: t = a.ApplicationDirectoryViews.HOME,
      guildId: n,
      applicationId: i,
      applicationSection: s,
      entrypoint: l
    } = e, c = {
      ...l,
      pathname: window.location.pathname
    };
    switch (r.default.track(o.AnalyticEvents.APP_DIRECTORY_OPENED, {
        source: null == c ? void 0 : c.name
      }), (0, a.resetApplicationDirectoryHistory)(), (0, a.setEntrypoint)(c), null != n && (0, a.setGuildId)(n), t === a.ApplicationDirectoryViews.APPLICATION && null == i && (t = a.ApplicationDirectoryViews.HOME), t) {
      case a.ApplicationDirectoryViews.HOME:
        u();
        break;
      case a.ApplicationDirectoryViews.SEARCH:
        E();
        break;
      case a.ApplicationDirectoryViews.APPLICATION:
        null != i && (null != s ? _({
          applicationId: i,
          section: s
        }) : d({
          applicationId: i
        }))
    }
  },
  u = () => {
    let e = {
      previousView: (0, a.getCurrentView)()
    };
    (0, i.transitionTo)(o.Routes.APPLICATION_DIRECTORY, {
      state: e
    })
  },
  d = e => {
    let {
      applicationId: t
    } = e, n = {
      previousView: (0, a.getCurrentView)()
    };
    (0, i.transitionTo)(o.Routes.APPLICATION_DIRECTORY_PROFILE(t), {
      state: n
    })
  },
  _ = e => {
    let {
      applicationId: t,
      section: n
    } = e, r = {
      previousView: (0, a.getCurrentView)()
    };
    (0, i.transitionTo)(o.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
      state: r
    })
  },
  c = e => {
    let {
      applicationId: t,
      skuId: n
    } = e, r = {
      previousView: (0, a.getCurrentView)()
    };
    (0, i.transitionTo)(o.Routes.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
      state: r
    })
  },
  E = function() {
    let {
      query: e,
      categoryId: t,
      page: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = new URLSearchParams, s = {
      previousView: (0, a.getCurrentView)()
    };
    null != e && r.set("q", e), null != t && r.set("category_id", t.toString()), null != n && r.set("page", n.toString()), (0, i.transitionTo)(o.Routes.APPLICATION_DIRECTORY_SEARCH, {
      search: r.toString(),
      state: s
    })
  },
  I = e => {
    let {
      categoryId: t
    } = e;
    E({
      categoryId: null != t ? t : s.ALL_CATEGORY_ID
    })
  },
  T = e => {
    let {
      location: {
        state: t
      }
    } = (0, i.getHistory)();
    (0, i.replaceWith)(e, t)
  }