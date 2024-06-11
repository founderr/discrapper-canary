"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
  }
}), s("47120"), s("653041");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("392711"),
  o = s("442837"),
  d = s("481060"),
  u = s("239091"),
  c = s("749210"),
  E = s("493544"),
  _ = s("479531"),
  I = s("210887"),
  T = s("246946"),
  S = s("594174"),
  f = s("154921"),
  m = s("251625"),
  N = s("226951"),
  g = s("51144"),
  h = s("434404"),
  C = s("372454"),
  R = s("999382"),
  x = s("84613"),
  L = s("740903"),
  O = s("1080"),
  p = s("981631"),
  A = s("689938"),
  M = s("939056"),
  D = s("164149");

function v(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function j(e) {
  let {
    transitionState: t,
    guild: s,
    user: n,
    ban: i,
    hideDiscriminator: r,
    onClose: o
  } = e, [u, E] = l.useState(!1), [I, T] = l.useState(null);
  async function S() {
    if (null != s) {
      T(null), E(!0);
      try {
        await c.default.unbanUser(s.id, n.id), o()
      } catch (e) {
        T(new _.default(e)), E(!1)
      }
    }
  }
  return (0, a.jsxs)(d.ModalRoot, {
    className: M.bannedUserModal,
    transitionState: t,
    children: [(0, a.jsxs)(d.ModalHeader, {
      className: M.header,
      separator: !1,
      children: [(0, a.jsx)(f.default, {
        size: f.default.Sizes.SIZE_24,
        className: M.userUsername,
        children: g.default.getUserTag(n, {
          mode: "username",
          identifiable: r ? "never" : "always"
        })
      }), r || n.isPomelo() ? null : (0, a.jsxs)(f.default, {
        size: f.default.Sizes.SIZE_24,
        className: M.userDiscrim,
        children: ["#", n.discriminator]
      })]
    }), (0, a.jsxs)(d.ModalContent, {
      className: M.content,
      children: [(0, a.jsx)(d.Text, {
        className: M.reasonHeader,
        variant: "text-xs/normal",
        children: A.default.Messages.BAN_REASON
      }), (0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: null != i.reason && "" !== i.reason ? i.reason : A.default.Messages.NO_BAN_REASON
      }), null != I ? (0, a.jsx)(d.Text, {
        className: M.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: I.getAnyErrorMessage()
      }) : null]
    }), (0, a.jsxs)(d.ModalFooter, {
      className: M.footer,
      children: [(0, a.jsx)(d.Button, {
        onClick: S,
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.RED,
        submitting: u,
        children: A.default.Messages.REVOKE_BAN
      }), (0, a.jsx)(d.Button, {
        onClick: o,
        children: A.default.Messages.DONE
      })]
    })]
  })
}
class G extends l.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: t,
      guild: s
    } = this.props;
    return (0, a.jsxs)(d.Clickable, {
      className: i()(M.bannedUser, D.card),
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, a.jsx)(d.Avatar, {
        src: e.getAvatarURL(null == s ? void 0 : s.id, 40),
        "aria-label": e.username,
        size: d.AvatarSizes.SIZE_40,
        className: M.bannedUserAvatar
      }), (0, a.jsxs)("div", {
        className: M.username,
        children: [g.default.getUserTag(e, {
          mode: "username",
          identifiable: t ? "never" : "always"
        }), !t && !e.isPomelo() && (0, a.jsxs)("span", {
          className: M.discrim,
          children: ["#", e.discriminator]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), v(this, "handleShowModal", () => {
      let {
        guild: e,
        user: t,
        hideDiscriminator: s,
        ban: l
      } = this.props;
      (0, d.openModal)(n => (0, a.jsx)(j, {
        ...n,
        guild: e,
        user: t,
        ban: l,
        hideDiscriminator: s
      }))
    }), v(this, "handleContextMenu", e => {
      (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.e("23835").then(s.bind(s, "768079"));
        return t => (0, a.jsx)(e, {
          ...t,
          user: this.props.user
        })
      })
    })
  }
}
class U extends l.PureComponent {
  makeFilter(e) {
    if (null == e || 0 === e.length) return e => null != e;
    {
      let t = RegExp("^".concat(N.default.escape(e)), "i");
      return s => null != s && (s.id === e || t.test(s.username))
    }
  }
  render() {
    let {
      bans: e,
      guild: t,
      searchQuery: s
    } = this.props;
    if (null == t) return null;
    let l = this.getSortedBans(e, s);
    return (0, a.jsx)(E.ListContentScroller, {
      sections: [Math.max(1, l.length)],
      sectionHeight: this.getSectionHeight,
      renderSection: this.renderSection,
      rowHeight: this.getRowHeight,
      renderRow: this.renderRow
    })
  }
  handleModerationClick() {
    h.default.setSection(p.GuildSettingsSections.SAFETY), (0, x.setSafetyPage)(L.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION)
  }
  handleQueryChange(e) {
    h.default.setSearchQuery(e)
  }
  handleQueryClear() {
    h.default.setSearchQuery("")
  }
  constructor(...e) {
    super(...e), v(this, "getSortedBans", (0, m.cachedFunction)((e, t) => {
      if (null == e) return [];
      let s = this.makeFilter(t),
        a = [];
      for (let t of e.keys()) {
        let e = S.default.getUser(t);
        null != e && s(e) && a.push(e)
      }
      return a.sort((e, t) => e.username.localeCompare(t.username))
    })), v(this, "getRowHeight", (e, t) => {
      var s;
      if (e > 0) return 0;
      let {
        bans: a,
        searchQuery: l
      } = this.props, n = this.getSortedBans(a, l);
      if (0 === n.length && 1 === t) return 56;
      let i = n[t],
        r = null == a ? void 0 : a.get(null !== (s = null == i ? void 0 : i.id) && void 0 !== s ? s : "");
      return null == i || null == r ? 0 : 56
    }), v(this, "renderRow", e => {
      var t;
      let {
        section: s,
        row: l
      } = e, {
        bans: n,
        streamerMode: i,
        guild: r,
        searchQuery: o
      } = this.props;
      if (s > 0) return null;
      if (null == n && 0 === l) return (0, a.jsx)(d.Spinner, {
        className: M.spinner,
        type: d.Spinner.Type.SPINNING_CIRCLE
      }, "spinner");
      let u = this.getSortedBans(n, o)[l],
        c = null == n ? void 0 : n.get(null !== (t = null == u ? void 0 : u.id) && void 0 !== t ? t : "");
      if (null != u && null != c) return (0, a.jsx)(G, {
        user: u,
        ban: c,
        hideDiscriminator: i,
        guild: r
      }, u.id)
    }), v(this, "getSectionHeight", e => {
      if (e > 0) return 0;
      let {
        bans: t
      } = this.props;
      return null == t ? 462 : 120
    }), v(this, "renderSection", () => {
      var e;
      let t;
      let {
        bans: l,
        theme: n,
        searchQuery: i
      } = this.props;
      null == l ? t = null : (null == l ? void 0 : l.size) === 0 && (t = (0, a.jsxs)(d.EmptyState, {
        theme: n,
        className: M.emptyState,
        children: [(0, a.jsx)(d.EmptyStateImage, {
          darkSrc: s("532747"),
          lightSrc: s("433466"),
          width: 256,
          height: 212
        }), (0, a.jsx)(d.EmptyStateText, {
          note: A.default.Messages.BANS_NO_USERS_BANNED,
          style: {
            maxWidth: 300
          },
          children: A.default.Messages.NO_BANS
        })]
      }));
      let r = null !== (e = null == l ? void 0 : l.size) && void 0 !== e ? e : 0;
      return (0, a.jsxs)(d.FormSection, {
        tag: d.FormTitleTags.H1,
        title: A.default.Messages.BANS_HEADER.format({
          bans: r
        }),
        children: [(0, a.jsxs)("div", {
          className: M.settingsHeader,
          children: [(0, a.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: M.description,
            children: A.default.Messages.BANS_HINT.format({
              onModerationClick: this.handleModerationClick
            })
          }), null == t && (0, a.jsx)(d.SearchBar, {
            className: M.searchBar,
            query: null != i ? i : "",
            placeholder: A.default.Messages.BANS_SEARCH_PLACEHOLDER,
            "aria-label": A.default.Messages.BANS_SEARCH_PLACEHOLDER,
            onChange: this.handleQueryChange,
            onClear: this.handleQueryClear
          })]
        }), (0, a.jsx)(d.FormDivider, {
          style: {
            marginBottom: -1
          }
        }), t]
      }, "bans-header")
    })
  }
}
let P = o.default.connectStores([R.default, I.default, T.default], () => {
  let {
    bans: e,
    guild: t,
    searchQuery: s
  } = R.default.getProps();
  return {
    searchQuery: null != s ? s : "",
    bans: e,
    guild: t,
    theme: I.default.theme,
    streamerMode: T.default.hidePersonalInformation
  }
})(U);

function b() {
  var e;
  let {
    guild: t
  } = (0, o.useStateFromStores)([R.default], () => R.default.getProps(), [], r.isEqual), {
    enabled: s
  } = C.GuildSettingsBansNewExperiment.useExperiment({
    guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : p.EMPTY_STRING_SNOWFLAKE_ID,
    location: "4d6318_1"
  }, {
    autoTrackExposure: !0
  });
  return s ? (0, a.jsx)(O.default, {}) : (0, a.jsx)(P, {})
}