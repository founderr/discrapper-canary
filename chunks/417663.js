n.r(t), n.d(t, {
  AccountConnectionResult: function() {
    return h
  },
  LinkPlatformLogo: function() {
    return g
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  o = n(593473),
  l = n(481060),
  c = n(457330),
  d = n(726542),
  u = n(536285),
  N = n(981631),
  m = n(689938),
  C = n(613803);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = null != window.opener;

function g(e) {
  let {
    platform: t,
    className: n
  } = e;
  return (0, s.jsxs)("div", {
    className: i()(C.logos, n),
    children: [(0, s.jsx)("div", {
      className: i()(C.logo, C.logoDiscord)
    }), (0, s.jsx)("div", {
      className: C.logosDivider
    }), (0, s.jsx)("div", {
      className: C.logo,
      style: {
        backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")')
      }
    })]
  })
}

function h(e) {
  let t, n, {
      verifying: r,
      verified: o,
      platformType: c
    } = e,
    u = d.Z.get(c),
    N = a.useCallback(() => {
      window.close()
    }, []);
  return t = r ? (0, s.jsx)("div", {
    className: C.message,
    children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
      name: u.name
    })
  }) : o ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: C.message,
      children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({
        name: u.name
      })
    }), (0, s.jsx)("div", {
      className: i()(C.message, C.details),
      children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS
    })]
  }) : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: i()(C.message, C.error),
      children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
        name: u.name
      })
    }), (0, s.jsx)("div", {
      className: i()(C.message, C.details),
      children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS
    })]
  }), (f || r) && (n = (0, s.jsx)(l.Button, {
    className: C.btn,
    disabled: r,
    onClick: N,
    children: r ? (0, s.jsx)(l.Spinner, {
      itemClassName: C.spinnerItem
    }) : m.Z.Messages.DONE
  })), (0, s.jsx)("div", {
    className: C.verifyConnectedAccount,
    children: (0, s.jsxs)("div", {
      children: [(0, s.jsx)(g, {
        platform: u
      }), t, n]
    })
  })
}
class v extends a.Component {
  componentDidMount() {
    let e;
    let t = (0, o.parse)(this.props.location.search),
      {
        code: n,
        state: s,
        oauth_verifier: a,
        loading: r
      } = t;
    if (null != r) return;
    null != a && (n = a), Object.keys(t).forEach(n => {
      if (!!n.startsWith("openid.")) null == e && (e = {}), e[n] = t[n]
    });
    let i = e => {
        let {
          status: t,
          body: n
        } = e;
        this.setState({
          verifying: !1,
          verified: 204 === t || 200 === t
        }, () => {
          this.state.verified && f && window.close()
        }), (null == n ? void 0 : n.redirect) != null && (window.location = n.redirect)
      },
      l = {
        code: n,
        openid_params: e,
        state: s
      },
      d = e => c.Z.callback(this.getType(), l, e).then(i, i);
    if (f) {
      d(!1);
      return
    }
    u.default.request(N.Etm.CONNECTIONS_CALLBACK, {
      ...l,
      providerType: this.getType()
    }).then(i, e => d("RPCError" !== e.name)).then(() => u.default.disconnect())
  }
  render() {
    let {
      verifying: e,
      verified: t
    } = this.state, n = this.getType();
    return d.Z.isSupported(n) ? (0, s.jsx)(h, {
      platformType: this.getType(),
      verifying: e,
      verified: t
    }) : null
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      verifying: !0,
      verified: !1
    }), p(this, "getType", () => this.props.match.params.type)
  }
}
t.default = v