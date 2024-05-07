"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("91192"),
  o = n("481060"),
  u = n("209613"),
  d = n("151827"),
  c = n("785681"),
  f = n("485664"),
  E = n("880257"),
  h = n("631885"),
  _ = n("895328"),
  C = n("568671"),
  m = n("419821"),
  S = n("367515"),
  p = n("250285"),
  I = n("292352"),
  g = n("689938"),
  T = n("914749"),
  A = n("949086"),
  N = n("926895");

function v(e) {
  let {
    header: t,
    description: n,
    stepNumber: s
  } = e;
  return (0, a.jsxs)("div", {
    className: T.step,
    children: [(0, a.jsx)("div", {
      className: T.stepNumber,
      children: (0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-brand",
        children: (0, a.jsx)(o.HeadingLevel, {
          children: s
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
        children: n
      })]
    })]
  })
}

function R() {
  return (0, a.jsxs)("div", {
    className: i()(T.box, T.linkingBanner, T.linkingBannerParent),
    children: [(0, a.jsxs)("div", {
      className: i()(T.linkingBannerUpper),
      children: [(0, a.jsxs)("div", {
        className: T.__invalid_header,
        children: [(0, a.jsx)(o.Heading, {
          className: A.marginBottom8,
          variant: "heading-xl/medium",
          children: (0, a.jsx)(o.HeadingLevel, {
            children: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_PARENT
          })
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: A.marginBottom20,
          children: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_PARENT
        })]
      }), (0, a.jsx)("img", {
        className: T.bannerArt,
        src: N,
        alt: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
      })]
    }), (0, a.jsxs)("div", {
      className: T.steps,
      children: [(0, a.jsx)(v, {
        header: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_HEADER,
        description: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_DESCRIPTION,
        stepNumber: 1
      }), (0, a.jsx)(v, {
        header: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_HEADER,
        description: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_DESCRIPTION,
        stepNumber: 2
      }), (0, a.jsx)(v, {
        header: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_HEADER,
        description: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_DESCRIPTION,
        stepNumber: 3
      })]
    })]
  })
}

function L() {
  let e = (0, h.useHasMaxConnections)();
  return (0, a.jsxs)("div", {
    className: i()(T.box, T.linkingBanner),
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(o.Heading, {
        className: A.marginBottom8,
        variant: "heading-xl/medium",
        children: (0, a.jsx)(o.HeadingLevel, {
          children: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_TEEN
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: A.marginBottom20,
        children: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_TEEN.format({
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), e ? null : (0, a.jsx)(C.default, {})]
    }), (0, a.jsx)("img", {
      className: T.bannerArt,
      src: N,
      alt: g.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
    })]
  })
}

function O(e) {
  let {
    sectionType: t,
    sectionTitle: n,
    requests: l
  } = e, i = s.useRef(null), c = "".concat(t, "-list"), f = (0, u.default)(c), E = s.useCallback(e => {
    let {
      row: n,
      listIndex: s
    } = e, i = l[n], r = s === l.length;
    return null == i ? null : (0, a.jsx)(p.default, {
      userId: i.id,
      isLast: r,
      children: () => t === I.UserLinkStatus.ACTIVE ? (0, a.jsx)(m.UserLinkAcceptedRequestRow, {
        user: i
      }) : (0, a.jsx)(S.UserLinkPendingRequestRow, {
        user: i
      })
    }, i.id)
  }, [l, t]), h = s.useCallback(() => (0, a.jsx)(d.default, {
    className: T.__invalid_sectionTitle,
    children: (0, a.jsx)(o.Text, {
      className: A.marginBottom8,
      variant: "eyebrow",
      color: "header-secondary",
      children: n
    })
  }, "title"), [n]);
  return (0, a.jsx)("div", {
    className: T.section,
    children: (0, a.jsx)(r.ListNavigatorProvider, {
      navigator: f,
      children: (0, a.jsx)(r.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            role: s,
            ...r
          } = e;
          return (0, a.jsx)(o.List, {
            className: T.__invalid_list,
            innerRole: s,
            innerAriaLabel: n,
            ref: e => {
              var n;
              i.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
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
      n = e ? I.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : I.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS,
      s = {
        count: t.length,
        max: n
      },
      l = (0, c.useAgeSpecificText)(g.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_TEEN.format(s), g.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_PARENT.format(s));
    return (0, a.jsx)(a.Fragment, {
      children: t.length > 0 ? (0, a.jsx)(O, {
        sectionType: I.UserLinkStatus.ACTIVE,
        sectionTitle: l,
        requests: t
      }) : (0, a.jsxs)("div", {
        className: T.section,
        children: [(0, a.jsx)(o.Text, {
          className: A.marginBottom8,
          variant: "eyebrow",
          color: "header-secondary",
          children: l
        }), (0, a.jsx)("div", {
          className: T.box,
          children: (0, a.jsx)(_.default, {
            text: g.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_EMPTY_DESCRIPTION
          })
        })]
      })
    })
  },
  P = () => {
    let e = (0, h.useHasMaxConnections)(),
      t = (0, E.default)() ? I.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : I.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS,
      n = (0, c.useAgeSpecificText)(g.default.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_TEEN.format({
        maxConnections: t
      }), g.default.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_PARENT.format({
        maxConnections: t
      }));
    return e ? (0, a.jsx)("div", {
      className: T.maxConnectionInfo,
      children: (0, a.jsx)(o.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: n
      })
    }) : null
  },
  y = () => (0, f.useShouldShowHelplineLink)() ? (0, a.jsxs)("div", {
    className: i()(T.__invalid_helpLineInfo, A.marginTop20),
    children: [(0, a.jsx)(o.Heading, {
      className: T.supportHeader,
      variant: "heading-sm/semibold",
      children: (0, a.jsx)(o.HeadingLevel, {
        children: g.default.Messages.FAMILY_CENTER_HELP_LINE_HEADER
      })
    }), (0, a.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: g.default.Messages.FAMILY_CENTER_HELP_LINE_CONTENT.format({
        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
      })
    })]
  }) : null,
  x = () => {
    let e = (0, h.useUserForLinkStatus)(I.UserLinkStatus.PENDING),
      t = (0, c.useAgeSpecificText)(g.default.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_TEEN.format({
        count: e.length
      }), g.default.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_PARENT.format({
        count: e.length
      }));
    return 0 === e.length ? null : (0, a.jsx)(O, {
      sectionType: I.UserLinkStatus.PENDING,
      sectionTitle: t,
      requests: e
    })
  };
t.default = () => {
  let e = (0, E.default)();
  return (0, a.jsxs)("div", {
    className: T.container,
    children: [e ? (0, a.jsx)(R, {}) : (0, a.jsx)(L, {}), (0, a.jsx)(M, {}), (0, a.jsx)(x, {}), (0, a.jsx)(P, {}), (0, a.jsx)(y, {})]
  })
}