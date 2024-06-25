"use strict";
n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(540026),
  _ = n(689938),
  c = n(566324);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends(i = s.PureComponent) {
  componentDidMount() {
    this.updateMediaBar()
  }
  componentDidUpdate(e) {
    (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar()
  }
  updateMediaBar() {
    let {
      muted: e,
      value: t,
      maxValue: n
    } = this.props, i = this._mediaBar.current;
    null != i && (e ? i.setGrabber(0) : i.setGrabber(t / n))
  }
  render() {
    let {
      iconClassName: e,
      className: t,
      sliderWrapperClassName: n,
      sliderClassName: i,
      currentWindow: s,
      muted: o,
      minValue: d,
      maxValue: E,
      value: I,
      onVolumeShow: T,
      onVolumeHide: h
    } = this.props, {
      hovered: f,
      focused: S,
      dragging: A
    } = this.state, N = l.VoiceNormalIcon;
    return o || I === d ? N = l.VoiceXIcon : I < E / 2 && (N = l.VoiceLowIcon), (0, r.jsxs)("div", {
      className: a()(t, c.container),
      onMouseEnter: () => {
        clearTimeout(this._hoverTimeout), this.setState({
          hovered: !0
        }), null == T || T()
      },
      onMouseLeave: () => {
        clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => {
          this.setState({
            hovered: !1
          }), null == h || h()
        }, 150)
      },
      onFocus: () => this.setState({
        focused: !0
      }),
      onBlur: () => this.setState({
        focused: !1
      }),
      onKeyDown: this.handleKeyDown,
      children: [(0, r.jsx)("div", {
        className: a()(c.volumeButtonSlider, n, {
          [c.sliderVisible]: f || S || A
        }),
        onMouseEnter: () => {
          clearTimeout(this._hoverTimeout), this.setState({
            hovered: !0
          })
        },
        onMouseLeave: () => {
          clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => this.setState({
            hovered: !1
          }), 150)
        },
        children: (0, r.jsx)(u.Z, {
          sliderClassName: i,
          type: u.Z.Types.VOLUME,
          value: I / E,
          onDrag: this.handleValueChange,
          onDragStart: this.handleDragStart,
          onDragEnd: this.handleDragEnd,
          currentWindow: s,
          ref: this._mediaBar
        })
      }), (0, r.jsx)(l.Button, {
        className: c.volumeButton,
        "aria-label": _.Z.Messages.CONTROL_VOLUME,
        size: l.Button.Sizes.NONE,
        look: l.Button.Looks.BLANK,
        onClick: this.handleToggleMute,
        children: (0, r.jsx)(N, {
          className: e
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), d(this, "_mediaBar", s.createRef()), d(this, "_hoverTimeout", void 0), d(this, "state", {
      hovered: !1,
      focused: !1,
      dragging: !1
    }), d(this, "handleValueChange", e => {
      let {
        maxValue: t,
        onValueChange: n
      } = this.props;
      null == n || n(e * t)
    }), d(this, "handleToggleMute", () => {
      let {
        onToggleMute: e
      } = this.props;
      null == e || e()
    }), d(this, "handleKeyDown", e => {
      let {
        minValue: t,
        value: n,
        maxValue: i,
        onValueChange: r
      } = this.props, s = .05 * (i - t);
      switch (e.key) {
        case "ArrowUp":
          e.stopPropagation(), e.preventDefault(), null == r || r(Math.min(i, n + s));
          break;
        case "ArrowDown":
          e.stopPropagation(), e.preventDefault(), null == r || r(Math.max(t, n - s))
      }
    }), d(this, "handleDragStart", () => {
      this.setState({
        dragging: !0
      })
    }), d(this, "handleDragEnd", () => {
      this.setState({
        dragging: !1
      })
    }), d(this, "blur", () => {
      this.setState({
        focused: !1
      })
    })
  }
}
d(E, "defaultProps", {
  minValue: 0,
  maxValue: 100,
  handleSize: 16
}), t.Z = E