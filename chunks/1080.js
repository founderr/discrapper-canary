"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("47120"), s("653041");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("392711"),
  o = s.n(r),
  d = s("399606"),
  u = s("481060"),
  c = s("239091"),
  E = s("749210"),
  _ = s("479531"),
  I = s("110924"),
  T = s("410030"),
  S = s("367907"),
  f = s("906732"),
  m = s("733026"),
  N = s("246946"),
  g = s("594174"),
  h = s("695464"),
  C = s("154921"),
  R = s("626135"),
  x = s("136015"),
  L = s("51144"),
  O = s("434404"),
  p = s("999382"),
  A = s("84613"),
  M = s("740903"),
  D = s("981631"),
  v = s("689938"),
  j = s("409353");

function G(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function U(e) {
  var t;
  let {
    transitionState: s,
    guild: n,
    user: i,
    ban: r,
    hideDiscriminator: o,
    onClose: d
  } = e, [c, I] = l.useState(!1), [T, m] = l.useState(null), {
    analyticsLocations: N
  } = (0, f.default)(), g = null !== (t = null == N ? void 0 : N[0]) && void 0 !== t ? t : null;
  async function h() {
    if (null != n) {
      m(null), I(!0);
      try {
        await E.default.unbanUser(n.id, i.id), d(), R.default.track(D.AnalyticEvents.GUILD_BAN_REMOVED, {
          ...(0, S.collectGuildAnalyticsMetadata)(n.id),
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
    className: j.bannedUserModal,
    transitionState: s,
    children: [(0, a.jsxs)(u.ModalHeader, {
      className: j.header,
      separator: !1,
      children: [(0, a.jsx)(C.default, {
        size: C.default.Sizes.SIZE_24,
        className: j.userUsername,
        children: L.default.getUserTag(i, {
          mode: "username",
          identifiable: o ? "never" : "always"
        })
      }), o || i.isPomelo() ? null : (0, a.jsxs)(C.default, {
        size: C.default.Sizes.SIZE_24,
        className: j.userDiscrim,
        children: ["#", i.discriminator]
      })]
    }), (0, a.jsxs)(u.ModalContent, {
      className: j.content,
      children: [(0, a.jsx)(u.Text, {
        className: j.reasonHeader,
        variant: "text-xs/normal",
        children: v.default.Messages.BAN_REASON
      }), (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: null != r.reason && "" !== r.reason ? r.reason : v.default.Messages.NO_BAN_REASON
      }), null != T ? (0, a.jsx)(u.Text, {
        className: j.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: T.getAnyErrorMessage()
      }) : null]
    }), (0, a.jsxs)(u.ModalFooter, {
      className: j.footer,
      children: [(0, a.jsx)(u.Button, {
        onClick: h,
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.RED,
        submitting: c,
        children: v.default.Messages.REVOKE_BAN
      }), (0, a.jsx)(u.Button, {
        onClick: d,
        children: v.default.Messages.DONE
      })]
    })]
  })
}
class P extends l.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: t,
      guild: s
    } = this.props, l = L.default.getGlobalName(e);
    return (0, a.jsxs)(u.Clickable, {
      className: i()(j.bannedUser),
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, a.jsx)(u.Avatar, {
        src: e.getAvatarURL(null == s ? void 0 : s.id, 40),
        "aria-label": e.username,
        size: u.AvatarSizes.SIZE_40,
        className: j.bannedUserAvatar
      }), (0, a.jsxs)("div", {
        className: j.username,
        children: [L.default.getUserTag(e, {
          mode: "username",
          identifiable: t ? "never" : "always"
        }), !t && !e.isPomelo() && (0, a.jsxs)("span", {
          className: j.discrim,
          children: ["#", e.discriminator]
        }), e.isPomelo() && (0, a.jsxs)("span", {
          className: j.discrim,
          children: ["(", l, ")"]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), G(this, "handleShowModal", () => {
      let {
        guild: e,
        user: t,
        hideDiscriminator: s,
        ban: l
      } = this.props;
      (0, u.openModal)(n => (0, a.jsx)(U, {
        ...n,
        guild: e,
        user: t,
        ban: l,
        hideDiscriminator: s
      }))
    }), G(this, "handleContextMenu", e => {
      (0, c.openContextMenuLazy)(e, async () => {
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
let b = l.forwardRef(function(e, t) {
  let {
    guild: s,
    sortedBans: n,
    bans: i
  } = e, r = (0, d.useStateFromStores)([N.default], () => N.default.hidePersonalInformation, []), o = l.useCallback(e => {
    var t;
    if (null == i && 0 === e) return 60;
    let s = n[e],
      a = null == i ? void 0 : i.get(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "");
    return null == s || null == a ? 0 : 60
  }, [i, n]), c = l.useCallback(e => {
    var t;
    if (null == i && 0 === e) return (0, a.jsx)(u.Spinner, {
      className: j.spinner,
      type: u.Spinner.Type.SPINNING_CIRCLE
    }, "spinner");
    let l = n[e],
      o = null == i ? void 0 : i.get(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "");
    if (null != l && null != o) return (0, a.jsx)(P, {
      user: l,
      ban: o,
      hideDiscriminator: r,
      guild: s
    }, l.id)
  }, [i, s, n, r]);
  return (0, a.jsx)(h.default, {
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
    O.default.setSection(D.GuildSettingsSections.SAFETY), (0, A.setSafetyPage)(M.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION)
  }, []), c = l.useCallback(e => {
    i(e), 0 === e.trim().length && O.default.setSearchQuery(e)
  }, []), _ = l.useCallback(() => {
    i(""), O.default.setSearchQuery("")
  }, []), I = l.useCallback(async () => {
    if (0 === n.trim().length) {
      O.default.setSearchQuery(n), o(!1);
      return
    }
    if (!r) try {
      o(!0);
      let [e, s] = (0, m.splitQuery)(n), a = e[0];
      O.default.setSearchQuery(n), await E.default.searchGuildBans(t, a, s), o(!1)
    } catch (e) {
      o(!1)
    }
  }, [t, r, n]), T = l.useCallback(e => {
    "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), I())
  }, [I]);
  return (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: v.default.Messages.BANS_HEADER_NEW,
    children: [(0, a.jsx)("div", {
      className: j.settingsHeader,
      children: (0, a.jsx)(u.FormText, {
        type: u.FormTextTypes.DESCRIPTION,
        className: j.description,
        children: v.default.Messages.BANS_HINT.format({
          onModerationClick: d
        })
      })
    }), (0, a.jsxs)("div", {
      className: j.bansSearchContainer,
      children: [(0, a.jsx)(u.SearchBar, {
        className: j.searchBar,
        query: null != n ? n : "",
        placeholder: v.default.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
        "aria-label": v.default.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
        onChange: c,
        onKeyDown: T,
        onClear: _,
        size: u.SearchBar.Sizes.MEDIUM,
        isLoading: r
      }), (0, a.jsx)(u.Button, {
        color: u.Button.Colors.BRAND,
        onClick: I,
        size: u.Button.Sizes.SMALL,
        disabled: r,
        submitting: r,
        className: j.searchButton,
        children: v.default.Messages.SEARCH
      })]
    })]
  }, "bans-header")
}

function B() {
  var e, t;
  let {
    guild: n,
    searchQuery: c
  } = (0, d.useStateFromStores)([p.default], () => p.default.getProps(), [], r.isEqual), _ = null != c && c.trim().length > 0, S = (0, I.default)(_), f = _ !== S, [N] = (0, d.useStateFromStores)([p.default], () => p.default.getBans(), [], x.isVersionEqual), h = null !== (e = null == N ? void 0 : N.size) && void 0 !== e ? e : 0, C = (0, T.default)(), R = null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : D.EMPTY_STRING_SNOWFLAKE_ID, L = l.useRef(null), O = l.useCallback(e => null == e || 0 === e.length ? e => null != e : t => {
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
      null != e && O(t)(e) && a.push(e)
    }
    return a
  }, [O]), M = l.useMemo(() => A(N, c, h), [N, A, c, h]), G = null != N, U = M.length % 1e3 == 0 && M.length > 0 && G, P = 0 === M.length, [B, F] = l.useState({
    currentPage: 1,
    pageSize: 100
  });
  l.useEffect(() => {
    f && 1 !== B.currentPage && F(e => ({
      ...e,
      currentPage: 1
    }))
  }, [f, B.currentPage]);
  let H = l.useCallback(e => {
      E.default.fetchGuildBansBatch(R, 1e3, e)
    }, [R]),
    k = l.useMemo(() => o().chunk(M, B.pageSize), [B.pageSize, M]),
    w = l.useCallback(e => {
      var t, s, a;
      null === (t = L.current) || void 0 === t || t.scrollToSectionTop(0), (e + 1) * B.pageSize > M.length && U && !_ && (V.current = null !== (a = null === (s = M[M.length - 1]) || void 0 === s ? void 0 : s.id) && void 0 !== a ? a : null, H(V.current)), (null != k[e - 1] || U) && F(t => ({
        ...t,
        currentPage: e
      }))
    }, [B.pageSize, M, U, k, H, _]),
    V = l.useRef(null);
  l.useEffect(() => {
    H(V.current)
  }, [H]);
  let Y = l.useMemo(() => {
    var e;
    return null !== (e = k[B.currentPage - 1]) && void 0 !== e ? e : []
  }, [k, B.currentPage]);
  return null == n ? null : (0, a.jsxs)("div", {
    className: i()(j.container),
    children: [(0, a.jsx)(y, {
      guildId: R,
      storedSearchQuery: c
    }), (0, a.jsxs)("div", {
      className: i()(j.scrollerContainer),
      children: [!P && (0, a.jsx)(b, {
        guild: n,
        bans: N,
        sortedBans: Y,
        ref: L
      }), !U && P && (0, a.jsxs)(u.EmptyState, {
        theme: C,
        className: j.emptyState,
        children: [(0, a.jsx)(u.EmptyStateImage, {
          darkSrc: s("532747"),
          lightSrc: s("433466"),
          width: 256,
          height: 212
        }), (0, a.jsx)(u.EmptyStateText, {
          note: v.default.Messages.BANS_NO_USERS_BANNED,
          style: {
            maxWidth: 300
          },
          children: v.default.Messages.NO_BANS
        })]
      })]
    }), (0, a.jsx)("div", {
      className: i()(j.__invalid_paginationContainer),
      children: (0, a.jsx)(u.Paginator, {
        className: i()(j.paginationInput),
        totalCount: M.length + (U ? B.pageSize : 0),
        pageSize: B.pageSize,
        currentPage: B.currentPage,
        onPageChange: w,
        maxVisiblePages: 9
      })
    })]
  })
}