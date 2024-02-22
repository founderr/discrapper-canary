"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("222007");
var a = s("37983"),
  i = s("884691"),
  n = s("271938");

function r(e) {
  return class extends i.Component {
    componentDidMount() {
      n.default.addChangeListener(this.onStoreChange)
    }
    componentWillUnmount() {
      n.default.removeChangeListener(this.onStoreChange)
    }
    render() {
      return (0, a.jsx)(e, {
        ...this.props,
        isAuthenticated: this.state.isAuthenticated
      })
    }
    constructor(...e) {
      super(...e), this.state = {
        isAuthenticated: n.default.isAuthenticated()
      }, this.onStoreChange = () => {
        this.setState({
          isAuthenticated: n.default.isAuthenticated()
        })
      }
    }
  }
}