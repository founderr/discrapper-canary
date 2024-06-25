n(47120);
var s, i = n(735250),
  r = n(470079),
  a = n(593473),
  l = n(442837),
  o = n(544891),
  c = n(481060),
  u = n(129293),
  d = n(388905),
  _ = n(108427),
  E = n(598077),
  I = n(896797),
  h = n(981631),
  p = n(930441),
  g = n(689938),
  f = n(331651);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
l.ZP.initialize();
class m extends(s = r.PureComponent) {
  componentDidMount() {
    let e = (0, u.Z)(this.props.location),
      t = (0, a.parse)(this.props.location.search);
    o.tn.post({
      url: h.ANM.DISABLE_EMAIL_NOTIFICATIONS,
      body: {
        token: e,
        pixel_uuid: t.hash,
        category: t.category,
        email_type: t.email_type
      },
      oldFormErrors: !0
    }).then(e => {
      let {
        body: {
          user: n
        }
      } = e, s = new E.Z(n);
      this.setState({
        success: !0,
        busy: !1,
        user: s,
        category: t.category
      })
    }, () => this.setState({
      success: !1,
      busy: !1
    })), (0, _.e)("disable_email_notifications")
  }
  renderBusy() {
    return (0, i.jsx)(d.ZP, {
      children: (0, i.jsx)(d.Hh, {})
    })
  }
  renderCategorySuccess(e, t) {
    let {
      defaultRoute: n,
      transitionTo: s
    } = this.props, r = g.Z.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_EMAIL_BODY.format({
      category: t
    });
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.Dx, {
        className: f.marginBottom8,
        children: g.Z.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_HEADER
      }), (0, i.jsx)(d.DK, {
        children: r
      }), (0, i.jsx)(d.zx, {
        className: f.marginTop20,
        onClick: () => s(n),
        children: g.Z.Messages.CONTINUE_TO_WEBAPP
      }), (0, i.jsx)(d.zx, {
        className: f.marginTop8,
        color: d.zx.Colors.LINK,
        look: d.zx.Looks.LINK,
        onClick: () => s(h.Z5c.SETTINGS("notifications", p.vG)),
        children: g.Z.Messages.EMAIL_CATEGORY_MANAGE_SETTING_LABEL
      })]
    })
  }
  renderSuccess() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props, {
      user: n,
      category: s
    } = this.state;
    if (null != s) {
      let e = p.Od.find(e => e.category === s);
      if (null != e) return this.renderCategorySuccess(s, e.label())
    }
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.qE, {
        src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
        size: c.AvatarSizes.DEPRECATED_SIZE_100,
        className: f.marginBottom20
      }), (0, i.jsx)(d.Dx, {
        className: f.marginBottom8,
        children: g.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_HEADER
      }), (0, i.jsx)(d.DK, {
        children: g.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_BODY
      }), (0, i.jsx)(d.zx, {
        className: f.marginTop40,
        onClick: () => t(e),
        children: g.Z.Messages.CONTINUE_TO_WEBAPP
      })]
    })
  }
  renderError() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props;
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.Ee, {
        src: n(105020),
        className: f.marginBottom20
      }), (0, i.jsx)(d.Dx, {
        className: f.marginBottom8,
        children: g.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
      }), (0, i.jsx)(d.DK, {
        children: g.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
      }), (0, i.jsx)(d.zx, {
        className: f.marginTop40,
        onClick: () => t(e),
        children: g.Z.Messages.CONTINUE_TO_WEBAPP
      })]
    })
  }
  render() {
    let {
      busy: e,
      success: t
    } = this.state;
    return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError()
  }
  constructor(...e) {
    super(...e), N(this, "state", {
      busy: !0,
      success: !1,
      user: null,
      category: null
    })
  }
}
N(m, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
}), t.Z = l.ZP.connectStores([I.Z], () => ({
  defaultRoute: I.Z.defaultRoute
}))(m)