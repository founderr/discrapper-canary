"use strict";
n.r(t), n.d(t, {
  getAutocompleteRowId: function() {
    return b
  },
  getAutocompleteTitleId: function() {
    return G
  }
}), n("411104"), n("47120");
var i, r = n("735250"),
  a = n("470079"),
  s = n("120356"),
  o = n.n(s),
  l = n("392711"),
  u = n.n(l),
  d = n("924826"),
  _ = n("481060"),
  c = n("607070"),
  E = n("895924"),
  I = n("237375"),
  T = n("342687"),
  f = n("933557"),
  S = n("471445"),
  h = n("511618"),
  A = n("926491"),
  m = n("378233"),
  N = n("430824"),
  p = n("699516"),
  O = n("594174"),
  R = n("768581"),
  C = n("51144"),
  g = n("508688"),
  L = n("286908"),
  v = n("377087"),
  D = n("981631"),
  M = n("185923"),
  y = n("689938"),
  P = n("580384");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
  return null != e ? "autocomplete-".concat(e) : null
}

function G(e) {
  return "autocomplete-".concat(e, "-title")
}
let w = a.createContext(null);
class k extends a.PureComponent {
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
        index: a,
        selected: s
      }
    } = this, l = this.isSelectable();
    return (0, r.jsx)(_.Clickable, {
      ...e,
      className: o()(P.clickable, i, n),
      id: null !== (t = b(a)) && void 0 !== t ? t : void 0,
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
      "aria-selected": l && s,
      children: (0, r.jsx)("div", {
        className: P.base,
        children: this.renderContent()
      })
    })
  }
  render() {
    let {
      index: e
    } = this.props;
    return this.isSelectable() ? (0, r.jsx)(d.ListNavigatorItem, {
      id: "".concat(e),
      children: e => this.renderClickable(e)
    }) : this.renderClickable()
  }
  constructor(e) {
    super(e), U(this, "selectable", !0), U(this, "layoutClass", P.autocompleteRowVertical), U(this, "handleMouseEnter", () => {
      let {
        onHover: e,
        index: t,
        selected: n
      } = this.props;
      null == e || n || "number" != typeof t || e(t)
    }), U(this, "handleClick", e => {
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
class B extends(i = a.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      innerClassName: n,
      id: i,
      ...s
    } = this.props;
    return a.Children.count(e) > 0 ? (0, r.jsx)(w.Provider, {
      value: {
        id: null != i ? i : ""
      },
      children: (0, r.jsx)("div", {
        className: o()(P.autocomplete, t),
        children: (0, r.jsx)("div", {
          className: o()(P.autocompleteInner, n),
          ...s,
          children: e
        })
      })
    }) : null
  }
}
U(B, "Generic", class e extends k {
  renderContent() {
    let {
      text: e,
      description: t
    } = this.props;
    return (0, r.jsxs)(g.AutocompleteRowContent, {
      children: [(0, r.jsx)(g.AutocompleteRowContentPrimary, {
        children: (0, r.jsx)(g.AutocompleteRowHeading, {
          children: e
        })
      }), null != t ? (0, r.jsx)(g.AutocompleteRowContentSecondary, {
        children: t
      }) : null]
    })
  }
}), U(B, "Loading", function(e) {
  let t = a.useMemo(() => u().random(60, 120), []);
  return (0, r.jsx)("div", {
    className: P.base,
    "aria-busy": !0,
    children: (0, r.jsx)(g.AutocompleteRowContent, {
      children: (0, r.jsx)(g.AutocompleteRowContentPrimary, {
        children: (0, r.jsx)(g.AutocompleteRowHeading, {
          children: (0, r.jsx)("div", {
            className: P.autocompletePlaceholder,
            style: {
              width: t
            }
          })
        })
      })
    })
  })
}), U(B, "Title", function(e) {
  let {
    title: t,
    className: n,
    children: i
  } = e, s = a.useContext(w);
  return (0, r.jsx)("div", {
    className: P.base,
    children: (0, r.jsxs)(_.Heading, {
      id: G(s.id),
      className: o()(P.contentTitle, n),
      variant: "heading-deprecated-12/semibold",
      children: [t, i]
    })
  })
}), U(B, "Divider", class e extends k {
  renderContent() {
    let {
      className: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: o()(e, P.divider)
    })
  }
  constructor(...e) {
    super(...e), U(this, "layoutClass", P.dividerContainer), U(this, "selectable", !1)
  }
}), U(B, "User", class e extends k {
  renderContent() {
    let {
      user: e,
      nick: t,
      status: n,
      hidePersonalInformation: i,
      guildId: a
    } = this.props;
    return (0, r.jsxs)(g.AutocompleteRowContent, {
      children: [(0, r.jsx)(g.AutocompleteRowIcon, {
        children: (0, r.jsx)(_.Avatar, {
          size: _.AvatarSizes.SIZE_24,
          src: e.getAvatarURL(a, 24),
          "aria-hidden": !0,
          status: n
        })
      }), (0, r.jsx)(g.AutocompleteRowContentPrimary, {
        children: (0, r.jsx)(g.AutocompleteRowHeading, {
          children: null != t ? t : C.default.getName(e)
        })
      }), (0, r.jsxs)(g.AutocompleteRowContentSecondary, {
        children: [(0, r.jsx)("span", {
          className: P.__invalid_descriptionUsername,
          children: C.default.getUserTag(e, {
            mode: "username",
            identifiable: i ? "never" : "always"
          })
        }), i || e.isPomelo() ? null : (0, r.jsxs)("span", {
          className: P.descriptionDiscriminator,
          children: ["#", e.discriminator]
        })]
      })]
    })
  }
}), U(B, "Role", class e extends k {
  renderContent() {
    let {
      role: e,
      hideDescription: t
    } = this.props, {
      colorString: n
    } = e, i = "dot" === c.default.roleStyle, a = "username" === c.default.roleStyle && null != n ? {
      color: n
    } : void 0;
    return (0, r.jsxs)(g.AutocompleteRowContent, {
      children: [(0, r.jsx)(g.AutocompleteRowContentPrimary, {
        children: (0, r.jsxs)(g.AutocompleteRowHeading, {
          children: [i && (0, r.jsx)(_.RoleDot, {
            className: P.roleDot,
            color: n,
            tooltip: !1
          }), (0, r.jsxs)("span", {
            style: a,
            children: ["@", e.name]
          })]
        })
      }), t ? null : (0, r.jsx)(g.AutocompleteRowContentSecondary, {
        children: y.default.Messages.MENTION_USERS_WITH_ROLE
      })]
    })
  }
}), U(B, "Channel", class e extends k {
  renderContent() {
    let {
      channel: e,
      category: t
    } = this.props, n = e.type === D.ChannelTypes.GUILD_CATEGORY ? L.default : (0, S.getChannelIconComponent)(e);
    return (0, r.jsxs)(g.AutocompleteRowContent, {
      children: [null != n && (0, r.jsx)(g.AutocompleteRowIcon, {
        children: (0, r.jsx)(n, {
          className: P.icon
        })
      }), (0, r.jsx)(g.AutocompleteRowContentPrimary, {
        children: (0, r.jsx)(g.AutocompleteRowHeading, {
          children: (0, f.computeChannelName)(e, O.default, p.default)
        })
      }), null != t ? (0, r.jsx)(g.AutocompleteRowContentSecondary, {
        children: t.name
      }) : null]
    })
  }
}), U(B, "Command", class e extends k {
  renderContent() {
    let {
      command: e
    } = this.props;
    return (0, r.jsxs)(g.AutocompleteRowContent, {
      children: [(0, r.jsx)(g.AutocompleteRowIcon, {
        children: (0, r.jsx)(v.default, {
          className: P.icon,
          foreground: P.iconForeground
        })
      }), (0, r.jsx)(g.AutocompleteRowContentPrimary, {
        children: (0, r.jsx)(g.AutocompleteRowHeading, {
          children: e.name
        })
      }), (0, r.jsx)(g.AutocompleteRowContentSecondary, {
        children: e.description
      })]
    })
  }
}), U(B, "NewCommand", class e extends k {
  isSelectable() {
    return this.props.command.inputType !== E.ApplicationCommandInputType.PLACEHOLDER
  }
  renderContent() {
    let {
      command: e,
      channel: t,
      showImage: n,
      section: i,
      selected: a
    } = this.props, {
      hovered: s
    } = this.state, o = this.isSelectable();
    return e.inputType === E.ApplicationCommandInputType.PLACEHOLDER ? (0, r.jsx)(T.default, {}) : (0, r.jsx)(I.default, {
      command: e,
      channel: t,
      showImage: n,
      showOptions: s || o && a,
      section: i,
      isSelectable: o
    })
  }
}), U(B, "Emoji", class e extends k {
  renderContent() {
    let {
      emoji: e,
      sentinel: t,
      guild: n
    } = this.props, i = null != e.id || "" !== e.url ? (0, r.jsx)("img", {
      alt: "",
      className: P.emojiImage,
      src: null != e.id ? R.default.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: M.EMOJI_URL_BASE_SIZE
      }) : e.url
    }) : (0, r.jsx)("span", {
      className: P.emojiRaw,
      children: e.surrogates
    }), a = null != n ? (0, r.jsx)(g.AutocompleteRowContentSecondary, {
      children: n.name
    }) : null;
    return (0, r.jsxs)(g.AutocompleteRowContent, {
      children: [(0, r.jsx)(g.AutocompleteRowIcon, {
        children: i
      }), (0, r.jsx)(g.AutocompleteRowContentPrimary, {
        children: (0, r.jsxs)(g.AutocompleteRowHeading, {
          children: [t, e.name, t]
        })
      }), a]
    })
  }
  constructor(...e) {
    super(...e), U(this, "layoutClass", o()(P.autocompleteRowVertical, P.autocompleteRowVerticalSmall))
  }
}), U(B, "GIFIntegration", class e extends k {
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
    super(...e), U(this, "layoutClass", P.autocompleteRowHorizontal)
  }
}), U(B, "Sticker", class e extends k {
  renderContent() {
    var e, t;
    let n;
    let {
      queryMatch: i,
      renderSticker: a,
      selected: s,
      sticker: o
    } = this.props, {
      hovered: l
    } = this.state;
    return (0, m.isStandardSticker)(o) ? n = null === (e = A.default.getStickerPack(o.pack_id)) || void 0 === e ? void 0 : e.name : (0, m.isGuildSticker)(o) && (n = null === (t = N.default.getGuild(o.guild_id)) || void 0 === t ? void 0 : t.name), (0, r.jsxs)(g.AutocompleteRowContent, {
      children: [(0, r.jsx)(g.AutocompleteRowIcon, {
        children: a(o, l || !0 === s)
      }), (0, r.jsxs)(g.AutocompleteRowContentPrimary, {
        children: [(0, r.jsx)(g.AutocompleteRowHeading, {
          className: P.__invalid_stickerName,
          children: o.name
        }), null != i && (0, r.jsx)(g.AutocompleteRowSubheading, {
          children: y.default.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({
            queryMatch: i
          })
        })]
      }), null != n && (0, r.jsx)(g.AutocompleteRowContentSecondary, {
        children: n
      })]
    })
  }
  constructor(...e) {
    super(...e), U(this, "layoutClass", o()(P.autocompleteRowVertical, P.autocompleteRowVerticalSmall))
  }
}), U(B, "EmojiUpsell", class e extends k {
  renderContent() {
    return (0, r.jsx)(h.default, {
      emojis: this.props.emojis
    })
  }
}), t.default = B