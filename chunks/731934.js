var s = n(735250),
  i = n(470079),
  a = n(120356),
  l = n.n(a),
  r = n(91192),
  c = n(481060),
  o = n(209613),
  d = n(151827),
  u = n(785681),
  E = n(485664),
  _ = n(880257),
  h = n(631885),
  T = n(895328),
  I = n(568671),
  C = n(419821),
  N = n(367515),
  g = n(250285),
  A = n(292352),
  m = n(689938),
  f = n(885342),
  p = n(331651),
  R = n(926895);

function M(e) {
  let {
    header: t,
    description: n,
    stepNumber: i
  } = e;
  return (0, s.jsxs)("div", {
    className: f.step,
    children: [(0, s.jsx)("div", {
      className: f.stepNumber,
      children: (0, s.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-brand",
        children: (0, s.jsx)(c.HeadingLevel, {
          children: i
        })
      })
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(c.Heading, {
        variant: "heading-sm/bold",
        children: (0, s.jsx)(c.HeadingLevel, {
          children: t
        })
      }), (0, s.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: n
      })]
    })]
  })
}

function O() {
  return (0, s.jsxs)("div", {
    className: l()(f.box, f.linkingBanner, f.linkingBannerParent),
    children: [(0, s.jsxs)("div", {
      className: l()(f.linkingBannerUpper),
      children: [(0, s.jsxs)("div", {
        className: f.__invalid_header,
        children: [(0, s.jsx)(c.Heading, {
          className: p.marginBottom8,
          variant: "heading-xl/medium",
          children: (0, s.jsx)(c.HeadingLevel, {
            children: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_PARENT
          })
        }), (0, s.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: p.marginBottom20,
          children: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_PARENT
        })]
      }), (0, s.jsx)("img", {
        className: f.bannerArt,
        src: R,
        alt: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
      })]
    }), (0, s.jsxs)("div", {
      className: f.steps,
      children: [(0, s.jsx)(M, {
        header: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_HEADER,
        description: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_DESCRIPTION,
        stepNumber: 1
      }), (0, s.jsx)(M, {
        header: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_HEADER,
        description: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_DESCRIPTION,
        stepNumber: 2
      }), (0, s.jsx)(M, {
        header: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_HEADER,
        description: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_DESCRIPTION,
        stepNumber: 3
      })]
    })]
  })
}

function S() {
  let e = (0, h.VM)();
  return (0, s.jsxs)("div", {
    className: l()(f.box, f.linkingBanner),
    children: [(0, s.jsxs)("div", {
      children: [(0, s.jsx)(c.Heading, {
        className: p.marginBottom8,
        variant: "heading-xl/medium",
        children: (0, s.jsx)(c.HeadingLevel, {
          children: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_TEEN
        })
      }), (0, s.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: p.marginBottom20,
        children: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_TEEN.format({
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), e ? null : (0, s.jsx)(I.Z, {})]
    }), (0, s.jsx)("img", {
      className: f.bannerArt,
      src: R,
      alt: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
    })]
  })
}

function L(e) {
  let {
    sectionType: t,
    sectionTitle: n,
    requests: a
  } = e, l = i.useRef(null), u = "".concat(t, "-list"), E = (0, o.Z)(u), _ = i.useCallback(e => {
    let {
      row: n,
      listIndex: i
    } = e, l = a[n], r = i === a.length;
    return null == l ? null : (0, s.jsx)(g.Z, {
      userId: l.id,
      isLast: r,
      children: () => t === A.ne.ACTIVE ? (0, s.jsx)(C.u, {
        user: l
      }) : (0, s.jsx)(N.B, {
        user: l
      })
    }, l.id)
  }, [a, t]), h = i.useCallback(() => (0, s.jsx)(d.Z, {
    className: f.__invalid_sectionTitle,
    children: (0, s.jsx)(c.Text, {
      className: p.marginBottom8,
      variant: "eyebrow",
      color: "header-secondary",
      children: n
    })
  }, "title"), [n]);
  return (0, s.jsx)("div", {
    className: f.section,
    children: (0, s.jsx)(r.bG, {
      navigator: E,
      children: (0, s.jsx)(r.SJ, {
        children: e => {
          let {
            ref: t,
            role: i,
            ...r
          } = e;
          return (0, s.jsx)(c.List, {
            className: f.__invalid_list,
            innerRole: i,
            innerAriaLabel: n,
            ref: e => {
              var n;
              l.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
            },
            sectionHeight: A.zE,
            rowHeight: A.ip,
            renderSection: h,
            renderRow: _,
            sections: [a.length],
            chunkSize: 30,
            fade: !0,
            ...r
          }, u)
        }
      })
    })
  })
}
let v = () => {
    let e = (0, _.Z)(),
      t = (0, h.mq)(A.ne.ACTIVE),
      n = e ? A.AG : A.i0,
      i = {
        count: t.length,
        max: n
      },
      a = (0, u.o)(m.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_TEEN.format(i), m.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_PARENT.format(i));
    return (0, s.jsx)(s.Fragment, {
      children: t.length > 0 ? (0, s.jsx)(L, {
        sectionType: A.ne.ACTIVE,
        sectionTitle: a,
        requests: t
      }) : (0, s.jsxs)("div", {
        className: f.section,
        children: [(0, s.jsx)(c.Text, {
          className: p.marginBottom8,
          variant: "eyebrow",
          color: "header-secondary",
          children: a
        }), (0, s.jsx)("div", {
          className: f.box,
          children: (0, s.jsx)(T.Z, {
            text: m.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_EMPTY_DESCRIPTION
          })
        })]
      })
    })
  },
  Z = () => {
    let e = (0, h.VM)(),
      t = (0, _.Z)() ? A.AG : A.i0,
      n = (0, u.o)(m.Z.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_TEEN.format({
        maxConnections: t
      }), m.Z.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_PARENT.format({
        maxConnections: t
      }));
    return e ? (0, s.jsx)("div", {
      className: f.maxConnectionInfo,
      children: (0, s.jsx)(c.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: n
      })
    }) : null
  },
  x = () => (0, E.o)() ? (0, s.jsxs)("div", {
    className: l()(f.__invalid_helpLineInfo, p.marginTop20),
    children: [(0, s.jsx)(c.Heading, {
      className: f.supportHeader,
      variant: "heading-sm/semibold",
      children: (0, s.jsx)(c.HeadingLevel, {
        children: m.Z.Messages.FAMILY_CENTER_HELP_LINE_HEADER
      })
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: m.Z.Messages.FAMILY_CENTER_HELP_LINE_CONTENT.format({
        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
      })
    })]
  }) : null,
  D = () => {
    let e = (0, h.mq)(A.ne.PENDING),
      t = (0, u.o)(m.Z.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_TEEN.format({
        count: e.length
      }), m.Z.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_PARENT.format({
        count: e.length
      }));
    return 0 === e.length ? null : (0, s.jsx)(L, {
      sectionType: A.ne.PENDING,
      sectionTitle: t,
      requests: e
    })
  };
t.Z = () => {
  let e = (0, _.Z)();
  return (0, s.jsxs)("div", {
    className: f.container,
    children: [e ? (0, s.jsx)(O, {}) : (0, s.jsx)(S, {}), (0, s.jsx)(v, {}), (0, s.jsx)(D, {}), (0, s.jsx)(Z, {}), (0, s.jsx)(x, {})]
  })
}