n(47120);
var s = n(735250),
  a = n(470079),
  i = n(512722),
  l = n.n(i),
  r = n(399606),
  o = n(481060),
  c = n(626135),
  d = n(709054),
  u = n(914788),
  E = n(546791),
  _ = n(259756),
  h = n(785681),
  m = n(985002),
  T = n(858719),
  C = n(780985),
  g = n(880257),
  p = n(631885),
  N = n(240351),
  I = n(792258),
  A = n(657825),
  f = n(198952),
  x = n(329242),
  S = n(895328),
  v = n(292352),
  R = n(981631),
  M = n(689938),
  O = n(270285);

function L() {
  let e = a.useCallback(() => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("66462")]).then(n.bind(n, 756226));
      return t => (0, s.jsx)(e, {
        ...t
      })
    })
  }, []);
  return (0, s.jsx)(o.Clickable, {
    className: O.tooltip,
    onClick: e,
    children: (0, s.jsx)(o.CircleInformationIcon, {
      size: "custom",
      color: "currentColor",
      className: O.icon,
      width: 15,
      height: 15
    })
  })
}

function Z(e) {
  let {
    displayType: t
  } = e, n = a.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(M.Z.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, o.ToastType.FAILURE))
  }, []), i = (0, g.Z)(), r = (0, T.ws)(t), c = (0, T.C7)(t), {
    loadMore: u,
    isMoreLoading: h
  } = (0, m.G)({
    onError: n
  }), C = v.tx.get(t), [p, N] = a.useState(v.iB), f = (0, _.Xi)({
    location: "family_center_activity_section_web"
  }), x = a.useCallback(() => {
    N(e => e + v.iB), u(t)
  }, [t, u]);
  l()(C, "No text for action type");
  let S = C.sectionHeader(c),
    R = a.useCallback(e => {
      let {
        row: t
      } = e, n = r[t];
      return (0, E.iB)(n) ? (0, s.jsx)(A.Z, {
        userId: n.entity_id,
        timestamp: d.default.extractTimestamp(n.event_id),
        timestampFormatter: C.timestampFormatter
      }, n.event_id) : (0, E.f0)(n) ? (0, s.jsx)(I.Z, {
        guildId: n.entity_id
      }, n.event_id) : void 0
    }, [r, C.timestampFormatter]),
    L = a.useCallback(() => (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(o.Text, {
        className: O.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: S
      }), void 0 !== C.sectionDescription ? (0, s.jsx)(o.Text, {
        className: O.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: C.sectionDescription(null != i && i, f)
      }) : null]
    }), [S, C, i, f]);
  if (0 === r.length) return null;
  let Z = r.slice(0, p);
  return (0, s.jsxs)("div", {
    className: O.actionSection,
    children: [L(), (0, s.jsx)("div", {
      className: O.actions,
      style: {
        maxHeight: 65 * Z.length
      },
      children: Z.map((e, t) => R({
        row: t
      }))
    }), Z.length !== c ? (0, s.jsx)(o.Clickable, {
      className: O.loadMoreBar,
      onClick: x,
      role: "button",
      children: h ? (0, s.jsx)(o.Spinner, {
        type: o.Spinner.Type.PULSING_ELLIPSIS,
        className: O.spinner
      }) : (0, s.jsx)(o.Text, {
        className: O.loadMore,
        variant: "text-sm/bold",
        children: M.Z.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
          pageSize: Math.min(c - Z.length, v.iB)
        })
      })
    }) : null]
  })
}
let j = () => {
    let e = (0, g.Z)(),
      t = (0, p.mq)(v.ne.ACTIVE),
      n = (0, h.o)(M.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
        activeLinks: t.length
      }), M.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
      a = (0, E.Qr)(!!e),
      i = (0, p.Rd)(a);
    return e && t.length > 1 ? (0, s.jsx)(o.Text, {
      variant: "eyebrow",
      children: i
    }) : (0, s.jsxs)(s.Fragment, {
      children: [e ? null : (0, s.jsx)(o.EyeIcon, {
        size: "xs",
        color: "currentColor",
        className: O.icon
      }), (0, s.jsx)(o.Text, {
        variant: "eyebrow",
        children: n
      })]
    })
  },
  y = e => {
    let {
      userId: t,
      subText: n,
      avatarSize: a = o.AvatarSizes.SIZE_40
    } = e, i = (0, C.I)(t);
    return void 0 === i ? null : (0, s.jsxs)("div", {
      className: O.accountRow,
      children: [(0, s.jsx)(f.r, {
        user: i,
        avatarSize: a
      }), (0, s.jsxs)("div", {
        className: O.headerText,
        children: [(0, s.jsx)(x.Z, {
          user: i
        }), void 0 !== n ? (0, s.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        }) : null]
      })]
    })
  },
  b = () => {
    let e = (0, p.mq)(v.ne.ACTIVE),
      t = (0, r.e7)([u.Z], () => u.Z.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, m.G)({}),
      i = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      l = a.useCallback(e => (0, s.jsx)(y, {
        userId: e.value,
        avatarSize: o.AvatarSizes.SIZE_24
      }), []);
    return (0, s.jsx)(o.Select, {
      className: O.select,
      renderOptionLabel: l,
      renderOptionValue: e => {
        let [t] = e;
        return l(t)
      },
      serialize: e => e,
      select: e => {
        n(e), c.default.track(R.rMx.FAMILY_CENTER_ACTION, {
          action: v.YC.SelectTeen
        })
      },
      isSelected: e => e === t,
      options: i
    })
  },
  P = e => {
    let {
      userId: t
    } = e, n = (0, g.Z)(), a = (0, p.mq)(v.ne.ACTIVE), i = (0, E.Qr)(!!n), l = (0, p.Rd)(i);
    return n && 1 !== a.length ? (0, s.jsx)(b, {}) : (0, s.jsx)(y, {
      userId: t,
      subText: l
    })
  };
t.Z = e => {
  let {
    user: t
  } = e, n = Array.from(v.tx.entries()), a = (0, T.kE)(), i = (0, E.t3)(), l = (0, p.Rd)(i);
  return (0, s.jsxs)("div", {
    className: O.container,
    children: [(0, s.jsxs)("div", {
      className: O.connectedCounter,
      children: [(0, s.jsx)(j, {}), (0, s.jsx)(L, {})]
    }), (0, s.jsxs)("div", {
      className: O.card,
      children: [(0, s.jsx)("div", {
        className: O.header,
        children: (0, s.jsx)(P, {
          userId: t.id
        })
      }), (0, s.jsxs)("div", {
        className: O.content,
        children: [(0, s.jsx)("div", {
          className: O.activityCounterRow,
          children: n.map(e => {
            let [t, n] = e;
            return (0, s.jsx)(N.Z, {
              displayType: t,
              header: n.tooltipHeader()
            }, "counter-".concat(t))
          })
        }), (0, s.jsx)("div", {
          className: O.activityOverview,
          children: a ? n.map(e => {
            let [t] = e;
            return (0, s.jsx)(Z, {
              displayType: t
            }, "".concat(t, "-list"))
          }) : (0, s.jsx)(S.Z, {
            className: O.emptyActivity,
            text: null != l ? l : ""
          })
        })]
      })]
    })]
  })
}