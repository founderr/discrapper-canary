n.d(e, {
  O: function() {
    return _
  },
  p: function() {
    return h
  }
});
var r = n(876122),
  i = n(793884),
  a = n(862315),
  s = n(529866),
  o = n(829919),
  l = n(869139),
  u = n(336344),
  c = n(841866),
  d = n(643487);
let h = "Breadcrumbs";
class _ {
  static __initStatic() {
    this.id = h
  }
  __init() {
    this.name = _.id
  }
  constructor(t) {
    _.prototype.__init.call(this), this.options = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...t
    }
  }
  setupOnce() {
    this.options.console && (0, i.oq)("console", f), this.options.dom && (0, i.oq)("dom", function(t) {
      return function(e) {
        let n;
        let i = "object" == typeof t ? t.serializeAttribute : void 0,
          a = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
        a && a > 1024 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`), a = 1024), "string" == typeof i && (i = [i]);
        try {
          let t = e.event;
          n = function(t) {
            return !!t && !!t.target
          }(t) ? (0, o.Rt)(t.target, {
            keyAttrs: i,
            maxStringLength: a
          }) : (0, o.Rt)(t, {
            keyAttrs: i,
            maxStringLength: a
          })
        } catch (t) {
          n = "<unknown>"
        }
        if (0 !== n.length)(0, r.Gd)().addBreadcrumb({
          category: `ui.${e.name}`,
          message: n
        }, {
          event: e.event,
          name: e.name,
          global: e.global
        })
      }
    }(this.options.dom)), this.options.xhr && (0, i.oq)("xhr", p), this.options.fetch && (0, i.oq)("fetch", m), this.options.history && (0, i.oq)("history", g)
  }
  addSentryBreadcrumb(t) {
    this.options.sentry && (0, r.Gd)().addBreadcrumb({
      category: `sentry.${"transaction"===t.type?"transaction":"event"}`,
      event_id: t.event_id,
      level: t.level,
      message: (0, a.jH)(t)
    }, {
      event: t
    })
  }
}
_.__initStatic();

function f(t) {
  for (let e = 0; e < t.args.length; e++)
    if ("ref=Ref<" === t.args[e]) {
      t.args[e + 1] = "viewRef";
      break
    } let e = {
    category: "console",
    data: {
      arguments: t.args,
      logger: "console"
    },
    level: (0, l.VT)(t.level),
    message: (0, u.nK)(t.args, " ")
  };
  if ("assert" === t.level) {
    if (!1 !== t.args[0]) return;
    e.message = `Assertion failed: ${(0,u.nK)(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1)
  }(0, r.Gd)().addBreadcrumb(e, {
    input: t.args,
    level: t.level
  })
}

function p(t) {
  let {
    startTimestamp: e,
    endTimestamp: n
  } = t, a = t.xhr[i.xU];
  if (!e || !n || !a) return;
  let {
    method: s,
    url: o,
    status_code: l,
    body: u
  } = a, c = {
    xhr: t.xhr,
    input: u,
    startTimestamp: e,
    endTimestamp: n
  };
  (0, r.Gd)().addBreadcrumb({
    category: "xhr",
    data: {
      method: s,
      url: o,
      status_code: l
    },
    type: "http"
  }, c)
}

function m(t) {
  let {
    startTimestamp: e,
    endTimestamp: n
  } = t;
  if (!(!n || t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method))
    if (t.error) {
      let i = t.fetchData,
        a = {
          data: t.error,
          input: t.args,
          startTimestamp: e,
          endTimestamp: n
        };
      (0, r.Gd)().addBreadcrumb({
        category: "fetch",
        data: i,
        level: "error",
        type: "http"
      }, a)
    } else {
      let i = {
          ...t.fetchData,
          status_code: t.response && t.response.status
        },
        a = {
          input: t.args,
          response: t.response,
          startTimestamp: e,
          endTimestamp: n
        };
      (0, r.Gd)().addBreadcrumb({
        category: "fetch",
        data: i,
        type: "http"
      }, a)
    }
}

function g(t) {
  let e = t.from,
    n = t.to,
    i = (0, c.en)(d.m9.location.href),
    a = (0, c.en)(e),
    s = (0, c.en)(n);
  !a.path && (a = i), i.protocol === s.protocol && i.host === s.host && (n = s.relative), i.protocol === a.protocol && i.host === a.host && (e = a.relative), (0, r.Gd)().addBreadcrumb({
    category: "navigation",
    data: {
      from: e,
      to: n
    }
  })
}