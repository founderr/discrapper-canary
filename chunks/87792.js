n(47120);
var s = n(735250),
  a = n(470079),
  i = n(512722),
  r = n.n(i),
  l = n(399606),
  o = n(481060),
  c = n(626135),
  d = n(709054),
  _ = n(914788),
  E = n(546791),
  u = n(259756),
  T = n(785681),
  I = n(985002),
  R = n(858719),
  C = n(780985),
  g = n(880257),
  p = n(631885),
  A = n(240351),
  N = n(792258),
  m = n(657825),
  S = n(198952),
  f = n(329242),
  M = n(895328),
  h = n(292352),
  b = n(981631),
  x = n(689938),
  O = n(270285);

function P() {
  let e = a.useCallback(() => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("66462").then(n.bind(n, 756226));
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

function L(e) {
  let {
    displayType: t
  } = e, n = a.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(x.Z.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, o.ToastType.FAILURE))
  }, []), i = (0, g.Z)(), l = (0, R.ws)(t), c = (0, R.C7)(t), {
    loadMore: _,
    isMoreLoading: T
  } = (0, I.G)({
    onError: n
  }), C = h.tx.get(t), [p, A] = a.useState(h.iB), S = (0, u.Xi)({
    location: "family_center_activity_section_web"
  }), f = a.useCallback(() => {
    A(e => e + h.iB), _(t)
  }, [t, _]);
  r()(C, "No text for action type");
  let M = C.sectionHeader(c),
    b = a.useCallback(e => {
      let {
        row: t
      } = e, n = l[t];
      return (0, E.iB)(n) ? (0, s.jsx)(m.Z, {
        userId: n.entity_id,
        timestamp: d.default.extractTimestamp(n.event_id),
        timestampFormatter: C.timestampFormatter
      }, n.event_id) : (0, E.f0)(n) ? (0, s.jsx)(N.Z, {
        guildId: n.entity_id
      }, n.event_id) : void 0
    }, [l, C.timestampFormatter]),
    P = a.useCallback(() => (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(o.Text, {
        className: O.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: M
      }), void 0 !== C.sectionDescription ? (0, s.jsx)(o.Text, {
        className: O.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: C.sectionDescription(null != i && i, S)
      }) : null]
    }), [M, C, i, S]);
  if (0 === l.length) return null;
  let L = l.slice(0, p);
  return (0, s.jsxs)("div", {
    className: O.actionSection,
    children: [P(), (0, s.jsx)("div", {
      className: O.actions,
      style: {
        maxHeight: 65 * L.length
      },
      children: L.map((e, t) => b({
        row: t
      }))
    }), L.length !== c ? (0, s.jsx)(o.Clickable, {
      className: O.loadMoreBar,
      onClick: f,
      role: "button",
      children: T ? (0, s.jsx)(o.Spinner, {
        type: o.Spinner.Type.PULSING_ELLIPSIS,
        className: O.spinner
      }) : (0, s.jsx)(o.Text, {
        className: O.loadMore,
        variant: "text-sm/bold",
        children: x.Z.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
          pageSize: Math.min(c - L.length, h.iB)
        })
      })
    }) : null]
  })
}
let v = () => {
    let e = (0, g.Z)(),
      t = (0, p.mq)(h.ne.ACTIVE),
      n = (0, T.o)(x.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
        activeLinks: t.length
      }), x.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
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
  Z = e => {
    let {
      userId: t,
      subText: n,
      avatarSize: a = o.AvatarSizes.SIZE_40
    } = e, i = (0, C.I)(t);
    return void 0 === i ? null : (0, s.jsxs)("div", {
      className: O.accountRow,
      children: [(0, s.jsx)(S.r, {
        user: i,
        avatarSize: a
      }), (0, s.jsxs)("div", {
        className: O.headerText,
        children: [(0, s.jsx)(f.Z, {
          user: i
        }), void 0 !== n ? (0, s.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        }) : null]
      })]
    })
  },
  D = () => {
    let e = (0, p.mq)(h.ne.ACTIVE),
      t = (0, l.e7)([_.Z], () => _.Z.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, I.G)({}),
      i = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      r = a.useCallback(e => (0, s.jsx)(Z, {
        userId: e.value,
        avatarSize: o.AvatarSizes.SIZE_24
      }), []);
    return (0, s.jsx)(o.Select, {
      className: O.select,
      renderOptionLabel: r,
      renderOptionValue: e => {
        let [t] = e;
        return r(t)
      },
      serialize: e => e,
      select: e => {
        n(e), c.default.track(b.rMx.FAMILY_CENTER_ACTION, {
          action: h.YC.SelectTeen
        })
      },
      isSelected: e => e === t,
      options: i
    })
  },
  B = e => {
    let {
      userId: t
    } = e, n = (0, g.Z)(), a = (0, p.mq)(h.ne.ACTIVE), i = (0, E.Qr)(!!n), r = (0, p.Rd)(i);
    return n && 1 !== a.length ? (0, s.jsx)(D, {}) : (0, s.jsx)(Z, {
      userId: t,
      subText: r
    })
  };
t.Z = e => {
  let {
    user: t
  } = e, n = Array.from(h.tx.entries()), a = (0, R.kE)(), i = (0, E.t3)(), r = (0, p.Rd)(i);
  return (0, s.jsxs)("div", {
    className: O.container,
    children: [(0, s.jsxs)("div", {
      className: O.connectedCounter,
      children: [(0, s.jsx)(v, {}), (0, s.jsx)(P, {})]
    }), (0, s.jsxs)("div", {
      className: O.card,
      children: [(0, s.jsx)("div", {
        className: O.header,
        children: (0, s.jsx)(B, {
          userId: t.id
        })
      }), (0, s.jsxs)("div", {
        className: O.content,
        children: [(0, s.jsx)("div", {
          className: O.activityCounterRow,
          children: n.map(e => {
            let [t, n] = e;
            return (0, s.jsx)(A.Z, {
              displayType: t,
              header: n.tooltipHeader()
            }, "counter-".concat(t))
          })
        }), (0, s.jsx)("div", {
          className: O.activityOverview,
          children: a ? n.map(e => {
            let [t] = e;
            return (0, s.jsx)(L, {
              displayType: t
            }, "".concat(t, "-list"))
          }) : (0, s.jsx)(M.Z, {
            className: O.emptyActivity,
            text: null != r ? r : ""
          })
        })]
      })]
    })]
  })
}