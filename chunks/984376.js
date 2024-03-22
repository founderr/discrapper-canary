"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("271938");

function i(e) {
  return class extends r.Component {
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