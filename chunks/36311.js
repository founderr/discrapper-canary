n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(749210),
  u = n(594174),
  d = n(499371),
  h = n(63063),
  m = n(981631),
  p = n(689938),
  E = n(120841);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class f extends i.PureComponent {
  componentDidMount() {
    let {
      current: e
    } = this.scroller;
    null == e || e.scrollToBottom()
  }
  render() {
    let {
      nsfwDisallowed: e
    } = this.props, t = p.Z.Messages.NSFW_DESCRIPTION;
    t = e ? p.Z.Messages.AGE_GATE_NSFW_UNDERAGE_BODY.format({
      helpURL: h.Z.getArticleURL(m.BhN.NSFW_AGE_GATING)
    }) : p.Z.Messages.AGE_GATE_NSFW_DESCRIPTION;
    let n = e ? (0, l.jsx)(d.Z, {
      onAgree: this.handleAgree,
      onDisagree: this.handleDisagree,
      title: p.Z.Messages.AGE_GATE_NSFW_UNDERAGE_HEADER,
      description: t,
      agreement: null,
      disagreement: p.Z.Messages.BACK,
      imageClassName: E.ageGatedImage
    }) : (0, l.jsx)(d.Z, {
      onAgree: this.handleAgree,
      onDisagree: this.handleDisagree,
      title: p.Z.Messages.NSFW_TITLE,
      description: t,
      agreement: p.Z.Messages.NSFW_ACCEPT,
      disagreement: p.Z.Messages.NSFW_DECLINE
    });
    return (0, l.jsx)(o.AdvancedScroller, {
      ref: this.scroller,
      className: E.scroller,
      children: (0, l.jsx)("div", {
        className: a()(this.props.className, E.wrapper),
        children: n
      })
    })
  }
  constructor(...e) {
    super(...e), g(this, "scroller", i.createRef()), g(this, "handleDisagree", () => {
      let {
        guild: e
      } = this.props;
      null != e && c.Z.nsfwReturnToSafety(e.id)
    }), g(this, "handleAgree", () => {
      let {
        guild: e
      } = this.props;
      null != e && c.Z.nsfwAgree(e.id)
    })
  }
}
t.Z = r.ZP.connectStores([u.default], () => {
  var e;
  return {
    nsfwDisallowed: (null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1
  }
})(f)