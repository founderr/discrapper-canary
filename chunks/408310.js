"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("671533"),
  i = n("400251"),
  r = n("689938"),
  o = n("479133"),
  u = n("17775"),
  d = n("176480");
t.default = e => {
  let t, {
    searchQuery: n,
    setSearchQuery: c,
    mostRecentQuery: f,
    handleClearSearch: h,
    handleSearchKeyPress: m,
    handleCreateOrAddGuild: p,
    searchResults: E,
    searchFetching: g
  } = e;
  if (g) t = (0, a.jsx)("div", {
    className: o.pageContainer,
    children: (0, a.jsx)(l.Spinner, {
      className: o.spinner
    })
  });
  else if (0 === E.length) {
    let e = null != p ? r.default.Messages.DIRECTORY_SEARCH_NO_RESULTS_SUBTITLE.format({
      addServerHook: function(e, t) {
        return (0, a.jsx)(l.Anchor, {
          onClick: p,
          children: e
        }, t)
      }
    }) : r.default.Messages.DIRECTORY_SEARCH_NO_RESULTS_NO_ADD;
    t = (0, a.jsxs)("div", {
      className: u.emptySearchWrapper,
      children: [(0, a.jsx)("img", {
        className: u.emptySearchImage,
        alt: "",
        src: d
      }), (0, a.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: u.emptySearchTitle,
        children: r.default.Messages.DIRECTORY_SEARCH_NO_RESULTS_TITLE
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: u.emptySearchSubtitle,
        children: e
      })]
    })
  } else t = (0, a.jsx)("div", {
    className: o.cardsContainer,
    children: E.map(e => (0, a.jsx)(i.default, {
      entry: e
    }, e.guildId))
  });
  return (0, a.jsx)("div", {
    className: o.pageContainer,
    children: (0, a.jsxs)(l.ScrollerAuto, {
      className: o.scroller,
      children: [(0, a.jsxs)("div", {
        className: u.searchHeader,
        children: [(0, a.jsxs)("div", {
          className: u.headerTitleWrapper,
          children: [(0, a.jsx)(l.Clickable, {
            onClick: h,
            className: u.arrow,
            children: (0, a.jsx)(s.default, {
              direction: s.default.Directions.LEFT
            })
          }), (0, a.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            className: u.searchPageTitle,
            children: r.default.Messages.DIRECTORY_SEARCH_RESULTS_HEADER.format({
              numResults: E.length,
              query: f
            })
          })]
        }), (0, a.jsx)(l.SearchBox, {
          searchTerm: n,
          className: u.searchPageBox,
          inputClassName: u.searchPageInput,
          label: r.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          placeholder: r.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          onChange: c,
          onClear: h,
          onKeyPress: m,
          cta: null != n && n.length > 0 ? r.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
        })]
      }), t]
    })
  })
}