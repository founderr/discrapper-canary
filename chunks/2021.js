"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983"),
  a = n("884691"),
  r = n("90915"),
  i = n("266491");
class l extends a.Component {
  render() {
    let {
      children: e,
      location: t,
      history: n,
      staticContext: l,
      match: o,
      ...u
    } = this.props, d = null, c = null;
    return a.Children.forEach(e, e => {
      if (null == d && a.isValidElement(e)) {
        let {
          component: s,
          render: i,
          ...o
        } = e.props, u = o.path || o.from;
        null != (d = null != u ? (0, r.matchPath)(t.pathname, {
          ...o,
          path: u
        }) : null) && (o = {
          ...o,
          key: u,
          location: t,
          match: d,
          history: n,
          staticContext: l
        }, null != s ? c = a.createElement(s, o) : null != i && (c = i(o)))
      }
    }), (0, s.jsx)(i.TransitionGroup, {
      ...u,
      children: c
    })
  }
}
var o = (0, r.withRouter)(l)