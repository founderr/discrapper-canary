"use strict";
t.r(s), t("47120"), t("653041");
var a = t("735250"),
  r = t("470079"),
  i = t("120356"),
  l = t.n(i),
  n = t("512722"),
  C = t.n(n),
  o = t("597312"),
  d = t("442837"),
  c = t("481060"),
  u = t("232567"),
  f = t("434650"),
  x = t("210887"),
  h = t("332475"),
  p = t("6048"),
  _ = t("281494"),
  j = t("276444"),
  L = t("529840"),
  R = t("689938"),
  m = t("415687"),
  E = t("724531"),
  g = t("99713"),
  S = t("334202"),
  v = t("7234");

function A() {
  let e = (0, d.useStateFromStores)([j.default], () => j.default.getReferralsRemaining());
  return C()(null != e, "Referrals remaining should not be null"), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: m.title,
      children: [(0, a.jsx)(O, {
        className: m.titleImage
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: R.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
      })]
    }), (0, a.jsx)(c.Text, {
      className: m.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: R.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
        numReferrals: e
      })
    })]
  })
}

function F() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: m.title,
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: R.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS_NO_RESULTS_HEADER
      })
    }), (0, a.jsx)(c.Text, {
      className: m.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: R.default.Messages.REFERRAL_PROGRAM_SELCT_FRIENDS_NO_RESULTS_SUBHEADER
    })]
  })
}

function N() {
  return (0, a.jsx)("div", {
    className: m.erroredContent,
    children: (0, a.jsx)(h.default, {
      src: S,
      width: 225,
      height: 160
    })
  })
}

function M(e) {
  let {
    onClose: s
  } = e;
  return (0, a.jsxs)("div", {
    className: m.erroredContainer,
    children: [(0, a.jsxs)("div", {
      className: l()(m.erroredHeader, m.headerSeparator),
      children: [(0, a.jsx)("div", {
        className: m.title,
        children: (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: R.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER
        })
      }), (0, a.jsx)(c.Text, {
        className: m.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: R.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER
      })]
    }), (0, a.jsx)("div", {
      className: m.erroredContent,
      children: (0, a.jsx)(h.default, {
        src: g,
        width: 178,
        height: 190
      })
    }), (0, a.jsx)("div", {
      className: l()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        onClick: () => s(),
        children: R.default.Messages.REFERRAL_PROGRAM_CLOSE
      })
    })]
  })
}

function y(e) {
  let {
    onShare: s
  } = e, t = (0, d.useStateFromStores)([j.default], () => j.default.getRecipientStatus()), [i, n] = r.useState([]), [C, o] = r.useState(new Set);
  return r.useEffect(() => {
    (async () => {
      let e = [];
      for (let [s, a] of t)
        if (a === _.ReferralOfferStatus.PENDING) {
          let t = await (0, u.getUser)(s);
          e.push(t)
        } n(e)
    })()
  }, [t]), (0, a.jsxs)("div", {
    className: m.remindContainer,
    children: [(0, a.jsxs)("div", {
      className: l()(m.remindHeader, m.headerSeparator),
      children: [(0, a.jsxs)("div", {
        className: m.title,
        children: [(0, a.jsx)(O, {
          className: m.titleImage
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: R.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS
        })]
      }), (0, a.jsx)(c.Text, {
        className: m.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: R.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_HEADER
      })]
    }), (0, a.jsx)("div", {
      className: m.list,
      children: i.map(e => (0, a.jsx)(L.default, {
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
      className: l()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        onClick: () => s([...C.values()]),
        children: R.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}

function O(e) {
  let {
    className: s
  } = e;
  return "light" === (0, d.useStateFromStores)([x.default], () => x.default.theme) ? (0, a.jsx)(h.default, {
    className: s,
    src: E,
    width: 55,
    height: 38
  }) : (0, a.jsx)(h.default, {
    className: s,
    src: v,
    width: 55,
    height: 38
  })
}
s.default = function(e) {
  let {
    onClose: s,
    onShare: t
  } = e, i = (0, d.useStateFromStores)([j.default], () => j.default.getReferralsRemaining()), n = (0, d.useStateFromStores)([j.default], () => j.default.getRecipientStatus()), [x, h] = r.useState(0), [E, g] = r.useState(""), [S, v] = r.useState([]), [O, w] = r.useState(!1), [U, B] = r.useState(!1), G = function(e, s) {
    let [t, a] = r.useState(e);
    return r.useEffect(() => {
      let t = setTimeout(() => {
        a(e)
      }, s);
      return () => {
        clearTimeout(t)
      }
    }, [e, s]), t
  }(E, 400), [I, T] = r.useState(new Map), [D, k] = r.useState(new Map);
  r.useEffect(() => {
    b(0)
  }, [G]), C()(null != i, "Referrals remaining should not be null");
  let b = async e => {
    try {
      if (null == e) return;
      w(!0);
      let s = [...D.values()];
      for (let [e, t] of n)
        if (t === _.ReferralOfferStatus.PENDING && !D.has(e)) {
          let t = await (0, u.getUser)(e);
          s.push(t)
        } let t = await (0, _.fetchReferralEligibleUsers)(e, G);
      v(a => {
        let r = t.users.filter(e => !I.has(e.id));
        return (s = s.filter(e => !I.has(e.id)), 0 === e) ? [...I.values(), ...s.values(), ...r] : [...a, ...r]
      }), k(e => {
        let t = new Map(e);
        for (let e of s) t.set(e.id, e);
        return t
      }), h(t.nextIndex)
    } catch (e) {
      B(!0)
    } finally {
      w(!1)
    }
  }, H = (0, f.useIsVisible)(e => {
    e && !O && b(x)
  });
  if (U) return (0, a.jsx)(M, {
    onClose: s
  });
  if (0 === i) return (0, a.jsx)(y, {
    onShare: t
  });
  let Z = G.length > 0 && 0 === S.length;
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsxs)("div", {
      className: l()(m.header, m.headerSeparator),
      children: [Z ? (0, a.jsx)(F, {}) : (0, a.jsx)(A, {}), (0, a.jsx)(p.default, {
        className: m.searchbar,
        query: E,
        onChange: g,
        onClear: () => g("")
      })]
    }), Z ? (0, a.jsx)(N, {}) : (0, a.jsxs)(o.ScrollerAuto, {
      className: m.list,
      children: [S.map(e => (0, a.jsx)(L.default, {
        disabled: [...I.values()].filter(e => !D.has(e.id)).length >= i && !I.has(e.id) && !D.has(e.id),
        checked: I.has(e.id),
        user: e,
        onChange: (e, s) => {
          T(t => {
            let a = new Map(t);
            return s ? a.set(e.id, e) : a.delete(e.id), a
          })
        }
      }, e.id)), O && (0, a.jsx)(c.Spinner, {}), (0, a.jsx)("div", {
        ref: H
      })]
    }), (0, a.jsx)("div", {
      className: l()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        disabled: 0 === I.size && !Z,
        onClick: () => {
          if (Z) {
            s();
            return
          }
          t([...I.values()])
        },
        children: Z ? R.default.Messages.REFERRAL_PROGRAM_CLOSE : R.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}