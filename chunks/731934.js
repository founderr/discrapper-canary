var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(91192),
  o = s(481060),
  c = s(209613),
  E = s(151827),
  _ = s(785681),
  u = s(485664),
  d = s(880257),
  T = s(631885),
  I = s(895328),
  R = s(568671),
  A = s(419821),
  N = s(367515),
  C = s(250285),
  g = s(292352),
  m = s(689938),
  M = s(885342),
  S = s(331651),
  p = s(926895);

function h(e) {
  let {
    header: t,
    description: s,
    stepNumber: a
  } = e;
  return (0, n.jsxs)("div", {
    className: M.step,
    children: [(0, n.jsx)("div", {
      className: M.stepNumber,
      children: (0, n.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-brand",
        children: (0, n.jsx)(o.HeadingLevel, {
          children: a
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
        children: s
      })]
    })]
  })
}

function f() {
  return (0, n.jsxs)("div", {
    className: r()(M.box, M.linkingBanner, M.linkingBannerParent),
    children: [(0, n.jsxs)("div", {
      className: r()(M.linkingBannerUpper),
      children: [(0, n.jsxs)("div", {
        className: M.__invalid_header,
        children: [(0, n.jsx)(o.Heading, {
          className: S.marginBottom8,
          variant: "heading-xl/medium",
          children: (0, n.jsx)(o.HeadingLevel, {
            children: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_PARENT
          })
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: S.marginBottom20,
          children: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_PARENT
        })]
      }), (0, n.jsx)("img", {
        className: M.bannerArt,
        src: p,
        alt: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
      })]
    }), (0, n.jsxs)("div", {
      className: M.steps,
      children: [(0, n.jsx)(h, {
        header: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_HEADER,
        description: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_DESCRIPTION,
        stepNumber: 1
      }), (0, n.jsx)(h, {
        header: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_HEADER,
        description: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_DESCRIPTION,
        stepNumber: 2
      }), (0, n.jsx)(h, {
        header: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_HEADER,
        description: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_DESCRIPTION,
        stepNumber: 3
      })]
    })]
  })
}

function O() {
  let e = (0, T.VM)();
  return (0, n.jsxs)("div", {
    className: r()(M.box, M.linkingBanner),
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsx)(o.Heading, {
        className: S.marginBottom8,
        variant: "heading-xl/medium",
        children: (0, n.jsx)(o.HeadingLevel, {
          children: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_TEEN
        })
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: S.marginBottom20,
        children: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_TEEN.format({
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), e ? null : (0, n.jsx)(R.Z, {})]
    }), (0, n.jsx)("img", {
      className: M.bannerArt,
      src: p,
      alt: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
    })]
  })
}

function x(e) {
  let {
    sectionType: t,
    sectionTitle: s,
    requests: i
  } = e, r = a.useRef(null), _ = "".concat(t, "-list"), u = (0, c.Z)(_), d = a.useCallback(e => {
    let {
      row: s,
      listIndex: a
    } = e, r = i[s], l = a === i.length;
    return null == r ? null : (0, n.jsx)(C.Z, {
      userId: r.id,
      isLast: l,
      children: () => t === g.ne.ACTIVE ? (0, n.jsx)(A.u, {
        user: r
      }) : (0, n.jsx)(N.B, {
        user: r
      })
    }, r.id)
  }, [i, t]), T = a.useCallback(() => (0, n.jsx)(E.Z, {
    className: M.__invalid_sectionTitle,
    children: (0, n.jsx)(o.Text, {
      className: S.marginBottom8,
      variant: "eyebrow",
      color: "header-secondary",
      children: s
    })
  }, "title"), [s]);
  return (0, n.jsx)("div", {
    className: M.section,
    children: (0, n.jsx)(l.bG, {
      navigator: u,
      children: (0, n.jsx)(l.SJ, {
        children: e => {
          let {
            ref: t,
            role: a,
            ...l
          } = e;
          return (0, n.jsx)(o.List, {
            className: M.__invalid_list,
            innerRole: a,
            innerAriaLabel: s,
            ref: e => {
              var s;
              r.current = e, t.current = null !== (s = null == e ? void 0 : e.getScrollerNode()) && void 0 !== s ? s : null
            },
            sectionHeight: g.zE,
            rowHeight: g.ip,
            renderSection: T,
            renderRow: d,
            sections: [i.length],
            chunkSize: 30,
            fade: !0,
            ...l
          }, _)
        }
      })
    })
  })
}
let L = () => {
    let e = (0, d.Z)(),
      t = (0, T.mq)(g.ne.ACTIVE),
      s = e ? g.AG : g.i0,
      a = {
        count: t.length,
        max: s
      },
      i = (0, _.o)(m.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_TEEN.format(a), m.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_PARENT.format(a));
    return (0, n.jsx)(n.Fragment, {
      children: t.length > 0 ? (0, n.jsx)(x, {
        sectionType: g.ne.ACTIVE,
        sectionTitle: i,
        requests: t
      }) : (0, n.jsxs)("div", {
        className: M.section,
        children: [(0, n.jsx)(o.Text, {
          className: S.marginBottom8,
          variant: "eyebrow",
          color: "header-secondary",
          children: i
        }), (0, n.jsx)("div", {
          className: M.box,
          children: (0, n.jsx)(I.Z, {
            text: m.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_EMPTY_DESCRIPTION
          })
        })]
      })
    })
  },
  P = () => {
    let e = (0, T.VM)(),
      t = (0, d.Z)() ? g.AG : g.i0,
      s = (0, _.o)(m.Z.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_TEEN.format({
        maxConnections: t
      }), m.Z.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_PARENT.format({
        maxConnections: t
      }));
    return e ? (0, n.jsx)("div", {
      className: M.maxConnectionInfo,
      children: (0, n.jsx)(o.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: s
      })
    }) : null
  },
  v = () => (0, u.o)() ? (0, n.jsxs)("div", {
    className: r()(M.__invalid_helpLineInfo, S.marginTop20),
    children: [(0, n.jsx)(o.Heading, {
      className: M.supportHeader,
      variant: "heading-sm/semibold",
      children: (0, n.jsx)(o.HeadingLevel, {
        children: m.Z.Messages.FAMILY_CENTER_HELP_LINE_HEADER
      })
    }), (0, n.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: m.Z.Messages.FAMILY_CENTER_HELP_LINE_CONTENT.format({
        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
      })
    })]
  }) : null,
  Z = () => {
    let e = (0, T.mq)(g.ne.PENDING),
      t = (0, _.o)(m.Z.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_TEEN.format({
        count: e.length
      }), m.Z.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_PARENT.format({
        count: e.length
      }));
    return 0 === e.length ? null : (0, n.jsx)(x, {
      sectionType: g.ne.PENDING,
      sectionTitle: t,
      requests: e
    })
  };
t.Z = () => {
  let e = (0, d.Z)();
  return (0, n.jsxs)("div", {
    className: M.container,
    children: [e ? (0, n.jsx)(f, {}) : (0, n.jsx)(O, {}), (0, n.jsx)(L, {}), (0, n.jsx)(Z, {}), (0, n.jsx)(P, {}), (0, n.jsx)(v, {})]
  })
}