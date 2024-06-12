"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("91192"),
  o = s("481060"),
  u = s("209613"),
  d = s("151827"),
  c = s("785681"),
  E = s("485664"),
  _ = s("880257"),
  f = s("631885"),
  h = s("895328"),
  C = s("568671"),
  m = s("419821"),
  T = s("367515"),
  g = s("250285"),
  A = s("292352"),
  p = s("689938"),
  N = s("280590"),
  S = s("611273"),
  I = s("926895");

function x(e) {
  let {
    header: t,
    description: s,
    stepNumber: n
  } = e;
  return (0, a.jsxs)("div", {
    className: N.step,
    children: [(0, a.jsx)("div", {
      className: N.stepNumber,
      children: (0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-brand",
        children: (0, a.jsx)(o.HeadingLevel, {
          children: n
        })
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-sm/bold",
        children: (0, a.jsx)(o.HeadingLevel, {
          children: t
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: s
      })]
    })]
  })
}

function v() {
  return (0, a.jsxs)("div", {
    className: i()(N.box, N.linkingBanner, N.linkingBannerParent),
    children: [(0, a.jsxs)("div", {
      className: i()(N.linkingBannerUpper),
      children: [(0, a.jsxs)("div", {
        className: N.__invalid_header,
        children: [(0, a.jsx)(o.Heading, {
          className: S.marginBottom8,
          variant: "heading-xl/medium",
          children: (0, a.jsx)(o.HeadingLevel, {
            children: p.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_PARENT
          })
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: S.marginBottom20,
          children: p.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_PARENT
        })]
      }), (0, a.jsx)("img", {
        className: N.bannerArt,
        src: I,
        alt: p.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
      })]
    }), (0, a.jsxs)("div", {
      className: N.steps,
      children: [(0, a.jsx)(x, {
        header: p.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_HEADER,
        description: p.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_DESCRIPTION,
        stepNumber: 1
      }), (0, a.jsx)(x, {
        header: p.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_HEADER,
        description: p.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_DESCRIPTION,
        stepNumber: 2
      }), (0, a.jsx)(x, {
        header: p.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_HEADER,
        description: p.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_DESCRIPTION,
        stepNumber: 3
      })]
    })]
  })
}

function R() {
  let e = (0, f.useHasMaxConnections)();
  return (0, a.jsxs)("div", {
    className: i()(N.box, N.linkingBanner),
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(o.Heading, {
        className: S.marginBottom8,
        variant: "heading-xl/medium",
        children: (0, a.jsx)(o.HeadingLevel, {
          children: p.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_TEEN
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: S.marginBottom20,
        children: p.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_TEEN.format({
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), e ? null : (0, a.jsx)(C.default, {})]
    }), (0, a.jsx)("img", {
      className: N.bannerArt,
      src: I,
      alt: p.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
    })]
  })
}

function O(e) {
  let {
    sectionType: t,
    sectionTitle: s,
    requests: l
  } = e, i = n.useRef(null), c = "".concat(t, "-list"), E = (0, u.default)(c), _ = n.useCallback(e => {
    let {
      row: s,
      listIndex: n
    } = e, i = l[s], r = n === l.length;
    return null == i ? null : (0, a.jsx)(g.default, {
      userId: i.id,
      isLast: r,
      children: () => t === A.UserLinkStatus.ACTIVE ? (0, a.jsx)(m.UserLinkAcceptedRequestRow, {
        user: i
      }) : (0, a.jsx)(T.UserLinkPendingRequestRow, {
        user: i
      })
    }, i.id)
  }, [l, t]), f = n.useCallback(() => (0, a.jsx)(d.default, {
    className: N.__invalid_sectionTitle,
    children: (0, a.jsx)(o.Text, {
      className: S.marginBottom8,
      variant: "eyebrow",
      color: "header-secondary",
      children: s
    })
  }, "title"), [s]);
  return (0, a.jsx)("div", {
    className: N.section,
    children: (0, a.jsx)(r.ListNavigatorProvider, {
      navigator: E,
      children: (0, a.jsx)(r.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            role: n,
            ...r
          } = e;
          return (0, a.jsx)(o.List, {
            className: N.__invalid_list,
            innerRole: n,
            innerAriaLabel: s,
            ref: e => {
              var s;
              i.current = e, t.current = null !== (s = null == e ? void 0 : e.getScrollerNode()) && void 0 !== s ? s : null
            },
            sectionHeight: A.FAMILY_CENTER_REQUEST_SECTION_HEIGHT,
            rowHeight: A.FAMILY_CENTER_REQUEST_ROW_HEIGHT,
            renderSection: f,
            renderRow: _,
            sections: [l.length],
            chunkSize: 30,
            fade: !0,
            ...r
          }, c)
        }
      })
    })
  })
}
let L = () => {
    let e = (0, _.default)(),
      t = (0, f.useUserForLinkStatus)(A.UserLinkStatus.ACTIVE),
      s = e ? A.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : A.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS,
      n = {
        count: t.length,
        max: s
      },
      l = (0, c.useAgeSpecificText)(p.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_TEEN.format(n), p.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_PARENT.format(n));
    return (0, a.jsx)(a.Fragment, {
      children: t.length > 0 ? (0, a.jsx)(O, {
        sectionType: A.UserLinkStatus.ACTIVE,
        sectionTitle: l,
        requests: t
      }) : (0, a.jsxs)("div", {
        className: N.section,
        children: [(0, a.jsx)(o.Text, {
          className: S.marginBottom8,
          variant: "eyebrow",
          color: "header-secondary",
          children: l
        }), (0, a.jsx)("div", {
          className: N.box,
          children: (0, a.jsx)(h.default, {
            text: p.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_EMPTY_DESCRIPTION
          })
        })]
      })
    })
  },
  M = () => {
    let e = (0, f.useHasMaxConnections)(),
      t = (0, _.default)() ? A.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : A.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS,
      s = (0, c.useAgeSpecificText)(p.default.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_TEEN.format({
        maxConnections: t
      }), p.default.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_PARENT.format({
        maxConnections: t
      }));
    return e ? (0, a.jsx)("div", {
      className: N.maxConnectionInfo,
      children: (0, a.jsx)(o.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: s
      })
    }) : null
  },
  y = () => (0, E.useShouldShowHelplineLink)() ? (0, a.jsxs)("div", {
    className: i()(N.__invalid_helpLineInfo, S.marginTop20),
    children: [(0, a.jsx)(o.Heading, {
      className: N.supportHeader,
      variant: "heading-sm/semibold",
      children: (0, a.jsx)(o.HeadingLevel, {
        children: p.default.Messages.FAMILY_CENTER_HELP_LINE_HEADER
      })
    }), (0, a.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: p.default.Messages.FAMILY_CENTER_HELP_LINE_CONTENT.format({
        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
      })
    })]
  }) : null,
  D = () => {
    let e = (0, f.useUserForLinkStatus)(A.UserLinkStatus.PENDING),
      t = (0, c.useAgeSpecificText)(p.default.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_TEEN.format({
        count: e.length
      }), p.default.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_PARENT.format({
        count: e.length
      }));
    return 0 === e.length ? null : (0, a.jsx)(O, {
      sectionType: A.UserLinkStatus.PENDING,
      sectionTitle: t,
      requests: e
    })
  };
t.default = () => {
  let e = (0, _.default)();
  return (0, a.jsxs)("div", {
    className: N.container,
    children: [e ? (0, a.jsx)(v, {}) : (0, a.jsx)(R, {}), (0, a.jsx)(L, {}), (0, a.jsx)(D, {}), (0, a.jsx)(M, {}), (0, a.jsx)(y, {})]
  })
}