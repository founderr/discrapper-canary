s.r(t), s.d(t, {
  default: function() {
    return j
  }
});
var n = s(735250),
  a = s(470079),
  r = s(593473),
  i = s(442837),
  l = s(544891),
  o = s(536285),
  c = s(388905),
  d = s(703656),
  u = s(314897),
  m = s(285952),
  p = s(981631),
  x = s(689938),
  h = s(234901),
  N = s(331651);

function f(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
i.ZP.initialize();
let E = {
  HANDOFF: "handoff",
  DONE: "done",
  FAILED: "failed"
};

function g() {
  try {
    window.close()
  } catch (e) {}
}
class j extends a.PureComponent {
  componentDidMount() {
    let {
      stage: e,
      key: t
    } = this.state;
    e === E.DONE ? g() : u.default.isAuthenticated() ? l.tn.post({
      url: p.ANM.HANDOFF,
      body: {
        key: t
      },
      oldFormErrors: !0
    }).then(e => this.handoff(e.body.handoff_token), () => this.handoff()) : this.handoff()
  }
  handoff(e) {
    o.default.requestRedirect(p.Etm.BROWSER_HANDOFF, {
      handoffToken: e,
      fingerprint: u.default.getFingerprint()
    }).then(this.done, this.failed)
  }
  renderDone() {
    return (0, n.jsxs)(c.ZP, {
      children: [(0, n.jsx)(c.Ee, {
        src: s(69008),
        className: N.marginBottom20
      }), (0, n.jsx)(c.Dx, {
        className: N.marginBottom8,
        children: x.Z.Messages.BROWSER_HANDOFF_DONE_TITLE
      }), (0, n.jsx)(c.DK, {
        className: N.marginBottom40,
        children: x.Z.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
      }), (0, n.jsx)(c.zx, {
        onClick: this.handleOpenApp,
        children: x.Z.Messages.CONTINUE_TO_WEBAPP
      })]
    })
  }
  renderFailed() {
    return (0, n.jsxs)(c.ZP, {
      children: [(0, n.jsx)(c.Ee, {
        src: s(69008),
        className: N.marginBottom20
      }), (0, n.jsx)(c.Dx, {
        className: N.marginBottom8,
        children: x.Z.Messages.BROWSER_HANDOFF_FAILED_TITLE
      }), (0, n.jsx)(c.DK, {
        className: N.marginBottom40,
        children: x.Z.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
      }), (0, n.jsx)(c.zx, {
        onClick: this.handleOpenApp,
        children: x.Z.Messages.CONTINUE_TO_WEBAPP
      })]
    })
  }
  renderHandoff() {
    return (0, n.jsxs)(c.ZP, {
      children: [(0, n.jsx)(c.Hh, {}), (0, n.jsx)(c.Dx, {
        className: N.marginBottom8,
        children: x.Z.Messages.BROWSER_HANDOFF_AUTHENTICATING_TITLE
      }), (0, n.jsx)(c.DK, {
        children: x.Z.Messages.BROWSER_HANDOFF_AUTHENTICATING_DESCRIPTION
      })]
    })
  }
  render() {
    let e;
    let {
      stage: t
    } = this.state;
    switch (t) {
      case E.DONE:
        e = this.renderDone();
        break;
      case E.FAILED:
        e = this.renderFailed();
        break;
      case E.HANDOFF:
      default:
        e = this.renderHandoff()
    }
    return (0, n.jsx)(m.Z, {
      justify: m.Z.Justify.CENTER,
      align: m.Z.Align.CENTER,
      className: h.wrapper,
      children: e
    })
  }
  constructor(e) {
    var t;
    super(e), f(this, "done", () => {
      g(), this.setState({
        stage: E.DONE
      })
    }), f(this, "failed", () => {
      this.setState({
        stage: E.FAILED
      }), g()
    }), f(this, "handleOpenApp", () => {
      (0, d.uL)(p.Z5c.ME)
    });
    let {
      search: s
    } = e.location, n = null != s && "" !== s ? (0, r.parse)(s) : {};
    this.state = {
      key: null !== (t = n.key) && void 0 !== t ? t : "",
      stage: "true" === n.done ? E.DONE : E.HANDOFF
    }
  }
}