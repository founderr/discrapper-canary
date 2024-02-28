"use strict";
r.r(t), r.d(t, {
  default: function() {
    return p
  }
}), r("222007");
var n = r("37983"),
  s = r("884691"),
  i = r("414456"),
  l = r.n(i),
  a = r("77078"),
  u = r("54239"),
  o = r("79112"),
  d = r("49111"),
  c = r("782340"),
  f = r("44026");
class h extends s.Component {
  render() {
    return (0, n.jsxs)("div", {
      className: f.streamerModeEnabled,
      children: [(0, n.jsx)("div", {
        className: f.streamerModeEnabledImage
      }), (0, n.jsx)(a.Clickable, {
        className: l(f.streamerModeEnabledBtn, {
          [f.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: c.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleClick = () => {
      !this.props.disableButton && ((0, u.pushLayer)(d.Layers.USER_SETTINGS), o.default.setSection(d.UserSettingsSections.STREAMER_MODE))
    }
  }
}
h.defaultProps = {
  disableButton: !1
};
var p = h