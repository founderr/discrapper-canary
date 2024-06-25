n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(399606),
  o = n(481060),
  c = n(112724),
  u = n(430824),
  d = n(496675),
  h = n(768581),
  m = n(400251),
  E = n(486527),
  p = n(981631),
  g = n(689938),
  f = n(509616),
  C = n(201698),
  _ = n(584354),
  I = n(725060);
let x = (0, c.Z)(e => {
  let {
    searchQuery: t,
    setSearchQuery: n,
    handleClearSearch: i,
    handleSearchKeyPress: s,
    width: r
  } = e, c = null != r && r <= 800;
  return (0, l.jsxs)("div", {
    className: C.header,
    children: [(0, l.jsx)("img", {
      alt: "",
      className: C.headerImage,
      src: c ? I : _
    }), (0, l.jsx)("div", {
      className: C.headerContentWrapper,
      children: (0, l.jsxs)("div", {
        className: a()(C.headerContent, {
          [C.headerContentSmall]: c
        }),
        children: [(0, l.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: C.searchTitle,
          children: g.Z.Messages.HUB_DIRECTORY_SEARCH_TITLE
        }), (0, l.jsx)(o.Text, {
          variant: "text-md/normal",
          className: C.searchSubtitle,
          children: g.Z.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
        }), (0, l.jsx)(o.SearchBox, {
          searchTerm: t,
          className: C.searchBox,
          inputClassName: C.searchBoxInput,
          closeIconClassName: C.closeIcon,
          searchIconClassName: C.searchIcon,
          label: g.Z.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          placeholder: g.Z.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          onChange: n,
          onClear: i,
          onKeyPress: s,
          cta: null != t && t.length > 0 ? g.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
        })]
      })
    })]
  })
});

function T(e) {
  let {
    guild: t,
    directoryEntries: n,
    handleCreateOrAddGuild: i,
    isLoading: s
  } = e, c = (0, r.e7)([d.Z], () => d.Z.can(p.Plq.ADMINISTRATOR, t)), u = [];
  null != n && n.forEach(e => {
    u = u.concat(e.entries)
  }), u.sort((e, t) => {
    var n, l;
    return (null !== (n = t.approximateMemberCount) && void 0 !== n ? n : 0) - (null !== (l = e.approximateMemberCount) && void 0 !== l ? l : 0)
  });
  let E = h.ZP.getGuildSplashURL({
    id: t.id,
    splash: t.splash
  });
  return (0, l.jsx)("div", {
    className: f.pageContainer,
    children: (0, l.jsxs)(o.AdvancedScrollerAuto, {
      className: f.scroller,
      children: [(0, l.jsxs)("div", {
        className: C.header,
        children: [null != E ? (0, l.jsx)("img", {
          alt: "",
          className: a()(C.headerImage, C.headerImageSimple),
          src: E
        }) : null, (0, l.jsx)("div", {
          className: C.headerImageBG
        }), (0, l.jsx)("div", {
          className: C.headerContentWrapper,
          children: (0, l.jsx)("div", {
            className: a()(C.headerContent, C.headerContentSmall),
            children: (0, l.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              color: "always-white",
              children: g.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
                categoryName: "Midjourney"
              })
            })
          })
        })]
      }), s && null == n ? (0, l.jsx)(o.Spinner, {
        className: f.spinner
      }) : (0, l.jsxs)("div", {
        className: f.cardsContainer,
        children: [u.map(e => (0, l.jsx)(m.Z, {
          entry: e
        }, e.guildId)), c && null != i ? (0, l.jsx)(m.m, {
          onClick: i
        }) : null]
      })]
    })
  })
}
t.Z = e => {
  let {
    channel: t,
    directoryEntries: n,
    handleCreateOrAddGuild: s,
    searchQuery: a,
    setSearchQuery: c,
    handleClearSearch: d,
    handleSearchKeyPress: h,
    currentCategoryId: _,
    handleSelectCategory: I,
    categoryCounts: N,
    allEntriesCount: Z,
    isLoading: S
  } = e, v = (0, r.e7)([u.Z], () => u.Z.getGuild(t.getGuildId()));
  return null != v && v.hasFeature(p.oNc.SHARD) ? (0, l.jsx)(T, {
    guild: v,
    directoryEntries: n,
    handleCreateOrAddGuild: s,
    isLoading: S
  }) : (0, l.jsx)("div", {
    className: f.pageContainer,
    children: (0, l.jsxs)(o.AdvancedScrollerAuto, {
      className: f.scroller,
      children: [(0, l.jsx)(x, {
        searchQuery: a,
        setSearchQuery: c,
        handleClearSearch: d,
        handleSearchKeyPress: h
      }), (0, l.jsx)(o.AdvancedScrollerThin, {
        orientation: "horizontal",
        children: (0, l.jsxs)(o.TabBar, {
          className: C.tabBar,
          type: "top",
          look: "brand",
          selectedItem: _,
          onItemSelect: e => {
            I(e)
          },
          children: [(0, l.jsx)(o.TabBar.Item, {
            className: C.tabBarItem,
            id: E.AR.ALL,
            children: "".concat(g.Z.Messages.DIRECTORY_CATEGORY_ALL, " (").concat(Z, ")")
          }, E.AR.ALL), (0, E.b7)(t.id).map(e => {
            let {
              value: t,
              label: n
            } = e;
            return (0, l.jsx)(o.TabBar.Item, {
              className: C.tabBarItem,
              id: t,
              children: "".concat(n, " ").concat(null != N[t] ? "(".concat(N[t], ")") : "")
            }, t)
          })]
        })
      }), S && null == n ? (0, l.jsx)(o.Spinner, {
        className: f.spinner
      }) : null == n ? void 0 : n.map((e, t) => (0, l.jsxs)(i.Fragment, {
        children: [void 0 !== e.header ? (0, l.jsx)(o.Text, {
          variant: "text-md/semibold",
          className: C.sectionHeader,
          children: e.header
        }) : null, (0, l.jsxs)("div", {
          className: f.cardsContainer,
          children: [e.entries.map(e => (0, l.jsx)(m.Z, {
            entry: e
          }, e.guildId)), e.appendEndCard && null != s ? (0, l.jsx)(m.m, {
            onClick: s
          }) : null]
        })]
      }, t))]
    })
  })
}