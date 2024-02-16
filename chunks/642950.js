"use strict";
r.r(t), r.d(t, {
  default: function() {
    return p
  }
}), r("222007");
var s = r("37983"),
  n = r("884691"),
  i = r("414456"),
  l = r.n(i),
  a = r("77078"),
  u = r("54239"),
  o = r("79112"),
  c = r("49111"),
  d = r("782340"),
  f = r("44026");
class h extends n.Component {
  render() {
    return (0, s.jsxs)("div", {
      className: f.streamerModeEnabled,
      children: [(0, s.jsx)("div", {
        className: f.streamerModeEnabledImage
      }), (0, s.jsx)(a.Clickable, {
        className: l(f.streamerModeEnabledBtn, {
          [f.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: d.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleClick = () => {
      !this.props.disableButton && ((0, u.pushLayer)(c.Layers.USER_SETTINGS), o.default.setSection(c.UserSettingsSections.STREAMER_MODE))
    }
  }
}
h.defaultProps = {
  disableButton: !1
};
var p = h