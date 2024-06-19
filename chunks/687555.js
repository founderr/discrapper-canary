t(47120), t(653041);
var a = t(735250),
  i = t(470079),
  r = t(120356),
  l = t.n(r),
  n = t(512722),
  C = t.n(n),
  o = t(597312),
  d = t(442837),
  c = t(481060),
  x = t(232567),
  _ = t(461745),
  p = t(434650),
  h = t(210887),
  u = t(51144),
  f = t(281494),
  R = t(276444),
  E = t(529840),
  j = t(689938),
  L = t(953027),
  m = t(724531),
  g = t(99713),
  S = t(334202),
  A = t(7234);

function M(e) {
  let {
    numOfSelectedUsers: s
  } = e, t = (0, d.e7)([R.Z], () => R.Z.getReferralsRemaining());
  C()(null != t, "Referrals remaining should not be null");
  let i = t - s,
    r = j.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
      numReferrals: t
    });
  return i < t && (r = j.Z.Messages.REFERRAL_PROGRAM_SELECT_MORE_FRIEND.format({
    numFriends: i
  }), 1 === i && (r = j.Z.Messages.REFERRAL_PROGRAM_SELECT_ONE_MORE_FRIEND), 0 === i && (r = j.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECTION_HIT_LIMIT.format({
    numReferrals: t
  }))), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: L.title,
      children: [(0, a.jsx)(O, {
        className: L.titleImage
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: j.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
      })]
    }), (0, a.jsx)(c.Text, {
      className: L.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: r
    })]
  })
}

function F() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: L.title,
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: j.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS_NO_RESULTS_HEADER
      })
    }), (0, a.jsx)(c.Text, {
      className: L.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: j.Z.Messages.REFERRAL_PROGRAM_SELCT_FRIENDS_NO_RESULTS_SUBHEADER
    })]
  })
}

function N() {
  return (0, a.jsx)("div", {
    className: L.erroredContent,
    children: (0, a.jsx)(c.Image, {
      src: S,
      width: 225,
      height: 160
    })
  })
}

function v(e) {
  let {
    onClose: s
  } = e;
  return (0, a.jsxs)("div", {
    className: L.erroredContainer,
    children: [(0, a.jsxs)("div", {
      className: l()(L.erroredHeader, L.headerSeparator),
      children: [(0, a.jsx)("div", {
        className: L.title,
        children: (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: j.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER
        })
      }), (0, a.jsx)(c.Text, {
        className: L.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: j.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER
      })]
    }), (0, a.jsx)("div", {
      className: L.erroredContent,
      children: (0, a.jsx)(c.Image, {
        src: g,
        width: 178,
        height: 190
      })
    }), (0, a.jsx)("div", {
      className: l()(L.footer, L.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: L.submit,
        onClick: () => s(),
        children: j.Z.Messages.REFERRAL_PROGRAM_CLOSE
      })
    })]
  })
}

function Z(e) {
  let {
    onShare: s
  } = e, t = (0, d.e7)([R.Z], () => R.Z.getRecipientStatus()), [r, n] = i.useState([]), [C, o] = i.useState(new Set);
  return i.useEffect(() => {
    (async () => {
      let e = [];
      for (let [s, a] of t)
        if (a === f.Fe.PENDING) {
          let t = await (0, x.PR)(s);
          e.push(t)
        } n(e)
    })()
  }, [t]), (0, a.jsxs)("div", {
    className: L.remindContainer,
    children: [(0, a.jsxs)("div", {
      className: l()(L.remindHeader, L.headerSeparator),
      children: [(0, a.jsxs)("div", {
        className: L.title,
        children: [(0, a.jsx)(O, {
          className: L.titleImage
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: j.Z.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS
        })]
      }), (0, a.jsx)(c.Text, {
        className: L.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: j.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_HEADER
      })]
    }), (0, a.jsx)("div", {
      className: L.list,
      children: r.map(e => (0, a.jsx)(E.Z, {
        user: e,
        checked: C.has(e),
        onChange: (e, s) => {
          o(t => {
            let a = new Set(t);
            return s ? a.add(e) : a.delete(e), a
          })
        }
      }, e.id))
    }), (0, a.jsx)("div", {
      className: l()(L.footer, L.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: L.submit,
        onClick: () => s([...C.values()]),
        children: j.Z.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}

function O(e) {
  let {
    className: s
  } = e;
  return "light" === (0, d.e7)([h.Z], () => h.Z.theme) ? (0, a.jsx)(c.Image, {
    className: s,
    src: m,
    width: 55,
    height: 38
  }) : (0, a.jsx)(c.Image, {
    className: s,
    src: A,
    width: 55,
    height: 38
  })
}
s.Z = function(e) {
  let {
    onClose: s,
    onShare: t
  } = e, r = (0, d.e7)([R.Z], () => R.Z.getReferralsRemaining()), n = (0, d.e7)([R.Z], () => R.Z.getRecipientStatus()), [h, m] = i.useState(0), [g, S] = i.useState(""), [A, O] = i.useState([]), [y, I] = i.useState(!1), [w, G] = i.useState(!1), U = function(e, s) {
    let [t, a] = i.useState(e);
    return i.useEffect(() => {
      let t = setTimeout(() => {
        a(e)
      }, s);
      return () => {
        clearTimeout(t)
      }
    }, [e, s]), t
  }(g, 400), [T, D] = i.useState(new Map), [B, P] = i.useState(new Map);
  i.useEffect(() => {
    k(0)
  }, [U]), C()(null != r, "Referrals remaining should not be null");
  let k = async e => {
    try {
      if (null == e) return;
      I(!0);
      let s = [...B.values()];
      for (let [e, t] of n)
        if (t === f.Fe.PENDING && !B.has(e)) {
          let t = await (0, x.PR)(e);
          s.push(t)
        } let t = await (0, f.iF)(e, U);
      O(a => {
        let i = t.users.filter(e => !T.has(e.id));
        return (s = s.filter(e => !T.has(e.id)), 0 === e) ? [...T.values(), ...s.values(), ...i] : [...a, ...i]
      }), P(e => {
        let t = new Map(e);
        for (let e of s) t.set(e.id, e);
        return t
      }), m(t.nextIndex)
    } catch (e) {
      G(!0)
    } finally {
      I(!1)
    }
  }, H = (0, p.O)(e => {
    e && !y && k(h)
  });
  if (w) return (0, a.jsx)(v, {
    onClose: s
  });
  if (0 === r) return (0, a.jsx)(Z, {
    onShare: t
  });
  let b = U.length > 0 && 0 === A.length;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: l()(L.header, L.headerSeparator),
      children: [b ? (0, a.jsx)(F, {}) : (0, a.jsx)(M, {
        numOfSelectedUsers: T.size
      }), (0, a.jsx)(_.ZP, {
        className: L.searchbar,
        size: _.ZP.Sizes.MEDIUM,
        tags: [...T.values()].map(e => u.ZP.getName(e)),
        placeholder: j.Z.Messages.REFERRAL_PROGRAM_SEARCH_FRIENDS,
        query: g,
        onRemoveTag: e => {
          D(s => {
            let t = [...s.values()][e],
              a = new Map(s);
            return a.delete(t.id), a
          })
        },
        onQueryChange: S,
        onClear: () => S("")
      })]
    }), b ? (0, a.jsx)(N, {}) : (0, a.jsxs)(o.w0, {
      className: L.list,
      children: [A.map(e => (0, a.jsx)(E.Z, {
        disabled: [...T.values()].filter(e => !B.has(e.id)).length >= r && !T.has(e.id) && !B.has(e.id),
        checked: T.has(e.id),
        user: e,
        onChange: (e, s) => {
          D(t => {
            let a = new Map(t);
            return s ? a.set(e.id, e) : a.delete(e.id), a
          })
        }
      }, e.id)), y && (0, a.jsx)(c.Spinner, {}), (0, a.jsx)("div", {
        ref: H
      })]
    }), (0, a.jsx)("div", {
      className: l()(L.footer, L.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: L.submit,
        disabled: 0 === T.size && !b,
        onClick: () => {
          if (b) {
            s();
            return
          }
          t([...T.values()])
        },
        children: b ? j.Z.Messages.REFERRAL_PROGRAM_CLOSE : j.Z.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}