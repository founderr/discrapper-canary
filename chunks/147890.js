"use strict";
n.r(t), n.d(t, {
  goHome: function() {
    return d
  },
  goSearch: function() {
    return I
  },
  goToAppDirectory: function() {
    return u
  },
  goToApplication: function() {
    return _
  },
  goToApplicationSection: function() {
    return c
  },
  goToApplicationStoreSku: function() {
    return E
  },
  goToCategory: function() {
    return T
  },
  replaceAppDirectoryURLWith: function() {
    return f
  }
}), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var i = n("703656"),
  r = n("626135"),
  s = n("34674"),
  a = n("132871"),
  o = n("272242"),
  l = n("981631");
let u = e => {
    let {
      view: t = a.ApplicationDirectoryViews.HOME,
      guildId: n,
      applicationId: i,
      applicationSection: s,
      entrypoint: u,
      skuId: T
    } = e, f = {
      ...u,
      pathname: window.location.pathname
    };
    switch (r.default.track(l.AnalyticEvents.APP_DIRECTORY_OPENED, {
        source: null == f ? void 0 : f.name
      }), (0, a.resetApplicationDirectoryHistory)(), (0, a.setEntrypoint)(f), null != n && (0, a.setGuildId)(n), t === a.ApplicationDirectoryViews.APPLICATION && null == i && (t = a.ApplicationDirectoryViews.HOME), t) {
      case a.ApplicationDirectoryViews.HOME:
        d();
        break;
      case a.ApplicationDirectoryViews.SEARCH:
        I();
        break;
      case a.ApplicationDirectoryViews.APPLICATION:
        if (null != i) {
          if (null != s) {
            if (s === o.ApplicationDirectoryProfileSections.STORE && null != T) {
              E({
                applicationId: i,
                skuId: T
              });
              break
            }
            c({
              applicationId: i,
              section: s
            });
            break
          }
          _({
            applicationId: i
          })
        }
    }
  },
  d = () => {
    let e = {
      previousView: (0, a.getCurrentView)()
    };
    (0, i.transitionTo)(l.Routes.APPLICATION_DIRECTORY, {
      state: e
    })
  },
  _ = e => {
    let {
      applicationId: t
    } = e, n = {
      previousView: (0, a.getCurrentView)()
    };
    (0, i.transitionTo)(l.Routes.APPLICATION_DIRECTORY_PROFILE(t), {
      state: n
    })
  },
  c = e => {
    let {
      applicationId: t,
      section: n
    } = e, r = {
      previousView: (0, a.getCurrentView)()
    };
    (0, i.transitionTo)(l.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
      state: r
    })
  },
  E = e => {
    let {
      applicationId: t,
      skuId: n
    } = e, r = {
      previousView: (0, a.getCurrentView)()
    };
    (0, i.transitionTo)(l.Routes.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
      state: r
    })
  },
  I = function() {
    let {
      query: e,
      categoryId: t,
      page: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = new URLSearchParams, s = {
      previousView: (0, a.getCurrentView)()
    };
    null != e && r.set("q", e), null != t && r.set("category_id", t.toString()), null != n && r.set("page", n.toString()), (0, i.transitionTo)(l.Routes.APPLICATION_DIRECTORY_SEARCH, {
      search: r.toString(),
      state: s
    })
  },
  T = e => {
    let {
      categoryId: t
    } = e;
    I({
      categoryId: null != t ? t : s.ALL_CATEGORY_ID
    })
  },
  f = e => {
    let {
      location: {
        state: t
      }
    } = (0, i.getHistory)();
    (0, i.replaceWith)(e, t)
  }