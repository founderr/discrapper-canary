var l = n(735250);
n(470079);
var i = n(481060),
  s = n(671533),
  a = n(400251),
  r = n(689938),
  o = n(509616),
  c = n(573929),
  u = n(176480);
t.Z = e => {
  let t, {
    searchQuery: n,
    setSearchQuery: d,
    mostRecentQuery: h,
    handleClearSearch: m,
    handleSearchKeyPress: p,
    handleCreateOrAddGuild: E,
    searchResults: g,
    searchFetching: f
  } = e;
  if (f) t = (0, l.jsx)("div", {
    className: o.pageContainer,
    children: (0, l.jsx)(i.Spinner, {
      className: o.spinner
    })
  });
  else if (0 === g.length) {
    let e = null != E ? r.Z.Messages.DIRECTORY_SEARCH_NO_RESULTS_SUBTITLE.format({
      addServerHook: function(e, t) {
        return (0, l.jsx)(i.Anchor, {
          onClick: E,
          children: e
        }, t)
      }
    }) : r.Z.Messages.DIRECTORY_SEARCH_NO_RESULTS_NO_ADD;
    t = (0, l.jsxs)("div", {
      className: c.emptySearchWrapper,
      children: [(0, l.jsx)("img", {
        className: c.emptySearchImage,
        alt: "",
        src: u
      }), (0, l.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: c.emptySearchTitle,
        children: r.Z.Messages.DIRECTORY_SEARCH_NO_RESULTS_TITLE
      }), (0, l.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: c.emptySearchSubtitle,
        children: e
      })]
    })
  } else t = (0, l.jsx)("div", {
    className: o.cardsContainer,
    children: g.map(e => (0, l.jsx)(a.Z, {
      entry: e
    }, e.guildId))
  });
  return (0, l.jsx)("div", {
    className: o.pageContainer,
    children: (0, l.jsxs)(i.ScrollerAuto, {
      className: o.scroller,
      children: [(0, l.jsxs)("div", {
        className: c.searchHeader,
        children: [(0, l.jsxs)("div", {
          className: c.headerTitleWrapper,
          children: [(0, l.jsx)(i.Clickable, {
            onClick: m,
            className: c.arrow,
            children: (0, l.jsx)(s.Z, {
              direction: s.Z.Directions.LEFT
            })
          }), (0, l.jsx)(i.Heading, {
            variant: "heading-xl/semibold",
            className: c.searchPageTitle,
            children: r.Z.Messages.DIRECTORY_SEARCH_RESULTS_HEADER.format({
              numResults: g.length,
              query: h
            })
          })]
        }), (0, l.jsx)(i.SearchBox, {
          searchTerm: n,
          className: c.searchPageBox,
          inputClassName: c.searchPageInput,
          label: r.Z.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          placeholder: r.Z.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          onChange: d,
          onClear: m,
          onKeyPress: p,
          cta: null != n && n.length > 0 ? r.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
        })]
      }), t]
    })
  })
}