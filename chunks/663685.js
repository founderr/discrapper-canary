"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("65597"),
  u = n("77078"),
  o = n("737960"),
  d = n("305961"),
  c = n("957255"),
  f = n("466857"),
  h = n("315102"),
  m = n("791679"),
  p = n("730647"),
  E = n("49111"),
  g = n("782340"),
  C = n("794260"),
  S = n("531591"),
  _ = n("981726"),
  I = n("529547");
let T = (0, o.default)(e => {
  let {
    searchQuery: t,
    setSearchQuery: n,
    handleClearSearch: a,
    handleSearchKeyPress: s,
    width: r
  } = e, o = null != r && r <= 800;
  return (0, l.jsxs)("div", {
    className: S.header,
    children: [(0, l.jsx)("img", {
      alt: "",
      className: S.headerImage,
      src: o ? I : _
    }), (0, l.jsx)("div", {
      className: S.headerContentWrapper,
      children: (0, l.jsxs)("div", {
        className: i(S.headerContent, {
          [S.headerContentSmall]: o
        }),
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-xl/semibold",
          className: S.searchTitle,
          children: g.default.Messages.HUB_DIRECTORY_SEARCH_TITLE
        }), (0, l.jsx)(u.Text, {
          variant: "text-md/normal",
          className: S.searchSubtitle,
          children: g.default.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
        }), (0, l.jsx)(f.default, {
          searchTerm: t,
          className: S.searchBox,
          inputClassName: S.searchBoxInput,
          closeIconClassName: S.closeIcon,
          searchIconClassName: S.searchIcon,
          label: g.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          placeholder: g.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          onChange: n,
          onClear: a,
          onKeyPress: s,
          cta: null != t && t.length > 0 ? g.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
        })]
      })
    })]
  })
});

function v(e) {
  let {
    guild: t,
    directoryEntries: n,
    handleCreateOrAddGuild: a,
    isLoading: s
  } = e, o = (0, r.default)([c.default], () => c.default.can(E.Permissions.ADMINISTRATOR, t)), d = [];
  null != n && n.forEach(e => {
    d = d.concat(e.entries)
  }), d.sort((e, t) => {
    var n, l;
    return (null !== (n = t.approximateMemberCount) && void 0 !== n ? n : 0) - (null !== (l = e.approximateMemberCount) && void 0 !== l ? l : 0)
  });
  let f = h.default.getGuildSplashURL({
    id: t.id,
    splash: t.splash
  });
  return (0, l.jsx)("div", {
    className: C.pageContainer,
    children: (0, l.jsxs)(u.AdvancedScrollerAuto, {
      className: C.scroller,
      children: [(0, l.jsxs)("div", {
        className: S.header,
        children: [null != f ? (0, l.jsx)("img", {
          alt: "",
          className: i(S.headerImage, S.headerImageSimple),
          src: f
        }) : null, (0, l.jsx)("div", {
          className: S.headerImageBG
        }), (0, l.jsx)("div", {
          className: S.headerContentWrapper,
          children: (0, l.jsx)("div", {
            className: i(S.headerContent, S.headerContentSmall),
            children: (0, l.jsx)(u.Heading, {
              variant: "heading-xl/semibold",
              color: "always-white",
              children: g.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
                categoryName: "Midjourney"
              })
            })
          })
        })]
      }), s && null == n ? (0, l.jsx)(u.Spinner, {
        className: C.spinner
      }) : (0, l.jsxs)("div", {
        className: C.cardsContainer,
        children: [d.map(e => (0, l.jsx)(m.default, {
          entry: e
        }, e.guildId)), o && null != a ? (0, l.jsx)(m.AddEntryCard, {
          onClick: a
        }) : null]
      })]
    })
  })
}
var x = e => {
  let {
    channel: t,
    directoryEntries: n,
    handleCreateOrAddGuild: s,
    searchQuery: i,
    setSearchQuery: o,
    handleClearSearch: c,
    handleSearchKeyPress: f,
    currentCategoryId: h,
    handleSelectCategory: _,
    categoryCounts: I,
    allEntriesCount: x,
    isLoading: N
  } = e, A = (0, r.default)([d.default], () => d.default.getGuild(t.getGuildId()));
  return null != A && A.hasFeature(E.GuildFeatures.SHARD) ? (0, l.jsx)(v, {
    guild: A,
    directoryEntries: n,
    handleCreateOrAddGuild: s,
    isLoading: N
  }) : (0, l.jsx)("div", {
    className: C.pageContainer,
    children: (0, l.jsxs)(u.AdvancedScrollerAuto, {
      className: C.scroller,
      children: [(0, l.jsx)(T, {
        searchQuery: i,
        setSearchQuery: o,
        handleClearSearch: c,
        handleSearchKeyPress: f
      }), (0, l.jsx)(u.AdvancedScrollerThin, {
        orientation: "horizontal",
        children: (0, l.jsxs)(u.TabBar, {
          className: S.tabBar,
          type: "top",
          look: "brand",
          selectedItem: h,
          onItemSelect: e => {
            _(e)
          },
          children: [(0, l.jsx)(u.TabBar.Item, {
            className: S.tabBarItem,
            id: p.DirectoryEntryCategories.ALL,
            children: "".concat(g.default.Messages.DIRECTORY_CATEGORY_ALL, " (").concat(x, ")")
          }, p.DirectoryEntryCategories.ALL), (0, p.getHubCategories)(t.id).map(e => {
            let {
              value: t,
              label: n
            } = e;
            return (0, l.jsx)(u.TabBar.Item, {
              className: S.tabBarItem,
              id: t,
              children: "".concat(n, " ").concat(null != I[t] ? "(".concat(I[t], ")") : "")
            }, t)
          })]
        })
      }), N && null == n ? (0, l.jsx)(u.Spinner, {
        className: C.spinner
      }) : null == n ? void 0 : n.map((e, t) => (0, l.jsxs)(a.Fragment, {
        children: [void 0 !== e.header ? (0, l.jsx)(u.Text, {
          variant: "text-md/semibold",
          className: S.sectionHeader,
          children: e.header
        }) : null, (0, l.jsxs)("div", {
          className: C.cardsContainer,
          children: [e.entries.map(e => (0, l.jsx)(m.default, {
            entry: e
          }, e.guildId)), e.appendEndCard && null != s ? (0, l.jsx)(m.AddEntryCard, {
            onClick: s
          }) : null]
        })]
      }, t))]
    })
  })
}