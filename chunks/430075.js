t.r(n),
    t.d(n, {
        default: function () {
            return L;
        }
    });
var i = t(200651);
t(192379);
var E = t(442837),
    r = t(481060),
    I = t(703656),
    s = t(314897),
    _ = t(103879),
    a = t(236289),
    o = t(518560),
    c = t(800530),
    S = t(981631),
    N = t(388032),
    l = t(33869);
function u() {
    return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.DANGER,
        className: l.nagbar,
        children: [
            (0, i.jsx)(r.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: N.intl.string(N.t['MG+Bzc'])
            }),
            (0, i.jsx)(r.NoticeButtonAnchor, {
                href: c.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: N.intl.string(N.t['9JceHB'])
                })
            })
        ]
    });
}
function A(e) {
    let {} = e,
        n = (0, E.e7)([a.Z], () => a.Z.getAgeCheckStatus()),
        t = () => {
            (0, _._w)();
        };
    return n === c.oE.NONE
        ? null
        : n === c.oE.SUCCESS
          ? (0, i.jsx)(r.HelpMessage, {
                messageType: r.HelpMessageTypes.POSITIVE,
                children: N.intl.string(N.t.maZDLy)
            })
          : n === c.oE.ERROR
            ? (0, i.jsx)(r.HelpMessage, {
                  messageType: r.HelpMessageTypes.ERROR,
                  children: N.intl.string(N.t['4sILBQ'])
              })
            : n === c.oE.FAILURE
              ? (0, i.jsx)(r.HelpMessage, {
                    messageType: r.HelpMessageTypes.ERROR,
                    children: (0, i.jsxs)('div', {
                        className: l.helpMessageContent,
                        children: [
                            N.intl.string(N.t['40R63t']),
                            (0, i.jsx)(r.Clickable, {
                                className: l.clickableIcon,
                                onClick: t,
                                children: (0, i.jsx)(r.RefreshIcon, {})
                            })
                        ]
                    })
                })
              : n === c.oE.LOADING
                ? (0, i.jsx)(r.HelpMessage, {
                      messageType: r.HelpMessageTypes.INFO,
                      children: N.intl.string(N.t['nhhy/f'])
                  })
                : (0, i.jsx)(r.HelpMessage, {
                      messageType: r.HelpMessageTypes.INFO,
                      children: (0, i.jsxs)('div', {
                          className: l.helpMessageContent,
                          children: [
                              N.intl.string(N.t['nhhy/f']),
                              (0, i.jsx)(r.Clickable, {
                                  className: l.clickableIcon,
                                  onClick: t,
                                  children: (0, i.jsx)(r.RefreshIcon, {})
                              })
                          ]
                      })
                  });
}
function T() {
    return (0, i.jsxs)('div', {
        className: l.pageContainer,
        children: [(0, i.jsx)(A, {}), (0, i.jsx)(o.Z, {})]
    });
}
function L() {
    return (
        null == (0, E.e7)([s.default], () => s.default.getSuspendedUserToken()) && (0, I.uL)(S.Z5c.LOGIN),
        (0, i.jsxs)('div', {
            className: l.container,
            children: [(0, i.jsx)(u, {}), (0, i.jsx)(T, {})]
        })
    );
}
