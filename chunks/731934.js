"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("91192"),
  o = a("481060"),
  u = a("209613"),
  d = a("151827"),
  c = a("785681"),
  f = a("485664"),
  E = a("880257"),
  h = a("631885"),
  _ = a("895328"),
  C = a("568671"),
  m = a("419821"),
  S = a("367515"),
  p = a("250285"),
  I = a("292352"),
  g = a("689938"),
  T = a("914749"),
  A = a("949086"),
  N = a("926895");

function v(e) {
  let {
    header: t,
    description: a,
    stepNumber: s
  } = e;
  return (0, n.jsxs)("div", {
    className: T.step,
    children: [(0, n.jsx)("div", {
      className: T.stepNumber,
      children: (0, n.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-brand",
        children: (0, n.jsx)(o.HeadingLevel, {
          children: s
        })
      })
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-sm/bold",
        children: (0, n.jsx)(o.HeadingLevel, {
          children: t
        })
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: a
      })]
    })]
  })
}

function L() {
  return (0, n.jsxs)("div", {
    className: i()(T.box, T.linkingBanner, T.linkingBannerParent),
    children: [(0, n.jsxs)("div", {
      className: i()(T.linkingBannerUpper),
      children: [(0, n.jsxs)("div", {
        className: T.__invalid_header,
        children: [(0, n.jsx)(o.Heading, {
          className: A.marginBottom8,
          variant: "heading-xl/medium",
          children: (0, n.jsx)(o.HeadingLevel, {
            children: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_PARENT
          })
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: A.marginBottom20,
          children: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_PARENT
        })]
      }), (0, n.jsx)("img", {
        className: T.bannerArt,
        src: N,
        alt: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
      })]
    }), (0, n.jsxs)("div", {
      className: T.steps,
      children: [(0, n.jsx)(v, {
        header: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_HEADER,
        description: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_DESCRIPTION,
        stepNumber: 1
      }), (0, n.jsx)(v, {
        header: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_HEADER,
        description: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_DESCRIPTION,
        stepNumber: 2
      }), (0, n.jsx)(v, {
        header: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_HEADER,
        description: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_DESCRIPTION,
        stepNumber: 3
      })]
    })]
  })
}

function R() {
  let e = (0, h.useHasMaxConnections)();
  return (0, n.jsxs)("div", {
    className: i()(T.box, T.linkingBanner),
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsx)(o.Heading, {
        className: A.marginBottom8,
        variant: "heading-xl/medium",
        children: (0, n.jsx)(o.HeadingLevel, {
          children: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_TEEN
        })
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: A.marginBottom20,
        children: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_TEEN.format({
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), e ? null : (0, n.jsx)(C.default, {})]
    }), (0, n.jsx)("img", {
      className: T.bannerArt,
      src: N,
      alt: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
    })]
  })
}

function O(e) {
  let {
    sectionType: t,
    sectionTitle: a,
    requests: l
  } = e, i = s.useRef(null), c = "".concat(t, "-list"), f = (0, u.default)(c), E = s.useCallback(e => {
    let {
      row: a,
      listIndex: s
    } = e, i = l[a], r = s === l.length;
    return null == i ? null : (0, n.jsx)(p.default, {
      userId: i.id,
      isLast: r,
      children: () => t === I.UserLinkStatus.ACTIVE ? (0, n.jsx)(m.UserLinkAcceptedRequestRow, {
        user: i
      }) : (0, n.jsx)(S.UserLinkPendingRequestRow, {
        user: i
      })
    }, i.id)
  }, [l, t]), h = s.useCallback(() => (0, n.jsx)(d.default, {
    className: T.__invalid_sectionTitle,
    children: (0, n.jsx)(o.Text, {
      className: A.marginBottom8,
      variant: "eyebrow",
      color: "header-secondary",
      children: a
    })
  }, "title"), [a]);
  return (0, n.jsx)("div", {
    className: T.section,
    children: (0, n.jsx)(r.ListNavigatorProvider, {
      navigator: f,
      children: (0, n.jsx)(r.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            role: s,
            ...r
          } = e;
          return (0, n.jsx)(o.List, {
            className: T.__invalid_list,
            innerRole: s,
            innerAriaLabel: a,
            ref: e => {
              var a;
              i.current = e, t.current = null !== (a = null == e ? void 0 : e.getScrollerNode()) && void 0 !== a ? a : null
            },
            sectionHeight: I.FAMILY_CENTER_REQUEST_SECTION_HEIGHT,
            rowHeight: I.FAMILY_CENTER_REQUEST_ROW_HEIGHT,
            renderSection: h,
            renderRow: E,
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
let M = () => {
    let e = (0, E.default)(),
      t = (0, h.useUserForLinkStatus)(I.UserLinkStatus.ACTIVE),
      a = e ? I.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : I.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS,
      s = {
        count: t.length,
        max: a
      },
      l = (0, c.useAgeSpecificText)(g.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_TEEN.format(s), g.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_PARENT.format(s));
    return (0, n.jsx)(n.Fragment, {
      children: t.length > 0 ? (0, n.jsx)(O, {
        sectionType: I.UserLinkStatus.ACTIVE,
        sectionTitle: l,
        requests: t
      }) : (0, n.jsxs)("div", {
        className: T.section,
        children: [(0, n.jsx)(o.Text, {
          className: A.marginBottom8,
          variant: "eyebrow",
          color: "header-secondary",
          children: l
        }), (0, n.jsx)("div", {
          className: T.box,
          children: (0, n.jsx)(_.default, {
            text: g.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_EMPTY_DESCRIPTION
          })
        })]
      })
    })
  },
  P = () => {
    let e = (0, h.useHasMaxConnections)(),
      t = (0, E.default)() ? I.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : I.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS,
      a = (0, c.useAgeSpecificText)(g.default.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_TEEN.format({
        maxConnections: t
      }), g.default.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_PARENT.format({
        maxConnections: t
      }));
    return e ? (0, n.jsx)("div", {
      className: T.maxConnectionInfo,
      children: (0, n.jsx)(o.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: a
      })
    }) : null
  },
  x = () => (0, f.useShouldShowHelplineLink)() ? (0, n.jsxs)("div", {
    className: i()(T.__invalid_helpLineInfo, A.marginTop20),
    children: [(0, n.jsx)(o.Heading, {
      className: T.supportHeader,
      variant: "heading-sm/semibold",
      children: (0, n.jsx)(o.HeadingLevel, {
        children: g.default.Messages.FAMILY_CENTER_HELP_LINE_HEADER
      })
    }), (0, n.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: g.default.Messages.FAMILY_CENTER_HELP_LINE_CONTENT.format({
        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
      })
    })]
  }) : null,
  y = () => {
    let e = (0, h.useUserForLinkStatus)(I.UserLinkStatus.PENDING),
      t = (0, c.useAgeSpecificText)(g.default.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_TEEN.format({
        count: e.length
      }), g.default.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_PARENT.format({
        count: e.length
      }));
    return 0 === e.length ? null : (0, n.jsx)(O, {
      sectionType: I.UserLinkStatus.PENDING,
      sectionTitle: t,
      requests: e
    })
  };
t.default = () => {
  let e = (0, E.default)();
  return (0, n.jsxs)("div", {
    className: T.container,
    children: [e ? (0, n.jsx)(L, {}) : (0, n.jsx)(R, {}), (0, n.jsx)(M, {}), (0, n.jsx)(y, {}), (0, n.jsx)(P, {}), (0, n.jsx)(x, {})]
  })
}