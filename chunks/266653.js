s.r(t),
    s.d(t, {
        default: function () {
            return N;
        }
    }),
    s(47120);
var n,
    r,
    o = s(200651),
    i = s(192379),
    a = s(990547),
    l = s(442837),
    d = s(481060),
    c = s(570140),
    u = s(213609),
    h = s(594174),
    f = s(726745),
    p = s(475062),
    m = s(760213),
    g = s(71509),
    _ = s(981631),
    x = s(388032),
    C = s(574023);
((r = n || (n = {}))[(r.MANAGE_ACCOUNTS = 0)] = 'MANAGE_ACCOUNTS'), (r[(r.LOGIN = 1)] = 'LOGIN');
let b = {
    0: d.ModalSize.SMALL,
    1: d.ModalSize.DYNAMIC
};
function N(e) {
    let { transitionState: t, onClose: s } = e,
        [n, r] = i.useState(0),
        { currentUser: N, multiAccountUsers: A } = (0, l.cj)([h.default, f.Z], () => ({
            currentUser: h.default.getCurrentUser(),
            multiAccountUsers: f.Z.getUsers()
        })),
        [R, T] = i.useState(!1),
        [I, v] = i.useState(_.lds),
        [S, w] = i.useState(null);
    i.useEffect(() => {
        if (R)
            w(
                (0, o.jsx)(d.HelpMessage, {
                    messageType: d.HelpMessageTypes.ERROR,
                    className: C.infoMessage,
                    children: x.intl.format(x.t.HAuRSE, { maxNumAccounts: g.$H })
                })
            ),
                v(_.lds);
        else if (null != I) {
            let e = h.default.getUser(I);
            null != e &&
                w(
                    (0, o.jsx)(d.HelpMessage, {
                        messageType: d.HelpMessageTypes.POSITIVE,
                        className: C.infoMessage,
                        children: x.intl.format(x.t['09qidX'], { username: e.username })
                    })
                ),
                T(!1);
        }
    }, [I, R]),
        i.useEffect(() => {
            A.length < g.$H && T(!1);
        }, [A]),
        (0, u.Z)({
            type: a.ImpressionTypes.MODAL,
            name: 0 === n ? a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : a.ImpressionNames.USER_LOGIN
        });
    let E = null;
    return (
        0 === n
            ? (E = (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsx)(d.ModalHeader, {
                          separator: !1,
                          children: (0, o.jsxs)('div', {
                              className: C.header,
                              children: [
                                  (0, o.jsx)(d.Heading, {
                                      variant: 'heading-xl/semibold',
                                      color: 'header-primary',
                                      children: x.intl.string(x.t.WbFpq6)
                                  }),
                                  (0, o.jsx)(d.Text, {
                                      className: C.subheaderText,
                                      color: 'header-secondary',
                                      variant: 'text-md/normal',
                                      children: x.intl.string(x.t['+1Uk3d'])
                                  })
                              ]
                          })
                      }),
                      (0, o.jsxs)(d.ModalContent, {
                          children: [
                              S,
                              (0, o.jsx)(m.Z, {
                                  actionText: x.intl.string(x.t.Wf421N),
                                  onAction: (e, t) => {
                                      switch (e) {
                                          case m.W.LOGIN_REQUIRED:
                                              r(1);
                                              break;
                                          case m.W.SWITCHED:
                                              s();
                                              break;
                                          case m.W.REMOVED:
                                              t === (null == N ? void 0 : N.id) && s(), v(t);
                                      }
                                  }
                              }),
                              (0, o.jsx)('div', {
                                  className: C.actions,
                                  children: (0, o.jsx)(d.Button, {
                                      look: d.Button.Looks.LINK,
                                      color: d.Button.Colors.PRIMARY,
                                      onClick: () => {
                                          if (A.length >= g.$H) {
                                              T(!0);
                                              return;
                                          }
                                          r(1);
                                      },
                                      size: d.Button.Sizes.MEDIUM,
                                      children: (0, o.jsx)(d.Text, {
                                          variant: 'text-sm/semibold',
                                          children: x.intl.string(x.t['9g2mqa'])
                                      })
                                  })
                              })
                          ]
                      })
                  ]
              }))
            : 1 === n &&
              (E = (0, o.jsx)(p.Z, {
                  onClose: () => {
                      c.Z.dispatch({ type: 'CLEAR_AUTHENTICATION_ERRORS' }), r(0);
                  }
              })),
        (0, o.jsx)(d.ModalRoot, {
            className: C.modal,
            transitionState: t,
            size: b[n],
            'aria-label': x.intl.string(x.t.WbFpq6),
            children: (0, o.jsx)(d.Sequencer, {
                step: n,
                steps: [0, 1],
                children: E
            })
        })
    );
}
