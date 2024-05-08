"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var n = s("735250"),
  a = s("470079"),
  r = s("593473"),
  l = s("442837"),
  i = s("544891"),
  o = s("536285"),
  u = s("703656"),
  c = s("314897"),
  d = s("285952"),
  m = s("819570"),
  p = s("981631"),
  f = s("689938"),
  h = s("789312"),
  x = s("949086");

function N(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
l.default.initialize();
let T = {
  HANDOFF: "handoff",
  DONE: "done",
  FAILED: "failed"
};

function g() {
  try {
    window.close()
  } catch (e) {}
}
class E extends a.PureComponent {
  componentDidMount() {
    let {
      stage: e,
      key: t
    } = this.state;
    e === T.DONE ? g() : c.default.isAuthenticated() ? i.HTTP.post({
      url: p.Endpoints.HANDOFF,
      body: {
        key: t
      },
      oldFormErrors: !0
    }).then(e => this.handoff(e.body.handoff_token), () => this.handoff()) : this.handoff()
  }
  handoff(e) {
    o.default.requestRedirect(p.RPCCommands.BROWSER_HANDOFF, {
      handoffToken: e,
      fingerprint: c.default.getFingerprint()
    }).then(this.done, this.failed)
  }
  renderDone() {
    return (0, n.jsxs)(m.default, {
      children: [(0, n.jsx)(m.Image, {
        src: s("69008"),
        className: x.marginBottom20
      }), (0, n.jsx)(m.Title, {
        className: x.marginBottom8,
        children: f.default.Messages.BROWSER_HANDOFF_DONE_TITLE
      }), (0, n.jsx)(m.SubTitle, {
        className: x.marginBottom40,
        children: f.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
      }), (0, n.jsx)(m.Button, {
        onClick: this.handleOpenApp,
        children: f.default.Messages.CONTINUE_TO_WEBAPP
      })]
    })
  }
  renderFailed() {
    return (0, n.jsxs)(m.default, {
      children: [(0, n.jsx)(m.Image, {
        src: s("69008"),
        className: x.marginBottom20
      }), (0, n.jsx)(m.Title, {
        className: x.marginBottom8,
        children: f.default.Messages.BROWSER_HANDOFF_FAILED_TITLE
      }), (0, n.jsx)(m.SubTitle, {
        className: x.marginBottom40,
        children: f.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
      }), (0, n.jsx)(m.Button, {
        onClick: this.handleOpenApp,
        children: f.default.Messages.CONTINUE_TO_WEBAPP
      })]
    })
  }
  renderHandoff() {
    return (0, n.jsxs)(m.default, {
      children: [(0, n.jsx)(m.AuthSpinner, {}), (0, n.jsx)(m.Title, {
        className: x.marginBottom8,
        children: f.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_TITLE
      }), (0, n.jsx)(m.SubTitle, {
        children: f.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_DESCRIPTION
      })]
    })
  }
  render() {
    let e;
    let {
      stage: t
    } = this.state;
    switch (t) {
      case T.DONE:
        e = this.renderDone();
        break;
      case T.FAILED:
        e = this.renderFailed();
        break;
      case T.HANDOFF:
      default:
        e = this.renderHandoff()
    }
    return (0, n.jsx)(d.default, {
      justify: d.default.Justify.CENTER,
      align: d.default.Align.CENTER,
      className: h.wrapper,
      children: e
    })
  }
  constructor(e) {
    var t;
    super(e), N(this, "done", () => {
      g(), this.setState({
        stage: T.DONE
      })
    }), N(this, "failed", () => {
      this.setState({
        stage: T.FAILED
      }), g()
    }), N(this, "handleOpenApp", () => {
      (0, u.transitionTo)(p.Routes.ME)
    });
    let {
      search: s
    } = e.location, n = null != s && "" !== s ? (0, r.parse)(s) : {};
    this.state = {
      key: null !== (t = n.key) && void 0 !== t ? t : "",
      stage: "true" === n.done ? T.DONE : T.HANDOFF
    }
  }
}