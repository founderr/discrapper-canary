"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007"), n("70102");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("272030"),
  d = n("997289"),
  c = n("860285"),
  f = n("86878"),
  E = n("568307"),
  _ = n("535974"),
  T = n("181114"),
  I = n("837899"),
  m = n("773336"),
  N = n("780009"),
  p = n("49111"),
  A = n("782340"),
  S = n("743317");
class C extends l.PureComponent {
  get analyticsLocation() {
    return {
      ...this.props.analyticsContext.location,
      object: p.AnalyticsObjects.BUTTON_CTA
    }
  }
  renderDropdown() {
    let {
      dispatchState: e
    } = this.props, t = null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1;
    return t ? (0, s.jsxs)(o.Clickable, {
      "aria-label": A.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_OPTIONS,
      className: S.dropdownArrowHitbox,
      onClick: this.handleDropdownClick,
      children: [(0, s.jsx)("div", {
        className: S.arrowSeparator
      }), (0, s.jsx)(I.default, {
        className: S.dropdownArrow
      })]
    }) : null
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: l,
      size: a,
      customDisabledColor: i,
      tooltipPosition: r
    } = this.props;
    return (0, s.jsxs)("div", {
      className: S.disabledButtonWrapper,
      children: [(0, s.jsx)(o.Button, {
        className: n,
        fullWidth: l,
        size: a,
        color: null != i ? i : S.disabledButtonColor,
        disabled: !0,
        children: e
      }), (0, s.jsx)(o.Tooltip, {
        text: t,
        position: r,
        children: e => (0, s.jsx)("div", {
          className: S.disabledButtonOverlay,
          ...e
        })
      })]
    })
  }
  render() {
    let {
      className: e,
      fullWidth: t,
      size: n,
      color: l,
      isLaunchable: a,
      isLaunching: r,
      isRunning: u,
      isShiny: d,
      hideNotLaunchable: c
    } = this.props;
    if (!a) return c ? null : this.renderDisabledButton(A.default.Messages.GAME_ACTION_BUTTON_PLAY, m.isPlatformEmbedded ? A.default.Messages.GAME_ACTION_BUTTON_GAME_NOT_DETECTED : A.default.Messages.GAME_ACTION_BUTTON_PLAY_DISABLED_DESKTOP_APP);
    if (u) return this.renderDisabledButton(A.default.Messages.GAME_ACTION_BUTTON_NOW_PLAYING);
    let f = d ? T.default : o.Button;
    return (0, s.jsxs)(f, {
      className: i(S.playButton, e),
      innerClassName: S.playButtonContents,
      fullWidth: t,
      size: n,
      color: null != l ? l : o.Button.Colors.GREEN,
      hover: null != l ? o.Button.Hovers.GREEN : o.Button.Hovers.DEFAULT,
      submitting: r,
      onClick: this.handleClick,
      children: [(0, s.jsx)("div", {
        className: S.buttonText,
        children: A.default.Messages.GAME_ACTION_BUTTON_PLAY
      }), this.renderDropdown()]
    })
  }
  constructor(...e) {
    super(...e), this.handleDropdownClick = e => {
      e.stopPropagation();
      let {
        libraryApplication: t,
        onDropdownOpen: l,
        onDropdownClose: a
      } = this.props;
      if (null == l || l(e), null == t) throw Error("Unexpected missing libraryApplication");
      u.openContextMenuLazy(e, async () => {
        let {
          default: e
        } = await n.el("220792").then(n.bind(n, "220792"));
        return n => (0, s.jsx)(e, {
          ...n,
          libraryApplication: t,
          onPlay: this.handleClick
        })
      }, {
        onClose: a
      })
    }, this.handleClick = () => {
      let {
        applicationId: e,
        libraryApplication: t,
        analyticsListSort: n,
        analyticsListIndex: s
      } = this.props;
      N.playApplication(e, t, {
        analyticsParams: {
          location: this.analyticsLocation,
          list_sort: n,
          list_index: s
        }
      })
    }
  }
}

function h(e) {
  let {
    applicationId: t,
    libraryApplication: n
  } = e, l = (0, d.useAnalyticsContext)(), [a, i] = (0, r.useStateFromStoresArray)([f.default, c.default, _.default], () => [f.default.isConnected(t) || c.default.isLaunchable(t) || null != n && _.default.isLaunchable(n.id, n.branchId), c.default.launchingGames.has(t)], [t, n]), o = (0, r.useStateFromStores)([E.default], () => new Set(E.default.getRunningVerifiedApplicationIds()).has(t), [t]), u = (0, r.useStateFromStores)([_.default], () => null != n ? _.default.getState(n.id, n.branchId) : null, [n]);
  return (0, s.jsx)(C, {
    ...e,
    analyticsContext: l,
    isLaunchable: a,
    isLaunching: i,
    isRunning: o,
    dispatchState: u
  })
}
C.defaultProps = {
  fullWidth: !1,
  size: o.Button.Sizes.LARGE,
  tooltipPosition: "top",
  isShiny: !1,
  hideNotLaunchable: !1
}