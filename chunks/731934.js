var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(91192),
  o = n(481060),
  c = n(209613),
  d = n(151827),
  u = n(785681),
  E = n(485664),
  _ = n(880257),
  h = n(631885),
  m = n(895328),
  T = n(568671),
  C = n(419821),
  g = n(367515),
  p = n(250285),
  N = n(292352),
  I = n(689938),
  A = n(885342),
  f = n(331651),
  x = n(926895);

function S(e) {
  let {
    header: t,
    description: n,
    stepNumber: a
  } = e;
  return (0, s.jsxs)("div", {
    className: A.step,
    children: [(0, s.jsx)("div", {
      className: A.stepNumber,
      children: (0, s.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-brand",
        children: (0, s.jsx)(o.HeadingLevel, {
          children: a
        })
      })
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(o.Heading, {
        variant: "heading-sm/bold",
        children: (0, s.jsx)(o.HeadingLevel, {
          children: t
        })
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: n
      })]
    })]
  })
}

function v() {
  return (0, s.jsxs)("div", {
    className: l()(A.box, A.linkingBanner, A.linkingBannerParent),
    children: [(0, s.jsxs)("div", {
      className: l()(A.linkingBannerUpper),
      children: [(0, s.jsxs)("div", {
        className: A.__invalid_header,
        children: [(0, s.jsx)(o.Heading, {
          className: f.marginBottom8,
          variant: "heading-xl/medium",
          children: (0, s.jsx)(o.HeadingLevel, {
            children: I.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_PARENT
          })
        }), (0, s.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: f.marginBottom20,
          children: I.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_PARENT
        })]
      }), (0, s.jsx)("img", {
        className: A.bannerArt,
        src: x,
        alt: I.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
      })]
    }), (0, s.jsxs)("div", {
      className: A.steps,
      children: [(0, s.jsx)(S, {
        header: I.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_HEADER,
        description: I.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_DESCRIPTION,
        stepNumber: 1
      }), (0, s.jsx)(S, {
        header: I.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_HEADER,
        description: I.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_DESCRIPTION,
        stepNumber: 2
      }), (0, s.jsx)(S, {
        header: I.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_HEADER,
        description: I.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_DESCRIPTION,
        stepNumber: 3
      })]
    })]
  })
}

function R() {
  let e = (0, h.VM)();
  return (0, s.jsxs)("div", {
    className: l()(A.box, A.linkingBanner),
    children: [(0, s.jsxs)("div", {
      children: [(0, s.jsx)(o.Heading, {
        className: f.marginBottom8,
        variant: "heading-xl/medium",
        children: (0, s.jsx)(o.HeadingLevel, {
          children: I.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_TEEN
        })
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: f.marginBottom20,
        children: I.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_TEEN.format({
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), e ? null : (0, s.jsx)(T.Z, {})]
    }), (0, s.jsx)("img", {
      className: A.bannerArt,
      src: x,
      alt: I.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
    })]
  })
}

function M(e) {
  let {
    sectionType: t,
    sectionTitle: n,
    requests: i
  } = e, l = a.useRef(null), u = "".concat(t, "-list"), E = (0, c.Z)(u), _ = a.useCallback(e => {
    let {
      row: n,
      listIndex: a
    } = e, l = i[n], r = a === i.length;
    return null == l ? null : (0, s.jsx)(p.Z, {
      userId: l.id,
      isLast: r,
      children: () => t === N.ne.ACTIVE ? (0, s.jsx)(C.u, {
        user: l
      }) : (0, s.jsx)(g.B, {
        user: l
      })
    }, l.id)
  }, [i, t]), h = a.useCallback(() => (0, s.jsx)(d.Z, {
    className: A.__invalid_sectionTitle,
    children: (0, s.jsx)(o.Text, {
      className: f.marginBottom8,
      variant: "eyebrow",
      color: "header-secondary",
      children: n
    })
  }, "title"), [n]);
  return (0, s.jsx)("div", {
    className: A.section,
    children: (0, s.jsx)(r.bG, {
      navigator: E,
      children: (0, s.jsx)(r.SJ, {
        children: e => {
          let {
            ref: t,
            role: a,
            ...r
          } = e;
          return (0, s.jsx)(o.List, {
            className: A.__invalid_list,
            innerRole: a,
            innerAriaLabel: n,
            ref: e => {
              var n;
              l.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
            },
            sectionHeight: N.zE,
            rowHeight: N.ip,
            renderSection: h,
            renderRow: _,
            sections: [i.length],
            chunkSize: 30,
            fade: !0,
            ...r
          }, u)
        }
      })
    })
  })
}
let O = () => {
    let e = (0, _.Z)(),
      t = (0, h.mq)(N.ne.ACTIVE),
      n = e ? N.AG : N.i0,
      a = {
        count: t.length,
        max: n
      },
      i = (0, u.o)(I.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_TEEN.format(a), I.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_PARENT.format(a));
    return (0, s.jsx)(s.Fragment, {
      children: t.length > 0 ? (0, s.jsx)(M, {
        sectionType: N.ne.ACTIVE,
        sectionTitle: i,
        requests: t
      }) : (0, s.jsxs)("div", {
        className: A.section,
        children: [(0, s.jsx)(o.Text, {
          className: f.marginBottom8,
          variant: "eyebrow",
          color: "header-secondary",
          children: i
        }), (0, s.jsx)("div", {
          className: A.box,
          children: (0, s.jsx)(m.Z, {
            text: I.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_EMPTY_DESCRIPTION
          })
        })]
      })
    })
  },
  L = () => {
    let e = (0, h.VM)(),
      t = (0, _.Z)() ? N.AG : N.i0,
      n = (0, u.o)(I.Z.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_TEEN.format({
        maxConnections: t
      }), I.Z.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_PARENT.format({
        maxConnections: t
      }));
    return e ? (0, s.jsx)("div", {
      className: A.maxConnectionInfo,
      children: (0, s.jsx)(o.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: n
      })
    }) : null
  },
  Z = () => (0, E.o)() ? (0, s.jsxs)("div", {
    className: l()(A.__invalid_helpLineInfo, f.marginTop20),
    children: [(0, s.jsx)(o.Heading, {
      className: A.supportHeader,
      variant: "heading-sm/semibold",
      children: (0, s.jsx)(o.HeadingLevel, {
        children: I.Z.Messages.FAMILY_CENTER_HELP_LINE_HEADER
      })
    }), (0, s.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: I.Z.Messages.FAMILY_CENTER_HELP_LINE_CONTENT.format({
        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
      })
    })]
  }) : null,
  j = () => {
    let e = (0, h.mq)(N.ne.PENDING),
      t = (0, u.o)(I.Z.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_TEEN.format({
        count: e.length
      }), I.Z.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_PARENT.format({
        count: e.length
      }));
    return 0 === e.length ? null : (0, s.jsx)(M, {
      sectionType: N.ne.PENDING,
      sectionTitle: t,
      requests: e
    })
  };
t.Z = () => {
  let e = (0, _.Z)();
  return (0, s.jsxs)("div", {
    className: A.container,
    children: [e ? (0, s.jsx)(v, {}) : (0, s.jsx)(R, {}), (0, s.jsx)(O, {}), (0, s.jsx)(j, {}), (0, s.jsx)(L, {}), (0, s.jsx)(Z, {})]
  })
}