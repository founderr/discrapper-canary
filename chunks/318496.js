"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("222007"), s("424973");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("917351"),
  o = s.n(r),
  d = s("65597"),
  u = s("77078"),
  c = s("272030"),
  E = s("851387"),
  _ = s("599417"),
  I = s("84339"),
  f = s("841098"),
  T = s("716241"),
  S = s("685665"),
  m = s("770115"),
  N = s("102985"),
  g = s("697218"),
  h = s("941886"),
  C = s("810567"),
  R = s("124299"),
  x = s("258078"),
  L = s("599110"),
  O = s("334572"),
  p = s("158998"),
  A = s("592407"),
  M = s("900938"),
  D = s("431451"),
  v = s("772871"),
  j = s("49111"),
  G = s("782340"),
  U = s("282802");

function P(e) {
  var t;
  let {
    transitionState: s,
    guild: n,
    user: i,
    ban: r,
    hideDiscriminator: o,
    onClose: d
  } = e, [c, I] = l.useState(!1), [f, m] = l.useState(null), {
    analyticsLocations: N
  } = (0, S.default)(), g = null !== (t = null == N ? void 0 : N[0]) && void 0 !== t ? t : null;
  async function h() {
    if (null != n) {
      m(null), I(!0);
      try {
        await E.default.unbanUser(n.id, i.id), d(), L.default.track(j.AnalyticEvents.GUILD_BAN_REMOVED, {
          ...(0, T.collectGuildAnalyticsMetadata)(n.id),
          target_user_id: i.id,
          reason: r.reason,
          location: g
        })
      } catch (e) {
        m(new _.default(e)), I(!1)
      }
    }
  }
  return (0, a.jsxs)(u.ModalRoot, {
    className: U.bannedUserModal,
    transitionState: s,
    children: [(0, a.jsxs)(u.ModalHeader, {
      className: U.header,
      separator: !1,
      children: [(0, a.jsx)(x.default, {
        size: x.default.Sizes.SIZE_24,
        className: U.userUsername,
        children: p.default.getUserTag(i, {
          mode: "username",
          identifiable: o ? "never" : "always"
        })
      }), o || i.isPomelo() ? null : (0, a.jsxs)(x.default, {
        size: x.default.Sizes.SIZE_24,
        className: U.userDiscrim,
        children: ["#", i.discriminator]
      })]
    }), (0, a.jsxs)(u.ModalContent, {
      className: U.content,
      children: [(0, a.jsx)(u.Text, {
        className: U.reasonHeader,
        variant: "text-xs/normal",
        children: G.default.Messages.BAN_REASON
      }), (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: null != r.reason && "" !== r.reason ? r.reason : G.default.Messages.NO_BAN_REASON
      }), null != f ? (0, a.jsx)(u.Text, {
        className: U.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: f.getAnyErrorMessage()
      }) : null]
    }), (0, a.jsxs)(u.ModalFooter, {
      className: U.footer,
      children: [(0, a.jsx)(u.Button, {
        onClick: h,
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.RED,
        submitting: c,
        children: G.default.Messages.REVOKE_BAN
      }), (0, a.jsx)(u.Button, {
        onClick: d,
        children: G.default.Messages.DONE
      })]
    })]
  })
}
class b extends l.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: t,
      guild: s
    } = this.props, l = p.default.getGlobalName(e);
    return (0, a.jsxs)(u.Clickable, {
      className: i(U.bannedUser),
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, a.jsx)(u.Avatar, {
        src: e.getAvatarURL(null == s ? void 0 : s.id, 40),
        "aria-label": e.username,
        size: u.AvatarSizes.SIZE_40,
        className: U.bannedUserAvatar
      }), (0, a.jsxs)("div", {
        className: U.username,
        children: [p.default.getUserTag(e, {
          mode: "username",
          identifiable: t ? "never" : "always"
        }), !t && !e.isPomelo() && (0, a.jsxs)("span", {
          className: U.discrim,
          children: ["#", e.discriminator]
        }), e.isPomelo() && (0, a.jsxs)("span", {
          className: U.discrim,
          children: ["(", l, ")"]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleShowModal = () => {
      let {
        guild: e,
        user: t,
        hideDiscriminator: s,
        ban: l
      } = this.props;
      (0, u.openModal)(n => (0, a.jsx)(P, {
        ...n,
        guild: e,
        user: t,
        ban: l,
        hideDiscriminator: s
      }))
    }, this.handleContextMenu = e => {
      (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("590079").then(s.bind(s, "590079"));
        return t => (0, a.jsx)(e, {
          ...t,
          user: this.props.user
        })
      })
    }
  }
}
let B = l.forwardRef(function(e, t) {
  let {
    guild: s,
    sortedBans: n,
    bans: i
  } = e, r = (0, d.default)([N.default], () => N.default.hidePersonalInformation, []), o = l.useCallback(e => {
    var t;
    if (null == i && 0 === e) return 60;
    let s = n[e],
      a = null == i ? void 0 : i.get(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "");
    return null == s || null == a ? 0 : 60
  }, [i, n]), c = l.useCallback(e => {
    var t;
    if (null == i && 0 === e) return (0, a.jsx)(u.Spinner, {
      className: U.spinner,
      type: u.Spinner.Type.SPINNING_CIRCLE
    }, "spinner");
    let l = n[e],
      o = null == i ? void 0 : i.get(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "");
    if (null != l && null != o) return (0, a.jsx)(b, {
      user: l,
      ban: o,
      hideDiscriminator: r,
      guild: s
    }, l.id)
  }, [i, s, n, r]);
  return (0, a.jsx)(R.default, {
    role: "listbox",
    listPadding: [8, 8, 8, 8],
    rowCount: n.length,
    rowHeight: o,
    renderRow: c,
    ref: t
  })
});

function y(e) {
  let {
    guildId: t,
    storedSearchQuery: s
  } = e, [n, i] = l.useState(null != s ? s : ""), [r, o] = l.useState(!1), d = l.useCallback(() => {
    A.default.setSection(j.GuildSettingsSections.SAFETY), (0, D.setSafetyPage)(v.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION)
  }, []), c = l.useCallback(e => {
    i(e), 0 === e.trim().length && A.default.setSearchQuery(e)
  }, []), _ = l.useCallback(() => {
    i(""), A.default.setSearchQuery("")
  }, []), I = l.useCallback(async () => {
    if (0 === n.trim().length) {
      A.default.setSearchQuery(n), o(!1);
      return
    }
    if (!r) try {
      o(!0);
      let [e, s] = (0, m.splitQuery)(n), a = e[0];
      A.default.setSearchQuery(n), await E.default.searchGuildBans(t, a, s), o(!1)
    } catch (e) {
      o(!1)
    }
  }, [t, r, n]), f = l.useCallback(e => {
    "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), I())
  }, [I]);
  return (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: G.default.Messages.BANS_HEADER_NEW,
    children: [(0, a.jsx)("div", {
      className: U.settingsHeader,
      children: (0, a.jsx)(u.FormText, {
        type: u.FormTextTypes.DESCRIPTION,
        className: U.description,
        children: G.default.Messages.BANS_HINT.format({
          onModerationClick: d
        })
      })
    }), (0, a.jsxs)("div", {
      className: U.bansSearchContainer,
      children: [(0, a.jsx)(C.default, {
        className: U.searchBar,
        query: null != n ? n : "",
        placeholder: G.default.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
        "aria-label": G.default.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
        onChange: c,
        onKeyDown: f,
        onClear: _,
        size: C.default.Sizes.MEDIUM,
        isLoading: r
      }), (0, a.jsx)(u.Button, {
        color: u.Button.Colors.BRAND,
        onClick: I,
        size: u.Button.Sizes.SMALL,
        disabled: r,
        submitting: r,
        className: U.searchButton,
        children: G.default.Messages.SEARCH
      })]
    })]
  }, "bans-header")
}

function F() {
  var e, t;
  let {
    guild: n,
    searchQuery: c
  } = (0, d.default)([M.default], () => M.default.getProps(), [], r.isEqual), _ = null != c && c.trim().length > 0, T = (0, I.default)(_), S = _ !== T, [N] = (0, d.default)([M.default], () => M.default.getBans(), [], O.isVersionEqual), C = null !== (e = null == N ? void 0 : N.size) && void 0 !== e ? e : 0, R = (0, f.default)(), x = null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "", L = l.useRef(null), p = l.useCallback(e => null == e || 0 === e.length ? e => null != e : t => {
    if (null == t || 0 === e.trim().length) return !1;
    let [
      [s], a
    ] = (0, m.splitQuery)(e);
    return !!a.includes(t.id) || null != s && (!!(t.username.toLowerCase().includes(s.toLowerCase()) || null != t.globalName && t.globalName.toLowerCase().includes(s.toLowerCase())) || !1)
  }, []), A = l.useCallback((e, t, s) => {
    if (null == e || 0 === s) return [];
    let a = [];
    for (let s of e.keys()) {
      let e = g.default.getUser(s);
      null != e && p(t)(e) && a.push(e)
    }
    return a
  }, [p]), D = l.useMemo(() => A(N, c, C), [N, A, c, C]), v = null != N, j = D.length % 1e3 == 0 && D.length > 0 && v, P = 0 === D.length, [b, F] = l.useState({
    currentPage: 1,
    pageSize: 100
  });
  l.useEffect(() => {
    S && 1 !== b.currentPage && F(e => ({
      ...e,
      currentPage: 1
    }))
  }, [S, b.currentPage]);
  let H = l.useCallback(e => {
      E.default.fetchGuildBansBatch(x, 1e3, e)
    }, [x]),
    k = l.useMemo(() => o.chunk(D, b.pageSize), [b.pageSize, D]),
    w = l.useCallback(e => {
      var t, s, a;
      null === (t = L.current) || void 0 === t || t.scrollToSectionTop(0);
      let l = (e + 1) * b.pageSize,
        n = l > D.length;
      n && j && !_ && (V.current = null !== (a = null === (s = D[D.length - 1]) || void 0 === s ? void 0 : s.id) && void 0 !== a ? a : null, H(V.current)), (null != k[e - 1] || j) && F(t => ({
        ...t,
        currentPage: e
      }))
    }, [b.pageSize, D, j, k, H, _]),
    V = l.useRef(null);
  l.useEffect(() => {
    H(V.current)
  }, [H]);
  let Y = l.useMemo(() => {
    var e;
    return null !== (e = k[b.currentPage - 1]) && void 0 !== e ? e : []
  }, [k, b.currentPage]);
  return null == n ? null : (0, a.jsxs)("div", {
    className: i(U.container),
    children: [(0, a.jsx)(y, {
      guildId: x,
      storedSearchQuery: c
    }), (0, a.jsxs)("div", {
      className: i(U.scrollerContainer),
      children: [!P && (0, a.jsx)(B, {
        guild: n,
        bans: N,
        sortedBans: Y,
        ref: L
      }), !j && P && (0, a.jsxs)(h.default, {
        theme: R,
        className: U.emptyState,
        children: [(0, a.jsx)(h.EmptyStateImage, {
          darkSrc: s("325911"),
          lightSrc: s("138147"),
          width: 256,
          height: 212
        }), (0, a.jsx)(h.EmptyStateText, {
          note: G.default.Messages.BANS_NO_USERS_BANNED,
          style: {
            maxWidth: 300
          },
          children: G.default.Messages.NO_BANS
        })]
      })]
    }), (0, a.jsx)("div", {
      className: i(U.paginationContainer),
      children: (0, a.jsx)(u.Paginator, {
        className: i(U.paginationInput),
        totalCount: D.length + (j ? b.pageSize : 0),
        pageSize: b.pageSize,
        currentPage: b.currentPage,
        onPageChange: w,
        maxVisiblePages: 9
      })
    })]
  })
}