t(47120), t(411104);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(392711),
  l = t.n(o),
  c = t(268146),
  d = t(442837),
  _ = t(692547),
  E = t(481060),
  u = t(570140),
  T = t(661111),
  S = t(179658),
  I = t(491428),
  N = t(225433),
  C = t(484614),
  A = t(386506),
  m = t(865427),
  O = t(802098),
  g = t(663993),
  h = t(38618),
  R = t(921801),
  p = t(857192),
  x = t(558724),
  M = t(808506),
  D = t(285952),
  f = t(154921),
  L = t(998502),
  P = t(210887),
  Z = t(601948),
  v = t(726985),
  b = t(981631),
  j = t(908442),
  U = t(309406),
  B = t(5973),
  G = t(331651),
  F = t(520076);

function V(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let y = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
  Y = [{
    value: "branch",
    label: "Branch Name"
  }, {
    value: "id",
    label: "Build ID"
  }];

function H(e) {
  return "discord_ios" in e || "discord_android" in e
}
class k extends a.Component {
  render() {
    let {
      project: e,
      overrideType: s,
      overrideId: t,
      disabled: a,
      error: i
    } = this.props;
    return (0, n.jsxs)(D.Z, {
      direction: D.Z.Direction.VERTICAL,
      className: r()(U.buildOverrideGroup, G.marginBottom20, B.card, U.row),
      children: [(0, n.jsx)(N.Z, {
        className: r()(U.removeBuildOverride, {
          [U.removeBuildOverrideDisabled]: a
        }),
        onClick: a ? void 0 : this.handleRemoveBuildOverride
      }), (0, n.jsxs)(D.Z, {
        className: G.marginBottom8,
        children: [(0, n.jsx)(D.Z.Child, {
          basis: "50%",
          children: (0, n.jsx)(E.FormItem, {
            title: "Override Type",
            className: U.item,
            children: (0, n.jsx)(E.SingleSelect, {
              options: Y,
              onChange: this.handleOverrideTypeChanged,
              value: s,
              isDisabled: a
            })
          })
        }), (0, n.jsx)(D.Z.Child, {
          basis: "50%",
          children: (0, n.jsx)(E.FormItem, {
            title: "branch" === s ? "Branch Name" : "Build ID",
            className: U.item,
            children: (0, n.jsx)(E.TextInput, {
              value: t,
              onChange: this.handleOverrideIdChanged,
              disabled: a
            })
          })
        })]
      }), (0, n.jsxs)(D.Z.Child, {
        children: [null != i && "" !== i && (0, n.jsx)(E.FormText, {
          className: U.item,
          style: {
            color: _.Z.unsafe_rawColors.RED_400.css
          },
          type: E.FormText.Types.DESCRIPTION,
          children: i
        }), (0, n.jsxs)(E.FormText, {
          className: U.item,
          type: E.FormText.Types.DESCRIPTION,
          children: ["This controls the build that will be served for the ", (0, n.jsx)("code", {
            children: e
          }), " project."]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), V(this, "handleRemoveBuildOverride", () => {
      this.props.onBuildOverrideRemoved(this.props.project)
    }), V(this, "handleOverrideIdChanged", e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        id: e
      })
    }), V(this, "handleOverrideTypeChanged", e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        type: e,
        id: ""
      })
    })
  }
}
class w extends a.Component {
  async refreshBuildOverrides() {
    this.setState({
      loading: !0
    });
    let e = await (0, m.Ce)();
    this.setState({
      loading: !1,
      buildOverrides: e,
      loadedBuildOverrides: l().cloneDeep(e),
      errors: {}
    })
  }
  isDirty() {
    let {
      buildOverrides: e,
      loadedBuildOverrides: s
    } = this.state;
    return !l().isEqual(e, s)
  }
  componentDidMount() {
    this.refreshBuildOverrides()
  }
  getAvailableProjects() {
    let {
      buildOverrides: e
    } = this.state;
    if (null == e) return [];
    let s = Object.keys(e);
    return l().without(y, ...s)
  }
  renderEmpty() {
    return (0, n.jsxs)(E.EmptyState, {
      theme: P.Z.theme,
      className: r()(G.marginTop40, G.marginBottom20),
      children: [(0, n.jsx)(E.EmptyStateImage, {
        darkSrc: t(770227),
        lightSrc: t(398684),
        width: 294,
        height: 192
      }), (0, n.jsx)(E.EmptyStateText, {
        children: "You have no build overrides configured."
      })]
    })
  }
  renderItems() {
    let {
      buildOverrides: e,
      saving: s,
      errors: t
    } = this.state;
    return null == e ? null : l().map(e, (e, a) => (0, n.jsx)(k, {
      project: a,
      overrideType: e.type,
      overrideId: e.id,
      disabled: s,
      error: t[a],
      onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
      onBuildOverrideRemoved: this.handleBuildOverrideRemoved
    }, a))
  }
  renderRefreshButton() {
    return !this.state.didSave || this.isDirty() ? null : (0, n.jsx)(D.Z, {
      grow: 0,
      direction: D.Z.Direction.HORIZONTAL_REVERSE,
      children: (0, n.jsx)(D.Z.Child, {
        grow: 0,
        children: (0, n.jsx)(E.Button, {
          onClick: () => location.reload(),
          color: E.Button.Colors.PRIMARY,
          children: "Reload App"
        })
      })
    })
  }
  renderLinkButton() {
    let {
      buildOverrides: e
    } = this.state;
    return null == e || 0 === Object.keys(e).length ? null : (0, n.jsx)(D.Z, {
      grow: 0,
      direction: D.Z.Direction.HORIZONTAL_REVERSE,
      children: (0, n.jsx)(D.Z.Child, {
        grow: 0,
        children: (0, n.jsx)(E.Button, {
          onClick: this.handleLinkGeneration,
          color: E.Button.Colors.BRAND,
          children: "Generate Public Link"
        })
      })
    })
  }
  renderSaveButton() {
    if (!this.isDirty()) return null;
    let {
      saving: e,
      buildOverrides: s
    } = this.state;
    return (0, n.jsxs)(D.Z, {
      grow: 0,
      direction: D.Z.Direction.HORIZONTAL_REVERSE,
      children: [(0, n.jsx)(D.Z.Child, {
        grow: 0,
        children: (0, n.jsx)(E.Button, {
          disabled: H(null != s ? s : {}),
          onClick: this.handleSaveChanges,
          submitting: e,
          color: E.Button.Colors.GREEN,
          children: "Save Build Overrides"
        })
      }), (0, n.jsx)(D.Z.Child, {
        grow: 0,
        children: (0, n.jsx)(E.Button, {
          onClick: this.handleDiscardChanges,
          disabled: e,
          color: E.Button.Colors.RED,
          children: "Discard Changes"
        })
      })]
    })
  }
  render() {
    let e;
    let {
      loading: s,
      saving: t,
      buildOverrides: a
    } = this.state;
    e = s ? (0, n.jsx)(E.Spinner, {
      className: G.marginTop20
    }) : null != a && 0 === Object.keys(a).length ? this.renderEmpty() : this.renderItems();
    let i = !t && !s && this.getAvailableProjects().length > 0,
      r = H(null != a ? a : {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, n.jsx)(E.Text, {
        color: "text-danger",
        variant: "text-md/normal",
        children: "Mobile build overrides must be generated using the desktop/web stable client for now!"
      }) : null;
    return (0, n.jsx)(R.F, {
      setting: v.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
      children: (0, n.jsxs)(E.FormSection, {
        className: G.marginTop60,
        children: [(0, n.jsxs)(D.Z, {
          className: G.marginBottom20,
          children: [(0, n.jsx)(D.Z.Child, {
            children: (0, n.jsx)(E.FormTitle, {
              tag: E.FormTitleTags.H1,
              children: "Build Overrides"
            })
          }), (0, n.jsx)(D.Z.Child, {
            grow: 0,
            children: (0, n.jsx)(E.Button, {
              size: E.ButtonSizes.SMALL,
              onClick: this.handleAddBuildOverride,
              disabled: !i,
              children: "Add Build Override"
            })
          })]
        }), (0, n.jsx)(E.FormDivider, {}), (0, n.jsxs)(D.Z, {
          direction: D.Z.Direction.VERTICAL,
          children: [r, e, (0, n.jsxs)(D.Z, {
            grow: 0,
            direction: D.Z.Direction.HORIZONTAL_REVERSE,
            children: [this.renderRefreshButton(), this.renderSaveButton(), this.renderLinkButton()]
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), V(this, "state", {
      loading: !0,
      buildOverrides: {},
      loadedBuildOverrides: {},
      errors: {},
      saving: !1,
      didSave: !1
    }), V(this, "handleAddBuildOverride", async () => {
      var e;
      let s = await (e = this.getAvailableProjects(), new Promise(s => {
        (0, E.openModal)(t => {
          let a = e => {
            t.onClose(), s(e)
          };
          return (0, n.jsxs)(E.ModalRoot, {
            ...t,
            "aria-label": "Choose A Project to Override",
            children: [(0, n.jsx)(E.ModalHeader, {
              separator: !1,
              children: (0, n.jsx)(E.Heading, {
                variant: "heading-lg/semibold",
                children: "Choose A Project to Override"
              })
            }), (0, n.jsx)(E.ModalContent, {
              children: (0, n.jsx)("div", {
                className: U.buildOverrideList,
                children: e.map(e => (0, n.jsx)(E.Button, {
                  value: e,
                  color: E.Button.Colors.GREEN,
                  onClick: () => a(e),
                  children: e
                }, e))
              })
            }), (0, n.jsx)(E.ModalFooter, {
              children: (0, n.jsx)(E.Button, {
                color: E.Button.Colors.PRIMARY,
                look: E.Button.Looks.LINK,
                onClick: () => a(null),
                children: "Nevermind"
              })
            })]
          })
        })
      }));
      if (null == s) return;
      let t = {
        ...this.state.buildOverrides,
        [s]: {
          type: "branch",
          id: ""
        }
      };
      this.setState({
        buildOverrides: t
      })
    }), V(this, "handleBuildOverrideUpdated", (e, s) => {
      let {
        buildOverrides: t
      } = this.state, n = {
        ...null != t ? t[e] : {},
        ...s
      }, a = {
        ...this.state.buildOverrides,
        [e]: n
      };
      this.setState({
        buildOverrides: a
      })
    }), V(this, "handleBuildOverrideRemoved", e => {
      let s = {
        ...this.state.buildOverrides
      };
      delete s[e], this.setState({
        buildOverrides: s
      })
    }), V(this, "handleDiscardChanges", () => {
      this.setState({
        buildOverrides: l().cloneDeep(this.state.loadedBuildOverrides),
        errors: {},
        didSave: !1
      })
    }), V(this, "handleSaveChanges", async () => {
      let {
        buildOverrides: e
      } = this.state;
      if (null == e) return;
      this.setState({
        saving: !0
      });
      let s = await (0, A.aD)(e);
      if (200 === s.status) {
        let e = s.body;
        this.setState({
          buildOverrides: e,
          loadedBuildOverrides: l().cloneDeep(e),
          errors: {},
          didSave: !0,
          saving: !1
        })
      } else if (400 === s.status) {
        let e = s.body;
        this.setState({
          errors: e,
          saving: !1,
          didSave: !1
        })
      } else this.setState({
        saving: !1,
        didSave: !1
      })
    }), V(this, "handleLinkGeneration", () => {
      let {
        buildOverrides: e
      } = this.state;
      (0, E.openModal)(s => (0, n.jsx)(W, {
        ...s,
        buildOverrides: e
      }))
    })
  }
}
class W extends a.Component {
  isMobile() {
    var e;
    return H(null !== (e = this.props.buildOverrides) && void 0 !== e ? e : {})
  }
  renderSettingsForm() {
    let {
      ttlSeconds: e,
      releaseChannel: s,
      userIdEntry: t,
      userIdEntryError: a,
      allowedVersions: i,
      allowedVersionEntry: r,
      allowedVersionEntryError: o,
      allowLoggedOut: l,
      experiments: c,
      experimentsError: d
    } = this.state, _ = j.S6.find(s => s.value === e), u = i.map(e => ({
      label: e,
      value: e
    }));
    return (0, n.jsxs)(D.Z.Child, {
      basis: "70%",
      children: [(0, n.jsx)(E.FormItem, {
        title: "Expire After",
        className: G.marginBottom20,
        children: (0, n.jsx)(E.SingleSelect, {
          value: null != _ ? _.value : null,
          options: j.S6,
          onChange: this.handleExpirationChange
        })
      }), this.isMobile() ? null : (0, n.jsx)(E.FormItem, {
        title: "Release Channel",
        className: G.marginBottom20,
        children: (0, n.jsx)(E.SingleSelect, {
          value: s,
          options: j.F$,
          onChange: this.handleReleaseChannelChange
        })
      }), this.isMobile() ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(E.FormItem, {
          title: "Add allowed app version (required)",
          className: G.marginBottom20,
          children: (0, n.jsxs)(D.Z, {
            direction: D.Z.Direction.HORIZONTAL,
            children: [(0, n.jsx)(D.Z.Child, {
              wrap: !0,
              basis: "90%",
              children: (0, n.jsx)(E.TextInput, {
                autoFocus: !0,
                value: r,
                onKeyPress: this.handleAllowedVersionEnter,
                error: o,
                onChange: this.handleAllowedVersionEntry,
                placeholder: "Example: 34"
              })
            }), (0, n.jsx)(E.Button, {
              onClick: this.handleAddAllowedVersion,
              children: "Add"
            })]
          })
        }), (0, n.jsx)(E.FormItem, {
          title: "Remove allowed app version",
          className: G.marginBottom20,
          children: (0, n.jsx)(E.SingleSelect, {
            value: null,
            options: u,
            onChange: this.handleRemoveAllowedVersion,
            isDisabled: 0 === i.length
          })
        })]
      }) : null, this.isMobile() ? null : (0, n.jsx)(n.Fragment, {
        children: (0, n.jsxs)(E.FormItem, {
          title: "Limit to User IDs (optional)",
          className: G.marginBottom20,
          children: [(0, n.jsx)(D.Z, {
            direction: D.Z.Direction.HORIZONTAL,
            children: (0, n.jsx)(D.Z.Child, {
              wrap: !0,
              basis: "90%",
              children: (0, n.jsx)(E.TextArea, {
                value: t,
                error: a,
                onBlur: () => this.setUserEntryError(""),
                onChange: this.handleUserIDEntry
              })
            })
          }), (0, n.jsx)(E.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: G.marginTop8,
            children: "User IDs can be separated by whitespace or commas."
          })]
        })
      }), (0, n.jsxs)(E.FormItem, {
        title: "Client Experiment Override",
        className: G.marginBottom20,
        children: [(0, n.jsx)(D.Z, {
          direction: D.Z.Direction.HORIZONTAL,
          children: (0, n.jsx)(D.Z.Child, {
            wrap: !0,
            basis: "90%",
            children: (0, n.jsx)(E.TextArea, {
              value: c,
              error: d,
              onChange: this.handleExperiments,
              placeholder: '{"2022-01_threads":1}'
            })
          })
        }), (0, n.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: G.marginTop8,
          children: "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well."
        })]
      }), (0, n.jsx)(E.FormSwitch, {
        onChange: this.handleAllowLoggedOut,
        value: l,
        children: "Allow logged out users"
      })]
    })
  }
  renderPayloadBlock() {
    let e = JSON.stringify(this.generatePayload(), null, 2),
      s = () => e,
      a = (0, n.jsx)(g.GI, {
        createPromise: () => Promise.resolve().then(t.bind(t, 364964)),
        webpackId: 364964,
        renderFallback: s,
        render: t => {
          let a = t.highlight("json", e, !0);
          return null == a ? s() : (0, n.jsx)("code", {
            className: "hljs scroller ".concat(a.language, " ").concat(F.scrollbarGhost, " ").concat(U.codebox),
            dangerouslySetInnerHTML: {
              __html: a.value
            }
          })
        }
      });
    return (0, n.jsx)(D.Z.Child, {
      children: (0, n.jsx)(E.Card, {
        children: (0, n.jsx)("pre", {
          children: a
        })
      })
    })
  }
  renderLinkForm() {
    let {
      statusTextColor: e,
      statusText: s,
      publicLink: t
    } = this.state;
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(E.FormItem, {
        title: "Signed Link",
        children: (0, n.jsxs)(D.Z, {
          children: [(0, n.jsx)(D.Z.Child, {
            wrap: !0,
            basis: "75%",
            children: (0, n.jsx)(C.Z, {
              value: t
            })
          }), (0, n.jsx)(E.Button, {
            onClick: this.handleGenerateLink,
            children: "Generate Link"
          })]
        })
      }), (0, n.jsx)(f.Z, {
        color: e,
        className: "".concat(G.marginBottom8, " ").concat(G.marginTop8),
        children: s
      })]
    })
  }
  render() {
    let {
      onClose: e,
      transitionState: s
    } = this.props;
    return (0, n.jsxs)(E.ModalRoot, {
      size: E.ModalSize.LARGE,
      transitionState: s,
      "aria-label": "Generate Public Build Override Link",
      children: [(0, n.jsxs)(E.ModalHeader, {
        justify: D.Z.Justify.BETWEEN,
        separator: !1,
        children: [(0, n.jsx)(E.Heading, {
          variant: "heading-lg/semibold",
          children: "Generate Public Build Override Link"
        }), (0, n.jsx)(E.ModalCloseButton, {
          onClick: e
        })]
      }), (0, n.jsxs)(E.ModalContent, {
        children: [(0, n.jsxs)(D.Z, {
          children: [this.renderSettingsForm(), this.renderPayloadBlock()]
        }), this.renderLinkForm()]
      })]
    })
  }
  constructor(...e) {
    super(...e), V(this, "state", {
      ttlSeconds: 3600,
      releaseChannel: "all",
      userIds: new Set,
      userIdEntry: "",
      userIdEntryError: null,
      allowedVersions: [],
      allowedVersionEntry: "",
      allowedVersionEntryError: null,
      publicLink: " ",
      statusText: null,
      statusTextColor: f.Z.Colors.STATUS_RED,
      allowLoggedOut: !1
    }), V(this, "setUserEntryError", e => {
      this.setState({
        userIdEntryError: e
      })
    }), V(this, "setStatusMessage", (e, s) => {
      this.setState({
        statusText: e,
        statusTextColor: null != s ? s : f.Z.Colors.STATUS_RED
      })
    }), V(this, "handleUserIDEntry", e => {
      if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
      let s = new Set(e.split(/[,\s]+/).filter(Boolean));
      this.setState({
        userIdEntry: e,
        userIds: s
      })
    }), V(this, "setAllowedVersionError", e => {
      this.setState({
        allowedVersionEntryError: e
      })
    }), V(this, "handleAllowedVersionEntry", e => {
      this.setState({
        allowedVersionEntry: e
      })
    }), V(this, "handleAllowedVersionEnter", e => {
      e.charCode === b.yXg.ENTER && this.handleAddAllowedVersion()
    }), V(this, "handleAddAllowedVersion", () => {
      let {
        allowedVersions: e,
        allowedVersionEntry: s
      } = this.state;
      return 0 === (s = s.trim()).length ? this.setAllowedVersionError("Enter a valid version number!") : e.indexOf(s) >= 0 ? this.setAllowedVersionError("You already added that version!") : void this.setState({
        allowedVersions: [...e, s],
        allowedVersionEntry: "",
        allowedVersionEntryError: ""
      })
    }), V(this, "handleRemoveAllowedVersion", e => {
      let {
        allowedVersions: s
      } = this.state;
      s = s.filter(s => s !== e), this.setState({
        allowedVersions: s
      })
    }), V(this, "handleAllowLoggedOut", e => {
      this.setState({
        allowLoggedOut: e
      })
    }), V(this, "handleExpirationChange", e => {
      this.setState({
        ttlSeconds: e
      })
    }), V(this, "handleReleaseChannelChange", e => {
      this.setState({
        releaseChannel: e
      })
    }), V(this, "handleExperiments", e => {
      if (0 === e.trim().length) {
        this.setState({
          experimentsError: void 0
        });
        return
      }
      try {
        let s = JSON.parse(e);
        for (let e in s) {
          if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/)) {
            this.setState({
              experimentsError: "".concat(e, " is an invalid experiment name")
            });
            return
          }
          if ("number" != typeof s[e]) {
            this.setState({
              experimentsError: "".concat(e, " has an invalid bucket override")
            });
            return
          }
        }
      } catch (e) {
        this.setState({
          experimentsError: "Unable to parse experiments ".concat(e.message)
        });
        return
      }
      this.setState({
        experiments: e,
        experimentsError: void 0
      })
    }), V(this, "generatePayload", () => ({
      overrides: this.props.buildOverrides,
      meta: {
        release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
        ttl_seconds: this.state.ttlSeconds,
        user_ids: Array.from(this.state.userIds),
        allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
        allow_logged_out: this.state.allowLoggedOut,
        experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments)
      }
    })), V(this, "handleGenerateLink", async () => {
      if (this.isMobile() && 0 === this.state.allowedVersions.length) {
        this.setAllowedVersionError("You must add at least one allowed version for iOS");
        return
      }
      this.setStatusMessage(null);
      let e = this.generatePayload(),
        s = await (0, A.M3)(e);
      !1 !== s.error ? this.setStatusMessage(JSON.stringify(s.error), f.Z.Colors.STATUS_RED) : (this.setState({
        publicLink: s.url.toString()
      }), 0 === e.meta.user_ids.length && this.setStatusMessage("Warning! No users added to the whitelist! This link could be used by anyone to override their build.", f.Z.Colors.STATUS_YELLOW))
    })
  }
}

function K() {
  throw Error("Send help")
}

function z() {
  let [e, s] = a.useState(!1), [t, i] = a.useState("");
  return (a.useEffect(() => {
    (async () => {
      i(await (0, M.Y)())
    })()
  }, []), e) ? {} : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: [U.buttonsContainer, G.marginBottom20].join(" "),
      children: [(0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
        children: (0, n.jsx)(E.Button, {
          onClick: () => window.open(t, "_blank"),
          disabled: "" === t,
          children: "Open Overlay"
        })
      }), (0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
        children: (0, n.jsx)(E.Button, {
          onClick: () => {
            h.Z.getSocket().close(), h.Z.getSocket().connect()
          },
          children: "Reset Socket"
        })
      }), (0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
        children: (0, n.jsx)(E.Button, {
          onClick: () => {
            u.Z.dispatch({
              type: "CLEAR_CACHES",
              reason: "Requested by user",
              preventWritingCachesAgainThisSession: !0,
              resetSocket: !0
            })
          },
          children: "Clear Caches"
        })
      })]
    }), (0, n.jsx)(R.F, {
      setting: v.s6.DEVELOPER_OPTIONS_CRASHES,
      children: (0, n.jsx)(E.FormSection, {
        title: "Crashes",
        tag: E.FormTitleTags.H1,
        children: (0, n.jsxs)("div", {
          className: U.buttonsContainer,
          children: [(0, n.jsx)(E.SingleSelect, {
            value: void 0,
            options: [{
              value: void 0,
              label: "Native libdiscord crash"
            }, {
              value: 0,
              label: "Abort()"
            }, {
              value: 1,
              label: "SIGSEGV()"
            }, {
              value: 2,
              label: "EXCEPTION_ACCESS_VIOLATION"
            }, {
              value: 3,
              label: "RaiseFailFastException"
            }, {
              value: 4,
              label: "Out of Memory"
            }],
            onChange: e => null != e && L.ZP.crash(e)
          }), (0, n.jsx)(E.SingleSelect, {
            value: void 0,
            options: [{
              value: void 0,
              label: "Native JS crash"
            }, {
              value: c.Xo.RendererProcessDelayed,
              label: "Delayed exception in renderer process"
            }, {
              value: c.Xo.RendererProcess,
              label: "Exception in renderer process"
            }, {
              value: c.Xo.MainProcess,
              label: "Exception in main process"
            }],
            onChange: e => {
              var s;
              return null != e ? (s = e, void L.ZP.triggerJSException(s)) : void 0
            }
          }), (0, n.jsx)(E.Button, {
            onClick: () => s(!0),
            children: "React Crash"
          }), (0, n.jsx)(E.Button, {
            onClick: K,
            children: "onClick Throw"
          })]
        })
      })
    })]
  })
}
let Q = d.ZP.connectStores([p.default], () => ({
  isTracingRequests: p.default.isTracingRequests,
  isForcedCanary: p.default.isForcedCanary,
  isLoggingGatewayEvents: p.default.isLoggingGatewayEvents,
  isLoggingOverlayEvents: p.default.isLoggingOverlayEvents,
  isLoggingAnalyticsEvents: p.default.isLoggingAnalyticsEvents,
  isAxeEnabled: p.default.isAxeEnabled,
  isSourceMapsEnabled: p.default.sourceMapsEnabled,
  isAnalyticsDebuggerEnabled: p.default.isAnalyticsDebuggerEnabled,
  isIdleStatusIndicatorEnabled: p.default.isIdleStatusIndicatorEnabled,
  appDirectoryIncludesInactiveCollections: p.default.appDirectoryIncludesInactiveCollections
}))(e => {
  let {
    isTracingRequests: s,
    isForcedCanary: t,
    isLoggingGatewayEvents: a,
    isLoggingOverlayEvents: i,
    isLoggingAnalyticsEvents: r,
    isAxeEnabled: o,
    isSourceMapsEnabled: l,
    isAnalyticsDebuggerEnabled: c,
    isIdleStatusIndicatorEnabled: d,
    appDirectoryIncludesInactiveCollections: _
  } = e;
  return (0, n.jsx)(R.F, {
    setting: v.s6.DEVELOPER_OPTIONS_FLAGS,
    children: (0, n.jsxs)(E.FormSection, {
      title: "Developer Flags",
      tag: E.FormTitleTags.H1,
      children: [(0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
        children: (0, n.jsx)(E.FormSwitch, {
          value: s,
          note: "Force trace all client requests with APM",
          onChange: e => (0, S.y)({
            trace: e
          }),
          children: "Enable Tracing Requests"
        })
      }), (0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
        children: (0, n.jsx)(E.FormSwitch, {
          value: t,
          note: "Force all API requests to canary instances",
          onChange: e => (0, S.y)({
            canary: e
          }),
          children: "Enable Forced Canary"
        })
      }), (0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
        children: (0, n.jsx)(E.FormSwitch, {
          value: a,
          note: "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
          onChange: e => (0, S.y)({
            logGatewayEvents: e
          }),
          children: "Enable Logging of Gateway Events to Console"
        })
      }), (0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
        children: (0, n.jsx)(E.FormSwitch, {
          value: i,
          note: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
          onChange: e => (0, S.y)({
            logOverlayEvents: e
          }),
          children: "Enable Logging of Overlay RPC Events & Commands"
        })
      }), (0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
        children: (0, n.jsx)(E.FormSwitch, {
          value: r,
          note: "Logs all analytics events to the developer console",
          onChange: e => (0, S.y)({
            logAnalyticsEvents: e
          }),
          children: "Enable Logging of Analytics Events"
        })
      }), (0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
        children: (0, n.jsx)(E.FormSwitch, {
          value: l,
          note: "Only enable on devices you trust.",
          onChange: e => (0, S.y)({
            sourceMapsEnabled: e
          }),
          children: "Enable source maps to be loaded on this client"
        })
      }), (0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
        children: (0, n.jsx)(E.FormSwitch, {
          value: c,
          note: "Displays a floating debugger with viewed impressions",
          onChange: e => (0, S.y)({
            analyticsDebuggerEnabled: e
          }),
          children: "Enable standard analytics debugger view"
        })
      }), (0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
        children: (0, n.jsx)(E.FormSwitch, {
          value: d,
          note: "Displays a floating idle status indicator",
          onChange: e => (0, S.y)({
            idleStatusIndicatorEnabled: e
          }),
          children: "Enable idle status indicator"
        })
      }), (0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
        children: (0, n.jsx)(E.FormSwitch, {
          value: o,
          note: "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development",
          onChange: e => (0, S.y)({
            axeEnabled: e
          }),
          children: "Enable Accessibility Auditing"
        })
      }), (0, n.jsx)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
        children: (0, n.jsx)(E.FormSwitch, {
          value: _,
          note: "In App Directory, include inactive collections on the homepage. Use this to preview changes to collections before publishing them.",
          onChange: e => (0, S.y)({
            appDirectoryIncludesInactiveCollections: e
          }),
          children: "Preview Unpublished Collections on App Directory Homepage"
        })
      }), (0, n.jsxs)(R.F, {
        setting: v.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        children: [(0, n.jsx)("div", {
          className: [U.buttonsContainer, G.marginBottom20].join(" "),
          children: (0, n.jsx)(Z.S, {})
        }), (0, n.jsx)(E.FormDivider, {
          className: U.divider
        })]
      })]
    })
  })
});

function X() {
  let e = (0, d.e7)([x.Z], () => x.Z.getSurveyOverride()),
    [s, t] = a.useState(null != e ? e : "");
  return (0, n.jsx)(R.F, {
    setting: v.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
    children: (0, n.jsxs)(E.FormSection, {
      tag: E.FormTitleTags.H1,
      title: "Survey Override",
      className: G.marginTop60,
      children: [(0, n.jsx)(E.FormTitle, {
        children: "Copy the ID of the Survey you want to test:"
      }), (0, n.jsxs)("form", {
        className: U.surveyOverride,
        onSubmit: e => {
          e.preventDefault(), s.length > 0 ? I.Xq(s) : I.Xq(null)
        },
        children: [(0, n.jsx)(E.TextInput, {
          className: U.surveyOverrideInput,
          value: s,
          onChange: t
        }), (0, n.jsx)(E.Button, {
          type: "submit",
          children: "Save Override"
        })]
      })]
    })
  })
}

function q() {
  var e;
  let s = (0, d.e7)([O.Z], () => O.Z.overrideId()),
    [t, i] = a.useState(null !== (e = O.Z.overrideId()) && void 0 !== e ? e : "");
  return (0, n.jsx)(R.F, {
    setting: v.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
    children: (0, n.jsxs)(E.FormSection, {
      tag: E.FormTitleTags.H1,
      title: "Changelog Override",
      className: G.marginTop60,
      children: [(0, n.jsx)(E.FormTitle, {
        children: "Enter the ID of the changelog you want to test"
      }), (0, n.jsxs)("div", {
        className: U.surveyOverride,
        children: [(0, n.jsx)(E.TextInput, {
          className: U.surveyOverrideInput,
          value: t,
          onChange: i
        }), (0, n.jsx)(E.Button, {
          onClick: () => {
            "" === t ? T.Z.setChangelogOverride(null) : T.Z.setChangelogOverride(t)
          },
          disabled: s === t,
          children: "Update Changelog"
        })]
      })]
    })
  })
}
class J extends a.PureComponent {
  render() {
    return (0, n.jsxs)(a.Fragment, {
      children: [(0, n.jsx)(Q, {}), (0, n.jsx)(z, {}), (0, n.jsx)(X, {}), (0, n.jsx)(q, {}), (0, n.jsx)(w, {})]
    })
  }
}
s.Z = J