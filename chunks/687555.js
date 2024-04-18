"use strict";
s.r(t), s("47120"), s("653041");
var i = s("735250"),
  a = s("470079"),
  l = s("120356"),
  r = s.n(l),
  C = s("512722"),
  n = s.n(C),
  d = s("597312"),
  o = s("442837"),
  c = s("481060"),
  f = s("232567"),
  u = s("434650"),
  x = s("332475"),
  h = s("6048"),
  p = s("281494"),
  _ = s("276444"),
  j = s("529840"),
  L = s("689938"),
  m = s("415687"),
  R = s("99713"),
  E = s("334202"),
  g = s("7234");

function S() {
  let e = (0, o.useStateFromStores)([_.default], () => _.default.getReferralsRemaining());
  return n()(null != e, "Referrals remaining should not be null"), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: m.title,
      children: [(0, i.jsx)(x.default, {
        className: m.titleImage,
        src: g,
        width: 55,
        height: 38
      }), (0, i.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: L.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
      })]
    }), (0, i.jsx)(c.Text, {
      className: m.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
        numReferrals: e
      })
    })]
  })
}

function v() {
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: m.title,
      children: (0, i.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: L.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS_NO_RESULTS_HEADER
      })
    }), (0, i.jsx)(c.Text, {
      className: m.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: L.default.Messages.REFERRAL_PROGRAM_SELCT_FRIENDS_NO_RESULTS_SUBHEADER
    })]
  })
}

function y() {
  return (0, i.jsx)("div", {
    className: m.erroredContent,
    children: (0, i.jsx)(x.default, {
      src: E,
      width: 225,
      height: 160
    })
  })
}

function A(e) {
  let {
    onClose: t
  } = e;
  return (0, i.jsxs)("div", {
    className: m.erroredContainer,
    children: [(0, i.jsxs)("div", {
      className: r()(m.erroredHeader, m.headerSeparator),
      children: [(0, i.jsx)("div", {
        className: m.title,
        children: (0, i.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER
        })
      }), (0, i.jsx)(c.Text, {
        className: m.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER
      })]
    }), (0, i.jsx)("div", {
      className: m.erroredContent,
      children: (0, i.jsx)(x.default, {
        src: R,
        width: 178,
        height: 190
      })
    }), (0, i.jsx)("div", {
      className: r()(m.footer, m.footerSeparator),
      children: (0, i.jsx)(c.Button, {
        className: m.submit,
        onClick: () => t(),
        children: L.default.Messages.REFERRAL_PROGRAM_CLOSE
      })
    })]
  })
}
t.default = function(e) {
  let {
    onClose: t,
    onShare: s
  } = e, l = (0, o.useStateFromStores)([_.default], () => _.default.getReferralsRemaining()), C = (0, o.useStateFromStores)([_.default], () => _.default.getRecipientStatus()), [x, R] = a.useState(0), [E, g] = a.useState(""), [M, F] = a.useState([]), [O, w] = a.useState(!1), [N, B] = a.useState(!1), U = function(e, t) {
    let [s, i] = a.useState(e);
    return a.useEffect(() => {
      let s = setTimeout(() => {
        i(e)
      }, t);
      return () => {
        clearTimeout(s)
      }
    }, [e, t]), s
  }(E, 400), [I, G] = a.useState(new Map), [T, k] = a.useState(new Map);
  a.useEffect(() => {
    b(0)
  }, [U]), n()(null != l, "Referrals remaining should not be null");
  let b = async e => {
    try {
      if (null == e) return;
      w(!0);
      let t = [...T.values()];
      for (let [e, s] of C)
        if (s === p.ReferralOfferStatus.PENDING && !T.has(e)) {
          let s = await (0, f.getUser)(e);
          t.push(s)
        } let s = await (0, p.fetchReferralEligibleUsers)(e, U);
      F(i => {
        let a = s.users.filter(e => !I.has(e.id));
        return (t = t.filter(e => !I.has(e.id)), 0 === e) ? [...I.values(), ...t.values(), ...a] : [...i, ...a]
      }), k(e => {
        let s = new Map(e);
        for (let e of t) s.set(e.id, e);
        return s
      }), R(s.nextIndex)
    } catch (e) {
      B(!0)
    } finally {
      w(!1)
    }
  }, Z = (0, u.useIsVisible)(e => {
    e && !O && b(x)
  });
  if (N) return (0, i.jsx)(A, {
    onClose: t
  });
  let D = U.length > 0 && 0 === M.length;
  return (0, i.jsxs)("div", {
    className: m.container,
    children: [(0, i.jsxs)("div", {
      className: r()(m.header, m.headerSeparator),
      children: [D ? (0, i.jsx)(v, {}) : (0, i.jsx)(S, {}), (0, i.jsx)(h.default, {
        className: m.searchbar,
        query: E,
        onChange: g,
        onClear: () => g("")
      })]
    }), D ? (0, i.jsx)(y, {}) : (0, i.jsxs)(d.ScrollerAuto, {
      className: m.list,
      children: [M.map(e => (0, i.jsx)(j.default, {
        disabled: [...I.values()].filter(e => !T.has(e.id)).length >= l && !I.has(e.id) && !T.has(e.id),
        checked: I.has(e.id),
        user: e,
        onChange: (e, t) => {
          G(s => {
            let i = new Map(s);
            return t ? i.set(e.id, e) : i.delete(e.id), i
          })
        }
      }, e.id)), O && (0, i.jsx)(c.Spinner, {}), (0, i.jsx)("div", {
        ref: Z
      })]
    }), (0, i.jsx)("div", {
      className: r()(m.footer, m.footerSeparator),
      children: (0, i.jsx)(c.Button, {
        className: m.submit,
        disabled: 0 === I.size && !D,
        onClick: () => {
          if (D) {
            t();
            return
          }
          s([...I.values()])
        },
        children: D ? L.default.Messages.REFERRAL_PROGRAM_CLOSE : L.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}