n(47120);
var s = n(735250),
  i = n(470079),
  a = n(512722),
  l = n.n(a),
  r = n(399606),
  c = n(481060),
  o = n(626135),
  d = n(709054),
  u = n(914788),
  E = n(546791),
  _ = n(259756),
  h = n(785681),
  T = n(985002),
  I = n(858719),
  C = n(780985),
  N = n(880257),
  g = n(631885),
  A = n(240351),
  m = n(792258),
  f = n(657825),
  p = n(198952),
  R = n(329242),
  M = n(895328),
  O = n(292352),
  S = n(981631),
  L = n(689938),
  v = n(270285);

function Z() {
  let e = i.useCallback(() => {
    (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("66462")]).then(n.bind(n, 756226));
      return t => (0, s.jsx)(e, {
        ...t
      })
    })
  }, []);
  return (0, s.jsx)(c.Clickable, {
    className: v.tooltip,
    onClick: e,
    children: (0, s.jsx)(c.CircleInformationIcon, {
      size: "custom",
      color: "currentColor",
      className: v.icon,
      width: 15,
      height: 15
    })
  })
}

function x(e) {
  let {
    displayType: t
  } = e, n = i.useCallback(() => {
    (0, c.showToast)((0, c.createToast)(L.Z.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, c.ToastType.FAILURE))
  }, []), a = (0, N.Z)(), r = (0, I.ws)(t), o = (0, I.C7)(t), {
    loadMore: u,
    isMoreLoading: h
  } = (0, T.G)({
    onError: n
  }), C = O.tx.get(t), [g, A] = i.useState(O.iB), p = (0, _.Xi)({
    location: "family_center_activity_section_web"
  }), R = i.useCallback(() => {
    A(e => e + O.iB), u(t)
  }, [t, u]);
  l()(C, "No text for action type");
  let M = C.sectionHeader(o),
    S = i.useCallback(e => {
      let {
        row: t
      } = e, n = r[t];
      return (0, E.iB)(n) ? (0, s.jsx)(f.Z, {
        userId: n.entity_id,
        timestamp: d.default.extractTimestamp(n.event_id),
        timestampFormatter: C.timestampFormatter
      }, n.event_id) : (0, E.f0)(n) ? (0, s.jsx)(m.Z, {
        guildId: n.entity_id
      }, n.event_id) : void 0
    }, [r, C.timestampFormatter]),
    Z = i.useCallback(() => (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(c.Text, {
        className: v.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: M
      }), void 0 !== C.sectionDescription ? (0, s.jsx)(c.Text, {
        className: v.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: C.sectionDescription(null != a && a, p)
      }) : null]
    }), [M, C, a, p]);
  if (0 === r.length) return null;
  let x = r.slice(0, g);
  return (0, s.jsxs)("div", {
    className: v.actionSection,
    children: [Z(), (0, s.jsx)("div", {
      className: v.actions,
      style: {
        maxHeight: 65 * x.length
      },
      children: x.map((e, t) => S({
        row: t
      }))
    }), x.length !== o ? (0, s.jsx)(c.Clickable, {
      className: v.loadMoreBar,
      onClick: R,
      role: "button",
      children: h ? (0, s.jsx)(c.Spinner, {
        type: c.Spinner.Type.PULSING_ELLIPSIS,
        className: v.spinner
      }) : (0, s.jsx)(c.Text, {
        className: v.loadMore,
        variant: "text-sm/bold",
        children: L.Z.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
          pageSize: Math.min(o - x.length, O.iB)
        })
      })
    }) : null]
  })
}
let D = () => {
    let e = (0, N.Z)(),
      t = (0, g.mq)(O.ne.ACTIVE),
      n = (0, h.o)(L.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
        activeLinks: t.length
      }), L.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
      i = (0, E.Qr)(!!e),
      a = (0, g.Rd)(i);
    return e && t.length > 1 ? (0, s.jsx)(c.Text, {
      variant: "eyebrow",
      children: a
    }) : (0, s.jsxs)(s.Fragment, {
      children: [e ? null : (0, s.jsx)(c.EyeIcon, {
        size: "xs",
        color: "currentColor",
        className: v.icon
      }), (0, s.jsx)(c.Text, {
        variant: "eyebrow",
        children: n
      })]
    })
  },
  b = e => {
    let {
      userId: t,
      subText: n,
      avatarSize: i = c.AvatarSizes.SIZE_40
    } = e, a = (0, C.I)(t);
    return void 0 === a ? null : (0, s.jsxs)("div", {
      className: v.accountRow,
      children: [(0, s.jsx)(p.r, {
        user: a,
        avatarSize: i
      }), (0, s.jsxs)("div", {
        className: v.headerText,
        children: [(0, s.jsx)(R.Z, {
          user: a
        }), void 0 !== n ? (0, s.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        }) : null]
      })]
    })
  },
  y = () => {
    let e = (0, g.mq)(O.ne.ACTIVE),
      t = (0, r.e7)([u.Z], () => u.Z.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, T.G)({}),
      a = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      l = i.useCallback(e => (0, s.jsx)(b, {
        userId: e.value,
        avatarSize: c.AvatarSizes.SIZE_24
      }), []);
    return (0, s.jsx)(c.Select, {
      className: v.select,
      renderOptionLabel: l,
      renderOptionValue: e => {
        let [t] = e;
        return l(t)
      },
      serialize: e => e,
      select: e => {
        n(e), o.default.track(S.rMx.FAMILY_CENTER_ACTION, {
          action: O.YC.SelectTeen
        })
      },
      isSelected: e => e === t,
      options: a
    })
  },
  P = e => {
    let {
      userId: t
    } = e, n = (0, N.Z)(), i = (0, g.mq)(O.ne.ACTIVE), a = (0, E.Qr)(!!n), l = (0, g.Rd)(a);
    return n && 1 !== i.length ? (0, s.jsx)(y, {}) : (0, s.jsx)(b, {
      userId: t,
      subText: l
    })
  };
t.Z = e => {
  let {
    user: t
  } = e, n = Array.from(O.tx.entries()), i = (0, I.kE)(), a = (0, E.t3)(), l = (0, g.Rd)(a);
  return (0, s.jsxs)("div", {
    className: v.container,
    children: [(0, s.jsxs)("div", {
      className: v.connectedCounter,
      children: [(0, s.jsx)(D, {}), (0, s.jsx)(Z, {})]
    }), (0, s.jsxs)("div", {
      className: v.card,
      children: [(0, s.jsx)("div", {
        className: v.header,
        children: (0, s.jsx)(P, {
          userId: t.id
        })
      }), (0, s.jsxs)("div", {
        className: v.content,
        children: [(0, s.jsx)("div", {
          className: v.activityCounterRow,
          children: n.map(e => {
            let [t, n] = e;
            return (0, s.jsx)(A.Z, {
              displayType: t,
              header: n.tooltipHeader()
            }, "counter-".concat(t))
          })
        }), (0, s.jsx)("div", {
          className: v.activityOverview,
          children: i ? n.map(e => {
            let [t] = e;
            return (0, s.jsx)(x, {
              displayType: t
            }, "".concat(t, "-list"))
          }) : (0, s.jsx)(M.Z, {
            className: v.emptyActivity,
            text: null != l ? l : ""
          })
        })]
      })]
    })]
  })
}