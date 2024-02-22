"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("6466");
class r extends a.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: a,
      popoutProps: r
    } = this.props;
    return (0, l.jsx)(s.Popout, {
      ...r,
      renderPopout: this.renderPopout,
      children: (r, u) => {
        let {
          isShown: o
        } = u;
        return (0, l.jsx)(s.Clickable, {
          ...r,
          className: a,
          "aria-haspopup": "listbox",
          "aria-expanded": o,
          children: (0, l.jsx)(i.default, {
            label: e,
            value: t,
            renderValue: n
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), this.renderPopout = e => {
      let {
        closePopout: t
      } = e, {
        options: n,
        value: a,
        renderOption: s,
        popoutClassName: r,
        scroller: u
      } = this.props;
      return (0, l.jsx)(i.QuickSelectPopout, {
        scroller: !!u,
        className: r,
        options: n,
        value: a,
        renderOption: s,
        onChange: e => {
          this.handleChange(e), t()
        }
      })
    }, this.handleChange = e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e)
    }
  }
}
var u = r