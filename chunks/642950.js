"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007");
var r = s("37983"),
  n = s("884691"),
  i = s("414456"),
  l = s.n(i),
  a = s("77078"),
  u = s("54239"),
  o = s("79112"),
  c = s("49111"),
  d = s("782340"),
  f = s("44026");
class h extends n.Component {
  render() {
    return (0, r.jsxs)("div", {
      className: f.streamerModeEnabled,
      children: [(0, r.jsx)("div", {
        className: f.streamerModeEnabledImage
      }), (0, r.jsx)(a.Clickable, {
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