var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(454585),
    o = n(273744),
    l = n(330902);
t.Z = (e) => {
    let {
            node: { info: t }
        } = e,
        n = i.useRef(
            s.Z.reactParserFor({
                ...s.Z.defaultRules,
                link: o.s
            })
        );
    return null == t
        ? null
        : (0, r.jsx)(a.HelpMessage, {
              className: l.infoBox,
              messageType: a.HelpMessageTypes.INFO,
              children: n.current(t)
          });
};
