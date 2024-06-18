"use strict";
t.d(s, {
  Z: function() {
    return B
  }
}), t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(392711),
  o = t.n(r),
  c = t(399606),
  d = t(481060),
  u = t(239091),
  E = t(749210),
  _ = t(479531),
  I = t(110924),
  T = t(410030),
  N = t(367907),
  m = t(906732),
  S = t(733026),
  h = t(246946),
  g = t(594174),
  C = t(695464),
  x = t(154921),
  R = t(626135),
  L = t(136015),
  O = t(51144),
  A = t(434404),
  p = t(999382),
  M = t(84613),
  f = t(740903),
  D = t(981631),
  v = t(689938),
  j = t(272552);

function Z(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}

function U(e) {
  var s;
  let {
    transitionState: t,
    guild: l,
    user: a,
    ban: r,
    hideDiscriminator: o,
    onClose: c
  } = e, [u, I] = i.useState(!1), [T, S] = i.useState(null), {
    analyticsLocations: h
  } = (0, m.ZP)(), g = null !== (s = null == h ? void 0 : h[0]) && void 0 !== s ? s : null;
  async function C() {
    if (null != l) {
      S(null), I(!0);
      try {
        await E.Z.unbanUser(l.id, a.id), c(), R.default.track(D.rMx.GUILD_BAN_REMOVED, {
          ...(0, N.hH)(l.id),
          target_user_id: a.id,
          reason: r.reason,
          location: g
        })
      } catch (e) {
        S(new _.Z(e)), I(!1)
      }
    }
  }
  return (0, n.jsxs)(d.ModalRoot, {
    className: j.bannedUserModal,
    transitionState: t,
    children: [(0, n.jsxs)(d.ModalHeader, {
      className: j.header,
      separator: !1,
      children: [(0, n.jsx)(x.Z, {
        size: x.Z.Sizes.SIZE_24,
        className: j.userUsername,
        children: O.ZP.getUserTag(a, {
          mode: "username",
          identifiable: o ? "never" : "always"
        })
      }), o || a.isPomelo() ? null : (0, n.jsxs)(x.Z, {
        size: x.Z.Sizes.SIZE_24,
        className: j.userDiscrim,
        children: ["#", a.discriminator]
      })]
    }), (0, n.jsxs)(d.ModalContent, {
      className: j.content,
      children: [(0, n.jsx)(d.Text, {
        className: j.reasonHeader,
        variant: "text-xs/normal",
        children: v.Z.Messages.BAN_REASON
      }), (0, n.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: null != r.reason && "" !== r.reason ? r.reason : v.Z.Messages.NO_BAN_REASON
      }), null != T ? (0, n.jsx)(d.Text, {
        className: j.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: T.getAnyErrorMessage()
      }) : null]
    }), (0, n.jsxs)(d.ModalFooter, {
      className: j.footer,
      children: [(0, n.jsx)(d.Button, {
        onClick: C,
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.RED,
        submitting: u,
        children: v.Z.Messages.REVOKE_BAN
      }), (0, n.jsx)(d.Button, {
        onClick: c,
        children: v.Z.Messages.DONE
      })]
    })]
  })
}
class G extends i.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: s,
      guild: t
    } = this.props, i = O.ZP.getGlobalName(e);
    return (0, n.jsxs)(d.Clickable, {
      className: a()(j.bannedUser),
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, n.jsx)(d.Avatar, {
        src: e.getAvatarURL(null == t ? void 0 : t.id, 40),
        "aria-label": e.username,
        size: d.AvatarSizes.SIZE_40,
        className: j.bannedUserAvatar
      }), (0, n.jsxs)("div", {
        className: j.username,
        children: [O.ZP.getUserTag(e, {
          mode: "username",
          identifiable: s ? "never" : "always"
        }), !s && !e.isPomelo() && (0, n.jsxs)("span", {
          className: j.discrim,
          children: ["#", e.discriminator]
        }), e.isPomelo() && (0, n.jsxs)("span", {
          className: j.discrim,
          children: ["(", i, ")"]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), Z(this, "handleShowModal", () => {
      let {
        guild: e,
        user: s,
        hideDiscriminator: t,
        ban: i
      } = this.props;
      (0, d.openModal)(l => (0, n.jsx)(U, {
        ...l,
        guild: e,
        user: s,
        ban: i,
        hideDiscriminator: t
      }))
    }), Z(this, "handleContextMenu", e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await t.e("23835").then(t.bind(t, 768079));
        return s => (0, n.jsx)(e, {
          ...s,
          user: this.props.user
        })
      })
    })
  }
}
let P = i.forwardRef(function(e, s) {
  let {
    guild: t,
    sortedBans: l,
    bans: a
  } = e, r = (0, c.e7)([h.Z], () => h.Z.hidePersonalInformation, []), o = i.useCallback(e => {
    var s;
    if (null == a && 0 === e) return 60;
    let t = l[e],
      n = null == a ? void 0 : a.get(null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : "");
    return null == t || null == n ? 0 : 60
  }, [a, l]), u = i.useCallback(e => {
    var s;
    if (null == a && 0 === e) return (0, n.jsx)(d.Spinner, {
      className: j.spinner,
      type: d.Spinner.Type.SPINNING_CIRCLE
    }, "spinner");
    let i = l[e],
      o = null == a ? void 0 : a.get(null !== (s = null == i ? void 0 : i.id) && void 0 !== s ? s : "");
    if (null != i && null != o) return (0, n.jsx)(G, {
      user: i,
      ban: o,
      hideDiscriminator: r,
      guild: t
    }, i.id)
  }, [a, t, l, r]);
  return (0, n.jsx)(C.Z, {
    role: "listbox",
    listPadding: [8, 8, 8, 8],
    rowCount: l.length,
    rowHeight: o,
    renderRow: u,
    ref: s
  })
});

function b(e) {
  let {
    guildId: s,
    storedSearchQuery: t
  } = e, [l, a] = i.useState(null != t ? t : ""), [r, o] = i.useState(!1), c = i.useCallback(() => {
    A.Z.setSection(D.pNK.SAFETY), (0, M.K)(f.u.DM_AND_SPAM_PROTECTION)
  }, []), u = i.useCallback(e => {
    a(e), 0 === e.trim().length && A.Z.setSearchQuery(e)
  }, []), _ = i.useCallback(() => {
    a(""), A.Z.setSearchQuery("")
  }, []), I = i.useCallback(async () => {
    if (0 === l.trim().length) {
      A.Z.setSearchQuery(l), o(!1);
      return
    }
    if (!r) try {
      o(!0);
      let [e, t] = (0, S.C)(l), n = e[0];
      A.Z.setSearchQuery(l), await E.Z.searchGuildBans(s, n, t), o(!1)
    } catch (e) {
      o(!1)
    }
  }, [s, r, l]), T = i.useCallback(e => {
    "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), I())
  }, [I]);
  return (0, n.jsxs)(d.FormSection, {
    tag: d.FormTitleTags.H1,
    title: v.Z.Messages.BANS_HEADER_NEW,
    children: [(0, n.jsx)("div", {
      className: j.settingsHeader,
      children: (0, n.jsx)(d.FormText, {
        type: d.FormTextTypes.DESCRIPTION,
        className: j.description,
        children: v.Z.Messages.BANS_HINT.format({
          onModerationClick: c
        })
      })
    }), (0, n.jsxs)("div", {
      className: j.bansSearchContainer,
      children: [(0, n.jsx)(d.SearchBar, {
        className: j.searchBar,
        query: null != l ? l : "",
        placeholder: v.Z.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
        "aria-label": v.Z.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
        onChange: u,
        onKeyDown: T,
        onClear: _,
        size: d.SearchBar.Sizes.MEDIUM,
        isLoading: r
      }), (0, n.jsx)(d.Button, {
        color: d.Button.Colors.BRAND,
        onClick: I,
        size: d.Button.Sizes.SMALL,
        disabled: r,
        submitting: r,
        className: j.searchButton,
        children: v.Z.Messages.SEARCH
      })]
    })]
  }, "bans-header")
}

function B() {
  var e, s;
  let {
    guild: l,
    searchQuery: u
  } = (0, c.e7)([p.Z], () => p.Z.getProps(), [], r.isEqual), _ = null != u && u.trim().length > 0, N = (0, I.Z)(_), m = _ !== N, [h] = (0, c.e7)([p.Z], () => p.Z.getBans(), [], L.Q), C = null !== (e = null == h ? void 0 : h.size) && void 0 !== e ? e : 0, x = (0, T.ZP)(), R = null !== (s = null == l ? void 0 : l.id) && void 0 !== s ? s : D.lds, O = i.useRef(null), A = i.useCallback(e => null == e || 0 === e.length ? e => null != e : s => {
    if (null == s || 0 === e.trim().length) return !1;
    let [
      [t], n
    ] = (0, S.C)(e);
    return !!n.includes(s.id) || null != t && (!!(s.username.toLowerCase().includes(t.toLowerCase()) || null != s.globalName && s.globalName.toLowerCase().includes(t.toLowerCase())) || !1)
  }, []), M = i.useCallback((e, s, t) => {
    if (null == e || 0 === t) return [];
    let n = [];
    for (let t of e.keys()) {
      let e = g.default.getUser(t);
      null != e && A(s)(e) && n.push(e)
    }
    return n
  }, [A]), f = i.useMemo(() => M(h, u, C), [h, M, u, C]), Z = null != h, U = f.length % 1e3 == 0 && f.length > 0 && Z, G = 0 === f.length, [B, y] = i.useState({
    currentPage: 1,
    pageSize: 100
  });
  i.useEffect(() => {
    m && 1 !== B.currentPage && y(e => ({
      ...e,
      currentPage: 1
    }))
  }, [m, B.currentPage]);
  let F = i.useCallback(e => {
      E.Z.fetchGuildBansBatch(R, 1e3, e)
    }, [R]),
    k = i.useMemo(() => o().chunk(f, B.pageSize), [B.pageSize, f]),
    H = i.useCallback(e => {
      var s, t, n;
      if (null === (s = O.current) || void 0 === s || s.scrollToSectionTop(0), (e + 1) * B.pageSize > f.length && U && !_ && (w.current = null !== (n = null === (t = f[f.length - 1]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null, F(w.current)), null != k[e - 1] || !!U) y(s => ({
        ...s,
        currentPage: e
      }))
    }, [B.pageSize, f, U, k, F, _]),
    w = i.useRef(null);
  i.useEffect(() => {
    F(w.current)
  }, [F]);
  let V = i.useMemo(() => {
    var e;
    return null !== (e = k[B.currentPage - 1]) && void 0 !== e ? e : []
  }, [k, B.currentPage]);
  return null == l ? null : (0, n.jsxs)("div", {
    className: a()(j.container),
    children: [(0, n.jsx)(b, {
      guildId: R,
      storedSearchQuery: u
    }), (0, n.jsxs)("div", {
      className: a()(j.scrollerContainer),
      children: [!G && (0, n.jsx)(P, {
        guild: l,
        bans: h,
        sortedBans: V,
        ref: O
      }), !U && G && (0, n.jsxs)(d.EmptyState, {
        theme: x,
        className: j.emptyState,
        children: [(0, n.jsx)(d.EmptyStateImage, {
          darkSrc: t(532747),
          lightSrc: t(433466),
          width: 256,
          height: 212
        }), (0, n.jsx)(d.EmptyStateText, {
          note: v.Z.Messages.BANS_NO_USERS_BANNED,
          style: {
            maxWidth: 300
          },
          children: v.Z.Messages.NO_BANS
        })]
      })]
    }), (0, n.jsx)("div", {
      className: a()(j.__invalid_paginationContainer),
      children: (0, n.jsx)(d.Paginator, {
        className: a()(j.paginationInput),
        totalCount: f.length + (U ? B.pageSize : 0),
        pageSize: B.pageSize,
        currentPage: B.currentPage,
        onPageChange: H,
        maxVisiblePages: 9
      })
    })]
  })
}