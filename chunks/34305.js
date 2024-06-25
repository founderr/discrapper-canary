n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(325432),
  o = n(391690),
  c = n(714759),
  u = n(285952),
  d = n(546591),
  E = n(424218),
  h = n(358085),
  _ = n(998502),
  I = n(689938),
  m = n(145537),
  T = n(331651);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends i.PureComponent {
  renderDiskUsageCircle() {
    let {
      metadata: e
    } = this.props;
    return null != e && null != e.availableKB && null != e.totalKB ? (0, s.jsx)(c.Z, {
      total: e.totalKB,
      used: e.totalKB - e.availableKB
    }) : null
  }
  renderViewing() {
    let e, t;
    let {
      path: n,
      label: i,
      editingPath: l,
      isDefault: r,
      metadata: c
    } = this.props;
    return null != c && (e = null != c.availableKB ? (0, E.BU)(c.availableKB, {
      useKibibytes: !0
    }) : null, t = null != c.totalKB ? (0, E.BU)(c.totalKB, {
      useKibibytes: !0
    }) : null), (0, s.jsxs)(u.Z, {
      className: m.installationPath,
      align: u.Z.Align.CENTER,
      children: [this.renderDiskUsageCircle(), (0, s.jsxs)(u.Z, {
        direction: u.Z.Direction.VERTICAL,
        className: m.__invalid_descriptionWrapper,
        children: [(0, s.jsxs)(u.Z, {
          align: u.Z.Align.CENTER,
          children: [(0, s.jsx)(a.Heading, {
            className: m.rowTitle,
            variant: "heading-md/semibold",
            children: null != i ? i : o.Z.getLabelFromPath(n)
          }), r ? (0, s.jsx)("span", {
            className: m.defaultIndicator,
            children: I.Z.Messages.DEFAULT
          }) : null]
        }), null != c && null != e && null != t ? (0, s.jsx)(d.Z, {
          className: m.rowBody,
          hoverText: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_SPACE.format({
            available: e,
            total: t
          }),
          children: n
        }) : (0, s.jsx)(a.Text, {
          className: m.rowBody,
          variant: "text-xs/normal",
          children: n
        })]
      }), (0, s.jsx)(a.Button, {
        size: a.Button.Sizes.SMALL,
        disabled: null != l,
        color: a.Button.Colors.PRIMARY,
        onClick: this.handleStartEditing,
        children: I.Z.Messages.EDIT
      })]
    })
  }
  renderEditing() {
    let {
      path: e,
      hasGamesInstalledInPath: t
    } = this.props, {
      label: n,
      isDefault: i
    } = this.state;
    return (0, s.jsx)(a.Card, {
      editable: !0,
      className: m.installationPathEditing,
      children: (0, s.jsxs)(u.Z, {
        children: [this.renderDiskUsageCircle(), (0, s.jsxs)(u.Z.Child, {
          children: [(0, s.jsx)(a.FormItem, {
            title: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_NAME,
            children: (0, s.jsx)(a.TextInput, {
              value: n,
              placeholder: o.Z.getLabelFromPath(e),
              onChange: this.handleLabelChange
            })
          }), (0, s.jsx)(a.FormItem, {
            title: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION,
            className: T.marginTop20,
            children: (0, s.jsx)(a.TextInput, {
              disabled: !0,
              value: e
            })
          }), (0, s.jsx)(a.Checkbox, {
            type: a.Checkbox.Types.INVERTED,
            value: null != i ? i : this.props.isDefault,
            disabled: this.props.isDefault,
            className: m.defaultLocationCheckbox,
            onChange: this.handleToggleDefault,
            children: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_MAKE_DEFAULT
          }), (0, s.jsx)(a.FormDivider, {
            className: m.separator
          }), (0, s.jsxs)(u.Z, {
            children: [(0, s.jsx)(a.Button, {
              disabled: t || this.props.isDefault,
              size: a.Button.Sizes.SMALL,
              color: a.Button.Colors.RED,
              look: a.Button.Looks.OUTLINED,
              onClick: this.handleRemoveLocation,
              children: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE
            }), (0, s.jsxs)(u.Z, {
              justify: u.Z.Justify.END,
              children: [(0, s.jsx)(a.Button, {
                size: a.Button.Sizes.SMALL,
                color: a.Button.Colors.PRIMARY,
                look: a.Button.Looks.LINK,
                onClick: this.handleStopEditing,
                children: I.Z.Messages.CANCEL
              }), (0, s.jsx)(a.Button, {
                disabled: e === this.props.path && n === this.props.label && i === this.props.isDefault,
                size: a.Button.Sizes.SMALL,
                color: a.Button.Colors.GREEN,
                onClick: this.handleSaveChanges,
                children: I.Z.Messages.SAVE
              })]
            })]
          })]
        })]
      })
    })
  }
  render() {
    return this.props.editingPath === this.props.path ? this.renderEditing() : this.renderViewing()
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      label: void 0,
      isDefault: null
    }), g(this, "handleStartEditing", () => {
      let {
        path: e,
        label: t,
        isDefault: n,
        onToggleEditing: s
      } = this.props;
      s(e), this.setState({
        label: t,
        isDefault: n
      })
    }), g(this, "handleStopEditing", () => {
      let {
        onToggleEditing: e
      } = this.props;
      e(null), this.setState({
        label: void 0,
        isDefault: null
      })
    }), g(this, "handleRemoveLocation", () => {
      (0, a.openModal)(e => (0, s.jsx)(a.ConfirmModal, {
        ...e,
        header: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE,
        confirmText: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE,
        cancelText: I.Z.Messages.CANCEL,
        onConfirm: () => {
          this.handleStopEditing(), (0, r.iD)(this.props.path)
        },
        children: (0, s.jsx)(a.Text, {
          variant: "text-md/normal",
          children: I.Z.Messages.USER_SETTINGS_GAMES_REMOVE_LOCATION_BODY
        })
      }))
    }), g(this, "handleSaveChanges", () => {
      (0, r.Tb)(this.props.path, {
        label: null != this.state.label ? this.state.label : this.props.label,
        isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
      }), this.handleStopEditing()
    }), g(this, "handleLabelChange", e => {
      this.setState({
        label: e
      })
    }), g(this, "handleToggleDefault", () => {
      this.setState({
        isDefault: !this.state.isDefault
      })
    })
  }
}
class N extends i.PureComponent {
  componentDidMount() {
    (0, r.ec)(this.props.installationPaths.map(e => {
      let {
        path: t
      } = e;
      return t
    }))
  }
  render() {
    let {
      installationPaths: e,
      installationPathsMetadata: t,
      defaultInstallationPath: n
    } = this.props, {
      editingPath: i
    } = this.state;
    return (0, s.jsxs)(a.FormSection, {
      className: m.wrapper,
      title: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATIONS,
      children: [e.map(e => {
        let {
          path: l,
          label: a
        } = e;
        return (0, s.jsx)(p, {
          path: l,
          label: a,
          metadata: t[l],
          isDefault: n === l,
          editingPath: i,
          hasGamesInstalledInPath: o.Z.hasGamesInstalledInPath(l),
          onToggleEditing: this.handleToggleEditing
        }, l)
      }), (0, s.jsx)("div", {
        className: m.buttonRowWrapper,
        children: (0, s.jsx)(a.Button, {
          disabled: !h.isPlatformEmbedded,
          onClick: this.handleAddInstallationLocation,
          size: a.Button.Sizes.SMALL,
          children: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_ADD
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      editingPath: null
    }), g(this, "handleAddInstallationLocation", () => {
      _.ZP.showOpenDialog(["openDirectory"]).then(e => {
        if (null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0])(0, r.RY)(e[0])
      })
    }), g(this, "handleToggleEditing", e => {
      this.setState({
        editingPath: e
      })
    })
  }
}
t.Z = l.ZP.connectStores([o.Z], () => ({
  installationPaths: o.Z.installationPaths,
  installationPathsMetadata: o.Z.installationPathsMetadata,
  defaultInstallationPath: o.Z.defaultInstallationPath
}))(N)