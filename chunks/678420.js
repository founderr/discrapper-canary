"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  r = l("481060"),
  s = l("661111"),
  o = l("766411"),
  i = l("626135"),
  c = l("388080"),
  d = l("981631"),
  u = l("596401"),
  h = l("689938"),
  C = l("492181");

function g(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
class f extends n.PureComponent {
  componentDidMount() {
    this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(d.AnalyticEvents.CHANGE_LOG_OPENED, {}, !0)
  }
  componentWillUnmount() {
    this.track(d.AnalyticEvents.CHANGE_LOG_CLOSED)
  }
  render() {
    return (0, a.jsx)(c.default, {
      ...this.props,
      onClose: this.close,
      onScroll: this.handleScroll,
      track: this.track
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, g(this, "maxScrolledPercentage", 0), g(this, "mountedAt", 0), g(this, "close", () => {
      (0, r.closeModal)(u.CHANGELOG_MODAL_KEY)
    }), g(this, "handleScroll", e => {
      let {
        offsetHeight: t,
        scrollHeight: l,
        scrollTop: a
      } = e.getScrollerState();
      this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, a / (l - t)), 1)
    }), g(this, "track", function(e) {
      let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        {
          changeLog: n
        } = t.props,
        {
          date: r,
          revision: s
        } = n,
        o = {
          change_log_id: "".concat(r, ":").concat(s),
          ...l
        };
      !a && (o = {
        seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
        max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
        ...o
      }), i.default.track(e, o)
    })
  }
}

function m(e) {
  let {
    changelog: t,
    loaded: l,
    clientTooOld: i
  } = (0, o.useCurrentChangelog)();
  if (n.useEffect(() => {
      if (l && null != t) return () => s.default.markChangelogAsSeen(t.id, t.date)
    }, [l, t]), i) return (0, a.jsx)(r.ModalRoot, {
    transitionState: e.transitionState,
    children: (0, a.jsx)("div", {
      className: C.empty,
      children: (0, a.jsx)(r.Heading, {
        variant: "heading-lg/medium",
        children: h.default.Messages.CHANGE_LOG_CLIENT_OLD
      })
    })
  });
  if (null == t) return l ? (0, a.jsx)(r.ModalRoot, {
    transitionState: e.transitionState,
    children: (0, a.jsx)("div", {
      className: C.empty,
      children: (0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: h.default.Messages.CHANGE_LOG_FAILED_TO_LOAD
      })
    })
  }) : (0, a.jsx)(r.ModalRoot, {
    transitionState: e.transitionState,
    children: (0, a.jsx)("div", {
      className: C.empty,
      children: (0, a.jsx)(r.Spinner, {
        type: r.Spinner.Type.WANDERING_CUBES
      })
    })
  });
  return (0, a.jsx)(r.ModalRoot, {
    transitionState: e.transitionState,
    children: (0, a.jsx)(f, {
      changeLog: t
    })
  })
}