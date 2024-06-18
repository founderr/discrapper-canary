"use strict";
n.d(t, {
  DJ: function() {
    return y
  },
  rp: function() {
    return U
  }
}), n(411104), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(392711),
  u = n.n(l),
  _ = n(91192),
  c = n(481060),
  d = n(607070),
  E = n(895924),
  I = n(237375),
  T = n(342687),
  h = n(933557),
  S = n(471445),
  f = n(511618),
  N = n(926491),
  A = n(378233),
  m = n(430824),
  O = n(699516),
  R = n(594174),
  p = n(768581),
  g = n(51144),
  C = n(508688),
  v = n(981631),
  L = n(185923),
  D = n(689938),
  M = n(329032);

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function y(e) {
  return null != e ? "autocomplete-".concat(e) : null
}

function U(e) {
  return "autocomplete-".concat(e, "-title")
}
let b = s.createContext(null);
class G extends s.PureComponent {
  isSelectable() {
    return this.selectable
  }
  renderContent() {
    throw Error("AutocompleteRow: renderContent must be extended")
  }
  renderClickable(e) {
    var t;
    let {
      layoutClass: n,
      props: {
        className: i,
        index: s,
        selected: o
      }
    } = this, l = this.isSelectable();
    return (0, r.jsx)(c.Clickable, {
      ...e,
      className: a()(M.clickable, i, n),
      id: null !== (t = y(s)) && void 0 !== t ? t : void 0,
      onClick: l ? this.handleClick : void 0,
      onMouseMove: l ? () => {
        this.setState({
          hovered: !0
        }), this.handleMouseEnter()
      } : void 0,
      onMouseLeave: l ? () => this.setState({
        hovered: !1
      }) : void 0,
      role: "option",
      "aria-disabled": !l,
      "aria-selected": l && o,
      children: (0, r.jsx)("div", {
        className: M.base,
        children: this.renderContent()
      })
    })
  }
  render() {
    let {
      index: e
    } = this.props;
    return this.isSelectable() ? (0, r.jsx)(_.mh, {
      id: "".concat(e),
      children: e => this.renderClickable(e)
    }) : this.renderClickable()
  }
  constructor(e) {
    super(e), P(this, "selectable", !0), P(this, "layoutClass", M.autocompleteRowVertical), P(this, "handleMouseEnter", () => {
      let {
        onHover: e,
        index: t,
        selected: n
      } = this.props;
      null == e || n || "number" != typeof t || e(t)
    }), P(this, "handleClick", e => {
      let {
        onClick: t,
        index: n
      } = this.props;
      null != t && "number" == typeof n && t(n, e)
    }), this.state = {
      hovered: !1
    }
  }
}
class w extends(i = s.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      innerClassName: n,
      id: i,
      ...o
    } = this.props;
    return s.Children.count(e) > 0 ? (0, r.jsx)(b.Provider, {
      value: {
        id: null != i ? i : ""
      },
      children: (0, r.jsx)("div", {
        className: a()(M.autocomplete, t),
        children: (0, r.jsx)("div", {
          className: a()(M.autocompleteInner, n),
          ...o,
          children: e
        })
      })
    }) : null
  }
}
P(w, "Generic", class e extends G {
  renderContent() {
    let {
      text: e,
      description: t
    } = this.props;
    return (0, r.jsxs)(C.RX, {
      children: [(0, r.jsx)(C.z5, {
        children: (0, r.jsx)(C.BR, {
          children: e
        })
      }), null != t ? (0, r.jsx)(C.dY, {
        children: t
      }) : null]
    })
  }
}), P(w, "Loading", function(e) {
  let t = s.useMemo(() => u().random(60, 120), []);
  return (0, r.jsx)("div", {
    className: M.base,
    "aria-busy": !0,
    children: (0, r.jsx)(C.RX, {
      children: (0, r.jsx)(C.z5, {
        children: (0, r.jsx)(C.BR, {
          children: (0, r.jsx)("div", {
            className: M.autocompletePlaceholder,
            style: {
              width: t
            }
          })
        })
      })
    })
  })
}), P(w, "Title", function(e) {
  let {
    title: t,
    className: n,
    children: i
  } = e, o = s.useContext(b);
  return (0, r.jsx)("div", {
    className: M.base,
    children: (0, r.jsxs)(c.Heading, {
      id: U(o.id),
      className: a()(M.contentTitle, n),
      variant: "heading-deprecated-12/semibold",
      children: [t, i]
    })
  })
}), P(w, "Divider", class e extends G {
  renderContent() {
    let {
      className: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: a()(e, M.divider)
    })
  }
  constructor(...e) {
    super(...e), P(this, "layoutClass", M.dividerContainer), P(this, "selectable", !1)
  }
}), P(w, "User", class e extends G {
  renderContent() {
    let {
      user: e,
      nick: t,
      status: n,
      hidePersonalInformation: i,
      guildId: s
    } = this.props;
    return (0, r.jsxs)(C.RX, {
      children: [(0, r.jsx)(C.Tw, {
        children: (0, r.jsx)(c.Avatar, {
          size: c.AvatarSizes.SIZE_24,
          src: e.getAvatarURL(s, 24),
          "aria-hidden": !0,
          status: n
        })
      }), (0, r.jsx)(C.z5, {
        children: (0, r.jsx)(C.BR, {
          children: null != t ? t : g.ZP.getName(e)
        })
      }), (0, r.jsxs)(C.dY, {
        children: [(0, r.jsx)("span", {
          className: M.__invalid_descriptionUsername,
          children: g.ZP.getUserTag(e, {
            mode: "username",
            identifiable: i ? "never" : "always"
          })
        }), i || e.isPomelo() ? null : (0, r.jsxs)("span", {
          className: M.descriptionDiscriminator,
          children: ["#", e.discriminator]
        })]
      })]
    })
  }
}), P(w, "Role", class e extends G {
  renderContent() {
    let {
      role: e,
      hideDescription: t
    } = this.props, {
      colorString: n
    } = e, i = "dot" === d.Z.roleStyle, s = "username" === d.Z.roleStyle && null != n ? {
      color: n
    } : void 0;
    return (0, r.jsxs)(C.RX, {
      children: [(0, r.jsx)(C.z5, {
        children: (0, r.jsxs)(C.BR, {
          children: [i && (0, r.jsx)(c.RoleDot, {
            className: M.roleDot,
            color: n,
            tooltip: !1
          }), (0, r.jsxs)("span", {
            style: s,
            children: ["@", e.name]
          })]
        })
      }), t ? null : (0, r.jsx)(C.dY, {
        children: D.Z.Messages.MENTION_USERS_WITH_ROLE
      })]
    })
  }
}), P(w, "Channel", class e extends G {
  renderContent() {
    let {
      channel: e,
      category: t
    } = this.props, n = e.type === v.d4z.GUILD_CATEGORY ? c.FolderIcon : (0, S.KS)(e);
    return (0, r.jsxs)(C.RX, {
      children: [null != n && (0, r.jsx)(C.Tw, {
        children: (0, r.jsx)(n, {
          className: M.icon
        })
      }), (0, r.jsx)(C.z5, {
        children: (0, r.jsx)(C.BR, {
          children: (0, h.F6)(e, R.default, O.Z)
        })
      }), null != t ? (0, r.jsx)(C.dY, {
        children: t.name
      }) : null]
    })
  }
}), P(w, "Command", class e extends G {
  renderContent() {
    let {
      command: e
    } = this.props;
    return (0, r.jsxs)(C.RX, {
      children: [(0, r.jsx)(C.Tw, {
        children: (0, r.jsx)(c.SlashIcon, {
          size: "xs",
          color: "currentColor",
          className: M.icon,
          colorClass: M.iconForeground
        })
      }), (0, r.jsx)(C.z5, {
        children: (0, r.jsx)(C.BR, {
          children: e.name
        })
      }), (0, r.jsx)(C.dY, {
        children: e.description
      })]
    })
  }
}), P(w, "NewCommand", class e extends G {
  isSelectable() {
    return this.props.command.inputType !== E.iw.PLACEHOLDER
  }
  renderContent() {
    let {
      command: e,
      channel: t,
      showImage: n,
      section: i,
      selected: s
    } = this.props, {
      hovered: o
    } = this.state, a = this.isSelectable();
    return e.inputType === E.iw.PLACEHOLDER ? (0, r.jsx)(T.Z, {}) : (0, r.jsx)(I.Z, {
      command: e,
      channel: t,
      showImage: n,
      showOptions: o || a && s,
      section: i,
      isSelectable: a
    })
  }
}), P(w, "Emoji", class e extends G {
  renderContent() {
    let {
      emoji: e,
      sentinel: t,
      guild: n
    } = this.props, i = null != e.id || "" !== e.url ? (0, r.jsx)("img", {
      alt: "",
      className: M.emojiImage,
      src: null != e.id ? p.ZP.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: L.$U
      }) : e.url
    }) : (0, r.jsx)("span", {
      className: M.emojiRaw,
      children: e.surrogates
    }), s = null != n ? (0, r.jsx)(C.dY, {
      children: n.name
    }) : null;
    return (0, r.jsxs)(C.RX, {
      children: [(0, r.jsx)(C.Tw, {
        children: i
      }), (0, r.jsx)(C.z5, {
        children: (0, r.jsxs)(C.BR, {
          children: [t, e.name, t]
        })
      }), s]
    })
  }
  constructor(...e) {
    super(...e), P(this, "layoutClass", a()(M.autocompleteRowVertical, M.autocompleteRowVerticalSmall))
  }
}), P(w, "GIFIntegration", class e extends G {
  renderContent() {
    let {
      width: e,
      height: t,
      src: n
    } = this.props;
    return (0, r.jsx)("img", {
      alt: "",
      src: n,
      width: e,
      height: t
    })
  }
  constructor(...e) {
    super(...e), P(this, "layoutClass", M.autocompleteRowHorizontal)
  }
}), P(w, "Sticker", class e extends G {
  renderContent() {
    var e, t;
    let n;
    let {
      queryMatch: i,
      renderSticker: s,
      selected: o,
      sticker: a
    } = this.props, {
      hovered: l
    } = this.state;
    return (0, A.jl)(a) ? n = null === (e = N.Z.getStickerPack(a.pack_id)) || void 0 === e ? void 0 : e.name : (0, A.J8)(a) && (n = null === (t = m.Z.getGuild(a.guild_id)) || void 0 === t ? void 0 : t.name), (0, r.jsxs)(C.RX, {
      children: [(0, r.jsx)(C.Tw, {
        children: s(a, l || !0 === o)
      }), (0, r.jsxs)(C.z5, {
        children: [(0, r.jsx)(C.BR, {
          className: M.__invalid_stickerName,
          children: a.name
        }), null != i && (0, r.jsx)(C.wL, {
          children: D.Z.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({
            queryMatch: i
          })
        })]
      }), null != n && (0, r.jsx)(C.dY, {
        children: n
      })]
    })
  }
  constructor(...e) {
    super(...e), P(this, "layoutClass", a()(M.autocompleteRowVertical, M.autocompleteRowVerticalSmall))
  }
}), P(w, "EmojiUpsell", class e extends G {
  renderContent() {
    return (0, r.jsx)(f.Z, {
      emojis: this.props.emojis
    })
  }
}), t.ZP = w