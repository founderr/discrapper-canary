"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("399606"),
  o = n("481060"),
  u = n("112724"),
  d = n("430824"),
  c = n("496675"),
  f = n("768581"),
  h = n("400251"),
  m = n("486527"),
  p = n("981631"),
  E = n("689938"),
  g = n("479133"),
  C = n("849529"),
  S = n("584354"),
  _ = n("725060");
let T = (0, u.default)(e => {
  let {
    searchQuery: t,
    setSearchQuery: n,
    handleClearSearch: l,
    handleSearchKeyPress: s,
    width: r
  } = e, u = null != r && r <= 800;
  return (0, a.jsxs)("div", {
    className: C.header,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: C.headerImage,
      src: u ? _ : S
    }), (0, a.jsx)("div", {
      className: C.headerContentWrapper,
      children: (0, a.jsxs)("div", {
        className: i()(C.headerContent, {
          [C.headerContentSmall]: u
        }),
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: C.searchTitle,
          children: E.default.Messages.HUB_DIRECTORY_SEARCH_TITLE
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          className: C.searchSubtitle,
          children: E.default.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
        }), (0, a.jsx)(o.SearchBox, {
          searchTerm: t,
          className: C.searchBox,
          inputClassName: C.searchBoxInput,
          closeIconClassName: C.closeIcon,
          searchIconClassName: C.searchIcon,
          label: E.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          placeholder: E.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          onChange: n,
          onClear: l,
          onKeyPress: s,
          cta: null != t && t.length > 0 ? E.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
        })]
      })
    })]
  })
});

function I(e) {
  let {
    guild: t,
    directoryEntries: n,
    handleCreateOrAddGuild: l,
    isLoading: s
  } = e, u = (0, r.useStateFromStores)([c.default], () => c.default.can(p.Permissions.ADMINISTRATOR, t)), d = [];
  null != n && n.forEach(e => {
    d = d.concat(e.entries)
  }), d.sort((e, t) => {
    var n, a;
    return (null !== (n = t.approximateMemberCount) && void 0 !== n ? n : 0) - (null !== (a = e.approximateMemberCount) && void 0 !== a ? a : 0)
  });
  let m = f.default.getGuildSplashURL({
    id: t.id,
    splash: t.splash
  });
  return (0, a.jsx)("div", {
    className: g.pageContainer,
    children: (0, a.jsxs)(o.AdvancedScrollerAuto, {
      className: g.scroller,
      children: [(0, a.jsxs)("div", {
        className: C.header,
        children: [null != m ? (0, a.jsx)("img", {
          alt: "",
          className: i()(C.headerImage, C.headerImageSimple),
          src: m
        }) : null, (0, a.jsx)("div", {
          className: C.headerImageBG
        }), (0, a.jsx)("div", {
          className: C.headerContentWrapper,
          children: (0, a.jsx)("div", {
            className: i()(C.headerContent, C.headerContentSmall),
            children: (0, a.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              color: "always-white",
              children: E.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
                categoryName: "Midjourney"
              })
            })
          })
        })]
      }), s && null == n ? (0, a.jsx)(o.Spinner, {
        className: g.spinner
      }) : (0, a.jsxs)("div", {
        className: g.cardsContainer,
        children: [d.map(e => (0, a.jsx)(h.default, {
          entry: e
        }, e.guildId)), u && null != l ? (0, a.jsx)(h.AddEntryCard, {
          onClick: l
        }) : null]
      })]
    })
  })
}
t.default = e => {
  let {
    channel: t,
    directoryEntries: n,
    handleCreateOrAddGuild: s,
    searchQuery: i,
    setSearchQuery: u,
    handleClearSearch: c,
    handleSearchKeyPress: f,
    currentCategoryId: S,
    handleSelectCategory: _,
    categoryCounts: A,
    allEntriesCount: v,
    isLoading: x
  } = e, N = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(t.getGuildId()));
  return null != N && N.hasFeature(p.GuildFeatures.SHARD) ? (0, a.jsx)(I, {
    guild: N,
    directoryEntries: n,
    handleCreateOrAddGuild: s,
    isLoading: x
  }) : (0, a.jsx)("div", {
    className: g.pageContainer,
    children: (0, a.jsxs)(o.AdvancedScrollerAuto, {
      className: g.scroller,
      children: [(0, a.jsx)(T, {
        searchQuery: i,
        setSearchQuery: u,
        handleClearSearch: c,
        handleSearchKeyPress: f
      }), (0, a.jsx)(o.AdvancedScrollerThin, {
        orientation: "horizontal",
        children: (0, a.jsxs)(o.TabBar, {
          className: C.tabBar,
          type: "top",
          look: "brand",
          selectedItem: S,
          onItemSelect: e => {
            _(e)
          },
          children: [(0, a.jsx)(o.TabBar.Item, {
            className: C.tabBarItem,
            id: m.DirectoryEntryCategories.ALL,
            children: "".concat(E.default.Messages.DIRECTORY_CATEGORY_ALL, " (").concat(v, ")")
          }, m.DirectoryEntryCategories.ALL), (0, m.getHubCategories)(t.id).map(e => {
            let {
              value: t,
              label: n
            } = e;
            return (0, a.jsx)(o.TabBar.Item, {
              className: C.tabBarItem,
              id: t,
              children: "".concat(n, " ").concat(null != A[t] ? "(".concat(A[t], ")") : "")
            }, t)
          })]
        })
      }), x && null == n ? (0, a.jsx)(o.Spinner, {
        className: g.spinner
      }) : null == n ? void 0 : n.map((e, t) => (0, a.jsxs)(l.Fragment, {
        children: [void 0 !== e.header ? (0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          className: C.sectionHeader,
          children: e.header
        }) : null, (0, a.jsxs)("div", {
          className: g.cardsContainer,
          children: [e.entries.map(e => (0, a.jsx)(h.default, {
            entry: e
          }, e.guildId)), e.appendEndCard && null != s ? (0, a.jsx)(h.AddEntryCard, {
            onClick: s
          }) : null]
        })]
      }, t))]
    })
  })
}