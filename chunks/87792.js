s(47120);
var n = s(735250),
  a = s(470079),
  i = s(512722),
  r = s.n(i),
  l = s(399606),
  o = s(481060),
  c = s(626135),
  E = s(709054),
  _ = s(914788),
  u = s(546791),
  d = s(259756),
  T = s(785681),
  I = s(985002),
  R = s(858719),
  A = s(780985),
  N = s(880257),
  C = s(631885),
  g = s(240351),
  m = s(792258),
  M = s(657825),
  S = s(198952),
  p = s(329242),
  h = s(895328),
  f = s(292352),
  O = s(981631),
  x = s(689938),
  L = s(270285);

function P() {
  let e = a.useCallback(() => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("66462")]).then(s.bind(s, 756226));
      return t => (0, n.jsx)(e, {
        ...t
      })
    })
  }, []);
  return (0, n.jsx)(o.Clickable, {
    className: L.tooltip,
    onClick: e,
    children: (0, n.jsx)(o.CircleInformationIcon, {
      size: "custom",
      color: "currentColor",
      className: L.icon,
      width: 15,
      height: 15
    })
  })
}

function v(e) {
  let {
    displayType: t
  } = e, s = a.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(x.Z.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, o.ToastType.FAILURE))
  }, []), i = (0, N.Z)(), l = (0, R.ws)(t), c = (0, R.C7)(t), {
    loadMore: _,
    isMoreLoading: T
  } = (0, I.G)({
    onError: s
  }), A = f.tx.get(t), [C, g] = a.useState(f.iB), S = (0, d.Xi)({
    location: "family_center_activity_section_web"
  }), p = a.useCallback(() => {
    g(e => e + f.iB), _(t)
  }, [t, _]);
  r()(A, "No text for action type");
  let h = A.sectionHeader(c),
    O = a.useCallback(e => {
      let {
        row: t
      } = e, s = l[t];
      return (0, u.iB)(s) ? (0, n.jsx)(M.Z, {
        userId: s.entity_id,
        timestamp: E.default.extractTimestamp(s.event_id),
        timestampFormatter: A.timestampFormatter
      }, s.event_id) : (0, u.f0)(s) ? (0, n.jsx)(m.Z, {
        guildId: s.entity_id
      }, s.event_id) : void 0
    }, [l, A.timestampFormatter]),
    P = a.useCallback(() => (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(o.Text, {
        className: L.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: h
      }), void 0 !== A.sectionDescription ? (0, n.jsx)(o.Text, {
        className: L.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: A.sectionDescription(null != i && i, S)
      }) : null]
    }), [h, A, i, S]);
  if (0 === l.length) return null;
  let v = l.slice(0, C);
  return (0, n.jsxs)("div", {
    className: L.actionSection,
    children: [P(), (0, n.jsx)("div", {
      className: L.actions,
      style: {
        maxHeight: 65 * v.length
      },
      children: v.map((e, t) => O({
        row: t
      }))
    }), v.length !== c ? (0, n.jsx)(o.Clickable, {
      className: L.loadMoreBar,
      onClick: p,
      role: "button",
      children: T ? (0, n.jsx)(o.Spinner, {
        type: o.Spinner.Type.PULSING_ELLIPSIS,
        className: L.spinner
      }) : (0, n.jsx)(o.Text, {
        className: L.loadMore,
        variant: "text-sm/bold",
        children: x.Z.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
          pageSize: Math.min(c - v.length, f.iB)
        })
      })
    }) : null]
  })
}
let Z = () => {
    let e = (0, N.Z)(),
      t = (0, C.mq)(f.ne.ACTIVE),
      s = (0, T.o)(x.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
        activeLinks: t.length
      }), x.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
      a = (0, u.Qr)(!!e),
      i = (0, C.Rd)(a);
    return e && t.length > 1 ? (0, n.jsx)(o.Text, {
      variant: "eyebrow",
      children: i
    }) : (0, n.jsxs)(n.Fragment, {
      children: [e ? null : (0, n.jsx)(o.EyeIcon, {
        size: "xs",
        color: "currentColor",
        className: L.icon
      }), (0, n.jsx)(o.Text, {
        variant: "eyebrow",
        children: s
      })]
    })
  },
  b = e => {
    let {
      userId: t,
      subText: s,
      avatarSize: a = o.AvatarSizes.SIZE_40
    } = e, i = (0, A.I)(t);
    return void 0 === i ? null : (0, n.jsxs)("div", {
      className: L.accountRow,
      children: [(0, n.jsx)(S.r, {
        user: i,
        avatarSize: a
      }), (0, n.jsxs)("div", {
        className: L.headerText,
        children: [(0, n.jsx)(p.Z, {
          user: i
        }), void 0 !== s ? (0, n.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: s
        }) : null]
      })]
    })
  },
  D = () => {
    let e = (0, C.mq)(f.ne.ACTIVE),
      t = (0, l.e7)([_.Z], () => _.Z.getSelectedTeenId()),
      {
        selectTeenUser: s
      } = (0, I.G)({}),
      i = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      r = a.useCallback(e => (0, n.jsx)(b, {
        userId: e.value,
        avatarSize: o.AvatarSizes.SIZE_24
      }), []);
    return (0, n.jsx)(o.Select, {
      className: L.select,
      renderOptionLabel: r,
      renderOptionValue: e => {
        let [t] = e;
        return r(t)
      },
      serialize: e => e,
      select: e => {
        s(e), c.default.track(O.rMx.FAMILY_CENTER_ACTION, {
          action: f.YC.SelectTeen
        })
      },
      isSelected: e => e === t,
      options: i
    })
  },
  U = e => {
    let {
      userId: t
    } = e, s = (0, N.Z)(), a = (0, C.mq)(f.ne.ACTIVE), i = (0, u.Qr)(!!s), r = (0, C.Rd)(i);
    return s && 1 !== a.length ? (0, n.jsx)(D, {}) : (0, n.jsx)(b, {
      userId: t,
      subText: r
    })
  };
t.Z = e => {
  let {
    user: t
  } = e, s = Array.from(f.tx.entries()), a = (0, R.kE)(), i = (0, u.t3)(), r = (0, C.Rd)(i);
  return (0, n.jsxs)("div", {
    className: L.container,
    children: [(0, n.jsxs)("div", {
      className: L.connectedCounter,
      children: [(0, n.jsx)(Z, {}), (0, n.jsx)(P, {})]
    }), (0, n.jsxs)("div", {
      className: L.card,
      children: [(0, n.jsx)("div", {
        className: L.header,
        children: (0, n.jsx)(U, {
          userId: t.id
        })
      }), (0, n.jsxs)("div", {
        className: L.content,
        children: [(0, n.jsx)("div", {
          className: L.activityCounterRow,
          children: s.map(e => {
            let [t, s] = e;
            return (0, n.jsx)(g.Z, {
              displayType: t,
              header: s.tooltipHeader()
            }, "counter-".concat(t))
          })
        }), (0, n.jsx)("div", {
          className: L.activityOverview,
          children: a ? s.map(e => {
            let [t] = e;
            return (0, n.jsx)(v, {
              displayType: t
            }, "".concat(t, "-list"))
          }) : (0, n.jsx)(h.Z, {
            className: L.emptyActivity,
            text: null != r ? r : ""
          })
        })]
      })]
    })]
  })
}